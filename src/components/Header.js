import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>Task Manager</h1>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/pending">Pending Tasks</Link>
          </li>
          <li className="nav-item">
            <Link to="/complete">Complete Tasks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
