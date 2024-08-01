import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Post from "../pages/Post";
// import App from "../App";
import PrivateRoute from "../components/PrivateRoute";
import Login from "../pages/login";


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
      element: <PrivateRoute element={<Home />} /> ,
    },
    {
        path: "/post/:id",
        element: <PrivateRoute element={<Post />} />,
      },
  ]);

export default router;