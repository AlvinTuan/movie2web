import { NavLink } from "react-router-dom";
import SearchBar from "../components/search/SearchBar";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: (
      <div className="flex items-center gap-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        <NavLink to={"/"} replace>
          Logout
        </NavLink>
      </div>
    ),
    key: "3",
  },
];

// https://api.themoviedb.org/3/search/movie
const Header: React.FC = () => {
  return (
    <header>
      <div className="page-container">
        <div className="flex items-center justify-start">
          <NavLink to="/home">
            <img src="/disney.png" alt="" />
          </NavLink>
        </div>
        <div className="flex items-center justify-center">
          <ul className="p-0 font-bold">
            <li className="inline-block mx-3">
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "text-secondary" : "")}
              >
                Home
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
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <img src="/Ellipse_6.png" alt="" className="cursor-pointer" />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
