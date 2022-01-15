import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Spinner from "react-bootstrap/Spinner";
import FormFieldErrors from "../FormFieldErrors/FormFieldErrors";

export interface ISignInErrors {
  email?: string[];
  password?: string[];
  non_field_errors?: string[];
}
const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInData = {
    email,
    password,
  };
  const [errors, setErrors] = useState<ISignInErrors>({});

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const res = await axios.post("/dj-rest-auth/login/", signInData);
      console.log("success!", res);
      setErrors({});
    } catch (err: any) {
      const errorData = err?.response?.data;
      console.log(errorData);
      setErrors(errorData);
    } finally {
      setIsPending(false);
    }
  };
  return (
    <>
      <h1 className="mb-3">Please sign in</h1>
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
            <FormFieldErrors errors={errors} fieldKey="password1" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNonFieldErrors">
          <Form.Control
            className="d-none"
            isInvalid={!!errors?.non_field_errors}
          ></Form.Control>
          <FormFieldErrors errors={errors} fieldKey="non_field_errors" />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!!isPending}>
          Sign up
          {!!isPending ? (
            <Spinner as="span" animation="border" size="sm" />
          ) : null}
        </Button>
      </Form>
    </>
  );
};

export default SignInForm;
