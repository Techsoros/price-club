import React from "react";

const Link = ({ value }) => {
  return (
    <li>
      <a href={value.path}>{value.name}</a>
    </li>
  );
};

export default Link;
