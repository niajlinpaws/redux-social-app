import {
  UNFOLLOWING_USERS_REQUEST,
  UNFOLLOWING_USERS_SUCCESS,
  UNFOLLOWING_USERS_FAILURE
} from "./unFollowingUsersActionTypes";
import axios from "axios";

const unfollowingUsersRequest = () => {
  return {
    type: UNFOLLOWING_USERS_REQUEST
  };
};
const unfollowingUsersSuccess = users => {
  return {
    type: UNFOLLOWING_USERS_SUCCESS,
    payload: users
  };
};

const unfollowingUsersFailure = errorMessage => {
  return {
    type: UNFOLLOWING_USERS_FAILURE,
    payload: errorMessage
  };
};

const getUnfollowingUsers = token => {
  return dispatch => {
    let base_url = process.env.REACT_APP_API_URL;
    dispatch(unfollowingUsersRequest());
    dispatch(unfollowingUsersSuccess([{
      name: "Swapnil",
      email: "swpa",
      _id: "214"
    },{
      name: "Swapnil",
      email: "swpa",
      _id: "214"
    }]));
    // axios
    //   .get(base_url + "/user/unfollowing", {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`
    //     }
    //   })
    //   .then(response => {
    //     dispatch(unfollowingUsersSuccess(response.data.users));
    //   })
    //   .catch(err => dispatch(unfollowingUsersFailure(err.message)));
  };
};

export default {
  unfollowingUsersRequest,
  unfollowingUsersSuccess,
  unfollowingUsersFailure,
  getUnfollowingUsers
};
