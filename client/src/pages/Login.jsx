import { useState } from 'react';
import '../styles/forms.css';
import { useAuth } from '../context/authContext';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        login(data);
        console.log('Login successfully');
        // Store the token in localStorage or a state management solution
        // Redirect to the authenticated part of your application
      } else {
        console.error('Invalid credentials:', data);
        // handle failure
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <>
      <div className="main">
        <h3 className="title">Login</h3>

        <form className="login" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="username"
          />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
          />
          <button className="submit" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
