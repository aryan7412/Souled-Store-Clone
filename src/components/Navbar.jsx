import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="bg-red-600 text-white w-full">
          <div className="container mx-auto flex justify-between items-center py-2 px-4">
            <div className="flex items-center space-x-8">
              <div className="text-white text-2xl font-bold flex items-center">
                <span className="mr-2">👻</span>
                <span>The Souled Store</span>
              </div>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-4 ml-12">
                <a href="#" className="hover:text-gray-300">WOMEN</a>
                <span>|</span>
                <a href="#" className="hover:text-gray-300">MEN</a>
                <span>|</span>
                <a href="#" className="hover:text-gray-300">KIDS</a>
              </nav>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-gray-300">TRACK ORDER</a>
              <a href="#" className="hover:text-gray-300">CONTACT US</a>
              <a href="#" className="hover:text-gray-300">DOWNLOAD APP</a>
            </div>
            {/* Hamburger Icon */}
            <button 
              className="md:hidden text-white"
              onClick={toggleMenu}
              aria-label="Toggle Navigation"
            >
              <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
            </button>
          </div>
        </div>
        <div className={`bg-white text-gray-700 w-full ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="container mx-auto py-6 px-4">
            {/* Mobile Menu */}
            <div className={`flex flex-col md:flex-row ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
              <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-sm font-semibold">
                <a href="#" className="hover:text-gray-500 relative">
                  ALL LINENS
                  <span className="absolute top-[-8px] right-[-8px] text-xs text-red-600 bg-transparent px-1" style={{ fontSize: '10px' }}>NEW</span>
                </a>
                <div className="relative group">
                  <button className="hover:text-gray-500">TOPWEAR</button>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg z-10">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 2</a>
                  </div>
                </div>
                <div className="relative group">
                  <button className="hover:text-gray-500">BOTTOMWEAR</button>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg z-10">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 2</a>
                  </div>
                </div>
                <a href="#" className="hover:text-gray-500 relative">
                  BESTSELLERS
                  <span className="absolute top-[-8px] right-[-8px] text-xs text-red-600 bg-transparent px-1" style={{ fontSize: '10px' }}>NEW</span>
                </a>
                <a href="#" className="hover:text-gray-500 relative">
                  SNEAKERS
                  <span className="absolute top-[-8px] right-[-8px] text-xs text-red-600 bg-transparent px-1" style={{ fontSize: '10px' }}>NEW</span>
                </a>
                <div className="relative group">
                  <button className="hover:text-gray-500">COLLECTIONS</button>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg z-10">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 2</a>
                  </div>
                </div>
                <a href="#" className="hover:text-gray-500">ACCESSORIES</a>
              </nav>
              <div className="flex flex-col md:flex-row space-x-4 mt-4 md:mt-0">
                <button className="hover:text-gray-500" aria-label="Search">
                  <i className="fas fa-search"></i>
                </button>
                <button className="hover:text-gray-500" onClick={toggleLoginModal} aria-label="User Account">
                  <i className="fas fa-user"></i>
                </button>
                <button className="hover:text-gray-500" aria-label="Favorites">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="hover:text-gray-500" aria-label="Shopping Cart">
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isLoginModalOpen && <LoginModal toggleLoginModal={toggleLoginModal} />}
    </>
  );
};

export default Navbar;
