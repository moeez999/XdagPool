import React, { useState } from "react";
import { fetchWalletStats } from "../services/walletService";

export default function WalletStats() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [response, setResponse] = useState(null);

  return (
    <section className="bg-white dark:bg-gray-800  rounded-xl shadow-lg p-6 animate-fade-in-up mt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white dark:text-blue mb-2 font-poppins">
        Check Miner Stats / Wallet User
      </h2>
      <form
        className="flex flex-col gap-4 mb-4 justify-center items-center"
        onSubmit={async (e) => {
          e.preventDefault();
          const input = e.target.elements.walletInput.value.trim();
          if (!input) {
            setErrorMessage("Please enter a wallet address.");
            setResponse(null);
            return;
          }
          setLoading(true);
          setErrorMessage("");
          setResponse(null);
          try {
            const data = await fetchWalletStats(input);
            setResponse(data);
            setErrorMessage("");
          } catch (err) {
            setErrorMessage(
              err.message || "Error occurred while fetching data."
            );
            setResponse(null);
          } finally {
            setLoading(false);
          }
        }}
      >
        <input
          type="text"
          name="walletInput"
          placeholder="Enter wallet address..."
          className="flex-1 text-white  w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 font-poppins text-lg transition-all duration-300"
          autoComplete="off"
        />
        <button
          type="submit"
          className="px-6 dark:bg-blue-200  w-full py-2 rounded-lg hover:bg-blue-300 text-blue font-semibold text-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 "
          disabled={loading}
        >
          {loading ? "Checking..." : "Submit"}
        </button>
      </form>
      {errorMessage && (
        <p className="text-red-500 text-center font-medium  mb-2">
          {errorMessage}
        </p>
      )}
      {response && (
        <table className="w-full border-collapse mt-4 animate-fade-in-up">
          <tbody>
            <tr>
              <th className="bg-blue-50 dark:text-blue-200 dark:bg-gray-700 font-bold border border-gray-200 dark:border-gray-600 px-4 py-2">
                Address
              </th>
              <td className="border text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 px-4 py-2">
                {response.address}
              </td>
            </tr>
            <tr>
              <th className="bg-blue-50 dark:text-blue-200 dark:bg-gray-700 font-bold border border-gray-200 dark:border-gray-600 px-4 py-2">
                Total Paid
              </th>
              <td className="border text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 px-4 py-2">
                {Number(response.total_payment).toFixed(1)}
              </td>
            </tr>
            <tr>
              <th className="bg-blue-50 dark:text-blue-200 dark:bg-gray-700 font-bold border border-gray-200 dark:border-gray-600 px-4 py-2">
                Total Pending
              </th>
              <td className="border text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 px-4 py-2">
                {Number(response.total_unpaid).toFixed(1)}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
}
