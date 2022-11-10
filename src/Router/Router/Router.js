import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AddNewService from "../../Pages/AddNewService/AddNewService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import ReviewAdd from "../../Pages/Reviews/ReviewAdd";
import Reviews from "../../Pages/Reviews/Reviews";
import AllServices from "../../Pages/Services/AllServices";
import Services from "../../Pages/Services/Services";
import ServicesDetails from "../../Pages/ServicesDetails/ServicesDetails";
import ErrorPage from "../../Pages/SharedPages/ErrorPage/ErrorPage";
import EditReview from "../../Pages/UserReviews/EditReview/EditReview";
import UserReviews from "../../Pages/UserReviews/UserReviews";
import PrivateRouter from "../PrivateRouter/PrivateRouter"



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
            path: '/allServices',
            element:<AllServices></AllServices> 
        },
        {
            path: '/newService',
            element:<PrivateRouter><AddNewService></AddNewService></PrivateRouter>
        },

        {
            path: '/reviews/:id',
            element: <PrivateRouter><Reviews></Reviews></PrivateRouter>,
            loader: ({params})=> fetch(`https://b6a11-service-review-server-side-one-zeta.vercel.app/reviews/${params.id}`)
        },
        {
            path: '/newReview/',
            element:<PrivateRouter><ReviewAdd></ReviewAdd></PrivateRouter>,
            
        },

        {
            path: '/serviceDetails/:id',
            element: <ServicesDetails></ServicesDetails>,
            loader: ({params})=> fetch(`https://b6a11-service-review-server-side-one-zeta.vercel.app/allServices/${params.id}`)
          },

          {
            path: '/myreviews',
            element:<PrivateRouter><UserReviews></UserReviews></PrivateRouter> 
        },
          {
            path: '/editreview/:id',
            element:<PrivateRouter><EditReview></EditReview></PrivateRouter> 
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