import React from "react";
import "./App.css";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import MyPosts from "./components/PostList";
import AccountVerificationForm from "./components/AccountVerification";
import ForgotPasswordForm from "./components/ForgotPassword";
import ResetPasswordForm from "./components/ResetPassword";
import Home from "./components/Home";
import CreatePostForm from "./components/CreatePost";
import EditProfileForm from "./components/EditProfile";
import FollowingUsers from "./components/FollowingUsers";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route
            path="/verifyaccount/:code"
            component={AccountVerificationForm}
          />
          <Route path="/forgotpassword" component={ForgotPasswordForm} />
          <Route path="/resetpassword/:code" component={ResetPasswordForm} />
          <PrivateRoute path="/createpost" component={CreatePostForm} />
          <PrivateRoute path="/editprofile" component={EditProfileForm} />
          <PrivateRoute path="/following" component={FollowingUsers} />
          <PrivateRoute path="/" exact component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
