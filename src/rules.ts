/**
 * kanjokamoku — 取引先→勘定科目の自動判定ルール
 *
 * 一般的な取引先名から勘定科目を推定するためのルールセット。
 * 完全一致・部分一致・カテゴリ一致の3段階で判定する。
 *
 * @license MIT
 */

// ============================================================
// 判定ルール定義
// ============================================================

export interface ClassificationRule {
  /** ルール名（人間向け） */
  name: string;
  /** マッチング対象のパターン */
  pattern: string;
  /** マッチング方法 */
  matchType: "exact" | "contains" | "regex";
  /** 推定される勘定科目コード */
  accountCode: string;
  /** 推定される勘定科目名 */
  accountName: string;
  /** 貸方科目コード（デフォルト） */
  counterAccountCode: string;
  /** 貸方科目名 */
  counterAccountName: string;
  /** 信頼度 0.0〜1.0 */
  confidence: number;
  /** 消費税率の上書き（軽減税率対応） */
  taxRateOverride?: 8 | 10;
  /** 備考 */
  note?: string;
}

// ============================================================
// SaaS・クラウドサービス → 通信費
// ============================================================
export const SAAS_RULES: ClassificationRule[] = [
  { name: "AWS", pattern: "Amazon Web Services", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "AWS(略称)", pattern: "AWS", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "Google Cloud", pattern: "Google Cloud", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "Google Workspace", pattern: "Google Workspace", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "Microsoft Azure", pattern: "Azure", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "Microsoft 365", pattern: "Microsoft 365", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "Vercel", pattern: "Vercel", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "Firebase", pattern: "Firebase", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "Heroku", pattern: "Heroku", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "Slack", pattern: "Slack", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "Notion", pattern: "Notion", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "Zoom", pattern: "Zoom", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "GitHub", pattern: "GitHub", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "ChatGPT/OpenAI", pattern: "OpenAI", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "Anthropic(Claude)", pattern: "Anthropic", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "さくらインターネット", pattern: "さくらインターネット", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "エックスサーバー", pattern: "エックスサーバー", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
];

// ============================================================
// 通信キャリア → 通信費
// ============================================================
export const TELECOM_RULES: ClassificationRule[] = [
  { name: "NTTドコモ", pattern: "ドコモ", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.95 },
  { name: "KDDI/au", pattern: "KDDI", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.95 },
  { name: "ソフトバンク", pattern: "ソフトバンク", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.95 },
  { name: "NTT東日本", pattern: "NTT東日本", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.95 },
  { name: "NTT西日本", pattern: "NTT西日本", matchType: "contains", accountCode: "512", accountName: "通信費", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.95 },
];

// ============================================================
// 交通 → 旅費交通費
// ============================================================
export const TRANSPORT_RULES: ClassificationRule[] = [
  { name: "JR", pattern: "JR", matchType: "contains", accountCode: "511", accountName: "旅費交通費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "Suica/PASMO チャージ", pattern: "Suica", matchType: "contains", accountCode: "511", accountName: "旅費交通費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, note: "交通以外の利用（コンビニ等）の可能性あり" },
  { name: "タクシー（日本交通）", pattern: "日本交通", matchType: "contains", accountCode: "511", accountName: "旅費交通費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.95 },
  { name: "タクシー（一般）", pattern: "タクシー", matchType: "contains", accountCode: "511", accountName: "旅費交通費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.95 },
  { name: "Uber", pattern: "Uber", matchType: "contains", accountCode: "511", accountName: "旅費交通費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, note: "Uber Eatsの場合は会議費/福利厚生費" },
  { name: "ガソリンスタンド（ENEOS）", pattern: "ENEOS", matchType: "contains", accountCode: "511", accountName: "旅費交通費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "ガソリンスタンド（出光）", pattern: "出光", matchType: "contains", accountCode: "511", accountName: "旅費交通費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "ガソリンスタンド（コスモ）", pattern: "コスモ", matchType: "contains", accountCode: "511", accountName: "旅費交通費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "ニコニコステーション", pattern: "ニコニコステーション", matchType: "contains", accountCode: "511", accountName: "旅費交通費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "駐車場（Times）", pattern: "タイムズ", matchType: "contains", accountCode: "511", accountName: "旅費交通費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "ETC", pattern: "ETC", matchType: "contains", accountCode: "511", accountName: "旅費交通費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.95 },
  { name: "ANA", pattern: "ANA", matchType: "contains", accountCode: "511", accountName: "旅費交通費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "JAL", pattern: "JAL", matchType: "contains", accountCode: "511", accountName: "旅費交通費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
];

// ============================================================
// 飲食 → 会議費 or 接待交際費（金額で判定が必要）
// ============================================================
export const DINING_RULES: ClassificationRule[] = [
  { name: "スターバックス", pattern: "スターバックス", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, taxRateOverride: 8, note: "テイクアウト8%・店内10%。少額のため会議費が一般的" },
  { name: "ドトール", pattern: "ドトール", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, taxRateOverride: 8 },
  { name: "タリーズ", pattern: "タリーズ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, taxRateOverride: 8 },
  { name: "マクドナルド", pattern: "マクドナルド", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8 },
  { name: "ミスタードーナツ", pattern: "ミスタードーナツ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8 },
  { name: "道とん堀", pattern: "道とん堀", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額が大きい場合は接待交際費" },
];

// ============================================================
// 消耗品・事務用品 → 消耗品費
// ============================================================
export const SUPPLIES_RULES: ClassificationRule[] = [
  { name: "Amazon(物品)", pattern: "Amazon", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.60, note: "Amazonは書籍(516)・SaaS(512)等の可能性あり。品目で要判断" },
  { name: "ヨドバシカメラ", pattern: "ヨドバシ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85 },
  { name: "ビックカメラ", pattern: "ビックカメラ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85 },
  { name: "ダイソー", pattern: "ダイソー", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "コクヨ", pattern: "コクヨ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "モノタロウ", pattern: "モノタロウ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85 },
];

// ============================================================
// 決済・会計サービス → 支払手数料
// ============================================================
export const FEE_RULES: ClassificationRule[] = [
  { name: "freee", pattern: "freee", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "マネーフォワード", pattern: "マネーフォワード", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "Stripe", pattern: "Stripe", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "PayPal", pattern: "PayPal", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "銀行振込手数料", pattern: "振込手数料", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.95 },
];

// ============================================================
// 水道光熱費
// ============================================================
export const UTILITY_RULES: ClassificationRule[] = [
  { name: "東京電力", pattern: "東京電力", matchType: "contains", accountCode: "520", accountName: "水道光熱費", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.95 },
  { name: "関西電力", pattern: "関西電力", matchType: "contains", accountCode: "520", accountName: "水道光熱費", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.95 },
  { name: "東京ガス", pattern: "東京ガス", matchType: "contains", accountCode: "520", accountName: "水道光熱費", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.95 },
  { name: "水道局", pattern: "水道局", matchType: "contains", accountCode: "520", accountName: "水道光熱費", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.95 },
];

// ============================================================
// 書籍・学習 → 新聞図書費 / 研修費
// ============================================================
export const LEARNING_RULES: ClassificationRule[] = [
  { name: "紀伊國屋書店", pattern: "紀伊國屋", matchType: "contains", accountCode: "516", accountName: "新聞図書費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "丸善ジュンク堂", pattern: "ジュンク堂", matchType: "contains", accountCode: "516", accountName: "新聞図書費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "Kindle", pattern: "Kindle", matchType: "contains", accountCode: "516", accountName: "新聞図書費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "Udemy", pattern: "Udemy", matchType: "contains", accountCode: "527", accountName: "研修費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "Coursera", pattern: "Coursera", matchType: "contains", accountCode: "527", accountName: "研修費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
];

// ============================================================
// 郵便・配送 → 荷造運賃
// ============================================================
export const SHIPPING_RULES: ClassificationRule[] = [
  { name: "日本郵便", pattern: "日本郵便", matchType: "contains", accountCode: "533", accountName: "荷造運賃", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "ヤマト運輸", pattern: "ヤマト", matchType: "contains", accountCode: "533", accountName: "荷造運賃", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "佐川急便", pattern: "佐川", matchType: "contains", accountCode: "533", accountName: "荷造運賃", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "クリックポスト", pattern: "クリックポスト", matchType: "contains", accountCode: "533", accountName: "荷造運賃", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
];

// ============================================================
// 全ルール統合
// ============================================================
export const ALL_RULES: ClassificationRule[] = [
  ...SAAS_RULES,
  ...TELECOM_RULES,
  ...TRANSPORT_RULES,
  ...DINING_RULES,
  ...SUPPLIES_RULES,
  ...FEE_RULES,
  ...UTILITY_RULES,
  ...LEARNING_RULES,
  ...SHIPPING_RULES,
];
