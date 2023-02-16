import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider.js';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProduct from './components/StarProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'

import { BrowserRouter as Router } from 'react-router-dom';

const banner = require('./data/data.json').banner
const offer = require('./data/data.json').offer;
const starProduct = require('./data/data.json').starProduct;

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={banner.start}/>
      <Offers offer={offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu />
    </Router>
  );
}

export default App;
