import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PaymentPage from './pages/PaymentPage';
import { ThemeProvider } from './context/ThemeContext';
import AppHeader from './components/AppHeader';
import BottomNav from './components/BottomNav';
import './App.css';

function App() {
  return (
    <Router basename="/rhbank">
      <ThemeProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={
              <>
                <AppHeader />
                <main>
                  <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/payments" element={<PaymentPage />} />
                  </Routes>
                </main>
                <BottomNav />
              </>
            } />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
