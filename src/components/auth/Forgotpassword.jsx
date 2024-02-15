// In your Forgotpassword component:

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { forgotpasswordApi } from '../services/auth';
import { loginSchema } from './AuthSchema.jsx';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PrimaryButton from '../commons/buttons/PrimaryButton.jsx';
import styles from './forgotpassword.module.css';

const Forgotpassword = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [errMessage, setErrMessage] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      if (values.password !== values.confirmPassword) {
        setErrMessage(true);
        return;
      }
      const response = await forgotpasswordApi(values);

      if (response.data) {
        localStorage.setItem('token', response.data.token);

        toast(response.data.message);
        navigate('/');
      }
    },
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Reset Password</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <TextField
          id="email"
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
          type={showPassword ? 'text' : 'password'}
          variant="standard"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.password && Boolean(formik.errors.password)
          }
          helperText={
            formik.touched.password && formik.errors.password
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          variant="standard"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword &&
            formik.errors.confirmPassword
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  aria-label="toggle confirm password visibility"
                  onClick={toggleConfirmVisibility}
                  edge="end"
                >
                  {showConfirmPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {errMessage && (
          <span className={styles.toggle_pass}>
            New password and confirm password should match
          </span>
        )}

        <PrimaryButton
          className={styles.reset}
          type="submit"
          onClick={() => {}}
        >
          Reset Password
        </PrimaryButton>
      </form>
    </div>
  );
};

export default Forgotpassword;
