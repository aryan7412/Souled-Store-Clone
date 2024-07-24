import React from 'react'
import Bestsellers from './Bestsellers';
import Latestcollection from './Latestcollection';
import Shopbyfandom from './Shopbyfandom';
import CategoriesW from './CategoriesW';
import Membership from './Membership';
import Newarivals from './Newarivals';
import Carousel from './Carousel';
import carsw from '../WOMENJSON/crsw.json';
import bsw from '../WOMENJSON/bsw.json';
import allw from '../WOMENJSON/allw.json';
import lsw from '../WOMENJSON/lcw.json';
import naw from '../WOMENJSON/naw.json';
import sww from '../WOMENJSON/sww.json';
import sow from '../WOMENJSON/sow.json';
import sbfm from '../WOMENJSON/sbfw.json';


function Women() {
  return (
    <>
    <Carousel car = {carsw} />
    <Bestsellers heading={bsw.heading} bs = {bsw.bsw} />
    <Newarivals heading={allw.heading} productsa = {allw.allw} />
    <Latestcollection heading={lsw.heading} ls = {lsw.lcw} />
    <Newarivals heading={naw.heading} productsa = {naw.naw} />
    <Bestsellers heading={sww.heading} bs = {sww.sww} />
    <Bestsellers heading={sow.heading} bs = {sow.sow} />
    <CategoriesW />
    <Shopbyfandom heading={sbfm.heading} sbfm={sbfm.sbfw}/>
    <Membership />
    </>
  );
}

export default Women