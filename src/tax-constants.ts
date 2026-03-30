/**
 * kanjokamoku — 税務定数
 *
 * 日本の税務実務で頻出する定数値。
 * ハードコーディングを避け、法改正時に一箇所で更新できるようにする。
 *
 * @license MIT
 */

export const TAX_CONSTANTS = {
  // ── 消費税 ──
  /** 標準税率 */
  standardTaxRate: 0.10,
  /** 軽減税率（食品テイクアウト・定期購読新聞） */
  reducedTaxRate: 0.08,

  // ── インボイス制度 ──
  /** インボイス制度 施行日 */
  invoiceSystemStartDate: "2023-10-01",
  /** 少額特例: この金額以下はインボイスなしで仕入税額控除可（税込） */
  invoiceSmallAmountThreshold: 10_000,
  /** 少額特例の適用期限 */
  invoiceSmallAmountDeadline: "2029-09-30",
  /** 経過措置: インボイスなしの場合の控除割合（2023-10〜2026-09） */
  invoiceTransitionRate1: 0.80,
  /** 経過措置: インボイスなしの場合の控除割合（2026-10〜2029-09） */
  invoiceTransitionRate2: 0.50,

  // ── 接待交際費 ──
  /** 中小法人（資本金1億円以下）の年間損金算入限度額 */
  entertainmentDeductionLimit: 8_000_000,
  /** 飲食費の1人あたり除外基準額（この金額以下なら交際費から除外可） */
  diningPerPersonThreshold: 10_000,
  /** 上記基準額の適用開始日（2024年4月改正で5,000→10,000円に引上げ） */
  diningThresholdEffectiveDate: "2024-04-01",
  /** 飲食費除外の旧基準額（2024年3月以前） */
  diningPerPersonThresholdOld: 5_000,

  // ── 源泉徴収 ──
  /** 標準源泉徴収税率（復興特別所得税込み） */
  standardWithholdingRate: 0.1021,
  /** 司法書士への支払い: 1回の支払額からこの金額を控除した残額に源泉徴収 */
  judicialScrivenerDeduction: 10_000,
  /** 100万円超の報酬に対する源泉徴収税率（復興特別所得税込み） */
  highAmountWithholdingRate: 0.2042,
  /** 高額源泉徴収の閾値 */
  highAmountThreshold: 1_000_000,

  // ── 減価償却 ──
  /** 少額減価償却資産の取得価額基準（全額即時償却可） */
  smallAssetThreshold: 100_000,
  /** 一括償却資産の上限（3年均等償却） */
  lumpSumDepreciationThreshold: 200_000,
  /** 中小企業の少額減価償却資産の特例上限 */
  smeSmallAssetThreshold: 300_000,
  /** 中小企業の少額減価償却資産の年間合計上限 */
  smeSmallAssetAnnualLimit: 3_000_000,
} as const;
