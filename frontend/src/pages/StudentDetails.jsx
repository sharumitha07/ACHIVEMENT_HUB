import { useNavigate, useParams } from 'react-router-dom';
import '../styles/student-details.css';

function StudentDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="student-details-page">

      {/* Header */}
      <header className="student-details-header">
        <div className="student-details-brand">
          <img
            src="/src/assets/rec-symbol.png"
            alt="REC"
            className="student-details-logo"
          />
          <span>ACHIEVEMENT HUB</span>
        </div>

        <button
          className="student-details-back"
          onClick={() => navigate('/staff/dashboard')}
        >
          ← Staff Dashboard
        </button>
      </header>

      {/* Main Content */}
      <main className="student-details-content">

        {/* Student Profile Header */}
        <section className="student-details-profile">

          <div className="student-details-avatar">
            S
          </div>

          <div className="student-details-name">
            <h1>Student Name</h1>
            <p>student@rajalakshmi.edu.in</p>
            <span>Student ID: {id}</span>
          </div>

        </section>

        {/* Personal Information */}
        <section className="student-details-section">

          <div className="student-details-section-heading">
            <h2>Personal Information</h2>
          </div>

          <div className="student-info-grid">

            <div className="student-info-item">
              <span>Name</span>
              <strong>Student Name</strong>
            </div>

            <div className="student-info-item">
              <span>Register Number</span>
              <strong>Not available</strong>
            </div>

            <div className="student-info-item">
              <span>Department</span>
              <strong>Information Technology</strong>
            </div>

            <div className="student-info-item">
              <span>Year</span>
              <strong>2nd Year</strong>
            </div>

            <div className="student-info-item">
              <span>Section</span>
              <strong>A</strong>
            </div>

            <div className="student-info-item">
              <span>College Mail ID</span>
              <strong>student@rajalakshmi.edu.in</strong>
            </div>

          </div>

        </section>

        {/* Achievement Statistics */}
        <section className="student-details-section">

          <div className="student-details-section-heading">
            <h2>Achievement Summary</h2>
          </div>

          <div className="student-achievement-stats">

            <div className="student-achievement-stat">
              <span>Total Achievements</span>
              <strong>0</strong>
            </div>

            <div className="student-achievement-stat">
              <span>Wins</span>
              <strong>0</strong>
            </div>

            <div className="student-achievement-stat">
              <span>Runner-up</span>
              <strong>0</strong>
            </div>

            <div className="student-achievement-stat">
              <span>Special Awards</span>
              <strong>0</strong>
            </div>

            <div className="student-achievement-stat">
              <span>Participation</span>
              <strong>0</strong>
            </div>

          </div>

        </section>

        {/* Achievement Records */}
        <section className="student-details-section">

          <div className="student-details-section-heading">
            <div>
              <h2>Achievement Records</h2>
              <p>All achievements submitted by this student.</p>
            </div>
          </div>

          <div className="student-details-empty">

            <div className="student-details-empty-icon">
              +
            </div>

            <h3>No achievement records</h3>

            <p>
              Achievement records submitted by this student
              will appear here.
            </p>

          </div>

        </section>

      </main>
    </div>
  );
}

export default StudentDetails;