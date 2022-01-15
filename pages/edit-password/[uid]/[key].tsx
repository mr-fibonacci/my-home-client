import { NextPage } from "next";
import { useRouter } from "next/router";

// /dj-rest-auth/password/reset/
// /dj-rest-auth/password/reset/confirm/
const EditPasswordForm: NextPage = () => {
  const router = useRouter();
  const { uid, key } = router.query;
  return (
    <div>
      edit EditPasswordForm for uid: {uid} and token: {key}
    </div>
  );
};

export default EditPasswordForm;
