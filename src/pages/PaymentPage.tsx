import React, { useState } from 'react';

const PaymentPage: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentType, setPaymentType] = useState('instant');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      recipient,
      amount,
      paymentType,
    });
    // In a real application, this would send data to a backend service
    alert(`Sending ${amount} to ${recipient} via ${paymentType} payment.`);
  };

  return (
    <div className="card">
      <h2>Send Money</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="recipient">Recipient Account</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Enter recipient account"
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
            min="0.01"
            step="0.01"
          />
        </div>
        <div>
          <label>Payment Type</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="instant"
                checked={paymentType === 'instant'}
                onChange={(e) => setPaymentType(e.target.value)}
              />
              Instant
            </label>
            <label>
              <input
                type="radio"
                value="classic"
                checked={paymentType === 'classic'}
                onChange={(e) => setPaymentType(e.target.value)}
              />
              Classic
            </label>
          </div>
        </div>
        <button type="submit">Send Money</button>
      </form>
    </div>
  );
};

export default PaymentPage;
