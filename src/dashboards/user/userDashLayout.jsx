import React from "react";
import DashNav from "./dashNav";
import { Routes, Route, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import Dashboard from "./dashboard.jsx";
import Books from "./Books.jsx";
import Borrowed from "./borrowed.jsx";
import WishList from "./wishList.jsx";
import Settings from "./settings.jsx";

function UserDashBoard() {
  const menuItems = [
    {
      key: "Dashboard",
      icon: assets.dash,
      label: "Dashboard",
      path: "dashboard",
    },
    {
      key: "Books",
      icon: assets.dash,
      label: "Books",
      path: "books",
    },
    {
      key: "Borrowed",
      icon: assets.dash,
      label: "Borrowed",
      path: "borrowed",
    },
    {
      key: "wishList",
      icon: assets.dash,
      label: "Wish List",
      path: "wishlist",
    },
    {
      key: "Settings",
      icon: assets.dash,
      label: "Settings",
      path: "settings",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row">
      {" "}
      {/* Removed h-screen ✅ */}
      {/* Sidebar */}
      <aside
        className="
          w-full sm:w-[200px]
          border-t sm:border-t-0 sm:border-r border-gray-300
          flex sm:flex-col
          justify-between sm:justify-start
          fixed sm:static bottom-0 left-0
          bg-white
        "
      >
        <img
          className="hidden sm:block w-[100px] md:w-[150px] mb-12"
          src={assets.logo}
          alt="Logo"
        />

        <ul className="flex w-full justify-around sm:flex-col sm:gap-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.key}
              to={`/user/dashboard/${item.path}`}
              className={({ isActive }) =>
                `w-full flex flex-col sm:flex-row items-center gap-1 sm:gap-3 cursor-pointer p-2 rounded ${
                  isActive
                    ? "bg-indigo-100 text-indigo-600"
                    : "hover:bg-gray-100"
                }`
              }
            >
              <img
                className="h-5 w-5"
                src={item.icon}
                alt={`${item.label} Icon`}
              />
              <p className="text-xs sm:text-sm hidden sm:block">{item.label}</p>
            </NavLink>
          ))}
        </ul>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen sm:min-h-0">
        <header className="sticky top-0 z-50 w-full bg-white shadow">
          <DashNav />
        </header>

        <main className="p-4 mb-[60px] sm:mb-0">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="books" element={<Books />} />
            <Route path="borrowed" element={<Borrowed />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default UserDashBoard;
