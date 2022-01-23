import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "../NavLink/NavLink";

const Footer = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container className="justify-content-center align-items-center">
        <Nav className="d-flex flex-wrap justify-content-center">
          <NavLink href="/">© my home</NavLink>
          <NavLink href="/about-us#about">about us</NavLink>
          <div className="d-flex">
            <NavLink href="/about-us#terms">terms</NavLink>
            <NavLink href="/about-us#privacy">privacy</NavLink>
            <NavLink href="/about-us#security">security</NavLink>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
