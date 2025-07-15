import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import TestCards from "./testCards";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="flex-1 p-6 bg-base-100">
      <div className="max-w-7xl mx-auto">
   
      <TestCards />
    
      </div>
    </div>
  );
};

export default Home; 