import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Mens from './components/Mens.jsx'
import Womens from './components/Women.jsx';
import Kids from './components/Kids.jsx';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Mens",
    element: <Mens />,
  },
  {
    path: "Kids",
    element: <Kids />,
  },
  {
    path: "Womens",
    element: <Womens />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
