// WheelsInput.js
import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const WheelsInput = ({ formik }) => {
  const { values, handleChange } = formik;

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Number of Wheels</FormLabel>
        <RadioGroup
          aria-label="wheels"
          name="wheels"
          value={values.wheels}
          onChange={handleChange}
        >
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="4" control={<Radio />} label="4" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default WheelsInput;
