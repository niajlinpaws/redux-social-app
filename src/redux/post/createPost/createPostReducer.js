import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE
} from "./createPostActionTypes";

const initialState = {
  loading: false,
  successMessage: "",
  errorMessage: ""
};

const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case CREATE_POST_SUCCESS:
      return {
        loading: false,
        successMessage: action.payload,
        errorMessage: ""
      };
    case CREATE_POST_FAILURE:
      return {
        loading: false,
        successMessage: "",
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default createPostReducer;
