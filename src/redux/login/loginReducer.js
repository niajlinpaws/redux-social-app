import * as actionTypes from "./loginActionTypes";

const initialState = {
  loading: false,
  loginData: null,
  isLoggedIn: true,
  errorMessage: ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        loading: false,
        loginData: action.payload,
        isLoggedIn: true,
        errorMessage: ""
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        loading: false,
        loginData: null,
        isLoggedIn: false,
        errorMessage: action.payload
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        loginData: null,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default loginReducer;
