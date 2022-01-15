import { NextPage } from "next";
import SignUpForm from "../components/Forms/SignUpForm";

import { FormLayout } from "../components/Layouts/Layouts";

const SignUp: NextPage = () => {
  return (
    <FormLayout>
      <SignUpForm />
    </FormLayout>
  );
};

export default SignUp;
