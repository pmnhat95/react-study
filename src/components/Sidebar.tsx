import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkStyle: React.CSSProperties = {
    display: 'block',
    padding: '12px 16px',
    borderRadius: 8,
    color: 'white',
    textDecoration: 'none',
    marginBottom: 8,
  };
  const activeStyle: React.CSSProperties = {
    backgroundColor: '#334155',
  };
  return (
    <nav>
      <h3 style={{ marginBottom: 16 }}>📚 Note App</h3>
      <NavLink to="/app" end style={({ isActive }) => ({
          ...linkStyle,
          ...(isActive ? activeStyle : {})
      })}>
        🏠 Trang chủ
      </NavLink>
      <NavLink to="/app/add" end style={({ isActive }) => ({
        ...linkStyle,
        ...(isActive ? activeStyle : {})
      })}>
        ➕ Thêm ghi chú
      </NavLink>
    </nav>
  );
}