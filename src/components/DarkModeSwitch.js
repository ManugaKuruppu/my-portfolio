import React, { useState, useEffect } from 'react';
import "../styles/index.css";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="relative group">
      {/* Button */}
      <button
        onClick={toggleDarkMode}
        className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ease-in-out shadow-md transform overflow-hidden ${
          isDarkMode
            ? 'bg-gradient-to-t from-gray-900 to-gray-700 shadow-gray-900 hover:scale-105'
            : 'bg-gradient-to-t from-sky-500 to-sky-300 shadow-sky-500 hover:scale-105'
        }`}
        style={{
          boxShadow: `inset 0 1px 3px rgba(0, 0, 0, 0.2), 
                      0 2px 4px rgba(0, 0, 0, 0.3), 
                      0 4px 8px rgba(0, 0, 0, 0.2)`,
        }}
      >
        {/* Stars (only in dark mode) */}
        {isDarkMode && (
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'circle(50%)',
              zIndex: 0,
            }}
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full star-glow"
                style={{
                  top: `${Math.random() * 70 + 15}%`,
                  left: `${Math.random() * 70 + 15}%`,
                  width: `${Math.random() * 1 + 0.3}px`,
                  height: `${Math.random() * 1 + 0.3}px`,
                  backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`,
                  animation: 'pulse 2s infinite',
                }}
              />
            ))}
          </div>
        )}

        {/* Clouds (only in light mode) */}
        {!isDarkMode && (
          <div
            className="absolute inset-0 cloud-animation"
            style={{
              clipPath: 'circle(50%)',
              zIndex: 0,
            }}
          >
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="absolute cloud-form"
                style={{
                  top: `${25 + i * 15}%`,
                  left: `${10 + i * 20}%`,
                  filter: 'blur(0.5px)',
                }}
              />
            ))}
          </div>
        )}

        {/* Sun */}
        <div
          className={`absolute flex items-center justify-center rounded-full transition-opacity duration-500 transform ${
            isDarkMode ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
          }`}
          style={{
            width: '40%',
            height: '40%',
            background: 'radial-gradient(circle, #FFD700, #FFA500)',
            boxShadow: '0 0 3px 2px rgba(255, 200, 0, 0.6)',
          }}
        ></div>

        {/* Moon */}
        <span
          className={`absolute text-gray-300 transition-opacity duration-500 transform ${
            isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{
            fontSize: '0.9rem',
            filter: 'drop-shadow(0 0 2px #fff)',
          }}
        >
          🌙
        </span>
      </button>

      {/* Tooltip */}
      <div
        className="absolute top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-700 text-white text-sm rounded-lg shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          minWidth: '160px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          fontWeight: '500',
        }}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </div>
    </div>
  );
};

export default DarkModeToggle;
