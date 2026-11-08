import React, { useState, useMemo } from 'react';

const base = import.meta.env.BASE_URL;

const curatedProjects = [
  {
    id: 'eiken_web',
    repoName: 'eiken_web',
    name: 'Eiken Design — Plataforma Full Stack & E-Commerce',
    category: 'Full Stack',
    status: 'En Producción',
    description:
      'Plataforma empresarial y tienda online para agencia de diseño publicitario y gráfica vehicular. Incluye catálogo con control de stock, cotizador en línea con subida a Cloudinary, panel administrativo completo y pasarela de pago.',
    architecture: [
      'Frontend SPA en React + Tailwind CSS desplegado en GitHub Pages con animaciones y carrito persistente.',
      'Backend API REST en Node.js + Express desplegado en Render con autenticación JWT y protección por roles.',
      'Base de datos PostgreSQL + Prisma ORM y almacenamiento de imágenes en la nube con Cloudinary.',
      'Flujo de compra y simulación de pago integrado (Webpay / Mercado Pago) con descuento automático de stock.',
    ],
    image: `${base}project-eiken.png`,
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Cloudinary', 'Tailwind CSS'],
    github: 'https://github.com/BenjiVoll/eiken_web',
    demo: 'https://benjivoll.github.io/eiken_web/',
  },
  {
    id: 'horarios-colegio-2027',
    repoName: 'horarios-colegio-2027',
    name: 'Horarios Colegio 2027 — Christian College Hualqui',
    category: 'Web App',
    status: 'Activo en GitHub',
    description:
      'Aplicación web especializada para organizar, planificar y distribuir la carga horaria docente y de cursos del colegio Christian College Hualqui sin choques de bloques.',
    architecture: [
      'Gestión interactiva de bloques horarios, asignaturas, docentes y cursos.',
      'Validación de disponibilidad y prevención de topes de horario en tiempo real.',
      'Interfaz limpia optimizada para coordinación académica y visualización rápida por curso o profesor.',
    ],
    image: null,
    placeholderTheme: 'academic',
    tags: ['JavaScript', 'React', 'Gestión Académica', 'UI Interactiva'],
    github: 'https://github.com/BenjiVoll/horarios-colegio-2027',
    demo: null,
  },
  {
    id: 'eiken_wp',
    repoName: 'eiken_wp',
    name: 'Eiken Store — WordPress + WooCommerce + Webpay Plus',
    category: 'Full Stack',
    status: 'Prototipo E-Commerce',
    description:
      'Implementación completa de tienda e-commerce y cotizador a medida sobre WordPress + WooCommerce con tema propio (eiken-store), carrito lateral AJAX y pasarela oficial Transbank Webpay Plus REST.',
    architecture: [
      'Tema personalizado desde cero (PHP + Tailwind CSS) con el diseño oficial de Eiken Design.',
      'Integración de Transbank Webpay Plus REST en modo integración (tarjetas de prueba Redcompra y Crédito).',
      'Custom Post Type de Cotizaciones con panel de KPIs en WP-Admin y vista pública interactiva para aprobación del cliente.',
    ],
    image: `${base}project-eiken.png`,
    tags: ['WordPress', 'WooCommerce', 'PHP 8.3', 'Webpay Plus REST', 'Tailwind CSS'],
    github: 'https://github.com/BenjiVoll/eiken_wp',
    demo: null,
  },
  {
    id: 'port-web',
    repoName: 'port-web',
    name: 'Portafolio Profesional Dinámico (benjivoll.me)',
    category: 'Frontend',
    status: 'En Producción',
    description:
      'Portafolio interactivo conectado en tiempo real a la API de GitHub, con fondo de partículas en Canvas, animaciones GSAP + ScrollTrigger, filtros dinámicos y formulario de contacto funcional.',
    architecture: [
      'Sincronización en vivo con GitHub REST API (@BenjiVoll) con caché inteligente de sesión.',
      'Fondo interactivo HTML5 Canvas que reacciona al cursor y efectos 3D Spotlight en tarjetas.',
      'CI/CD automatizado con GitHub Actions hacia dominio personalizado (benjivoll.me).',
    ],
    image: null,
    placeholderTheme: 'portfolio',
    tags: ['React 19', 'Vite', 'GSAP', 'GitHub API', 'Canvas 2D'],
    github: 'https://github.com/BenjiVoll/port-web',
    demo: 'https://benjivoll.me',
  },
  {
    id: 'cuidadoMascotas',
    repoName: 'cuidadoMascotas',
    name: 'Cuidado Mascotas — Gestor de Turnos Veterinarios',
    category: 'Frontend',
    status: 'Completado',
    description:
      'Aplicación web de administración de citas para centro de cuidado de mascotas. Permite agendar, filtrar, editar y administrar pacientes y turnos con persistencia local.',
    architecture: [
      'CRUD completo de citas veterinarias con validación de campos y estados.',
      'Persistencia automática en navegador mediante LocalStorage.',
      'Diseño intuitivo y responsivo adaptable a escritorio y dispositivos móviles.',
    ],
    image: `${base}project-mascotas.png`,
    tags: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
    github: 'https://github.com/BenjiVoll/cuidadoMascotas',
    demo: null,
  },
];

