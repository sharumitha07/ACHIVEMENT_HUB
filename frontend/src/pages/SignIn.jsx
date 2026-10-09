import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import campusBg from '../assets/campus-bg.jpg';
import { loginUser } from '../services/api';
import '../styles/login.css';

function SignIn() {
const navigate = useNavigate();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);

const redirectByRole = (user) => {
const role = user?.role?.toUpperCase();

if (!['STUDENT', 'STAFF'].includes(role)) {
  throw new Error('Unable to verify your account role.');
}

navigate(role === 'STUDENT' ? '/student/feed' : '/staff/dashboard');
```

};

const saveLogin = (data) => {
if (!data.token || !data.user) {
throw new Error('Unable to verify your account.');
}

localStorage.setItem('token', data.token);
localStorage.setItem('user', JSON.stringify(data.user));

redirectByRole(data.user);
```

};

const handleSubmit = async (event) => {
event.preventDefault();
setError('');
setLoading(true);


try {
  const data = await loginUser(email.trim(), password);
  saveLogin(data);
} catch (err) {
  setError(err.message || 'Sign-in failed. Please try again.');
} finally {
  setLoading(false);
}


};

const handleGoogleSuccess = async (credentialResponse) => {
setError('');
setLoading(true);


try {
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
    throw new Error(data.message || 'Google Sign-In failed.');
  }

  saveLogin(data);
} catch (err) {
  setError(err.message || 'Google Sign-In failed. Please try again.');
} finally {
  setLoading(false);
}


};

return (
<div
className="signin-page"
style={{ backgroundImage: `url(${campusBg})` }}
> <div className="signin-overlay"> <div className="signin-card"> <img
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

      <div className="signin-divider">
        <span>OR</span>
      </div>

      <div className="google-signin-option">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={() =>
            setError('Google Sign-In failed. Please try again.')
          }
          text="signin_with"
          shape="rectangular"
          theme="outline"
          width="280"
        />
      </div>
    </div>
  </div>
</div>


);
}

export default SignIn;
