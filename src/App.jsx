import React from 'react'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom";
import LoginModals from "./components/LoginModals";
import Register from "./components/Register";

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<LoginModals />} />
    <Route path='Register' element={<Register />} />
    {/* <Footer /> */}
  </Routes>
  
  )
}

export default App
