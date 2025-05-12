import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";

export default function AppLayout() {
  const { theme, toggle } = useTheme();
  
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== theme) {
      toggle();
    }
  };
  
  return (
    <div style={{ 
      display: 'flex',
      height: '100vh', 
      backgroundColor: theme === 'dark' ? '#0f172a' : '#f8fafc',
      color: theme === 'dark' ? '#bb86fc' : '#000', }}>
      {/* Sidebar */}
      <div style={{ width: 220, background: theme === 'dark' ? '#000': '#939ba4', padding: 16, position: "relative" }}>
        <Sidebar />
        <select 
          value={theme} 
          onChange={handleThemeChange}
          style={{ marginTop: 16, padding: 4, borderRadius: 4, width: 'inherit', position: "absolute", bottom: 15 }}
        >
          <option value="light">🌞 Light Theme</option>
          <option value="dark">🌚 Dark Theme</option>
        </select>
      </div>
      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: theme === 'dark' ? '#181717': 'white' }}>
        {/* Navbar */}
        <div style={{ height: 60, borderBottom: '1px solid #ddd', padding: '0 20px', display: 'flex', alignItems: 'center' }}>
          <Navbar />
        </div>

        {/* Page content */}
        <div style={{ flex: 1, padding: 20, overflowY: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}