import React from 'react';

const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button 
      id="theme-toggle" 
      className="theme-toggle"
      onClick={onToggle}
      aria-label="Toggle theme"
    >
      <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
    </button>
  );
};

export default ThemeToggle; 