
export default function Task({ task, onDelete, onComplete }) {
    return (
        <div className="task-container">
            <button className={task.completed === true ? "btn btn-complete btn-complete-click": "btn btn-complete" } onClick={() => onComplete(task.id)} ></button>

            <div className={task.completed === true ? "task task-click": "task" }>
                <h2>{task.title}</h2>
                <h5>{task.description}</h5>
                <small>{task.date}</small>
            </div>
            <button className="btn btn-delete" onClick={() => onDelete(task.id)}>Delete</button>

        </div>
    )
}