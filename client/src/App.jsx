import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import PostEdit from './component/PostEdit';

function App() {
  return (
    <>
      <h1>Text Editor</h1>
      <PostEdit />
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
