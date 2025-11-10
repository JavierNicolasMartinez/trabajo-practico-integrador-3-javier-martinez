import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLogged");
    //sino pongo "token" para que me remueva.
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //! onLogin Da un error porque no es una funcion o no encuentra la funcion que estas utilizando
    navigate("/home");
    //! Esta funcion la ejecutas en el boton de la linea 103 con onClick={handleSubmit}
  };
  return (
    // Estilo de cómic: Fijo arriba (sticky/fixed), fondo oscuro, borde grueso.
    <nav
      className="sticky top-0 z-50 p-4 w-full flex justify-between items-center 
                 bg-gray-800 text-white border-b-4 border-b-[#ffc909] // Fondo oscuro con borde amarillo
                 shadow-lg shadow-black/30" // Sombra sutil para levantarlo
    >
      {/* Contenedor de la izquierda (ej. Título de la App) */}
      <div className="font-black text-xl text-[#ffc909] uppercase tracking-wider">
        THE SIMPSONS API
      </div>

      {/* Contenedor de Links */}
      <div className="flex space-x-6 items-center">
        {/* Link Home: Usamos <a> en lugar de <Link> para evitar el error de importación */}
        <a
          href="/home"
          className="text-white text-lg font-bold uppercase transition-colors duration-200
                     hover:text-[#ffc909]" // Amarillo al pasar el ratón
          onClick={handleSubmit}
        >
          Home
        </a>

        {/* Link Logout: Botón de acción destacado */}
        <a
          href="/about"
          className="bg-[#ffc909] text-gray-900 px-4 py-1 rounded-md text-lg font-extrabold uppercase
                     // Borde negro para efecto cómic
                     border-2 border-gray-900 shadow-[2px_2px_0_#000] 
                     transition-transform duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none" // Efecto click
        >
          <button onClick={logout}>Logout</button>
        </a>
      </div>
    </nav>
  );
};
