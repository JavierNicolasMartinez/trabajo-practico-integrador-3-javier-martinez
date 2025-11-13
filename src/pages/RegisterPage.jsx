import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Loading } from "../components/Loading.jsx";
import { useForm } from "../hooks/useForm.js";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { formState, handleChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
    name: "",
    lastname: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const payload = {
      name: formState.name,
      lastname: formState.lastname,
      email: formState.email,
      username: formState.username,
      password: formState.password,
    };

    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        console.log("Usuario Registrado");
      } else {
        alert(data.message || "Error al registrarse");
        handleReset();
      }
    } catch (error) {
      console.error(error);
      alert("Error en el servidor");
      handleReset();
    } finally {
      setLoading(false);
      navigate("/login");
    }
  };

  return (
    // CONTENEDOR PRINCIPAL
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {loading && <Loading />}
      <div className="w-full max-w-4xl">
        {/* TARJETA DEL FORMULARIO */}
        <div className="bg-white p-6 md:p-10 shadow-xl rounded-xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800 text-center">
              CREATE YOUR ACCOUNT
            </h1>
            {/* Div con línea divisora */}
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Columna izquierda */}
              <div className="space-y-6">
                {/* Username */}
                <div className="space-y-2">
                  <label
                    htmlFor="username"
                    className="text-sm font-medium text-gray-700"
                  >
                    <span className="flex items-center">👤 Username</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={handleChange}
                    disabled={loading}
                    id="username"
                    placeholder="Tu usuario único"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 disabled:bg-gray-100"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    <span className="flex items-center">📧 Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    disabled={loading}
                    id="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 disabled:bg-gray-100"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    <span className="flex items-center">🔒 Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                    disabled={loading}
                    id="password"
                    placeholder="********"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 disabled:bg-gray-100"
                    required
                  />
                </div>
              </div>

              {/* Columna derecha */}
              <div className="space-y-6">
                {/* Firstname */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    <span className="">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    disabled={loading}
                    id="name"
                    placeholder="your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 disabled:bg-gray-100"
                    required
                  />
                </div>

                {/* Lastname */}
                <div className="space-y-2">
                  <label
                    htmlFor="lastname"
                    className="text-sm font-medium text-gray-700"
                  >
                    <span className="">Lastname</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={formState.lastname}
                    onChange={handleChange}
                    disabled={loading}
                    id="lastname"
                    placeholder="lastname"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 disabled:bg-gray-100"
                    required
                  />
                </div>

                {/* Botones */}
                <div className="pt-2 flex flex-col space-y-3 md:pt-16">
                  {/* Botón Reset */}
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-150"
                  >
                    🔄 Reset
                  </button>
                  {/* Botón Submit/Register */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150 disabled:bg-blue-400"
                    disabled={loading}
                  >
                    {loading ? "Registrando..." : "Register"}
                  </button>
                  {/* Link a Login */}
                  <p className="text-center text-sm text-gray-600 mt-4">
                    ¿Are you already registered?{" "}
                    <Link
                      to="/login"
                      className="text-blue-600 hover:text-blue-800 font-semibold transition duration-150"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