const filterCategories = [
  { id: 'ALL', label: 'Todos los Proyectos' },
  { id: 'Full Stack', label: 'Full Stack & E-Commerce' },
  { id: 'Web App', label: 'Sistemas & Web Apps' },
  { id: 'Frontend', label: 'Frontend & UI' },
];

function formatRelativeDate(isoDate) {
  if (!isoDate) return null;
  const diffMs = Date.now() - new Date(isoDate).getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (days <= 0) return 'Actualizado hoy';
  if (days === 1) return 'Actualizado ayer';
  if (days < 30) return `Actualizado hace ${days} días`;
  const months = Math.floor(days / 30);
  return `Actualizado hace ${months} ${months === 1 ? 'mes' : 'meses'}`;
}

function ProjectVisualPlaceholder({ theme, name }) {
  const isAcademic = theme === 'academic';
  return (
    <div
      className="project-custom-placeholder"
      style={{
        background: isAcademic
          ? 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #090d16 100%)'
          : 'linear-gradient(135deg, #0d1322 0%, #1a1230 50%, #0a0a12 100%)',
      }}
    >
      <div className="placeholder-grid-lines" />
      <div className="placeholder-icon-circle">
        {isAcademic ? (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
          </svg>
        ) : (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        )}
      </div>
      <span className="placeholder-title">{name}</span>
      <span className="placeholder-sub">
        {isAcademic ? 'Planificador Horario · WebApp' : 'React 19 · GSAP · GitHub API'}
      </span>
    </div>
  );
}

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

