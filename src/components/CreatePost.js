import React from "react";
import { reduxForm, Field } from "redux-form";
import renderFields from "./renderFields";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import allActions from "../redux/allActions";
import Auth from "../redux/AuthService";

const { renderInput } = renderFields;
const validate = values => {
  const errors = {};
  let { title } = values;

  if (!title) errors.title = "Title is required";
  else if (title.length > 15)
    errors.title = "Title is too long. Max length is 15";

  return errors;
};

function CreatePostForm(props) {
  const { handleSubmit, pristine, invalid } = props;
  const successMessage = useSelector(state => state.createPost.successMessage);
  const errorMessage = useSelector(state => state.createPost.errorMessage);
  const loading = useSelector(state => state.createPost.loading);
  const token = useSelector(state => state.login.loginData.token);

  return (
    <>
      <Loading isLoading={loading} />
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="text-success">{successMessage}</h4>
            <h4 className="text-danger">{errorMessage}</h4>
            <form onSubmit={handleSubmit}>
              <h4>Create new post</h4>
              <Field
                name="title"
                label="Title"
                type="text"
                component={renderInput}
              />
              <Field
                name="desc"
                label="Description"
                type="text"
                component={renderInput}
              />
              <button
                type="submit"
                className="btn btn-success"
                disabled={invalid || pristine}
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
const onSubmit = (values, dispatch) => {
  let token = Auth.getAccessToken();
  dispatch(allActions.createPostActions.createNewPost(values, token));
};

CreatePostForm = reduxForm({
  form: "createPostForm",
  onSubmit,
  validate
})(CreatePostForm);

export default CreatePostForm;
