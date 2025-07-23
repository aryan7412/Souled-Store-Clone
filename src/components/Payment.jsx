import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    pincode: ''
  });

  useEffect(() => {
    // Get cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);

    // Get saved addresses
    const savedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
    if (savedAddresses.length > 0) {
      setSelectedAddress(savedAddresses[0]);
    }
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    const addresses = JSON.parse(localStorage.getItem('addresses')) || [];
    addresses.push(newAddress);
    localStorage.setItem('addresses', JSON.stringify(addresses));
    setSelectedAddress(newAddress);
    setShowAddressForm(false);
    setNewAddress({
      name: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      pincode: ''
    });
  };

  const handleInputChange = (e) => {
    setNewAddress({
      ...newAddress,
      [e.target.name]: e.target.value
    });
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateShipping = () => {
    return calculateSubtotal() > 1000 ? 0 : 100;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handlePlaceOrder = () => {
    if (!selectedAddress) {
      alert('Please select or add a delivery address');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    // Create order
    const order = {
      id: Date.now(),
      items: cart,
      address: selectedAddress,
      paymentMethod,
      total: calculateTotal(),
      status: 'Processing',
      date: new Date().toISOString()
    };

    // Save order
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear cart
    localStorage.removeItem('cart');
    setCart([]);

    // Show success message and redirect
    alert('Order placed successfully!');
    navigate('/profile');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Delivery & Payment */}
        <div className="space-y-8">
          {/* Delivery Address */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
            {selectedAddress ? (
              <div className="mb-4">
                <p className="font-medium">{selectedAddress.name}</p>
                <p>{selectedAddress.street}</p>
                <p>{selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pincode}</p>
                <p>Phone: {selectedAddress.phone}</p>
                <button
                  onClick={() => setShowAddressForm(true)}
                  className="text-red-600 hover:text-red-700 mt-2"
                >
                  Change Address
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAddressForm(true)}
                className="text-red-600 hover:text-red-700"
              >
                Add New Address
              </button>
            )}

            {showAddressForm && (
              <form onSubmit={handleAddressSubmit} className="mt-4 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={newAddress.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={newAddress.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="street"
                  placeholder="Street Address"
                  value={newAddress.street}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={newAddress.city}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={newAddress.state}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={newAddress.pincode}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
                  >
                    Save Address
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddressForm(false)}
                    className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Payment Method */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-red-600"
                />
                <span>Credit/Debit Card</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-red-600"
                />
                <span>UPI</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-red-600"
                />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          
          {/* Cart Items */}
          <div className="space-y-4 mb-6">
            {cart.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 relative group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-medium">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                    title="Remove item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Price Breakdown */}
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{calculateSubtotal()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{calculateShipping() === 0 ? 'Free' : `₹${calculateShipping()}`}</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2 mt-2">
              <span>Total</span>
              <span>₹{calculateTotal()}</span>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-red-600 text-white py-3 rounded-lg mt-6 hover:bg-red-700"
            disabled={cart.length === 0}
          >
            {cart.length === 0 ? 'Cart is Empty' : 'Place Order'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment; 