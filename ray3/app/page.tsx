"use client";
import Image from 'next/image';
import Navbar from '../components/ui/navbar';
import '../styles/globals.css';
import Chart from '../components/chart';
import TradingBar from '../components/ui/tradingBar';
import React, { useState } from 'react';

interface TradingBarProps {
  selectedPair: string;
  price: number;
  percentChange: number;
  onUpdateData: (newPair: string, newPrice: number, newPercentChange: number) => void;
}

const Home: React.FC = () => {
  const [selectedPair, setSelectedPair] = useState('BTCUSDT'); // Par défaut, BTC/USDT
  const [price, setPrice] = useState(0);
  const [percentChange, setPercentChange] = useState(0);

  // Fonction pour mettre à jour les données en fonction de la paire sélectionnée
  const updateData = (newPair: string, newPrice: number, newPercentChange: number) => {
    setSelectedPair(newPair);
    setPrice(newPrice);
    setPercentChange(newPercentChange);
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <TradingBar
        selectedPair={selectedPair}
        price={price}
        percentChange={percentChange}
        onUpdateData={updateData}
      />
      <Chart selectedPair={selectedPair} />
    </div>
  );
};

export default Home;
