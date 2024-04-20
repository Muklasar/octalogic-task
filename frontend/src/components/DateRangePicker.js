import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import dayjs from 'dayjs'; // Import Day.js

export default function BasicDateRangePicker({ formik }) {
  const { values, setFieldValue } = formik;

  const handleStartDateChange = (date) => {
    if (date) { // Check if date is not null or undefined
      const isValidDate = dayjs(date).isValid(); // Validate the date
      if (isValidDate) {
        setFieldValue("startDate", dayjs(date)); // Set the value in Formik if it's a valid date
      }
    }
  };

  const handleEndDateChange = (date) => {
    if (date) { // Check if date is not null or undefined
      const isValidDate = dayjs(date).isValid(); // Validate the date
      if (isValidDate) {
        setFieldValue("endDate", dayjs(date)); // Set the value in Formik if it's a valid date
      }
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]}>
        <div>
          <p>Start Date</p>
          <DatePicker
            name="startDate"
            label="Start Date"
            value={values.startDate || null} // Ensure value is null or a Date object
            onChange={handleStartDateChange}
            sx={{width: "100%"}}
          />
        </div>
        <div>
          <p>End Date</p>
          <DatePicker
            name="endDate"
            label="End Date"
            value={values.endDate || null} // Ensure value is null or a Date object
            onChange={handleEndDateChange}
            sx={{width: "100%"}}
          />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
