import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* HEADER */}
      <header className="dashboard-header">

        <div className="dashboard-brand">
          <img
            src="/src/assets/rec-symbol.png"
            alt="REC"
            className="dashboard-logo"
          />

          <span>ACHIEVEMENT HUB</span>
        </div>

        <div className="dashboard-user">
          <span className="user-name">Student Name</span>

          <button
            className="profile-button"
            onClick={() => navigate('/student/profile')}
          >
            Profile
          </button>
        </div>

      </header>

      {/* MAIN CONTENT */}
      <main className="dashboard-content">

        <div className="dashboard-title-row">

          <div>
            <h1>Student Dashboard</h1>
            <p>Track and manage your achievements.</p>
          </div>

          <button
            className="add-achievement-button"
            onClick={() => navigate('/student/add-achievement')}
          >
            + Add Achievement
          </button>

        </div>

        {/* STATISTICS */}
        <section className="dashboard-stats">

          <div className="stat-box">
            <span className="stat-label">Total Achievements</span>
            <strong>0</strong>
          </div>

          <div className="stat-box">
            <span className="stat-label">Wins</span>
            <strong>0</strong>
          </div>

          <div className="stat-box">
            <span className="stat-label">Runner-up</span>
            <strong>0</strong>
          </div>

          <div className="stat-box">
            <span className="stat-label">Special Awards</span>
            <strong>0</strong>
          </div>

          <div className="stat-box">
            <span className="stat-label">Participation</span>
            <strong>0</strong>
          </div>

        </section>

        {/* RECENT ACHIEVEMENTS */}
        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <h2>Recent Achievements</h2>
              <p>Your latest achievement records.</p>
            </div>

            <button
              className="view-all-button"
              onClick={() => navigate('/student/achievements')}
            >
              View All
            </button>

          </div>

          <div className="empty-achievements">

            <div className="empty-icon">
              +
            </div>

            <h3>No achievements yet</h3>

            <p>
              Add your first achievement to start building
              your achievement record.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default StudentDashboard;