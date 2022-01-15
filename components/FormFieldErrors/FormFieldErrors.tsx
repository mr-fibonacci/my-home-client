import Form from "react-bootstrap/Form";
import { ISignUpErrors } from "../Forms/SignUpForm";

interface IFieldErrors<T> {
  fieldKey: keyof T;
  errors: T;
}
const FormFieldErrors: React.FunctionComponent<IFieldErrors<ISignUpErrors>> = (
  props
) => {
  const { fieldKey, errors } = props;
  return (
    <>
      {errors?.[fieldKey]?.map((errMsg, idx) => (
        <Form.Control.Feedback className="" type="invalid" key={idx}>
          {errMsg}
        </Form.Control.Feedback>
      ))}
    </>
  );
};

export default FormFieldErrors;
