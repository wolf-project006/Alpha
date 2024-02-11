import UserPosts from '../component/UserPosts';
import UserCard from '../component/Usercard';
import { useAuth } from '../context/authContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <h1>i'm a Dashboard</h1>
      <div>
        {user && (
          <>
            <UserCard user={user} />
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>

      <UserPosts />
    </>
  );
};

export default Dashboard;
