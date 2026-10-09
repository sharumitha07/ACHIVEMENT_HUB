
import { useNavigate } from 'react-router-dom';
import campusBg from '../assets/campus-bg.jpg';
import '../styles/login.css';

function Login() {
  const navigate = useNavigate();

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${campusBg})` }}
    >
      <div className="login-overlay">
        <div className="login-card">
          <img
            src="/src/assets/rec-logo.png"
            alt="Rajalakshmi Engineering College"
            className="login-logo"
          />

          <div className="login-label">ACHIEVEMENT HUB</div>

          <h1>
            Celebrating Student
            <br />
            Achievements
          </h1>

          <p>
            Discover, celebrate and preserve the achievements
            of Rajalakshmi Engineering College students.
          </p>

          <button
            className="login-button"
            onClick={() => navigate('/signin')}
          >
            Sign in with your REC mail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;