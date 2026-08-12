import React, { useEffect, useMemo } from "react";
import { getRankedProducts, getImage } from "../data/products";

function rankClass(rank) {
  if (rank === 1) return "gold";
  if (rank === 2) return "silver";
  if (rank === 3) return "bronze";
  return "";
}

function HomePage() {
  useEffect(() => {
    document.title = "【2026年最新】タンパク質1gあたりのコスパ最強プロテインランキング TOP10";
    const meta = document.getElementById("meta-desc");
    if (meta) {
      meta.setAttribute(
        "content",
        "楽天市場で販売中のプロテイン10商品を、価格とたんぱく質含有率から「1gあたりの単価」で独自に算出し、コスパが良い順にランキングしました。"
      );
    }
    window.scrollTo(0, 0);
  }, []);

  // 価格 ÷ (内容量 × たんぱく質含有率) で算出した「1gあたり価格」順のランキング
  const ranked = useMemo(() => getRankedProducts(), []);

  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">PROTEIN COSPA RANKING 2026</p>
          <h1>【2026年最新】タンパク質1gあたりのコスパ最強プロテインランキング TOP10</h1>
          <p className="lead">
            プロテインは「販売価格の安さ」だけで選ぶと、実はたんぱく質の含有率が低くて損をしていることがあります。このランキングでは、価格・内容量・たんぱく質含有率の3つから「タンパク質1gあたりの単価（円/g）」を算出し、コスパが良い順に10商品を並べています。
          </p>

          <div className="disclaimer-box">
            ※当サイトのランキングは、楽天市場内で販売されている主要プロテインの価格と成分表記を元に、タンパク質1gあたりの単価を独自に計算して順位付けしています。
          </div>

          <div className="criteria">
            <div className="criteria-item">
              <div className="num">FORMULA</div>
              <div className="label">1gあたり価格 = 価格 ÷（内容量 × たんぱく質含有率）</div>
            </div>
            <div className="criteria-item">
              <div className="num">POINT</div>
              <div className="label">価格の安さだけでなく含有率まで加味</div>
            </div>
            <div className="criteria-item">
              <div className="num">SOURCE</div>
              <div className="label">楽天市場の実売価格・成分表記をもとに算出</div>
            </div>
          </div>
        </div>
      </section>

      <section className="ranking-section">
        <div className="wrap">
          <ol className="ranking-list" aria-label="タンパク質コスパ最強プロテインランキング">
            {ranked.map((p) => (
              <li key={p.id} className="rank-card spec-frame">
                <div className="rank-card-inner">
                  <div className={`rank-num ${rankClass(p.rank)}`}>
                    <span className="n">{p.rank}</span>
                    <span className="l">RANK</span>
                  </div>
                  <a className="rank-thumb" href={`#/product/${p.id}`} aria-label={`${p.name}の詳細を見る`}>
                    <img src={getImage(p)} alt={`${p.name}のパッケージ画像`} loading="lazy" />
                  </a>
                  <div className="rank-body">
                    <div className="brand">{p.brand}</div>
                    <h2 className="name">
                      <a href={`#/product/${p.id}`}>{p.name}</a>
                    </h2>

                    <div className="cospa-badge">
                      1gあたり <strong>{p.pricePerGramProtein.toFixed(1)}</strong>円
                    </div>

                    <p className="tagline">{p.tagline}</p>
                    <div className="chip-row">
                      {p.tags.map((t) => (
                        <span className="chip" key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="stat-row">
                      <div className="stat">
                        参考価格
                        <strong>¥{p.price.toLocaleString()}</strong>
                      </div>
                      <div className="stat">
                        内容量
                        <strong>{p.volume}</strong>
                      </div>
                      <div className="stat">
                        含有率
                        <strong>約{p.proteinPercent}%</strong>
                      </div>
                      <a href={`#/product/${p.id}`} className="cta-link">
                        詳しく見る ›
                      </a>
                      <a
                        href={p.rakutenUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rakuten-btn rakuten-btn-small"
                      >
                        楽天で見る
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
