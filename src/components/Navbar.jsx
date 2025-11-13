import { Link, useNavigate } from "react-router";

export const Navbar = ({ isAuth, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      onLogout();
      navigate("/login");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <nav className="">
      <div className="">
        <h1>TP 2 INTEGRADOR</h1>

        <div className="">
          {isAuth ? (
            <>
              <Link to="/home" className="" onClick={handleSubmit}>
                Home
              </Link>
              <Link to="/taks" className="">
                Tasks
              </Link>
              <Link to="/profile" className="">
                Profile
              </Link>
              <button onClick={handleLogout} className="">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="">
                Login
              </Link>
              <Link to="/register" className="">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
