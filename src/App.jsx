import React from 'react'
import Mens from './components/Mens';
import Women from './components/Women';
import Kids from './components/Kids';
import Footer from './components/Footer'
import ProductPage from './components/ProductPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Women/>
    <ProductPage/>
    {/* <Mens />
    <Kids /> */}
    <Footer/>
    </>  
  );
}

export default App

