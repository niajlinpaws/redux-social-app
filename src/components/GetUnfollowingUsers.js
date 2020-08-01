import React from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../redux/allActions";
import Auth from "../redux/AuthService";
import Loading from "./Loading";
import { useEffect, useState } from "react";

export default function GetUnfollowingUsers() {
  let loading = useSelector(state => state.unFollowingUsers.loading);
  let users = useSelector(state => state.unFollowingUsers.users);
  let successMessage = useSelector(state => state.follow.successMessage);
  let followLoading = useSelector(state => state.follow.loading);
  let dispatch = useDispatch();
  useEffect(() => {
    let token = Auth.getAccessToken();
    dispatch(allActions.unFollowingUsersActions.getUnfollowingUsers(token));
  }, []);

  return loading ? (
    <Loading isLoading={loading} />
  ) : (
    <div className="container">
      <div className="row">
        {users &&
          users.map(user => {
            return (
              <div key={user._id} className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.email}</p>
                  <button
                    onClick={() => {
                      let token = Auth.getAccessToken();
                      let followId = user._id;
                      dispatch(
                        allActions.followActions.followUser(followId, token)
                      );
                    }}
                    className="btn btn-primary"
                  >
                    Follow
                  </button>
                  {/* {successMessage ? (
                    <button
                      onClick={() => {
                        let token = Auth.getAccessToken();
                        let followId = user._id;
                        dispatch(
                          allActions.followActions.followUser(followId, token)
                        );
                      }}
                      className="btn btn-primary"
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        let token = Auth.getAccessToken();
                        let followId = user._id;
                        dispatch(
                          allActions.followActions.followUser(followId, token)
                        );
                      }}
                      className="btn btn-primary"
                    >
                      Follow
                    </button>
                  )} */}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
