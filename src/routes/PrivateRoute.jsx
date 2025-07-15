import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const location =useLocation();
    // condition using
    // user thakle amra children e patia dibo 
    // r user jodi na thake tahole login e patea dibo 
  
    return <Navigate to="/login" state={{from:location}}replace></Navigate>
        
};

export default PrivateRoute;