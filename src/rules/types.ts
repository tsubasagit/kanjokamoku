// kanjokamoku — 型定義
// https://github.com/tsubasagit/kanjokamoku — MIT License

/**
 * 消費税区分
 * 仕入税額控除・消費税申告に直結する分類。日本の実務で使われる正式名称を採用。
 */
export type ConsumptionTaxClass =
  | "課税仕入10%"       // 標準税率の課税仕入（大半の経費）
  | "課税仕入8%軽減"    // 軽減税率の課税仕入（食品テイクアウト・定期購読新聞）
  | "非課税仕入"        // 非課税取引（保険料・土地の賃料・利息等）消費税法別表第一
  | "不課税"            // 課税対象外（給与・租税公課・社会保険料等）
  | "輸出免税"          // 輸出取引（消費税法7条）
  ;

/**
 * 源泉徴収情報
 * 士業・フリーランスへの支払い時に必要。所得税法204条。
 */
export interface WithholdingInfo {
  /** 源泉徴収が必要か */
  required: boolean;
  /** 税率（復興特別所得税込み）。標準: 10.21% */
  rate?: number;
  /** 根拠条文・特記事項 */
  basis?: string;
}

/**
 * 自動仕訳判定ルール
 */
export interface ClassificationRule {
  /** ルール名（人間向け識別名） */
  name: string;
  /** マッチング対象のパターン */
  pattern: string;
  /** マッチング方法 */
  matchType: "exact" | "contains" | "regex";
  /** 借方勘定科目コード */
  accountCode: string;
  /** 借方勘定科目名 */
  accountName: string;
  /** 貸方勘定科目コード */
  counterAccountCode: string;
  /** 貸方勘定科目名 */
  counterAccountName: string;
  /** 信頼度 0.0〜1.0 */
  confidence: number;
  /** 消費税率の上書き（後方互換用） */
  taxRateOverride?: 8 | 10;
  /** 備考 */
  note?: string;

  // ── 税務プロフェッショナル向けフィールド ──

  /** 消費税区分（仕入税額控除の分類） */
  consumptionTaxClass?: ConsumptionTaxClass;
  /** 適格請求書（インボイス）が仕入税額控除に必要か */
  invoiceRequired?: boolean;
  /** 源泉徴収情報（士業・フリーランス等への支払い） */
  withholding?: WithholdingInfo;
  /** 経費按分が必要な場合の注記（自宅兼事務所等） */
  expenseAllocationNote?: string;
  /** 接待交際費の損金算入に関する注記 */
  entertainmentExpenseNote?: string;
  /** 税務上の要注意事項（複数記載可） */
  taxNotes?: string[];
}
