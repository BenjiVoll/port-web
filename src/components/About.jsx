import React from 'react';

const skills = [
  { name: 'JavaScript', color: '#f7df1e', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', color: '#61dafb', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', color: '#68a063', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', color: '#336791', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', color: '#4db33d', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'HTML5', color: '#e34f26', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', color: '#264de4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Git', color: '#f05032', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Express.js', color: '#aaaaaa', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Vite', color: '#bd34fe', icon: 'https://vitejs.dev/logo.svg' },
  { name: 'Microsoft 365', color: '#d83b01', icon: 'https://img.icons8.com/color/48/microsoft-office-2019.png' },
];

function About() {
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
                <div className="about-stat-number">3+</div>
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
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Stack &amp; Herramientas
            </h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-badge">
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