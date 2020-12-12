import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

const Navigation = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="main_nav" className="container">
      <Navbar color="white" light expand="md">
        <Link to="/" className="navbar-brand">Anderbuns Recipes</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/recipes" className="nav-link">Recipes</Link>
            </NavItem>
            <NavItem>
              <Link to="/tags" className="nav-link">Tags</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;