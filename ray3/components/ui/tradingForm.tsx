import React, { useState } from 'react';

const TradingForm = () => {
  const [position, setPosition] = useState<'long' | 'short'>('long'); // Par défaut, position long
  const [amount, setAmount] = useState(0);
  const [leverage, setLeverage] = useState(1);

  const handlePositionChange = (selectedPosition: 'long' | 'short') => {
    setPosition(selectedPosition);
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

    // Réinitialiser les valeurs d'amount et leverage à zéro (ou à leurs valeurs par défaut).
    setAmount(0);
    setLeverage(1);
  };

  // Calculer la taille de la position
  const positionSize = amount * leverage;

  return (
    <div className="trading-form">
      <div className="mb-10">
        <button
          onClick={() => handlePositionChange('long')}
          className={`w-24 h-10 ${position === 'long' ? 'bg-green-500' : 'bg-gray-300'} ml-3 mr-6`}
          style={{ color: 'white' }}
        >
          Long
        </button>
        <button
          onClick={() => handlePositionChange('short')}
          className={`w-24 h-10 ${position === 'short' ? 'bg-red-500' : 'bg-gray-300'}`}
          style={{ color: 'white' }}
        >
          Short
        </button>
      </div>
      <div className="mb-10">
        <label>Amount (USDT):</label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="w-full p-2"
          style={{
            color: 'black',
          }}
        />
      </div>
      <div className="mb-10 leverage-slider">
        <label>Leverage:</label>
        <input type="range" min="1" max="100" step="1" value={leverage} onChange={handleLeverageChange} className="w-full" />
        <span>{leverage}x</span>
      </div>
      <div className="mb-6">
        <label className="mr-3">Position Size:</label>
        <span>{positionSize} USDT</span>
      </div>
      <button onClick={executeOrder} className="w-full p-2 h-14 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold rounded mt-3">
        Place Order
      </button>
    </div>
  );
};

export default TradingForm;
