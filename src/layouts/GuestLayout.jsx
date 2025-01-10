import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const GuestLayout = () => {
  const { userToken, currentRole } = useStateContext();

  // Check if token and role does exist
  if (userToken && currentRole) {
    // Intilize path variable
    let path = "";

    switch (currentRole) {
      case "admin":
        path = "/ad";
        break;
    }

    // console.log("Routing");

    // Return Navigate to specific path
    return <Navigate to={path} />;
  }

  // Return Outlet
  return <Outlet />;
};

export default GuestLayout;
