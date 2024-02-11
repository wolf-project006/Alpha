import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import SinglePost from './component/SinglePost';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/posts/:postId" component={SinglePost} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
