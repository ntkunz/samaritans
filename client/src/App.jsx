// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Cards from "./components/Cards/Cards";
import Card from "./components/Card/Card";
// import Header from "./components/Header/Header";
// import Home from "./pages/Home/Home";
// import Result from "./pages/Result/Result";
// import "./App.scss";

function App() {


  return (
    <>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Result  />} />
          <Route
            path="results/:resultId"
            element={<Result  />}
          />
        </Routes>
      </BrowserRouter> */}
      <Cards />
      <Card />
    </>
  );
}

export default App;
