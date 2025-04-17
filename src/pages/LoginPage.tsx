import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  onLoginSuccess: () => void
};

export default function LoginPage({ onLoginSuccess }: Props) {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin' && password === '123') {
      onLoginSuccess();
      navigate('/app');
    } else {
      setError('Sai tài khoản hoặc mật khẩu!');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f3f4f6',
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'white',
          padding: 32,
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          width: 320
        }}
      >
        <h2 style={{ marginBottom: 24, textAlign: 'center' }}>Đăng nhập</h2>

        <input
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 6,
            border: '1px solid #ccc',
            marginBottom: 12,
            boxSizing: 'border-box'
          }}
        />
        <input
          placeholder="Mật khẩu"
          type="password"
          value={password}
          onChange={(e) => setPassWord(e.target.value)}
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 6,
            border: '1px solid #ccc',
            marginBottom: 16,
            boxSizing: 'border-box'
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: 10,
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            fontWeight: 'bold'
          }}
        >
          Đăng nhập
        </button>

        {error && <p style={{ color: 'red', marginTop: 12 }}>{error}</p>}
      </form>
    </div>
  )
}