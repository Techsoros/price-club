import React from "react";

const Link = ({ value }) => {
  return (
    <li className=" border-b-2 md:border-b-0  border-blue-400 mx-10 md:mx-0">
      <a href={value.path} className="">
        {value.name}
      </a>
    </li>
  );
};

export default Link;
