import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Sobre mí</h2>
        <p>Soy un desarrollador junior web, con experiencias en tecnologias/stack MERN, PERN.</p>
        <div className="skills">
          <h3>Habilidades</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
            <li>Diseño Responsivo</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;