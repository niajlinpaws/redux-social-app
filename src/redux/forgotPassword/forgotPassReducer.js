import {
  FORGOT_PASS_REQUEST,
  FORGOT_PASS_SUCCESS,
  FORGOT_PASS_FAILURE
} from "./forgotPassActionTypes";
const initialState = {
  loading: false,
  successMessage: "",
  errorMessage: ""
};

const forgotPassReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FORGOT_PASS_SUCCESS:
      return {
        loading: false,
        successMessage: action.payload,
        errorMessage: ""
      };
    case FORGOT_PASS_FAILURE:
      return {
        loading: false,
        successMessage: "",
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default forgotPassReducer;
