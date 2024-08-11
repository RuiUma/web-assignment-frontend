import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Post from "../pages/Post";
import PrivateRoute from "../components/PrivateRoute";
import Login from "../pages/login";
import Register from "../pages/register";
import LogoutPage from "../pages/LogoutPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/home" replace />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
      path: "/home",
      element: <PrivateRoute element={Home} /> ,
    },
    {
        path: "/post/:id",
        element: <PrivateRoute element={Post} />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/logout",
        element: <LogoutPage />,
    },
  ]);

export default router;