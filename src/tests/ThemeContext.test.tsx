import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

describe('ThemeContext', () => {
  test('provides theme and toggle function', () => {
    let currentTheme: string = '';
    let toggleFn: () => void = () => {};

    const TestComponent = () => {
      const { theme, toggleTheme } = useTheme();
      currentTheme = theme;
      toggleFn = toggleTheme;
      return (
        <div>
          <span>Current Theme: {theme}</span>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      );
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Initial theme should be light
    expect(screen.getByText('Current Theme: light')).toBeInTheDocument();
    expect(currentTheme).toBe('light');

    // Toggle theme to dark
    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(screen.getByText('Current Theme: dark')).toBeInTheDocument();
    expect(currentTheme).toBe('dark');

    // Toggle theme back to light
    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(screen.getByText('Current Theme: light')).toBeInTheDocument();
    expect(currentTheme).toBe('light');
  });
});
