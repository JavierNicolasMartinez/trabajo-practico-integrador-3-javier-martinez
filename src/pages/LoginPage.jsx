import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Loading } from "../components/Loading.jsx";
import { useForm } from "../hooks/useForm.js";

export const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const { formState, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (res.ok) {
        onLogin();
        console.log(res.ok);
      } else {
        alert(data.message || "Credenciales invalidas");
        handleReset();
      }
    } catch (error) {
      console.error(error);
      alert("Error en el servidor");
      handleReset();
    } finally {
      setLoading(false);
      navigate("/home");
    }
  };

  return (
    // CONTENEDOR PRINCIPAL
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {loading && <Loading />}
      <div className="w-full max-w-md">
        {/* TARJETA DEL FORMULARIO */}
        <div className="bg-white p-8 shadow-xl rounded-xl">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-extrabold text-gray-800">Welcome</h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Input Username */}
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
                placeholder="your username"
                value={formState.username}
                onChange={handleChange}
                id="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 disabled:bg-gray-100"
                required
              />
            </div>

            {/* Input Password */}
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
                placeholder="*******"
                value={formState.password}
                onChange={handleChange}
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 disabled:bg-gray-100"
                required
              />
            </div>

            {/* Botón Submit/Enter */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150 disabled:bg-blue-400"
              disabled={loading}
            >
              <span className="text-lg">
                {loading ? "Logging in..." : "Enter TP2"}
              </span>
            </button>

            {/* Enlaces adicionales */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Forgot your details?{" "}
                <span className="text-gray-400">Coming soon</span>
              </p>
            </div>
          </form>

          {/* Link a Register */}
          <p className="text-center text-sm text-gray-600 mt-6 pt-4 border-t border-gray-100">
            ¿You don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-800 font-semibold transition duration-150"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
