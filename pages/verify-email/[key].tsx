import { NextPage } from "next";
import { useRouter } from "next/router";

// dj-rest-auth/account-confirm-email/
const VerifyEmail: NextPage = () => {
  const router = useRouter();
  const { key } = router.query;
  return <div>Verify email page for the key: {key}</div>;
};

export default VerifyEmail;
