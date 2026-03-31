// This file is part of kanjokamoku — MIT License
// https://github.com/tsubasagit/kanjokamoku

import type { ClassificationRule } from "./types";

// ============================================================
// 飲食 → 会議費(515) or 接待交際費(514)
// 一般ルール: カフェ・ファストフード → 会議費、レストラン・居酒屋 → 接待交際費
// ============================================================

export const DINING_RULES: ClassificationRule[] = [
  // ----------------------------------------------------------
  // カフェチェーン → 会議費(515)
  // ----------------------------------------------------------
  { name: "スターバックス", pattern: "スターバックス", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, note: "テイクアウト8%・店内10%。レシートの税率表記で確認", consumptionTaxClass: "課税仕入10%", taxNotes: ["テイクアウト8%・店内飲食10%。レシートの税率表記で確認が必要"], invoiceRequired: true },
  { name: "ドトール", pattern: "ドトール", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "タリーズ", pattern: "タリーズ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "コメダ珈琲", pattern: "コメダ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "サンマルクカフェ", pattern: "サンマルク", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "星乃珈琲", pattern: "星乃珈琲", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "PRONTO", pattern: "PRONTO", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "カフェ・ド・クリエ", pattern: "カフェ・ド・クリエ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ベローチェ", pattern: "ベローチェ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "エクセルシオール", pattern: "エクセルシオール", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },

  // ----------------------------------------------------------
  // ファストフード → 会議費(515), taxRateOverride: 8（テイクアウト想定）
  // ----------------------------------------------------------
  { name: "マクドナルド", pattern: "マクドナルド", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8, consumptionTaxClass: "課税仕入8%軽減", invoiceRequired: true, taxNotes: ["テイクアウト8%・店内飲食10%。レシートの税率表記で確認が必要"] },
  { name: "モスバーガー", pattern: "モスバーガー", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8, consumptionTaxClass: "課税仕入8%軽減", invoiceRequired: true, taxNotes: ["テイクアウト8%・店内飲食10%。レシートの税率表記で確認が必要"] },
  { name: "ロッテリア", pattern: "ロッテリア", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8, consumptionTaxClass: "課税仕入8%軽減", invoiceRequired: true, taxNotes: ["テイクアウト8%・店内飲食10%。レシートの税率表記で確認が必要"] },
  { name: "フレッシュネスバーガー", pattern: "フレッシュネス", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8, consumptionTaxClass: "課税仕入8%軽減", invoiceRequired: true, taxNotes: ["テイクアウト8%・店内飲食10%。レシートの税率表記で確認が必要"] },
  { name: "バーガーキング", pattern: "バーガーキング", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8, consumptionTaxClass: "課税仕入8%軽減", invoiceRequired: true, taxNotes: ["テイクアウト8%・店内飲食10%。レシートの税率表記で確認が必要"] },
  { name: "ケンタッキー", pattern: "ケンタッキー", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8, consumptionTaxClass: "課税仕入8%軽減", invoiceRequired: true, taxNotes: ["テイクアウト8%・店内飲食10%。レシートの税率表記で確認が必要"] },
  { name: "サブウェイ", pattern: "サブウェイ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8, consumptionTaxClass: "課税仕入8%軽減", invoiceRequired: true, taxNotes: ["テイクアウト8%・店内飲食10%。レシートの税率表記で確認が必要"] },

  // ----------------------------------------------------------
  // 牛丼・定食チェーン → 会議費(515)
  // ----------------------------------------------------------
  { name: "吉野家", pattern: "吉野家", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "松屋", pattern: "松屋", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "すき家", pattern: "すき家", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "なか卯", pattern: "なか卯", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "大戸屋", pattern: "大戸屋", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "やよい軒", pattern: "やよい軒", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "日高屋", pattern: "日高屋", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },

  // ----------------------------------------------------------
  // ラーメンチェーン → 会議費(515)
  // ----------------------------------------------------------
  { name: "一風堂", pattern: "一風堂", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "一蘭", pattern: "一蘭", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "天下一品", pattern: "天下一品", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "幸楽苑", pattern: "幸楽苑", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "リンガーハット", pattern: "リンガーハット", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },

  // ----------------------------------------------------------
  // カレーチェーン → 会議費(515)
  // ----------------------------------------------------------
  { name: "CoCo壱番屋", pattern: "CoCo壱番屋", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ゴーゴーカレー", pattern: "ゴーゴーカレー", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },

  // ----------------------------------------------------------
  // うどん・そばチェーン → 会議費(515)
  // ----------------------------------------------------------
  { name: "丸亀製麺", pattern: "丸亀製麺", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ゆで太郎", pattern: "ゆで太郎", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "富士そば", pattern: "富士そば", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, consumptionTaxClass: "課税仕入10%", invoiceRequired: true },

  // ----------------------------------------------------------
  // 回転寿司 → 接待交際費(514)
  // ----------------------------------------------------------
  { name: "スシロー", pattern: "スシロー", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.75, note: "回転寿司は金額次第で会議費の場合あり", consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "くら寿司", pattern: "くら寿司", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.75, note: "回転寿司は金額次第で会議費の場合あり", consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "かっぱ寿司", pattern: "かっぱ寿司", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.75, note: "回転寿司は金額次第で会議費の場合あり", consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "はま寿司", pattern: "はま寿司", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.75, note: "回転寿司は金額次第で会議費の場合あり", consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "銚子丸", pattern: "銚子丸", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.75, note: "回転寿司は金額次第で会議費の場合あり", consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },

  // ----------------------------------------------------------
  // 居酒屋チェーン → 接待交際費(514)
  // ----------------------------------------------------------
  { name: "鳥貴族", pattern: "鳥貴族", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "串カツ田中", pattern: "串カツ田中", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "HUB", pattern: "HUB", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "ワタミ", pattern: "ワタミ", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "白木屋", pattern: "白木屋", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "魚民", pattern: "魚民", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "笑笑", pattern: "笑笑", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "山内農場", pattern: "山内農場", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "塚田農場", pattern: "塚田農場", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },

  // ----------------------------------------------------------
  // ファミリーレストラン → 会議費(515)
  // ----------------------------------------------------------
  { name: "ガスト", pattern: "ガスト", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "サイゼリヤ", pattern: "サイゼリヤ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ジョナサン", pattern: "ジョナサン", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "デニーズ", pattern: "デニーズ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ロイヤルホスト", pattern: "ロイヤルホスト", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ココス", pattern: "ココス", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "びっくりドンキー", pattern: "びっくりドンキー", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "ジョイフル", pattern: "ジョイフル", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },

  // ----------------------------------------------------------
  // 焼肉チェーン → 接待交際費(514)
  // ----------------------------------------------------------
  { name: "牛角", pattern: "牛角", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "焼肉きんぐ", pattern: "焼肉きんぐ", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "叙々苑", pattern: "叙々苑", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90, consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },
  { name: "安楽亭", pattern: "安楽亭", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, consumptionTaxClass: "課税仕入10%", invoiceRequired: true, entertainmentExpenseNote: "資本金1億円以下: 年800万円まで全額損金算入 or 接待飲食費の50%損金算入の選択適用（措法61の4①②）" },

  // ----------------------------------------------------------
  // デリバリーサービス → 会議費(515)
  // ----------------------------------------------------------
  { name: "Uber Eats", pattern: "Uber Eats", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.75, note: "福利厚生費の場合あり", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "出前館", pattern: "出前館", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.75, note: "福利厚生費の場合あり", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "Wolt", pattern: "Wolt", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.75, note: "福利厚生費の場合あり", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "menu", pattern: "menu", matchType: "exact", accountCode: "515", accountName: "会議費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.70, note: "福利厚生費の場合あり。一般名詞のため低confidence", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },
  { name: "foodpanda", pattern: "foodpanda", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.75, note: "福利厚生費の場合あり", consumptionTaxClass: "課税仕入10%", invoiceRequired: true },

  // ----------------------------------------------------------
  // ドーナツ・スイーツ → 会議費(515), taxRateOverride: 8
  // ----------------------------------------------------------
  { name: "ミスタードーナツ", pattern: "ミスタードーナツ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8, consumptionTaxClass: "課税仕入8%軽減", invoiceRequired: true, taxNotes: ["テイクアウト8%・店内飲食10%。レシートの税率表記で確認が必要"] },
  { name: "クリスピークリーム", pattern: "クリスピークリーム", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8, consumptionTaxClass: "課税仕入8%軽減", invoiceRequired: true, taxNotes: ["テイクアウト8%・店内飲食10%。レシートの税率表記で確認が必要"] },
];
