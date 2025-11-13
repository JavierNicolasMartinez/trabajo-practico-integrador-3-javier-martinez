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
    <main className="">
      {loading && <Loading />}
      <div className="">
        <div className="">
          {/* Header */}
          <div className="">
            <h1 className="">CREATE</h1>
            <div className="">
              <div className=""></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="">
            <div className="">
              {/* Columna izquierda */}
              <div className="">
                {/* Username */}
                <div className="">
                  <label htmlFor="username" className="">
                    <span className="">👤 Username</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={handleChange}
                    disabled={loading}
                    id="username"
                    placeholder="Tu usuario único"
                    className=""
                    required
                  />
                </div>

                {/* Email */}
                <div className="">
                  <label htmlFor="email" className="">
                    <span className="">📧 Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    disabled={loading}
                    id="email"
                    placeholder="tu@email.com"
                    className=""
                    required
                  />
                </div>

                {/* Password */}
                <div className="">
                  <label htmlFor="password" className="">
                    <span className="">🔒 Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                    disabled={loading}
                    id="password"
                    placeholder="********"
                    className=""
                    required
                  />
                </div>
              </div>

              {/* Columna derecha */}
              <div className="">
                {/* Firstname */}
                <div className="">
                  <label htmlFor="name" className="">
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
                    className=""
                    required
                  />
                </div>

                {/* Lastname */}
                <div className="">
                  <label htmlFor="lastname" className="">
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
                    className=""
                    required
                  />
                </div>

                {/* Botones */}
                <div className="">
                  <button type="button" onClick={handleReset} className="">
                    🔄 Reset
                  </button>
                  <button type="submit" className="" onClick={handleSubmit}>
                    {loading ? "Registrando..." : "Register"}
                  </button>
                  <p className="">
                    ¿Are you already registered?{" "}
                    <Link to="/login" className="">
                      Login
                    </Link>
                    {/* //como agregar el navigate login */}
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