function Projects({ githubRepos = [], loadingGitHub, onRefreshGitHub }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Combinar proyectos curados con datos en tiempo real de GitHub API
  const mergedProjects = useMemo(() => {
    const repoMap = new Map();
    githubRepos.forEach((r) => {
      repoMap.set(r.name.toLowerCase(), r);
    });

    const baseList = curatedProjects.map((proj) => {
      const gh = repoMap.get(proj.repoName.toLowerCase());
      return {
        ...proj,
        updatedAt: gh?.pushed_at || gh?.updated_at || null,
        language: gh?.language || proj.tags[0],
        stars: gh?.stargazers_count || 0,
        demo: proj.demo || (gh?.homepage ? gh.homepage : null),
      };
    });

    // Si el usuario crea un nuevo repo público en GitHub que no está en curatedProjects, agregarlo automáticamente
    const knownNames = new Set(curatedProjects.map((p) => p.repoName.toLowerCase()));
    githubRepos.forEach((gh) => {
      if (!knownNames.has(gh.name.toLowerCase()) && !gh.fork) {
        baseList.push({
          id: gh.name,
          repoName: gh.name,
          name: gh.name.replace(/[-_]/g, ' '),
          category: 'Web App',
          status: 'Repositorio GitHub',
          description: gh.description || 'Repositorio público sincronizado automáticamente desde GitHub (@BenjiVoll).',
          architecture: [
            `Lenguaje principal detectado en GitHub: ${gh.language || 'JavaScript'}.`,
            'Sincronizado automáticamente mediante la API pública de GitHub.',
          ],
          image: null,
          placeholderTheme: 'portfolio',
          tags: [gh.language || 'JavaScript', 'GitHub Repo'],
          github: gh.html_url,
          demo: gh.homepage || null,
          updatedAt: gh.pushed_at || gh.updated_at,
          language: gh.language || 'JavaScript',
          stars: gh.stargazers_count || 0,
        });
      }
    });

    return baseList;
  }, [githubRepos]);

  const filteredProjects = useMemo(() => {
    return mergedProjects.filter((p) => {
      const matchesCat = activeFilter === 'ALL' || p.category === activeFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [mergedProjects, activeFilter, searchQuery]);

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Proyectos &amp; Sistemas</h2>
        <p className="section-subtitle">
          Plataformas reales conectadas en tiempo real con mi actividad en GitHub
        </p>

        {/* Barra de Filtros + Buscador + Estado GitHub API */}
        <div className="projects-toolbar">
          <div className="projects-filter-group">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`project-filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="projects-search-and-sync">
            <div className="projects-search-box">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por tecnología o nombre..."
              />
            </div>

            <button
              type="button"
              onClick={onRefreshGitHub}
              className="github-sync-btn"
              title="Sincronizar repositorios en vivo desde GitHub API"
            >
              <span className={`sync-dot ${loadingGitHub ? 'pulsing' : ''}`} />
              {loadingGitHub ? 'Sincronizando GitHub...' : 'GitHub API Live ↻'}
            </button>
          </div>
        </div>

        {/* Grilla Dinámica de Proyectos */}
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const relDate = formatRelativeDate(project.updatedAt);
            return (
              <article
                key={project.id}
                className="project-card spotlight-card"
                onMouseMove={handleCardMouseMove}
              >
                <div className="project-image-wrapper">
                  {project.image ? (
                    <img src={project.image} alt={project.name} loading="lazy" />
                  ) : (
                    <ProjectVisualPlaceholder
                      theme={project.placeholderTheme}
                      name={project.name}
                    />
                  )}

                  {/* Badges superiores sobre la imagen */}
                  <div className="project-top-badges">
                    <span className="project-category-pill">{project.category}</span>
                    <span className="project-status-pill">{project.status}</span>
                  </div>

                  <div className="project-overlay">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="btn btn-primary"
                      style={{ fontSize: '0.82rem', padding: '10px 18px' }}
                    >
                      🔍 Ver Arquitectura &amp; Detalles
                    </button>
                    <div className="project-overlay-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ fontSize: '0.8rem', padding: '8px 16px' }}
                      >
                        <GitHubIcon /> Código
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline"
                          style={{ fontSize: '0.8rem', padding: '8px 16px' }}
                        >
                          <ExternalIcon /> Demo Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-meta-row">
                    <span className="project-lang-indicator">
                      <span className="lang-dot" /> {project.language}
                    </span>
                    {relDate && <span className="project-updated-text">{relDate}</span>}
                  </div>

                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="project-details-trigger"
                    >
                      Ficha Técnica &amp; Arquitectura →
                    </button>
                    <div className="project-quick-icons">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ver en GitHub"
                      >
                        <GitHubIcon />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Abrir Demo en vivo"
                        >
                          <ExternalIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Modal Interactivo de Caso de Estudio / Arquitectura */}
        {selectedProject && (
          <div
            className="project-modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="project-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar modal"
              >
                ✕
              </button>

              <div className="project-modal-header">
                <span className="project-category-pill">{selectedProject.category}</span>
                <span className="project-status-pill">{selectedProject.status}</span>
                {selectedProject.updatedAt && (
                  <span className="project-updated-text">
                    {formatRelativeDate(selectedProject.updatedAt)}
                  </span>
                )}
              </div>

              <h3 className="project-modal-title">{selectedProject.name}</h3>
              <p className="project-modal-desc">{selectedProject.description}</p>

              <div className="project-modal-arch">
                <h4>⚙️ Arquitectura &amp; Funcionalidades Clave</h4>
                <ul>
                  {selectedProject.architecture?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-modal-tags">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-modal-actions">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <GitHubIcon /> Ver Repositorio en GitHub
                </a>
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <ExternalIcon /> Abrir Demo en Producción
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
