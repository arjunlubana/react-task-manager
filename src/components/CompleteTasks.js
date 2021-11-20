import TasksList from "./TasksList"
import NoTasks from "./NoTasks"

export default function CompleteTasks({ tasks, onDelete, onComplete }){
    return (
        <div>
            <h3 className="subtitle">Completed Tasks</h3>
            {
                tasks.length > 0 ? <TasksList tasks={tasks} onDelete={onDelete} onComplete={onComplete} /> : <NoTasks />
            }
        </div>
    )
}