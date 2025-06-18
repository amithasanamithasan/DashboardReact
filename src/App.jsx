import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import { ThemeProvider } from './contexts/ThemeContext'

import './App.css'

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Home");

  // Update active page based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/" || path === "/home") {
      setActivePage("Home");
    } else if (path === "/leaderboard") {
      setActivePage("Leaderboard");
    } else if (path === "/reports") {
      setActivePage("Reports");
    } else if (path === "/subscription") {
      setActivePage("Subscription");
    }
  }, [location.pathname]);

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
    
    // Navigate to the corresponding route
    switch (pageName) {
      case "Home":
        navigate("/");
        break;
      case "Leaderboard":
        navigate("/leaderboard");
        break;
      case "Reports":
        navigate("/reports");
        break;
      case "Subscription":
        navigate("/subscription");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-base-100 transition-colors duration-300">
        <TopBar />
        <div className="flex">
          <Sidebar onPageChange={handlePageChange} activePage={activePage} />
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
