import React, { useState } from 'react';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/top_selling_Tom_And_Jerry_New_Year_ce1aLms.jpg?format=webp&w=360&dpr=2.0"
            alt="Tom and Jerry New Year Women Holiday Shirt"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Tom And Jerry: New Year</h1>
          <p className="text-gray-500">Women Holiday Shirts</p>
          <p className="text-2xl font-bold">₹ 999</p>
          <p className="text-gray-500">MRP incl. of all taxes</p>
          <h2 className="text-lg font-bold">Please select a size.</h2>
          <div className="flex gap-2">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md">
              XXS
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md">
              XS
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md">
              S
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md">
              M
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md">
              L
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md">
              XL
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md">
              XXL
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md">
              XXXL
            </button>
          </div>
          <p className="text-gray-500">Size not available? <a href="#" className="text-blue-500 hover:underline">Notify Me</a></p>
          <div className="flex gap-2">
            <label htmlFor="quantity" className="text-gray-500">Quantity</label>
            <select
              id="quantity"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md"
              value={quantity}
              onChange={handleQuantityChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md">
            Add to Cart
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md">
            Add to Wishlist
          </button>
          <div className="flex gap-2 mt-4">
            <p className="text-gray-500">Share</p>
            <a href="#" className="text-gray-500 hover:underline">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="text-gray-500 hover:underline">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:underline">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:underline">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <h2 className="text-lg font-bold mt-4">Delivery Details</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Pincode"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md w-full"
            />
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md">
              Check
            </button>
          </div>
          <p className="text-gray-500 mt-4">
            <i className="fas fa-lock"></i> This product is eligible for return or exchange under our 30-day return or exchange policy. No questions asked.
          </p>
          <h2 className="text-lg font-bold mt-4">Product Details</h2>
          <div className="border-t border-gray-300 pt-4">
            <h3 className="text-lg font-bold">Material & Care:</h3>
            <p className="text-gray-500">100% Viscose</p>
            <p className="text-gray-500">Machine Wash</p>
            <h3 className="text-lg font-bold">Country of Origin:</h3>
            <p className="text-gray-500">India (and proud)</p>
            <h3 className="text-lg font-bold">Manufactured & Sold By:</h3>
            <p className="text-gray-500">The Souled Store Pvt. Ltd.</p>
            <p className="text-gray-500">224, Tantia Jogani Industrial Premises</p>
            <p className="text-gray-500">J.R. Boricha Marg</p>
            <p className="text-gray-500">Lower Parel (E)</p>
            <p className="text-gray-500">Mumbai - 11</p>
            <p className="text-gray-500">connect@thesouledstore.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;