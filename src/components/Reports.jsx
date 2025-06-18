import React from "react";
import { BarChart3, TrendingUp, Calendar, Download } from "lucide-react";

const Reports = () => {
  const reportData = [
    {
      id: 1,
      title: "Monthly Performance Report",
      description: "Comprehensive analysis of your study performance and exam results",
      date: "2024-01-15",
      status: "completed",
      score: 87,
      subjects: ["Mathematics", "Physics", "Chemistry"]
    },
    {
      id: 2,
      title: "Weekly Progress Report",
      description: "Weekly summary of your learning progress and achievements",
      date: "2024-01-08",
      status: "completed",
      score: 92,
      subjects: ["Biology", "English"]
    },
    {
      id: 3,
      title: "Subject-wise Analysis",
      description: "Detailed breakdown of performance by subject area",
      date: "2024-01-01",
      status: "completed",
      score: 89,
      subjects: ["All Subjects"]
    },
    {
      id: 4,
      title: "Study Time Analysis",
      description: "Analysis of your study patterns and time management",
      date: "2023-12-25",
      status: "completed",
      score: 85,
      subjects: ["Time Management"]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-success text-success-content";
      case "pending":
        return "bg-warning text-warning-content";
      case "failed":
        return "bg-error text-error-content";
      default:
        return "bg-base-300 text-base-content";
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return "text-success";
    if (score >= 80) return "text-warning";
    if (score >= 70) return "text-info";
    return "text-error";
  };

  return (
    <div className="flex-1 p-6 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-base-content">Reports</h1>
          <button className="btn btn-primary gap-2">
            <Download className="w-4 h-4" />
            Export All
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-base-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-base-content/70">Total Reports</p>
                <p className="text-2xl font-bold text-base-content">24</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
          
          <div className="bg-base-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-base-content/70">Average Score</p>
                <p className="text-2xl font-bold text-base-content">88%</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
            </div>
          </div>
          
          <div className="bg-base-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-base-content/70">This Month</p>
                <p className="text-2xl font-bold text-base-content">4</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-warning" />
              </div>
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="bg-base-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-base-300">
            <h2 className="text-xl font-semibold text-base-content">Recent Reports</h2>
          </div>
          
          <div className="divide-y divide-base-300">
            {reportData.map((report) => (
              <div key={report.id} className="p-6 hover:bg-base-100 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-base-content">{report.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </div>
                    
                    <p className="text-base-content/70 mb-3">{report.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-base-content/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(report.date).toLocaleDateString()}
                      </span>
                      <span>Subjects: {report.subjects.join(", ")}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${getScoreColor(report.score)}`}>
                        {report.score}%
                      </p>
                      <p className="text-xs text-base-content/70">Score</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="btn btn-sm btn-outline">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="btn btn-sm btn-primary">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Generate New Report */}
        <div className="mt-6 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
          <h3 className="text-lg font-semibold text-base-content mb-2">Generate New Report</h3>
          <p className="text-base-content/70 mb-4">Create a custom report based on your specific needs and criteria.</p>
          
          <div className="flex gap-3">
            <button className="btn btn-primary">Generate Report</button>
            <button className="btn btn-outline">Schedule Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports; 