/**
 * kanjokamoku — 自動仕訳判定エンジン
 *
 * 取引先名から勘定科目を自動推定する。
 * 完全一致 → 部分一致 → デフォルト（雑費）の優先順位で判定。
 *
 * @license MIT
 */

import { ALL_RULES, ClassificationRule } from "./rules/index";
import { Account, ACCOUNTS } from "./accounts";

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
}

/**
 * 取引先名から勘定科目を推定する
 *
 * @param vendor - 取引先名
 * @param amount - 金額（飲食の接待/会議費判定に使用）
 * @param headcount - 人数（飲食の5,000円/人ルール判定に使用、省略可）
 * @param customRules - カスタムルール（事務所独自のルール、優先適用）
 */
export function classify(
  vendor: string,
  amount?: number,
  headcount?: number,
  customRules?: ClassificationRule[]
): ClassificationResult {
  const rules = customRules ? [...customRules, ...ALL_RULES] : ALL_RULES;
  const defaultAccount = ACCOUNTS.find((a) => a.code === "523")!; // 雑費
  const defaultCounter = ACCOUNTS.find((a) => a.code === "102")!; // 普通預金

  // 1. 完全一致
  const exactMatch = rules.find(
    (r) => r.matchType === "exact" && r.pattern === vendor
  );
  if (exactMatch) {
    return buildResult(exactMatch, "exact");
  }

  // 2. 部分一致
  const containsMatch = rules.find(
    (r) => r.matchType === "contains" && vendor.includes(r.pattern)
  );
  if (containsMatch) {
    let result = buildResult(containsMatch, "contains");

    // 飲食系で金額ベースの判定（接待交際費 vs 会議費）
    if (
      amount &&
      (containsMatch.accountCode === "514" ||
        containsMatch.accountCode === "515")
    ) {
      result = applyDiningRule(result, amount, headcount);
    }

    return result;
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
    return buildResult(regexMatch, "regex");
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
 * 飲食の接待交際費/会議費を金額ベースで判定
 *
 * 税法上の基準:
 * - 1人あたり5,000円以下の飲食 → 会議費（損金算入可）
 * - 1人あたり5,000円超の飲食 → 接待交際費（損金算入制限あり）
 * - 人数不明の場合は総額10,000円を目安に判定
 */
function applyDiningRule(
  result: ClassificationResult,
  amount: number,
  headcount?: number
): ClassificationResult {
  if (headcount && headcount > 0) {
    const perPerson = amount / headcount;
    if (perPerson <= 5000) {
      return {
        ...result,
        account: ACCOUNTS.find((a) => a.code === "515")!, // 会議費
        method: "amount_based",
        confidence: 0.90,
        note: `1人あたり${Math.round(perPerson).toLocaleString()}円（${headcount}名）→ 5,000円以下のため会議費`,
      };
    } else {
      return {
        ...result,
        account: ACCOUNTS.find((a) => a.code === "514")!, // 接待交際費
        method: "amount_based",
        confidence: 0.90,
        note: `1人あたり${Math.round(perPerson).toLocaleString()}円（${headcount}名）→ 5,000円超のため接待交際費`,
      };
    }
  }

  // 人数不明の場合: 総額ベースの簡易判定
  if (amount <= 5000) {
    return {
      ...result,
      account: ACCOUNTS.find((a) => a.code === "515")!,
      confidence: result.confidence * 0.8,
      note: "人数不明。総額5,000円以下のため会議費と推定（要確認）",
    };
  } else if (amount <= 10000) {
    return {
      ...result,
      confidence: result.confidence * 0.6,
      note: "人数不明。5,000〜10,000円のため接待交際費/会議費の判断が必要（要確認）",
    };
  }

  return result;
}

function buildResult(
  rule: ClassificationRule,
  method: ClassificationResult["method"]
): ClassificationResult {
  const account = ACCOUNTS.find((a) => a.code === rule.accountCode);
  const counterAccount = ACCOUNTS.find(
    (a) => a.code === rule.counterAccountCode
  );
  const defaultAccount = ACCOUNTS.find((a) => a.code === "523")!;
  const defaultCounter = ACCOUNTS.find((a) => a.code === "102")!;

  return {
    account: account ?? defaultAccount,
    counterAccount: counterAccount ?? defaultCounter,
    matchedRule: rule,
    confidence: rule.confidence,
    method,
    note: rule.note,
  };
}
