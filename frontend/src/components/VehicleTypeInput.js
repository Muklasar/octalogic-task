// VehicleTypeInput.js
import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const VehicleTypeInput = ({ options, formik }) => {
  const { values, handleChange } = formik;

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Type of Vehicle</FormLabel>
        <RadioGroup
          aria-label="vehicleType"
          name="vehicleType"
          value={values.vehicleType}
          onChange={handleChange}
        >
          {options.map((vehicle) => (
            <FormControlLabel
              value={vehicle.type}
              control={<Radio />}
              label={vehicle.type}
              key={vehicle.id}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default VehicleTypeInput;
