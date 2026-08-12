import React, { useEffect } from "react";
import { getRankedProducts, getRankedProductById, getImage } from "../data/products";

function ProductPage({ id }) {
  const product = getRankedProductById(id);

  useEffect(() => {
    if (!product) return;
    document.title = `${product.name}（${product.brand}）のコスパを解説｜タンパク質1gあたり最強プロテインランキング`;
    const meta = document.getElementById("meta-desc");
    if (meta) {
      meta.setAttribute(
        "content",
        `${product.name}のたんぱく質1gあたり価格・特徴・香りをまとめて紹介。${product.tagline}`
      );
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <main>
        <div className="wrap not-found">
          <h1>商品が見つかりませんでした</h1>
          <p>お探しの商品ページは存在しないか、削除された可能性があります。</p>
          <a className="back-btn" href="#/">← ランキング一覧に戻る</a>
        </div>
      </main>
    );
  }

  const related = getRankedProducts().filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main>
      <div className="wrap">
        <p className="breadcrumb">
          <a href="#/">ランキング一覧</a> ／ {product.name}
        </p>

        <div className="product-hero">
          <div>
            <a href={product.rakutenUrl} target="_blank" rel="noopener noreferrer">
              <img src={getImage(product)} alt={`${product.name}のパッケージ画像`} />
            </a>
          </div>
          <div>
            <span className="rank-tag">コスパ 総合{product.rank}位</span>
            <div className="brand">{product.brand}</div>
            <h1>{product.name}</h1>
            <p className="tagline">{product.tagline}</p>

            <div className="cospa-badge cospa-badge-large">
              1gあたり <strong>{product.pricePerGramProtein.toFixed(1)}</strong>円
            </div>

            <div className="chip-row" style={{ marginTop: 10 }}>
              {product.tags.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>

            <a
              href={product.rakutenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rakuten-btn"
            >
              楽天市場で見る（最新価格を確認）
            </a>
          </div>
        </div>

        <h2 className="section-title">コスパの計算内訳</h2>
        <div className="spec-frame">
          <table className="spec-table">
            <tbody>
              <tr>
                <th>参考価格</th>
                <td>¥{product.price.toLocaleString()}</td>
              </tr>
              <tr>
                <th>内容量</th>
                <td>{product.volume}</td>
              </tr>
              <tr>
                <th>たんぱく質含有率</th>
                <td>約{product.proteinPercent}%</td>
              </tr>
              <tr>
                <th>含有たんぱく質量</th>
                <td>約{Math.round(product.proteinGrams)}g</td>
              </tr>
              <tr>
                <th>1gあたり価格</th>
                <td><strong>{product.pricePerGramProtein.toFixed(2)}円/g</strong>（価格 ÷ 含有たんぱく質量）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="section-title">特徴</h2>
        <div className="spec-frame">
          <ul className="feature-list">
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <h2 className="section-title">香りについて</h2>
        <div className="spec-frame aroma-card">
          <span className="quote-mark">SCENT NOTE</span>
          <p>{product.aroma}</p>
        </div>

        <h2 className="section-title">こんな人におすすめ</h2>
        <div className="spec-frame recommend-box">
          <p>{product.name}は、特に次のような人に向いています。</p>
          <ul>
            {product.recommendFor.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <a className="back-btn" href="#/">← ランキング一覧に戻る</a>
      </div>

      <section className="related-section">
        <div className="wrap">
          <h2 className="section-title">他のコスパ上位プロテインも見る</h2>
          <div className="related-grid">
            {related.map((p) => (
              <a className="related-card" href={`#/product/${p.id}`} key={p.id}>
                <img src={getImage(p)} alt={`${p.name}のパッケージ画像`} loading="lazy" />
                <div className="rc-body">
                  <div className="rc-rank">RANK {p.rank}（1gあたり{p.pricePerGramProtein.toFixed(1)}円）</div>
                  <div className="rc-name">{p.name}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
