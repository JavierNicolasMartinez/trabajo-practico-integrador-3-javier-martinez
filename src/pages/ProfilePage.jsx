import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { Loading } from "../components/Loading.jsx";

export const ProfilePage = ({ onLogout }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/profile", {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setUserData(data.user);
      } else {
        console.error("Error loading profile");
        onLogout();
        Navigate("login");
      }
    } catch (error) {
      console.error(error);
      onLogout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/api/logout", {
        credentials: "include",
      });
    } catch (error) {
      console.error("Error logging in", error);
    } finally {
      onLogout();
    }
  };

  return (
    <main className="">
      <section className="">
        {loading && <Loading />}

        <div className="">
          <div className="">
            {userData?.name ? userData.name.charAt(0).tuUpperCase() : "U"}
          </div>
          <h2 className="">{userData?.name ? userData.name : "Profile"}</h2>
          <p className="">Personal information</p>
        </div>
        <hr className="" />

        {/* aca ya muestro los datos del perfil */}
        {!loading && userData && (
          <div className="">
            <div className="">
              <span className="">Name</span>
              <p className="">{userData.name}</p>
            </div>

            <div className="">
              <span className="">Lastname</span>
              <p className="">{userData.lastname}</p>
            </div>

            <button onClick={handleLogout} className="">
              Logout
            </button>
          </div>
        )}
      </section>
    </main>
  );
};
