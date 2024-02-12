import "./login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
  return (
    <div className="container">
      <h1>Login</h1>
      <form id="loginForm">
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />{" "}
            {formData.password && (
              <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            )}{" "}
          </div>
        </div>

        <button className="logBtn" type="submit">
          Login
        </button>
      </form>
      <p>
        <Link to="/forgotpassword">Forgot Password?</Link>
      </p>

      <p>
        New user? <Link to="/registration">Register here</Link>.
      </p>
    </div>
  );
}

export default Login;
