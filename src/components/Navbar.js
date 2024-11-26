import React from 'react';
import DarkModeSwitch from './DarkModeSwitch'; // Ensure the path is correct

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-semibold text-gray-900 dark:text-white tracking-tight hover:text-blue-500 dark:hover:text-yellow-500 transition-all duration-300 ease-in-out"
        >
          My<span className="text-blue-500 dark:text-yellow-500">Portfolio</span>
        </a>

        {/* Navigation Links with margin for centering */}
        <ul className="flex space-x-12 text-lg items-center font-medium mr-12 ">
          <li className="relative group">
            <a
              href="#home"
              className="text-gray-700 dark:text-gray-300 relative"
            >
              Home
              <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out origin-center rounded-full"></span>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 relative"
            >
              About
              <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out origin-center rounded-full"></span>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 relative"
            >
              Projects
              <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out origin-center rounded-full"></span>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 relative"
            >
              Contact
              <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out origin-center rounded-full"></span>
            </a>
          </li>
        </ul>

        {/* Dark Mode Switch */}
        <div className="ml-6">
          <DarkModeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
