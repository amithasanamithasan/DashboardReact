import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Leaderboard from "../components/Leaderboard";
import Reports from "../components/Reports";
import Subscription from "../components/Subscription";

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
        path: "leaderboard",
        element: <Leaderboard />,
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
]); 