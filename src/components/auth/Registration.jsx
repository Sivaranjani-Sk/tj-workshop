import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import PrimaryButton from "../commons/buttons/PrimaryButton.jsx";
import { registerSchema } from "./AuthSchema.jsx";
import { registerApi } from "../services/auth.js";
import styles from "./registration.module.css";

const Registration = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
      mobile: "",
      city: "",
      state: "",
      pincode: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      const response = await registerApi(values);
      if (response.data) {
        toast(response.data.message);
        navigate("/");
      }
    },
  });
  return (
    <div className={styles.container}>
      <h1>Registration</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.register_form}>
          <TextField
            id="standard-basic"
            variant="standard"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            name="password"
            label="Password"
            id="standard-basic"
            variant="standard"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            name="username"
            label="User name"
            id="standard-basic"
            variant="standard"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            name="mobile"
            label="Mobile"
            id="standard-basic"
            variant="standard"
            value={formik.values.mobile}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
          <TextField
            name="city"
            label="City"
            id="standard-basic"
            variant="standard"
            value={formik.values.city}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
          <TextField
            name="state"
            label="State"
            id="standard-basic"
            variant="standard"
            value={formik.values.state}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
          />
          <TextField
            name="pincode"
            label="Pincode"
            id="standard-basic"
            variant="standard"
            value={formik.values.pincode}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.pincode && Boolean(formik.errors.pincode)}
            helperText={formik.touched.pincode && formik.errors.pincode}
          />{" "}
        </div>
        <PrimaryButton type="submit">Register</PrimaryButton>
      </form>

      <p className={styles.link}>
        Already have an account <Link to="/">Login here</Link>.
      </p>
    </div>
  );
};

export default Registration;
