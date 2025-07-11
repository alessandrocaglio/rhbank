import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
