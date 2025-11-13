import { Navigate, Outlet } from "react-router";
import { Navbar } from "../components/Navbar.jsx";

export const PrivateRoutes = ({ isAuth }) => {
  return isAuth ? (
    <>
      {/* <Navbar /> */}
      <Outlet />
    </>
  ) : (
    <Navigate to="/register" />
  );
};
