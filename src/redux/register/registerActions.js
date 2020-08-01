import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "./registerActionTypes";
import axios from "axios";

const registerRequest = () => {
  return {
    type: REGISTER_REQUEST
  };
};
const registerSuccess = successMessage => {
  return {
    type: REGISTER_SUCCESS,
    payload: successMessage
  };
};
const registerFailure = errorMessage => {
  return {
    type: REGISTER_FAILURE,
    payload: errorMessage
  };
};
const registerUser = data => {
  return dispatch => {
    let base_url = process.env.REACT_APP_API_URL;
    dispatch(registerRequest());
    axios
      .post(base_url + "/register", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        dispatch(registerSuccess(response.data.message));
      })
      .catch(error => {
        dispatch(registerFailure(error.message));
      });
  };
};

export default {
  registerUser,
  registerSuccess,
  registerRequest,
  registerFailure
};
