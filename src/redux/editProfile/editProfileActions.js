import {
  EDIT_REQUEST,
  EDIT_SUCCESS,
  EDIT_FAILURE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_REQUEST,
  GET_PROFILE_FAILURE,
  UPLOAD_IMAGE
} from "./editProfileActionTypes";
import axios from "axios";

const editRequest = () => {
  return {
    type: EDIT_REQUEST
  };
};
const editSuccess = successObj => {
  return {
    type: EDIT_SUCCESS,
    payload: successObj
  };
};
const editFailure = errorMessage => {
  return {
    type: EDIT_FAILURE,
    payload: errorMessage
  };
};

const getProfileRequest = () => {
  return {
    type: GET_PROFILE_REQUEST
  };
};
const getProfileSuccess = user => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: user
  };
};
const getProfileFailure = errorMessage => {
  return {
    type: GET_PROFILE_FAILURE,
    payload: errorMessage
  };
};
const getUserProfile = token => {
  return dispatch => {
    let base_url = process.env.REACT_APP_API_URL;
    dispatch(getProfileRequest());
    axios
      .get(base_url + "/user/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => dispatch(getProfileSuccess(response.data.data)))
      .catch(err => dispatch(getProfileFailure(err.message)));
  };
};

const editUserProfile = (data, token) => {
  const formData = getFormData(data);
  return dispatch => {
    let base_url = process.env.REACT_APP_API_URL;
    dispatch(editRequest());
    axios
      .put(base_url + "/user/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data", //"application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => dispatch(editSuccess(response.data)))
      .catch(err => dispatch(editFailure(err.message)));
  };
};

const uploadImage = imageFile => {
  return { type: UPLOAD_IMAGE, payload: imageFile };
};

function getFormData(object) {
  let formData = new FormData();
  for (var key in object) {
    formData.append(key, object[key]);
  }
  return formData;
}

export default {
  editUserProfile,
  editRequest,
  editSuccess,
  editFailure,
  getUserProfile,
  getProfileSuccess,
  getProfileRequest,
  getProfileFailure,
  uploadImage
};
