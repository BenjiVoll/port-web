import React, { useState } from 'react';

const skills = [
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Avanzado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', category: 'Frontend', level: 'Avanzado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', category: 'Backend', level: 'Avanzado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', category: 'Backend', level: 'Avanzado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'PostgreSQL', category: 'Backend', level: 'Avanzado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', category: 'Backend', level: 'Intermedio-Alto', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'HTML5', category: 'Frontend', level: 'Avanzado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3 / Tailwind', category: 'Frontend', level: 'Avanzado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Vite', category: 'Tools', level: 'Avanzado', icon: 'https://vitejs.dev/logo.svg' },
  { name: 'Git & GitHub Actions', category: 'Tools', level: 'Avanzado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'WordPress & WooCommerce', category: 'Tools', level: 'Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'Microsoft 365', category: 'Tools', level: 'Avanzado', icon: 'https://img.icons8.com/color/48/microsoft-office-2019.png' },
];

const categories = [
  { id: 'ALL', label: 'Todas' },
  { id: 'Frontend', label: 'Frontend & UI' },
  { id: 'Backend', label: 'Backend & Datos' },
  { id: 'Tools', label: 'DevOps & Herramientas' },
];

const pillars = [
  {
    title: '1. Interfaces Modernas & Reactivas',
    desc: 'SPA rápidas en React + Vite con diseño responsivo, animaciones GSAP y experiencia de usuario enfocada en conversión.',
    tag: 'Frontend',
  },
  {
    title: '2. APIs REST Seguras & Escalables',
    desc: 'Backends en Node.js + Express con autenticación JWT, roles de administración, subida de archivos a Cloudinary y validaciones.',
    tag: 'Backend',
  },
  {
    title: '3. Modelado de Datos & E-Commerce',
    desc: 'Bases de datos relacionales (PostgreSQL) y NoSQL (MongoDB), control de stock en tiempo real e integración con pasarelas de pago (Webpay / Mercado Pago).',
    tag: 'Datos & Pagos',
  },
];

function About({ repoCount }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredSkills = selectedCategory === 'ALL'
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre mí &amp; Arquitectura</h2>
        <p className="section-subtitle">
          Desarrollo soluciones end-to-end: desde la interfaz interactiva hasta la base de datos y el despliegue en la nube
        </p>

        <div className="about-content">
          {/* Bio + Estadísticas Dinámicas */}
          <div className="about-text">
            <div className="about-role-tag">Full Stack Developer · PERN &amp; MERN</div>
            <h3>Construyendo software real para necesidades reales</h3>
            <p>
              Soy <strong>Benjamin Vollrath</strong>, desarrollador Full Stack apasionado por crear
              aplicaciones web completas, rápidas y mantenibles. Me especializo en conectar interfaces
              modernas en <strong>React</strong> con arquitecturas sólidas en <strong>Node.js, Express y PostgreSQL</strong>.
            </p>
            <p>
              He desarrollado desde plataformas de e-commerce y cotizaciones a medida con pasarelas de pago
              y paneles administrativos completos, hasta sistemas de gestión de horarios académicos y
              prototipos comparativos de comercio electrónico.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">{Math.max(4, repoCount || 5)}+</div>
                <div className="about-stat-label">Proyectos &amp; Repos</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">2+</div>
                <div className="about-stat-label">Años creando web</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">{skills.length}+</div>
                <div className="about-stat-label">Tecnologías</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">100%</div>
                <div className="about-stat-label">Full Stack</div>
              </div>
            </div>
          </div>

          {/* Skills Interactivas con Filtro */}
          <div className="about-skills-panel">
            <div className="skills-header">
              <h3 className="skills-panel-title">Stack &amp; Herramientas</h3>
              <div className="skills-filter-tabs">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`skill-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="skills-grid">
              {filteredSkills.map((skill) => (
                <div key={skill.name} className="skill-badge">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                    style={{
                      filter:
                        skill.name === 'Express.js' || skill.name.includes('WordPress')
                          ? 'invert(1)'
                          : 'none',
                    }}
                  />
                  <div className="skill-badge-info">
                    <span className="skill-badge-name">{skill.name}</span>
                    <span className="skill-badge-level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pilares de Trabajo Full Stack */}
        <div className="about-pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="about-pillar-card">
              <span className="pillar-tag">{pillar.tag}</span>
              <h4>{pillar.title}</h4>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
