
import { useNavigate } from 'react-router-dom';
import '../styles/student-profile.css';

function StudentProfile() {
  const navigate = useNavigate();

  return (
    <div className="student-profile-page">
      {/* HEADER */}
      <header className="student-profile-header">
        <div className="student-profile-brand">
          <img
            src="/src/assets/rec-symbol.png"
            alt="REC"
            className="student-profile-logo"
          />

          <span>ACHIEVEMENT HUB</span>
        </div>

        <button
          type="button"
          className="student-profile-back"
          onClick={() => navigate('/student/feed')}
        >
          ← Achievement Feed
        </button>
      </header>

      {/* CONTENT */}
      <main className="student-profile-content">
        <div className="student-profile-card">
          {/* PROFILE TOP */}
          <div className="student-profile-top">
            <div className="student-avatar">S</div>

            <div>
              <h1>Student Name</h1>
              <p>student@rajalakshmi.edu.in</p>
            </div>
          </div>

          {/* PERSONAL INFORMATION */}
          <section className="profile-details-section">
            <h2>Personal Information</h2>

            <div className="profile-details-grid">
              <div className="profile-detail">
                <span>Name</span>
                <strong>Not added</strong>
              </div>

              <div className="profile-detail">
                <span>College Mail ID</span>
                <strong>Not added</strong>
              </div>

              <div className="profile-detail">
                <span>Phone Number</span>
                <strong>Not added</strong>
              </div>

              <div className="profile-detail">
                <span>Register Number</span>
                <strong>Not added</strong>
              </div>

              <div className="profile-detail">
                <span>Department</span>
                <strong>Not added</strong>
              </div>

              <div className="profile-detail">
                <span>Year</span>
                <strong>Not added</strong>
              </div>
            </div>
          </section>

          {/* ACHIEVEMENT SUMMARY */}
          <section className="profile-achievement-section">
            <h2>Achievement Summary</h2>

            <div className="profile-achievement-stats">
              <div>
                <strong>0</strong>
                <span>Total</span>
              </div>

              <div>
                <strong>0</strong>
                <span>Wins</span>
              </div>

              <div>
                <strong>0</strong>
                <span>Special Awards</span>
              </div>

              <div>
                <strong>0</strong>
                <span>Participation</span>
              </div>
            </div>
          </section>

          {/* ACTIONS */}
          <div className="student-profile-actions">
            <button
              type="button"
              className="student-profile-back-bottom"
              onClick={() => navigate('/student/feed')}
            >
              Back to Achievement Feed
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentProfile;