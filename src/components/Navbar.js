import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import DarkModeSwitch from './DarkModeSwitch'; // Ensure the path is correct
import socialLinks from '../links/socialLinks';

const Navbar = () => {
  return (
    <nav className="bg-[#f8f9fa] dark:bg-gray-900 shadow-md w-full">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300 ease-in-out"
        >
          Manuga<span className="text-blue-600 dark:text-yellow-400">Kuruppu</span>
        </a>

        {/* Navigation Links */}
        <ul className="flex space-x-10 text-lg font-medium items-center mr-9">
          <li className="relative group">
            <a
              href="#home"
              className="text-gray-700 dark:text-gray-300 relative hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300 ease-in-out "
            >
              Home
              <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600 dark:bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out rounded-full"></span>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 relative hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300 ease-in-out"
            >
              About
              <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600 dark:bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out rounded-full"></span>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 relative hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300 ease-in-out"
            >
              Projects
              <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600 dark:bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out rounded-full"></span>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 relative hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300 ease-in-out"
            >
              Contact
              <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600 dark:bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out rounded-full"></span>
            </a>
          </li>
        </ul>

        {/* Social Media Icons and Dark Mode Switch */}
        <div className="flex items-center space-x-6">
          {/* Social Media Icons */}
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300 ease-in-out"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 ease-in-out"
          >
            <FaGithub size={24} />
          </a>

          {/* Dark Mode Switch */}
          <DarkModeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
