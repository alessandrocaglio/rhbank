import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PaymentPage from '../pages/PaymentPage';

describe('PaymentPage', () => {
  test('renders payment form with default values', () => {
    render(<PaymentPage />);
    expect(screen.getByLabelText(/recipient account/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/amount/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/instant/i)).toBeChecked();
    expect(screen.getByLabelText(/classic/i)).not.toBeChecked();
    expect(screen.getByRole('button', { name: /send money/i })).toBeInTheDocument();
  });

  test('allows entering recipient and amount', () => {
    render(<PaymentPage />);
    const recipientInput = screen.getByLabelText(/recipient account/i);
    const amountInput = screen.getByLabelText(/amount/i);

    fireEvent.change(recipientInput, { target: { value: '12345' } });
    fireEvent.change(amountInput, { target: { value: '100.50' } });

    expect(recipientInput).toHaveValue('12345');
    expect(amountInput).toHaveValue(100.50);
  });

  test('allows changing payment type', () => {
    render(<PaymentPage />);
    const classicRadio = screen.getByLabelText(/classic/i);

    fireEvent.click(classicRadio);

    expect(classicRadio).toBeChecked();
    expect(screen.getByLabelText(/instant/i)).not.toBeChecked();
  });

  test('submits form with correct data', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<PaymentPage />);

    const recipientInput = screen.getByLabelText(/recipient account/i);
    const amountInput = screen.getByLabelText(/amount/i);
    const sendButton = screen.getByRole('button', { name: /send money/i });

    fireEvent.change(recipientInput, { target: { value: '98765' } });
    fireEvent.change(amountInput, { target: { value: '250' } });
    fireEvent.click(sendButton);

    expect(alertMock).toHaveBeenCalledWith('Sending 250 to 98765 via instant payment.');
    alertMock.mockRestore();
  });
});
