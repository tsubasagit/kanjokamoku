// This file is part of kanjokamoku — MIT License
// https://github.com/tsubasagit/kanjokamoku

import type { ClassificationRule } from "./types";

/**
 * メンテナンス・清掃・警備・修繕
 * 清掃サービス → 外注費(518)
 * 警備サービス → 支払手数料(517)
 * 修理・修繕 → 修繕費(532)
 * counterAccount: 普通預金(102)
 */
export const MAINTENANCE_RULES: ClassificationRule[] = [
  // ── 清掃サービス → 外注費(518) ──
  {
    name: "ダスキン",
    pattern: "ダスキン",
    matchType: "contains",
    accountCode: "518",
    accountName: "外注費",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.9,
    note: "清掃・害虫駆除等",
  },
  {
    name: "ベアーズ",
    pattern: "ベアーズ",
    matchType: "contains",
    accountCode: "518",
    accountName: "外注費",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.9,
    note: "家事代行・ハウスクリーニング",
  },
  {
    name: "CaSy",
    pattern: "CaSy",
    matchType: "contains",
    accountCode: "518",
    accountName: "外注費",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.9,
    note: "家事代行サービス",
  },
  {
    name: "おそうじ本舗",
    pattern: "おそうじ本舗",
    matchType: "contains",
    accountCode: "518",
    accountName: "外注費",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
    note: "ハウスクリーニング",
  },

  // ── 警備サービス → 支払手数料(517) ──
  {
    name: "SECOM",
    pattern: "SECOM",
    matchType: "contains",
    accountCode: "517",
    accountName: "支払手数料",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
    note: "セコム セキュリティサービス",
  },
  {
    name: "ALSOK",
    pattern: "ALSOK",
    matchType: "contains",
    accountCode: "517",
    accountName: "支払手数料",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
    note: "綜合警備保障",
  },
  {
    name: "セントラル警備保障",
    pattern: "セントラル警備",
    matchType: "contains",
    accountCode: "517",
    accountName: "支払手数料",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
    note: "CSP セントラル警備保障",
  },

  // ── 修理・修繕 → 修繕費(532) ──
  {
    name: "修理",
    pattern: "修理",
    matchType: "contains",
    accountCode: "532",
    accountName: "修繕費",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.8,
    note: "修理の内容により資本的支出（資産計上）となる場合あり",
  },
  {
    name: "リペア",
    pattern: "リペア",
    matchType: "contains",
    accountCode: "532",
    accountName: "修繕費",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.8,
    note: "修繕・補修",
  },
  {
    name: "メンテナンス",
    pattern: "メンテナンス",
    matchType: "contains",
    accountCode: "532",
    accountName: "修繕費",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.75,
    note: "保守点検 — ITサービスのメンテナンスと混同しないよう注意",
  },
];
