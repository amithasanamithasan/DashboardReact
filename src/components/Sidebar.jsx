import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BarChart2,
  FileText,
  NotebookText,
  ArrowRightToLineIcon,
  ArrowLeftToLineIcon,
} from "lucide-react";

const Sidebar = ({ onPageChange, activePage }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", icon: <Home size={18} />, path: "/" },
    { name: "Adminstration", icon: <BarChart2 size={18} />, path: "/adminstration" },
    { name: "Reports", icon: <FileText size={18} />, path: "/reports" },
    { name: "Subscription", icon: <NotebookText size={18} />, path: "/subscription" },
  ];

  const handleItemClick = (itemName) => {
    onPageChange(itemName);
  };

  const isActiveRoute = (path) => {
    if (path === "/") {
      return location.pathname === "/" || location.pathname === "/home";
    }
    return location.pathname === path;
  };

  return (
    <div
    className={`relative flex flex-col justify-between bg-base-200 border-r border-base-300 shadow-sm min-h-screen transition-all duration-300 ${
      collapsed ? "w-20" : "w-64"
    } ${
  
      window.innerWidth < 768 ? (collapsed ? "hidden" : "w-full fixed z-50") : ""
    }`}
  >
      
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-10 top-100 z-10 border border-base-300 rounded-full shadow-md p-2 bg-base-100 hover:bg-base-200 transition-colors"
      >
        {collapsed ? (
          <ArrowRightToLineIcon className="text-primary w-5 h-5" />
        ) : (
          <ArrowLeftToLineIcon className="text-primary w-5 h-5" />
        )}
      </button>

      {/* Top section */}
      <div>
        <nav className="mt-4 flex flex-col gap-1 px-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => handleItemClick(item.name)}
              className={`flex items-center gap-3 text-base-content px-4 py-2 rounded-lg cursor-pointer hover:bg-base-300 transition-colors ${
                isActiveRoute(item.path) ? "bg-primary text-primary-content" : ""
              }`}
            >
              {item.icon}
              {!collapsed && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col items-center gap-4 px-4 py-4">
        {!collapsed && (
          <div className="text-center text-xs text-base-content/70">
            <p className="font-bold text-base-content">New to Exam AI?</p>
            <p className="text-[11px] mb-2">Learn How Exam AI Works</p>
            <button className="bg-primary text-primary-content text-xs px-4 py-1.5 rounded-full hover:bg-primary/90 transition-colors">
              View Tutorial
            </button>
          </div>
        )}

        {/* User */}
        <div
          className={`flex items-center justify-between gap-2 w-full px-2 py-2 rounded-full border border-base-300 cursor-pointer hover:bg-base-300 transition-colors ${
            collapsed && "justify-center"
          }`}
        >
          <img
            src="https://i.pravatar.cc/30"
            alt="User"
            className="w-7 h-7 rounded-full"
          />
          {!collapsed && (
            <>
              <span className="text-sm font-medium text-base-content">James Smith</span>
              <ArrowRightToLineIcon size={20} className="text-base-content/60" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
