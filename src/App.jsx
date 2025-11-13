import { AppRouter } from "./router/AppRouter.jsx";
import { Footer } from "./components/Footer.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { useEffect, useState } from "react";
import { Loading } from "./components/Loading.jsx";
export const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const res = await fetch("url");

      if (res.ok) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleLogout = () => {
    setIsAuth(false);
  };

  if (loading) {
    return (
      <div>
        {" "}
        <Loading />{" "}
      </div>
    );
  }

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
