import {
  FORGOT_PASS_REQUEST,
  FORGOT_PASS_SUCCESS,
  FORGOT_PASS_FAILURE
} from "./forgotPassActionTypes";
import axios from "axios";

const forgotPassRequest = () => {
  return {
    type: FORGOT_PASS_REQUEST
  };
};
const forgotPassSuccess = successMessage => {
  return {
    type: FORGOT_PASS_SUCCESS,
    payload: successMessage
  };
};

const forgotPassFailure = errorMessage => {
  return {
    type: FORGOT_PASS_FAILURE,
    payload: errorMessage
  };
};

const forgotPassword = data => {
  let base_url = process.env.REACT_APP_API_URL;
  return dispatch => {
    dispatch(forgotPassRequest());
    axios
      .put(base_url + "/forgot-password", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => dispatch(forgotPassSuccess(res.data.message)))
      .catch(err => dispatch(forgotPassFailure(err.response.data.message)));
  };
};
export default {
  forgotPassSuccess,
  forgotPassRequest,
  forgotPassFailure,
  forgotPassword
};
