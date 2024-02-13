import { useState } from 'react';
import '../styles/forms.css';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://wolf-backend.onrender.com/login',
        {
          username: username,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      if (response.ok) {
        const data = response.data;
        login(data);
        console.log(data);
        navigate('/dashboard');
        console.log('Login successfully');
      } else {
        console.error('Invalid credentials:', data);
        navigate('/');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    } finally {
      setIsLoading(false);
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
          <button className="submit" type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
