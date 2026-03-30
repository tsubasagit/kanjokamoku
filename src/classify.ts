/**
 * kanjokamoku — 自動仕訳判定エンジン
 *
 * 取引先名から勘定科目を自動推定する。
 * 完全一致 → 部分一致 → 正規表現 → デフォルト（雑費）の優先順位で判定。
 *
 * @license MIT
 */

import { ALL_RULES } from "./rules/index";
import type { ClassificationRule, ConsumptionTaxClass, WithholdingInfo } from "./rules/types";
import { Account, ACCOUNTS } from "./accounts";
import { TAX_CONSTANTS } from "./tax-constants";

export interface ClassificationResult {
  /** 推定された勘定科目 */
  account: Account;
  /** 貸方科目 */
  counterAccount: Account;
  /** マッチしたルール（なければnull） */
  matchedRule: ClassificationRule | null;
  /** 信頼度 0.0〜1.0 */
  confidence: number;
  /** 判定方法 */
  method: "exact" | "contains" | "regex" | "amount_based" | "default";
  /** 備考・警告 */
  note?: string;

  // ── 税務プロフェッショナル向け ──

  /** 消費税区分 */
  consumptionTaxClass?: ConsumptionTaxClass;
  /** 適格請求書（インボイス）が必要か */
  invoiceRequired?: boolean;
  /** 源泉徴収情報 */
  withholding?: WithholdingInfo;
  /** 接待交際費の損金算入に関する注記 */
  entertainmentExpenseNote?: string;
  /** 経費按分の注記 */
  expenseAllocationNote?: string;
  /** 税務上の要注意事項 */
  taxNotes?: string[];
}

/**
 * 取引先名から勘定科目を推定する
 *
 * @param vendor - 取引先名
 * @param amount - 金額（飲食の接待/会議費判定に使用）
 * @param headcount - 人数（飲食の1人あたり金額ルール判定に使用、省略可）
 * @param customRules - カスタムルール（事務所独自のルール、優先適用）
 */
export function classify(
  vendor: string,
  amount?: number,
  headcount?: number,
  customRules?: ClassificationRule[]
): ClassificationResult {
  const rules = customRules ? [...customRules, ...ALL_RULES] : ALL_RULES;
  const defaultAccount = ACCOUNTS.find((a) => a.code === "523")!;
  const defaultCounter = ACCOUNTS.find((a) => a.code === "102")!;

  // 1. 完全一致
  const exactMatch = rules.find(
    (r) => r.matchType === "exact" && r.pattern === vendor
  );
  if (exactMatch) {
    return buildResult(exactMatch, "exact", amount, headcount);
  }

  // 2. 部分一致
  const containsMatch = rules.find(
    (r) => r.matchType === "contains" && vendor.includes(r.pattern)
  );
  if (containsMatch) {
    return buildResult(containsMatch, "contains", amount, headcount);
  }

  // 3. 正規表現
  const regexMatch = rules.find((r) => {
    if (r.matchType !== "regex") return false;
    try {
      return new RegExp(r.pattern).test(vendor);
    } catch {
      return false;
    }
  });
  if (regexMatch) {
    return buildResult(regexMatch, "regex", amount, headcount);
  }

  // 4. デフォルト（雑費）
  return {
    account: defaultAccount,
    counterAccount: defaultCounter,
    matchedRule: null,
    confidence: 0.1,
    method: "default",
    note: "ルールに一致する取引先が見つかりませんでした。手動で科目を設定してください。",
  };
}

/**
 * ルールからClassificationResultを構築する
 */
