import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ setShowLogin, setShowSignUp }) {
  return (
    <header className="sticky top-0 z-50 shadow-md ">
      {/* 🔹 Full Dark Header */}
      <div className="bg-gray-900 text-white pb-2">
        <div className="max-w-7xl mx-auto px-4 py-2">
          {/* 🔸 Top Links */}
          <div className="flex justify-end space-x-6 text-xs mb-2">
            <span className="cursor-pointer hover:underline">SELL ON TOGEE</span>
            <span className="cursor-pointer hover:underline">HELP & SUPPORT</span>

            {/* LOGIN link */}
            <span
              className="cursor-pointer hover:underline"
              onClick={() => setShowLogin(true)}
            >
              LOGIN
            </span>

            {/* SIGN UP link */}
            <span
              className="cursor-pointer hover:underline"
              onClick={() => setShowSignUp(true)}
            >
              SIGN UP
            </span>
          </div>

          {/* 🔸 Logo + Search + Cart */}
          <div className="flex items-center">
            {/* Logo as Link to Home */}
            <Link to="/" className="text-2xl font-bold mr-6 cursor-pointer">
              <span className="bg- px-2 py-1 rounded text-white">TOGEE</span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1">
              <div className="flex bg-white rounded">
                <input
                  type="text"
                  placeholder="Search in TOGEE"
                  className="w-full px-4 py-2 text-gray-600 rounded-l focus:outline-none"
                />
                <button className="bg-orange-100 px-4 text-black rounded-r">
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* Cart */}
            <div className="ml-6 cursor-pointer">
              <FaShoppingCart className="text-2xl" />
            </div>
          </div>

          {/* 🔸 Categories (optional) */}
          {/* <div className="flex space-x-4 mt-2 text-sm">
            <span className="cursor-pointer hover:underline">bags for girls</span>
            <span className="cursor-pointer hover:underline">water bottle</span>
            <span className="cursor-pointer hover:underline">airpods</span>
            <span className="cursor-pointer hover:underline">watch for boys</span>
            <span className="cursor-pointer hover:underline">lap</span>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
