import { useNavigate } from 'react-router-dom';
import '../styles/staff-students.css';

function Students() {
  const navigate = useNavigate();

  return (
    <div className="staff-students-page">

      {/* Top Bar */}
      <header className="staff-students-topbar">
        <div>
          <h1>Students</h1>
          <p>View and manage student achievement records.</p>
        </div>

        <div className="staff-students-user">
          <div className="staff-user-avatar">S</div>

          <div>
            <strong>Staff Name</strong>
            <small>Staff</small>
          </div>

          <button onClick={() => navigate('/staff/profile')}>
            Profile
          </button>
        </div>
      </header>

      <main className="staff-students-content">

        {/* Summary */}
        <section className="students-summary">
          <div>
            <span>2026–27 ACADEMIC YEAR</span>
            <h2>Student Directory</h2>
            <p>
              Search and view student profiles, departments and achievement
              records.
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="students-stats">

          <div className="student-stat-card">
            <span>Total Students</span>
            <strong>0</strong>
            <small>Registered students</small>
          </div>

          <div className="student-stat-card">
            <span>Active Students</span>
            <strong>0</strong>
            <small>Currently active</small>
          </div>

          <div className="student-stat-card">
            <span>Students with Achievements</span>
            <strong>0</strong>
            <small>Students with records</small>
          </div>

          <div className="student-stat-card">
            <span>Departments</span>
            <strong>0</strong>
            <small>Active departments</small>
          </div>

        </section>

        {/* Student List Panel */}
        <section className="students-panel">

          <div className="students-panel-header">
            <div>
              <h3>All Students</h3>
              <p>Search and filter registered students.</p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="students-filters">

            <div className="student-search">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search by name or register number..."
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
                Year
              </option>
              <option>All Years</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>
                Section
              </option>
              <option>All Sections</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>

          </div>

          {/* Table */}
          <div className="students-table-wrapper">

            <table className="students-table">

              <thead>
                <tr>
                  <th>Student</th>
                  <th>Register Number</th>
                  <th>Department</th>
                  <th>Year</th>
                  <th>Achievements</th>
                  <th>Wins</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {/* Empty State */}
                <tr>
                  <td colSpan="7">

                    <div className="students-empty">

                      <div className="students-empty-icon">
                        ♙
                      </div>

                      <h4>No students available</h4>

                      <p>
                        Registered students will appear here once the
                        backend is connected.
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

export default Students;