import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import DarkModeSwitch from './DarkModeSwitch'; 
import socialLinks from '../links/socialLinks';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/home');
  const [pendingLink, setPendingLink] = useState(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    if (!pendingLink) setActiveLink(location.pathname);
  }, [location, pendingLink]);

  const handleLinkClick = (to) => {
    setPendingLink(to);
    setTimeout(() => {
      setActiveLink(to);
      setPendingLink(null);
      setIsMenuOpen(false); 
    }, 300);
  };

  const isActive = (to) => activeLink === to;

  return (
    <nav className="bg-[#f8f9fa] dark:bg-gray-900 shadow-md w-full">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => handleLinkClick('/')}
          className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300 ease-in-out"
        >
          Manuga<span className="text-blue-600 dark:text-yellow-400">Kuruppu</span>
        </Link>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-10 text-lg font-medium items-center">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/projects', label: 'Projects' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <li key={to} className="relative group">
              <Link
                to={to}
                onClick={() => handleLinkClick(to)}
                className={`text-gray-700 dark:text-gray-300 relative hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300 ease-in-out ${
                  isActive(to) ? 'text-blue-600 dark:text-yellow-400' : ''
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600 dark:bg-yellow-400 transform transition-all duration-300 ease-in-out rounded-full ${
                    isActive(to) || pendingLink === to ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media Icons and Dark Mode Switch */}
        <div className="hidden lg:flex items-center space-x-6">
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
          <DarkModeSwitch />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#f8f9fa] dark:bg-gray-900">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {[
              { to: '/my-portfolio', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/projects', label: 'Projects' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li key={to} className="relative group">
                <Link
                  to={to}
                  onClick={() => handleLinkClick(to)}
                  className={`text-gray-700 dark:text-gray-300 text-lg font-medium hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300 ease-in-out ${
                    isActive(to) ? 'text-blue-600 dark:text-yellow-400' : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Social Media Icons */}
          <div className="flex justify-center space-x-6 py-4">
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
            <DarkModeSwitch />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
