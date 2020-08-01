import {
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  VERIFY_FAILURE
} from "./accVerifyActionTypes";

const initialState = {
  loading: false,
  errorMessage: "",
  successMessage: ""
};

const accVerifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case VERIFY_SUCCESS:
      return {
        loading: false,
        successMessage: action.payload,
        errorMessage: ""
      };
    case VERIFY_FAILURE:
      return {
        loading: false,
        successMessage: "",
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default accVerifyReducer;
