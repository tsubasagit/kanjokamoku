// This file is part of kanjokamoku — MIT License
// https://github.com/tsubasagit/kanjokamoku

import type { ClassificationRule } from "./types";

/**
 * コンビニエンスストア → 消耗品費(513) デフォルト
 * 購入内容により勘定科目が変わるため confidence は低め。
 * counterAccount: 現金(101)
 */
export const CONVENIENCE_RULES: ClassificationRule[] = [
  {
    name: "セブン-イレブン",
    pattern: "セブン-イレブン|セブンイレブン|7-ELEVEN",
    matchType: "regex",
    accountCode: "513",
    accountName: "消耗品費",
    counterAccountCode: "101",
    counterAccountName: "現金",
    confidence: 0.5,
    note: "購入内容により科目が変わる（飲食→会議費、文具→消耗品費、切手→荷造運賃）",
    taxNotes: ["購入内容により消費税率・科目が変わる。食料品テイクアウト=8%軽減、日用品=10%、切手=非課税（郵便局扱い時）、収入印紙=不課税"],
  },
  {
    name: "ファミリーマート",
    pattern: "ファミリーマート|FamilyMart",
    matchType: "regex",
    accountCode: "513",
    accountName: "消耗品費",
    counterAccountCode: "101",
    counterAccountName: "現金",
    confidence: 0.5,
    note: "購入内容により科目が変わる（飲食→会議費、文具→消耗品費、切手→荷造運賃）",
    taxNotes: ["購入内容により消費税率・科目が変わる。食料品テイクアウト=8%軽減、日用品=10%、切手=非課税（郵便局扱い時）、収入印紙=不課税"],
  },
  {
    name: "ローソン",
    pattern: "ローソン|LAWSON",
    matchType: "regex",
    accountCode: "513",
    accountName: "消耗品費",
    counterAccountCode: "101",
    counterAccountName: "現金",
    confidence: 0.5,
    note: "購入内容により科目が変わる（飲食→会議費、文具→消耗品費、切手→荷造運賃）",
    taxNotes: ["購入内容により消費税率・科目が変わる。食料品テイクアウト=8%軽減、日用品=10%、切手=非課税（郵便局扱い時）、収入印紙=不課税"],
  },
  {
    name: "ミニストップ",
    pattern: "ミニストップ|MINISTOP",
    matchType: "regex",
    accountCode: "513",
    accountName: "消耗品費",
    counterAccountCode: "101",
    counterAccountName: "現金",
    confidence: 0.5,
    note: "購入内容により科目が変わる（飲食→会議費、文具→消耗品費、切手→荷造運賃）",
    taxNotes: ["購入内容により消費税率・科目が変わる。食料品テイクアウト=8%軽減、日用品=10%、切手=非課税（郵便局扱い時）、収入印紙=不課税"],
  },
  {
    name: "デイリーヤマザキ",
    pattern: "デイリーヤマザキ",
    matchType: "contains",
    accountCode: "513",
    accountName: "消耗品費",
    counterAccountCode: "101",
    counterAccountName: "現金",
    confidence: 0.5,
    note: "購入内容により科目が変わる（飲食→会議費、文具→消耗品費、切手→荷造運賃）",
    taxNotes: ["購入内容により消費税率・科目が変わる。食料品テイクアウト=8%軽減、日用品=10%、切手=非課税（郵便局扱い時）、収入印紙=不課税"],
  },
  {
    name: "NewDays",
    pattern: "NewDays",
    matchType: "contains",
    accountCode: "513",
    accountName: "消耗品費",
    counterAccountCode: "101",
    counterAccountName: "現金",
    confidence: 0.5,
    note: "購入内容により科目が変わる（飲食→会議費、文具→消耗品費、切手→荷造運賃）",
    taxNotes: ["購入内容により消費税率・科目が変わる。食料品テイクアウト=8%軽減、日用品=10%、切手=非課税（郵便局扱い時）、収入印紙=不課税"],
  },
];
