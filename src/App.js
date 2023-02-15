import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider.js';
import Offers from './components/Offers.js';

import { BrowserRouter as Router } from 'react-router-dom';

const banner = require('./data/data.json').banner
const offer = require('./data/data.json').offer;


function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={banner.start}/>
      <Offers offer={offer}/>
    </Router>
  );
}

export default App;
