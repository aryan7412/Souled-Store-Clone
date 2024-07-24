import React from 'react';

const LoginModal = ({ toggleLoginModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={toggleLoginModal}
          aria-label="Close"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Modal Content */}
        <div className="flex justify-center mb-4">
          <button className="text-lg font-semibold text-green-700 border-b-2 border-green-700 px-4 py-1 focus:outline-none">LOGIN</button>
          <button className="text-lg font-semibold text-gray-500 px-4 py-1 focus:outline-none">REGISTER</button>
        </div>
        <div className="text-center">
          <button className="flex items-center justify-center w-full py-2 mb-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
            <i className="fab fa-facebook-f mr-2"></i> Facebook
          </button>
          <button className="flex items-center justify-center w-full py-2 mb-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none">
            <i className="fab fa-google mr-2"></i> Google
          </button>
          <div className="relative mb-4">
            <hr className="border-t border-gray-300" />
            <span className="absolute inset-x-0 top-0 mx-auto w-max -mt-2 bg-white px-2 text-gray-500">- OR -</span>
          </div>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <button className="w-full py-3 mb-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none">PROCEED</button>
          <div>
            <span className="text-gray-500">New User?</span>
            <a href="#" className="ml-1 text-red-600">Create Account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
