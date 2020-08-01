import {
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAILURE
} from "./unfollowActionTypes";
import axios from "axios";

const unfollowRequest = () => {
  return {
    type: UNFOLLOW_REQUEST
  };
};
const unfollowSuccess = successMessgae => {
  return {
    type: UNFOLLOW_SUCCESS,
    payload: successMessgae
  };
};

const unfollowFailure = errorMessage => {
  return {
    type: UNFOLLOW_FAILURE,
    payload: errorMessage
  };
};

const unfollowUser = (unfollowId, token) => {
  return dispatch => {
    let base_url = process.env.REACT_APP_API_URL;
    dispatch(unfollowRequest());
    axios
      .patch(
        base_url + "/user/unfollow",
        { unfollowId: unfollowId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(response => dispatch(unfollowSuccess(response.data.message)))
      .catch(err => dispatch(unfollowFailure(err.message)));
  };
};

export default {
  unfollowRequest,
  unfollowSuccess,
  unfollowFailure,
  unfollowUser
};
