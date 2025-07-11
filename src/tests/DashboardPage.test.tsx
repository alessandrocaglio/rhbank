import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardPage from '../pages/DashboardPage';
import { ThemeProvider } from '../context/ThemeContext';

// Mock react-router-dom's useLocation and useNavigate globally via setupTests.ts
const mockedUseLocation = jest.fn();

describe('DashboardPage', () => {
  test('renders dashboard content', () => {
    mockedUseLocation.mockReturnValue({ pathname: '/dashboard' });
    render(
      <ThemeProvider>
        <DashboardPage />
      </ThemeProvider>
    );
    expect(screen.getByText('YOUR BALANCE')).toBeInTheDocument();
    expect(screen.getByText('$50.000')).toBeInTheDocument();
    expect(screen.getByText('RECENT TRANSACTIONS')).toBeInTheDocument();
    expect(screen.getByText('Online Store')).toBeInTheDocument();
    expect(screen.getByText('Online Payment')).toBeInTheDocument();
    expect(screen.getByText('Salary')).toBeInTheDocument();
  });
});
