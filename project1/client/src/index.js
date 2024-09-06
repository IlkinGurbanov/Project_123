import React from 'react';
import App from './App';
import Home from './pages/Home/Home';
import Add from './pages/Add/Add'
import Wishlist from './pages/Wishlist/Wishlist';
import Details from './pages/Details/Details';

import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Add',
        element:<Add/>
      },
      {
        path:'/Wishlist',
        element:<Wishlist/>
      },
      {
        path:'/Details/:id',
        element:<Details/>
      }
    ]
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
