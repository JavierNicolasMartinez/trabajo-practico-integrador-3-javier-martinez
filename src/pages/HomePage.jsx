import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Loading } from "../components/Loading.jsx";

export const HomePage = () => {
  const [userData, setUserData] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadHomeData = async () => {
    try {
      const promiseProfile = fetch("http://localhost:3000/api/profile", {
        credentials: "include",
      });
      const promiseTasks = fetch("http://localhost:3000/api/tasks", {
        credentials: "include",
      });

      const [profileResponse, tasksResponse] = await Promise.all([
        promiseProfile,
        promiseTasks,
      ]);

      if (profileResponse.ok) {
        const profileData = await profileResponse.json();
        setUserData(profileData);
      } else {
        console.error("Error loading profile");
      }
      if (tasksResponse.ok) {
        const tasksData = await tasksResponse.json();
        setTasks(
          tasksData.tasks || (Array.isArray(tasksData) ? tasksData : [])
        );
      } else {
        console.error("Error loading tasks");
      }
    } catch (error) {
      console.error("Error loading Home:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHomeData();
  }, []);

  const allTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.is_completed).length;
  const pendingTasks = allTasks - completedTasks;

  if (loading) {
    return (
      <div className="">
        <Loading />
      </div>
    );
  }

  return (
    <main className="">
      <div className="">
        <h1 className="">
          Welcome, <span className="">{userData?.name || "User"}</span>
        </h1>

        <div className="">
          <div className="">
            <h2 className="">{completedTasks}</h2>
            <p className="">Completed</p>
          </div>

          <div className="">
            <h2 className="">{pendingTasks}</h2>
            <p className="">Pending</p>
          </div>

          <div className="">
            <Link to="tasks" className="">
              go to tasks
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
