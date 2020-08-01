import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import renderFields from "./renderFields";
import allActions from "../redux/allActions";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import { render } from "react-dom";

const { renderInput } = renderFields;
const validate = values => {
  const errors = {};
  let { email, password } = values;

  //email
  if (!email) errors.email = "Email is required";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    errors.email = "Please provide valid email address";

  //password
  if (!password) errors.password = "Password is required";
  else if (password.length < 8)
    errors.password = "Password must be minimum 8 character long";

  return errors;
};

let LoginForm = props => {
  const { handleSubmit, submitting, pristine, invalid } = props;
  const errorMessage = useSelector(state => state.login.errorMessage);
  const loading = useSelector(state => state.login.loading);

  return (
    <>
      <div className="container">
        <Loading isLoading={loading} />
        <h3 className="text-danger">{errorMessage}</h3>
        <h2>Login</h2>
        <div className="row">
          <div className="col">
            <form
              onSubmit={handleSubmit}
              style={{
                opacity: loading ? 0.5 : 1
              }}
            >
              <Field
                name="email"
                component={renderInput}
                label="Email"
                type="email"
              />
              <Field
                name="password"
                component={renderInput}
                label="Password"
                type="password"
              />
              <Link className="btn btn-link" to={`/forgotpassword`}>
                Forgot Password?
              </Link>
              <br />
              <button
                type="submit"
                disabled={loading || pristine || invalid}
                className="btn btn-success"
              >
                Login
              </button>

              <Link className="btn btn-link" to={`/register`}>
                Click here to register
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
function loginSubmit(values, dispatch, props) {
  dispatch(allActions.loginActions.login(values, props));
}

LoginForm = reduxForm({
  form: "loginForm",
  onSubmit: loginSubmit,
  validate
})(LoginForm);

export default LoginForm;
