import React from "react";
import  ReactDOM from "react-dom/client";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<Error></Error>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('../cards.json')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);