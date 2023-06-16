import React from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="grid grid-cols-5 w-[1440px] mx-auto mt-14">
        <NavLink to={"disney"}>
          <img src="/image_1.png" alt="" className="h-[135px]" />{" "}
        </NavLink>
        <NavLink to={"pixar"}>
          <img src="/image_2.png" alt="" />{" "}
        </NavLink>
        <NavLink to={"marvel"}>
          <img src="/image_3.png" alt="" />{" "}
        </NavLink>
        <NavLink to={"starwar"}>
          <img src="/image_4.png" alt="" />{" "}
        </NavLink>
        <NavLink to={"national-geographic"}>
          <img src="/image_5.png" alt="" />{" "}
        </NavLink>
      </div>
    </>
  );
};

export default Categories;
