import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: 220, background: '#1e293b', color: 'white', padding: 16 }}>
        <Sidebar />
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
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