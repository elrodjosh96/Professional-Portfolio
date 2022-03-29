import React from 'react'
import './navBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLinks } from '../../helpers/NavLinks'

function createLinks() {
  return NavLinks.map((e, idx) => (
    <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
  ))
}

function NavigationBar() {
  return (
    <div id='home'>
      <Navbar className='navigation__container' expand='md'>
        <Navbar.Brand style={{ marginLeft: '1rem' }} href='#home'>Josh Elrod</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none' }}>
          <Nav className='links' style={{ margin: '0 1rem'}}>
            {createLinks()}
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
  )
}

export default NavigationBar