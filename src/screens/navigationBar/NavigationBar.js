import React from 'react'
import './navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavigationBar() {
  return (
    <div id="home">
      <Navbar className="navigation__container" 
        style={{ zIndex: '2', position: 'fixed', top: '0', width: '100%' }} 
        collapseOnSelect
        expand="md">
        <Navbar.Brand style={{ marginLeft: '1rem' }} href="#home">
          Josh Elrod
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRight: '1rem' }}>
          <Nav className="links" style={{ margin: '0' }}>
            <Nav.Link href="#about-me">About</Nav.Link>
            <Nav.Link href="#technologies">Experience</Nav.Link>
            <Nav.Link href="#portfolio">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
