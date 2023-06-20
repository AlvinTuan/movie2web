import { NavLink } from "react-router-dom";
import SearchBar from "../components/search/SearchBar";

// https://api.themoviedb.org/3/search/movie
const Header = () => {
  return (
    <header>
      <div className="page-container">
        <div className="flex items-center justify-start">
          <img src="/disney.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <ul className="p-0 font-bold">
            <li className="inline-block mx-3">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-secondary" : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li className="inline-block mx-3">
              <NavLink
                to="/originales"
                className={({ isActive }) => (isActive ? "text-secondary" : "")}
              >
                Originales
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end gap-x-5">
          <SearchBar></SearchBar>
          <img src="/Ellipse_6.png" alt="" className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
