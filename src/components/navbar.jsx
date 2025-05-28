import React from "react";

export default function Navbar({ onToggleTheme, theme }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4  bg-gray-900 shadow-md">
      <span className="text-2xl font-bold font-poppins text-white text-blue drop-shadow-lg select-none">
        <span className="text-3xl  text-blue-300 font-extrabold">X</span>
        dagreef
      </span>
      <button
        className="theme-toggle-btn px-4 py-2 rounded-full font-semibold text-lg transition-all duration-300 bg-blue-600 hover:bg-blue-800 text-blue bg-gray-700 hover:bg-gray-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 "
        onClick={onToggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "🌙 Night" : "☀️ Day"}
      </button>
    </nav>
  );
}
