import { useNavigate } from 'react-router-dom';
import '../styles/staff-dashboard.css';

function StaffDashboard() {
  const navigate = useNavigate();

  return (
    <div className="staff-dashboard-page">

      {/* Header */}
      <header className="staff-dashboard-header">
        <div className="staff-dashboard-brand">
          <img
            src="/src/assets/rec-symbol.png"
            alt="REC"
            className="staff-dashboard-logo"
          />
          <span>ACHIEVEMENT HUB</span>
        </div>

        <div className="staff-dashboard-user">
          <span className="staff-user-name">Staff Name</span>

          <button
            className="staff-logout-button"
            onClick={() => navigate('/')}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="staff-dashboard-content">

        {/* Page Heading */}
        <div className="staff-dashboard-title">
          <div>
            <h1>Staff Dashboard</h1>
            <p>
              Monitor and explore student achievements across the college.
            </p>
          </div>
        </div>

        {/* Main Statistics */}
        <section className="staff-stats-grid">

          <div className="staff-stat-box">
            <span>Total Students</span>
            <strong>0</strong>
          </div>

          <div className="staff-stat-box">
            <span>Total Achievements</span>
            <strong>0</strong>
          </div>

          <div className="staff-stat-box">
            <span>Total Wins</span>
            <strong>0</strong>
          </div>

          <div className="staff-stat-box">
            <span>Special Awards</span>
            <strong>0</strong>
          </div>

          <div className="staff-stat-box">
            <span>Participation</span>
            <strong>0</strong>
          </div>

        </section>

        {/* Search and Filters */}
        <section className="staff-filter-section">

          <div className="staff-section-heading">
            <div>
              <h2>Student Achievements</h2>
              <p>Search and filter achievement records.</p>
            </div>
          </div>

          <div className="staff-filters">

            <div className="staff-search">
              <label>Search Student</label>
              <input
                type="text"
                placeholder="Search by student name or register number"
              />
            </div>

            <div className="staff-filter">
              <label>Department</label>
              <select defaultValue="">
                <option value="" disabled>
                  All Departments
                </option>
                <option>Information Technology</option>
                <option>Computer Science and Engineering</option>
                <option>Artificial Intelligence and Data Science</option>
                <option>Electronics and Communication Engineering</option>
                <option>Electrical and Electronics Engineering</option>
                <option>Mechanical Engineering</option>
                <option>Civil Engineering</option>
              </select>
            </div>

            <div className="staff-filter">
              <label>Achievement</label>
              <select defaultValue="">
                <option value="" disabled>
                  All Achievements
                </option>
                <option>1st Place</option>
                <option>2nd Place</option>
                <option>3rd Place</option>
                <option>Special Award</option>
                <option>Finalist</option>
                <option>Participation</option>
              </select>
            </div>

            <div className="staff-filter">
              <label>Level</label>
              <select defaultValue="">
                <option value="" disabled>
                  All Levels
                </option>
                <option>College</option>
                <option>Inter-College</option>
                <option>District</option>
                <option>State</option>
                <option>National</option>
                <option>International</option>
              </select>
            </div>

          </div>

        </section>

        {/* Achievement Table */}
        <section className="staff-records-section">

          <div className="staff-section-heading">
            <div>
              <h2>Achievement Records</h2>
              <p>Student achievement records will appear here.</p>
            </div>
          </div>

          <div className="staff-empty-state">

            <div className="staff-empty-icon">
              +
            </div>

            <h3>No achievement records</h3>

            <p>
              Achievement records submitted by students will
              appear here.
            </p>

          </div>

        </section>

        {/* Analytics */}
        <section className="staff-analytics-section">

          <div className="staff-section-heading">
            <div>
              <h2>Analytics</h2>
              <p>Overview of achievement trends across the college.</p>
            </div>
          </div>

          <div className="staff-analytics-grid">

            <div className="staff-chart-placeholder">
              <h3>Achievements by Department</h3>
              <div className="chart-area">
                No data available
              </div>
            </div>

            <div className="staff-chart-placeholder">
              <h3>Achievements by Category</h3>
              <div className="chart-area">
                No data available
              </div>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default StaffDashboard;