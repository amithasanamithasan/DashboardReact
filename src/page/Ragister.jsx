import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import signUp from "../assets/Animation - 1750714745318.json";
import SocialLogin from "../components/SocialLogin";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullname = form.fullname.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ fullname, email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-100 to-purple-100 flex items-center justify-center p-6">
      <div className="flex lg:flex-row max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
      
        <div className="lg:w-1/2 flex flex-col items-center justify-center p-10 bg-gradient-to-r from-cyan-200 to-purple-200">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700 mb-6 text-center">
       
          </h1>
          <Lottie animationData={signUp} loop={true} className="w-full max-w-md" />
        </div>

        
        <div className="lg:w-1/2 p-10">
          <form onSubmit={handleRegister} className="space-y-6">

            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-600">
                Full Name<span className="text-amber-700"> *</span>
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter your Name"
                required
                className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                           bg-white text-black dark:bg-gray-700 dark:text-white 
                           focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-600">
                Email<span className="text-amber-700"> *</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                           bg-white text-black dark:bg-gray-700 dark:text-white 
                           focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

          
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-600">
                Password<span className="text-amber-700"> *</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your Password"
                  required
                  className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                             bg-white text-black dark:bg-gray-700 dark:text-white 
                             focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <span
                  className="absolute top-6 right-3 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye className="text-xl" /> : <FaEyeSlash className="text-xl" />}
                </span>
              </div>
            </div>

          
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-violet-300 text-white py-3 rounded-full text-lg font-semibold transition duration-300"
              >
                Sign Up
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
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-500 font-semibold underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
