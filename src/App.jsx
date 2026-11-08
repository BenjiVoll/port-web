import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import InteractiveBackground from './components/InteractiveBackground.jsx';
import { initAnimations } from './animations/initAnimations.js';
import './index.css';

function App() {
  useEffect(() => {
    const cleanup = initAnimations();
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  return (
    <div className="app-shell">
      <InteractiveBackground />
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
