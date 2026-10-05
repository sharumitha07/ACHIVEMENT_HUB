import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* Top Bar */}
      <header className="dashboard-topbar">

        <div className="dashboard-heading">
          <h1>Dashboard</h1>
          <p>Your activity journey at a glance.</p>
        </div>

        <div className="dashboard-user">
          <div className="user-avatar">
            S
          </div>

          <div className="user-info">
            <span>Student Name</span>
            <small>Student</small>
          </div>

          <button
            className="profile-button"
            onClick={() => navigate('/student/profile')}
          >
            Profile
          </button>
        </div>

      </header>


      {/* Main Dashboard */}
      <div className="dashboard-content">

        {/* Welcome Section */}
        <section className="dashboard-welcome">

          <div className="welcome-content">

            <span className="dashboard-year">
              2026–27 ACADEMIC YEAR
            </span>

            <h2>
              Good afternoon, <span>Student Name</span>
            </h2>

            <p>
              Track your achievements, participation and progress
              throughout your academic journey.
            </p>

          </div>

          <button
            className="add-achievement-button"
            onClick={() => navigate('/student/add-achievement')}
          >
            + Add Achievement
          </button>

        </section>


        {/* Statistics */}
        <section className="dashboard-stats">

          <div className="stat-card">
            <div className="stat-header">
              <span>Total Achievements</span>
              <div className="stat-icon">◆</div>
            </div>

            <h3>0</h3>

            <p>All recorded achievements</p>
          </div>


          <div className="stat-card">
            <div className="stat-header">
              <span>Wins</span>
              <div className="stat-icon">★</div>
            </div>

            <h3>0</h3>

            <p>1st, 2nd & 3rd positions</p>
          </div>


          <div className="stat-card">
            <div className="stat-header">
              <span>Special Awards</span>
              <div className="stat-icon">✦</div>
            </div>

            <h3>0</h3>

            <p>Special recognitions</p>
          </div>


          <div className="stat-card">
            <div className="stat-header">
              <span>Participation</span>
              <div className="stat-icon">◉</div>
            </div>

            <h3>0</h3>

            <p>Events participated</p>
          </div>

        </section>


        {/* Main Analytics */}
        <section className="dashboard-main-grid">

          {/* Activity Chart */}
          <div className="dashboard-panel activity-panel">

            <div className="panel-header">
              <div>
                <h3>Activity Overview</h3>
                <p>Your achievement activity during the academic year.</p>
              </div>

              <select className="panel-select" defaultValue="year">
                <option value="year">This Year</option>
                <option value="month">This Month</option>
              </select>
            </div>

            <div className="activity-chart">

              <div className="chart-y-axis">
                <span>10</span>
                <span>8</span>
                <span>6</span>
                <span>4</span>
                <span>2</span>
                <span>0</span>
              </div>

              <div className="chart-area">

                <div className="chart-line line-one"></div>
                <div className="chart-line line-two"></div>
                <div className="chart-line line-three"></div>
                <div className="chart-line line-four"></div>
                <div className="chart-line line-five"></div>

                <div className="chart-empty-message">
                  <span>0</span>
                  <p>No activity recorded yet</p>
                </div>

                <div className="chart-months">
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
          <div className="dashboard-panel distribution-panel">

            <div className="panel-header">
              <div>
                <h3>Achievement Distribution</h3>
                <p>Breakdown of your achievements.</p>
              </div>
            </div>

            <div className="distribution-body">

              <div className="donut-chart">
                <div className="donut-inner">
                  <strong>0</strong>
                  <span>Total</span>
                </div>
              </div>

              <div className="distribution-list">

                <div className="distribution-item">
                  <span>
                    <i className="legend first"></i>
                    1st Place
                  </span>
                  <strong>0</strong>
                </div>

                <div className="distribution-item">
                  <span>
                    <i className="legend second"></i>
                    2nd Place
                  </span>
                  <strong>0</strong>
                </div>

                <div className="distribution-item">
                  <span>
                    <i className="legend third"></i>
                    3rd Place
                  </span>
                  <strong>0</strong>
                </div>

                <div className="distribution-item">
                  <span>
                    <i className="legend special"></i>
                    Special Award
                  </span>
                  <strong>0</strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* Bottom Section */}
        <section className="dashboard-bottom-grid">

          {/* Recent Achievements */}
          <div className="dashboard-panel recent-panel">

            <div className="panel-header">

              <div>
                <h3>Recent Achievements</h3>
                <p>Your latest achievement records.</p>
              </div>

              <button
                className="view-all-button"
                onClick={() => navigate('/student/achievements')}
              >
                View All
              </button>

            </div>


            <div className="empty-state">

              <div className="empty-icon">
                +
              </div>

              <h4>No achievements yet</h4>

              <p>
                Your recent achievements will appear here.
              </p>

            </div>

          </div>


          {/* Quick Actions */}
          <div className="dashboard-panel quick-panel">

            <div className="panel-header">

              <div>
                <h3>Quick Actions</h3>
                <p>Manage your achievement records.</p>
              </div>

            </div>


            <div className="quick-actions">

              <button
                onClick={() => navigate('/student/add-achievement')}
              >
                <span>＋</span>
                <div>
                  <strong>Add Achievement</strong>
                  <small>Record a new achievement</small>
                </div>
              </button>


              <button
                onClick={() => navigate('/student/achievements')}
              >
                <span>▣</span>
                <div>
                  <strong>My Achievements</strong>
                  <small>View all your records</small>
                </div>
              </button>


              <button
                onClick={() => navigate('/student/profile')}
              >
                <span>♙</span>
                <div>
                  <strong>My Profile</strong>
                  <small>View your student profile</small>
                </div>
              </button>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
}

export default StudentDashboard;