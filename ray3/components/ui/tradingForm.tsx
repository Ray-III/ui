import React, { useState } from 'react';

const TradingForm = () => {
  const [position, setPosition] = useState('long'); // Par défaut, position long
  const [amount, setAmount] = useState(0);
  const [leverage, setLeverage] = useState(1);

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value)); // Assurez-vous de convertir la valeur en nombre
  };

  const handleLeverageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeverage(parseFloat(e.target.value)); // Assurez-vous de convertir la valeur en nombre
  };

  const executeOrder = () => {
    // Logique pour exécuter l'ordre en fonction des valeurs de position, amount et leverage.
    console.log('Ordre exécuté :', position, amount, leverage);
  };

  return (
    <div className="trading-form">
      <div className="mb-10">
        <label>Position:</label>
        <select
          value={position}
          onChange={handlePositionChange}
          className="w-full p-2"
          style={{
            color: position === 'long' ? 'green' : 'red', // Couleur différente pour Long et Short
          }}
        >
          <option value="long" style={{ color: 'green' }}>
            Long
          </option>
          <option value="short" style={{ color: 'red' }}>
            Short
          </option>
        </select>
      </div>
      <div className="mb-10">
        <label>Amount (USD):</label>
        <input type="number" value={amount} onChange={handleAmountChange} className="w-full p-2" />
      </div>
      <div className="mb-10 leverage-slider">
        <label>Leverage:</label>
        <input type="range" min="1" max="100" step="1" value={leverage} onChange={handleLeverageChange} className="w-full" />
        <span>{leverage}x</span>
      </div>
      <button onClick={executeOrder} className="w-full p-2 bg-blue-500 text-white font-bold rounded mt-3">
        Execute Order
      </button>
    </div>
  );
};

export default TradingForm;
