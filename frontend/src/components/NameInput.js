// NameInput.js
import React from "react";
import { TextField } from "@mui/material";

const NameInput = ({ formik }) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;

  return (
    <div >
      <div>
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={touched.firstName && errors.firstName}
          sx={{marginBottom:"30px", width: "100%"}}
        />
      </div>
      <div>
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={touched.lastName && errors.lastName}
          sx={{marginBottom:"20px",  width: "100%"}}

        />
      </div>
    </div>
  );
};

export default NameInput;
