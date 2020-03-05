import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"
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
        <Link to="/" className="navbar-brand"><Image fluid={data.navLogo.childImageSharp.fluid} imgStyle={{objectFit: "contain",objectPosition: "50% 50%",}} style={{width: "30px", marginRight: "10px", display: "inline-block"}} /> Em Em Recipes</Link>
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
            <NavItem>
              <Link to="/about" className="nav-link">About Us</Link>
            </NavItem>
          </Nav>
          <Link className="btn btn-primary push-right" to="/contact">Contact Us</Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;