import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Mens from './components/Mens';
import Women from './components/Women';
import Kids from './components/Kids';
import ProductPage from './components/ProductPage';
import Payment from './components/Payment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Contact from './components/Contact';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Mens />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/payment" 
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

