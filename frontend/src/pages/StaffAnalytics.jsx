import { useNavigate } from 'react-router-dom';
import '../styles/staff-analytics.css';

function StaffAnalytics() {
  const navigate = useNavigate();

  return (
    <div className="staff-analytics-page">

      {/* Top Bar */}
      <header className="staff-analytics-topbar">
        <div>
          <h1>Analytics</h1>
          <p>Understand achievement trends across the college.</p>
        </div>

        <div className="staff-analytics-user">
          <div className="staff-analytics-avatar">S</div>

          <div>
            <strong>Staff Name</strong>
            <small>Staff</small>
          </div>

          <button onClick={() => navigate('/staff/profile')}>
            Profile
          </button>
        </div>
      </header>

      <main className="staff-analytics-content">

        {/* Overview */}
        <section className="analytics-summary">
          <div>
            <span>2026–27 ACADEMIC YEAR</span>
            <h2>Achievement Analytics</h2>
            <p>
              Analyse student achievements by department, category,
              position and academic year.
            </p>
          </div>

          <select defaultValue="2026-27">
            <option value="2026-27">2026–27</option>
            <option value="2025-26">2025–26</option>
            <option value="2024-25">2024–25</option>
          </select>
        </section>

        {/* Main Statistics */}
        <section className="analytics-stats">

          <div className="analytics-stat-card">
            <span>Total Students</span>
            <strong>0</strong>
            <small>Registered students</small>
          </div>

          <div className="analytics-stat-card">
            <span>Total Achievements</span>
            <strong>0</strong>
            <small>Recorded achievements</small>
          </div>

          <div className="analytics-stat-card">
            <span>Total Wins</span>
            <strong>0</strong>
            <small>1st, 2nd & 3rd positions</small>
          </div>

          <div className="analytics-stat-card">
            <span>Special Awards</span>
            <strong>0</strong>
            <small>Special recognitions</small>
          </div>

        </section>

        {/* Trends + Distribution */}
        <section className="analytics-grid">

          {/* Achievement Trends */}
          <div className="analytics-panel analytics-large-panel">

            <div className="analytics-panel-header">
              <div>
                <h3>Achievement Trends</h3>
                <p>Achievement activity throughout the academic year.</p>
              </div>

              <select defaultValue="year">
                <option value="year">This Year</option>
                <option value="all">All Years</option>
              </select>
            </div>

            <div className="analytics-chart">

              <div className="analytics-y-axis">
                <span>10</span>
                <span>8</span>
                <span>6</span>
                <span>4</span>
                <span>2</span>
                <span>0</span>
              </div>

              <div className="analytics-chart-area">

                <div className="analytics-grid-line line-1"></div>
                <div className="analytics-grid-line line-2"></div>
                <div className="analytics-grid-line line-3"></div>
                <div className="analytics-grid-line line-4"></div>
                <div className="analytics-grid-line line-5"></div>

                <div className="analytics-chart-empty">
                  <strong>0</strong>
                  <span>No achievement data available</span>
                </div>

                <div className="analytics-months">
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
          <div className="analytics-panel">

            <div className="analytics-panel-header">
              <div>
                <h3>Achievement Distribution</h3>
                <p>Breakdown by achievement type.</p>
              </div>
            </div>

            <div className="analytics-distribution">

              <div className="analytics-donut">
                <div>
                  <strong>0</strong>
                  <span>Total</span>
                </div>
              </div>

              <div className="analytics-legend">

                <div>
                  <span>
                    <i className="legend-dot first"></i>
                    1st Place
                  </span>
                  <strong>0</strong>
                </div>

                <div>
                  <span>
                    <i className="legend-dot second"></i>
                    2nd Place
                  </span>
                  <strong>0</strong>
                </div>

                <div>
                  <span>
                    <i className="legend-dot third"></i>
                    3rd Place
                  </span>
                  <strong>0</strong>
                </div>

                <div>
                  <span>
                    <i className="legend-dot special"></i>
                    Special Award
                  </span>
                  <strong>0</strong>
                </div>

                <div>
                  <span>
                    <i className="legend-dot participation"></i>
                    Participation
                  </span>
                  <strong>0</strong>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Department Analytics */}
        <section className="analytics-panel department-panel">

          <div className="analytics-panel-header">
            <div>
              <h3>Department Performance</h3>
              <p>Achievement activity across departments.</p>
            </div>
          </div>

          <div className="department-table-wrapper">

            <table className="department-table">

              <thead>
                <tr>
                  <th>Department</th>
                  <th>Students</th>
                  <th>Achievements</th>
                  <th>Wins</th>
                  <th>Special Awards</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Information Technology</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>

                <tr>
                  <td>Computer Science and Engineering</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>

                <tr>
                  <td>Artificial Intelligence and Data Science</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>

                <tr>
                  <td>Electronics and Communication Engineering</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>

              </tbody>

            </table>

          </div>

        </section>

        {/* Category Overview */}
        <section className="analytics-grid analytics-bottom-grid">

          <div className="analytics-panel">

            <div className="analytics-panel-header">
              <div>
                <h3>Achievement Categories</h3>
                <p>Most common achievement categories.</p>
              </div>
            </div>

            <div className="category-bars">

              <div className="category-row">
                <div>
                  <span>Hackathons</span>
                  <strong>0</strong>
                </div>
                <div className="category-bar">
                  <i style={{ width: '0%' }}></i>
                </div>
              </div>

              <div className="category-row">
                <div>
                  <span>Technical Events</span>
                  <strong>0</strong>
                </div>
                <div className="category-bar">
                  <i style={{ width: '0%' }}></i>
                </div>
              </div>

              <div className="category-row">
                <div>
                  <span>Paper Presentations</span>
                  <strong>0</strong>
                </div>
                <div className="category-bar">
                  <i style={{ width: '0%' }}></i>
                </div>
              </div>

              <div className="category-row">
                <div>
                  <span>Sports</span>
                  <strong>0</strong>
                </div>
                <div className="category-bar">
                  <i style={{ width: '0%' }}></i>
                </div>
              </div>

              <div className="category-row">
                <div>
                  <span>Cultural</span>
                  <strong>0</strong>
                </div>
                <div className="category-bar">
                  <i style={{ width: '0%' }}></i>
                </div>
              </div>

            </div>

          </div>

          <div className="analytics-panel">

            <div className="analytics-panel-header">
              <div>
                <h3>Quick Insights</h3>
                <p>Important statistics at a glance.</p>
              </div>
            </div>

            <div className="quick-insights">

              <div>
                <span>Top Department</span>
                <strong>—</strong>
                <small>No data available yet</small>
              </div>

              <div>
                <span>Top Category</span>
                <strong>—</strong>
                <small>No data available yet</small>
              </div>

              <div>
                <span>Highest Achievement</span>
                <strong>—</strong>
                <small>No data available yet</small>
              </div>

              <div>
                <span>Active Academic Year</span>
                <strong>2026–27</strong>
                <small>Current academic year</small>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default StaffAnalytics;