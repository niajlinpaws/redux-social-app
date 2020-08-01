import {
  FOLLOWING_USERS_REQUEST,
  FOLLOWING_USERS_SUCCESS,
  FOLLOWING_USERS_FAILURE
} from "./followingUsersActionTypes";
const initial_state = {
  loading: false,
  users: [],
  errorMessage: ""
};

const followingUsersReducer = (state = initial_state, action) => {
  switch (action.type) {
    case FOLLOWING_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FOLLOWING_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        errorMessage: ""
      };
    case FOLLOWING_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default followingUsersReducer;
