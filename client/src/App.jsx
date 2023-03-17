import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";


import "./App.scss";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Result />} />
          <Route path="results/:resultId" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
