"use client";

import Image from 'next/image';
import Navbar from '../components/ui/navbar';
import '../styles/globals.css';
import Chart from '../components/chart';
import TradingBar from '../components/ui/tradingBar';
import TradingForm from '../components/ui/tradingForm';
import React, { useState } from 'react';
import Footer from '../components/ui/footer'; 

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
    <div className="flex flex-col bg-[#131722]">
      <Navbar />
      <TradingBar
        selectedPair={selectedPair}
        price={price}
        percentChange={percentChange}
        onUpdateData={updateData}
      />
      <div className="flex p-4 mb-6">
        <Chart selectedPair={selectedPair} />
        <TradingForm />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;