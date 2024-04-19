// MainForm.js
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import NameInput from "../components/NameInput";
import WheelsInput from "../components/WheelsInput";
import VehicleTypeInput from "../components/VehicleTypeInput";
import ModelInput from "../components/ModelInput";
import DateRangePicker from "../components/DateRangePicker";

const MainForm = () => {
  const [step, setStep] = useState(1);
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [vehicleModels, setVehicleModels] = useState([]);

  const validationSchemas = [
    Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
    }),
    Yup.object({
      wheels: Yup.string().required("Number of Wheels is required"),
    }),
    Yup.object({
      vehicleType: Yup.string().required("Vehicle Type is required"),
    }),
    Yup.object({
      model: Yup.string().required("Specific Model is required"),
    }),
    Yup.object({
      startDate: Yup.date().required("Start Date is required"),
      endDate: Yup.date().required("End Date is required"),
    }),
  ];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      wheels: "",
      vehicleType: "",
      model: "",
      startDate: null,
      endDate: null,
    },
    validationSchema: validationSchemas[step - 1],
    onSubmit: (values, { setSubmitting }) => {
      console.log(values); // Send data to backend API for booking
      setSubmitting(false);
    },
  });
  console.log("values", formik.values);

  useEffect(() => {
    if (formik.values.wheels != "") {
        var url = formik.values.wheels > 2 ? 'http://localhost:5000/cars' : 'http://localhost:5000/bikes' 
      axios
        .get(url)
        .then((res) => setVehicleTypes(res.data))
        .catch((err) => {
          console.log(err);
        });
      console.log("use", formik.values.wheels);
    }
  }, [formik.values.wheels]);

  console.log('type', vehicleTypes)

  const handleNextStep = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setStep((prevStep) => prevStep + 1);
      } else {
        alert("Please fill out all required fields.");
      }
    });
  };

  //   const handlePrevStep = () => {
  //     setStep((prevStep) => prevStep - 1);
  //   };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <NameInput formik={formik} />;
      case 2:
        return <WheelsInput formik={formik} />;
      case 3:
        return <VehicleTypeInput options={vehicleTypes} formik={formik} />;
      case 4:
        return <ModelInput formik={formik} />;
      case 5:
        return <DateRangePicker formik={formik} />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {renderStep()}
      {/* {step > 1 && (
        <button type="button" onClick={handlePrevStep} disabled={formik.isSubmitting}>
          Previous
        </button>
      )} */}
      {step < 5 && (
        <button
          type="button"
          onClick={handleNextStep}
          disabled={
            formik.isSubmitting || Object.keys(formik.errors).length > 0
          }
        >
          Next
        </button>
      )}
      {step === 5 && (
        <button
          type="submit"
          disabled={
            formik.isSubmitting || Object.keys(formik.errors).length > 0
          }
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default MainForm;
