import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";


export const router=createBrowserRouter([
   {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
        {
           path:'/',
           element:<Home></Home>
        },
        {
         path:'/contactUs',
         element:<Contact></Contact>
        },
        {
         path:'/dashboard',
         element:<Dashboard></Dashboard>
        },
        {
         path:'/menu',
         element:<Menu></Menu>
        },
        {
          path:'/shop',
          element:<Shop></Shop>
        }
    ]
   }

])