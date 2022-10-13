import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Сontacts from "./Сontacts";


function App() {

  return (
      <div className="App">
        <div className="page">
          <Header/>

          <Routes>
            <Route
              path="/"
              element={
                  <Main
                  />
              }
            />

            <Route
              path="/contacts"
              element={<Сontacts/>}
            />

          </Routes>

          <Footer />

        </div>
      </div>
  );
}

export default App;
