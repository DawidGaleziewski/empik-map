import React, { Fragment } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  NavLink,
  NavItem
} from 'react-bootstrap';
import './Footer.scss';

const Footer = ({ regionsList }) => {
  console.log(regionsList);
  return (
    <footer className="footer">
      <Navbar
        className="footer__nav"
        collapseOnSelect
        expanded
        expand="lg"
        variant="dark"
        // fixed="bottom"
      >
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav__link" href="https://empik.com">
              Strona domowa
            </Nav.Link>
            <Nav.Link
              className="nav__link"
              href="https://www.empik.com/o-firmie"
            >
              O firmie
            </Nav.Link>
            <NavDropdown
              title="Regionalne promocje"
              id="collasible-nav-dropdown"
              className="nav__link"
              drop="top"
            >
              {regionsList.map((region, index) => {
                return (
                  <Fragment key={region.id}>
                    <NavDropdown.Item href="#action/3.1">
                      {region.regionFullName}
                    </NavDropdown.Item>
                  </Fragment>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </footer>
  );
};

export default Footer;
