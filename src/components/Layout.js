export default function Layout({ children }) {

    const showCompleted = () => {

    }

    const showPending = () => {

    }
    
    return (
        <div>
            <header className="header">
                <h1>Task Manager</h1>
                <nav className="nav-container">
                    <ul className="nav-list">
                        <li className="nav-item"><button onClick={showPending}>Pending</button></li>
                        <li className="nav-item"><button onClick={showCompleted}>Completed</button></li>
                    </ul>
                </nav>
            </header>
            <main className="main-container">
                {children}
            </main>
        </div>
    )
}