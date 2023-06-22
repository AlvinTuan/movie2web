import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import "swiper/scss";

const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const Originales = lazy(() => import("./pages/Originales"));
const MovieMore = lazy(() => import("./pages/MovieMore"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route element={<Main></Main>}>
            <Route path="/home" element={<HomePage></HomePage>}></Route>
            <Route
              path="/originales"
              element={<Originales></Originales>}
            ></Route>
            <Route
              path="/originales/originale/:movieID"
              element={
                <>
                  <MovieDetailsPage></MovieDetailsPage>
                </>
              }
            ></Route>
            <Route
              path="/movies/:filter"
              element={<MovieMore></MovieMore>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
