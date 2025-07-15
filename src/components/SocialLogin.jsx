import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";


import axios from "axios";

const SocialLogin = () => {
  
  const handelGoogleSginIn = () => {
  
  };

  const handleFacebookSignIn = () => {
 
  };

  return (
    <div className="px-4 flex flex-col md:flex-row gap-4">
      <button
        onClick={handelGoogleSginIn}
        className="flex-1 flex items-center justify-center gap-3 py-2 px-4 border border-cyan-400 rounded-full transition duration-300 hover:bg-cyan-100"
      >
        <FcGoogle className="text-2xl" />
        <span className="text-lg font-semibold text-black">
          Sign in with Google
        </span>
      </button>

      <button
        onClick={handleFacebookSignIn}
        className="flex-1 flex items-center justify-center gap-3 py-2 px-4 border border-cyan-400 rounded-full transition duration-300 hover:bg-cyan-100"
      >
        <FaFacebookSquare className="text-2xl text-blue-500" />
        <span className="text-lg font-semibold text-black">
          Sign in with Facebook
        </span>
      </button>
    </div>
  );
};

export default SocialLogin;
