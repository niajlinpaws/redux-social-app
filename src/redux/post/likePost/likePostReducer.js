import {
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE
} from "./likePostActionTypes";

const initialState = {
  loading: false,
  likedSuccess: "",
  errorMessage: ""
};

const toggleLikePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_POST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LIKE_POST_SUCCESS:
      return {
        likedSuccess: action.payload,
        loading: false,
        errorMessage: ""
      };
    case LIKE_POST_FAILURE:
      return {
        likedSuccess: "",
        loading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default toggleLikePostReducer;
