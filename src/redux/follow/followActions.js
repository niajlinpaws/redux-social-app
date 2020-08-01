import {
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE
} from "./followActionTypes";
import axios from "axios";

const followRequest = () => {
  return {
    type: FOLLOW_REQUEST
  };
};
const followSuccess = successMessgae => {
  return {
    type: FOLLOW_SUCCESS,
    payload: successMessgae
  };
};

const followFailure = errorMessage => {
  return {
    type: FOLLOW_FAILURE,
    payload: errorMessage
  };
};

const followUser = (followId, token) => {
  return dispatch => {
    let base_url = process.env.REACT_APP_API_URL;
    dispatch(followRequest());
    axios
      .patch(
        base_url + "/user/follow",
        { followId: followId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(response => {
        console.log(response.data.message);
        dispatch(followSuccess(response.data.message));
      })
      .catch(err => dispatch(followFailure(err.message)));
  };
};

export default {
  followRequest,
  followSuccess,
  followFailure,
  followUser
};
