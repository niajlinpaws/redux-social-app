//export {  } from "./user/userActions";
import registerActions from "./register/registerActions";
import loginActions from "./login/loginActions";
import accVerifyActions from "./accountVerification/accVerifyActions";
import forgotPassActions from "./forgotPassword/forgotPassActions";
import resetPassActions from "./resetPassword/resetPassActions";
import createPostActions from "./post/createPost/createPostActions";
import editProfileActions from "./editProfile/editProfileActions";
import unFollowingUsersActions from "./unfollowingUsers/unFollowingUsersActions";
import followActions from "./follow/followActions";
import followingUsersActions from "./followingUsers/followingUsersActions";
import unfollowActions from "./unfollow/unfollowActions";
import postListActions from "./post/postList/postListActions";
import toggleLikePostActions from "./post/likePost/likePostActions";

const allActions = {
  registerActions,
  loginActions,
  accVerifyActions,
  forgotPassActions,
  resetPassActions,
  createPostActions,
  editProfileActions,
  unFollowingUsersActions,
  followActions,
  followingUsersActions,
  unfollowActions,
  postListActions,
  toggleLikePostActions
};

export default allActions;
