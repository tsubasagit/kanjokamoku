// This file is part of kanjokamoku — MIT License
// https://github.com/tsubasagit/kanjokamoku

export interface ClassificationRule {
  name: string;
  pattern: string;
  matchType: "exact" | "contains" | "regex";
  accountCode: string;
  accountName: string;
  counterAccountCode: string;
  counterAccountName: string;
  confidence: number;
  taxRateOverride?: 8 | 10;
  note?: string;
}