function buildResult(
  rule: ClassificationRule,
  method: ClassificationResult["method"],
  amount?: number,
  headcount?: number
): ClassificationResult {
  const account = ACCOUNTS.find((a) => a.code === rule.accountCode);
  const counterAccount = ACCOUNTS.find(
    (a) => a.code === rule.counterAccountCode
  );
  const defaultAccount = ACCOUNTS.find((a) => a.code === "523")!;
  const defaultCounter = ACCOUNTS.find((a) => a.code === "102")!;

  let result: ClassificationResult = {
    account: account ?? defaultAccount,
    counterAccount: counterAccount ?? defaultCounter,
    matchedRule: rule,
    confidence: rule.confidence,
    method,
    note: rule.note,
    consumptionTaxClass: rule.consumptionTaxClass,
    invoiceRequired: rule.invoiceRequired,
    withholding: rule.withholding,
    taxNotes: rule.taxNotes,
  };

  // 飲食系で金額ベースの判定（接待交際費 vs 会議費）
  if (
    amount &&
    (rule.accountCode === "514" || rule.accountCode === "515")
  ) {
    result = applyDiningRule(result, amount, headcount);
  }

  return result;
}

/**
 * 飲食の接待交際費/会議費を金額ベースで判定
 *
 * 2024年4月改正: 1人あたりの基準額が5,000円→10,000円に引上げ
 * - 1人あたり10,000円以下の飲食 → 会議費（損金算入可）
 * - 1人あたり10,000円超の飲食 → 接待交際費（損金算入制限あり）
 *
 * 適用要件（措法61の4③二）:
 * ① 飲食年月日 ② 参加した得意先等の氏名・名称・関係
 * ③ 参加人数 ④ 飲食費の金額 ⑤ 飲食店の名称・所在地
 */
function applyDiningRule(
  result: ClassificationResult,
  amount: number,
  headcount?: number
): ClassificationResult {
  const threshold = TAX_CONSTANTS.diningPerPersonThreshold; // 10,000円
  const baseTaxNotes = [
    `飲食費の除外基準: 1人あたり${threshold.toLocaleString()}円以下（措法61の4③二、2024年4月改正）`,
    "適用要件: ①飲食年月日 ②参加した得意先等の氏名・名称・関係 ③参加人数 ④飲食費の金額 ⑤飲食店の名称・所在地 の帳簿記載が必要",
    "社内飲食（役員・従業員のみ）は除外基準の対象外。全額交際費",
  ];

  if (headcount && headcount > 0) {
    const perPerson = amount / headcount;
    if (perPerson <= threshold) {
      return {
        ...result,
        account: ACCOUNTS.find((a) => a.code === "515")!,
        method: "amount_based",
        confidence: 0.90,
        consumptionTaxClass: "課税仕入10%",
        note: `1人あたり${Math.round(perPerson).toLocaleString()}円（${headcount}名）→ ${threshold.toLocaleString()}円以下のため会議費`,
        taxNotes: baseTaxNotes,
      };
    } else {
      return {
        ...result,
        account: ACCOUNTS.find((a) => a.code === "514")!,
        method: "amount_based",
        confidence: 0.90,
        consumptionTaxClass: "課税仕入10%",
        note: `1人あたり${Math.round(perPerson).toLocaleString()}円（${headcount}名）→ ${threshold.toLocaleString()}円超のため接待交際費`,
        entertainmentExpenseNote: `資本金1億円以下: 年${TAX_CONSTANTS.entertainmentDeductionLimit.toLocaleString()}円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）`,
        taxNotes: baseTaxNotes,
      };
    }
  }

  // 人数不明の場合: 総額ベースの簡易判定
  if (amount <= threshold) {
    return {
      ...result,
      account: ACCOUNTS.find((a) => a.code === "515")!,
      confidence: result.confidence * 0.8,
      consumptionTaxClass: "課税仕入10%",
      note: `人数不明。総額${threshold.toLocaleString()}円以下のため会議費と推定（要確認）`,
      taxNotes: [...baseTaxNotes, "人数を確認し、1人あたりの金額で最終判定してください"],
    };
  }

  return {
    ...result,
    consumptionTaxClass: "課税仕入10%",
    entertainmentExpenseNote: `資本金1億円以下: 年${TAX_CONSTANTS.entertainmentDeductionLimit.toLocaleString()}円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）`,
    taxNotes: baseTaxNotes,
  };
}
