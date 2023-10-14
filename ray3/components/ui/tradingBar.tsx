"use clien"

import React, { useState, useEffect } from 'react';

interface TradingBarProps {
  selectedPair: string; // Ajoutez cette propriété
  price: number;
  percentChange: number;
  onUpdateData: (newPair: string, newPrice: number, newPercentChange: number) => void;
}

const TradingBar: React.FC<TradingBarProps> = ({ selectedPair, price, percentChange, onUpdateData }) => {
  const [internalSelectedPair, setInternalSelectedPair] = useState(selectedPair);

  useEffect(() => {
    // Effectuez une requête API pour obtenir les données en fonction de selectedPair
    const fetchData = async () => {
      try {
        const apiUrl = `https://api.binance.com/api/v3/ticker/24hr?symbol=${internalSelectedPair}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        onUpdateData(internalSelectedPair, parseFloat(data.lastPrice), parseFloat(data.priceChangePercent));
      } catch (error) {
        console.error('Erreur lors de la requête API :', error);
      }
    };

    fetchData();
  }, [internalSelectedPair, onUpdateData]);

  return (
    <div className="bg-black text-white p-4 flex items-center justify-between">
      <select
        value={internalSelectedPair}
        onChange={(e) => setInternalSelectedPair(e.target.value)}
        className="bg-black text-white border border-white p-2 rounded"
      >
        <option value="BTCUSDT">BTC/USDT</option>
        <option value="ETHUSDT">ETH/USDT</option>
        {/* Ajoutez d'autres options pour les différentes paires de cryptomonnaie */}
      </select>
      <div className="text-lg">
        {price} USDT
      </div>
      <div className={`text-lg ${percentChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {percentChange}% (24h)
      </div>
    </div>
  );
};

export default TradingBar;
