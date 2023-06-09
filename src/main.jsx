import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../src/pages/Homepage/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import WorkOutVideo from "../src/pages/WorkOut/WorkOutVideo";
import Login from "../src/pages/LoginPage/LoginPage";
import Signup from "../src/pages/SignUpPage/SignUpPage";
import Dashboard from "../src/pages/DashBoardPage/DashBoardPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Recipes from "./pages/Recipes/Recipes";
import Recipe from "./pages/Recipes/Recipe-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/workout-videos",
    element: <WorkOutVideo />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/recipes",
    element: <Recipes />,
  },
  {
    path: "/recipes/:name",
    element: <Recipe />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
