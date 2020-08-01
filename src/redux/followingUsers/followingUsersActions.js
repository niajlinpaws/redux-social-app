import {
  FOLLOWING_USERS_REQUEST,
  FOLLOWING_USERS_SUCCESS,
  FOLLOWING_USERS_FAILURE
} from "./followingUsersActionTypes";
import axios from "axios";

const followingUsersRequest = () => {
  return {
    type: FOLLOWING_USERS_REQUEST
  };
};
const followingUsersSuccess = users => {
  return {
    type: FOLLOWING_USERS_SUCCESS,
    payload: users
  };
};

const followingUsersFailure = errorMessage => {
  return {
    type: FOLLOWING_USERS_FAILURE,
    payload: errorMessage
  };
};

const getFollowingUsers = token => {
  return dispatch => {
    let base_url = process.env.REACT_APP_API_URL;
    dispatch(followingUsersRequest());
    axios
      .get(base_url + "/user/following", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => dispatch(followingUsersSuccess(response.data.users)))
      .catch(err => dispatch(followingUsersFailure(err.message)));
  };
};

export default {
  followingUsersRequest,
  followingUsersSuccess,
  followingUsersFailure,
  getFollowingUsers
};
