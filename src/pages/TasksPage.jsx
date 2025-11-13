import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { useForm } from "../hooks/useForm.js";

export const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const { formState, setForm, handleChange, handleReset } = useForm({
    title: "",
    description: "",
    is_completed: false,
  });

  // Crear o editar
  const [idEdit, setIdEdit] = useState(null);

  const fetchTasks = async () => {
    if (tasks.length === 0) {
      setLoading(true);
    }

    try {
      const res = await fetch("http://localhost:3000/api/tasks-by-user", {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setTasks(data.tasks || (Array.isArray(data) ? data : []));
      } else {
        console.error("Error loading tasks");
        setTasks([]);
      }
    } catch (error) {
      console.error(error);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (idEdit) {
      handleUpdateTask();
    } else {
      handleCreateTask();
    }
  };

  const handleSelectEdit = (task) => {
    setIdEdit(task.id);
    setForm({
      title: task.title,
      description: task.description,
      is_completed: task.is_completed,
    });
  };

  const handleCanceleEdit = () => {
    setIdEdit(null);
    handleReset();
  };

  const handleCreateTask = async () => {
    if (!setForm.title) {
      alert("the title is required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        alert("The task completed");
        handleReset();
        fetchTasks();
      } else {
        const data = await res.json();
        alert(data.message || "Error creating task");
      }
    } catch (error) {
      console.error(error);
      alert("Error in the server");
    }
  };

  const handleUpdateTask = async () => {
    if (!formState.title) {
      alert("The title is required");
      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/api/tasks/${idEdit}`, {
        method: "PUT",
        headers: { "Context-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        alert("The task updated");
        handleCanceleEdit();
        fetchTasks();
      } else {
        const data = await res.json();
        alert(data.message || "Error updating task");
      }
    } catch (error) {
      console.error(error);
      alert("Error in the server");
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) {
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.ok) {
        alert("The task deleted");
        fetchTasks();
      } else {
        const data = await res.json();
        alert(data.message || "Error deleting the task");
      }
    } catch (error) {
      console.error(error);
      alert("Error in the server");
    }
  };

  return (
    <main className="">
      <div className="">
        {/* primero deberia hacer algo para editar  */}
        <section className="">
          <h2 className="">
            {idEdit ? "Edit" : "Create"} <span className="">Task</span>
          </h2>

          <form onSubmit={handleSubmit} className="">
            <div className="">
              <label htmlFor="title" className="">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formState.title}
                onChange={handleChange}
                placeholder="Example: Buy Bread"
                className=""
              />
            </div>
            <div className="">
              <label htmlFor="description" className="">
                Description{" "}
              </label>{" "}
              <textarea
                name="description"
                id="description"
                value={formState.description}
                onChange={handleChange}
                placeholder="Details"
                className=""
              ></textarea>
            </div>

            <div className="">
              <input
                type="checkbox"
                id="is_completed"
                name="is_completed"
                checked={formState.is_completed}
                onChange={handleChange}
                className=""
              />
              <label htmlFor="is_completed" className="">
                Mark as completed
              </label>
            </div>
            <button type="submit" className="">
              {idEdit ? "update task" : "save task"}
            </button>

            {idEdit && (
              <button type="button" onClick={handleCanceleEdit} className="">
                cancel updated
              </button>
            )}
          </form>
        </section>

        {/* Ver tareas o listarlas  */}
        <section className="">
          <h2 className="">My Tasks</h2>

          <div className="">
            {loading && <Loading />}
            {!loading && (
              <>
                {tasks.length === 0 ? (
                  <p className="">There are no tasks</p>
                ) : (
                  <div className="">
                    {tasks.map((task) => (
                      <div key={task.id} className="">
                        <div>
                          <h3 className="">{task.title}</h3>
                          <p className="">{task.description}</p>
                        </div>
                        <div className="">
                          <button
                            onClick={() => handleSelectEdit(task)}
                            className=""
                          >
                            {" "}
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteTask(task.id)}
                            className=""
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};
