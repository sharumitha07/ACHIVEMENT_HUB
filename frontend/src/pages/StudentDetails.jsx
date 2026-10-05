import { useNavigate, useParams } from 'react-router-dom';
import '../styles/student-details.css';

function StudentDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="student-details-page">

      {/* Top Bar */}
      <header className="student-details-topbar">

        <div>
          <h1>Student Details</h1>
          <p>View student information and achievement history.</p>
        </div>

        <button
          className="student-details-back"
          onClick={() => navigate('/staff/students')}
        >
          ← Back to Students
        </button>

      </header>

      <main className="student-details-content">

        {/* Student Header */}
        <section className="student-details-profile">

          <div className="student-details-avatar">
            S
          </div>

          <div className="student-details-name">
            <span>STUDENT PROFILE</span>
            <h2>Student Name</h2>
            <p>student@rajalakshmi.edu.in</p>
            <small>Student ID: {id}</small>
          </div>

        </section>

        {/* Personal Information */}
        <section className="student-details-section">

          <div className="student-details-section-heading">
            <h3>Personal Information</h3>
            <p>Basic information registered by the student.</p>
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

        {/* Achievement Summary */}
        <section className="student-details-section">

          <div className="student-details-section-heading">
            <h3>Achievement Summary</h3>
            <p>Overview of the student's achievement activity.</p>
          </div>

          <div className="student-achievement-stats">

            <div className="student-achievement-stat">
              <span>Total Achievements</span>
              <strong>0</strong>
            </div>

            <div className="student-achievement-stat">
              <span>1st Place</span>
              <strong>0</strong>
            </div>

            <div className="student-achievement-stat">
              <span>2nd Place</span>
              <strong>0</strong>
            </div>

            <div className="student-achievement-stat">
              <span>3rd Place</span>
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
              <h3>Achievement Records</h3>
              <p>
                All achievements submitted by this student.
              </p>
            </div>

            <button
              className="student-achievement-filter"
              type="button"
            >
              Filter
            </button>
          </div>

          <div className="student-achievement-table-wrapper">

            <table className="student-achievement-table">

              <thead>
                <tr>
                  <th>Event</th>
                  <th>Category</th>
                  <th>Achievement</th>
                  <th>Level</th>
                  <th>Academic Year</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td colSpan="5">

                    <div className="student-details-empty">

                      <div className="student-details-empty-icon">
                        ◆
                      </div>

                      <h4>No achievement records</h4>

                      <p>
                        Achievement records submitted by this student
                        will appear here once the backend is connected.
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

export default StudentDetails;