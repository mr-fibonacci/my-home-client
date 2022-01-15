import { useRouter } from "next/router";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface IRedirectModal {
  email: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const RedirectModal: React.FunctionComponent<IRedirectModal> = (props) => {
  const { email, show, setShow } = props;
  const router = useRouter();
  const homeUrl = "/";
  const emailDomain = email.split("@")[1];
  const emailUrl = `https://www.${emailDomain}`;

  const redirect = (url: string) => {
    setShow(false);
    setTimeout(() => {
      router.push(url);
    }, 200);
  };

  return (
    <Modal backdrop="static" centered show={show} onHide={() => setShow(false)}>
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
