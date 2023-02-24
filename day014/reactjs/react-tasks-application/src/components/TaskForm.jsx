import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4 rounded-md" onSubmit={handleSubmit}>
        <h1 className="text-2x1 font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <br />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          placeholder="Escribe la descripción de tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <br />
        <button className="bg-indigo-500 text-white px-3 py-1 rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
