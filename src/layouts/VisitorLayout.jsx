import React from "react";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";

const VisitorLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default VisitorLayout;
