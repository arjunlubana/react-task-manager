import AddTask from './AddTask'
import PendingTasks from './pendingTasks'
import CompletedTasks from './completedTasks'
import { useState } from 'react'

export default function TasksManager() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Wash Dishes",
            description: "Make them clean",
            completed: false,
            date: new Date(2010, 11, 10).toDateString()
        },
        {
            id: 2,
            title: "Wash Clothes",
            description: "Make them clean",
            completed: false,
            date: new Date(2010, 11, 10).toDateString()
        },
        {
            id: 3,
            title: "Wash Face",
            description: "Make them clean",
            completed: false,
            date: new Date(2010, 11, 10).toDateString()
        }
    ])

    const [completedTasks, setCompletedTasks] = useState([
    ])


    const addTask = (task) => {

        setTasks(
            [task, ...tasks]
        )
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const completeTask = (id) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                task = { ...task, completed: !task.completed }
                setCompletedTasks([...completedTasks].concat(task))
                return task
            } else {
                return task
            }
        }))
        setTimeout(() => setTasks(tasks.filter((task) => task.id !== id)), 250)
    }

    const deleteCompleted = (id) => {
        setCompletedTasks(completedTasks.filter((task) => task.id !== id))
    }

    const inComplete = (id) => {
        setCompletedTasks(completedTasks.map((task) => {
            if (task.id === id) {
                task = { ...task, completed: !task.completed }
                setTasks([...tasks].concat(task))
                return task
            } else {
                return task
            }
        }))
        setTimeout(() => setCompletedTasks(completedTasks.filter((task) => task.id !== id)), 250)
    }

    return (
        <div>
            <AddTask onSubmit={addTask} />
            <PendingTasks tasks={tasks} onDelete={deleteTask} onComplete={completeTask}/>
            <CompletedTasks tasks={completedTasks} onDelete={deleteCompleted} onComplete={inComplete} />

        </div>
    )
}