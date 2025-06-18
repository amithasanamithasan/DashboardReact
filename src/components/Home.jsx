import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="flex-1 p-6 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-base-content mb-6">Welcome to Exam AI Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-base-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-base-content/70">Total Exams</p>
                <p className="text-2xl font-bold text-base-content">156</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary text-xl">📚</span>
              </div>
            </div>
          </div>
          
          <div className="bg-base-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-base-content/70">Average Score</p>
                <p className="text-2xl font-bold text-base-content">87%</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <span className="text-success text-xl">📊</span>
              </div>
            </div>
          </div>
          
          <div className="bg-base-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-base-content/70">Study Hours</p>
                <p className="text-2xl font-bold text-base-content">42h</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <span className="text-warning text-xl">⏰</span>
              </div>
            </div>
          </div>
          
          <div className="bg-base-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-base-content/70">Streak Days</p>
                <p className="text-2xl font-bold text-base-content">15</p>
              </div>
              <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center">
                <span className="text-error text-xl">🔥</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-base-200 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-base-content mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-base-100 rounded-lg">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary">📝</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-base-content">Completed Math Quiz</p>
                <p className="text-sm text-base-content/70">Score: 92% • 2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-base-100 rounded-lg">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                <span className="text-success">📖</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-base-content">Started Science Module</p>
                <p className="text-sm text-base-content/70">Progress: 25% • 4 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-base-100 rounded-lg">
              <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center">
                <span className="text-warning">🎯</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-base-content">Set Study Goal</p>
                <p className="text-sm text-base-content/70">Target: 2 hours daily • Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 