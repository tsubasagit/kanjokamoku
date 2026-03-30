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

export {
  ALL_RULES,
  SAAS_RULES, TELECOM_RULES, TRANSPORT_RULES, DINING_RULES,
  SUPPLIES_RULES, FEE_RULES, UTILITY_RULES, LEARNING_RULES, SHIPPING_RULES,
  ACCOMMODATION_RULES, ADVERTISING_RULES, INSURANCE_RULES,
  OFFICE_SPACE_RULES, WEB_INFRA_RULES, PROFESSIONAL_RULES,
  TAX_FEE_RULES, MAINTENANCE_RULES, LEASING_RULES,
  CONVENIENCE_RULES, SUBSCRIPTION_RULES, WELFARE_RULES,
} from "./rules/index";
export type { ClassificationRule } from "./rules/index";

export { classify } from "./classify";
export type { ClassificationResult } from "./classify";
