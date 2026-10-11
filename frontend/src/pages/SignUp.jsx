
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import campusBg from '../assets/campus-bg.jpg';
import '../styles/login.css';

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        'http://localhost:5000/api/auth/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'Registration failed.'
        );
      }

      setMessage(
        'Account created successfully! Redirecting to sign in...'
      );

      setTimeout(() => {
        navigate('/signin');
      }, 1500);
    } catch (err) {
      setError(
        err.message || 'Unable to create your account.'
      );
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

          <div className="signin-label">
            ACHIEVEMENT HUB
          </div>

          <h1>Sign Up</h1>

          <form
            onSubmit={handleSubmit}
            className="signin-form"
          >
            <div className="signin-field">
              <label htmlFor="signup-email">
                REC Mail ID
              </label>

              <input
                id="signup-email"
                type="email"
                placeholder="Enter your REC mail ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="signin-field">
              <label htmlFor="signup-password">
                Password
              </label>

              <input
                id="signup-password"
                type="password"
                placeholder="Create a password (minimum 8 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>

            <div className="signin-field">
              <label htmlFor="signup-confirm-password">
                Confirm Password
              </label>

              <input
                id="signup-confirm-password"
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                minLength={8}
                required
              />
            </div>

            {error && (
              <p className="signin-error" role="alert">
                {error}
              </p>
            )}

            {message && (
              <p role="status">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="signin-button"
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p className="signup-prompt">
            Already have an account?{' '}
            <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
