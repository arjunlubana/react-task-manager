export default function Layout({ children }) {
    return (
        <div>
            <header className="header">
                <h1>Task Manager</h1>
                <nav className="nav-container">
                    <ul className="nav-list">
                        <li className="nav-item"><button>Pending</button></li>
                        <li className="nav-item"><button>Completed</button></li>
                    </ul>
                </nav>
            </header>
            <main className="main-container">
                {children}
            </main>
        </div>
    )
}