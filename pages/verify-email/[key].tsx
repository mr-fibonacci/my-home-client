import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { FormLayout } from "../../components/Layouts/Layouts";

const VerifyEmail: NextPage = () => {
  const msgPending = "verifying email";
  const msgError = "whoops, something went wrong, please reload the page";
  const msgSuccess = "succeeded, redirecting to sign in page";

  const [message, setMessage] = useState("");

  const router = useRouter();
  const { key } = router.query;

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/registration/verify-email/", { key });
        setMessage(msgSuccess);
        router.push("/sign-in");
      } catch (err) {
        setMessage(msgError);
      }
    };

    handleMount();
  }, [key, router]);

  return (
    <FormLayout>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {message ? undefined : <Spinner className="p-4" animation="border" />}
        <h4 className="p-3 text-center">{message ? message : msgPending}</h4>
      </div>
    </FormLayout>
  );
};

export default VerifyEmail;
