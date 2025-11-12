import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { ProfilePage } from "../pages/ProfilePage";
import { TasksPage } from "../pages/TasksPage";

export const AppRouter = ({ isAuth, onLogin, onLogout }) => {
  return (
    <Routes>
      <Route element={<PublicRoutes isAuth={isAuth} onLogin={onLogin} />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoutes isAuth={isAuth} />}>
        <Route path="home" element={<HomePage />} />
        <Route path="profile" element={<ProfilePage onLogout={onLogout} />} />
        <Route path="tasks" element={<TasksPage />} />
      </Route>

      <Route path="*" element={<Navigate to={isAuth ? "/home" : "login"} />} />
    </Routes>
  );
};
