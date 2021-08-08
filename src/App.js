import Header from './components/Header';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
//javascript Code
  return (
    <Router>
      <h1>Herro</h1>
      <Navbar />
    </Router>
  );
}

export default App;
