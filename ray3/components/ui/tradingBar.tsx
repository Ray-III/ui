"use clein"

import React, { useState, useEffect } from 'react';

interface TradingBarProps {
  selectedPair: string;
  price: number;
  percentChange: number;
  onUpdateData: (newPair: string, newPrice: number, newPercentChange: number) => void;
}

const TradingBar: React.FC<TradingBarProps> = ({ selectedPair, price, percentChange, onUpdateData }) => {
  const [newSelectedPair, setNewSelectedPair] = useState(selectedPair);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://api.binance.com/api/v3/ticker/24hr?symbol=${selectedPair}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        const newPrice = parseFloat(data.lastPrice);
        const newPercentChange = parseFloat(data.priceChangePercent);

        // Mettre à jour les données via la fonction onUpdateData
        onUpdateData(selectedPair, newPrice, newPercentChange);

        // Mettre à jour la paire sélectionnée
        setNewSelectedPair(selectedPair);
      } catch (error) {
        console.error('Erreur lors de la requête API :', error);
      }
    };

    if (selectedPair !== newSelectedPair) {
      fetchData();
    }
  }, [selectedPair, newSelectedPair, onUpdateData]);

  return (
    <div className="tradingBar">
      <select value={selectedPair} onChange={(e) => onUpdateData(e.target.value, price, percentChange)}>
        <option value="BTCUSDT">BTC/USDT</option>
        <option value="ETHUSDT">ETH/USDT</option>
        <option value="XRPUSDT">XRP/USDT</option>
        {/* Ajoutez d'autres options pour les différentes paires de cryptomonnaie au format PAIREUSDT */}
      </select>
      <div className="price">{price} USDT</div>
      <div className={`percent-change ${percentChange >= 0 ? 'positive' : 'negative'}`}>
        {percentChange}% (24h)
      </div>
    </div>
  );
};

export default TradingBar;
