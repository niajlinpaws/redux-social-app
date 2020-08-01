import React from "react";
import Auth from "../redux/AuthService";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import allActions from "../redux/allActions";

// let logout = dispatch => {
//   dispatch(allActions.login.logout);
// };

let Header = props => {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(state => state.login.isLoggedIn);
  const displayName = Auth.getDisplayName();
  const classDisplay = isUserLoggedIn ? "block" : "none";
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "goldenrod",
          justifyContent: "space-between"
        }}
      >
        <Link
          className="navbar-brand"
          style={{ color: "white", fontWeight: "bolder", fontStyle: "italic" }}
          to="/"
        >
          Social Media 
        </Link>
        <div style={{ display: classDisplay }}>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/createpost">
                  Create Post
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/editprofile"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Profile
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/editprofile">
                    Edit Profile
                  </Link>
                  <Link className="dropdown-item" to="/">
                    My Posts
                  </Link>
                  <Link className="dropdown-item" to="/following">
                    Following People
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/login"
                  onClick={() => {
                    dispatch(allActions.loginActions.logout());
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div style={{ display: classDisplay }}>
          <span>Welcome, {displayName}</span>
          <span>
            <Link
              to="/login"
              onClick={() => {
                dispatch(allActions.loginActions.logout());
              }}
            >
              Logout
            </Link>
            <Link to="/createpost">Create Post</Link>
          </span>
        </div> */}
      </nav>
    </div>
  );
};

export default Header;
