import React from "react";
import wave from "../assets/Frame.png";
import { useTheme } from "../contexts/ThemeContext";

const ExamStartSection = () => {
  const { theme } = useTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20  py-10 space-y-10 text-center">

      <h1 className={`text-3xl sm:text-4xl font-bold ${textColor}`}>
        Ready For Exam Today?
      </h1>


      <div className="flex justify-center ml-29">
        <img src={wave} alt="waveform" className="w-full max-w-[500px]" />
      </div>

    
      <div className="space-y-4 ">
        <p className={`text-sm ${textColor}`}>
          Hey! How are you today? Let’s Start your exam!
        </p>
        <div className="flex  sm:flex-row justify-center gap-4">
          <button className="bg-[#1B1433] text-white font-semibold px-6 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition">
            Yes, Let’s Start!
          </button>
          <button className="bg-[#A78BFA] text-white font-semibold px-6 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition">
            Will Try Later
          </button>
        </div>
      </div>

      {/* Divider Section */}
      <div className="space-y-2 text-center  sm:text-left sm:pl-10">
        <p className={`text-sm ${textColor} -ml-10`}>
          Hey! how are you today? Let’s Start your exam!
        </p>
        <p className="text-[#A78BFA] text-sm -ml-63">Will Try Later</p>
        <hr className="border-t border-gray-300 w-1/3 mx-auto sm:ml-10 sm:mr-auto" />
      </div>

     
      <div className="space-y-4 text-center sm:text-left sm:pl-10">
        <p className={`text-sm ${textColor} ml-18`}>
          You can try the practice session also, what test are you trying to take?
        </p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 ml-17">
          <button className="bg-[#1B1433] text-white font-medium px-6 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition">
            Speaking Test
          </button>
          <button className="bg-[#A78BFA] text-white font-medium px-6 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition">
            Listening Test
          </button>
          <button className="bg-[#A78BFA] text-white font-medium px-6 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition">
            Writing Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamStartSection;
