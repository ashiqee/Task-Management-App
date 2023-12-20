import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signUp',
        element: <SignUp />
    }
]);
export default router;