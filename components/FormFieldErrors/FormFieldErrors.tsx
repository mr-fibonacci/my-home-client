import Form from "react-bootstrap/Form";
import { ISignUpErrors } from "../../redux/reducers/currentUserSlice";

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
      {errors?.[fieldKey]?.map((errMsg: string, idx: number) => (
        <Form.Control.Feedback className="" type="invalid" key={idx}>
          {errMsg}
        </Form.Control.Feedback>
      ))}
    </>
  );
};

export default FormFieldErrors;
