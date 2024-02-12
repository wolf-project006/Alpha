import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');

    logout();
    navigate('/');
  };

  return (
    <>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Logout;
