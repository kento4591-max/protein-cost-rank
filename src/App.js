import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

// URLの # 以降を見て、表示するページを判定するだけの簡易ルーティングです。
function parseHash() {
  const hash = window.location.hash.replace(/^#/, "") || "/";
  const productMatch = hash.match(/^\/product\/(\d+)/);
  if (productMatch) {
    return { page: "product", id: productMatch[1] };
  }
  return { page: "home" };
}

function App() {
  const [route, setRoute] = useState(parseHash());

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div>
      <Header />
      {route.page === "product" ? <ProductPage id={route.id} /> : <HomePage />}
      <Footer />
    </div>
  );
}

export default App;
