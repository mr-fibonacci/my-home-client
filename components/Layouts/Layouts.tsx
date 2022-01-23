import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Footer from "../Footer/Footer";
import NavBar, { NavBarDummy } from "../NavBar/NavBar";
import css from "./Layouts.module.css";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { currentUserActions } from "../../redux/sagas/currentUserSagas";

export const BurgerLayout: React.FunctionComponent = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: currentUserActions.FETCH });
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className={css.MainContentLayout}>
        <NavBarDummy />
        {children}
        <Footer />
      </div>
    </>
  );
};

export const FormLayout: React.FunctionComponent = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 6, offset: 3 }}
          lg={{ span: 4, offset: 4 }}
        >
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export const FlexGrowLayout: React.FunctionComponent = ({ children }) => {
  return (
    <Container className="flex-grow-1 border border-primary">
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};
