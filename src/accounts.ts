/**
 * kanjokamoku — 日本の勘定科目マスタ（OSS）
 *
 * 中小企業・個人事業主向けの勘定科目体系を完全網羅。
 * 中小企業の会計に関する指針・法人税法・消費税法に準拠。
 *
 * 科目コード体系:
 *   1xx: 資産（流動資産・固定資産）
 *   2xx: 負債（流動負債・固定負債）
 *   3xx: 純資産
 *   4xx: 収益（売上高・営業外収益・特別利益）
 *   5xx: 費用（売上原価・販管費・営業外費用・特別損失）
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
  /** 区分 */
  category: "asset" | "liability" | "equity" | "income" | "expense";
  /** 消費税区分 */
  taxCategory: "standard_10" | "reduced_8" | "exempt" | "non_taxable";
  /** 説明 */
  description: string;
}

export const ACCOUNTS: Account[] = [
  // ================================================================
  // 1xx: 資産
  // ================================================================

  // ── 流動資産 ──
  { code: "100", name: "小口現金", category: "asset", taxCategory: "non_taxable", description: "経費精算用の手元小口現金。目安: 5〜30万円を金庫に保管。毎月末に残高照合。出納帳と実残高の不一致は「現金過不足」で処理" },
  { code: "101", name: "現金", category: "asset", taxCategory: "non_taxable", description: "手元の現金。目安: 日常取引で現金払いした場合に使用。キャッシュレス化が進み、100人規模では小口現金に統合するケースが多い" },
  { code: "102", name: "普通預金", category: "asset", taxCategory: "non_taxable", description: "銀行の普通預金口座。目安: メインバンク・サブバンクごとに補助科目で管理。口座ごとの残高管理が基本" },
  { code: "103", name: "売掛金", category: "asset", taxCategory: "non_taxable", description: "売上の未回収金。目安: 取引先ごとに補助科目で管理。月末に売掛金年齢表を作成し、3ヶ月超の滞留は貸倒リスクを検討" },
  { code: "104", name: "前払費用", category: "asset", taxCategory: "non_taxable", description: "翌期以降の費用を前払いしたもの。目安: 年払い保険料・年間サブスクリプション等。1年以内に費用化される分のみ（1年超は長期前払費用）" },
  { code: "105", name: "立替金", category: "asset", taxCategory: "non_taxable", description: "従業員や取引先のために一時的に立て替えた金額。目安: 社員の出張費立替、取引先の送料立替等。長期滞留は未収入金への振替を検討" },
  { code: "106", name: "当座預金", category: "asset", taxCategory: "non_taxable", description: "小切手・手形決済用の預金口座。目安: 手形取引がある場合に使用。100人規模でも手形取引がなければ不要" },
  { code: "107", name: "定期預金", category: "asset", taxCategory: "non_taxable", description: "銀行の定期預金口座。目安: 余剰資金の運用。満期が1年以内なら流動資産、1年超なら投資その他の資産" },
  { code: "108", name: "仮払金", category: "asset", taxCategory: "non_taxable", description: "使途・金額が未確定の一時的な支出。目安: 出張旅費の概算払い等。精算後速やかに振替処理。決算時に残高ゼロが理想" },
  { code: "109", name: "仮払消費税等", category: "asset", taxCategory: "non_taxable", description: "仕入時に支払った消費税（税抜経理方式）。目安: 決算時に仮受消費税と相殺し、差額を未払消費税等に振替" },
  { code: "110", name: "商品", category: "asset", taxCategory: "non_taxable", description: "販売目的で保有する棚卸資産。目安: 期末に実地棚卸を行い、帳簿残高と照合。評価方法（最終仕入原価法等）を届出" },
  { code: "111", name: "製品", category: "asset", taxCategory: "non_taxable", description: "自社で製造した棚卸資産。目安: 製造業で使用。原価計算に基づいて評価" },
  { code: "112", name: "原材料", category: "asset", taxCategory: "non_taxable", description: "製造に使用する原材料。目安: 製造業で使用。受入・払出の記録を管理" },
  { code: "113", name: "仕掛品", category: "asset", taxCategory: "non_taxable", description: "製造途中・作業途中の棚卸資産。目安: IT企業のシステム開発案件で、期末時点で未完了の案件の原価を計上" },
  { code: "114", name: "貯蔵品", category: "asset", taxCategory: "non_taxable", description: "未使用の切手・収入印紙・消耗品等。目安: 期末に未使用分を棚卸。少額なら消耗品費のままでも税務上問題なし" },
  { code: "115", name: "受取手形", category: "asset", taxCategory: "non_taxable", description: "取引先から受け取った約束手形。目安: 手形取引がある場合に使用。不渡りリスクの管理が必要" },
  { code: "116", name: "電子記録債権", category: "asset", taxCategory: "non_taxable", description: "でんさいネット等の電子記録債権。目安: 手形の電子版。中小企業間の取引で増加傾向" },
  { code: "117", name: "未収入金", category: "asset", taxCategory: "non_taxable", description: "本業以外の未回収金。目安: 固定資産売却代金・保険金・助成金の未収分。売掛金との違いは「本業かどうか」" },
  { code: "118", name: "未収収益", category: "asset", taxCategory: "non_taxable", description: "発生済みだが未回収の収益。目安: 決算日をまたぐ貸付金利息等。翌期首に振戻処理が必要" },
  { code: "119", name: "短期貸付金", category: "asset", taxCategory: "non_taxable", description: "1年以内に返済を受ける貸付金。目安: 役員貸付金は税務調査で指摘されやすい。認定利息（年1.0%程度）の計上が必要" },
  { code: "120", name: "前渡金", category: "asset", taxCategory: "non_taxable", description: "商品の仕入等に対する前払い（手付金）。目安: 商品到着後に仕入高へ振替。前払費用との違いは「モノの購入か、サービスの購入か」" },
  { code: "121", name: "有価証券", category: "asset", taxCategory: "non_taxable", description: "売買目的の株式・債券等。目安: 短期的な売買差益を目的とする場合。決算時に時価評価が必要" },

  // ── 固定資産（有形） ──
  { code: "130", name: "建物", category: "asset", taxCategory: "non_taxable", description: "事務所・店舗・倉庫等の建物。目安: 取得価額で計上、耐用年数に応じて減価償却（鉄骨造38年、木造22年等）。内装工事は建物附属設備で別管理" },
  { code: "131", name: "建物附属設備", category: "asset", taxCategory: "non_taxable", description: "電気設備・給排水設備・空調設備等。目安: オフィス内装工事はここ。耐用年数15年（電気設備）〜18年（給排水）。原状回復費用との区別に注意" },
  { code: "132", name: "構築物", category: "asset", taxCategory: "non_taxable", description: "駐車場舗装・フェンス・看板等。目安: 土地の上に建てた建物以外の工作物。アスファルト舗装は10年で償却" },
  { code: "133", name: "機械装置", category: "asset", taxCategory: "non_taxable", description: "製造用機械・設備。目安: 製造業で使用。業種ごとに耐用年数が異なる（金属加工7年、食品製造10年等）" },
  { code: "134", name: "車両運搬具", category: "asset", taxCategory: "non_taxable", description: "営業車・トラック・フォークリフト等。目安: 普通自動車6年、軽自動車4年で償却。私用兼用は業務使用割合で按分" },
  { code: "135", name: "工具器具備品", category: "asset", taxCategory: "non_taxable", description: "PC・家具・10万円以上の備品。目安: PC4年、家具金属15年/木製8年、サーバー5年で償却。10万円未満は消耗品費、10〜20万円は一括償却も選択可" },
  { code: "136", name: "土地", category: "asset", taxCategory: "non_taxable", description: "事業用の土地。目安: 非償却資産（減価償却しない）。売買時は非課税取引。不動産取得税は租税公課" },
  { code: "137", name: "建設仮勘定", category: "asset", taxCategory: "non_taxable", description: "建設中の固定資産に対する支出。目安: 完成・引渡し時に本勘定（建物等）へ振替。建設期間中の支払利息は原価算入可" },
  { code: "138", name: "一括償却資産", category: "asset", taxCategory: "non_taxable", description: "10万円以上20万円未満の資産。目安: 3年均等償却（月割不要）。個別管理が不要で事務負担が軽い。中小企業は30万円未満の特例も選択可" },

  // ── 固定資産（無形） ──
  { code: "140", name: "ソフトウェア", category: "asset", taxCategory: "non_taxable", description: "自社利用ソフトウェア・ライセンス。目安: 耐用年数5年で償却。クラウド型（SaaS月額）は通信費、買い切りライセンスはソフトウェア。開発費が20万円超ならここ" },
  { code: "141", name: "ソフトウェア仮勘定", category: "asset", taxCategory: "non_taxable", description: "開発中のソフトウェアに対する支出。目安: 完成・リリース時にソフトウェアへ振替。社内開発の人件費も含む場合あり" },
  { code: "142", name: "特許権", category: "asset", taxCategory: "non_taxable", description: "特許の取得・登録費用。目安: 耐用年数8年で償却。出願費用・弁理士報酬を含む" },
  { code: "143", name: "商標権", category: "asset", taxCategory: "non_taxable", description: "商標の取得・登録費用。目安: 耐用年数10年で償却。更新費用は支払手数料" },
  { code: "144", name: "のれん", category: "asset", taxCategory: "non_taxable", description: "事業譲受・M&A時の超過収益力。目安: 税務上は5年均等償却。会計上は20年以内で償却。減損テストが必要" },
  { code: "145", name: "借地権", category: "asset", taxCategory: "non_taxable", description: "土地を借りる権利。目安: 非償却。権利金として取得価額に含める。更新料は支払手数料または借地権に加算" },
  { code: "146", name: "電話加入権", category: "asset", taxCategory: "non_taxable", description: "NTT固定電話の加入権。目安: 非償却資産。1本あたり約36,000円。実質的に価値がなくても帳簿に残りがち" },

  // ── 投資その他の資産 ──
  { code: "150", name: "投資有価証券", category: "asset", taxCategory: "non_taxable", description: "長期保有目的の株式・債券。目安: 取引先との持合株式、満期保有目的の社債等。著しい時価下落（50%以上）は減損" },
  { code: "151", name: "関係会社株式", category: "asset", taxCategory: "non_taxable", description: "子会社・関連会社の株式。目安: 議決権20%以上で関連会社、50%超で子会社。グループ会社管理で使用" },
  { code: "152", name: "長期貸付金", category: "asset", taxCategory: "non_taxable", description: "1年超の貸付金。目安: 役員貸付金は税務調査の重点項目。認定利息の計上漏れに注意（国税庁の基準利率を適用）" },
  { code: "153", name: "敷金・保証金", category: "asset", taxCategory: "non_taxable", description: "オフィス・店舗の敷金・保証金。目安: 退去時に返還されるため資産計上。償却部分（返還されない分）は地代家賃or長期前払費用" },
  { code: "154", name: "長期前払費用", category: "asset", taxCategory: "non_taxable", description: "1年超にわたり費用化される前払い。目安: 保険の長期前払い、礼金（20万円以上の場合5年償却）、ウェブサイト制作費の長期分" },
  { code: "155", name: "出資金", category: "asset", taxCategory: "non_taxable", description: "組合・協同組合等への出資。目安: 商工会議所・協同組合等への出資金。脱退時に返還される場合が多い" },
  { code: "156", name: "繰延税金資産", category: "asset", taxCategory: "non_taxable", description: "将来の税金軽減効果。目安: 税効果会計適用会社で使用。中小企業は任意適用。将来の課税所得見込みに基づき回収可能性を判定" },

  // ── 繰延資産 ──
  { code: "160", name: "創立費", category: "asset", taxCategory: "non_taxable", description: "会社設立時の費用。目安: 定款認証・登録免許税・設立登記の司法書士報酬等。税務上は任意償却（いつでも全額費用化可）" },
  { code: "161", name: "開業費", category: "asset", taxCategory: "non_taxable", description: "設立後〜営業開始前の準備費用。目安: 事務所賃料・広告費・研修費等の開業準備費。税務上は任意償却" },
  { code: "162", name: "株式交付費", category: "asset", taxCategory: "non_taxable", description: "株式発行に伴う費用。目安: 増資時の登録免許税・司法書士報酬等。3年均等償却" },
  { code: "163", name: "開発費", category: "asset", taxCategory: "non_taxable", description: "新技術・新市場の開発費用。目安: 研究開発費とは異なる。新規事業の市場調査・テストマーケティング等。5年均等償却" },

  // ================================================================
  // 2xx: 負債
  // ================================================================

  // ── 流動負債 ──
  { code: "201", name: "買掛金", category: "liability", taxCategory: "non_taxable", description: "仕入の未払い金。目安: 取引先ごとに補助科目で管理。月末締め翌月末払い等の支払サイトを管理" },
  { code: "202", name: "未払金", category: "liability", taxCategory: "non_taxable", description: "営業外の費用の未払い。目安: 固定資産の購入代金、クレジットカード以外の未払い。買掛金との違いは「本業の仕入かどうか」" },
  { code: "203", name: "クレジットカード", category: "liability", taxCategory: "non_taxable", description: "クレジットカード未払い残高。目安: カード会社ごとに補助科目。利用日に費用計上し、引落日に消込。法人カードは社員ごとの管理も" },
  { code: "204", name: "預り金", category: "liability", taxCategory: "non_taxable", description: "源泉徴収税・住民税の預り。目安: 給与から天引きした所得税・住民税。翌月10日まで（納特は7月・1月）に納付。社会保険料の従業員負担分も" },
  { code: "205", name: "未払法人税等", category: "liability", taxCategory: "non_taxable", description: "法人税・住民税・事業税の未払い。目安: 決算時に税額を見積計上。確定申告後に納付で消込" },
  { code: "206", name: "短期借入金", category: "liability", taxCategory: "non_taxable", description: "1年以内に返済する借入金。目安: 長期借入金のうち1年以内返済分を振替。運転資金の短期借入もここ" },
  { code: "207", name: "未払費用", category: "liability", taxCategory: "non_taxable", description: "発生済みだが支払期日未到来の費用。目安: 月末締め翌月払いの給与（末日〜支給日の期間分）、借入金利息の未払分" },
  { code: "208", name: "仮受金", category: "liability", taxCategory: "non_taxable", description: "内容・金額が未確定の一時的な入金。目安: 入金元・内容が判明次第速やかに振替。決算時に残高ゼロが理想" },
  { code: "209", name: "仮受消費税等", category: "liability", taxCategory: "non_taxable", description: "売上時に預かった消費税（税抜経理方式）。目安: 決算時に仮払消費税と相殺し、差額を未払消費税等に振替" },
  { code: "210", name: "前受金", category: "liability", taxCategory: "non_taxable", description: "商品引渡し・サービス提供前に受け取った代金。目安: SaaSの年間前払い、工事の着手金等。納品・完了時に売上高へ振替" },
  { code: "211", name: "前受収益", category: "liability", taxCategory: "non_taxable", description: "翌期以降に帰属する収益の前受分。目安: 翌期分の賃料を当期に受領した場合等。翌期首に振戻処理" },
  { code: "212", name: "支払手形", category: "liability", taxCategory: "non_taxable", description: "取引先に振り出した約束手形。目安: 不渡りは銀行取引停止処分のリスク。資金繰り管理の最重要科目" },
  { code: "213", name: "電子記録債務", category: "liability", taxCategory: "non_taxable", description: "でんさいネット等の電子記録債務。目安: 支払手形の電子版。印紙税が不要というメリット" },
  { code: "214", name: "未払消費税等", category: "liability", taxCategory: "non_taxable", description: "確定申告で納付する消費税の未払い。目安: 仮受消費税−仮払消費税の差額。中間申告の納付額も管理" },
  { code: "215", name: "賞与引当金", category: "liability", taxCategory: "non_taxable", description: "従業員賞与の見積計上額。目安: 夏冬賞与の支給見込額を月次で按分計上。税務上は支給確定日の属する期に損金算入" },

  // ── 固定負債 ──
  { code: "220", name: "長期借入金", category: "liability", taxCategory: "non_taxable", description: "1年超の借入金。目安: 銀行融資・日本政策金融公庫・信用金庫等。金融機関ごとに補助科目。決算期末から1年以内返済分は短期借入金へ振替" },
  { code: "221", name: "社債", category: "liability", taxCategory: "non_taxable", description: "発行した社債。目安: 少人数私募債（50人未満）は中小企業でも発行可。利息は支払利息で計上" },
  { code: "222", name: "退職給付引当金", category: "liability", taxCategory: "non_taxable", description: "退職金の見積計上額。目安: 退職金規程がある場合に計上。中小企業退職金共済（中退共）の掛金は福利厚生費で処理（引当金不要）" },
  { code: "223", name: "長期未払金", category: "liability", taxCategory: "non_taxable", description: "1年超の未払金。目安: リース債務、割賦購入の残債等。1年以内返済分は未払金へ振替" },
  { code: "224", name: "繰延税金負債", category: "liability", taxCategory: "non_taxable", description: "将来の税金増加額。目安: 税効果会計適用会社で使用。その他有価証券の評価差額等から発生" },
  { code: "225", name: "資産除去債務", category: "liability", taxCategory: "non_taxable", description: "原状回復義務等の将来費用見積額。目安: オフィス退去時の原状回復費用を見積計上。賃貸契約書の原状回復条項を確認" },

  // ================================================================
  // 3xx: 純資産
  // ================================================================
  { code: "301", name: "資本金", category: "equity", taxCategory: "non_taxable", description: "株主からの出資金。目安: 登記簿の資本金額。1億円以下で中小企業の税制優遇（交際費・少額減価償却等）。増資・減資は登記が必要" },
  { code: "302", name: "資本剰余金", category: "equity", taxCategory: "non_taxable", description: "資本取引から生じた剰余金。目安: 増資時に資本金に組み入れなかった額（資本準備金）。出資額の1/2まで準備金にできる" },
  { code: "303", name: "利益剰余金", category: "equity", taxCategory: "non_taxable", description: "過去の利益の蓄積。目安: 利益準備金（配当の1/10を積立）＋繰越利益剰余金。会社の内部留保" },
  { code: "304", name: "繰越利益剰余金", category: "equity", taxCategory: "non_taxable", description: "前期以前からの利益の繰越額。目安: 当期純利益が加算、配当・処分が減算。マイナスなら累積赤字" },
  { code: "305", name: "自己株式", category: "equity", taxCategory: "non_taxable", description: "取得した自社株式。目安: 純資産の控除項目（マイナス表示）。株主への金庫株買取り等" },
  { code: "306", name: "その他有価証券評価差額金", category: "equity", taxCategory: "non_taxable", description: "投資有価証券の時価評価差額。目安: 全部純資産直入法で計上。税効果を考慮" },
  { code: "307", name: "新株予約権", category: "equity", taxCategory: "non_taxable", description: "ストックオプション等の新株予約権。目安: スタートアップのSO発行時に使用。行使時に資本金へ振替" },
  { code: "308", name: "元入金", category: "equity", taxCategory: "non_taxable", description: "個人事業主の事業元入金。目安: 法人の資本金に相当。期首元入金＝前期末元入金＋前期利益＋事業主借−事業主貸" },
  { code: "309", name: "事業主貸", category: "equity", taxCategory: "non_taxable", description: "個人事業主が事業から私的に引き出した金額。目安: 生活費の引出し、所得税・住民税の納付、国民年金・国民健康保険料等" },
  { code: "310", name: "事業主借", category: "equity", taxCategory: "non_taxable", description: "個人事業主が事業に私的資金を投入した金額。目安: 個人口座からの事業資金補填、個人カードで事業経費を支払った場合" },

  // ================================================================
  // 4xx: 収益
  // ================================================================

  // ── 売上高 ──
  { code: "411", name: "売上高", category: "income", taxCategory: "standard_10", description: "本業の売上。目安: 請求書発行ベースで計上（発生主義）。入金日ではなく役務提供日・納品日で認識。業種別に補助科目で管理すると分析に便利" },
  { code: "412", name: "売上値引・返品", category: "income", taxCategory: "standard_10", description: "売上の値引き・返品。目安: 売上高のマイナスとして計上。インボイス制度では返還インボイス（適格返還請求書）の交付が必要" },
  { code: "413", name: "受託収入", category: "income", taxCategory: "standard_10", description: "業務委託・受託開発の収入。目安: IT企業の受託開発、コンサルティング報酬等。売上高と分けて管理する場合に使用" },

  // ── 営業外収益 ──
  { code: "421", name: "雑収入", category: "income", taxCategory: "standard_10", description: "本業以外の少額の収入。目安: 自販機手数料、スクラップ売却、ポイント還元の雑収入等。金額が大きいものは個別の科目を設定" },
  { code: "422", name: "受取利息", category: "income", taxCategory: "exempt", description: "預金・貸付金の利息収入。目安: 非課税売上（消費税法別表第一）。源泉税20.315%が天引きされた後の手取額で入金。源泉税は法人税から控除可" },
  { code: "423", name: "受取配当金", category: "income", taxCategory: "non_taxable", description: "株式の配当金収入。目安: 不課税取引。源泉税20.42%が天引き。益金不算入制度あり（持株比率により全額〜50%不算入）" },
  { code: "424", name: "為替差益", category: "income", taxCategory: "non_taxable", description: "外貨建取引の為替差益。目安: 不課税取引。外貨建売掛金・預金の期末換算差額、外貨決済時の差額" },
  { code: "425", name: "有価証券売却益", category: "income", taxCategory: "exempt", description: "有価証券の売却益。目安: 非課税売上。課税売上割合の計算に影響（分母に5%算入）" },
  { code: "426", name: "受取家賃", category: "income", taxCategory: "standard_10", description: "不動産の賃貸収入。目安: 事業用は課税売上10%、住宅用は非課税売上。サブリースの場合も同様" },
  { code: "427", name: "仕入割引", category: "income", taxCategory: "non_taxable", description: "早期支払いによる割引。目安: 支払期日前の入金に対する値引き。営業外収益として計上" },
  { code: "428", name: "雑収入（非課税）", category: "income", taxCategory: "exempt", description: "保険金収入等の非課税雑収入。目安: 損害保険金の受取り、社宅家賃の従業員負担分（住宅用）等" },

  // ── 特別利益 ──
  { code: "431", name: "固定資産売却益", category: "income", taxCategory: "standard_10", description: "固定資産の売却益。目安: 帳簿価額と売却額の差額。土地の売却は非課税。車両・備品は課税売上。消費税の処理に注意" },
  { code: "432", name: "貸倒引当金戻入", category: "income", taxCategory: "non_taxable", description: "前期に計上した貸倒引当金の取り崩し。目安: 前期の引当額が過大だった場合に戻入。洗替法の場合は毎期全額戻入→再計上" },
  { code: "433", name: "前期損益修正益", category: "income", taxCategory: "non_taxable", description: "前期以前の損益の修正。目安: 過年度の費用の過大計上が判明した場合等。金額が重要な場合に使用" },
  { code: "434", name: "補助金収入", category: "income", taxCategory: "non_taxable", description: "国・地方自治体からの補助金・助成金。目安: 不課税取引。IT導入補助金、ものづくり補助金、雇用調整助成金等。圧縮記帳で課税繰延べ可能" },
  { code: "435", name: "保険差益", category: "income", taxCategory: "non_taxable", description: "保険金が帳簿価額を上回る場合の差益。目安: 火災保険金−被災資産の帳簿価額＝保険差益。圧縮記帳で課税繰延べ可能" },

  // ================================================================
  // 5xx: 費用
  // ================================================================

  // ── 売上原価 ──
  { code: "501", name: "仕入高", category: "expense", taxCategory: "standard_10", description: "商品の仕入代金。目安: 三分法で処理。仕入先ごとに補助科目。仕入割戻しがある場合は仕入高から控除" },
  { code: "502", name: "仕入値引・返品", category: "expense", taxCategory: "standard_10", description: "仕入の値引き・返品。目安: 仕入高のマイナスとして計上。返還インボイスの受領・保存が必要" },
  { code: "503", name: "期首商品棚卸高", category: "expense", taxCategory: "non_taxable", description: "期首の商品在庫金額。目安: 前期末の期末棚卸高と一致。売上原価の計算に使用（期首＋仕入−期末＝売上原価）" },
  { code: "504", name: "期末商品棚卸高", category: "expense", taxCategory: "non_taxable", description: "期末の商品在庫金額。目安: 実地棚卸に基づき計上。売上原価のマイナス。棚卸減耗・評価損は別途計上" },
  { code: "505", name: "材料費", category: "expense", taxCategory: "standard_10", description: "製造に使用した原材料費。目安: 製造業の原価計算で使用。直接材料費と間接材料費に区分" },
  { code: "506", name: "労務費", category: "expense", taxCategory: "non_taxable", description: "製造に従事した従業員の人件費。目安: 製造業の原価計算で使用。不課税。直接工の賃金が中心" },
  { code: "507", name: "製造経費", category: "expense", taxCategory: "standard_10", description: "製造に関する経費。目安: 工場の水道光熱費・減価償却費・修繕費等。製造原価報告書で管理" },
  { code: "508", name: "外注加工費", category: "expense", taxCategory: "standard_10", description: "製造の外注加工費。目安: 製品の一部工程を外部に委託した場合。外注費（販管費）との違いは「製造に直結するかどうか」" },

  // ── 販売費及び一般管理費 ──
  { code: "511", name: "旅費交通費", category: "expense", taxCategory: "standard_10", description: "交通費・出張旅費・宿泊費・ガソリン代。目安: 出張旅費規程に基づく日当も含む。通勤手当は非課税限度額内なら所得税非課税だが、会社の経費としては課税仕入" },
  { code: "512", name: "通信費", category: "expense", taxCategory: "standard_10", description: "電話・インターネット・SaaS利用料。目安: 月額のクラウドサービス（AWS, Google等）、携帯電話料金。買い切りソフトウェアはソフトウェア（資産）で処理" },
  { code: "513", name: "消耗品費", category: "expense", taxCategory: "standard_10", description: "文房具・PC周辺機器・10万円未満の備品。目安: 10万円未満は即時費用化。10〜20万円は一括償却資産、20〜30万円は中小企業特例で即時償却も選択可" },
  { code: "514", name: "接待交際費", category: "expense", taxCategory: "standard_10", description: "取引先との飲食・贈答品・ゴルフ等。目安: 資本金1億円以下の法人は年800万円まで全額損金算入 or 飲食費の50%損金算入の選択（措法61の4）。社内飲食は除外基準の対象外" },
  { code: "515", name: "会議費", category: "expense", taxCategory: "standard_10", description: "打合せ時の飲食・会議室利用料。目安: 1人あたり1万円以下の飲食費（2024年4月改正）。社外の人との飲食で、日時・参加者・人数・金額・店名の記録が要件" },
  { code: "516", name: "新聞図書費", category: "expense", taxCategory: "standard_10", description: "書籍・新聞・雑誌・電子書籍。目安: 業務に関連する書籍は全額経費。定期購読の紙の新聞は軽減税率8%、電子版は10%。高額な専門書でも業務関連なら経費" },
  { code: "517", name: "支払手数料", category: "expense", taxCategory: "standard_10", description: "振込手数料・決済手数料・士業報酬。目安: 銀行振込手数料、クレジット決済手数料、税理士・弁護士報酬。士業への支払いは源泉徴収（10.21%）が必要" },
  { code: "518", name: "外注費", category: "expense", taxCategory: "standard_10", description: "フリーランス・外部業者への業務委託費。目安: 個人への支払いは源泉徴収が必要な場合あり（デザイン・原稿料等）。給与との区分が税務調査の重点項目" },
  { code: "519", name: "地代家賃", category: "expense", taxCategory: "standard_10", description: "オフィス・コワーキング・倉庫の賃料。目安: 事業用は課税仕入10%。住宅用（社宅等）は非課税。礼金20万円以上は繰延資産（5年償却）、20万円未満は一括経費" },
  { code: "520", name: "水道光熱費", category: "expense", taxCategory: "standard_10", description: "電気・ガス・水道料金。目安: 自宅兼事務所の場合は面積比・使用時間比で按分が必要。全額経費にすると税務調査で否認リスク" },
  { code: "521", name: "広告宣伝費", category: "expense", taxCategory: "standard_10", description: "Web広告・チラシ・PR費用・ノベルティ。目安: Google Ads・SNS広告・PR TIMES等。カレンダー・手帳等の少額ノベルティも含む。1個あたり1万円超の贈答品は交際費" },
  { code: "522", name: "諸会費", category: "expense", taxCategory: "non_taxable", description: "商工会・業界団体等の年会費。目安: 対価性なしの会費は不課税。同業者団体の通常会費は損金算入可。ロータリー・ライオンズの会費は交際費になる場合あり" },
  { code: "523", name: "雑費", category: "expense", taxCategory: "standard_10", description: "他の科目に該当しない少額の費用。目安: 雑費が多いと税務調査で指摘されやすい。売上の1%以内が目安。金額が大きいものは適切な科目に振替" },
  { code: "524", name: "租税公課", category: "expense", taxCategory: "non_taxable", description: "印紙税・固定資産税・自動車税・事業税等。目安: 不課税。法人税・住民税は損金不算入（租税公課ではなく法人税等で処理）。延滞税・加算税も損金不算入" },
  { code: "525", name: "保険料", category: "expense", taxCategory: "exempt", description: "損害保険・生命保険。目安: 非課税仕入。火災保険・自動車保険は全額経費。経営者の生命保険は保険種類により全額経費〜資産計上まで処理が異なる" },
  { code: "526", name: "減価償却費", category: "expense", taxCategory: "non_taxable", description: "固定資産の期間配分費用。目安: 定額法or定率法で計算。建物は定額法のみ。中小企業は30万円未満の少額減価償却資産の特例（年間合計300万円まで即時償却）が使える" },
  { code: "527", name: "研修費", category: "expense", taxCategory: "standard_10", description: "セミナー・研修・資格取得費用。目安: 業務に直接必要な研修は全額経費。汎用的な資格（英語・MBA等）は否認リスクあり。人材開発支援助成金の対象になる場合も" },
  { code: "528", name: "給料手当", category: "expense", taxCategory: "non_taxable", description: "従業員への給与・賞与。目安: 不課税。毎月の給与・残業手当・通勤手当を含む。社会保険料の会社負担分は法定福利費で別管理" },
  { code: "529", name: "法定福利費", category: "expense", taxCategory: "non_taxable", description: "社会保険料・労働保険料の会社負担分。目安: 不課税。健康保険・厚生年金（約15%）、雇用保険（0.6%）、労災保険（業種別）。概算で給与の約15〜16%が目安" },
  { code: "530", name: "福利厚生費", category: "expense", taxCategory: "standard_10", description: "慶弔費・社内イベント・従業員向け福利。目安: 社員全員が対象であること（特定個人向けは給与課税）。社員旅行は4泊5日以内・全員参加が条件" },
  { code: "531", name: "リース料", category: "expense", taxCategory: "standard_10", description: "OA機器・車両等のリース・レンタル料。目安: オペレーティングリースは全額経費。ファイナンスリースは資産計上が原則（中小企業は例外あり）" },
  { code: "532", name: "修繕費", category: "expense", taxCategory: "standard_10", description: "建物・設備の修理費。目安: 原状回復は修繕費、価値向上・耐用年数延長は資本的支出。20万円未満は修繕費でOK。判断に迷ったら7:3基準を参照" },
  { code: "533", name: "荷造運賃", category: "expense", taxCategory: "standard_10", description: "宅配便・郵送料・梱包費。目安: ヤマト・佐川・日本郵便等の送料。切手は購入時に経費計上可（継続適用）。大量に残る場合は貯蔵品" },
  { code: "534", name: "採用費", category: "expense", taxCategory: "standard_10", description: "求人広告・人材紹介手数料・採用活動費。目安: 人材紹介手数料（年収の30〜35%）、求人媒体掲載料、会社説明会費用。100人規模では年間数百万円規模になることも" },
  { code: "535", name: "寄付金", category: "expense", taxCategory: "non_taxable", description: "寄付金。目安: 不課税。損金算入限度額あり（資本金×0.25%＋所得×2.5%）の1/4。国・地方への寄付は全額損金算入。認定NPOは特別損金算入限度額" },
  { code: "536", name: "役員報酬", category: "expense", taxCategory: "non_taxable", description: "取締役・監査役への報酬。目安: 不課税。定期同額給与が原則（期中変更は原則損金不算入）。事前確定届出給与（賞与）は届出が必要" },
  { code: "537", name: "賞与", category: "expense", taxCategory: "non_taxable", description: "従業員賞与。目安: 不課税。未払計上は支給日が翌期でも当期の損金にできる場合あり（通知・支給日の要件あり）" },
  { code: "538", name: "退職金", category: "expense", taxCategory: "non_taxable", description: "退職時の一時金。目安: 不課税。退職金規程に基づき支給。中退共掛金は毎月の福利厚生費で処理（退職金科目は不要）" },
  { code: "539", name: "車両費", category: "expense", taxCategory: "standard_10", description: "ガソリン代・駐車場代・車検・修理費等。目安: 旅費交通費と分けて車両関連費用を一括管理する場合に使用。私用兼用は走行距離等で按分" },

  // ── 営業外費用 ──
  { code: "541", name: "支払利息", category: "expense", taxCategory: "exempt", description: "借入金の利息。目安: 非課税仕入。銀行融資・社債の利息。利息制限法の範囲内であること。関連会社間の貸借は移転価格税制に注意" },
  { code: "542", name: "為替差損", category: "expense", taxCategory: "non_taxable", description: "外貨建取引の為替差損。目安: 不課税。期末の外貨建資産・負債の換算差額。為替予約によるヘッジは時価評価" },
  { code: "543", name: "売上割引", category: "expense", taxCategory: "non_taxable", description: "早期入金に対する割引。目安: 得意先が支払期日前に入金した場合の値引き。営業外費用として計上" },
  { code: "544", name: "有価証券売却損", category: "expense", taxCategory: "exempt", description: "有価証券の売却損。目安: 売却価額−帳簿価額のマイナス分。特定口座の場合は源泉徴収済み" },
  { code: "545", name: "雑損失", category: "expense", taxCategory: "standard_10", description: "営業外の少額損失。目安: 現金過不足の損失、少額の違約金等。金額が大きいものは個別科目を設定" },

  // ── 特別損失 ──
  { code: "551", name: "固定資産売却損", category: "expense", taxCategory: "standard_10", description: "固定資産の売却損。目安: 帳簿価額−売却額のマイナス分。土地の売却損は非課税。消費税の処理に注意" },
  { code: "552", name: "固定資産除却損", category: "expense", taxCategory: "non_taxable", description: "固定資産の廃棄・除却による損失。目安: 未償却残高を一括費用化。除却の事実を証明する書類（写真・廃棄証明等）を保存" },
  { code: "553", name: "貸倒損失", category: "expense", taxCategory: "non_taxable", description: "売掛金等の回収不能額。目安: 法的整理（破産等）、書面での債権放棄、1年以上の取引停止後の備忘価額（1円）処理。安易な損失計上は否認リスク" },
  { code: "554", name: "貸倒引当金繰入", category: "expense", taxCategory: "non_taxable", description: "将来の貸倒に備える引当金。目安: 一般債権は期末残高×法定繰入率（卸小売1.0%、製造0.8%等）。個別評価は回収不能見込額を個別に算定" },
  { code: "555", name: "前期損益修正損", category: "expense", taxCategory: "non_taxable", description: "前期以前の損益の修正。目安: 過年度の収益の過大計上や費用の計上漏れが判明した場合。金額が重要な場合に使用" },
  { code: "556", name: "災害損失", category: "expense", taxCategory: "non_taxable", description: "自然災害等による資産の損失。目安: 地震・台風・水害等による損失。保険金との差額が実質損失。災害損失特別勘定の設定も可能" },

  // ── 法人税等 ──
  { code: "561", name: "法人税等", category: "expense", taxCategory: "non_taxable", description: "法人税・住民税・事業税。目安: 不課税。損金不算入。中間申告の納付額も含む。実効税率は約30%（資本金1億円以下・所得800万円以下は約22%）" },
  { code: "562", name: "法人税等調整額", category: "expense", taxCategory: "non_taxable", description: "税効果会計による調整額。目安: 繰延税金資産・負債の増減額。会計上の利益と税務上の所得の差異を調整" },
];

// ============================================================
// ユーティリティ関数
// ============================================================

export function getAccountByCode(code: string): Account | undefined {
  return ACCOUNTS.find((a) => a.code === code);
}

export function getAccountByName(name: string): Account | undefined {
  return ACCOUNTS.find((a) => a.name === name);
}

export function getExpenseAccounts(): Account[] {
  return ACCOUNTS.filter((a) => a.category === "expense");
}

export function getAssetAccounts(): Account[] {
  return ACCOUNTS.filter((a) => a.category === "asset");
}

export function getLiabilityAccounts(): Account[] {
  return ACCOUNTS.filter((a) => a.category === "liability");
}

export function getEquityAccounts(): Account[] {
  return ACCOUNTS.filter((a) => a.category === "equity");
}

export function getIncomeAccounts(): Account[] {
  return ACCOUNTS.filter((a) => a.category === "income");
}

export function getAccountsByCategory(category: Account["category"]): Account[] {
  return ACCOUNTS.filter((a) => a.category === category);
}
