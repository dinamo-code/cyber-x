import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './home/App'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Productspage from './pages/products/Productspage'
import Trendspage from './pages/trends/Trendspage'
import Salespage from './pages/sales/Salespage'
import Contactpage from './pages/Contact/Contactpage'
import Shoppingcartpage from './pages/shoppingcart/Shoppingcartpage'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'Signup',
    element: <Signup />,


  },
  {
    path: 'Login',
    element: <Login />,

  },
  {
    path: 'products',
    element: <Productspage />,

  },
  {
    path: 'trends',
    element: <Trendspage />,

  },
  {
    path: 'sales',
    element: <Salespage />,

  },
  {
    path: 'contact',
    element: <Contactpage />,

  },
  {
    path: 'shoppingcart',
    element: <Shoppingcartpage />,

  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
