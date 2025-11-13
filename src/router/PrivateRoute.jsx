import { Navigate, Outlet } from "react-router";
import { Navbar } from "../components/Navbar.jsx";

export const PrivateRoutes = () => {
  const isLogged = localStorage.getItem("isLogged");

  return isLogged ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/register" />
  );
};
