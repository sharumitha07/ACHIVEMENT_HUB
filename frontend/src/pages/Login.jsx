import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import campusBg from '../assets/campus-bg.jpg';
import '../styles/login.css';

function Login() {
const navigate = useNavigate();

const handleGoogleSuccess = async (credentialResponse) => {
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

```
  const data = await response.json();

  if (!response.ok) {
    alert(data.message || 'Google sign-in failed.');
    return;
  }

  // Save the login token and user information
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify(data.user));

  // Continue to the student dashboard
  navigate('/student/dashboard');
} catch (error) {
  console.error('Google sign-in error:', error);
  alert('Unable to connect to the server. Please try again.');
}
```

};

return (
<div
className="login-page"
style={{ backgroundImage: `url(${campusBg})` }}
> <div className="login-overlay"> <div className="login-card"> <img
         src="/src/assets/rec-logo.png"
         alt="Rajalakshmi Engineering College"
         className="login-logo"
       />

```
      <div className="login-label">
        ACHIEVEMENT HUB
      </div>

      <h1>
        Celebrating Student
        <br />
        Achievements
      </h1>

      <p>
        Discover, celebrate and preserve the achievements
        of Rajalakshmi Engineering College students.
      </p>

      <div className="google-login-container">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={() => {
            alert('Google sign-in failed. Please try again.');
          }}
          text="signin_with"
          shape="rectangular"
          theme="filled_blue"
          width="280"
        />
      </div>
    </div>
  </div>
</div>
```

);
}

export default Login;
