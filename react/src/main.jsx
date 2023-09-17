import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './home/App'
import Signup from './pages/Signup'
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
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
