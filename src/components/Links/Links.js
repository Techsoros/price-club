import React from "react";
import { NavLink } from "react-router-dom";

const Links = ({ value }) => {
  return (
    <li className=" border-b-2 md:border-b-0 duration-500  border-blue-400 mx-10 md:mx-0 hover:text-blue-600 hover:font-bold">
      <NavLink
        className={({ isActive }) => (isActive ? "font-bold" : "")}
        to={value.path}
      >
        {value.name}
      </NavLink>
    </li>
  );
};

export default Links;
