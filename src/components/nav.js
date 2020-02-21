import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                All Recipes
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Instant Pot
                </DropdownItem>
                <DropdownItem>
                  Appetizers
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/search">Search</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Sign Up for our Newsletter</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;