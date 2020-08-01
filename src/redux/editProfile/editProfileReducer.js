import {
  EDIT_REQUEST,
  EDIT_SUCCESS,
  EDIT_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  UPLOAD_IMAGE
} from "./editProfileActionTypes";

const initialState = {
  loading: false,
  successMessage: "",
  errorMessage: "",
  imageFile: null,
  imageFilePath: "",
  user: {}
};

const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case EDIT_SUCCESS:
      return {
        loading: false,
        successMessage: action.payload.message,
        errorMessage: "",
        imageFilePath: action.payload.profilePicURL
      };
    case EDIT_FAILURE:
      return {
        loading: false,
        successMessage: "",
        errorMessage: action.payload
      };
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE_SUCCESS:
      return {
        loading: false,
        successMessage: "",
        errorMessage: "",
        user: action.payload,
        imageFilePath: action.payload.profilePicPath
      };
    case GET_PROFILE_FAILURE:
      return {
        loading: false,
        successMessage: "",
        user: {},
        errorMessage: action.payload
      };
    case UPLOAD_IMAGE:
      return {
        ...state,
        imageFile: action.payload
      };
    default:
      return state;
  }
};

export default editProfileReducer;
