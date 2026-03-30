// This file is part of kanjokamoku — MIT License
// https://github.com/tsubasagit/kanjokamoku

import type { ClassificationRule } from "./types";

// ============================================================
// 手数料 → 支払手数料(517)
// ============================================================

export const FEE_RULES: ClassificationRule[] = [
  // ----------------------------------------------------------
  // 会計SaaS → 支払手数料(517), クレジットカード(203)
  // ----------------------------------------------------------
  { name: "freee", pattern: "freee", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "マネーフォワード", pattern: "マネーフォワード", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "弥生", pattern: "弥生", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, note: "弥生会計・やよいの青色申告等" },

  // ----------------------------------------------------------
  // 決済サービス → 支払手数料(517), クレジットカード(203)
  // ----------------------------------------------------------
  { name: "Stripe", pattern: "Stripe", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "PayPal", pattern: "PayPal", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "Square", pattern: "Square", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "GMOペイメント", pattern: "GMOペイメント", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },
  { name: "PAY.JP", pattern: "PAY.JP", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90 },

  // ----------------------------------------------------------
  // 銀行手数料 → 支払手数料(517), 普通預金(102)
  // ----------------------------------------------------------
  { name: "銀行振込手数料", pattern: "振込手数料", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.95 },
  { name: "三菱UFJ銀行", pattern: "三菱UFJ", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.75, note: "手数料以外の取引（預金利息等）の可能性あり" },
  { name: "みずほ銀行", pattern: "みずほ銀行", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.75, note: "手数料以外の取引（預金利息等）の可能性あり" },
  { name: "三井住友銀行", pattern: "三井住友銀行", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.75, note: "手数料以外の取引（預金利息等）の可能性あり" },
  { name: "ゆうちょ銀行", pattern: "ゆうちょ", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.75, note: "手数料以外の取引（預金利息等）の可能性あり" },
  { name: "りそな銀行", pattern: "りそな", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "102", counterAccountName: "普通預金", confidence: 0.75, note: "手数料以外の取引（預金利息等）の可能性あり" },

  // ----------------------------------------------------------
  // クラウドファンディング → 支払手数料(517), クレジットカード(203)
  // ----------------------------------------------------------
  { name: "Campfire", pattern: "Campfire", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.80, note: "プラットフォーム手数料。支援金自体は別科目" },
  { name: "Makuake", pattern: "Makuake", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.80, note: "プラットフォーム手数料。支援金自体は別科目" },
  { name: "READYFOR", pattern: "READYFOR", matchType: "contains", accountCode: "517", accountName: "支払手数料", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.80, note: "プラットフォーム手数料。支援金自体は別科目" },
];
