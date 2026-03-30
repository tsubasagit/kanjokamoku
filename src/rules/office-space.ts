// This file is part of kanjokamoku — MIT License
// https://github.com/tsubasagit/kanjokamoku

import type { ClassificationRule } from "./types";

/**
 * オフィススペース関連費用
 * コワーキング・レンタルオフィス → 地代家賃(519)
 * 貸会議室 → 会議費(515)
 * counterAccount: 普通預金(102)
 */
export const OFFICE_SPACE_RULES: ClassificationRule[] = [
  // ── コワーキングスペース → 地代家賃(519) ──
  {
    name: "WeWork",
    pattern: "WeWork",
    matchType: "contains",
    accountCode: "519",
    accountName: "地代家賃",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
  },
  {
    name: "Regus",
    pattern: "Regus",
    matchType: "contains",
    accountCode: "519",
    accountName: "地代家賃",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
    note: "IWG Regus",
  },
  {
    name: "SPACES",
    pattern: "SPACES",
    matchType: "contains",
    accountCode: "519",
    accountName: "地代家賃",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.8,
    note: "IWG SPACES — 一般的な単語のため confidence 低め",
  },
  {
    name: "BIZcomfort",
    pattern: "BIZcomfort",
    matchType: "contains",
    accountCode: "519",
    accountName: "地代家賃",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
  },
  {
    name: "いいオフィス",
    pattern: "いいオフィス",
    matchType: "contains",
    accountCode: "519",
    accountName: "地代家賃",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
  },
  {
    name: "fabbit",
    pattern: "fabbit",
    matchType: "contains",
    accountCode: "519",
    accountName: "地代家賃",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.9,
  },
  {
    name: "PLUG AND PLAY",
    pattern: "PLUG AND PLAY",
    matchType: "contains",
    accountCode: "519",
    accountName: "地代家賃",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.9,
    note: "Plug and Play アクセラレーター/コワーキング",
  },

  // ── レンタルオフィス → 地代家賃(519) ──
  {
    name: "Servcorp",
    pattern: "Servcorp",
    matchType: "contains",
    accountCode: "519",
    accountName: "地代家賃",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
    note: "サーブコープ レンタルオフィス",
  },
  {
    name: "TKP",
    pattern: "TKP",
    matchType: "contains",
    accountCode: "519",
    accountName: "地代家賃",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.85,
    note: "ティーケーピー — 貸会議室利用の場合は会議費(515)",
  },
  {
    name: "日本リージャス",
    pattern: "リージャス",
    matchType: "contains",
    accountCode: "519",
    accountName: "地代家賃",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
    note: "IWG日本リージャス",
  },

  // ── 貸会議室 → 会議費(515) ──
  {
    name: "SPACEMARKET",
    pattern: "SPACEMARKET",
    matchType: "contains",
    accountCode: "515",
    accountName: "会議費",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.85,
    note: "スペースマーケット — 利用目的により科目が変わる場合あり",
  },
  {
    name: "インスタベース",
    pattern: "インスタベース",
    matchType: "contains",
    accountCode: "515",
    accountName: "会議費",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.85,
    note: "レンタルスペース予約 — 利用目的により科目が変わる場合あり",
  },
];
