import React from "react";
// import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ProductsRoll from "./ProductsRoll";
// import Сontacts from "./Сontacts";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />

        <Main />

        <ProductsRoll />

        <Footer />
      </div>
    </div>
  );
}

export default App;
