import React from "react";
import Header from "./layout/Header";
import Banner from "./components/banner/Banner";
import { Route, Router, Routes } from "react-router-dom";
import Main from "./layout/Main";
import HomePage from "./pages/HomePage";
import "swiper/scss";
import Originales from "./pages/Originales";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="originales" element={<Originales></Originales>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
