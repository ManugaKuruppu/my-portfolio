import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a></li>
          <li><a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a></li>
          <li><a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a></li>
          <li><a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a></li>
        </ul>
        <div className="ml-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-10 h-10 focus:outline-none"
          >
            <svg
              className={`transition-transform duration-500 ease-in-out ${darkMode ? 'text-white' : 'text-yellow-500'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="40"
              height="40"
            >
              <circle cx="12" cy="12" r="5" className={`${darkMode ? 'fill-current text-gray-800' : 'fill-current text-yellow-500'}`} />
              <g className={`sun-rays ${darkMode ? 'sun-rays-hidden' : 'sun-rays-visible'}`}>
                <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2" />
                <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2" />
                <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2" />
                <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2" />
              </g>
              <path
                className={`moon ${darkMode ? 'block' : 'hidden'}`}
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;