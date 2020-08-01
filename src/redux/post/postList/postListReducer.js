import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from "./postListActionTypes";

const initialState = {
  loading: false,
  posts: [],
  errorMessage: ""
};

const postListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS_SUCCESS:
      return {
        posts: action.payload,
        loading: false,
        errorMessage: ""
      };
    case GET_POSTS_FAILURE:
      return {
        posts: [],
        loading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default postListReducer;
