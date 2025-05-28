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

export default function PoolChart({ workers, theme = "light" }) {
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
  // Dynamic colors for Chart.js
  const isDark = theme === "dark";
  const axisColor = isDark ? "#60a5fa" : "#2563eb";
  const gridColor = isDark ? "#374151" : "#e0e7ef";
  const titleColor = isDark ? "#60a5fa" : "#2563eb";
  const legendColor = isDark ? "#e0e7ef" : "#2563eb";

  const chartData = {
    labels: workers.map((w) => w.address.slice(0, 8) + "..."),
    datasets: [
      {
        label: "Hashrate",
        data: workers.map((w) => Number(w.hashrate).toFixed(1)),
        backgroundColor: isDark ? "#2563eb" : "#2563eb",
        borderRadius: 8,
      },
      {
        label: "Unpaid Shares",
        data: workers.map((w) => Number(w.unpaidShares).toFixed(1)),
        backgroundColor: isDark ? "#60a5fa" : "#60a5fa",
        borderRadius: 8,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: legendColor,
          font: { family: "Poppins, sans-serif" },
        },
      },
      title: {
        display: true,
        text: "Pool Workers Hashrate & Unpaid Shares",
        color: titleColor,
        font: { size: 18, family: "Poppins, sans-serif" },
      },
      tooltip: {
        backgroundColor: isDark ? "#1e293b" : "#fff",
        titleColor: isDark ? "#60a5fa" : "#2563eb",
        bodyColor: isDark ? "#e0e7ef" : "#2563eb",
        borderColor: isDark ? "#374151" : "#e0e7ef",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: axisColor, font: { family: "Poppins, sans-serif" } },
        grid: { color: gridColor },
      },
      y: {
        beginAtZero: true,
        ticks: { color: axisColor, font: { family: "Poppins, sans-serif" } },
        grid: { color: gridColor },
      },
    },
  };
  return (
    <section className="bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-in-up mt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white text-blue mb-2 font-poppins">
        Pool Workers Chart
      </h2>
      <div className="my-8 w-full overflow-x-auto">
        <div className="min-w-[320px] max-w-full">
          <Bar data={chartData} options={chartOptions} height={220} />
        </div>
      </div>
    </section>
  );
}
