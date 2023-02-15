import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider.js';
import { BrowserRouter as Router } from 'react-router-dom';

const banner = require('./data/data.json').banner
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={banner.start}/>
    </Router>
  );
}

export default App;
