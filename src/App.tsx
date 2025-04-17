import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NoteDetailPage from './pages/NoteDetailPage';
import AddNotePage from './pages/AddNotePage';
import AppLayout from './layout/AppLayout';

import './styles/style.scss';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />}
        />

        {isAuthenticated ? (
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="add" element={<AddNotePage />} />
            <Route path="note/:id" element={<NoteDetailPage />} />
          </Route>
        ) : (
          <Route path="/app/*" element={<Navigate to="/login" replace />} />
        )}

        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? '/app' : '/login'} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
