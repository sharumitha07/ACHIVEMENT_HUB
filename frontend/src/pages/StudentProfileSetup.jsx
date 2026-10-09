
import { useNavigate } from 'react-router-dom';
import '../styles/profile-setup.css';

function StudentProfileSetup() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend/database connection will be added later.
    navigate('/student/feed');
  };

  return (
    <div className="profile-setup-page">
      {/* HEADER */}
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

      {/* CONTENT */}
      <main className="profile-setup-content">
        <div className="profile-setup-card">
          <h1>Student Profile</h1>

          <form onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="profile-field">
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* COLLEGE EMAIL */}
            <div className="profile-field">
              <label htmlFor="email">College Mail ID *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your REC mail ID"
                pattern=".+@rajalakshmi\.edu\.in"
                title="Enter your REC email address"
                required
              />
            </div>

            {/* PHONE NUMBER */}
            <div className="profile-field">
              <label htmlFor="phone">Phone Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                title="Enter a 10-digit phone number"
                required
              />
            </div>

            {/* REGISTER NUMBER */}
            <div className="profile-field">
              <label htmlFor="registerNumber">Register Number *</label>
              <input
                id="registerNumber"
                name="registerNumber"
                type="text"
                placeholder="Enter your register number"
                required
              />
            </div>

            {/* DEPARTMENT */}
            <div className="profile-field">
              <label htmlFor="department">Department *</label>
              <select
                id="department"
                name="department"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select department
                </option>
                <option value="Aeronautical Engineering">Aeronautical Engineering</option>
                <option value="Automobile Engineering">Automobile Engineering</option>
                <option value="Biomedical Engineering">Biomedical Engineering</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Chemical Engineering">Chemical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                <option value="Computer Science & Engineering (Cyber Security)">Computer Science & Engineering (Cyber Security)</option>
                <option value="Computer Science & Business Systems">Computer Science & Business Systems</option>
                <option value="Computer Science & Design">Computer Science & Design</option>
                <option value="Electrical & Electronics Engineering">Electrical & Electronics Engineering</option>
                <option value="Electronics & Communication Engineering">Electronics & Communication Engineering</option>
                <option value="Food Technology">Food Technology</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Artificial Intelligence & Machine Learning">Artificial Intelligence & Machine Learning</option>
                <option value="Artificial Intelligence & Data Science">Artificial Intelligence & Data Science</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Mechatronics Engineering">Mechatronics Engineering</option>
                <option value="Robotics & Automation">Robotics & Automation</option>
                <option value="Humanities & Sciences">Humanities & Sciences</option>
                <option value="Management Studies">Management Studies</option>
              </select>
            </div>

            {/* YEAR */}
            <div className="profile-field">
              <label htmlFor="year">Year *</label>
              <select
                id="year"
                name="year"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select year
                </option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>

            {/* SUBMIT */}
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