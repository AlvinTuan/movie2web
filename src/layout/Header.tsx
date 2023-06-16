import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select, Space } from "antd";
import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";

const { Search } = Input;

const Header = () => {
  return (
    <header className="header flex items-center justify-between px-20">
      <div className="flex items-center justify-center gap-x-14">
        <img src="/disney.png" alt="" />
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <img src="/Inicio.png" alt="" className="object-cover" />
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              Inicio
            </NavLink>
          </div>

          <div className="flex items-center gap-2">
            <img src="/Originales.png" alt="" className="object-cover" />
            <NavLink
              to="originales"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              Inicio
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-inherit w-[200px] h-10"
          />
        </div>
        <img
          src="/Ellipse_6.png"
          alt=""
          className="cursor-pointer focus:w-[200px]"
        />
      </div>
    </header>
  );
};

export default Header;
