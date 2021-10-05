// This is Header components

import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "./Header.css"
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
const element = <FontAwesomeIcon icon={faCoffee} />

const Header = () => {
  return (
    <Navbar bg="info" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/home" className="nav-link color-dark fw-bold">
            15 Minute School
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 fw-bold"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Nav.Link>
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/services" className="nav-link">
                Services
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
