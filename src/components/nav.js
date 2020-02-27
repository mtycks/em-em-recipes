import React, { useState } from 'react';
import { Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
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

  const data = useStaticQuery(graphql`
    query NavigationQuery {
      navLogo: file(absolutePath: { regex: "/EMEM-orange-icon.png/" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="main_nav" className="container">
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/"><Image fluid={data.navLogo.childImageSharp.fluid} style={{width: "30px", marginRight: "10px", display: "inline-block"}} /> Em Em Recipes</NavbarBrand>
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
              <NavLink href="/about">About Us</NavLink>
            </NavItem>
          </Nav>
          <Link className="btn btn-primary push-right" to="/contact">Contact Us</Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;