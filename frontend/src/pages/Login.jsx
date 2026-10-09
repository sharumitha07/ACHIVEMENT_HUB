import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import campusBg from '../assets/campus-bg.jpg';
import '../styles/login.css';

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setError('');

      const response = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          credential: credentialResponse.credential,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Google Sign-In failed.');
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      navigate('/student/dashboard');
    } catch (err) {
      console.error('Google login error:', err);
      setError('Unable to connect to the server. Please try again.');
    }
  };

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

          <div className="google-login">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError('Google Sign-In failed. Please try again.')}
              text="signin_with"
              shape="rectangular"
              theme="outline"
              width="280"
            />
          </div>

          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;