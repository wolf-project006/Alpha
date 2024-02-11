import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Dashboard from './pages/Dashboard';
import SinglePost from './component/SinglePost';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/posts/:postId" component={SinglePost} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
