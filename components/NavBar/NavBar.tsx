import Link from "next/link";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavLink from "../NavLink/NavLink";

export const NavBarDummy = () => {
  return <Container style={{ height: "56px" }}></Container>;
};

const NavBar: React.FunctionComponent = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const generalLinks = (
    <>
      <NavLink href="/">home</NavLink>
      <NavLink href="/buy">buy</NavLink>
      <NavLink href="/rent">rent</NavLink>
    </>
  );
  const accountLinks = (
    <>
      <NavLink href="/sign-in">sign in</NavLink>
      <NavLink href="/sign-up">sign up</NavLink>
    </>
  );
  return (
    <Navbar fixed="top" bg="light" expand="sm">
      <Container>
        <Navbar.Brand>
          <Link href="/">rent-ie</Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={() => setShowOffcanvas(true)}
        />
        <Nav className="me-auto d-none d-sm-flex">{generalLinks}</Nav>
        <Nav className="d-none d-sm-flex">{accountLinks}</Nav>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="justify-content-end flex-grow-1 pe-3"
              onClick={() => setShowOffcanvas(false)}
            >
              <NavLink href="/">Home</NavLink>
              <NavLink href="/sign-up">sign up</NavLink>
              <NavLink href="/sign-in">sign in</NavLink>
              <NavLink href="/verify-email/fake-key">verify email</NavLink>
              <NavLink href="/edit-password/fake-uid/fake-key">
                edit-password
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
