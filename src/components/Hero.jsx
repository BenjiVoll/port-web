import React, { useState, useEffect, useRef } from 'react';

const roles = [
  'Full Stack Developer',
  'Arquitectura PERN & MERN',
  'React & Node.js Specialist',
  'E-Commerce & Pasarelas de Pago',
];

function Hero({ githubProfile, repoCount }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const avatarCardRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const handleMouseMove = (e) => {
    const el = avatarCardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg)`;
  };

  const handleMouseLeave = () => {
    const el = avatarCardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Content */}
          <div className="hero-content">
            <div className="hero-badges-row">
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                Disponible para proyectos &amp; contratación
              </div>
              <a
                href="https://github.com/BenjiVoll"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-github-pill"
              >
                <span className="github-live-dot" />
                GitHub en vivo · {repoCount || githubProfile?.public_repos || 5}+ repos activos
              </a>
            </div>

            <h1 className="hero-title">
              ¡Hola! Soy{' '}
              <span className="hero-title-accent">Benjamin Vollrath</span>
            </h1>

            <p className="hero-subtitle">
              Desarrollador Web Full Stack enfocado en transformar ideas complejas en plataformas
              rápidas, escalables y listas para producción.
            </p>

            <div className="hero-typewriter">
              <span className="hero-typewriter-prefix">&gt; </span>
              {displayed}
              <span className="hero-typewriter-cursor">_</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                Explorar Proyectos
              </a>
              <a href="#contact" className="btn btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                Contactar Ahora
              </a>
              <a
                href="https://www.linkedin.com/in/benjivoll/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Mini terminal / Stack rápido */}
            <div className="hero-tech-strip">
              <div className="hero-tech-pill">
                <span className="tech-dot cyan" /> Frontend: React · Vite · Tailwind/CSS
              </div>
              <div className="hero-tech-pill">
                <span className="tech-dot violet" /> Backend: Node.js · Express · REST API
              </div>
              <div className="hero-tech-pill">
                <span className="tech-dot emerald" /> DB &amp; Cloud: PostgreSQL · MongoDB · Render
              </div>
            </div>
          </div>

          {/* Avatar interactivo 3D con badges flotantes */}
          <div
            className="hero-avatar-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div ref={avatarCardRef} className="hero-avatar-interactive">
              <div className="hero-avatar-ring">
                <img
                  src={`${import.meta.env.BASE_URL}avatar.png`}
                  alt="Benjamin Vollrath"
                  className="hero-avatar"
                />
              </div>

              {/* Badges flotantes orbitales */}
              <div className="floating-chip chip-top-left">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <span>React 19</span>
              </div>
              <div className="floating-chip chip-top-right">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                <span>Node.js</span>
              </div>
              <div className="floating-chip chip-bottom-left">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                <span>PostgreSQL</span>
              </div>
              <div className="floating-chip chip-bottom-right">
                <span className="chip-status-dot" />
                <span>Full Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
