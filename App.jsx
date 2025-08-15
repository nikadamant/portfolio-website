import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App; 