import React from 'react';
import './Header.css';
import  Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown } from 'react-bootstrap';

const Header=()=> {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#/home">Andreas Bøllemose G. Jensen</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#/home">Home</Nav.Link>
              <Nav.Link href="#/about">About</Nav.Link>
              <Nav.Link href="#/projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Header;