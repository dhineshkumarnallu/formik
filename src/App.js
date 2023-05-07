import React from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";


// const validate = value =>{
//   const errors ={}
//   if(!value.name){
//     errors.name = "Name is Required *"
//   } else if(value.name.length>15){
//     errors.name = "Maximum length 15 character"
//   }
//   return errors
// }




function App() {
  const formik = useFormik({
    initialValues: { name: "", email: "", list: "", password: "", confirmPassword: "" },
    // validate,
    validationSchema: yup.object({
      name: yup.string()
        .required("Name is Required")
        .strict()
        .trim()
        .min(5, "Minimum 5 Character required")
        .max(15, "Maximum 15 character required"),
      email: yup.string()
        .email()
        .required("Email is required"),
      list: yup.string()
        .required("Select required"),
      password: yup.string()
        .required("Password required"),
      confirmPassword: yup.string()
        .oneOf([yup.ref("password"), null], "confirm password and password must be same")
        .required("Confirm password is required")
    }),
    onSubmit: (userInputData) => { console.log(userInputData) }
  })
  return (
    <div className="container">
      <div className="jumbotron">
        <form autoComplete='off' onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ?
              <div className="text-danger">{formik.errors.name}</div> : null}
          </div>
          {/* Email -field */}
          <div className="form-group">
            <label>Email:</label>
            <input
              className="form-control"
              type="text"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ?
              <div className="text-danger">{formik.errors.email}</div> : null}
          </div>


          {/* list-section */}
          <div className="form-group">
            <label >Select list:</label>
            <select
              name="list"
              onChange={formik.handleChange}
              value={formik.values.list}
              className="form-control" id="sel1">
              <option value="">--Select One--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            {formik.errors.list ?
              <div className="text-danger">{formik.errors.list}</div> : null}
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password:</label>
            <input
              className="form-control"
              type="text"
              name="password"
              onChange={formik.handleChange}
              
              value={formik.values.password}
            />
            {formik.errors.password ?
              <div className="text-danger">{formik.errors.password}</div> : null}
          </div>

          {/* confirm password */}

          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              className="form-control"
              type="text"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            {formik.errors.confirmPassword ?
              <div className="text-danger">{formik.errors.confirmPassword}</div> : null}
          </div>

        </form>
        <button className="btn btn-primary mt-3">Submit</button>
      </div>
    </div>

  );
}

export default App;