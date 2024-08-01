import { createBrowserRouter, } from "react-router-dom";
import Home from "../pages/Home";
import Post from "../pages/Post";
// import App from "../App";

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <App />,
    // },
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/post/:id",
        element: <Post />,
      },
  ]);

export default router;