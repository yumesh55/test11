import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './Products/Products.jsx';
import About from './About/About.jsx';
import Contact from './contact/Contact.jsx';
import Yibco from './Products/Yibco.jsx';
import Hoses from './Products/Hoses.jsx';
import Categories from './sections/Categories/Categories.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Products",
    element: <Products/>
  },
  {
    path: "/Home",
    element: <App/>
  },
  {
    path: "/About Us",
    element: <About/>
  },
  {
    path: "/Contact Us",
    element: <Contact/>
  },
  {
    path: "/Yibco tools",
    element: <Yibco/>
  },
  {
    path: "/Hoses",
    element: <Hoses/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
