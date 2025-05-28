import React, { useState } from "react";
import { fetchMinerStats } from "../services/minerService";

export default function MinerCheck() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Please enter a wallet address.");
      setResult(null);
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const data = await fetchMinerStats(input.trim());
      setResult(data);
      setError("");
    } catch (err) {
      setError(err.message || "Error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800  rounded-xl shadow-lg p-6 animate-fade-in-up">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white dark:text-blue mb-2 font-poppins">
        Your Miner Stats on XdagReef.org
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mb-4 justify-center items-center"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter wallet address..."
          className="flex-1 text-white   w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 font-poppins text-lg transition-all duration-300"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 dark:bg-blue-200  w-full py-2 rounded-lg hover:bg-blue-300 text-blue font-semibold text-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 "
        >
          {loading ? "Checking..." : "Submit"}
        </button>
      </form>
      {error && (
        <p className="text-red-500 text-center font-medium  mb-2">{error}</p>
      )}
      {result && (
        <table className="w-full border-collapse mt-4 animate-fade-in-up">
          <tbody>
            <tr>
              <th className="bg-blue-50 dark:text-blue-200 dark:bg-gray-700 font-bold border border-gray-200 dark:border-gray-600 px-4 py-2">
                Address
              </th>
              <td className="border text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 px-4 py-2">
                {result.address}
              </td>
            </tr>
            <tr>
              <th className="bg-blue-50 dark:text-blue-200 dark:bg-gray-700 font-bold border border-gray-200 dark:border-gray-600 px-4 py-2">
                Total Hashrate
              </th>
              <td className="border text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 px-4 py-2">
                {Number(result.total_hashrate).toFixed(1)}
              </td>
            </tr>
            <tr>
              <th className="bg-blue-50 dark:text-blue-200 dark:bg-gray-700 font-bold border border-gray-200 dark:border-gray-600 px-4 py-2">
                24h Hashrate Average
              </th>
              <td className="border text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 px-4 py-2">
                {Number(result.total_hashrate24h).toFixed(1)}
              </td>
            </tr>
            <tr>
              <th className="bg-blue-50 dark:text-blue-200 dark:bg-gray-700 font-bold border border-gray-200 dark:border-gray-600 px-4 py-2">
                Connected Miners
              </th>
              <td className="border text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 px-4 py-2">
                {result.total_online}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
