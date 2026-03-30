# kanjokamoku (勘定科目)

**Open-source Japanese chart of accounts & auto-classification rules for accounting automation.**

**日本の勘定科目マスタと自動仕訳判定ルールのOSSライブラリ。**

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/kanjokamoku.svg)](https://www.npmjs.com/package/kanjokamoku)

---

## Why / なぜ作ったか

Every accounting software in Japan (freee, MoneyForward, TKC, Yayoi) has auto-classification — but **none of them publish how it works**. The rules are a black box.

日本の全ての会計ソフト（freee, マネーフォワード, TKC, 弥生）には自動仕訳機能がありますが、**そのロジックを公開しているものは一つもありません**。

This library changes that. It provides:

- A standard **chart of accounts** (勘定科目マスタ) for Japanese SMBs
- **70+ vendor-to-account mapping rules** (取引先→科目の自動判定ルール)
- A **classification engine** with exact/partial/regex matching
- **Dining expense logic** — the famous ¥5,000/person rule (接待交際費 vs 会議費)
- **Consumption tax handling** — standard 10% and reduced 8% rates

## Install / インストール

```bash
npm install kanjokamoku
```

## Quick Start / 使い方

```typescript
import { classify, ACCOUNTS } from "kanjokamoku";

// Classify by vendor name / 取引先名から勘定科目を推定
const result = classify("スターバックス");
console.log(result.account.name);  // "会議費"
console.log(result.confidence);     // 0.85

// With amount for dining rule / 金額で接待交際費 vs 会議費を判定
const dinner = classify("道とん堀", 14360, 3);
console.log(dinner.account.name);  // "接待交際費"
console.log(dinner.note);          // "1人あたり4,787円（3名）→ 5,000円以下のため会議費"
// Wait — ¥14,360 ÷ 3 = ¥4,787 → actually 会議費!

const dinner2 = classify("道とん堀", 14360, 2);
console.log(dinner2.account.name); // "接待交際費"
// ¥14,360 ÷ 2 = ¥7,180 → over ¥5,000/person → 接待交際費

// List all expense accounts / 費用科目の一覧
import { getExpenseAccounts } from "kanjokamoku";
const expenses = getExpenseAccounts();
// → [{code: "511", name: "旅費交通費", ...}, ...]
```

## Classification Rules / 判定ルール一覧

### SaaS / Cloud Services → 通信費 (Communication)

| Vendor | Account | Confidence |
|---|---|---|
| AWS / Amazon Web Services | 512 通信費 | 95% |
| Google Cloud / Workspace | 512 通信費 | 95% |
| Microsoft Azure / 365 | 512 通信費 | 90-95% |
| Vercel, Firebase, Heroku | 512 通信費 | 95% |
| Slack, Notion, Zoom | 512 通信費 | 95% |
| GitHub, OpenAI, Anthropic | 512 通信費 | 95% |

### Transportation → 旅費交通費 (Travel & Transport)

| Vendor | Account | Confidence |
|---|---|---|
| JR, ANA, JAL | 511 旅費交通費 | 90% |
| Taxi (日本交通 etc.) | 511 旅費交通費 | 95% |
| Gas stations (ENEOS, 出光) | 511 旅費交通費 | 90% |
| ETC (highway toll) | 511 旅費交通費 | 95% |
| Parking (Times etc.) | 511 旅費交通費 | 90% |

### Dining → 会議費 or 接待交際費 (Meeting / Entertainment)

| Vendor | Default | Note |
|---|---|---|
| Starbucks, Doutor, Tully's | 515 会議費 | Low-cost cafe → meeting expense |
| McDonald's, Mister Donut | 515 会議費 | Fast food → meeting expense |
| Restaurants (izakaya etc.) | 514 接待交際費 | Judged by ¥5,000/person rule |

**The ¥5,000 Rule (5,000円ルール):**
- ≤ ¥5,000 per person → 会議費 (meeting expense, fully deductible)
- \> ¥5,000 per person → 接待交際費 (entertainment, limited deduction)

### Supplies → 消耗品費 (Consumables)

| Vendor | Account | Confidence |
|---|---|---|
| Yodobashi Camera | 513 消耗品費 | 85% |
| Bic Camera | 513 消耗品費 | 85% |
| Daiso, MonotaRO | 513 消耗品費 | 85-90% |
| Amazon | 513 消耗品費 | 60% ⚠️ |

> ⚠️ Amazon has low confidence because purchases could be books (新聞図書費), SaaS (通信費), or supplies (消耗品費). Item-level classification is needed.

### Full Category Coverage / 対応科目一覧

| Code | Japanese | English | Tax |
|---|---|---|---|
| 511 | 旅費交通費 | Travel & Transport | 10% |
| 512 | 通信費 | Communication & SaaS | 10% |
| 513 | 消耗品費 | Supplies & Equipment | 10% |
| 514 | 接待交際費 | Entertainment | 10% |
| 515 | 会議費 | Meeting Expenses | 10% |
| 516 | 新聞図書費 | Books & Publications | 10% |
| 517 | 支払手数料 | Service Fees | 10% |
| 518 | 外注費 | Outsourcing | 10% |
| 519 | 地代家賃 | Rent | 10% |
| 520 | 水道光熱費 | Utilities | 10% |
| 521 | 広告宣伝費 | Advertising | 10% |
| 522 | 諸会費 | Membership Dues | Non-taxable |
| 523 | 雑費 | Miscellaneous | 10% |
| 524 | 租税公課 | Tax & Public Charges | Non-taxable |
| 525 | 保険料 | Insurance | Exempt |
| 527 | 研修費 | Training & Education | 10% |
| 533 | 荷造運賃 | Shipping & Delivery | 10% |

## Custom Rules / カスタムルール

Add your own rules that take priority over the defaults:

```typescript
import { classify, ClassificationRule } from "kanjokamoku";

const myRules: ClassificationRule[] = [
  {
    name: "Office rent",
    pattern: "WeWork",
    matchType: "contains",
    accountCode: "519",
    accountName: "地代家賃",
    counterAccountCode: "102",
    counterAccountName: "普通預金",
    confidence: 0.95,
  },
];

const result = classify("WeWork Japan", undefined, undefined, myRules);
console.log(result.account.name); // "地代家賃"
```

## CSV Output Compatibility / CSV出力互換性

The classification results can be exported to CSV formats compatible with:

| Software | Format | Status |
|---|---|---|
| 弥生会計 (Yayoi) | 仕訳日記帳インポート | Supported |
| TKC FX2 / e21 | CSV取込 | Supported |
| JDL IBEX | CSV取込 | Supported |
| freee | 取引インポート | Supported |
| MoneyForward | 仕訳インポート | Supported |

## Background / 背景

This library was born from [AutoBooks](https://github.com/tsubasagit/AppTalentHub), an AI-powered bookkeeping agent for Japanese tax accountants. We realized the classification rules themselves should be open — so anyone building accounting tools in Japan can use them.

このライブラリは、税理士向けAI仕訳エージェント [AutoBooks](https://github.com/tsubasagit/AppTalentHub) から生まれました。仕訳の判定ルール自体はオープンであるべきだと考え、日本で会計ツールを開発する全ての人が使えるようOSSとして公開しました。

## Contributing / コントリビューション

PRs welcome! Especially:

- **New vendor rules** — 新しい取引先ルールの追加
- **Regional rules** — 地域特有の取引先（地方ガス会社等）
- **Industry-specific rules** — 業種特有の科目体系
- **Tax law updates** — 税制改正への対応
- **Bug fixes** — 判定ミスの修正

```bash
git clone https://github.com/tsubasagit/kanjokamoku.git
cd kanjokamoku
npm install
npm run build
```

## License

MIT — Use it freely in commercial and open-source projects.

## Author

**[AppTalentHub Inc.](https://apptalenthub.co.jp)** — AI-native company building the future of work.

Built by a 1-person team using AI as the operating system.
会社をファイルシステムとして設計し、AIで運営する1人組織。
