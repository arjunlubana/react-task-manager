import TasksList from "./TasksList"
import NoTasks from "./NoTasks"

export default function PendingTasks({tasks, onDelete, onComplete}) {
    return (
        <div>
            <h3 className="subtitle">Pending Tasks</h3>
            {
                tasks.length > 0 ? <TasksList tasks={tasks} onDelete={onDelete} onComplete={onComplete} /> : <NoTasks />
            }
        </div>
    )
}
