import React from 'react';
import Bestsellers from './Bestsellers';
import Latestcollection from './Latestcollection';
import Shopbyfandom from './Shopbyfandom';
import CategoriesM from './CategoriesM';
import Membership from './Membership';
import Allnewbottom from './Allnewbottom';
import Newarivals from './Newarivals';
import Carousel from './Carousel';
import products from '../MENJSON/allm.json';
import productsa from '../MENJSON/nam.json';
import car from '../MENJSON/carm.json';
import bs from '../MENJSON/bsm.json';
import ls from '../MENJSON/Lcm.json';
import sbfm from '../MENJSON/sbfm.json';

function Mens() {
  return (
    <div className="w-full">
      <Carousel car={car} />
      <Bestsellers heading={bs.heading} bs={bs.bsm} />
      <Allnewbottom heading={products.heading} products={products.allm} />
      <Latestcollection heading={ls.heading} ls={ls.Lcm} />
      <Newarivals heading={productsa.heading} productsa={productsa.nam} />
      <CategoriesM />
      <Shopbyfandom heading={sbfm.heading} sbfm={sbfm.sbfm}/>
      <Membership />
    </div>
  );
}

export default Mens;