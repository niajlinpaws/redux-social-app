import React from "react";
import { useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import allActions from "../redux/allActions";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const validate = values => {
  const errors = {};
  let { email, password, name, confirmPassword } = values;
  //email
  if (!email) errors.email = "Email is required";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    errors.email = "Please provide valid email address";

  //name
  if (!name) errors.name = "Name is required";

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

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} className="form-control" {...input} />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span className="text-warning">{warning}</span>))}
    </div>
  );
};
let RegisterForm = props => {
  const { handleSubmit, reset, submitting, pristine, invalid } = props;
  const successMessage = useSelector(state => state.register.successMessage);
  const errorMessage = useSelector(state => state.register.errorMessage);
  const loading = useSelector(state => state.register.loading);
  return (
    <>
      <Loading isLoading={loading} />
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="h2">Registration</h2>
            <h3 className="text-success">{successMessage}</h3>
            <h3 className="text-danger">{errorMessage}</h3>
            <form onSubmit={handleSubmit}>
              <Field
                name="email"
                component={renderField}
                label="Email"
                type="email"
              />

              <Field
                name="name"
                component={renderField}
                type="text"
                label="Display Name"
              />
              <Field
                name="password"
                label="Password"
                component={renderField}
                type="password"
              />
              <Field
                name="confirmPassword"
                label="Confirm Password"
                component={renderField}
                type="password"
              />
              <button
                type="submit"
                disabled={loading || pristine || invalid}
                className="btn btn-success"
              >
                Register
              </button>
              <button
                type="button"
                onClick={reset}
                className="m-1 btn btn-secondary"
              >
                Reset
              </button>
              <br />
              <Link className="btn btn-link" to="/login">
                Back to Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const onSubmit = (values, dispatch) => {
  dispatch(allActions.registerActions.registerUser(values));
};

const onSubmitSuccess = (result, dispatch, props) => {
  dispatch(props.reset("registerForm"));
};

RegisterForm = reduxForm({
  form: "registerForm",
  onSubmit,
  onSubmitSuccess,
  validate
})(RegisterForm);

export default RegisterForm;
