import React, { useEffect, useState } from "react";
import { fetchPoolHashrate, fetchPoolWorkers } from "../services/poolService";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import PoolWorkers from "./PoolWorkers";
import PoolChart from "./PoolChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function PoolStats() {
  const [hashrate, setHashrate] = useState(null);
  const [workers, setWorkers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");
      try {
        const [hashrateData, workersData] = await Promise.all([
          fetchPoolHashrate(),
          fetchPoolWorkers(),
        ]);
        setHashrate(hashrateData);
        setWorkers(workersData);
      } catch (err) {
        setError(err.message || "Error fetching pool stats");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="bg-white  rounded-xl shadow-lg p-6 animate-fade-in-up mt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700 dark:text-blue mb-2 font-poppins">
        Pool Stats
      </h2>
      {loading && (
        <div className="flex flex-col items-center justify-center py-8">
          <svg
            className="animate-spin h-8 w-8 text-blue-500 mb-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}
      {hashrate && (
        <div className="mb-4">
          <div className="text-lg font-semibold">
            Current pool Hashrate:{" "}
            <span className="text-blue-600 dark:text-blue-300">
              {hashrate.hashrate}
            </span>
          </div>
          <div className="text-lg font-semibold">
            24h Hashrate:{" "}
            <span className="text-blue-600 dark:text-blue-300">
              {hashrate.hashrate24h}
            </span>
          </div>
          <div className="text-lg font-semibold">
            Total Miners:{" "}
            <span className="text-blue-600 dark:text-blue-300">
              {hashrate.total}
            </span>
          </div>
          <div className="text-lg font-semibold">
            Online Miners:{" "}
            <span className="text-blue-600 dark:text-blue-300">
              {hashrate.total_online}
            </span>
          </div>
        </div>
      )}
      <PoolChart workers={workers} />
      <PoolWorkers workers={workers} />
    </section>
  );
}
