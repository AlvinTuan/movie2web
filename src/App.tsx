import React from "react";
import Header from "./layout/Header";
import Banner from "./components/banner/Banner";
import { Route, Router, Routes } from "react-router-dom";
import Main from "./layout/Main";
import HomePage from "./pages/HomePage";
import "swiper/scss";
import Originales from "./pages/Originales";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="originales" element={<Originales></Originales>}></Route>
          <Route
            path="originales/originale/:movieID"
            element={
              <>
                <MovieDetailsPage></MovieDetailsPage>
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
