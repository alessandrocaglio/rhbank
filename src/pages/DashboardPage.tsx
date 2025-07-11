import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Account Balance</h3>
        <p>$1,234.56</p>
      </div>
      <div>
        <button>Send Money</button>
        <button>Request Money</button>
      </div>
      <div>
        <h3>Transaction History</h3>
        <ul>
          <li>Sent $50 to John Doe</li>
          <li>Received $100 from Jane Smith</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
