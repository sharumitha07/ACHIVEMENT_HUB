import { useNavigate } from 'react-router-dom';
import '../styles/achievements.css';

function MyAchievements() {
  const navigate = useNavigate();

  return (
    <div className="achievements-page">

      {/* HEADER */}
      <header className="achievements-header">

        <div className="achievements-brand">
          <img
            src="/src/assets/rec-symbol.png"
            alt="REC"
            className="achievements-logo"
          />

          <span>ACHIEVEMENT HUB</span>
        </div>

        <button
          className="achievements-back-button"
          onClick={() => navigate('/student/dashboard')}
        >
          ← Dashboard
        </button>

      </header>


      {/* CONTENT */}
      <main className="achievements-content">

        <div className="achievements-title-row">

          <div>
            <h1>My Achievements</h1>

            <p>
              View and manage your achievement records.
            </p>
          </div>

          <button
            className="achievements-add-button"
            onClick={() => navigate('/student/add-achievement')}
          >
            + Add Achievement
          </button>

        </div>


        {/* SUMMARY */}
        <div className="achievement-summary">

          <div className="summary-item">
            <span>Total</span>
            <strong>0</strong>
          </div>

          <div className="summary-item">
            <span>Wins</span>
            <strong>0</strong>
          </div>

          <div className="summary-item">
            <span>Special Awards</span>
            <strong>0</strong>
          </div>

          <div className="summary-item">
            <span>Participation</span>
            <strong>0</strong>
          </div>

        </div>


        {/* ACHIEVEMENT LIST */}
        <section className="achievement-list-section">

          <div className="achievement-list-header">
            <h2>Achievement Records</h2>
          </div>


          <div className="achievements-empty">

            <div className="achievements-empty-icon">
              +
            </div>

            <h3>No achievement records</h3>

            <p>
              Your submitted achievements will appear here.
            </p>

            <button
              className="achievements-empty-button"
              onClick={() => navigate('/student/add-achievement')}
            >
              Add Your First Achievement
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default MyAchievements;