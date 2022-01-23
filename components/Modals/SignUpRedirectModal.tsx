import { useRouter } from "next/router";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useAppSelector } from "../../redux/hooks/hooks";
import { selectCurrentUser } from "../../redux/reducers/currentUserSlice";

interface IRedirectModal {
  email: string;
}

const RedirectModal: React.FunctionComponent<IRedirectModal> = (props) => {
  const { email } = props;
  const router = useRouter();

  const emailDomain = email.split("@")[1];
  const emailUrl = `https://www.${emailDomain}`;
  const homeUrl = "/";

  const { feedback } = useAppSelector(selectCurrentUser);
  const showModal = !!Object.keys(feedback).length;

  const redirect = (url: string) => {
    router.push(url);
  };

  return (
    <Modal backdrop="static" centered show={showModal}>
      <Modal.Header closeButton>
        <Modal.Title>Successfully registered!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        We have just sent the account activation email to {email}. Press home to
        stay on the website or {emailDomain} to access your email inbox.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => redirect(homeUrl)}>
          home
        </Button>
        <Button variant="primary" onClick={() => redirect(emailUrl)}>
          {emailDomain}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RedirectModal;
