import Header from "./Header";
import Footer from "./Footer";
import TasksManager from "./TasksManager";
import AddTask from "./AddTask";
import PendingTasks from "./PendingTasks";
import CompleteTasks from "./CompleteTasks";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <TasksManager
          render={(tasks, method) => (
            <>
              <AddTask onSubmit={method.addTask} />
              <div className="tasks-category">
                <PendingTasks
                  tasks={tasks.filter((task) => task.completed === false)}
                  onDelete={method.deleteTask}
                  onComplete={method.completeTask}
                />
                <CompleteTasks
                  tasks={tasks.filter((task) => task.completed === true)}
                  onDelete={method.deleteTask}
                  onComplete={method.completeTask}
                />
              </div>
            </>
          )}
        />
      </main>
      <Footer />
    </>
  );
}
