import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Spinner from "react-bootstrap/Spinner";
import FormFieldErrors from "../FormFieldErrors/FormFieldErrors";
import RedirectModal from "../Modals/SignUpRedirectModal";

export interface ISignUpErrors {
  email?: string[];
  password1?: string[];
  password2?: string[];
  non_field_errors?: string[];
}

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const signUpData = {
    email,
    password1,
    password2,
  };
  const [errors, setErrors] = useState<ISignUpErrors>({});

  const [showModal, setShowModal] = useState(false);

  const [isPending, setIsPending] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const res = await axios.post("/dj-rest-auth/registration/", signUpData);
      console.log("success!", res);
      setErrors({});
      setShowModal(true);
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
      <h1 className="mb-3">Please sign up</h1>
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
              isInvalid={!!errors?.password1}
              type="password"
              placeholder="Password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            <FormFieldErrors errors={errors} fieldKey="password1" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <FloatingLabel
            label="Confirm password"
            controlId="floatingPassword2Label"
          >
            <Form.Control
              isInvalid={!!errors?.password2}
              type="password"
              placeholder="Confirm password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <FormFieldErrors errors={errors} fieldKey="password2" />
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
      <RedirectModal email={email} show={showModal} setShow={setShowModal} />
    </>
  );
};

export default SignUpForm;
