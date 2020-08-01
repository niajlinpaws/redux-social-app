import loginReducer from "./login/loginReducer";
import registerReducer from "./register/registerReducer";
import accVerifyReducer from "./accountVerification/accVerifyReducer";
import forgotPassReducer from "./forgotPassword/forgotPassReducer";
import resetPassReducer from "./resetPassword/resetPassReducer";
import createPostReducer from "./post/createPost/createPostReducer";
import editProfileReducer from "./editProfile/editProfileReducer";
import unfollowingUsersReducer from "./unfollowingUsers/unfollowingUsersReducer";
import followReducer from "./follow/followReducer";
import followingUsersReducer from "./followingUsers/followingUsersReducer";
import unfollowReducer from "./unfollow/unfollowReducer";
import postListReducer from "./post/postList/postListReducer";
import toggleLikePostReducer from "./post/likePost/likePostReducer";

const allReducers = {
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
};

export default allReducers;
