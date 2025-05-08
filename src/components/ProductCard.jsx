import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      className="cursor-pointer group"
      onClick={handleProductClick}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-md text-sm">
            {product.discount}% OFF
          </div>
        )}
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-red-600 font-semibold">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through text-sm">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 