import React from "react";
import { assets } from "../../assets/assets";

function DashNav() {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 px-4 py-2">
      {/* Left: Logo visible only on small screens */}
      <div className="flex items-center">
        <img className="sm:hidden h-6" src={assets.logo} alt="Dashboard Logo" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <button className="relative">
          <img
            className="h-4 hover:opacity-80 transition"
            src={assets.notification}
            alt="Notifications"
          />
          {/* Example: future notification badge */}
          {/* <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span> */}
        </button>

        <div className="flex items-center gap-3">
          <div className="flex flex-col text-right">
            <p className="text-xs text-gray-700 font-medium">Charity</p>
            {/* <p className="text-[10px] text-gray-400">Admin</p> */}
          </div>
          <img
            className="h-8 w-8 rounded-full object-cover"
            src={assets.charity}
            alt="User Profile"
          />
          <button>
            <img
              className="h-3 hover:rotate-180 transition"
              src={assets.dropdown}
              alt="Dropdown Arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashNav;
