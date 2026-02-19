import React from 'react';
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData';

function Portfolio() {
  return (
    <div className="projects-section" id="portfolio">
      <div className="section-header">
        <p className="section-subtitle">Browse My Recent</p>
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-grid">
        {portfolioData.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.desc} className="project-image" />
            </div>
            <h3 className="project-title">{project.desc}</h3>
            <div className="project-buttons">
              {idx === 0 ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="project-btn project-btn-full">
                  View Resume
                </a>
              ) : (
                <>
                  <a href={project.github || "https://github.com/elrodjosh96"} target="_blank" rel="noreferrer" className="project-btn">
                    Github
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-btn">
                    Live Demo
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
