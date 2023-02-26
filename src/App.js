import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./apply/RegisterPage";
import CheckStatus from "./checkStatus/CheckStatus";
import SuperAdminPage from "./superadmin/SuperAdminPage";
import Contact from "./contact/contact";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import HomePage from "./home/HomePage";
import { ToastContainer } from "react-toastify";
import Info from "./Info/Info";
import Dashboard from "./Dashboard/Dashboard";
import Employees from "./Dashboard/employees";
import HrManager from "./Dashboard/HrManager";
import Salary from "./Dashboard/Salary";

const App = () => (
  <Router>
    <ToastContainer />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/checkstatus" element={<CheckStatus />} />
      <Route path="/superadmin" element={<SuperAdminPage />} />
      <Route path="/info/:id" element={<Info />} />
      <Route path="/dash/:id" element={<Dashboard />} />
      <Route path="/employee" element={<Employees />} />
      <Route path="/hr/:id" element={<HrManager />} />
      <Route path="/salary/:id" element={<Salary />} />


    </Routes>
  </Router>
);

export default App;
