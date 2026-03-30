// kanjokamoku — 全ルール統合エクスポート
// https://github.com/tsubasagit/kanjokamoku — MIT License

export type { ClassificationRule } from "./types";

export { SAAS_RULES } from "./saas";
export { TELECOM_RULES } from "./telecom";
export { TRANSPORT_RULES } from "./transport";
export { DINING_RULES } from "./dining";
export { SUPPLIES_RULES } from "./supplies";
export { FEE_RULES } from "./fees";
export { UTILITY_RULES } from "./utilities";
export { LEARNING_RULES } from "./learning";
export { SHIPPING_RULES } from "./shipping";
export { ACCOMMODATION_RULES } from "./accommodation";
export { ADVERTISING_RULES } from "./advertising";
export { INSURANCE_RULES } from "./insurance";
export { OFFICE_SPACE_RULES } from "./office-space";
export { WEB_INFRA_RULES } from "./web-infra";
export { PROFESSIONAL_RULES } from "./professional";
export { TAX_FEE_RULES } from "./tax-fees";
export { MAINTENANCE_RULES } from "./maintenance";
export { LEASING_RULES } from "./leasing";
export { CONVENIENCE_RULES } from "./convenience";
export { SUBSCRIPTION_RULES } from "./subscription";
export { WELFARE_RULES } from "./welfare";

import { SAAS_RULES } from "./saas";
import { TELECOM_RULES } from "./telecom";
import { TRANSPORT_RULES } from "./transport";
import { DINING_RULES } from "./dining";
import { SUPPLIES_RULES } from "./supplies";
import { FEE_RULES } from "./fees";
import { UTILITY_RULES } from "./utilities";
import { LEARNING_RULES } from "./learning";
import { SHIPPING_RULES } from "./shipping";
import { ACCOMMODATION_RULES } from "./accommodation";
import { ADVERTISING_RULES } from "./advertising";
import { INSURANCE_RULES } from "./insurance";
import { OFFICE_SPACE_RULES } from "./office-space";
import { WEB_INFRA_RULES } from "./web-infra";
import { PROFESSIONAL_RULES } from "./professional";
import { TAX_FEE_RULES } from "./tax-fees";
import { MAINTENANCE_RULES } from "./maintenance";
import { LEASING_RULES } from "./leasing";
import { CONVENIENCE_RULES } from "./convenience";
import { SUBSCRIPTION_RULES } from "./subscription";
import { WELFARE_RULES } from "./welfare";

/** 全カテゴリの判定ルールを統合した配列 */
export const ALL_RULES = [
  ...SAAS_RULES,
  ...TELECOM_RULES,
  ...TRANSPORT_RULES,
  ...DINING_RULES,
  ...SUPPLIES_RULES,
  ...FEE_RULES,
  ...UTILITY_RULES,
  ...LEARNING_RULES,
  ...SHIPPING_RULES,
  ...ACCOMMODATION_RULES,
  ...ADVERTISING_RULES,
  ...INSURANCE_RULES,
  ...OFFICE_SPACE_RULES,
  ...WEB_INFRA_RULES,
  ...PROFESSIONAL_RULES,
  ...TAX_FEE_RULES,
  ...MAINTENANCE_RULES,
  ...LEASING_RULES,
  ...CONVENIENCE_RULES,
  ...SUBSCRIPTION_RULES,
  ...WELFARE_RULES,
];
