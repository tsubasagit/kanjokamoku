// This file is part of kanjokamoku — MIT License
// https://github.com/tsubasagit/kanjokamoku

import type { ClassificationRule } from "./types";

/**
 * リース料 → リース料(531)
 * 自動車リース・OA機器リースを分類する。
 * counterAccount: 普通預金(102) — 口座振替が一般的
 */
export const LEASING_RULES: ClassificationRule[] = [
  // ── 自動車リース ──
  {
    name: "オリックス自動車",
    pattern: "オリックス自動車",
    matchType: "contains",
    accountCode: "531",
    accountName: "リース料",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
    note: "カーリース",
  },
  {
    name: "トヨタファイナンス",
    pattern: "トヨタファイナンス",
    matchType: "contains",
    accountCode: "531",
    accountName: "リース料",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.9,
    note: "トヨタ系カーリース — ローンの場合は別科目",
  },
  {
    name: "ホンダファイナンス",
    pattern: "ホンダファイナンス",
    matchType: "contains",
    accountCode: "531",
    accountName: "リース料",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.9,
    note: "ホンダ系カーリース — ローンの場合は別科目",
  },
  {
    name: "日産フィナンシャル",
    pattern: "日産フィナンシャル",
    matchType: "contains",
    accountCode: "531",
    accountName: "リース料",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.9,
    note: "日産系カーリース — ローンの場合は別科目",
  },
  {
    name: "リースナブル",
    pattern: "リースナブル",
    matchType: "contains",
    accountCode: "531",
    accountName: "リース料",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
    note: "格安カーリース",
  },

  // ── OA機器リース ──
  {
    name: "リコーリース",
    pattern: "リコーリース",
    matchType: "contains",
    accountCode: "531",
    accountName: "リース料",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
    note: "複合機・OA機器リース",
  },
  {
    name: "キヤノンファイナンス",
    pattern: "キヤノンファイナンス",
    matchType: "contains",
    accountCode: "531",
    accountName: "リース料",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
    note: "キヤノン系リース・ファイナンス",
  },
  {
    name: "富士フイルムビジネスイノベーション",
    pattern: "富士フイルムビジネス",
    matchType: "contains",
    accountCode: "531",
    accountName: "リース料",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
    note: "旧富士ゼロックス",
  },
  {
    name: "大塚商会",
    pattern: "大塚商会",
    matchType: "contains",
    accountCode: "531",
    accountName: "リース料",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.85,
    note: "OA機器リース・IT機器 — 購入の場合は消耗品費/固定資産",
  },
];
