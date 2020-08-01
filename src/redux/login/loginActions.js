import * as actionTypes from "./loginActionTypes";
import axios from "axios";

const loginRequest = () => {
  return {
    type: actionTypes.LOGIN_REQUEST
  };
};
const loginSuccess = login_data => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: login_data
  };
};
const loginFailure = error => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    payload: error
  };
};
const logout = () => {
  return {
    type: actionTypes.LOGOUT
  };
};

const login = (data, props) => {
  let base_url = process.env.REACT_APP_API_URL;
  return dispatch => {
    dispatch(loginRequest());
    dispatch(loginSuccess({}));
    // axios
    //   .post(base_url + "/login", JSON.stringify(data), {
    //     headers: { "Content-Type": "application/json" }
    //   })
    //   .then(res => {
    //     props.history.push("/");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     dispatch(loginFailure(err.response.data.message));
    //   });
  };
};

export default {
  loginRequest,
  loginSuccess,
  loginFailure,
  login,
  logout
};
