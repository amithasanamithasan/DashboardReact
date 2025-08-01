import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Home");

  // Route change হলে active page detect করো
  useEffect(() => {
    const path = location.pathname;
    if (path === "/" || path === "/home") {
      setActivePage("Home");
    } else if (path === "/leaderboard") {
      setActivePage("Leaderboard");
    } else if (path === "/reports") {
      setActivePage("Reports");
    } else if (path.startsWith("/updatebook")) {
      setActivePage("updatebook");
    }
  }, [location.pathname]);

  // Page Change Handler
  const handlePageChange = (pageName, id = null) => {
    setActivePage(pageName);

    switch (pageName) {
      case "Home":
        navigate("/");
        break;
      case "bookform":
        navigate("/bookform");
        break;
      case "booklist":
        navigate("/booklist");
        break;
      case "updatebook":
        if (id) {
          navigate(`/updatebook/${id}`);  
        } else {
          navigate("/updatebook");
        }
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
            <Outlet context={{ handlePageChange }} /> 
        
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
