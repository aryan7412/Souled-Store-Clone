import React, { useState, useEffect } from "react";
import LoginModal from "./LoginModal";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New collection launched!", time: "2 hours ago" },
    { id: 2, message: "Your order has been delivered", time: "1 day ago" }
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get current user from localStorage
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);

    // Update cart count from localStorage
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
      setCartCount(totalItems);
    };

    // Initial update
    updateCartCount();

    // Listen for storage events
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Search query:", searchQuery);
  };

  const handleCartClick = () => {
    if (!currentUser) {
      setShowLoginModal(true);
      return;
    }
    navigate('/payment');
  };

  const handleProfileClick = () => {
    if (!currentUser) {
      setShowLoginModal(true);
      return;
    }
    navigate('/profile');
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/');
  };

  const categories = {
    'WOMENS': ['T-Shirts', 'Hoodies', 'Sweatshirts', 'Tops', 'Dresses'],
    'MENS': ['T-Shirts', 'Hoodies', 'Sweatshirts', 'Shirts', 'Pants'],
    'KIDS': ['T-Shirts', 'Hoodies', 'Sweatshirts', 'Tops', 'Dresses']
  };

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-red-600 text-white w-full">
          <div className="container mx-auto flex justify-between items-center py-2 px-4">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-white text-2xl font-bold flex items-center">
                <span className="mr-2">👻</span>
                <span>The Souled Store</span>
              </Link>
              <nav className="hidden md:flex space-x-4 ml-12">
                {Object.keys(categories).map(category => (
                  <div key={category} className="relative group">
                    <Link to={`/${category.toLowerCase()}`} className="hover:text-gray-300">
                      {category}
                    </Link>
                    <div className="absolute hidden group-hover:block bg-white shadow-lg z-10 min-w-[200px] py-2">
                      {categories[category].map(subCategory => (
                        <Link
                          key={subCategory}
                          to={`/${category.toLowerCase()}/${subCategory.toLowerCase()}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {subCategory}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="md:hidden text-white"
                onClick={toggleMenu}
                aria-label="Toggle Navigation"
              >
                {isMenuOpen ? (
                  <span className="text-2xl">&times;</span>
                ) : (
                  <span className="text-2xl">&#9776;</span>
                )}
              </button>
              <div className="hidden md:flex space-x-4">
                <Link to="/track-order" className="hover:text-gray-300">
                  TRACK ORDER
                </Link>
                <Link to="/contact" className="hover:text-gray-300">
                  CONTACT US
                </Link>
                <a href="#" className="hover:text-gray-300">
                  DOWNLOAD APP
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white border-b">
          <div className="container mx-auto py-4 px-4">
            <div className="flex items-center justify-between">
              <form onSubmit={handleSearchSubmit} className="flex-1 max-w-2xl">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for products..."
                    className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-red-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
                  >
                    🔍
                  </button>
                </div>
              </form>

              <div className="flex items-center space-x-6 ml-8">
                {currentUser ? (
                  <div className="relative group">
                    <button
                      className="flex items-center space-x-2 hover:text-red-500"
                      onClick={handleProfileClick}
                    >
                      <span>👤</span>
                      <span className="hidden md:inline">{currentUser.name}</span>
                    </button>
                    <div className="absolute hidden group-hover:block bg-white shadow-lg z-10 min-w-[200px] py-2 right-0">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        My Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        My Orders
                      </Link>
                      <Link
                        to="/wishlist"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Wishlist
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    className="hover:text-red-500"
                    onClick={toggleLoginModal}
                  >
                    👤
                  </button>
                )}

                <div className="relative group">
                  <button
                    className="hover:text-red-500 relative"
                    onClick={() => setShowNotifications(!showNotifications)}
                  >
                    🔔
                    {notifications.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {notifications.length}
                      </span>
                    )}
                  </button>
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 bg-white shadow-lg z-10 min-w-[300px] py-2">
                      {notifications.map(notification => (
                        <div
                          key={notification.id}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          <p className="text-gray-700">{notification.message}</p>
                          <p className="text-sm text-gray-500">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  className="hover:text-red-500 relative"
                  onClick={handleCartClick}
                >
                  🛒
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b">
            <div className="container mx-auto py-4 px-4">
              <nav className="flex flex-col space-y-4">
                {Object.keys(categories).map(category => (
                  <div key={category}>
                    <Link
                      to={`/${category.toLowerCase()}`}
                      className="block font-semibold text-gray-700 hover:text-red-500"
                    >
                      {category}
                    </Link>
                    <div className="pl-4 mt-2 space-y-2">
                      {categories[category].map(subCategory => (
                        <Link
                          key={subCategory}
                          to={`/${category.toLowerCase()}/${subCategory.toLowerCase()}`}
                          className="block text-gray-600 hover:text-red-500"
                        >
                          {subCategory}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link
                  to="/track-order"
                  className="block font-semibold text-gray-700 hover:text-red-500"
                >
                  TRACK ORDER
                </Link>
                <Link
                  to="/contact"
                  className="block font-semibold text-gray-700 hover:text-red-500"
                >
                  CONTACT US
                </Link>
                <a
                  href="#"
                  className="block font-semibold text-gray-700 hover:text-red-500"
                >
                  DOWNLOAD APP
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
      {showLoginModal && (
        <LoginModal
          onClose={toggleLoginModal}
          onLoginSuccess={(user) => {
            setCurrentUser(user);
            setShowLoginModal(false);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
