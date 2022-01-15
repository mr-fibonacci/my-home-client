import { NextPage } from "next";
import { FormLayout } from "../components/Layouts/Layouts";
import SignInForm from "../components/Forms/SignInForm";

const SignIn: NextPage = () => {
  return (
    <FormLayout>
      <SignInForm />
    </FormLayout>
  );
};

export default SignIn;
