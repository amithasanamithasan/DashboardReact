import img1 from "../assets/Frame 707.png";
import img2 from "../assets/Frame 712.png";
import img3 from "../assets/Frame 713.png";
import { useTheme } from "../contexts/ThemeContext";
import ExamStartSection from "./ExamStartSection";


const testCards = [
  {
    title: "Speaking Test",
    subtitle: "Start your",
    Image: img1,
  },
  {
    title: "Listening Test",
    subtitle: "Start your",
    Image: img2,
  },
  {
    title: "Writting Test",
    subtitle: "Start your",
    Image: img3,
  },
];

const TestCards = () => {
  const { theme } = useTheme();

  return (
    <div>

    <div className="flex gap-6  justify-center py-8 flex-wrap">
      {testCards.map((card, index) => (
          <div
          key={index}
          className={`flex items-center gap-0 px-6 py-4 rounded-2xl w-80 transition-all duration-300
            ${
        theme === "dark"
        ? `bg-[#1c162e] text-purple-200 ${
            index === 0
            ? "shadow-[0_0_15px_2px_rgba(147,51,234,0.5)]  outline-purple-500"
            : ""
            }`
            : `bg-white text-black ${index === 0 ? "shadow-md" : ""}`
        }
        `}
        >
          <img src={card.Image} alt={card.title} className="w-20 h-20" />
          <div>
            <p className="text-sm text-gray-800 dark:text-purple-300">
              {card.subtitle}
            </p>
            <p className="font-bold text-2xl">{card.title}</p>
          </div>
        </div>
      ))}
    </div>
    <ExamStartSection/>
      </div>
      
    
  );
};

export default TestCards;
