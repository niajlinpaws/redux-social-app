import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../redux/allActions";
import Auth from "../redux/AuthService";

let PostList = props => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postList.posts);
  const token = Auth.getAccessToken();
  const likedSuccessMsg = useSelector(
    state => state.toggleLikePost.likedSuccess
  );
  const loggedInUserID = Auth.getUserID();
  useEffect(() => {
    dispatch(allActions.postListActions.getPosts(token));
  }, []);
  return (
    <div>
      {posts &&
        posts.map(post => (
          <div className="card" style={{ width: "18rem" }} key={post._id}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.description}</p>
              <a
                onClick={() =>
                  dispatch(
                    allActions.toggleLikePostActions.toggleLikePost(
                      post._id,
                      token
                    )
                  )
                }
                className="card-link"
              >
                {post.likedByUsers.indexOf(loggedInUserID) == -1 ? (
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                )}
              </a>
              <label>{post.likedByUsers.length} Likes</label>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
