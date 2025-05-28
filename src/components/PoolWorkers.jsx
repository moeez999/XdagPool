import React from "react";

export default function PoolWorkers({ workers }) {
  if (!workers || workers.length === 0) return null;
  // Remove the 0 index worker
  const filteredWorkers = workers.slice(1);
  if (filteredWorkers.length === 0) return null;
  return (
    <section className="bg-white dark:bg-gray-800  rounded-xl shadow-lg p-6 animate-fade-in-up mt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white dark:text-blue mb-2 font-poppins">
        Pool Workers
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-2  roverflow-hidden animate-fade-in-up">
          <thead>
            <tr>
              <th className="text-left px-4 py-3 bg-blue-100 dark:bg-gray-700  dark:text-blue-200 font-bold rounded-tl-lg">
                Address
              </th>
              <th className="text-left px-4 py-3 bg-blue-100 dark:bg-gray-700  dark:text-blue-200 font-bold">
                Status
              </th>
              <th className="text-left px-4 py-3 bg-blue-100 dark:bg-gray-700  dark:text-blue-200 font-bold">
                Unpaid Shares
              </th>
              <th className="text-left px-4 py-3 bg-blue-100 dark:bg-gray-700  dark:text-blue-200 font-bold">
                Hashrate
              </th>
              <th className="text-left px-4 py-3 bg-blue-100 dark:bg-gray-700  dark:text-blue-200 font-bold rounded-tr-lg">
                # Sub-Workers
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredWorkers.map((w, i) => (
              <tr
                key={i}
                className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="border text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 px-4 py-2 font-mono text-xs md:text-sm break-all">
                  {w.address}
                </td>
                <td className="border text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 px-4 py-2 capitalize">
                  {w.status}
                </td>
                <td className="border text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 px-4 py-2 text-right">
                  {Number(w.unpaidShares).toFixed(1)}
                </td>
                <td className="border text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 px-4 py-2 text-right">
                  {Number(w.hashrate).toFixed(1)}
                </td>
                <td className="border text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 px-4 py-2 text-center">
                  {w.workers ? w.workers.length : 0}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
