import { useNavigate } from 'react-router-dom';
import '../styles/staff-achievements.css';

function StaffAchievements() {
  const navigate = useNavigate();

  return (
    <div className="staff-achievements-page">

      {/* Top Bar */}
      <header className="staff-achievements-topbar">
        <div>
          <h1>Achievements</h1>
          <p>View and manage student achievement records.</p>
        </div>

        <div className="staff-achievements-user">
          <div className="staff-achievement-avatar">S</div>

          <div>
            <strong>Staff Name</strong>
            <small>Staff</small>
          </div>

          <button onClick={() => navigate('/staff/profile')}>
            Profile
          </button>
        </div>
      </header>

      <main className="staff-achievements-content">

        {/* Summary */}
        <section className="achievements-summary">
          <div>
            <span>2026–27 ACADEMIC YEAR</span>
            <h2>Achievement Records</h2>
            <p>
              Search, filter and review achievements submitted by students.
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="achievements-stats">

          <div className="achievement-stat-card">
            <span>Total Achievements</span>
            <strong>0</strong>
            <small>All submitted records</small>
          </div>

          <div className="achievement-stat-card">
            <span>Wins</span>
            <strong>0</strong>
            <small>1st, 2nd & 3rd positions</small>
          </div>

          <div className="achievement-stat-card">
            <span>Special Awards</span>
            <strong>0</strong>
            <small>Special recognitions</small>
          </div>

          <div className="achievement-stat-card">
            <span>Participation</span>
            <strong>0</strong>
            <small>Participation records</small>
          </div>

        </section>

        {/* Achievement Records */}
        <section className="staff-achievements-panel">

          <div className="staff-achievements-panel-header">
            <div>
              <h3>All Achievement Records</h3>
              <p>
                Search and filter student achievements.
              </p>
            </div>
          </div>

          {/* Search + Filters */}
          <div className="achievement-filters">

            <div className="achievement-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search student, event or project..."
              />
            </div>

            <select defaultValue="">
              <option value="" disabled>
                Department
              </option>
              <option>All Departments</option>
              <option>Information Technology</option>
              <option>Computer Science and Engineering</option>
              <option>Artificial Intelligence and Data Science</option>
              <option>Electronics and Communication Engineering</option>
              <option>Electrical and Electronics Engineering</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>
                Category
              </option>
              <option>All Categories</option>
              <option>Hackathon</option>
              <option>Technical Event</option>
              <option>Paper Presentation</option>
              <option>Project Competition</option>
              <option>Sports</option>
              <option>Cultural</option>
              <option>Other</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>
                Achievement
              </option>
              <option>All Achievements</option>
              <option>1st Place</option>
              <option>2nd Place</option>
              <option>3rd Place</option>
              <option>Special Award</option>
              <option>Participation</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>
                Academic Year
              </option>
              <option>All Years</option>
              <option>2026–27</option>
              <option>2025–26</option>
              <option>2024–25</option>
              <option>2023–24</option>
            </select>

          </div>

          {/* Table */}
          <div className="staff-achievements-table-wrapper">

            <table className="staff-achievements-table">

              <thead>
                <tr>
                  <th>Student</th>
                  <th>Event</th>
                  <th>Category</th>
                  <th>Achievement</th>
                  <th>Department</th>
                  <th>Year</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td colSpan="7">

                    <div className="achievements-empty">

                      <div className="achievements-empty-icon">
                        ◆
                      </div>

                      <h4>No achievement records</h4>

                      <p>
                        Student achievement records will appear here once
                        the backend is connected.
                      </p>

                    </div>

                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </section>

      </main>

    </div>
  );
}

export default StaffAchievements;