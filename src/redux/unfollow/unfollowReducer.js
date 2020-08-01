import {
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAILURE
} from "./unfollowActionTypes";
const initial_state = {
  loading: false,
  sucessMessage: "",
  errorMessage: ""
};

const unfollowReducer = (state = initial_state, action) => {
  switch (action.type) {
    case UNFOLLOW_REQUEST:
      return {
        ...state,
        loading: true
      };
    case UNFOLLOW_SUCCESS:
      return {
        loading: false,
        sucessMessage: action.payload,
        errorMessage: ""
      };
    case UNFOLLOW_FAILURE:
      return {
        loading: false,
        sucessMessage: "",
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default unfollowReducer;
