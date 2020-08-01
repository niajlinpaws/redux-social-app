import {
  RESET_PASS_REQUEST,
  RESET_PASS_SUCCESS,
  RESET_PASS_FAILURE
} from "./resetPassActionTypes";
import axios from "axios";

const resetPassRequest = () => {
  return {
    type: RESET_PASS_REQUEST
  };
};

const resetPassSuccess = successMessage => {
  return {
    type: RESET_PASS_SUCCESS,
    payload: successMessage
  };
};

const resetPassFailure = errorMessage => {
  return {
    type: RESET_PASS_FAILURE,
    payload: errorMessage
  };
};

const resetPassword = (data, code) => {
  let base_url = process.env.REACT_APP_API_URL;
  return dispatch => {
    dispatch(resetPassRequest());
    axios
      .put(base_url + "/reset-password/" + code, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => dispatch(resetPassSuccess(res.data.message)))
      .catch(err => dispatch(resetPassFailure(err.response.data.message)));
  };
};

export default {
  resetPassRequest,
  resetPassSuccess,
  resetPassFailure,
  resetPassword
};
