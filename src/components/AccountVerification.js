import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../redux/allActions";
import { Link } from "react-router-dom";

export default function AccountVerificationForm(props) {
  const code = props.match.params.code;
  const errorMessage = useSelector(state => state.accVerify.errorMessage);
  const successMessage = useSelector(state => state.accVerify.successMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.accVerifyActions.verifyAccount(code));
  }, []);
  return (
    <div className="container">
      <h2>Account Verification</h2>
      <h3 className="text-danger">{errorMessage}</h3>
      <h3 className="text-success">{successMessage}</h3>
      <Link to="/login">Back to Login</Link>
    </div>
  );
}
