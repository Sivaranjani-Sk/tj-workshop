import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import DefaultLayout from "./layout/DefaultLayout";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";

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
      </Routes>
    </Router>
  );
};

export default MainRoutes;
