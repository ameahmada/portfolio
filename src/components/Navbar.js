import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Navbar.Brand href="#hero">Ahmada</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#about">À propos</Nav.Link>
          <Nav.Link href="#skills">Compétences</Nav.Link>
          <Nav.Link href="#certifications">Certifications</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
