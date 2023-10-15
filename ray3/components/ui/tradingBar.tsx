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
  const [volume, setVolume] = useState(0);
  const [fundingRate, setFundingRate] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://api.binance.com/api/v3/ticker/24hr?symbol=${internalSelectedPair}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        onUpdateData(internalSelectedPair, parseFloat(data.lastPrice), parseFloat(data.priceChangePercent));

        // Obtenir le volume et le funding rate
        setVolume(parseFloat(data.volume));
        // Assurez-vous de rechercher la clé appropriée pour le funding rate dans la réponse de l'API.
        setFundingRate(parseFloat(data.fundingRate));
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
        className="bg-black text-white border border-white p-2 rounded w-50"
      >
        <option value="BTCUSDT">BTC/USDT</option>
        <option value="XTZUSDT">XTZ/USDT</option>
        {/* Ajoutez d'autres options pour les différentes paires de cryptomonnaie */}
      </select>
      <div className="text-lg">
        {price} USDT
      </div>
      <div className={`text-lg ${percentChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {percentChange}% (24h)
      </div>
      <div className="text-lg">
        Volume: {volume}
      </div>
      <div className="text-lg">
        Funding Rate: XXXX
      </div>
    </div>
  );
};


export default TradingBar;