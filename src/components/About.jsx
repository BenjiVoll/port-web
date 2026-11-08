import React, { useState } from 'react';

const skills = [
  { name: 'JavaScript', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Express.js', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'HTML5', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Git', category: 'Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Vite', category: 'Tools', icon: 'https://vitejs.dev/logo.svg' },
  { name: 'Microsoft 365', category: 'Tools', icon: 'https://img.icons8.com/color/48/microsoft-office-2019.png' },
];

const categories = [
  { id: 'ALL', label: 'Todas' },
  { id: 'Frontend', label: 'Frontend' },
  { id: 'Backend', label: 'Backend' },
  { id: 'Tools', label: 'Herramientas' },
];

function About() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredSkills =
    selectedCategory === 'ALL'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>
        <p className="section-subtitle">Un poco de mi historia y mis herramientas favoritas</p>

        <div className="about-content">
          {/* Bio */}
          <div className="about-text">
            <h3>Desarrollador Full Stack</h3>
            <p>
              Soy Benjamin Vollrath, desarrollador Full Stack enfocado en construir
              aplicaciones web modernas, escalables y con una experiencia de usuario cuidada.
            </p>
            <p>
              Trabajo con los stacks MERN y PERN, desde el diseño de interfaces hasta el
              despliegue en producción. Me impulsa entregar software que funcione bien y
              se vea bien.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">4+</div>
                <div className="about-stat-label">Proyectos</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">2+</div>
                <div className="about-stat-label">Años</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">10+</div>
                <div className="about-stat-label">Tecnologías</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="skills-header-clean">
              <h3>Stack &amp; Herramientas</h3>
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

            <div className="skills-grid-clean">
              {filteredSkills.map((skill) => (
                <div key={skill.name} className="skill-badge-clean">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                    style={{ filter: skill.name === 'Express.js' ? 'invert(1)' : 'none' }}
                  />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
