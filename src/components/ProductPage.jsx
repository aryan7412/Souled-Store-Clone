import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  // Sample product data (replace with actual API call)
  const product = {
    id: id,
    name: "Marvel Avengers T-Shirt",
    category: "Mens",
    price: 799,
    description: "Premium quality cotton t-shirt featuring the Avengers logo. Perfect for casual wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://example.com/tshirt1.jpg",
      "https://example.com/tshirt2.jpg",
      "https://example.com/tshirt3.jpg"
    ],
    reviews: [
      {
        id: 1,
        user: "John D.",
        rating: 5,
        comment: "Great quality and perfect fit!"
      },
      {
        id: 2,
        user: "Sarah M.",
        rating: 4,
        comment: "Love the design, but runs a bit small."
      }
    ],
    relatedItems: [
      {
        id: 2,
        name: "Marvel Spider-Man T-Shirt",
        price: 799,
        image: "https://example.com/spiderman.jpg"
      },
      {
        id: 3,
        name: "Marvel Iron Man T-Shirt",
        price: 799,
        image: "https://example.com/ironman.jpg"
      }
    ]
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
  }, []);

  const handleQuantityChange = (value) => {
    if (value >= 1 && value <= 5) {
      setQuantity(value);
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!currentUser) {
      navigate('/');
      return;
    }

    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => 
      item.id === product.id && item.size === selectedSize
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
        quantity: quantity,
        image: product.images[0]
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show notification
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    // Dispatch storage event to update cart count in navbar
    window.dispatchEvent(new Event('storage'));
  };

  const handleAddToWishlist = () => {
    if (!currentUser) {
      navigate('/');
      return;
    }

    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const existingItem = wishlist.find(item => item.id === product.id);

    if (!existingItem) {
      wishlist.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]
      });
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      alert('Added to wishlist!');
    } else {
      alert('Item already in wishlist!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          Added to cart successfully!
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} - View ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold">₹{product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          {/* Size Selection */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="font-semibold">Select Size</label>
              <button
                onClick={() => setShowSizeGuide(!showSizeGuide)}
                className="text-sm text-red-600 hover:underline"
              >
                Size Guide
              </button>
            </div>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? 'border-red-600 text-red-600'
                      : 'border-gray-300 hover:border-red-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="space-y-2">
            <label className="font-semibold">Quantity</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="px-3 py-1 border rounded-md hover:bg-gray-100"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="px-3 py-1 border rounded-md hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-red-600 text-white py-3 rounded-md hover:bg-red-700"
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="flex-1 border border-red-600 text-red-600 py-3 rounded-md hover:bg-red-50"
            >
              Add to Wishlist
            </button>
          </div>

          {/* Reviews Section */}
          <div className="border-t pt-6">
            <button
              onClick={() => setShowReviews(!showReviews)}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600"
            >
              <span>Reviews ({product.reviews.length})</span>
              <span>{showReviews ? '▲' : '▼'}</span>
            </button>
            {showReviews && (
              <div className="mt-4 space-y-4">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{review.user}</span>
                      <span className="text-yellow-400">
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.relatedItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-red-600">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;