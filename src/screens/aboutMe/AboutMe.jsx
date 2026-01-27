import React from 'react'
import './aboutMe.css'
import headshot from '../../images/headshot.png'

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
     <div>
      <img src={headshot} alt="headshot"/>
     </div>
     <div className="about__text">
       <h1>ABOUT ME</h1>
       <p>Hello, I’m Josh Elrod, a Full Stack Web Developer based in North Georgia. I have nearly 4 years of professional experience as a Front-End Web Developer and Web Designer, along with 3 years of independent, project-based development, building responsive, user-focused web applications. I’m a Georgia Institute of Technology Full Stack Web Development Certificate graduate with a strong foundation in modern front-end and full-stack development. I’m passionate about continuing to grow professionally, expanding my full-stack skill set, and creating clean, thoughtful digital experiences.</p>
     </div>
    </div>
  )
}

export default AboutMe
