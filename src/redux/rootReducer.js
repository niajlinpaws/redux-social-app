import { combineReducers } from "redux";
import postReducer from "./post/createPost/createPostReducer";
import { reducer as formReducer } from "redux-form";
import allReducers from "./allReducers";

const {
  loginReducer,
  registerReducer,
  accVerifyReducer,
  forgotPassReducer,
  resetPassReducer,
  createPostReducer,
  editProfileReducer,
  unfollowingUsersReducer,
  followReducer,
  followingUsersReducer,
  unfollowReducer,
  postListReducer,
  toggleLikePostReducer
} = allReducers;
const rootReducer = combineReducers({
  register: registerReducer,
  post: postReducer,
  form: formReducer,
  login: loginReducer,
  accVerify: accVerifyReducer,
  forgotPass: forgotPassReducer,
  resetPass: resetPassReducer,
  createPost: createPostReducer,
  editProfile: editProfileReducer,
  unFollowingUsers: unfollowingUsersReducer,
  follow: followReducer,
  followingUsers: followingUsersReducer,
  unfollow: unfollowReducer,
  postList: postListReducer,
  toggleLikePost: toggleLikePostReducer
});

export default rootReducer;
