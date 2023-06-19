import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select, Space } from "antd";
import { Col, Row } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const { Search } = Input;

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 page-container">
        <img
          src="/disney.png"
          alt=""
          className="flex items-center justify-start"
        />
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
                to="originales"
                className={({ isActive }) => (isActive ? "text-secondary" : "")}
              >
                Originales
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end">
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
      </div>
    </header>
  );
};

export default Header;
