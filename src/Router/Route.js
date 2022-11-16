import { createBrowserRouter } from "react-router-dom";
import About from "../Page/About/About";
import Appointment from "../Page/Appointment/Appointment";
import Home from "../Page/Home/Home";
import Reviews from "../Page/Reviews/Reviews";
import Contact from "../Page/Contact/Contact";
import Main from "./Main";
import Login from "../Page/Login/Login";
import Error from "../Page/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '*',
                element: <Error></Error>
            }

        ]
    }
]);

export default router;