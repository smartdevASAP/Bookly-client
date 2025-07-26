import React from "react";
import { assets } from "../assets/assets";

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-20 px-4">
        <div className="md:w-1/2 text-base text-gray-700">
          <h1 className="md:text-3xl text-2xl font-bold mb-6 text-gray-700">
            All Your Books. One Place.
          </h1>
          <p className="text-gray-500 text-xs md:text-sm  mb-6 ">
            Bookly lets you manage physical books and E-books in one smart
            system. Borrow, reserve, and read wherever you are, whenever you
            want.
          </p>
          <button className="md:pt-2 md:pb-2 md:pl-4 md:pr-4 pt-1 pb-1 pl-2 pr-2 bg-primary rounded-xs text-white text-sm shadow-sm">
            Get Started
          </button>
        </div>

        <img
          className="w-full md:w-1/3 object-cover"
          src={assets.pana}
          alt="Hero illustration"
        />
      </div>
      <div className="w-full h-px bg-gray-100 mt-10" />
    </>
  );
}

export default Home;
