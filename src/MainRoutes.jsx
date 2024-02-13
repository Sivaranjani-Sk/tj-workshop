import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import DefaultLayout from "./layout/DefaultLayout";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import Dashboard from "./components/pages/Dashboard";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<DefaultLayout component={Login} layout={AuthLayout} />}
        />
        <Route
          path="/registration"
          element={
            <DefaultLayout component={Registration} layout={AuthLayout} />
          }
        />
        <Route
          path="/dashboard"
          element={<DefaultLayout component={Dashboard} layout={AuthLayout} />}
        />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
