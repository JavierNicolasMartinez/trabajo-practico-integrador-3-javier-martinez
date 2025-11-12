import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { formState, handleChange } = useForm({
    username: "",
    password: "",
  });

  const { username, password } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();
    //! onLogin Da un error porque no es una funcion o no encuentra la funcion que estas utilizando
    localStorage.setItem("isLogged", "true");
    console.log(formState);
    // localStorage.setItem("username", username);
    //! Esta es la parte de la funcion que te lleva a Home
    //! Navigate = Navegar a ..... (Ubicacion)
    navigate("/home");
    //! Esta funcion la ejecutas en el boton de la linea 103 con onClick={handleSubmit}
  };

  // const handleLogin = async (event) => {
  //   event.preventDefault();
  //   const peticion = await fetch("url de mi backend", {
  //     method: "POST",
  //     body: JSON.stringify({formState}),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await peticion.json();
  //   if (!peticion.ok) {
  //     return alert(data.message);
  //   }

  //   localStorage.setItem("token", data.token);
  //   alert(data.message)

  //   navigate("/home");

  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      {/* Patrón de donas (como Homer) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-16 h-16 border-8 border-brown-500 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 border-8 border-brown-500 rounded-full"></div>
        <div className="absolute top-40 right-40 w-20 h-20 border-8 border-brown-500 rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Tarjeta del formulario */}
        <div className="bg-white rounded-3xl shadow-2xl border-8 border-gray-900 overflow-hidden transform hover:scale-105 transition-transform duration-300">
          {/* Header con estilo Simpson */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 border-b-8 border-gray-900">
            <h1 className="text-4xl font-black text-center text-gray-900 uppercase tracking-wider drop-shadow-[3px_3px_0_#333]">
              Iniciar Sesión
            </h1>
            <div className="flex justify-center mt-2">
              <div className="w-16 h-1 bg-gray-900 rounded-full"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Campo Username */}
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="block text-lg font-bold text-gray-800"
              >
                <span className="bg-yellow-400 px-2 py-1 rounded-lg border-2 border-gray-900">
                  👤 Usuario
                </span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={handleChange}
                id="username"
                className="w-full px-4 py-4 text-lg font-semibold rounded-xl border-4 border-gray-900 
                         bg-yellow-50 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 
                         focus:border-yellow-500 transition-all duration-200 shadow-[4px_4px_0_#333]"
              />
            </div>

            {/* Campo Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-lg font-bold text-gray-800"
              >
                <span className="bg-yellow-400 px-2 py-1 rounded-lg border-2 border-gray-900">
                  🔒 Contraseña
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={handleChange}
                id="password"
                className="w-full px-4 py-4 text-lg font-semibold rounded-xl border-4 border-gray-900 
                         bg-yellow-50 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 
                         focus:border-yellow-500 transition-all duration-200 shadow-[4px_4px_0_#333]"
              />
            </div>

            {/* Botón de enviar */}
            <button
              type="submit"
              className="w-full py-4 px-6 text-xl font-black uppercase rounded-xl 
                       bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 
                       border-4 border-gray-900 shadow-[6px_6px_0_#333]
                       hover:shadow-[3px_3px_0_#333] hover:translate-x-1 hover:translate-y-1 
                       active:shadow-[1px_1px_0_#333] active:translate-x-2 active:translate-y-2
                       transition-all duration-200 group"
              onClick={handleSubmit}
            >
              <span className="flex items-center justify-center">
                🍩 Ingresar a Springfield
                <svg
                  className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>

            {/* Texto decorativo */}
            <div className="text-center mt-4">
              <p className="text-gray-600 font-semibold text-sm">
                ¡D'oh! ¿Olvidaste tus datos?
                <span className="text-yellow-600 font-bold ml-1">
                  ¡No problem!
                </span>
              </p>
            </div>
          </form>
        </div>

        {/* Mensaje decorativo abajo */}
        <div className="text-center mt-6">
          <p className="text-white font-black text-lg drop-shadow-[2px_2px_0_#333]">
            ¡La familia Simpson te espera!
          </p>
        </div>
      </div>
    </div>
  );
};
