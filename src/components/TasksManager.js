import AddTask from "./AddTask";
import PendingTasks from "./pendingTasks";
import CompletedTasks from "./completedTasks";
import { useState } from "react";

export default function TasksManager() {
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
      completed: false,
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

  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <AddTask onSubmit={addTask} />
      <PendingTasks
        tasks={tasks.filter((task) => task.completed === false)}
        onDelete={deleteTask}
        onComplete={completeTask}
      />
      <CompletedTasks
        tasks={tasks.filter((task) => task.completed === true)}
        onDelete={deleteTask}
        onComplete={completeTask}
      />
    </div>
  );
}
