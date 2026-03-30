/**
 * kanjokamoku — 日本の勘定科目マスタ & 自動判定ルール
 *
 * 中小企業・個人事業主・税理士向けの勘定科目自動判定OSSライブラリ。
 * 取引先名から勘定科目を自動推定し、仕訳の下書きを支援する。
 *
 * @license MIT
 * @author AppTalentHub Inc.
 * @see https://github.com/tsubasagit/kanjokamoku
 */

export { ACCOUNTS, getAccountByCode, getAccountByName, getExpenseAccounts } from "./accounts";
export type { Account } from "./accounts";

export { ALL_RULES, SAAS_RULES, TELECOM_RULES, TRANSPORT_RULES, DINING_RULES, SUPPLIES_RULES, FEE_RULES, UTILITY_RULES, LEARNING_RULES, SHIPPING_RULES } from "./rules";
export type { ClassificationRule } from "./rules";

export { classify } from "./classify";
export type { ClassificationResult } from "./classify";
