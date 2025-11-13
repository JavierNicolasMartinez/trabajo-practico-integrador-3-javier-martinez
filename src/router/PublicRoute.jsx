import { Navigate, Outlet } from "react-router";

export const PublicRoutes = () => {
  const isLogged = localStorage.getItem("isLogged");

  return !isLogged ? <Outlet /> : <Navigate to="/home" />;
};

// const PublicRoute = ({ children, isAuth }) => {
//   if (isAuth) {
//     return <Navigate to="/home" />;
//   }

//   return children;
// };

// export default PublicRoute;
