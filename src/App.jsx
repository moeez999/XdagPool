import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import MinerCheck from "./components/minerCheck";
import WalletStats from "./components/walletStats";
import PoolStats from "./components/PoolStats";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    if (document.querySelector("body").classList.contains("dark:bg-gray-900")) {
      document.querySelector("body").classList.remove("dark:bg-gray-900");
    } else {
      document.querySelector("body").classList.add("dark:bg-gray-900");
    }

    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen  transition-colors duration-500 flex flex-col">
      <Navbar onToggleTheme={handleToggleTheme} theme={theme} />
      <main className="max-w-4xl mx-auto p-4 space-y-8 flex-1">
        <PoolStats theme={theme} />
        <MinerCheck />
        <WalletStats />
      </main>
      <Footer />
    </div>
  );
}

export default App;
