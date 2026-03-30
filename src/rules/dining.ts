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
  { name: "スターバックス", pattern: "スターバックス", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85, note: "テイクアウト8%・店内10%。少額のため会議費が一般的" },
  { name: "ドトール", pattern: "ドトール", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85 },
  { name: "タリーズ", pattern: "タリーズ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85 },
  { name: "コメダ珈琲", pattern: "コメダ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85 },
  { name: "サンマルクカフェ", pattern: "サンマルク", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85 },
  { name: "星乃珈琲", pattern: "星乃珈琲", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85 },
  { name: "PRONTO", pattern: "PRONTO", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85 },
  { name: "カフェ・ド・クリエ", pattern: "カフェ・ド・クリエ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85 },
  { name: "ベローチェ", pattern: "ベローチェ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85 },
  { name: "エクセルシオール", pattern: "エクセルシオール", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85 },

  // ----------------------------------------------------------
  // ファストフード → 会議費(515), taxRateOverride: 8（テイクアウト想定）
  // ----------------------------------------------------------
  { name: "マクドナルド", pattern: "マクドナルド", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8 },
  { name: "モスバーガー", pattern: "モスバーガー", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8 },
  { name: "ロッテリア", pattern: "ロッテリア", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8 },
  { name: "フレッシュネスバーガー", pattern: "フレッシュネス", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8 },
  { name: "バーガーキング", pattern: "バーガーキング", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8 },
  { name: "ケンタッキー", pattern: "ケンタッキー", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8 },
  { name: "サブウェイ", pattern: "サブウェイ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8 },

  // ----------------------------------------------------------
  // 牛丼・定食チェーン → 会議費(515)
  // ----------------------------------------------------------
  { name: "吉野家", pattern: "吉野家", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },
  { name: "松屋", pattern: "松屋", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },
  { name: "すき家", pattern: "すき家", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },
  { name: "なか卯", pattern: "なか卯", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },
  { name: "大戸屋", pattern: "大戸屋", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },
  { name: "やよい軒", pattern: "やよい軒", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },
  { name: "日高屋", pattern: "日高屋", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },

  // ----------------------------------------------------------
  // ラーメンチェーン → 会議費(515)
  // ----------------------------------------------------------
  { name: "一風堂", pattern: "一風堂", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },
  { name: "一蘭", pattern: "一蘭", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },
  { name: "天下一品", pattern: "天下一品", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },
  { name: "幸楽苑", pattern: "幸楽苑", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },
  { name: "リンガーハット", pattern: "リンガーハット", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },

  // ----------------------------------------------------------
  // カレーチェーン → 会議費(515)
  // ----------------------------------------------------------
  { name: "CoCo壱番屋", pattern: "CoCo壱番屋", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },
  { name: "ゴーゴーカレー", pattern: "ゴーゴーカレー", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },

  // ----------------------------------------------------------
  // うどん・そばチェーン → 会議費(515)
  // ----------------------------------------------------------
  { name: "丸亀製麺", pattern: "丸亀製麺", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },
  { name: "ゆで太郎", pattern: "ゆで太郎", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },
  { name: "富士そば", pattern: "富士そば", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80 },

  // ----------------------------------------------------------
  // 回転寿司 → 接待交際費(514)
  // ----------------------------------------------------------
  { name: "スシロー", pattern: "スシロー", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.75, note: "回転寿司は金額次第で会議費の場合あり" },
  { name: "くら寿司", pattern: "くら寿司", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.75, note: "回転寿司は金額次第で会議費の場合あり" },
  { name: "かっぱ寿司", pattern: "かっぱ寿司", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.75, note: "回転寿司は金額次第で会議費の場合あり" },
  { name: "はま寿司", pattern: "はま寿司", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.75, note: "回転寿司は金額次第で会議費の場合あり" },
  { name: "銚子丸", pattern: "銚子丸", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.75, note: "回転寿司は金額次第で会議費の場合あり" },

  // ----------------------------------------------------------
  // 居酒屋チェーン → 接待交際費(514)
  // ----------------------------------------------------------
  { name: "鳥貴族", pattern: "鳥貴族", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "串カツ田中", pattern: "串カツ田中", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "HUB", pattern: "HUB", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "ワタミ", pattern: "ワタミ", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "白木屋", pattern: "白木屋", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "魚民", pattern: "魚民", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "笑笑", pattern: "笑笑", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "山内農場", pattern: "山内農場", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "塚田農場", pattern: "塚田農場", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },

  // ----------------------------------------------------------
  // ファミリーレストラン → 会議費(515)
  // ----------------------------------------------------------
  { name: "ガスト", pattern: "ガスト", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費" },
  { name: "サイゼリヤ", pattern: "サイゼリヤ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費" },
  { name: "ジョナサン", pattern: "ジョナサン", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費" },
  { name: "デニーズ", pattern: "デニーズ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費" },
  { name: "ロイヤルホスト", pattern: "ロイヤルホスト", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費" },
  { name: "ココス", pattern: "ココス", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費" },
  { name: "びっくりドンキー", pattern: "びっくりドンキー", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費" },
  { name: "ジョイフル", pattern: "ジョイフル", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, note: "金額次第で接待交際費" },

  // ----------------------------------------------------------
  // 焼肉チェーン → 接待交際費(514)
  // ----------------------------------------------------------
  { name: "牛角", pattern: "牛角", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85 },
  { name: "焼肉きんぐ", pattern: "焼肉きんぐ", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85 },
  { name: "叙々苑", pattern: "叙々苑", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.90 },
  { name: "安楽亭", pattern: "安楽亭", matchType: "contains", accountCode: "514", accountName: "接待交際費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.85 },

  // ----------------------------------------------------------
  // デリバリーサービス → 会議費(515)
  // ----------------------------------------------------------
  { name: "Uber Eats", pattern: "Uber Eats", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.75, note: "福利厚生費の場合あり" },
  { name: "出前館", pattern: "出前館", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.75, note: "福利厚生費の場合あり" },
  { name: "Wolt", pattern: "Wolt", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.75, note: "福利厚生費の場合あり" },
  { name: "menu", pattern: "menu", matchType: "exact", accountCode: "515", accountName: "会議費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.70, note: "福利厚生費の場合あり。一般名詞のため低confidence" },
  { name: "foodpanda", pattern: "foodpanda", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "203", counterAccountName: "クレジットカード", confidence: 0.75, note: "福利厚生費の場合あり" },

  // ----------------------------------------------------------
  // ドーナツ・スイーツ → 会議費(515), taxRateOverride: 8
  // ----------------------------------------------------------
  { name: "ミスタードーナツ", pattern: "ミスタードーナツ", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8 },
  { name: "クリスピークリーム", pattern: "クリスピークリーム", matchType: "contains", accountCode: "515", accountName: "会議費", counterAccountCode: "101", counterAccountName: "現金", confidence: 0.80, taxRateOverride: 8 },
];
