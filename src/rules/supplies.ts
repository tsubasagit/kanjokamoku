// This file is part of kanjokamoku — MIT License
// https://github.com/tsubasagit/kanjokamoku

import type { ClassificationRule } from "./types";

// ============================================================
// 消耗品・事務用品 → 消耗品費(513)
// ============================================================

export const SUPPLIES_RULES: ClassificationRule[] = [
  // ----------------------------------------------------------
  // 家電量販店 → 消耗品費(513), クレジットカード(203)
  // ----------------------------------------------------------
  { name: "ヨドバシカメラ", pattern: "ヨドバシ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ビックカメラ", pattern: "ビックカメラ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ケーズデンキ", pattern: "ケーズデンキ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "エディオン", pattern: "エディオン", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ノジマ", pattern: "ノジマ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ソフマップ", pattern: "ソフマップ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "PCデポ", pattern: "PCデポ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ドスパラ", pattern: "ドスパラ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ツクモ", pattern: "ツクモ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "パソコン工房", pattern: "パソコン工房", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "Apple Store", pattern: "Apple Store", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.80, note: "高額品は工具器具備品(150)の可能性あり", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },

  // ----------------------------------------------------------
  // 100円ショップ → 消耗品費(513), 現金(101)
  // ----------------------------------------------------------
  { name: "ダイソー", pattern: "ダイソー", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "セリア", pattern: "セリア", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "キャンドゥ", pattern: "キャンドゥ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ワッツ", pattern: "ワッツ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },

  // ----------------------------------------------------------
  // ホームセンター → 消耗品費(513), クレジットカード(203)
  // ----------------------------------------------------------
  { name: "カインズ", pattern: "カインズ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "コーナン", pattern: "コーナン", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "コメリ", pattern: "コメリ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "DCM", pattern: "DCM", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "島忠", pattern: "島忠", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ジョイフル本田", pattern: "ジョイフル本田", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ビバホーム", pattern: "ビバホーム", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },

  // ----------------------------------------------------------
  // 事務用品・業務用通販 → 消耗品費(513), クレジットカード(203)
  // ----------------------------------------------------------
  { name: "アスクル", pattern: "アスクル", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "カウネット", pattern: "カウネット", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "たのめーる", pattern: "たのめーる", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "コクヨ", pattern: "コクヨ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "モノタロウ", pattern: "モノタロウ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },

  // ----------------------------------------------------------
  // 家具・インテリア → 消耗品費(513), クレジットカード(203)
  // ----------------------------------------------------------
  { name: "ニトリ", pattern: "ニトリ", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.80, note: "高額品は工具器具備品(150)の可能性あり", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "IKEA", pattern: "IKEA", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.80, note: "高額品は工具器具備品(150)の可能性あり", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "無印良品", pattern: "無印良品", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.80, note: "食品購入の場合は会議費/福利厚生費", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },

  // ----------------------------------------------------------
  // オンラインモール → 消耗品費(513), クレジットカード(203)
  // ----------------------------------------------------------
  { name: "Amazon(物品)", pattern: "Amazon", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.60, note: "Amazonは書籍(516)・SaaS(512)等の可能性あり。品目で要判断", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "楽天市場", pattern: "楽天市場", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.60, note: "品目により科目が異なる可能性あり", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "Yahoo!ショッピング", pattern: "Yahoo!ショッピング", matchType: "contains", accountCode: "513", accountName: "消耗品費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.60, note: "品目により科目が異なる可能性あり", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
];
