import React from "react";
import { about } from "../assets/assets";
import AboutCard from "../aboutCard";

function About() {
  return (
    <div className="mt-12 flex flex-col items-center text-center px-4">
      <small className="text-xl font-bold mb-2 text-center text-gray-800">
        About us
      </small>
      <h1 className="md:text-3xl text-2xl text-gray-600 font-bold">
        What Sets Us Apart?
      </h1>
      <p className="block mb-4 text-center text-gray-500">
        What sets Bookly apart is our all-in-one, modern approach — combining
        physical books and E-books in one simple system. With smart borrowing,
        real-time tracking, and a reader-first design, Bookly makes libraries
        accessible, organized, and always within reach.
      </p>
      <div className="md:flex space-y-8 justify-center items-start gap-6 md:gap-10 mt-8">
        {about.map((item, key) => (
          <AboutCard item={item} key={key} />
        ))}
      </div>
    </div>
  );
}

export default About;
