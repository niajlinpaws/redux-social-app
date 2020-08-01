import {
  UNFOLLOWING_USERS_REQUEST,
  UNFOLLOWING_USERS_SUCCESS,
  UNFOLLOWING_USERS_FAILURE
} from "./unFollowingUsersActionTypes";
const initial_state = {
  loading: false,
  users: [],
  errorMessage: ""
};

const unFollowingUsersReducer = (state = initial_state, action) => {
  switch (action.type) {
    case UNFOLLOWING_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case UNFOLLOWING_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        errorMessage: ""
      };
    case UNFOLLOWING_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default unFollowingUsersReducer;
