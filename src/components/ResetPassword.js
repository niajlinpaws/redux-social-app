import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import renderFields from "./renderFields";
import allActions from "../redux/allActions";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const { renderInput } = renderFields;
const validate = values => {
  const errors = {};
  let { password, confirmPassword } = values;

  //password
  if (!password) errors.password = "Password is required";
  else if (password.length < 8)
    errors.password = "Password must be minimum 8 character long";

  //confirmPassword
  if (!confirmPassword) errors.confirmPassword = "Confirm Password is required";
  else if (confirmPassword !== password)
    errors.confirmPassword = "Password and Confirm Password are not matching";

  return errors;
};
let ResetPasswordForm = props => {
  const { handleSubmit, submitting, pristine, invalid } = props;
  const errorMessage = useSelector(state => state.resetPass.errorMessage);
  const successMessage = useSelector(state => state.resetPass.successMessage);
  const loading = useSelector(state => state.resetPass.loading);

  return (
    <>
      <div className="container">
        <Loading isLoading={loading} />
        <h3 className="text-danger">{errorMessage}</h3>
        <h3 className="text-success">{successMessage}</h3>

        <div className="row">
          <div className="col">
            <form
              onSubmit={handleSubmit}
              style={{
                opacity: loading ? 0.5 : 1,
                display: successMessage ? "none" : "block"
              }}
            >
              <h2>Reset Password</h2>
              <Field
                name="password"
                label="Password"
                component={renderInput}
                type="password"
              />
              <Field
                name="confirmPassword"
                label="Confirm Password"
                component={renderInput}
                type="password"
              />
              <button
                type="submit"
                disabled={loading || pristine || invalid}
                className="btn btn-success"
              >
                Submit
              </button>
            </form>
            <Link className="btn btn-link" to={`/login`}>
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
function onSubmit(values, dispatch, props) {
  const code = props.match.params.code;
  dispatch(allActions.resetPassActions.resetPassword(values, code));
}

ResetPasswordForm = reduxForm({
  form: "resetPasswordForm",
  onSubmit,
  validate
})(ResetPasswordForm);

export default ResetPasswordForm;
