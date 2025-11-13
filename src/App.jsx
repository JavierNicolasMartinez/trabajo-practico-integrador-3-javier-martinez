import { AppRouter } from "./router/AppRouter.jsx";
import { Footer } from "./components/Footer.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { useState } from "react";
export const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isLogged"));

  const handleLogin = () => {
    localStorage.setItem("isLogged", true);
    setIsAuth(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    setIsAuth(false);
  };

  return (
    <>
      <Navbar isAuth={isAuth} onLogout={handleLogout} />
      <AppRouter
        isAuth={isAuth}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <Footer />
    </>
  );
};
