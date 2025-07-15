import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";

import Reports from "../components/Reports";
import Subscription from "../components/Subscription";
import Login from "../page/Login";
import Register from "../page/Ragister";
import Adminstration from "../components/Adminstration";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "adminstration",
        element:<Adminstration/>,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "subscription",
        element: <Subscription />,
      },
    ],
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  }
]); 