import React from 'react'
import Mens from './components/Mens';
import Women from './components/Women';
import Kids from './components/Kids';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProductPage from './components/ProductPage';

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

