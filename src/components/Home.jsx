import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Banner from "./Banner";
import Footer from "./Footer";
import Booksall from "./Booksall";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className=" w-[1900px] h-[1200px] rounded-full bg-base-100">
      <Banner />
      <Booksall />
      <Footer />
    </div>
  );
};

export default Home;
