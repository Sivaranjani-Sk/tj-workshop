import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import DefaultLayout from './layout/DefaultLayout';
import ProtectedLayout from './layout/ProtectedLayout';
import MainLayout from './layout/MainLayout';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import Forgotpassword from './components/auth/Forgotpassword';
import Dashboard from './components/pages/Dashboard';
import Landingpage from './components/pages/Landingpage';
import QuestionAnswer from './components/pages/QuestionAnswer';

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout component={Login} layout={AuthLayout} />
          }
        />
        <Route
          path="/registration"
          element={
            <DefaultLayout
              component={Registration}
              layout={AuthLayout}
            />
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <DefaultLayout
              component={Forgotpassword}
              layout={AuthLayout}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedLayout
              component={Dashboard}
              layout={MainLayout}
            />
          }
        />
        <Route
          path="/landingpage"
          element={
            <ProtectedLayout
              component={Landingpage}
              layout={MainLayout}
            />
          }
        />
        <Route
          path="/question-answer"
          element={
            <ProtectedLayout
              component={QuestionAnswer}
              layout={MainLayout}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
