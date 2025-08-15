import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light' ? false : true; // Default to dark mode
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <Hero />
      <Navbar isDarkMode={isDarkMode} onToggle={toggleTheme} />
      <AboutMe />
      <Resume />
      <Projects />
      <ContactMe />
      <Footer />

    </div>
  );
}

export default App; 