# kanjokamoku (勘定科目)

<p align="center">
  <img src="docs/rapid-kun.png" width="120" alt="ラピットくん — kanjokamoku mascot">
  <br>
  <em>「まずは仕訳してみよう！」— ラピットくん</em>
</p>

**Open-source Japanese chart of accounts & auto-classification rules for accounting automation.**

**日本の勘定科目マスタと自動仕訳判定ルールのOSSライブラリ。**

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Rules](https://img.shields.io/badge/rules-513+-green.svg)](src/rules/)
[![Accounts](https://img.shields.io/badge/accounts-113-green.svg)](src/accounts.ts)

---

## Why / なぜ作ったか

Every accounting software in Japan has auto-classification — but **none of them publish how it works**. The rules are a black box.

日本の会計ソフトには自動仕訳機能がありますが、**そのロジックを公開しているものは一つもありません**。日本の中小企業が日常的に取引する企業・サービスを網羅した、初のオープンソース仕訳判定ルールです。

This library changes that. It provides:

- A standard **chart of accounts** (勘定科目マスタ) for Japanese SMBs
- **500+ vendor-to-account mapping rules** across 21 categories (取引先→科目の自動判定ルール)
- A **classification engine** with exact/partial/regex matching
- **Dining expense logic** — the ¥10,000/person rule (2024 revision, 接待交際費 vs 会議費)
- **Consumption tax handling** — standard 10% and reduced 8% rates
- **Regional coverage** — electricity, gas, railway companies across Japan

## Install / インストール

```bash
npm install kanjokamoku
```

## Quick Start / 使い方

```typescript
import { classify, TAX_CONSTANTS } from "kanjokamoku";

// 取引先名から勘定科目を推定 / Classify by vendor name
const result = classify("スターバックス");
console.log(result.account.name);        // "会議費"
console.log(result.consumptionTaxClass); // "課税仕入10%"（店内飲食の場合）
console.log(result.invoiceRequired);     // true

// 士業への支払い → 源泉徴収情報が自動付与
const legal = classify("弁護士法人");
console.log(legal.withholding?.required); // true
console.log(legal.withholding?.rate);     // 10.21
console.log(legal.withholding?.basis);    // "所得税法204条1項2号"

// 飲食費の判定（2024年4月改正: 1人1万円基準）
const dinner = classify("叙々苑", 45000, 3);
console.log(dinner.account.name);  // "接待交際費"（15,000円/人 > 10,000円）

const cafe = classify("スターバックス", 3200, 2);
console.log(cafe.account.name);    // "会議費"（1,600円/人 ≤ 10,000円）

// 税務定数の参照
console.log(TAX_CONSTANTS.diningPerPersonThreshold);  // 10000
console.log(TAX_CONSTANTS.entertainmentDeductionLimit); // 8000000
```

## Rule Categories / 判定ルール一覧 (513 rules across 21 categories)

| # | Category | File | Rules | Account |
|---|---|---|---|---|
| 1 | SaaS / Cloud | `saas.ts` | 71 | 512 通信費 |
| 2 | Telecom / ISP | `telecom.ts` | 21 | 512 通信費 |
| 3 | Transport | `transport.ts` | 55 | 511 旅費交通費 |
| 4 | Dining | `dining.ts` | 67 | 515 会議費 / 514 接待交際費 |
| 5 | Supplies | `supplies.ts` | 33 | 513 消耗品費 |
| 6 | Fees | `fees.ts` | 17 | 517 支払手数料 |
| 7 | Utilities | `utilities.ts` | 25 | 520 水道光熱費 |
| 8 | Books & Learning | `learning.ts` | 27 | 516 新聞図書費 / 527 研修費 |
| 9 | Shipping | `shipping.ts` | 14 | 533 荷造運賃 |
| 10 | Accommodation | `accommodation.ts` | 22 | 511 旅費交通費 |
| 11 | Advertising | `advertising.ts` | 22 | 521 広告宣伝費 |
| 12 | Insurance | `insurance.ts` | 17 | 525 保険料 |
| 13 | Office Space | `office-space.ts` | 12 | 519 地代家賃 |
| 14 | Web Infrastructure | `web-infra.ts` | 18 | 512 通信費 |
| 15 | Professional Services | `professional.ts` | 23 | 517 支払手数料 / 518 外注費 |
| 16 | Tax & Government | `tax-fees.ts` | 12 | 524 租税公課 |
| 17 | Maintenance | `maintenance.ts` | 10 | 518 外注費 / 532 修繕費 |
| 18 | Leasing | `leasing.ts` | 9 | 531 リース料 |
| 19 | Convenience Stores | `convenience.ts` | 6 | 513 消耗品費 (multi-category) |
| 20 | Subscriptions | `subscription.ts` | 21 | 512 通信費 |
| 21 | Welfare | `welfare.ts` | 11 | 530 福利厚生費 |

### Highlights / 主要ルールのハイライト

**SaaS (71 rules):** AWS, Google Cloud, Azure, Vercel, Firebase, Slack, Notion, Zoom, GitHub, Figma, Salesforce, HubSpot, SmartHR, OpenAI, Anthropic, Datadog, Sentry, and 50+ more

**Transport (55 rules):** JR全社, 私鉄14社(東急/小田急/京王/阪急...), タクシー(GO/DiDi), 航空7社(ANA/JAL/Peach...), ガソリン7社, ETC, レンタカー4社, シェアサイクル

**Dining (67 rules):** カフェ10社, ファストフード7社, 牛丼/定食7社, ラーメン5社, 寿司5社, 居酒屋9社, ファミレス8社, 焼肉4社, デリバリー5社 — with ¥10,000/person rule

**Utilities (25 rules):** 全国電力10社 + 新電力5社, ガス5社, 水道局

**The ¥10,000 Rule (1万円ルール / 2024年4月改正):**
- ≤ ¥10,000 per person → 会議費 (meeting expense, fully deductible)
- \> ¥10,000 per person → 接待交際費 (entertainment, ¥8M annual limit for SMEs)
- 要件: 日時・参加者名・人数・金額・店名の帳簿記載が必要（措法61の4③二）

### Full Account Coverage / 勘定科目マスタ（113科目）

| 区分 | 科目数 | 主な科目 |
|---|---|---|
| **資産（流動）** | 22 | 現金, 普通預金, 売掛金, 前払費用, 仮払金, 仮払消費税, 商品, 有価証券 等 |
| **資産（固定・有形）** | 9 | 建物, 建物附属設備, 車両運搬具, 工具器具備品, 土地 等 |
| **資産（固定・無形）** | 7 | ソフトウェア, 特許権, 商標権, のれん, 借地権 等 |
| **資産（投資・繰延）** | 11 | 投資有価証券, 敷金保証金, 創立費, 開業費 等 |
| **負債（流動）** | 15 | 買掛金, 未払金, クレジットカード, 預り金, 未払法人税等, 前受金 等 |
| **負債（固定）** | 6 | 長期借入金, 社債, 退職給付引当金, 資産除去債務 等 |
| **純資産** | 10 | 資本金, 資本剰余金, 利益剰余金, 自己株式, 元入金, 事業主貸/借 等 |
| **収益** | 16 | 売上高, 受取利息, 受取配当金, 補助金収入, 固定資産売却益 等 |
| **費用（売上原価）** | 8 | 仕入高, 材料費, 労務費, 製造経費 等 |
| **費用（販管費）** | 29 | 旅費交通費, 通信費, 接待交際費, 給料手当, 減価償却費, 採用費 等 |
| **費用（営業外・特別・税）** | 12 | 支払利息, 貸倒損失, 固定資産除却損, 法人税等 等 |

全科目に税理士向け「目安」付き解説を記載。詳細は [`src/accounts.ts`](src/accounts.ts) を参照。

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

| Format | Description | Status |
|---|---|---|
| 仕訳日記帳CSV | 多くの会計ソフトで対応する標準的なCSV形式 | Supported |
| 汎用CSV | 日付・借方科目・金額・貸方科目・摘要の汎用形式 | Supported |
| カスタムCSV | 任意のカラム順序・ヘッダーに対応 | Planned |

## Background / 背景

We build accounting automation tools at [AppTalentHub](https://apptalenthub.co.jp) and realized that classification rules should be open — so anyone building accounting tools in Japan can use them.

会計自動化ツールを開発する中で、仕訳の判定ルール自体はオープンであるべきだと考えました。日本で会計ツールを開発する全ての人が使えるようOSSとして公開しています。

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

## Disclaimer / 免責事項

**免責事項**: 本ライブラリは一般的な勘定科目の分類ルールを提供するものであり、個別の税務判断を行うものではありません。実際の仕訳・申告にあたっては、税理士等の専門家にご相談ください。本ライブラリの利用により生じたいかなる損害についても、作者は責任を負いません。

**Disclaimer**: This library provides general classification rules for Japanese chart of accounts. It does not constitute tax advice. Please consult a qualified tax professional for actual bookkeeping and tax filing decisions. The authors assume no liability for any damages arising from the use of this library.

## License

MIT — Use it freely in commercial and open-source projects.

## Author

**[AppTalentHub Inc.](https://apptalenthub.co.jp)** — AI-native company building the future of work.

Built by a 1-person team using AI as the operating system.
会社をファイルシステムとして設計し、AIで運営する1人組織。
