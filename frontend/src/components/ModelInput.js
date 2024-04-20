// ModelInput.js
import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const ModelInput = ({ formik, options }) => {
  const { values, handleChange } = formik;

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Specific Model</FormLabel>
        <RadioGroup
          aria-label="model"
          name="model"
          value={values.model}
          onChange={handleChange}
        >
          {options.map((vehicle) => (
            <FormControlLabel
              value={vehicle.model}
              control={<Radio />}
              label={vehicle.model}
              key={vehicle.id}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ModelInput;
