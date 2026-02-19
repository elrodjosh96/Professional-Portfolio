import React from 'react'
import './technologies.css'

const frontendSkills = [
  { name: 'HTML', level: 'Experienced' },
  { name: 'CSS', level: 'Experienced' },
  { name: 'JavaScript', level: 'Experienced' },
  { name: 'React', level: 'Experienced' },
  { name: 'Bootstrap', level: 'Intermediate' },
  { name: 'Responsive Design', level: 'Experienced' },
]

const backendSkills = [
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'MySQL', level: 'Intermediate' },
  { name: 'Express', level: 'Intermediate' },
  { name: 'Git', level: 'Experienced' },
  { name: 'REST APIs', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Basic' },
]

function Technologies() {
  return (
    <div className="experience-section" id="technologies">
      <div className="section-header">
        <p className="section-subtitle">Explore My</p>
        <h2 className="section-title">Experience</h2>
      </div>
      <div className="experience-content">
        <div className="experience-card">
          <h3>Frontend Development</h3>
          <div className="skills-grid">
            {frontendSkills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <svg className="checkmark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <p>{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="experience-card">
          <h3>Backend Development</h3>
          <div className="skills-grid">
            {backendSkills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <svg className="checkmark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <p>{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
