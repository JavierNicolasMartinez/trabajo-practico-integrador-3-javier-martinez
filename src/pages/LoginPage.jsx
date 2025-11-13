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
  //    onLogin();

  //   navigate("/home");

  // };

  return (
    <main className="">
      {loading && <Loading />}
      <div className="">
        <div className="">
          <div className="">
            <h1 className="">Welcome</h1>
          </div>

          <form onSubmit={handleLogin} className="">
            <div className="">
              <label htmlFor="username" className="">
                <span className="">👤 Username</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="your username"
                value={formState.username}
                onChange={handleChange}
                id="username"
                className=""
                required
              />
            </div>

            <div className="">
              <label htmlFor="password" className="">
                <span className="">🔒 Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="*******"
                value={formState.password}
                onChange={handleChange}
                id="password"
                className=""
              />
            </div>

            <button type="submit" className="">
              <span className="">Enter TP2</span>
            </button>

            <div className="">
              <p className="">
                Forgot your details? <span className="">Coming soon</span>
              </p>
            </div>
          </form>
          <p className="">
            ¿You don't have an account?{" "}
            <Link to="/register" className="">
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
