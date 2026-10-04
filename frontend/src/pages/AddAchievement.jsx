import { useNavigate } from 'react-router-dom';
import '../styles/forms.css';

function AddAchievement() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend connection will be added later.
    navigate('/student/achievements');
  };

  return (
    <div className="achievement-page">

      {/* HEADER */}
      <header className="achievement-header">

        <div className="achievement-brand">
          <img
            src="/src/assets/rec-symbol.png"
            alt="REC"
            className="achievement-logo"
          />

          <span>ACHIEVEMENT HUB</span>
        </div>

        <button
          className="back-button"
          onClick={() => navigate('/student/dashboard')}
        >
          ← Dashboard
        </button>

      </header>

      {/* CONTENT */}
      <main className="achievement-content">

        <div className="achievement-form-card">

          <div className="form-heading">
            <h1>Add Achievement</h1>
            <p>
              Add details about your event, achievement and participation.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* EVENT DETAILS */}
            <div className="form-section">

              <h2>Event Details</h2>

              <div className="form-field">
                <label>Event Name</label>
                <input
                  type="text"
                  placeholder="Enter event name"
                  required
                />
              </div>

              <div className="form-grid">

                <div className="form-field">
                  <label>Event Type</label>

                  <select defaultValue="" required>
                    <option value="" disabled>
                      Select event type
                    </option>

                    <option>Hackathon</option>
                    <option>Technical Competition</option>
                    <option>Paper Presentation</option>
                    <option>Project Competition</option>
                    <option>Workshop</option>
                    <option>Symposium</option>
                    <option>Sports</option>
                    <option>Cultural Event</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Level</label>

                  <select defaultValue="" required>
                    <option value="" disabled>
                      Select level
                    </option>

                    <option>College</option>
                    <option>Inter-College</option>
                    <option>District</option>
                    <option>State</option>
                    <option>National</option>
                    <option>International</option>
                  </select>
                </div>

              </div>

              <div className="form-grid">

                <div className="form-field">
                  <label>Mode</label>

                  <select defaultValue="" required>
                    <option value="" disabled>
                      Select mode
                    </option>

                    <option>Online</option>
                    <option>Offline</option>
                    <option>Hybrid</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Event Date</label>

                  <input
                    type="date"
                    required
                  />
                </div>

              </div>

            </div>


            {/* ACHIEVEMENT DETAILS */}
            <div className="form-section">

              <h2>Achievement Details</h2>

              <div className="form-grid">

                <div className="form-field">
                  <label>Achievement</label>

                  <select defaultValue="" required>
                    <option value="" disabled>
                      Select achievement
                    </option>

                    <option>1st Place</option>
                    <option>2nd Place</option>
                    <option>3rd Place</option>
                    <option>Special Award</option>
                    <option>Finalist</option>
                    <option>Participation</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Participation Type</label>

                  <select defaultValue="" required>
                    <option value="" disabled>
                      Select participation
                    </option>

                    <option>Individual</option>
                    <option>Team</option>
                  </select>
                </div>

              </div>

              <div className="form-field">
                <label>Project / Paper Title</label>

                <input
                  type="text"
                  placeholder="Enter project or paper title"
                />
              </div>

              <div className="form-field">
                <label>Your Role</label>

                <select defaultValue="" required>
                  <option value="" disabled>
                    Select your role
                  </option>

                  <option>Participant</option>
                  <option>Team Leader</option>
                  <option>Presenter</option>
                  <option>Developer</option>
                  <option>Researcher</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-field">
                <label>Project Description</label>

                <textarea
                  placeholder="Briefly describe your project or achievement"
                  rows="5"
                />
              </div>

            </div>


            {/* CERTIFICATE */}
            <div className="form-section">

              <h2>Certificate / Proof</h2>

              <div className="upload-box">

                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                />

                <p>
                  Upload your certificate or supporting proof.
                </p>

                <span>
                  PDF, JPG or PNG
                </span>

              </div>

            </div>


            {/* ACTIONS */}
            <div className="form-actions">

              <button
                type="button"
                className="cancel-button"
                onClick={() => navigate('/student/dashboard')}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="submit-achievement-button"
              >
                Submit Achievement
              </button>

            </div>

          </form>

        </div>

      </main>

    </div>
  );
}

export default AddAchievement;