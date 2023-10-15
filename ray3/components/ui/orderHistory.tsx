import React, { useState } from 'react';

const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState('open');

  const handleTabClick = (tab: 'open' | 'history') => {
    setActiveTab(tab);
  };

  const orderHistoryStyles: React.CSSProperties = {
    background: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    width: '100%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)',
  };

  const orderHistoryContentStyles: React.CSSProperties = {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  };

  const contentStyles: React.CSSProperties = {
    background: 'rgba(0, 0, 0, 0.2)',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const buttonStyles: React.CSSProperties = {
    background: 'transparent',
    border: '1px solid white',
    color: 'white',
    padding: '5px 20px', // Augmentation de la marge horizontale
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.3s',
    marginRight: '10px', // Marge à droite entre les boutons
  };

  return (
    <div className="order-history" style={orderHistoryStyles}>
      <div className="order-history-tabs">
        <button
          onClick={() => handleTabClick('open')}
          className={`order-history-tab ${activeTab === 'open' ? 'active' : ''}`}
          style={buttonStyles}
        >
          Open Positions
        </button>
        <button
          onClick={() => handleTabClick('history')}
          className={`order-history-tab ${activeTab === 'history' ? 'active' : ''}`}
          style={buttonStyles}
        >
          Position History
        </button>
      </div>
      <div className="order-history-content" style={orderHistoryContentStyles}>
        {activeTab === 'open' && (
          <div className="open-positions" style={contentStyles}>
            No Open Position
          </div>
        )}
        {activeTab === 'history' && (
          <div className="position-history" style={contentStyles}>
            No Position History
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
