// // DateRangePicker.js
// import React from 'react';
// import { TextField } from '@mui/material';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import { DateRangePicker as MuiDateRangePicker } from '@mui/lab';

// const DateRangePicker = ({ formik }) => {
//   const { values, setFieldValue } = formik;

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <MuiDateRangePicker
//         startText="Start Date"
//         endText="End Date"
//         value={[values.startDate, values.endDate]}
//         onChange={(newValue) => {
//           setFieldValue('startDate', newValue[0]);
//           setFieldValue('endDate', newValue[1]);
//         }}
//         renderInput={(startProps, endProps) => (
//           <>
//             <TextField {...startProps} variant="standard" margin="normal" />
//             <TextField {...endProps} variant="standard" margin="normal" />
//           </>
//         )}
//       />
//     </LocalizationProvider>
//   );
// };

// export default DateRangePicker;
