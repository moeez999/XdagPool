import React, { useRef, useEffect } from "react";
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

export default function PoolChart({ workers }) {
  const chartRef = useRef();
  useEffect(() => {
    const chartInstance = chartRef.current && chartRef.current.chartInstance;
    return () => {
      if (chartInstance && chartInstance.destroy) {
        chartInstance.destroy();
      }
    };
  }, []);
  if (!workers || workers.length === 0) return null;
  const chartData = {
    labels: workers.map((w) => w.address.slice(0, 8) + "..."),
    datasets: [
      {
        label: "Hashrate",
        data: workers.map((w) => w.hashrate),
        backgroundColor: "#2563eb",
        borderRadius: 8,
      },
      {
        label: "Unpaid Shares",
        data: workers.map((w) => w.unpaidShares),
        backgroundColor: "#60a5fa",
        borderRadius: 8,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Pool Workers Hashrate & Unpaid Shares",
        color: "#2563eb",
        font: { size: 18, family: "Poppins" },
      },
    },
    scales: {
      x: {
        ticks: { color: "#2563eb", font: { family: "Poppins" } },
        grid: { color: "#e0e7ef" },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#2563eb", font: { family: "Poppins" } },
        grid: { color: "#e0e7ef" },
      },
    },
  };
  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-in-up mt-8">
      <h3 className="text-xl md:text-2xl font-bold text-center text-blue-700 dark:text-white mb-2 font-poppins">
        Pool Workers Chart
      </h3>
      <div className="my-8 w-full overflow-x-auto">
        <div className="min-w-[320px] max-w-full">
          <Bar data={chartData} options={chartOptions} height={220} />
        </div>
      </div>
    </section>
  );
}
