import { useState } from "react"

export function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="card">
      <div className="flex gap-5">
        {isLoggedIn ? '👋 Xin chào Nhật' : '🔒 Vui lòng đăng nhập'}
      </div>
      <div className="flex gap-5">
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{ isLoggedIn ? 'Logout' : 'Login'}</button>
      </div>
    </div>
  )
}