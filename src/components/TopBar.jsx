import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoPersonAdd } from "react-icons/go";
import { useTheme } from "../contexts/ThemeContext";

import img from "../assets/logo.png";
import { Tally1 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { FaRegRegistered } from "react-icons/fa";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();


  const buttonClasses = `
    ${theme === 'light' ? 'bg-primary text-primary-content' : 'bg-white text-gray-900'}
    hover:bg-opacity-90 
    text-sm px-4 py-1.5 rounded-full flex items-center gap-2 transition-colors
    border
    ${theme === 'light' ? 'border-primary' : 'border-gray-200'}
  `;

  // Determine icon color based on theme
  const iconColorClass = theme === 'light' ? 'text-primary-content' : 'text-gray-800';


  return (
    
    <div className="h-16 w-full flex items-center justify-between px-6 py-2 shadow-sm border-b border-base-300 bg-base-100 transition-colors duration-300">
      <img className="w-15 h-15" src={img} alt="Logo" />

      <div className="flex items-center gap-4">
      <NavLink to="/login"
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
        <IoMdLogIn></IoMdLogIn>Login</NavLink>
        <NavLink to="/register"
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
          <FaRegRegistered></FaRegRegistered>Register</NavLink>
        <IoNotificationsOutline className="w-5 h-5 text-base-content cursor-pointer hover:text-primary transition-colors" />
     
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
          className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]"
        />
        <Tally1 size={30} strokeWidth={0.5} />
     
        <button className={buttonClasses}>
          <GoPersonAdd className={`w-4 h-4 ${iconColorClass}`} />
          Invite Friends
        </button>
      </div>
    </div>
  );
};

export default TopBar;