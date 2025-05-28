import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MinerCheck from "./components/minerCheck";
import WalletStats from "./components/walletStats";
import PoolStats from "./components/PoolStats";
import Footer from "./components/Footer";
import GettingStarted from "./components/gettingStarted";
import Explorer from "./components/explorer";
import FAQ from "./components/faq";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    if (document.querySelector("body").classList.contains("bg-gray-900")) {
      document.querySelector("body").classList.remove("bg-gray-900");
    } else {
      document.querySelector("body").classList.add("bg-gray-900");
    }

    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 flex flex-col ${
        theme === "dark" ? "theme-dark" : "theme-light"
      }`}
    >
      <Navbar onToggleTheme={handleToggleTheme} theme={theme} />
      <main className="max-w-4xl mx-auto p-4 space-y-8 flex-1 w-full">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PoolStats theme={theme} />
                <MinerCheck />
                <WalletStats />
              </>
            }
          />
          <Route path="/gettingStarted" element={<GettingStarted />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
