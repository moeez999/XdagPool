import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-12 py-6 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400 text-sm font-poppins transition-colors duration-500">
      <span>
        &copy; {new Date().getFullYear()} XDAGREEF Pool &mdash; Built with{" "}
        <span className="text-blue-500">React</span> &amp;{" "}
        <span className="text-blue-400">Tailwind CSS</span>.
      </span>
    </footer>
  );
}
