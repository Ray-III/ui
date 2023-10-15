"use client";

import Image from 'next/image';
import Navbar from '../components/ui/navbar';
import '../styles/globals.css';
import Chart from '../components/chart';
import TradingBar from '../components/ui/tradingBar';
import TradingForm from '../components/ui/tradingForm';
import React, { useState } from 'react';
import Footer from '../components/ui/footer'; 

import { TezosToolkit } from "@taquito/taquito";
import ConnectButton from "../components/ConnectWallet";
import DisconnectButton from "../components/DisconnectWallet";
import qrcode from "qrcode-generator";
import UpdateContract from "../components/UpdateContract";
import Transfers from "../components/Transfers";
import OrderHistory from '../components/ui/orderHistory';

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

  const [Tezos, setTezos] = useState<TezosToolkit>(
    new TezosToolkit("https://ghostnet.ecadinfra.com")
  );
  const [contract, setContract] = useState<any>(undefined);
  const [publicToken, setPublicToken] = useState<string | null>(null);
  const [wallet, setWallet] = useState<any>(null);
  const [userAddress, setUserAddress] = useState<string>("");
  const [userBalance, setUserBalance] = useState<number>(0);
  const [storage, setStorage] = useState<number>(0);
  const [copiedPublicToken, setCopiedPublicToken] = useState<boolean>(false);
  const [beaconConnection, setBeaconConnection] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("transfer");

  // Fonction pour mettre à jour les données en fonction de la paire sélectionnée
  const updateData = (newPair: string, newPrice: number, newPercentChange: number) => {
    setSelectedPair(newPair);
    setPrice(newPrice);
    setPercentChange(newPercentChange);
  };

  // Ghostnet Increment/Decrement contract
  const contractAddress: string = "KT1QMGSLynvwwSfGbaiJ8gzWHibTCweCGcu8";

  const generateQrCode = (): { __html: string } => {
    const qr = qrcode(0, "L");
    qr.addData(publicToken || "");
    qr.make();

    return { __html: qr.createImgTag(4) };
  };

  return (
    <div className="flex flex-col bg-[#131722]">
      <Navbar 
        Tezos={Tezos}
        setTezos={setTezos}
        setContract={setContract}
        setPublicToken={setPublicToken}
        setWallet={setWallet}
        setUserAddress={setUserAddress}
        setUserBalance={setUserBalance}
        setStorage={setStorage}
        contractAddress={contractAddress}
        setBeaconConnection={setBeaconConnection}
        wallet={wallet}
        userAddress={userAddress}
      />
        <TradingBar
          selectedPair={selectedPair}
          price={price}
          percentChange={percentChange}
          onUpdateData={updateData}
        />
      <div className="flex p-4 mb-6 mt-7">
        <Chart selectedPair={selectedPair} />
        <TradingForm
          Tezos={Tezos}
          setTezos={setTezos}
          setContract={setContract}
          setPublicToken={setPublicToken}
          setWallet={setWallet}
          setUserAddress={setUserAddress}
          setUserBalance={setUserBalance}
          setStorage={setStorage}
          contractAddress={contractAddress}
          setBeaconConnection={setBeaconConnection}
          wallet={wallet}
          userAddress={userAddress}
        />
      </div>
      <OrderHistory />
      <Footer />
    </div>
  );
};

export default Home;