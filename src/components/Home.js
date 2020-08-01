import React from "react";

import GetUnfollowingUsers from "./GetUnfollowingUsers";
import { Switch, useRouteMatch, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import MyPosts from "./MyPosts";
import FollowingUsers from "./FollowingUsers";
import EditProfileForm from "./EditProfile";
import CreatePostForm from "./CreatePost";
import PostList from "./PostList";

const url = '';
export default function Home(props) {
  return (
    <div>
      <div className="container-fluid text-center">
        <div className="row bg-warning">
          <ul>
            <li>
              <Link to="/following">Folowing</Link>
            </li>
            <li>
              <Link to="/editprofile">Edit Profile</Link>
            </li>
            <li>
              <Link to="/createpost">Create Post</Link>
            </li>
          </ul>
          <Switch>
            <PrivateRoute
              path={`${url}/following`}
              component={FollowingUsers}
            />
            <PrivateRoute
              path={`${url}/editprofile`}
              component={EditProfileForm}
            />
            <PrivateRoute path="/createpost" component={CreatePostForm} />
            <PrivateRoute path={`${url}/`} exact component={MyPosts} />
          </Switch>
          <PostList />
          <div className="col-sm-2 well bg-info">
            <GetUnfollowingUsers />
          </div>
        </div>
      </div>
    </div>
  );
}
