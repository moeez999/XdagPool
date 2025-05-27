import React from "react";

export default function PoolWorkers({ workers }) {
  if (!workers || workers.length === 0) return null;
  return (
    <section className="bg-white  rounded-xl shadow-lg p-6 animate-fade-in-up mt-8">
      <h3 className="text-xl md:text-2xl font-bold text-center text-blue-700 dark:text-blue mb-2 font-poppins">
        Pool Workers
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mt-4 animate-fade-in-up">
          <thead>
            <tr>
              <th className="bg-blue-50 dark:bg-gray-700 font-bold border border-gray-200 dark:border-gray-600 px-4 py-2">
                Address
              </th>
              <th className="bg-blue-50 dark:bg-gray-700 font-bold border border-gray-200 dark:border-gray-600 px-4 py-2">
                Status
              </th>
              <th className="bg-blue-50 dark:bg-gray-700 font-bold border border-gray-200 dark:border-gray-600 px-4 py-2">
                Unpaid Shares
              </th>
              <th className="bg-blue-50 dark:bg-gray-700 font-bold border border-gray-200 dark:border-gray-600 px-4 py-2">
                Hashrate
              </th>
              <th className="bg-blue-50 dark:bg-gray-700 font-bold border border-gray-200 dark:border-gray-600 px-4 py-2">
                # Sub-Workers
              </th>
            </tr>
          </thead>
          <tbody>
            {workers.map((w, i) => (
              <tr key={i}>
                <td className="border border-gray-200 dark:border-gray-600 px-4 py-2">
                  {w.address}
                </td>
                <td className="border border-gray-200 dark:border-gray-600 px-4 py-2">
                  {w.status}
                </td>
                <td className="border border-gray-200 dark:border-gray-600 px-4 py-2">
                  {w.unpaidShares}
                </td>
                <td className="border border-gray-200 dark:border-gray-600 px-4 py-2">
                  {w.hashrate}
                </td>
                <td className="border border-gray-200 dark:border-gray-600 px-4 py-2">
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
