import React from "react";

function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <a href="#/" className="logo">
          PROTEIN <span className="badge">COSPA</span>
        </a>
        <nav className="site-nav">
          <a href="#/">ランキング一覧</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
