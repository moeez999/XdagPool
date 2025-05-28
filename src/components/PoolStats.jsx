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
    <>
      <section className="bg-white dark:bg-gray-800  rounded-xl shadow-lg p-6 animate-fade-in-up mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white dark:text-blue mb-2 font-poppins">
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
            <table className="w-full border-separate border-spacing-y-2  overflow-hidden animate-fade-in-up">
              <tbody>
                <tr className=" dark:bg-gray-700">
                  <th className="text-left px-4 py-3 bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-blue-200 font-bold rounded-tl-lg">
                    Current pool Hashrate
                  </th>
                  <td className="px-4 py-3  dark:text-blue-300 font-semibold rounded-tr-lg">
                    {Number(hashrate.hashrate).toFixed(1)}
                  </td>
                </tr>
                <tr className=" dark:bg-gray-700">
                  <th className="text-left px-4 py-3 bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-blue-200 font-bold">
                    24h Hashrate
                  </th>
                  <td className="px-4 py-3 dark:text-blue-300 font-semibold">
                    {Number(hashrate.hashrate24h).toFixed(1)}
                  </td>
                </tr>
                <tr className=" dark:bg-gray-700">
                  <th className="text-left px-4 py-3 bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-blue-200 font-bold">
                    Total Miners
                  </th>
                  <td className="px-4 py-3 dark:text-blue-300 font-semibold">
                    {Number(hashrate.total).toFixed(1)}
                  </td>
                </tr>
                <tr className=" dark:bg-gray-700">
                  <th className="text-left px-4 py-3 bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-blue-200 font-bold rounded-bl-lg">
                    Online Miners
                  </th>
                  <td className="px-4 py-3 dark:text-blue-300 font-semibold  rounded-br-lg">
                    {Number(hashrate.total_online).toFixed(1)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
      <PoolChart workers={workers} />

      <PoolWorkers workers={workers} />
    </>
  );
}
