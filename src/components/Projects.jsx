import React from 'react';

function Projects() {
  const projects = [
    { id: 1, name: 'Proyecto 1', description: 'Breve descripción del Proyecto 1.', imageUrl: '#', link: '#' },
    { id: 2, name: 'Proyecto 2', description: 'Breve descripción del Proyecto 2.', imageUrl: '#', link: '#' },
    // Agrega más proyectos aquí
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Mis Proyectos</h2>
        <div className="project-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.imageUrl} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank">Ver detalles</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;