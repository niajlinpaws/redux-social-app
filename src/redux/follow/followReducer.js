import {
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE
} from "./followActionTypes";
const initial_state = {
  loading: false,
  sucessMessage: "",
  errorMessage: ""
};

const followReducer = (state = initial_state, action) => {
  switch (action.type) {
    case FOLLOW_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FOLLOW_SUCCESS:
      return {
        loading: false,
        sucessMessage: action.payload,
        errorMessage: ""
      };
    case FOLLOW_FAILURE:
      return {
        loading: false,
        sucessMessage: "",
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default followReducer;
