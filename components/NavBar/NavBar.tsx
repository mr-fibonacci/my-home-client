import Link from "next/link";
import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { selectCurrentUser } from "../../redux/reducers/currentUserSlice";
import { currentUserActions } from "../../redux/sagas/currentUserSagas";
import NavLink from "../NavLink/NavLink";

export const NavBarDummy = () => {
  return <Container style={{ height: "56px" }}></Container>;
};

const NavBar: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const { isLoading } = currentUser;
  const isAuthenticated = Object.keys(currentUser.data).length;
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const generalLinks = (
    <>
      <NavLink href="/">home</NavLink>
      <NavLink href="/listings/buy">buy</NavLink>
      <NavLink href="/listings/rent">rent</NavLink>
    </>
  );
  const signedOutLinks = (
    <>
      <NavLink href="/sign-in">sign in</NavLink>
      <NavLink href="/sign-up">sign up</NavLink>
    </>
  );
  const signedInLinks = (
    <>
      <NavLink
        href="/"
        inactive
        onClick={() => dispatch({ type: currentUserActions.SIGN_OUT })}
      >
        sign out
      </NavLink>
      <NavLink href={`/profiles/$:id/`}>profile</NavLink>
    </>
  );
  const userLinks = isLoading ? (
    <Spinner className="mx-auto" as="span" animation="border" size="sm" />
  ) : isAuthenticated ? (
    signedInLinks
  ) : (
    signedOutLinks
  );

  return (
    <Navbar fixed="top" bg="light" expand="sm">
      <Container>
        <Navbar.Brand>
          <Link href="/">my-home</Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={() => setShowOffcanvas(true)}
        />
        <Nav className="me-auto d-none d-sm-flex">{generalLinks}</Nav>
        <Nav className="d-none d-sm-flex">{userLinks}</Nav>
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
              {generalLinks}
              {userLinks}
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
