import React from 'react'
import Bestsellers from './Bestsellers';
import Latestcollection from './Latestcollection';
import Officialmerchandise from './Officialmerchandise';
import Shopbyfandom from './Shopbyfandom';
import CategoriesK from './CategoriesK';
import Membership from './Membership';
import Allnewbottom from './Allnewbottom';
import Newarivals from './Newarivals';
import Carousel from './Carousel';
// import Footer from './Footer';
import cark from '../KIDJSON/cark.json';
import sbk from '../KIDJSON/sbk.json';
import lck from '../KIDJSON/lck.json';
import om from '../KIDJSON/om.json';
import sbpk from '../KIDJSON/sbpk.json';
import tsk from '../KIDJSON/tsk.json';
import nak from '../KIDJSON/nak.json';
import Catek from '../KIDJSON/Catek.json';

function Kids() {
  return (
    <>
    <Carousel car = {cark} />
    <Bestsellers heading={sbk.heading} bs = {sbk.sbk} />
    <Latestcollection heading={lck.heading} ls = {lck.lck} />
    <Officialmerchandise heading={om.heading} om ={om.om} />
    <Latestcollection heading={sbpk.heading} ls = {sbpk.sbpk} />
    <CategoriesK heading={Catek.heading} Catek={Catek.Catek} />
    <Newarivals heading={tsk.heading} productsa = {tsk.tsk} />
    <Newarivals heading={nak.heading} productsa = {nak.nak} />

    <Membership />
    {/* <Footer /> */}
    </>
  );
}

export default Kids