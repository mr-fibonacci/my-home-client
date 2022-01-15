import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "../NavLink/NavLink";

const Footer = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav>
          <NavLink href="/buy">buy</NavLink>
          <NavLink href="/rent">rent</NavLink>
          <NavLink href="/about-us">about us</NavLink>
          <NavLink href="/about-us">about us</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
