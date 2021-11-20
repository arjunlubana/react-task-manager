import Task from './Task'

export default function TasksList({tasks, onAdd, onDelete, onComplete}) {

    return (
        <div className="tasks-list">
            {tasks.map((task) => <Task key={task.id} task={task} onAdd={onAdd} onDelete={onDelete} onComplete={onComplete} />)}
        </div>
    )
}