import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PaymentPage from './pages/PaymentPage';
import { ThemeProvider } from './context/ThemeContext';
import AppHeader from './components/AppHeader';
import BottomNav from './components/BottomNav';
import AuthenticatedLayout from './components/AuthenticatedLayout';
import './App.css';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route element={<AuthenticatedLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/payments" element={<PaymentPage />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
