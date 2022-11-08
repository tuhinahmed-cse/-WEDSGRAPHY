import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import Services from "../../Pages/Services/Services";
import ErrorPage from "../../Pages/SharedPages/ErrorPage/ErrorPage";
import Slider from "../../Pages/Slider/Slider";

export const router = createBrowserRouter([

{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/services',
            element:<Services></Services> 
        },

        {
            path: '/blog',
            element:<Blog></Blog>
        },

        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        }
    ]
}


])