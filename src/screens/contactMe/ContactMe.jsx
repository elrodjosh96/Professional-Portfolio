import React from 'react'
import './contactMe.css'

function ContactMe() {
  return (
    <div className="contact-section" id="contact">
      <div className="section-header">
        <p className="section-subtitle">Get in Touch</p>
        <h2 className="section-title">Contact Me</h2>
      </div>
      <div className="contact-content">
        <div className="contact-item">
          <svg className="contact-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <a href='mailto:elrodjosh96@gmail.com'>elrodjosh96@gmail.com</a>
        </div>
        <div className="contact-item">
          <svg className="contact-icon" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <footer className="contact-footer">
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about-me">About</a>
          <a href="#technologies">Experience</a>
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="copyright">Copyright © 2026 Josh Elrod. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default ContactMe
