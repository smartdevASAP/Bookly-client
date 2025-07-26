import React, { useState } from "react";
import { assets } from "../assets/assets";

function Nav() {
  const [activeMenu, setActiveMenu] = useState("Explore");

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-white/80 backdrop-blur px-4 py-3 shadow-sm">
      <img className="w-[100px] md:w-[150px]" src={assets.logo} alt="" />
      <ul className="hidden md:flex gap-10 items-center text-sm">
        <li
          onClick={() => setActiveMenu("Explore")}
          className={`cursor-pointer ${
            activeMenu === "Explore"
              ? "text-indigo-600 underline underline-offset-4"
              : ""
          }`}
        >
          Explore
        </li>
        <li
          onClick={() => setActiveMenu("About")}
          className={`cursor-pointer ${
            activeMenu === "About"
              ? "text-indigo-600 underline underline-offset-4"
              : ""
          }`}
        >
          About
        </li>
        <li
          onClick={() => setActiveMenu("Categories")}
          className={`cursor-pointer ${
            activeMenu === "Categories"
              ? "text-indigo-600 underline underline-offset-4"
              : ""
          }`}
        >
          Categories
        </li>
        <li
          onClick={() => setActiveMenu("Testimonials")}
          className={`cursor-pointer ${
            activeMenu === "Testimonials"
              ? "text-indigo-600 underline underline-offset-4"
              : ""
          }`}
        >
          Testimonials
        </li>
      </ul>
      <button className="md:pt-2 md:pb-2 md:pl-4 md:pr-4 pt-1 pb-1 pl-2 pr-2 bg-primary rounded-xs text-white text-sm shadow-sm">
        Sign in
      </button>
    </div>
  );
}

export default Nav;
