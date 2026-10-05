import { useNavigate } from 'react-router-dom';
import '../styles/staff-dashboard.css';

function StaffDashboard() {
  const navigate = useNavigate();

  return (
    <div className="staff-dashboard-page">

      {/* Top Bar */}
      <header className="staff-topbar">
        <div className="staff-heading">
          <h1>Staff Dashboard</h1>
          <p>College achievement overview and insights.</p>
        </div>

        <div className="staff-user">
          <div className="staff-avatar">S</div>

          <div className="staff-user-info">
            <span>Staff Name</span>
            <small>Staff</small>
          </div>

          <button
            className="staff-profile-button"
            onClick={() => navigate('/staff/profile')}
          >
            Profile
          </button>
        </div>
      </header>


      <main className="staff-dashboard-content">

        {/* Overview Header */}
        <section className="staff-overview">
          <div>
            <span className="staff-year">
              2026–27 ACADEMIC YEAR
            </span>

            <h2>College Achievement Overview</h2>

            <p>
              Monitor student achievements, recognitions and
              participation across the college.
            </p>
          </div>
        </section>


        {/* Statistics */}
        <section className="staff-stats">

          <div className="staff-stat-card">
            <div className="staff-stat-header">
              <span>Total Students</span>
              <div className="staff-stat-icon">♙</div>
            </div>

            <h3>0</h3>

            <p>Registered students</p>
          </div>


          <div className="staff-stat-card">
            <div className="staff-stat-header">
              <span>Total Achievements</span>
              <div className="staff-stat-icon">◆</div>
            </div>

            <h3>0</h3>

            <p>Recorded achievements</p>
          </div>


          <div className="staff-stat-card">
            <div className="staff-stat-header">
              <span>Total Wins</span>
              <div className="staff-stat-icon">★</div>
            </div>

            <h3>0</h3>

            <p>1st, 2nd & 3rd positions</p>
          </div>


          <div className="staff-stat-card">
            <div className="staff-stat-header">
              <span>Special Awards</span>
              <div className="staff-stat-icon">✦</div>
            </div>

            <h3>0</h3>

            <p>Special recognitions</p>
          </div>

        </section>


        {/* Main Analytics */}
        <section className="staff-main-grid">

          {/* Achievement Trends */}
          <div className="staff-panel staff-trend-panel">

            <div className="staff-panel-header">
              <div>
                <h3>Achievement Trends</h3>

                <p>
                  Achievement activity during the academic year.
                </p>
              </div>

              <select defaultValue="year">
                <option value="year">This Year</option>
                <option value="all">All Years</option>
              </select>
            </div>


            <div className="staff-chart">

              <div className="staff-chart-y">
                <span>50</span>
                <span>40</span>
                <span>30</span>
                <span>20</span>
                <span>10</span>
                <span>0</span>
              </div>


              <div className="staff-chart-area">

                <div className="staff-grid-line one"></div>
                <div className="staff-grid-line two"></div>
                <div className="staff-grid-line three"></div>
                <div className="staff-grid-line four"></div>
                <div className="staff-grid-line five"></div>

                <div className="staff-chart-empty">
                  <strong>0</strong>
                  <span>No achievement data yet</span>
                </div>


                <div className="staff-chart-months">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>

              </div>

            </div>

          </div>


          {/* Achievement Distribution */}
          <div className="staff-panel staff-distribution-panel">

            <div className="staff-panel-header">
              <div>
                <h3>Achievement Distribution</h3>

                <p>
                  Overall achievement positions.
                </p>
              </div>
            </div>


            <div className="staff-distribution-body">

              <div className="staff-donut">
                <div className="staff-donut-inner">
                  <strong>0</strong>
                  <span>Total</span>
                </div>
              </div>


              <div className="staff-distribution-list">

                <div>
                  <span>
                    <i className="staff-legend first"></i>
                    1st Place
                  </span>
                  <strong>0</strong>
                </div>

                <div>
                  <span>
                    <i className="staff-legend second"></i>
                    2nd Place
                  </span>
                  <strong>0</strong>
                </div>

                <div>
                  <span>
                    <i className="staff-legend third"></i>
                    3rd Place
                  </span>
                  <strong>0</strong>
                </div>

                <div>
                  <span>
                    <i className="staff-legend special"></i>
                    Special Award
                  </span>
                  <strong>0</strong>
                </div>

                <div>
                  <span>
                    <i className="staff-legend participation"></i>
                    Participation
                  </span>
                  <strong>0</strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* Department Overview */}
        <section className="staff-panel staff-department-panel">

          <div className="staff-panel-header">

            <div>
              <h3>Department Overview</h3>

              <p>
                Achievement activity across departments.
              </p>
            </div>

            <button
              className="staff-view-button"
              onClick={() => navigate('/staff/analytics')}
            >
              View Analytics
            </button>

          </div>


          <div className="staff-department-grid">

            <div className="department-card">
              <span>Information Technology</span>
              <strong>0</strong>
              <small>Achievements</small>
            </div>

            <div className="department-card">
              <span>Computer Science & Engineering</span>
              <strong>0</strong>
              <small>Achievements</small>
            </div>

            <div className="department-card">
              <span>AI & Data Science</span>
              <strong>0</strong>
              <small>Achievements</small>
            </div>

            <div className="department-card">
              <span>Electronics & Communication</span>
              <strong>0</strong>
              <small>Achievements</small>
            </div>

          </div>

        </section>


        {/* Recent Achievements */}
        <section className="staff-panel staff-recent-panel">

          <div className="staff-panel-header">

            <div>
              <h3>Recent Achievements</h3>

              <p>
                Latest achievement records submitted by students.
              </p>
            </div>

            <button
              className="staff-view-button"
              onClick={() => navigate('/staff/achievements')}
            >
              View All
            </button>

          </div>


          <div className="staff-empty-state">

            <div className="staff-empty-icon">◆</div>

            <h4>No achievements recorded yet</h4>

            <p>
              Student achievement records will appear here once
              they are submitted.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default StaffDashboard;