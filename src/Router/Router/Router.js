import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import ErrorPage from "../../Pages/SharedPages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([

{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

        {
            path: '/',
            
            
        }
    ]
}


])