import React, { useState } from 'react';
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="main_nav" className="container">
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">Em Em Recipes</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/recipes">All Recipes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/search">Search</NavLink>
            </NavItem>
          </Nav>
          <Link className="btn btn-primary push-right" to="contact">Contact Us</Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;