import './App.css';
import React from 'react';
import { useFormik } from 'formik';
import hi from './hi.png'

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    onSubmit: (values) => {
      alert("Cool Name!");
    },
    validate: (values) => {
      let errors = {};
      if (!values.firstName) errors.firstName = "field required";
      if (!values.lastName) errors.lastName = "field required";
      return errors;
    },
  });
 
  return (
    <div className="outer">
    <div className="inner"><img className="image" src={hi} alt="mousey"/></div>,
    <form onSubmit={formik.handleSubmit}>
      <input
        id="firstName"
        name="firstName"
        className="firstNameBox"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      /><br></br>
      {formik.errors.firstName ? (
          <div id="firstNameError" className="firstNameError" style={{ color: "red" }}>
            {formik.errors.firstName}
          </div>
        ) : null}
        <br></br>

      <button id="submitBtn" className="submitButton" type="submit">Submit</button>
    </form>
    </div>
  );
};



export default SignupForm
  