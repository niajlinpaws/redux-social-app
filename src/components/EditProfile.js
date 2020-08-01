import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { useSelector, useDispatch, connect } from "react-redux";
import allActions from "../redux/allActions";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import renderFields from "./renderFields";
import Auth from "../redux/AuthService";
import "../index.css";

const { renderInput, renderRadioInput, renderSelect } = renderFields;
const validate = values => {
  const errors = {};
  let { email, name, education, age, location, gender } = values;

  //name
  if (!name) errors.name = "Name is required";

  //education
  if (!education) errors.education = "Education is required";

  //age
  let intAge = parseInt(age);
  if (!age) errors.age = "Age is required";
  else if (age.indexOf(".") != -1 || age < 10 || age > 105) {
    errors.age = "Please enter valid age";
  }

  //location
  if (!location) errors.location = "Location is required";

  //gender
  if (!gender) errors.gender = "Gender is required";

  return errors;
};

function EditProfileForm(props) {
  const { handleSubmit, reset, submitting, pristine, invalid } = props;
  const successMessage = useSelector(state => state.editProfile.successMessage);
  const errorMessage = useSelector(state => state.editProfile.errorMessage);
  const loading = useSelector(state => state.editProfile.loading);

  const dispatch = useDispatch();
  const image_style = {
    width: "150px",
    height: "150px",
    borderRadius: "50%"
  };

  useEffect(() => {
    const token = Auth.getAccessToken();
    dispatch(allActions.editProfileActions.getUserProfile(token));
  }, []);
  return loading ? (
    <Loading isLoading={loading} />
  ) : (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="h2">Edit Profile</h2>
          <h3 className="text-success">{successMessage}</h3>
          <h3 className="text-danger">{errorMessage}</h3>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Field
              name="email"
              component={renderInput}
              label="Email"
              type="email"
              style={{ pointerEvents: "none", backgroundColor: "lightgray" }}
            />

            <Field
              name="name"
              component={renderInput}
              type="text"
              label="Display Name"
            />

            <Field
              name="age"
              label="Age"
              component={renderInput}
              type="number"
            />
            <Field
              name="location"
              label="Location"
              component={renderInput}
              type="text"
            />
            <Field
              component={renderRadioInput}
              label="Gender"
              name="gender"
              options={{
                male: { label: "Male", selected: false },
                female: { label: "Female", selected: false },
                other: { label: "Other", selected: false }
              }}
            />
            <Field name="education" label="Education" component={renderSelect}>
              <option value="">Select Education</option>
              <option value="phd">PhD</option>
              <option value="masters">Masters Degree</option>
              <option value="bachelor">Bachelor Degree</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="other">Other</option>
            </Field>

            <div className="image-upload">
              <label htmlFor="profilePic">
                <img
                  style={image_style}
                  src={`${process.env.REACT_APP_API_URL}${props.imageFilePath}`}
                />
              </label>
              <label>{props.imageFile && props.imageFile.name}</label>
              <input
                id="profilePic"
                name="profilePic"
                onChange={e =>
                  dispatch(
                    allActions.editProfileActions.uploadImage(e.target.files[0])
                  )
                }
                type="file"
              />
            </div>
            {/* <input
              type="file"
              id="profilePic"
              name="profilePic"
              onChange={e =>
                dispatch(
                  allActions.editProfileActions.uploadImage(e.target.files[0])
                )
              }
            /> */}

            <button type="submit" className="btn btn-success">
              Update
            </button>
            <button
              type="button"
              onClick={reset}
              className="m-1 btn btn-secondary"
            >
              Reset
            </button>
            <br />
            <Link className="btn btn-link" to="/login">
              Back to Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

const onSubmit = (values, dispatch, props) => {
  const token = Auth.getAccessToken();
  values.profilePic = props.imageFile; //store.getState().editProfile.imageFile;
  dispatch(allActions.editProfileActions.editUserProfile(values, token));
};

const mapStateToProps = (state, props) => {
  return {
    initialValues: state.editProfile.user,
    imageFile: state.editProfile.imageFile,
    imageFilePath: state.editProfile.imageFilePath
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "editProfile",
    enableReinitialize: true,
    onSubmit
  })(EditProfileForm)
);
