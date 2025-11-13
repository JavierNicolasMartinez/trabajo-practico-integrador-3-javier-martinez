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
    // BARRA DE NAVEGACIÓN PRINCIPAL
    <nav className="bg-gray-800 p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* TÍTULO/LOGO */}
        <h1 className="text-xl font-bold text-white">TP 2 INTEGRADOR</h1>

        {/* ENLACES DE NAVEGACIÓN */}
        <div className="flex space-x-4 items-center">
          {isAuth ? (
            // ENLACES PARA USUARIO AUTENTICADO
            <>
              <Link
                to="/home"
                className="text-gray-300 hover:text-white transition duration-150"
                onClick={handleSubmit}
              >
                Home
              </Link>
              <Link
                to="/tasks"
                className="text-gray-300 hover:text-white transition duration-150"
              >
                Tasks
              </Link>
              <Link
                to="/profile"
                className="text-gray-300 hover:text-white transition duration-150"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded transition duration-150"
              >
                Logout
              </button>
            </>
          ) : (
            // ENLACES PARA USUARIO NO AUTENTICADO
            <>
              <Link
                to="/login"
                className="text-gray-300 hover:text-blue-400 transition duration-150 font-semibold"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-300 hover:text-blue-400 transition duration-150 font-semibold"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
