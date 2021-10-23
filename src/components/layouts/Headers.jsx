import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const Headers = () => {
  return (
    <>

      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-gradient-to-r from-bl to-sk px-5"
        variant="dark"
        sticky="top"
        style={{ position: "absolute", width: "100%" }}
      >
        <Container>
          <Navbar.Brand className="text-3xl">
            <Link className="text-white hover:text-white" to="/">education!</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>

              <NavLink className="mt-2 text-gray-300 hover:text-gray-100 px-2" exact activeClassName="text-white" to="/">Home</NavLink>
              <NavLink className="mt-2 text-gray-300 hover:text-gray-100 px-2" activeClassName="text-white" to="/about">About Us</NavLink>
              <NavLink className="mt-2 text-gray-300 hover:text-gray-100 px-2" activeClassName="text-white" to="/courses">Courses</NavLink>
              <NavLink className="mt-2 text-gray-300 hover:text-gray-100 px-2" activeClassName="text-white" to="/blog">Blog</NavLink>
              <NavLink className="mt-2 text-gray-300 hover:text-gray-100 px-2" activeClassName="text-white" to="/contact">Contact Us</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
