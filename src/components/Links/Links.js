import React from "react";
import { Link } from "react-router-dom";

const Links = ({ value }) => {
  return (
    <li className=" border-b-2 md:border-b-0  border-blue-400 mx-10 md:mx-0">
      <Link to={value.path}>{value.name}</Link>
    </li>
  );
};

export default Links;
