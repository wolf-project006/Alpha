import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Dashboard from './pages/Dashboard';
import UploadImage from './component/UploadImage';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <>
      <UploadImage/>
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
