import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/authContext';
import Signup from './pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sign-up" element={<Signup/>}/>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
