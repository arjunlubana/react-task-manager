import { useState, useEffect } from "react";
import { addTaskLocal, getTasksLocal, deleteTaskLocal, editTaskLocal } from "../models/data";

export default function TasksManager({ render }) {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasksLocal.then((data) => {
      setTasks(data)
    })
  })

  const addTask = (task) => {
    addTaskLocal(task);
    setTasks([task, ...tasks]);
  };

  const deleteTask = (id) => {
    deleteTaskLocal(id)
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
    console.log(`delete ${tasks.length}`);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    console.log(`complete ${tasks}`);
  };

  const method = { addTask, deleteTask, completeTask };

  // Using render props to render the following dynamically:
  // - AddTask form,
  // - Pending tasks and
  // - Completed tasks
  return render(tasks, method);
}
