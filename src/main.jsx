import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Mens from './components/Mens.jsx'
import Womens from './components/Women.jsx';
import Kids from './components/Kids.jsx';
import ProductPage from './components/ProductPage';
import Payment from './components/Payment';
import UserProfile from './components/UserProfile';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "mens",
        element: <Mens />,
      },
      {
        path: "kids",
        element: <Kids />,
      },
      {
        path: "womens",
        element: <Womens />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
