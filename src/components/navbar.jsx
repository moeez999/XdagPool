import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onToggleTheme, theme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 shadow-md relative">
      <Link to="/">
        <span className="text-2xl font-bold font-poppins text-white text-blue drop-shadow-lg select-none">
          <span className="text-3xl text-blue-300 font-extrabold">X</span>
          dagreef
        </span>
      </Link>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-7 h-7 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          )}
        </svg>
      </button>
      {/* Desktop links */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-6 text-lg font-semibold text-gray-300">
          <Link to="/gettingStarted">
            <li className="hover:text-blue-400 cursor-pointer">
              Getting Started
            </li>
          </Link>
          <Link to="/explorer">
            <li className="hover:text-blue-400 cursor-pointer">Explorer</li>
          </Link>
          <Link to="/faq">
            <li className="hover:text-blue-400 cursor-pointer">FAQ</li>
          </Link>
        </ul>
        <button
          className="theme-toggle-btn ml-4 px-4 py-2 rounded-full font-semibold text-lg transition-all duration-300 bg-blue-600 hover:bg-blue-800 text-blue bg-gray-700 hover:bg-gray-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "🌙 Night" : "☀️ Day"}
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 shadow-lg z-50 md:hidden animate-fade-in-up">
          <ul className="flex flex-col py-4 space-y-2 text-lg font-semibold text-gray-300">
            <Link to="/gettingStarted" onClick={() => setMenuOpen(false)}>
              <li className="px-6 py-2 hover:text-blue-400 cursor-pointer">
                Getting Started
              </li>
            </Link>
            <Link to="/explorer" onClick={() => setMenuOpen(false)}>
              <li className="px-6 py-2 hover:text-blue-400 cursor-pointer">
                Explorer
              </li>
            </Link>
            <Link to="/faq" onClick={() => setMenuOpen(false)}>
              <li className="px-6 py-2 hover:text-blue-400 cursor-pointer">
                FAQ
              </li>
            </Link>
            <li className="px-6 pt-2">
              <button
                className="w-full px-4 py-2 rounded-full font-semibold text-lg transition-all duration-300 bg-blue-600 hover:bg-blue-800 text-blue bg-gray-700 hover:bg-gray-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => {
                  setMenuOpen(false);
                  onToggleTheme();
                }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? "🌙 Night" : "☀️ Day"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
