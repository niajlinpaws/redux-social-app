import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../redux/AuthService";
import allActions from "../redux/allActions";
import Loading from "./Loading";
export default function FollowingUsers(props) {
  let users = useSelector(state => state.followingUsers.users);
  let loading = useSelector(state => state.followingUsers.loading);
  let dispatch = useDispatch();
  let token = Auth.getAccessToken();
  useEffect(() => {
    dispatch(allActions.followingUsersActions.getFollowingUsers(token));
  }, []);
  return loading ? (
    <Loading isLoading={loading} />
  ) : (
    <div>
      {users &&
        users.map(user => (
          <div className="card" key={user._id}>
            <div className="card-body">
              <h3>{user.name}</h3>
              <button
                onClick={() =>
                  dispatch(
                    allActions.unfollowActions.unfollowUser(user._id, token)
                  )
                }
                className="btn btn-primary"
              >
                Unfollow
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
