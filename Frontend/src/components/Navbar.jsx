import React from "react";

function Navbar() {
  return (
    <nav className="bg-black/60 backdrop-blur-md shadow-lg fixed top-0 left-0 w-full z-50 border-b border-gray-700">
      <div className="max-w-screen-2xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo with neon gradient + tagline */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold cursor-pointer tracking-tight hover:scale-105 transition-transform duration-300">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg">
              SwiftPDF
            </span>
          </h1>
          <span className="text-xs text-gray-300 -mt-1">
            Fast • Secure • Free
          </span>
        </div>

        {/* Menu */}
        <ul className="flex space-x-8 text-lg font-medium">
          {["Home", "About", "Contact"].map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
