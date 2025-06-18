import React from "react";
import { Trophy, Medal, Award } from "lucide-react";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "Sarah Johnson", score: 98, subject: "Mathematics", avatar: "https://i.pravatar.cc/40?img=1" },
    { rank: 2, name: "Michael Chen", score: 96, subject: "Physics", avatar: "https://i.pravatar.cc/40?img=2" },
    { rank: 3, name: "Emily Davis", score: 94, subject: "Chemistry", avatar: "https://i.pravatar.cc/40?img=3" },
    { rank: 4, name: "David Wilson", score: 92, subject: "Biology", avatar: "https://i.pravatar.cc/40?img=4" },
    { rank: 5, name: "Lisa Brown", score: 90, subject: "English", avatar: "https://i.pravatar.cc/40?img=5" },
    { rank: 6, name: "James Smith", score: 88, subject: "History", avatar: "https://i.pravatar.cc/40?img=6" },
    { rank: 7, name: "Maria Garcia", score: 86, subject: "Geography", avatar: "https://i.pravatar.cc/40?img=7" },
    { rank: 8, name: "John Martinez", score: 84, subject: "Literature", avatar: "https://i.pravatar.cc/40?img=8" },
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-base-content/60">#{rank}</span>;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500";
      case 3:
        return "bg-gradient-to-r from-amber-500 to-amber-700";
      default:
        return "bg-base-200";
    }
  };

  return (
    <div className="flex-1 p-6 bg-base-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-base-content mb-6">Leaderboard</h1>
        
        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* 2nd Place */}
          <div className="order-2 md:order-1 flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full flex items-center justify-center mb-4">
              <img src="https://i.pravatar.cc/40?img=2" alt="2nd Place" className="w-16 h-16 rounded-full" />
            </div>
            <h3 className="font-semibold text-base-content">Michael Chen</h3>
            <p className="text-sm text-base-content/70">96 points</p>
            <div className="text-2xl font-bold text-gray-400 mt-2">🥈</div>
          </div>

          {/* 1st Place */}
          <div className="order-1 md:order-2 flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4">
              <img src="https://i.pravatar.cc/40?img=1" alt="1st Place" className="w-20 h-20 rounded-full" />
            </div>
            <h3 className="font-semibold text-base-content">Sarah Johnson</h3>
            <p className="text-sm text-base-content/70">98 points</p>
            <div className="text-2xl font-bold text-yellow-500 mt-2">👑</div>
          </div>

          {/* 3rd Place */}
          <div className="order-3 flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full flex items-center justify-center mb-4">
              <img src="https://i.pravatar.cc/40?img=3" alt="3rd Place" className="w-16 h-16 rounded-full" />
            </div>
            <h3 className="font-semibold text-base-content">Emily Davis</h3>
            <p className="text-sm text-base-content/70">94 points</p>
            <div className="text-2xl font-bold text-amber-600 mt-2">🥉</div>
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-base-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-base-300">
            <h2 className="text-xl font-semibold text-base-content">Full Rankings</h2>
          </div>
          
          <div className="divide-y divide-base-300">
            {leaderboardData.map((student, index) => (
              <div key={index} className="flex items-center gap-4 p-4 hover:bg-base-100 transition-colors">
                <div className="flex items-center justify-center w-12 h-12">
                  {getRankIcon(student.rank)}
                </div>
                
                <img 
                  src={student.avatar} 
                  alt={student.name} 
                  className="w-10 h-10 rounded-full"
                />
                
                <div className="flex-1">
                  <h3 className="font-medium text-base-content">{student.name}</h3>
                  <p className="text-sm text-base-content/70">{student.subject}</p>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-lg text-base-content">{student.score}</p>
                  <p className="text-xs text-base-content/70">points</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Position */}
        <div className="mt-6 bg-primary/10 p-4 rounded-lg border border-primary/20">
          <h3 className="font-semibold text-base-content mb-2">Your Position</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12">
              <span className="text-lg font-bold text-primary">#6</span>
            </div>
            <img 
              src="https://i.pravatar.cc/40?img=6" 
              alt="Your Avatar" 
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-medium text-base-content">James Smith</h3>
              <p className="text-sm text-base-content/70">History</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg text-primary">88</p>
              <p className="text-xs text-base-content/70">points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard; 