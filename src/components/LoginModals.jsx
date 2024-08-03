import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';


const LoginModals = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <div className="flex justify-center mb-4">
          <button 
            className={`w-1/2 py-2 ${isLogin ? 'bg-teal-600 text-white' : 'bg-gray-200'}`} 
            onClick={() => setIsLogin(true)}
          >
            <Link to='/'>LOGIN</Link>
                             
          </button>
          
          <button 
            className={`w-1/2 py-2 ${!isLogin ? 'bg-teal-600 text-white' : 'bg-gray-200'}`} 
            onClick={() => setIsLogin(false)}
          >
            REGISTER
          </button>
          
        </div>
        
        <div className="flex justify-between mb-4">
          <button className="flex-1 bg-blue-600 text-white py-2 mr-2 rounded-lg">
            Facebook
          </button>
          <button className="flex-1 bg-red-600 text-white py-2 ml-2 rounded-lg">
            Google
          </button>
        </div>
        <div className="text-center mb-4 text-gray-600 font-semibold">- OR -</div>
        <div className="mb-4">
          <input 
            type="text" 
            className="w-full p-2 border rounded-lg" 
            placeholder="Enter Phone Number" 
          />
        </div>
        <button className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold">PROCEED</button>
        <div className="text-center mt-4">
          <span className="text-gray-600">New User? <Link className="text-red-600" to='/Register'>Create an Account</Link></span>
        </div>
      </div>
    </div>
  );
}

export default LoginModals;
