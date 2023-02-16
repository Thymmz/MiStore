import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider.js';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProduct from './components/StarProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js'
import ProductReviews from './components/ProductReviews.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const banner = require('./data/data.json').banner
const offer = require('./data/data.json').offer;
const starProduct = require('./data/data.json').starProduct;
const hotAccessories = require('./data/data.json').hotAccessories;
const hotAccessoriesCover = require('./data/data.json').hotAccessoriesCover;
const productReviews = require('./data/data.json').productReviews;

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
      
      <Routes>
      <Route exact path="/music"  element = {<HotAccessories music={hotAccessories.music} musicCover={hotAccessoriesCover.music}/>}/>
      <Route exact path="/smartDevice"  element = {<HotAccessories smartDevice={hotAccessories.smartDevice} smartDeviceCover={hotAccessoriesCover.smartDevice}/>}/>
      <Route exact path="/home"  element = {<HotAccessories home={hotAccessories.home} homeCover={hotAccessoriesCover.home}/>}/>
      <Route exact path="/lifestyle"  element = {<HotAccessories lifestyle={hotAccessories.lifeStyle} lifestyleCover={hotAccessoriesCover.lifeStyle}/>}/>
      <Route exact path="/mobileAccessories"  element = {<HotAccessories mobileAccessories={hotAccessories.mobileAccessories} mobileAccessoriesCover={hotAccessoriesCover.mobileAccessories}/>}/>
      </Routes>

      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={productReviews}/>

    </Router>
  );
}

export default App;
