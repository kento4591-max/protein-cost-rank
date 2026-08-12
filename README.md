# タンパク質1gあたりのコスパ最強プロテインランキング TOP10

前回の「楽天売れ筋プロテインランキングTOP10」と同じ構成（Create React App / src配下の構成、ハッシュルーティング、ビルド方法）で作った新しいサイトです。

## ファイル構成

```
protein-cospa-ranking/
├─ public/
│   ├─ sitemap.xml   … SEO用（URLは仮のもの。実際の公開URLに書き換えてください）
│   └─ robots.txt    … SEO用
└─ src/
    ├─ data/
    │   └─ products.js   … 商品データ＋「1gあたり価格」の計算ロジック
    ├─ components/
    │   ├─ Header.js
    │   └─ Footer.js
    ├─ pages/
    │   ├─ HomePage.js   … ランキング一覧（自動で安い順に並び替え）
    │   └─ ProductPage.js … 商品詳細（計算の内訳も表示）
    ├─ App.js
    └─ App.css
```

## 反映手順（前回と同じCRAプロジェクトに組み込む場合）

1. このzipを解凍
2. `src/data`・`src/components`・`src/pages`・`src/App.js`・`src/App.css` を、プロジェクトの `src/` フォルダにコピー（同名ファイルは上書き）
3. `public/sitemap.xml` と `public/robots.txt` を、プロジェクトの `public/` フォルダにコピー
   - `sitemap.xml` と `robots.txt` の中の `https://protein-cost-rank.vercel.app/` は仮のURLです。実際に公開するURLが決まったら書き換えてください。
4. `src/index.js` は変更不要（そのまま）
5. `npm start` で確認

※ このプロジェクトを新しく別サイトとして立ち上げる場合は、`create-react-app` などで空のプロジェクトを作ってから上記を上書きしてください。`src/index.js`・`public/index.html` はCRAの初期状態のままで問題ありません。

## コスパの計算ロジックについて

`src/data/products.js` の各商品データは、価格(`price`)・内容量(`volumeG`)・たんぱく質含有率(`proteinPercent`)だけを持たせています。「1gあたり価格」はその場で計算しており、値を直接入力する項目はありません。

```
1gあたり価格 = 価格 ÷ (内容量 × たんぱく質含有率 ÷ 100)
```

トップページ・商品詳細ページはこの計算結果をもとに安い順へ自動で並び替えるので、`price`・`volumeG`・`proteinPercent` を書き換えるだけでランキングの順位も自動的に更新されます。

## 商品を編集したいとき

`src/data/products.js` の `PRODUCTS` 配列を編集してください。

- 商品を増やす：ブロックをコピーして `id` を新しい番号に変更
- 商品を減らす：該当ブロックを削除
- 価格・内容量・含有率を変える：`price` / `volumeG` / `proteinPercent` を書き換えるだけで、1gあたり価格とランキング順位が自動で再計算されます
- 画像を差し替える：`image` の値を実画像のパスまたはURLに変更

## 注意事項

- 掲載している価格・たんぱく質含有率は、各商品の楽天市場ページ・メーカー公式情報をもとにした参考値です。セールやリニューアルにより変動するため、正確な最新情報は `rakutenUrl` 先の商品ページでご確認ください。
- `sitemap.xml` / `robots.txt` 内のドメインは仮のものです。実際に公開する際は、本番のURLに置き換えてください。
