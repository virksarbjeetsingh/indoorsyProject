import React from 'react';
import './Projects.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

export default function Projects() {
  const projects = [
    { id: 1, title: 'VASANT VIHAR', image: project1 },
    { id: 2, title: 'DLF CAMELLIAS', image: project2 },
    { id: 3, title: 'JOR BAGH', image: project3 },
  ];

  return (
    <div className="projects">
      <h2 className="projects-title">OUR PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="project-info">
              <span className="brand">INDOORSY</span>
              <h3 className="project-title">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
