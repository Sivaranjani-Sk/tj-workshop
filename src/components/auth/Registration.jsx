import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import { SignupSchema } from "./AuthSchema.jsx";
import "./registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    countryCode: "+91",
    mobile: "",
    city: "",
    state: "",
    pincode: "",
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
      country_code: "+91",
      mobile: "",
      city: "",
      state: "",
      pincode: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // handleSubmit(values);
    },
  });

  // const navigate = useNavigate();
  // const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const isValid = validateForm();
  //   if (isValid) {
  //     await axios
  //       .post("http://localhost:3000/user/signup", {
  //         email: formData.email,
  //         password: formData.password,
  //         username: formData.username,
  //       })
  //       .then((response) => {
  //         console.log("response", response);
  //         if (response.status == 200) {
  //           toast(response.data.message);
  //           navigate("/");
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         toast(error.response.data.message);
  //       });
  //   }
  // };

  // const validateForm = () => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(formData.email)) {
  //     setError("Invalid email format");
  //     return false;
  //   }
  //   const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;
  //   if (!passwordRegex.test(formData.password)) {
  //     setError(
  //       "Password must be at least 8 characters with 1 uppercase and 1 special character",
  //     );
  //     return false;
  //   }

  //   setError("");
  //   return true;
  // };

  return (
    <div className="container">
      <h2>Registration</h2>
      <form>
        <div className="form">
          <TextField
            size="small"
            id="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <TextField
            size="small"
            id="outlined-basic"
            name="password"
            label="Password"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <TextField
            id="outlined-basic"
            name="username"
            label="User name"
            variant="outlined"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <TextField
            id="outlined-basic"
            name="countryCode"
            label="Country Code"
            variant="outlined"
            value={formik.values.countryCode}
            onChange={formik.handleChange}
          />
          <TextField
            id="outlined-basic"
            name="mobile"
            label="Mobile"
            variant="outlined"
            value={formik.values.mobile}
            onChange={formik.handleChange}
          />
          <TextField
            id="outlined-basic"
            name="city"
            label="City"
            variant="outlined"
            value={formik.values.city}
            onChange={formik.handleChange}
          />
          <TextField
            id="outlined-basic"
            name="state"
            label="State"
            variant="outlined"
            value={formik.values.state}
            onChange={formik.handleChange}
          />
          <TextField
            id="outlined-basic"
            name="pincode"
            label="Pincode"
            variant="outlined"
            value={formik.values.pincode}
            onChange={formik.handleChange}
          />{" "}
        </div>

        <button className="regisBtn" type="submit">
          Register
        </button>
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      </form>
    </div>
  );
};

export default Registration;
