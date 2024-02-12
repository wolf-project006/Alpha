import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/authContext';


function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/dashboard" component={<Dashboard />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
