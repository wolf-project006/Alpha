import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from '../src/pages/Home';
import Dashboard from './pages/Dashboard';
import UploadImage from './component/UploadImage';
import { AuthProvider } from './context/authContext';
import Signup from './pages/SignUp';


function App() {
  return (
    <>
      <UploadImage/>
      <Router>
        <AuthProvider>
        <Navbar/>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/dashboard" component={<Dashboard/>} />
            <Route path='/sign-up'element={<Signup/>}/>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
