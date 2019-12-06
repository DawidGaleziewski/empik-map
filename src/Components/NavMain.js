import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavMain.scss';
import { ReactComponent as EmpikLogo } from '../assets/empik-logo.svg';
import { ReactComponent as EmpikToggleButton } from '../assets/empik-toggle-button.svg';

const NavMain = () => {
  return (
    <Navbar className="main-nav" variant="dark" expand="lg">
      <Navbar.Toggle
        className="main-nav__toggle-button"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Brand className="main-nav__logo" href="/">
        <EmpikLogo />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="https://www.empik.com/">Strona główna</Nav.Link>
          <Nav.Link href="#link">Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMain;
