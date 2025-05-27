import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import MinerCheck from "./components/minerCheck";
import WalletStats from "./components/walletStats";
import PoolStats from "./components/PoolStats";
import "./index.css";

function App() {
  const [theme, setTheme] = useState(() => {
    // Try to use system preference or default to light
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen  transition-colors duration-500">
      <Navbar onToggleTheme={handleToggleTheme} theme={theme} />
      <main className="max-w-3xl mx-auto p-4 space-y-8">
        <PoolStats />
        <MinerCheck />
        <WalletStats />
      </main>
    </div>
  );
}

export default App;
