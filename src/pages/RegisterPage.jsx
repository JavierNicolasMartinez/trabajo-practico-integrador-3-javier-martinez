import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { Loading } from "../components/Loading";

export const RegisterPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const { formState, handleChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    navigate("/login");

    const payload = {
      name: formState.firstname,
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
        onLogin();
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
                  <label htmlFor="firstname" className="">
                    <span className="">Name</span>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={formState.firstname}
                    onChange={handleChange}
                    id="firstname"
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
                    ¿Ya estas registrado?{" "}
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
