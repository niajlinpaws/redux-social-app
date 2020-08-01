import {
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE
} from "./likePostActionTypes";
import axios from "axios";

const likePostRequest = () => {
  return {
    type: LIKE_POST_REQUEST
  };
};
const likePostSuccess = successMessage => {
  return {
    type: LIKE_POST_SUCCESS,
    payload: successMessage
  };
};
const likePostFailure = errorMessage => {
  return {
    type: LIKE_POST_FAILURE,
    payload: errorMessage
  };
};

const toggleLikePost = (postId, token) => {
  console.log(token);
  let base_url = process.env.REACT_APP_API_URL;
  return dispatch => {
    dispatch(likePostRequest());
    axios
      .put(
        base_url + "/user/post/toggle-like",
        { postId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => dispatch(likePostSuccess(res.data.message)))
      .catch(err => dispatch(likePostFailure(err.response.data.message)));
  };
};

export default {
  likePostRequest,
  likePostSuccess,
  likePostFailure,
  toggleLikePost
};
