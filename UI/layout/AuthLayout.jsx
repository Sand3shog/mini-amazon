import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useNavigate } from "react-router";

const AuthLayout = (props) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", {
        replace: true,
      });
    }
  }, [navigate, isLoggedIn]);
  return (
    <div>
      <Toaster />
      <h1>Add PRODUCT</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;