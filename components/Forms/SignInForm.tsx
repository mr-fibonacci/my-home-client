import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Spinner from "react-bootstrap/Spinner";
import FormFieldErrors from "../FormFieldErrors/FormFieldErrors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { currentUserActions } from "../../redux/sagas/currentUserSagas";
import { selectCurrentUser } from "../../redux/reducers/currentUserSlice";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInData = {
    email,
    password,
  };

  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const { isLoading, errors } = currentUser;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: currentUserActions.SIGN_IN, payload: signInData });
  };
  return (
    <>
      <h1 className="mb-3 text-center">Please sign in</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel label="Email address" controlId="floatingEmailLabel">
            <Form.Control
              isInvalid={!!errors?.email}
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormFieldErrors errors={errors} fieldKey="email" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword1">
          <FloatingLabel label="Password" controlId="floatingPassword1Label">
            <Form.Control
              isInvalid={!!errors?.password}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormFieldErrors errors={errors} fieldKey="password" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNonFieldErrors">
          <Form.Control
            className="d-none"
            isInvalid={!!errors?.non_field_errors}
          ></Form.Control>
          <FormFieldErrors errors={errors} fieldKey="non_field_errors" />
        </Form.Group>

        <Button
          className="w-100"
          variant="primary"
          type="submit"
          disabled={isLoading}
        >
          sign in
          {isLoading ? (
            <Spinner className="ms-2" as="span" animation="border" size="sm" />
          ) : null}
        </Button>
      </Form>
    </>
  );
};

export default SignInForm;
