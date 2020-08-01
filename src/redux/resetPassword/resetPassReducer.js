import {
  RESET_PASS_REQUEST,
  RESET_PASS_SUCCESS,
  RESET_PASS_FAILURE
} from "./resetPassActionTypes";
const initialState = {
  loading: false,
  successMessage: "",
  errorMessage: ""
};

const resetPassReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case RESET_PASS_SUCCESS:
      return {
        loading: false,
        successMessage: action.payload,
        errorMessage: ""
      };
    case RESET_PASS_FAILURE:
      return {
        loading: false,
        successMessage: "",
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default resetPassReducer;
