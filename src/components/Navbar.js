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

        {/* Navigation Links (centered) */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-10 text-lg items-center font-medium">
            <li>
              <a
                href="#home"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-500 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-500 transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-500 transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-500 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Dark Mode Switch */}
        <div className="ml-4">
          <DarkModeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
