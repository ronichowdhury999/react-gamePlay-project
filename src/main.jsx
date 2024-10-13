import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import GameCardDetails from "./Components/GameCardDetails/GameCardDetails";
import Contact from "./Components/Contacts/Contact";
import Roots from "./Roots/Roots";
import Home from "./Pages/Home/Home";
import Error from "./Pages/ErrorPages/Error";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import PrivaiteRoute from "./PrivateRoute/PrivaiteRoute";
import AuthProvider from "./Firebase/AuthProvider";
import About from "./Pages/Abouts/About";

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