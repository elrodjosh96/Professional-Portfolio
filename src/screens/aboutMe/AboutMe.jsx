import React from 'react'
import './aboutMe.css'
import headshot from '../../images/headshot.png'

function AboutMe() {
  return (
    <div className="about-section" id="about-me">
      <div className="section-header">
        <p className="section-subtitle">Get To Know More</p>
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={headshot} alt="Josh Elrod"/>
        </div>
        <div className="about-details">
          <div className="about-cards">
            <div className="about-card">
              <h3>Experience</h3>
              <p>4+ years</p>
              <p>Frontend Development</p>
            </div>
            <div className="about-card">
              <h3>Education</h3>
              <p>Georgia Institute of Technology</p>
              <p>Full Stack Web Development</p>
            </div>
          </div>
          <div className="about-text">
            <p>Hello, I'm Josh Elrod, a Full Stack Web Developer based in North Georgia. I have nearly 4 years of professional experience as a Front-End Web Developer and Web Designer, along with 3 years of independent, project-based development, building responsive, user-focused web applications.</p>
            <p>I'm a Georgia Institute of Technology Full Stack Web Development Certificate graduate with a strong foundation in modern front-end and full-stack development. I'm passionate about continuing to grow professionally, expanding my full-stack skill set, and creating clean, thoughtful digital experiences.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
