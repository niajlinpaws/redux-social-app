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
  let { email } = values;

  //email
  if (!email) errors.email = "Email is required";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    errors.email = "Please provide valid email address";

  return errors;
};

let ForgotPasswordForm = props => {
  const { handleSubmit, submitting, pristine, invalid } = props;
  const errorMessage = useSelector(state => state.forgotPass.errorMessage);
  const successMessage = useSelector(state => state.forgotPass.successMessage);
  const loading = useSelector(state => state.forgotPass.loading);

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
              <h2>Forgot Password</h2>
              <Field
                name="email"
                component={renderInput}
                label="Email"
                type="email"
              />

              <button
                type="submit"
                disabled={loading || pristine || invalid}
                className="btn btn-success"
              >
                Send
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
function onSubmit(values, dispatch) {
  dispatch(allActions.forgotPassActions.forgotPassword(values));
}

ForgotPasswordForm = reduxForm({
  form: "forgotPasswordForm",
  onSubmit,
  validate
})(ForgotPasswordForm);

export default ForgotPasswordForm;
