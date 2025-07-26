import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <footer className="bg-gray-50 p-4 mt-12 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo & Description */}
        <div className="md:w-1/3">
          <img src={assets.logo} alt="Bookly Logo" className="w-28 mb-4" />
          <p className="text-gray-600 text-sm leading-relaxed">
            At Bookly, we believe everyone deserves easy access to stories,
            knowledge, and community. Whether you’re borrowing your favorite
            classic or discovering a new E-book, we’re here to make your library
            experience simple, smart, and always within reach.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3">
          <p className="font-bold mb-2 text-gray-800">Quick Links</p>
          <ul className="text-gray-600 text-sm space-y-2">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Login</li>
            <li className="hover:underline cursor-pointer">About</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:w-1/3">
          <p className="font-bold mb-2 text-gray-800">Join Newsletter</p>
          <p className="text-gray-600 text-sm mb-2">
            Be the first to get updates, news & special offers.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="border border-gray-300 px-3 py-2 rounded w-full sm:w-auto"
            />
            <button className="bg-primary text-white px-4 py-2 w-full rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} Bookly. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
