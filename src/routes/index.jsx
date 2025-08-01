import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Login from "../page/Login";
import Register from "../page/Ragister";
import PrivateRoute from "../routes/PrivateRoute";
import BookList from "../components/BookList";

import BookForm from "../components/BookForm";
import UpdateBook from "../components/UpdateBook";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "home",
        element: <PrivateRoute><Home/></PrivateRoute>,
      },
      {
        path: "bookform",
        element:<BookForm/>,
      },
      {
        path: "booklist",
        element: <BookList/>,
      },
     {
        path: "updatebook/:id", 
        element: <UpdateBook/>
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