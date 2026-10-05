import { useNavigate } from 'react-router-dom';
import '../styles/my-progress.css';

function MyProgress() {
  const navigate = useNavigate();

  return (
    <div className="progress-page">

      {/* TOP BAR */}
      <header className="progress-topbar">
        <div>
          <h1>My Progress</h1>
          <p>Track your achievement journey and growth.</p>
        </div>

        <div className="progress-user">
          <div className="progress-avatar">S</div>

          <div>
            <strong>Student Name</strong>
            <small>Student</small>
          </div>

          <button
            onClick={() => navigate('/student/profile')}
          >
            Profile
          </button>
        </div>
      </header>


      {/* CONTENT */}
      <main className="progress-content">

        {/* SUMMARY */}
        <section className="progress-summary">

          <div className="progress-title">
            <span>2026–27 ACADEMIC YEAR</span>
            <h2>Your Achievement Journey</h2>
            <p>
              A detailed view of your achievements, participation
              and performance throughout your college journey.
            </p>
          </div>

        </section>


        {/* STAT CARDS */}
        <section className="progress-stats">

          <div className="progress-stat-card">
            <span>Total Achievements</span>
            <strong>0</strong>
            <small>All recorded achievements</small>
          </div>

          <div className="progress-stat-card">
            <span>Total Wins</span>
            <strong>0</strong>
            <small>1st, 2nd & 3rd positions</small>
          </div>

          <div className="progress-stat-card">
            <span>Participation</span>
            <strong>0</strong>
            <small>Events participated</small>
          </div>

          <div className="progress-stat-card">
            <span>Special Awards</span>
            <strong>0</strong>
            <small>Special recognitions</small>
          </div>

        </section>


        {/* GRAPH ROW */}
        <section className="progress-grid">

          {/* ACHIEVEMENT TREND */}
          <div className="progress-panel large-panel">

            <div className="progress-panel-header">
              <div>
                <h3>Achievement Growth</h3>
                <p>Your achievement activity over time.</p>
              </div>

              <select defaultValue="year">
                <option value="year">This Year</option>
                <option value="all">All Years</option>
              </select>
            </div>

            <div className="progress-chart">

              <div className="chart-y">
                <span>10</span>
                <span>8</span>
                <span>6</span>
                <span>4</span>
                <span>2</span>
                <span>0</span>
              </div>

              <div className="chart-main">

                <div className="chart-grid-line one"></div>
                <div className="chart-grid-line two"></div>
                <div className="chart-grid-line three"></div>
                <div className="chart-grid-line four"></div>
                <div className="chart-grid-line five"></div>

                <div className="progress-empty">
                  <strong>0</strong>
                  <span>No achievement data yet</span>
                </div>

                <div className="chart-x">
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


          {/* POSITION BREAKDOWN */}
          <div className="progress-panel">

            <div className="progress-panel-header">
              <div>
                <h3>Performance Breakdown</h3>
                <p>Your achievement positions.</p>
              </div>
            </div>

            <div className="performance-list">

              <div>
                <span>1st Place</span>
                <strong>0</strong>
              </div>

              <div>
                <span>2nd Place</span>
                <strong>0</strong>
              </div>

              <div>
                <span>3rd Place</span>
                <strong>0</strong>
              </div>

              <div>
                <span>Special Award</span>
                <strong>0</strong>
              </div>

              <div>
                <span>Participation</span>
                <strong>0</strong>
              </div>

            </div>

          </div>

        </section>


        {/* SECOND GRAPH ROW */}
        <section className="progress-grid">

          {/* YEAR-WISE */}
          <div className="progress-panel">

            <div className="progress-panel-header">
              <div>
                <h3>Year-wise Progress</h3>
                <p>Your achievements across academic years.</p>
              </div>
            </div>

            <div className="year-progress">

              <div>
                <span>1st Year</span>
                <div className="progress-bar">
                  <i style={{ width: '0%' }}></i>
                </div>
                <strong>0</strong>
              </div>

              <div>
                <span>2nd Year</span>
                <div className="progress-bar">
                  <i style={{ width: '0%' }}></i>
                </div>
                <strong>0</strong>
              </div>

              <div>
                <span>3rd Year</span>
                <div className="progress-bar">
                  <i style={{ width: '0%' }}></i>
                </div>
                <strong>0</strong>
              </div>

              <div>
                <span>4th Year</span>
                <div className="progress-bar">
                  <i style={{ width: '0%' }}></i>
                </div>
                <strong>0</strong>
              </div>

            </div>

          </div>


          {/* CATEGORY */}
          <div className="progress-panel">

            <div className="progress-panel-header">
              <div>
                <h3>Achievement Categories</h3>
                <p>Where your achievements come from.</p>
              </div>
            </div>

            <div className="category-empty">
              <div>0</div>
              <span>No category data available yet</span>
            </div>

          </div>

        </section>


        {/* JOURNEY */}
        <section className="progress-panel journey-panel">

          <div className="progress-panel-header">
            <div>
              <h3>Achievement Journey</h3>
              <p>Your milestones throughout college.</p>
            </div>
          </div>

          <div className="journey">

            <div className="journey-item">
              <div className="journey-dot"></div>

              <div>
                <span>2026–27</span>
                <h4>Current Academic Year</h4>
                <p>Your latest achievements will appear here.</p>
              </div>
            </div>

            <div className="journey-line"></div>

            <div className="journey-item muted">
              <div className="journey-dot"></div>

              <div>
                <span>Future milestones</span>
                <h4>Keep building your journey</h4>
                <p>
                  Add achievements to create your complete
                  college achievement timeline.
                </p>
              </div>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default MyProgress;