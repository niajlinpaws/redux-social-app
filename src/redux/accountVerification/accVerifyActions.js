import {
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  VERIFY_FAILURE
} from "./accVerifyActionTypes";
import axios from "axios";

const accVerifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const accVerifySuccess = successMessage => {
  return {
    type: VERIFY_SUCCESS,
    payload: successMessage
  };
};

const accVerifyFailure = errorMessage => {
  return {
    type: VERIFY_FAILURE,
    payload: errorMessage
  };
};

const verifyAccount = code => {
  let base_url = process.env.REACT_APP_API_URL;
  return dispatch => {
    dispatch(accVerifyRequest());
    axios
      .get(base_url + "/verify-account/" + code)
      .then(res => dispatch(accVerifySuccess(res.data.message)))
      .catch(err => dispatch(accVerifyFailure(err.response.data.message)));
  };
};

export default {
  accVerifySuccess,
  accVerifyRequest,
  accVerifyFailure,
  verifyAccount
};
