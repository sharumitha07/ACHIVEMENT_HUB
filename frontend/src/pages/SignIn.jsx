
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import campusBg from '../assets/campus-bg.jpg';
import { loginUser } from '../services/api';
import '../styles/login.css';

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await loginUser(email.trim(), password);
      const role = data.user?.role?.toUpperCase();

      if (!data.token || !['STUDENT', 'STAFF'].includes(role)) {
        throw new Error('Unable to verify your account role.');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      if (role === 'STUDENT') {
        navigate('/student/feed');
      } else {
        navigate('/staff/dashboard');
      }
    } catch (err) {
      setError(err.message || 'Sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="signin-page"
      style={{ backgroundImage: `url(${campusBg})` }}
    >
      <div className="signin-overlay">
        <div className="signin-card">
          <img
            src="/src/assets/rec-logo.png"
            alt="Rajalakshmi Engineering College"
            className="signin-logo"
          />

          <div className="signin-label">ACHIEVEMENT HUB</div>
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit} className="signin-form">
            <div className="signin-field">
              <label htmlFor="signin-email">REC Mail ID</label>
              <input
                id="signin-email"
                type="email"
                placeholder="Enter your REC mail ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="signin-field">
              <label htmlFor="signin-password">Password</label>
              <input
                id="signin-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <p className="signin-error" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="signin-button"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;