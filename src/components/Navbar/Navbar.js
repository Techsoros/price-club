import React, { useState } from "react";
import Links from "../Links/Links";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 1, name: "Pricing", path: "/pricing" },
    { id: 2, name: "Batsman", path: "/batsman" },
    { id: 3, name: "information", path: "/information" },
    { id: 4, name: "Our Clients", path: "/user" },
    { id: 5, name: "All", path: "/" },
    { id: 6, name: "Blog", path: "/blog" },
  ];
  return (
    <nav className="md:py-5  bg-slate-300 ">
      <div
        className="toggle-icon h-10 w-10 block md:hidden  z-10  cursor-pointer text-gray-600"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <XMarkIcon></XMarkIcon>
        ) : (
          <Bars3BottomLeftIcon></Bars3BottomLeftIcon>
        )}
      </div>

      <ul
        className={`flex flex-col md:flex-row w-full duration-1000 ease-out absolute md:static justify-center gap-5  bg-slate-300 
        ${open ? "top-10" : "top-[-1200px] "}`}
      >
        {links.map((link) => (
          <Links key={link.id} value={link}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
