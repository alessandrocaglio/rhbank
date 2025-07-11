import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <main>
      <div className="balance-section">
        <p>YOUR BALANCE</p>
        <span className="balance">$50.000</span>
      </div>
      <div className="transaction-section">
        <h2>RECENT TRANSACTIONS</h2>
        <ul className="transaction-list">
          <li>
            <div className="transaction-details">
              <span>Online Store</span>
              <span>- $100</span>
            </div>
            <span className="transaction-amount">- $100</span>
          </li>
          <li>
            <div className="transaction-details">
              <span>Online Payment</span>
              <span>- $200</span>
            </div>
            <span className="transaction-amount">- $200</span>
          </li>
          <li>
            <div className="transaction-details">
              <span>Salary</span>
              <span>+ $5.000</span>
            </div>
            <span className="transaction-amount">+ $5.000</span>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default DashboardPage;
