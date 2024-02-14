import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import Home from './Pages/Home/Home';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Blogs from './Pages/Blogs/Blogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/blogs",element:<Blogs/>}
    ]
  }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
 
     <RouterProvider router={router} />
  
)