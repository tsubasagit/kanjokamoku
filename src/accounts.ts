/**
 * kanjokamoku — 日本の勘定科目マスタ & 自動判定ルール（OSS）
 *
 * 中小企業・個人事業主向けの一般的な勘定科目体系。
 * 法人税法・消費税法に基づく標準的な分類に準拠。
 *
 * @license MIT
 * @see https://github.com/tsubasagit/kanjokamoku
 */

// ============================================================
// 勘定科目マスタ
// ============================================================

export interface Account {
  /** 科目コード */
  code: string;
  /** 科目名 */
  name: string;
  /** 区分: 資産 / 負債 / 収益 / 費用 */
  category: "asset" | "liability" | "income" | "expense";
  /** 消費税区分 */
  taxCategory: "standard_10" | "reduced_8" | "exempt" | "non_taxable";
  /** 説明 */
  description: string;
}

export const ACCOUNTS: Account[] = [
  // ── 資産 ──
  { code: "101", name: "現金", category: "asset", taxCategory: "non_taxable", description: "手元の現金" },
  { code: "102", name: "普通預金", category: "asset", taxCategory: "non_taxable", description: "銀行の普通預金口座" },
  { code: "103", name: "売掛金", category: "asset", taxCategory: "non_taxable", description: "売上の未回収金" },
  { code: "104", name: "前払費用", category: "asset", taxCategory: "non_taxable", description: "翌期以降の費用を前払いしたもの" },
  { code: "105", name: "立替金", category: "asset", taxCategory: "non_taxable", description: "一時的に立て替えた金額" },

  // ── 負債 ──
  { code: "201", name: "買掛金", category: "liability", taxCategory: "non_taxable", description: "仕入の未払い金" },
  { code: "202", name: "未払金", category: "liability", taxCategory: "non_taxable", description: "費用の未払い" },
  { code: "203", name: "クレジットカード", category: "liability", taxCategory: "non_taxable", description: "クレジットカード未払い残高" },
  { code: "204", name: "預り金", category: "liability", taxCategory: "non_taxable", description: "源泉徴収税等の預り金" },
  { code: "205", name: "未払法人税等", category: "liability", taxCategory: "non_taxable", description: "法人税・住民税・事業税の未払い" },

  // ── 収益 ──
  { code: "411", name: "売上高", category: "income", taxCategory: "standard_10", description: "本業の売上" },
  { code: "421", name: "雑収入", category: "income", taxCategory: "standard_10", description: "本業以外の収入" },

  // ── 費用 ──
  { code: "511", name: "旅費交通費", category: "expense", taxCategory: "standard_10", description: "交通費・出張旅費・宿泊費・ガソリン代" },
  { code: "512", name: "通信費", category: "expense", taxCategory: "standard_10", description: "電話料金・インターネット・SaaS利用料・クラウドサービス" },
  { code: "513", name: "消耗品費", category: "expense", taxCategory: "standard_10", description: "文房具・PC周辺機器・10万円未満の備品" },
  { code: "514", name: "接待交際費", category: "expense", taxCategory: "standard_10", description: "取引先との飲食・贈答品（1人5,000円超の飲食）" },
  { code: "515", name: "会議費", category: "expense", taxCategory: "standard_10", description: "打合せ時の飲食（1人5,000円以下）・会議室利用料" },
  { code: "516", name: "新聞図書費", category: "expense", taxCategory: "standard_10", description: "書籍・新聞・雑誌・電子書籍・有料記事" },
  { code: "517", name: "支払手数料", category: "expense", taxCategory: "standard_10", description: "振込手数料・決済手数料・月額ツール利用料" },
  { code: "518", name: "外注費", category: "expense", taxCategory: "standard_10", description: "フリーランス・外部業者への業務委託費" },
  { code: "519", name: "地代家賃", category: "expense", taxCategory: "standard_10", description: "オフィス・コワーキング・倉庫の賃料" },
  { code: "520", name: "水道光熱費", category: "expense", taxCategory: "standard_10", description: "電気・ガス・水道料金" },
  { code: "521", name: "広告宣伝費", category: "expense", taxCategory: "standard_10", description: "Web広告・チラシ・PR費用" },
  { code: "522", name: "諸会費", category: "expense", taxCategory: "non_taxable", description: "商工会・業界団体等の年会費" },
  { code: "523", name: "雑費", category: "expense", taxCategory: "standard_10", description: "他の科目に該当しない少額の費用" },
  { code: "524", name: "租税公課", category: "expense", taxCategory: "non_taxable", description: "印紙税・固定資産税・自動車税等" },
  { code: "525", name: "保険料", category: "expense", taxCategory: "exempt", description: "損害保険・生命保険・社会保険料（会社負担外）" },
  { code: "526", name: "減価償却費", category: "expense", taxCategory: "non_taxable", description: "固定資産の償却費" },
  { code: "527", name: "研修費", category: "expense", taxCategory: "standard_10", description: "セミナー・研修・資格取得費用" },
  { code: "528", name: "給料手当", category: "expense", taxCategory: "non_taxable", description: "従業員への給与・賞与" },
  { code: "529", name: "法定福利費", category: "expense", taxCategory: "non_taxable", description: "社会保険料・労働保険料（会社負担分）" },
  { code: "530", name: "福利厚生費", category: "expense", taxCategory: "standard_10", description: "慶弔費・社内イベント・従業員向け福利" },
  { code: "531", name: "リース料", category: "expense", taxCategory: "standard_10", description: "OA機器・車両等のリース・レンタル料" },
  { code: "532", name: "修繕費", category: "expense", taxCategory: "standard_10", description: "建物・設備の修理費" },
  { code: "533", name: "荷造運賃", category: "expense", taxCategory: "standard_10", description: "宅配便・郵送料・梱包費" },
];

export function getAccountByCode(code: string): Account | undefined {
  return ACCOUNTS.find((a) => a.code === code);
}

export function getAccountByName(name: string): Account | undefined {
  return ACCOUNTS.find((a) => a.name === name);
}

export function getExpenseAccounts(): Account[] {
  return ACCOUNTS.filter((a) => a.category === "expense");
}
