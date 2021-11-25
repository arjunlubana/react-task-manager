import { useState } from "react";
import { v4 as genId } from "uuid";

export default function AddTask({ onSubmit }) {
  const [task, setTask] = useState({
    id: genId(),
    title: "",
    completed: false,
    date: new Date().toDateString(),
  });
  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTask({ ...task, id: genId(), title: "" });
    onSubmit(task);
  };
  return (
    <form className="task-form">
      <input
        className="form-input"
        name="title"
        htmlFor="Title"
        type="text"
        onChange={handleChange}
        value={task.title}
        onBlur={handleSubmit}
        placeholder="Add Task"
      />
    </form>
  );
}
