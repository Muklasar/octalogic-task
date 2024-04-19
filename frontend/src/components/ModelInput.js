// ModelInput.js
import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const ModelInput = ({ formik }) => {
  const { values, handleChange } = formik;

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Specific Model</FormLabel>
      <RadioGroup
        aria-label="model"
        name="model"
        value={values.model}
        onChange={handleChange}
      >
        {/* Add radio options based on selected vehicleType */}
        {values.vehicleType === 'car' && (
          <>
            <FormControlLabel value="sedan" control={<Radio />} label="Sedan" />
            <FormControlLabel value="suv" control={<Radio />} label="SUV" />
            {/* Add more car models as needed */}
          </>
        )}
        {values.vehicleType === 'motorcycle' && (
          <>
            <FormControlLabel value="sport" control={<Radio />} label="Sport" />
            <FormControlLabel value="cruiser" control={<Radio />} label="Cruiser" />
            {/* Add more motorcycle models as needed */}
          </>
        )}
      </RadioGroup>
    </FormControl>
  );
};

export default ModelInput;
