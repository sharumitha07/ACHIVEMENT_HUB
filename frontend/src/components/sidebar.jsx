import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <aside className="app-sidebar">

      {/* Brand */}
      <div className="sidebar-brand">
        <img
          src="/src/assets/rec-symbol.png"
          alt="REC"
          className="sidebar-logo"
        />

        <div className="sidebar-brand-text">
          <h2>ACHIEVEMENT HUB</h2>
          <span>RAJALAKSHMI ENGINEERING COLLEGE</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="sidebar-menu">

        <p className="sidebar-menu-title">
          MENU
        </p>

        {/* Dashboard */}
        <NavLink
          to="/student/dashboard"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="sidebar-icon">▦</span>
          <span>Dashboard</span>
        </NavLink>

        {/* My Achievements */}
        <NavLink
          to="/student/achievements"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="sidebar-icon">▣</span>
          <span>My Achievements</span>
        </NavLink>

        {/* Add Achievement */}
        <NavLink
          to="/student/add-achievement"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="sidebar-icon">＋</span>
          <span>Add Achievement</span>
        </NavLink>

        {/* My Progress */}
        <NavLink
          to="/student/progress"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="sidebar-icon">↗</span>
          <span>My Progress</span>
        </NavLink>

        {/* Achievement Feed */}
        <NavLink
          to="/student/feed"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="sidebar-icon">◉</span>
          <span>Achievement Feed</span>
        </NavLink>

        {/* Profile */}
        <NavLink
          to="/student/profile"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="sidebar-icon">♙</span>
          <span>Profile</span>
        </NavLink>

      </div>

      {/* Bottom Navigation */}
      <div className="sidebar-bottom">

        {/* Settings */}
        <button
          className="sidebar-bottom-link"
          type="button"
        >
          <span className="sidebar-icon">⚙</span>
          <span>Settings</span>
        </button>

        {/* Logout */}
        <button
          className="sidebar-bottom-link"
          type="button"
          onClick={handleLogout}
        >
          <span className="sidebar-icon">⇥</span>
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;