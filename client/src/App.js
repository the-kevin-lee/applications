import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<div>Welcome to the App!</div>} />
        

      </Routes>
    </Router>
  </>

  );
}

export default App;
