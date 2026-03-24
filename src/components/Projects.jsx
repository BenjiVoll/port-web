import React from 'react';

const base = import.meta.env.BASE_URL;

const projects = [
  {
    id: 1,
    name: 'Eiken Design',
    description:
      'Plataforma web completa de gestión empresarial con panel de administración, autenticación, manejo de inventario y pagos integrados con Mercado Pago.',
    image: `${base}project-eiken.png`,
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    github: 'https://github.com/BenjiVoll/eiken_web',
    demo: 'https://benjivoll.github.io/eiken_web/',
  },
  {
    id: 2,
    name: 'Portafolio Personal',
    description:
      'Mi portafolio personal diseñado con React y Vite. Diseño dark mode con animaciones, typewriter effect y secciones modernas para presentar mis proyectos y habilidades.',
    image: null,
    tags: ['React', 'Vite', 'CSS', 'Animaciones'],
    github: 'https://github.com/BenjiVoll/port-web',
    demo: 'https://benjivoll.github.io/port-web/',
  },
  {
    id: 3,
    name: 'Cuidado Mascotas',
    description:
      'Aplicación web de gestión de citas para un centro de cuidado de mascotas. Permite crear, visualizar y administrar turnos de forma intuitiva.',
    image: `${base}project-mascotas.png`,
    tags: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    github: 'https://github.com/BenjiVoll/cuidadoMascotas',
    demo: null,
  },
];

// Portfolio card placeholder (no image)
function PortfolioPlaceholder() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #12121c, #1a1a28)',
      gap: 8
    }}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(0,212,255,0.4)" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 21V9" />
      </svg>
      <span style={{ color: 'rgba(0,212,255,0.4)', fontSize: '0.75rem', fontFamily: 'var(--font-heading)' }}>Este sitio</span>
    </div>
  );
}

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Mis Proyectos</h2>
        <p className="section-subtitle">Lo que he construido hasta ahora</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                {project.image ? (
                  <img src={project.image} alt={project.name} />
                ) : (
                  <PortfolioPlaceholder />
                )}
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
                    <GitHubIcon /> GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
                      <ExternalIcon /> Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;