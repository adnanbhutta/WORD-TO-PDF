import React from "react";

function Footer() {
  return (
    <footer className="bg-white/40 backdrop-blur-md border-t border-white/30 mt-10">
      <div className="max-w-screen-2xl mx-auto px-6 py-4 text-center">
        <p className="text-sm text-gray-700 font-medium">
          © {new Date().getFullYear()} <span className="text-blue-600 font-bold">Word</span>
          <span className="text-green-500 font-bold">To</span>
          <span className="text-blue-600 font-bold">PDF</span> — All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Developed with <span className="text-red-500">❤️</span> by ACME Industries Ltd.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
