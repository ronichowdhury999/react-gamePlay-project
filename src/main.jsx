import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Roots from "./Components/Roots/Roots";
import Home from "./Components/Home/Home";
import Error from "./Components/ErrorPages/Error";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import AuthProvider from "./Components/Firebase/AuthProvider";
import PrivaiteRoute from "./Components/PrivateRoute/PrivaiteRoute";
import GameCardDetails from "./Components/GameCardDetails/GameCardDetails";
import About from "./Components/Abouts/About";
import Contact from "./Components/Contacts/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../cards.json')
      },
      {
         path:'/about',
         element: <About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path: '/gameCardShow/:id',
        element: <PrivaiteRoute>
          <GameCardDetails></GameCardDetails>
        </PrivaiteRoute>,
        loader: () => fetch('../cards.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);