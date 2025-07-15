import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import signIn from "../assets/Animation - 1721163735130.json";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { TbFidgetSpinner } from "react-icons/tb";
import SocialLogin from "../components/SocialLogin";



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading , setLoading]=useState();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  console.log({email,password})
  
   
      
  };


  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-100 to-purple-100 flex items-center justify-center p-6">
      <div className="flex  lg:flex-row  max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
     
        <div className="lg:w-1/2 flex flex-col items-center justify-center p-10 bg-gradient-to-r from-cyan-200 to-purple-200">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700 mb-6 text-center">
            
          </h1>
          <Lottie animationData={signIn} loop={true} className="w-full max-w-md" />
        </div>
      
        <div className="lg:w-1/2 p-10">
          <form onSubmit={handleLogin} className="space-y-6">
         
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className=" w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  required
                  className=" w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <span
                  className="absolute top-6 right-1 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye className="text-xl" /> : <FaEyeSlash className="text-xl" />}
                </span>
              </div>
            </div>
            <div>
            <button
              type="submit"
                disabled={loading}
                  className={`w-full sm:w-[150px] bg-gradient-to-r from-teal-500 to-violet-300 text-white py-3 rounded-full text-lg font-semibold transition duration-300 hover:opacity-90 ${
                   loading && "opacity-70 cursor-not-allowed"
                    }`}
                       >
                    {loading ? <TbFidgetSpinner className="animate-spin mx-auto text-2xl" /> : "Log In"}
          </button>
            </div>
          </form>
        <div className="text-right mt-2">
          <a href="#" className="text-sm text-cyan-500 hover:underline">
             Forgot password?
          </a>
        </div>
          
          <div className="my-6 text-center text-gray-500">— OR —</div>
           <SocialLogin />
           <p className="text-center text-sm text-gray-400 py-3">
              Don't have an account?{" "}
             <Link to="/register" className="text-cyan-500  font-semibold underline">
               Sign up
            </Link>
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
