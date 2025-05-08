import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    name: '',
    email: '',
    phone: '',
    gender: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
      navigate('/');
      return;
    }
    setCurrentUser(user);
    setEditedProfile({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      gender: user.gender || ''
    });
  }, [navigate]);

  const handleProfileEdit = () => {
    setIsEditing(true);
  };

  const handleProfileSave = () => {
    const updatedUser = {
      ...currentUser,
      ...editedProfile
    };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    setCurrentUser(updatedUser);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  if (!currentUser) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                {currentUser.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-bold">{currentUser.name}</h2>
                <p className="text-gray-500">{currentUser.email}</p>
              </div>
            </div>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'profile'
                    ? 'bg-red-500 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                Profile Settings
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'orders'
                    ? 'bg-red-500 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                My Orders
              </button>
              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'addresses'
                    ? 'bg-red-500 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                Saved Addresses
              </button>
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'wishlist'
                    ? 'bg-red-500 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                Wishlist
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 rounded-md text-red-500 hover:bg-red-50"
              >
                Logout
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Profile Settings</h2>
                {!isEditing ? (
                  <button
                    onClick={handleProfileEdit}
                    className="text-red-500 hover:text-red-600"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <button
                    onClick={handleProfileSave}
                    className="text-green-500 hover:text-green-600"
                  >
                    Save Changes
                  </button>
                )}
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={editedProfile.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={editedProfile.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={editedProfile.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={editedProfile.gender}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 disabled:bg-gray-100"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Orders */}
          {activeTab === 'orders' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">My Orders</h2>
              {currentUser.orders?.length > 0 ? (
                <div className="space-y-6">
                  {currentUser.orders.map((order) => (
                    <div
                      key={order.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            Order ID: {order.id}
                          </p>
                          <p className="text-sm text-gray-500">
                            Date: {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            order.status === 'Delivered'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-4"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-500">
                                Size: {item.size} | Quantity: {item.quantity}
                              </p>
                              <p className="text-sm text-gray-500">
                                ₹{item.price * item.quantity}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <p className="font-medium">Total Amount</p>
                          <p className="font-bold">₹{order.totalAmount}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No orders found.</p>
              )}
            </div>
          )}

          {/* Saved Addresses */}
          {activeTab === 'addresses' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Saved Addresses</h2>
                <button
                  onClick={() => navigate('/payment')}
                  className="text-red-500 hover:text-red-600"
                >
                  Add New Address
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentUser.addresses?.map((address, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold mb-2">{address.fullName}</h3>
                    <p className="text-gray-600">{address.streetAddress}</p>
                    <p className="text-gray-600">
                      {address.city}, {address.state} - {address.pincode}
                    </p>
                    <p className="text-gray-600">{address.phoneNumber}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wishlist */}
          {activeTab === 'wishlist' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {JSON.parse(localStorage.getItem('wishlist'))?.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">₹{item.price}</p>
                      <button
                        onClick={() => navigate(`/product/${item.id}`)}
                        className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                      >
                        View Product
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 