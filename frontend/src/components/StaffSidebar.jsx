import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/staff-sidebar.css';

function StaffSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <aside className="staff-sidebar">

      {/* Brand */}
      <div className="staff-sidebar-brand">
        <img
          src="/src/assets/rec-symbol.png"
          alt="REC"
          className="staff-sidebar-logo"
        />

        <div className="staff-sidebar-brand-text">
          <h2>ACHIEVEMENT HUB</h2>
          <span>RAJALAKSHMI ENGINEERING COLLEGE</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="staff-sidebar-menu">

        <p className="staff-sidebar-menu-title">
          MENU
        </p>

        <NavLink
          to="/staff/dashboard"
          className={({ isActive }) =>
            `staff-sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="staff-sidebar-icon">▦</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/staff/students"
          className={({ isActive }) =>
            `staff-sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="staff-sidebar-icon">♙</span>
          <span>Students</span>
        </NavLink>

        <NavLink
          to="/staff/achievements"
          className={({ isActive }) =>
            `staff-sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="staff-sidebar-icon">▣</span>
          <span>Achievements</span>
        </NavLink>

        <NavLink
          to="/staff/analytics"
          className={({ isActive }) =>
            `staff-sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="staff-sidebar-icon">▥</span>
          <span>Analytics</span>
        </NavLink>

      </div>

      {/* Bottom */}
      <div className="staff-sidebar-bottom">

        <button
          className="staff-sidebar-bottom-link"
          type="button"
        >
          <span className="staff-sidebar-icon">⚙</span>
          <span>Settings</span>
        </button>

        <button
          className="staff-sidebar-bottom-link"
          type="button"
          onClick={handleLogout}
        >
          <span className="staff-sidebar-icon">⇥</span>
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default StaffSidebar;