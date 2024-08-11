import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Post from "../pages/Post";
import PrivateRoute from "../components/PrivateRoute";
import Login from "../pages/login";
import Register from "../pages/register";
import LogoutPage from "../pages/LogoutPage";
import UpdatePost from "../pages/UpdatePost";
import CreatePost from "../pages/createPost";


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
    {
        path: "/update/:id",
        element: <PrivateRoute element={UpdatePost} />,
    },
    {
        path: "createPost",
        element: <PrivateRoute element={CreatePost} />,
    },
  ]);

export default router;