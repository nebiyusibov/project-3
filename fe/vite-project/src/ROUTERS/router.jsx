import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/MainPages/Home";
import About from "../pages/MainPages/About";
import Contact from "../pages/MainPages/Contact";
import Detail from "../pages/MainPages/Detail";
import Basket from "../pages/MainPages/Basket";
import Wishlist from "../pages/MainPages/Wishlist";
import AdminLayout from "../layout/AdminLayout/AdminLayout";
import AdminPanel from "../pages/AdminPages/AdminPanel";
import Add from "../pages/AdminPages/Add";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"about",
                element:<About></About>
            },
            {
                path:"contact",
                element:<Contact></Contact>
            },
            {
                path:"detail",
                element:<Detail></Detail>
            },
            {
                path:"basket",
                element:<Basket></Basket>
            },
            {
                path:"wishlist",
                element:<Wishlist></Wishlist>
            }
        ]
    },
    {
        path:"/adminpanel",
        element:<AdminLayout></AdminLayout>,
        children:[
            {
                index:true,
                element:<AdminPanel></AdminPanel>
            },
            {
                path:"/adminpanel/add",
                element:<Add></Add>
            },
        ]
    }
])