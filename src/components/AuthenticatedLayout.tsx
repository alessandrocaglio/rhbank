import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import AppHeader from './AppHeader';
import BottomNav from './BottomNav';

const AuthenticatedLayout: React.FC = () => {
  const location = useLocation();

  // In a real application, you would check actual authentication state here.
  // For now, we assume if the path is not /login, it's an authenticated section.
  if (location.pathname === '/login') {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <AppHeader />
      <main>
        <Outlet /> {/* This is where nested routes will render */}
      </main>
      <BottomNav />
    </>
  );
};

export default AuthenticatedLayout;
