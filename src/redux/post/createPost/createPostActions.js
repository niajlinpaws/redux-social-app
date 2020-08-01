import {
  CREATE_POST,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE
} from "./createPostActionTypes";
import axios from "axios";

const createPostRequest = () => {
  return {
    type: CREATE_POST_REQUEST
  };
};
const createPostSuccess = successMessage => {
  return {
    type: CREATE_POST_SUCCESS,
    payload: successMessage
  };
};
const createPostFailure = errorMessage => {
  return {
    type: CREATE_POST_FAILURE,
    payload: errorMessage
  };
};

const createNewPost = (data, token) => {
  let base_url = process.env.REACT_APP_API_URL;
  return dispatch => {
    dispatch(createPostRequest());
    axios
      .post(base_url + "/user/post/create", JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      .then(res => dispatch(createPostSuccess(res.data.message)))
      .catch(err => dispatch(createPostFailure(err.response.data.message)));
  };
};

export default {
  createPostRequest,
  createPostSuccess,
  createPostFailure,
  createNewPost
};
