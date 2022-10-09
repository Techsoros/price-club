import React, { useState } from "react";
import Link from "../Link/Link";
import {
  BeakerIcon,
  Bars3BottomLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const links = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/Products" },
    { id: 3, name: "Catagories", path: "/Catagories" },
    { id: 4, name: "Wishlist", path: "/Wishlist" },
    { id: 5, name: "Contact", path: "/Contact" },
  ];
  return (
    <nav>
      {open ? (
        <XMarkIcon
          onClick={() => setOpen(!open)}
          className="h-10 w-10 cursor-pointer text-gray-600"
        />
      ) : (
        <Bars3BottomLeftIcon
          onClick={() => setOpen(!open)}
          className="h-10 w-10 cursor-pointer text-gray-600"
        />
      )}

      <ul className="flex flex-col md:flex-row  justify-center gap-5 md:">
        {links.map((link) => (
          <Link key={link.id} value={link}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
