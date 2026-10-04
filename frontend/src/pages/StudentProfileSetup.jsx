import { useNavigate } from 'react-router-dom';
import '../styles/profile-setup.css';

function StudentProfileSetup() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // For now, just move to the Student Dashboard.
    // Backend/database connection will be added later.
    navigate('/student/dashboard');
  };

  return (
    <div className="profile-setup-page">

      <div className="profile-setup-header">
        <div className="profile-brand">

          <img
            src="/src/assets/rec-symbol.png"
            alt="REC"
            className="profile-logo"
          />

          <span>ACHIEVEMENT HUB</span>

        </div>
      </div>

      <main className="profile-setup-content">

        <div className="profile-setup-card">

          <h1>Student Profile</h1>

          <form onSubmit={handleSubmit}>

            <div className="profile-field">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="profile-field">
              <label>College Mail ID</label>
              <input
                type="email"
                placeholder="Enter your REC mail ID"
              />
            </div>

            <div className="profile-field">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="profile-field">
              <label>Register Number</label>
              <input
                type="text"
                placeholder="Enter your register number"
              />
            </div>

            <div className="profile-field">
              <label>Department</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select department
                </option>

                <option>Information Technology</option>
                <option>Computer Science and Engineering</option>
                <option>Artificial Intelligence and Data Science</option>
                <option>Electronics and Communication Engineering</option>
                <option>Electrical and Electronics Engineering</option>
                <option>Mechanical Engineering</option>
                <option>Civil Engineering</option>
                <option>Biomedical Engineering</option>
              </select>
            </div>

            <div className="profile-row">

              <div className="profile-field">
                <label>Year</label>

                <select defaultValue="">
                  <option value="" disabled>
                    Select year
                  </option>

                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              </div>

              <div className="profile-field">
                <label>Section</label>

                <select defaultValue="">
                  <option value="" disabled>
                    Select section
                  </option>

                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                  <option>E</option>
                </select>
              </div>

            </div>

            <button
              type="submit"
              className="profile-continue-button"
            >
              Continue
            </button>

          </form>

        </div>

      </main>

    </div>
  );
}

export default StudentProfileSetup;