/* ============================================================
   商品データ（タンパク質1gあたりのコスパ最強プロテインランキング）
   ------------------------------------------------------------
   ・実在の楽天市場取扱商品10点を調査し、各商品の
     価格(price) / 内容量(volumeG) / たんぱく質含有率(proteinPercent)
     を掲載しています。
   ・「1gあたり価格」はここでは持たず、下の calcPricePerGramProtein()
     で毎回計算しています（= 単なる転記ではなく、実際に計算ロジックで
     算出したランキングになります）。
   ・price や proteinPercent は商品ページの表示価格・栄養成分表示を
     もとにした参考値です。価格はセールにより変動するため、正確な
     金額は rakutenUrl 先の商品ページでご確認ください。
   ・image / rakutenUrl は楽天アフィリエイトのリンク・画像URLです。
   ・商品を追加・編集する場合はこの配列を編集してください。
     rank は持たせておらず、価格が安い順に自動で並び替えられます。
   ============================================================ */

   export const PRODUCTS = [
    {
      id: 1,
      brand: "ALPRON（アルプロン）",
      name: "ホエイプロテイン WPC 大容量（選べるフレーバー）",
      type: "WPC（ホエイコンセントレート）",
      volume: "3kg",
      volumeG: 3000,
      price: 7208,
      proteinPercent: 80,
      tags: ["大容量", "国内生産", "フレーバー豊富"],
      color: "#14213D",
      tagline: "国内生産・低価格を掲げるブランドの大容量WPC。フレーバーも豊富で続けやすい",
      features: [
        "「高品質・低価格」を掲げるブランドで、3kgの大容量タイプはとくに1gあたりのコスパが良い",
        "たんぱく質含有量は約80%と、WPCの中では高めの設計",
        "チョコ、抹茶、ストロベリーなど選べるフレーバー展開",
        "国内工場での生産にこだわっている"
      ],
      aroma:
        "フレーバーの種類が多く、定番のチョコレートは甘さ控えめでカカオの香ばしさが立ち、抹茶は茶葉の香りをしっかり感じられる本格的な仕上がりです。",
      recommendFor: ["とにかく1gあたりの単価を抑えたい人", "大容量をまとめ買いしたい人", "国内生産にこだわりたい人"],
      image: "https://hbb.afl.rakuten.co.jp/hgb/569578f8.3dff8f47.569578f9.4d13f1d6/?me_id=1285128&item_id=10000069&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Falpron%2Fcabinet%2Flp%2Fhoujin%2Fr6_wpc%2Fwpc_sam_3.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
      rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/569578f8.3dff8f47.569578f9.4d13f1d6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Falpron%2Frakutenwhey003%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D"
    },
    {
      id: 2,
      brand: "GronG（グロング）",
      name: "ホエイプロテイン100 スタンダード",
      type: "WPC（ホエイコンセントレート）",
      volume: "1kg",
      volumeG: 1000,
      price: 2980,
      proteinPercent: 75,
      tags: ["低価格", "ビタミン11種配合", "国内製造"],
      color: "#FF5C35",
      tagline: "1kgあたり3,000円を切る価格帯で、たんぱく質1gあたりのコスパにも定評があるスタンダード品",
      features: [
        "たんぱく質含有率75%以上を目安に設計されたWPCプロテイン",
        "ビタミン11種類を配合し、プロテインと一緒に栄養補給ができる",
        "1kg・3kgの2サイズ展開で、まとめ買いするほど1回あたりの単価が下がる",
        "チョコ、キャラメル、ストロベリーなど9種類のフレーバーを用意"
      ],
      aroma:
        "ココア風味は甘さがしっかりめでシェイク直後の泡立ちも香りの一部になっており、抹茶は茶葉の香りが際立つ落ち着いた仕上がりです。",
      recommendFor: ["初めてコスパ重視でプロテインを選びたい人", "ビタミンも一緒に摂りたい人", "1kg単位で気軽に試したい人"],
      image: "https://hbb.afl.rakuten.co.jp/hgb/56957b7c.11d6653e.56957b7d.6fdd06a9/?me_id=1384858&item_id=10000152&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fgrong%2Fcabinet%2F07429343%2Fcp_px5%2Fr_1kg_point_260604.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
      rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/56957b7c.11d6653e.56957b7d.6fdd06a9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgrong%2Fgrong-184%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D"
    },
    {
      id: 3,
      brand: "be LEGEND（ビーレジェンド）",
      name: "WPCプロテイン GENMATSU",
      type: "WPC（ホエイコンセントレート・無香料タイプ）",
      volume: "900g",
      volumeG: 900,
      price: 2680,
      proteinPercent: 66.7,
      tags: ["甘味料無添加", "アレンジ向き", "低価格"],
      color: "#B8B2A0",
      tagline: "甘味料を加えないシンプル設計で、他のフレーバー付きシリーズよりも価格を抑えたラインナップ",
      features: [
        "人気ブランドbe LEGENDの中でも、甘味料無添加でコストを抑えたGENMATSUシリーズ",
        "アミノ酸スコア100のホエイプロテインを100%使用",
        "味がついていない分、バナナやジャムなどと混ぜてアレンジしやすい",
        "1食あたり20g以上のたんぱく質を目安に設計"
      ],
      aroma:
        "香料を加えていないぶん、乳清たんぱく由来のほのかな乳の香りが感じられる程度で主張は控えめ。フルーツやジャムと合わせると、その香りが前面に出やすいタイプです。",
      recommendFor: ["味付きより無香料でアレンジしたい人", "とにかく単価を抑えたい人", "毎日の作り置きに使いたい人"],
      image: "https://hbb.afl.rakuten.co.jp/hgb/568cac8c.d4385860.568cac8d.7dac6c1e/?me_id=1252285&item_id=10002435&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Frealstyle4u%2Fcabinet%2Fshouhin%2Fblps06ap1_point5.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
      rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/568cac8c.d4385860.568cac8d.7dac6c1e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frealstyle4u%2Fblps06ap1%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D"
    },
    {
      id: 4,
      brand: "X-PLOSION（エクスプロージョン）",
      name: "WPCエクスプロージョン カフェオレ味 3kg",
      type: "WPC（ホエイコンセントレート）",
      volume: "3kg",
      volumeG: 3000,
      price: 10780,
      proteinPercent: 74.9,
      tags: ["大容量", "たんぱく質含有率高め", "コーヒー系フレーバー"],
      color: "#5C4433",
      tagline: "3kgの大容量に加え、100gあたりのたんぱく質含有率が高めでコスパの良さにつながっている",
      features: [
        "栄養成分表示で100gあたりたんぱく質74.9gと、WPCの中でも高い含有率",
        "3kgの大容量パックで、まとめ買いするほど単価が下がりやすい",
        "深煎りコーヒーを思わせるカフェオレ風味で、水割りでも満足感がある",
        "国内製造のWPC製法を採用"
      ],
      aroma:
        "深煎りコーヒーのようなほろ苦い香りが中心で、牛乳や豆乳で割るとカフェオレそのものの香ばしい香りに変化します。",
      recommendFor: ["コーヒー系フレーバーが好きな人", "含有率まで含めてコスパを比較したい人", "3kgの大容量でも置き場所に困らない人"],
      image: "https://hbb.afl.rakuten.co.jp/hgb/568c9874.ea416002.568c9875.f3bd9097/?me_id=1349860&item_id=10000021&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fx-plosion%2Fcabinet%2Fyec%2F09841231%2F250313_10000017.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
      rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/568c9874.ea416002.568c9875.f3bd9097/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fx-plosion%2F10000017%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D"
    },
    {
      id: 5,
      brand: "Myprotein（マイプロテイン）",
      name: "Impact ホエイプロテイン 2.5kg",
      type: "WPC（ホエイコンセントレート）",
      volume: "2.5kg",
      volumeG: 2500,
      price: 9709,
      proteinPercent: 76.7,
      tags: ["海外ブランド", "フレーバー40種以上", "大容量"],
      color: "#14213D",
      tagline: "イギリス発の定番ブランド。大容量サイズを選ぶことで1gあたりの単価を抑えやすい",
      features: [
        "1食（30g）あたりたんぱく質23gと、含有率の高さもコスパに貢献",
        "40種類以上のフレーバーから選べ、日本ではナチュラルチョコレートが人気",
        "セールやクーポンを利用するとさらに単価を下げやすい海外ブランド",
        "1kg・2.5kg・5kgと容量展開が豊富"
      ],
      aroma:
        "定番のナチュラルチョコレートは甘さの効いたココアの香りが中心で、抹茶やティラミスなど個性的なフレーバーも展開されています。",
      recommendFor: ["セールをうまく使ってコスパを追求したい人", "フレーバーの選択肢を重視したい人", "海外ブランドに抵抗がない人"],
      image: "https://hbb.afl.rakuten.co.jp/hgb/568ca9ef.07a0b224.568ca9f0.ab929fed/?me_id=1363648&item_id=10012833&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fmyprotein%2Fcabinet%2Fit3%2F10530943_2500_sam.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
      rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/568ca9ef.07a0b224.568ca9f0.ab929fed/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmyprotein%2F10530943_2500%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D"
    },
    {
      id: 6,
      brand: "X-PLOSION（エクスプロージョン）",
      name: "WPCエクスプロージョン ミルクチョコレート味 3kg",
      type: "WPC（ホエイコンセントレート）",
      volume: "3kg",
      volumeG: 3000,
      price: 10780,
      proteinPercent: 69.6,
      tags: ["大容量", "定番チョコ味", "コスパ重視"],
      color: "#6B3A2A",
      tagline: "同ブランドのカフェオレ味と並ぶ人気フレーバー。大容量ならではの単価の安さが魅力",
      features: [
        "栄養成分表示で100gあたりたんぱく質69.6gのWPCプロテイン",
        "3kgの大容量パックでコストパフォーマンスを重視",
        "国内製造で、コクのあるミルクチョコレート風味に仕上げている",
        "水割りでも満足感のある甘さ"
      ],
      aroma:
        "カカオを思わせる甘くやや香ばしい香りが中心で、牛乳や豆乳で割るとミルクチョコレートそのものの香りに近づきます。",
      recommendFor: ["定番のチョコ味でコスパも重視したい人", "大容量でまとめ買いしたい人", "国内製造にこだわりたい人"],
      image: "https://hbb.afl.rakuten.co.jp/hgb/568c9874.ea416002.568c9875.f3bd9097/?me_id=1349860&item_id=10000023&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fx-plosion%2Fcabinet%2Fyec%2F11362306%2F241227_10000019.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
      rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/568c9874.ea416002.568c9875.f3bd9097/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fx-plosion%2F10000019%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D"
    },
    {
      id: 7,
      brand: "DNS（ディーエヌエス）",
      name: "プロテインホエイ100 プレーン味",
      type: "WPC（ホエイコンセントレート）",
      volume: "1000g",
      volumeG: 1000,
      price: 4233,
      proteinPercent: 74.5,
      tags: ["アスリート向け", "たんぱく質含有率高め", "国内製造"],
      color: "#B8B2A0",
      tagline: "1食あたりたんぱく質24g以上を謳う、アスリート向けブランドの定番プロテイン",
      features: [
        "1食（33g）あたりたんぱく質24.6gと、含有率の高さが特徴",
        "水にも溶けやすく、泡立ちが少ない設計",
        "合成着色料不使用で、味だけでなく品質にもこだわっている",
        "プレーン味は料理へのアレンジにも使いやすい"
      ],
      aroma:
        "香料を加えていないプレーン味は、乳清たんぱく由来のほのかにミルキーな香りが中心。クセが少なく、コーヒーやきなこなど好きな香りを足しやすいタイプです。",
      recommendFor: ["含有率の高さも重視したい人", "アスリート向けブランドを選びたい人", "料理にもアレンジしたい人"],
      // 提供いただいたHTMLがテキストリンクのみで商品画像を含んでいなかったため、画像は元の直リンクのままにしています
      image: "https://shop.r10s.jp/dnsshop/cabinet/samune202209/samuneiru01/wheyprotein100-plain.jpg",
      rakutenUrl: "https://hb.afl.rakuten.co.jp/hgc/56958c44.7c6c3f3f.56958c45.b3ff9625/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdnsshop%2Fwheyprotein100-plain%2F&link_type=text&ut=eyJwYWdlIjoidXJsIiwidHlwZSI6InRleHQiLCJjb2wiOjF9"
    },
    {
      id: 8,
      brand: "VITAS（バイタス）",
      name: "ホエイプロテイン100 WPCプロテイン",
      type: "WPC（ホエイコンセントレート）",
      volume: "1000g",
      volumeG: 1000,
      price: 3980,
      proteinPercent: 66.9,
      tags: ["フルーツ系フレーバー", "国内製造", "アミノ酸豊富"],
      color: "#4F7A3E",
      tagline: "フルーツ系フレーバーが豊富な人気ブランド。1kgあたりの価格は手頃な部類",
      features: [
        "1食（32g）あたりたんぱく質21.4gのWPCプロテイン",
        "リンゴヨーグルト、カフェラテ、ピーチヨーグルトなどフレーバーが豊富",
        "必須アミノ酸を含む21種類以上のアミノ酸と豊富なビタミン類を配合",
        "国内工場での自社製造による品質管理"
      ],
      aroma:
        "フルーツ系フレーバーは開封時からみずみずしい香りが立ち、ヨーグルトのような爽やかな酸味の香りが感じられるのが特徴です。",
      recommendFor: ["フルーツ系の香りが好きな人", "毎日違うフレーバーを楽しみたい人", "手頃な価格帯で試したい人"],
      image: "https://hbb.afl.rakuten.co.jp/hgb/568c9dad.0a498270.568c9dae.796f95f7/?me_id=1366655&item_id=10000219&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Ftoyomarket%2Fcabinet%2Fprotein%2Fimgrc0152839430.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
      rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/568c9dad.0a498270.568c9dae.796f95f7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftoyomarket%2Fvitas006%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D"
    },
    {
      id: 9,
      brand: "SAVAS（ザバス／明治）",
      name: "ホエイプロテイン100 リッチショコラ味",
      type: "WPC（ホエイコンセントレート）",
      volume: "980g",
      volumeG: 980,
      price: 4980,
      proteinPercent: 69.6,
      tags: ["定番ブランド", "ビタミンC・D配合", "溶けやすい"],
      color: "#6B3A2A",
      tagline: "国内最大手ブランドの定番品。知名度は高いが、1gあたりの単価はやや高めの水準",
      features: [
        "1食（28g）あたりたんぱく質19.5gのホエイプロテイン100%使用",
        "ビタミンB群・ビタミンD・ビタミンCを配合",
        "明治独自の造粒方法で、グラスやコップでも溶かしやすい設計",
        "ドラッグストアや量販店でも手に入りやすい定番ブランド"
      ],
      aroma:
        "リッチショコラ味はミルクチョコレートのような甘く優しい香りで、粉の状態からデザートのような香りが感じられます。",
      recommendFor: ["知名度・実績を重視したい人", "溶けやすさを優先したい人", "店頭でも購入できる安心感が欲しい人"],
      image: "https://hbb.afl.rakuten.co.jp/hgb/56958d3d.a9dccf7b.56958d3e.350e59e5/?me_id=1306273&item_id=10006183&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fsoukaidrink%2Fcabinet%2F102%2F4902777302102.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
      rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/56958d3d.a9dccf7b.56958d3e.350e59e5/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsoukaidrink%2F4902777302102%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D"
    },
    {
      id: 10,
      brand: "VALX（バルクス）",
      name: "ホエイプロテイン WPC（選べる8種フレーバー）",
      type: "WPC（ホエイコンセントレート）",
      volume: "1kg",
      volumeG: 1000,
      price: 7980,
      proteinPercent: 72.7,
      tags: ["山本義徳監修", "フレーバー8種", "国内生産"],
      color: "#E8536A",
      tagline: "トレーナー山本義徳氏監修の人気ブランド。ブランド力がある一方、1gあたりの単価は今回の中で最も高め",
      features: [
        "1食（30g）あたりたんぱく質21.4〜21.8gのWPCプロテイン",
        "チョコレート、ベリー、ヨーグルトなど8種類のフレーバーから選べる",
        "国内生産・GMP認定工場での品質管理",
        "山本義徳氏監修という付加価値を重視するブランド"
      ],
      aroma:
        "チョコレート味は甘さのしっかりしたココアの香り、ベリー味は甘酸っぱいフルーティな香りが特徴で、フレーバーごとの香りの作り込みに定評があります。",
      recommendFor: ["監修者やブランドの信頼性を重視したい人", "フレーバーの選択肢を求める人", "多少単価が高くても品質を優先したい人"],
      image: "https://hbb.afl.rakuten.co.jp/hgb/56958df3.1afac279.56958df4.e24344a4/?me_id=1380896&item_id=10000057&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fvalx%2Fcabinet%2Ftmb%2Ffriend_pt5%2Fwpc1kg_pt5.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
      rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/56958df3.1afac279.56958df4.e24344a4/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvalx%2Fv004001%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D"
    }
  ];
  
  /* ============================================================
     計算ロジック
     ------------------------------------------------------------
     1gあたりの価格 = 価格(円) ÷ (内容量(g) × たんぱく質含有率(%) ÷ 100)
     ============================================================ */
  export function calcProteinGrams(product) {
    return product.volumeG * (product.proteinPercent / 100);
  }
  
  export function calcPricePerGramProtein(product) {
    const proteinGrams = calcProteinGrams(product);
    if (!proteinGrams) return null;
    return product.price / proteinGrams;
  }
  
  // たんぱく質1gあたりの価格が安い順に並べ替え、順位(rank)を付与した配列を返す
  export function getRankedProducts() {
    return [...PRODUCTS]
      .map((p) => ({
        ...p,
        proteinGrams: calcProteinGrams(p),
        pricePerGramProtein: calcPricePerGramProtein(p)
      }))
      .sort((a, b) => a.pricePerGramProtein - b.pricePerGramProtein)
      .map((p, index) => ({ ...p, rank: index + 1 }));
  }
  
  export function getRankedProductById(id) {
    return getRankedProducts().find((p) => String(p.id) === String(id));
  }
  
  // 仮画像（画像を差し替えたい／取得できない場合のフォールバック）
  export function placeholderImage(label, bg) {
    const svg =
      `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'>` +
      `<rect width='600' height='600' fill='${bg}'/>` +
      `<text x='300' y='288' font-family='sans-serif' font-size='40' fill='#ffffff' text-anchor='middle' font-weight='700'>${label}</text>` +
      `<text x='300' y='336' font-family='sans-serif' font-size='20' fill='#ffffffb0' text-anchor='middle'>仮画像（差し替え用）</text>` +
      `</svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }
  
  export function getImage(p) {
    return p.image || placeholderImage(p.brand, p.color);
  }
  