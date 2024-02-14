import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PrimaryButton from "../commons/buttons/PrimaryButton.jsx";
import { loginSchema } from "./AuthSchema.jsx";
import styles from "./login.module.css";
import { loginApi } from "../services/auth.js";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const response = await loginApi(values);
      if (response.data) {
        localStorage.setItem("token", response.data.token);
        toast(response.data.message);
        navigate("/dashboard");
      }
    },
  });
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.login_form}>
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
            type={showPassword ? "text" : "password"}
            id="standard-basic"
            variant="standard"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <PrimaryButton type="submit">Login</PrimaryButton>
      </form>
      <p className={styles.link}>
        New user? <Link to="/registration">Register here</Link>.
      </p>
    </div>
  );
}

export default Login;
