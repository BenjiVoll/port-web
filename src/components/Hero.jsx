import React, { useState, useEffect } from 'react';

const roles = [
  'Full Stack Developer',
  'React Developer',
  'Node.js Developer',
  'MERN / PERN Stack',
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Disponible para proyectos
            </div>

            <h1 className="hero-title">
              ¡Hola! Soy{' '}
              <span className="hero-title-accent">Benjamin Vollrath</span>
            </h1>

            <p className="hero-subtitle">Desarrollador web apasionado por crear productos digitales de calidad.</p>

            <div className="hero-typewriter">
              {displayed}<span className="hero-typewriter-cursor">|</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                Ver mis proyectos
              </a>
              <a
                href="https://www.linkedin.com/in/benjivoll/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring">
              <img
                src={`${import.meta.env.BASE_URL}avatar.png`}
                alt="Benjamin Vollrath"
                className="hero-avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;