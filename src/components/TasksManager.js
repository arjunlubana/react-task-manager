import { useState } from "react";

export default function TasksManager({ render }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Wash Dishes",
      description: "Make them clean",
      completed: false,
      date: new Date(2010, 11, 10).toDateString(),
    },
    {
      id: 2,
      title: "Wash Clothes",
      description: "Make them clean",
      completed: true,
      date: new Date(2010, 11, 10).toDateString(),
    },
    {
      id: 3,
      title: "Wash Face",
      description: "Make them clean",
      completed: false,
      date: new Date(2010, 11, 10).toDateString(),
    },
  ]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const deleteTask = (id) => {
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

  return render(tasks, method);
}
