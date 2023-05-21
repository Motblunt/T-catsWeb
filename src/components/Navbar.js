import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" className='test'>
      <Container>
        <Navbar.Brand href="#home"><img src="https://chatteriedelaplainedumaine.fr/wp-content/uploads/2020/06/logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">A propos</Nav.Link>
            <Nav.Link href="#Tya">Tya</Nav.Link>
            <Nav.Link href="#Toopie">Toopie</Nav.Link>
            <Nav.Link href="#aboutMaine">Le Maine Coon</Nav.Link>
            <NavDropdown title="Nos portées" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Chatons disponibles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Futures portées</NavDropdown.Item>              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Nos partenaires
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contact</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Avis
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;