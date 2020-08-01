import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from "./postListActionTypes";
import axios from "axios";

const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST
  };
};
const getPostsSuccess = list => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: list
  };
};
const getPostsFailure = errorMessage => {
  return {
    type: GET_POSTS_FAILURE,
    payload: errorMessage
  };
};

const getPosts = token => {
  let base_url = process.env.REACT_APP_API_URL;
  return dispatch => {
    dispatch(getPostsRequest());
    axios
      .get(base_url + "/user/post", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        dispatch(getPostsSuccess(res.data.data));
      })
      .catch(err => dispatch(getPostsFailure(err.response.data.message)));
  };
};

export default {
  getPostsRequest,
  getPostsSuccess,
  getPostsFailure,
  getPosts
};
