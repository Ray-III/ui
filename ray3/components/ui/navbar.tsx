import React from 'react';
import Link from 'next/link';
import ConnectButton from '../ConnectWallet';

import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import DisconnectButton from '../DisconnectWallet';

type ButtonProps = {
  Tezos: TezosToolkit;
  setContract: Dispatch<SetStateAction<any>>;
  setWallet: Dispatch<SetStateAction<any>>;
  setUserAddress: Dispatch<SetStateAction<string>>;
  setUserBalance: Dispatch<SetStateAction<number>>;
  setStorage: Dispatch<SetStateAction<number>>;
  contractAddress: string;
  userAddress: string;
  setTezos: Dispatch<SetStateAction<TezosToolkit>>;
  setBeaconConnection: Dispatch<SetStateAction<boolean>>;
  setPublicToken: Dispatch<SetStateAction<string | null>>;
  wallet: BeaconWallet;
};

export default function Navbar({
    Tezos,
    setTezos,
    setContract,
    setWallet,
    setUserAddress,
    userAddress,
    setUserBalance,
    setStorage,
    contractAddress,
    setBeaconConnection,
    setPublicToken,
    wallet,
  }: ButtonProps) {
  return (
    <nav className="flex items-center justify-between p-2 bg-slate-900 text-purple-900">
      <div className="flex items-center space-x-2">
        <img width="200" height="200" src="/asset/bullFinance.png" alt="Description du logo" />
        <div className="separator h-4 bg-indigo-900 w-0.5"></div>
        <ul className="menu-list flex space-x-4">
          <li>
            <Link href="/trade" className="text-blue-500 hover:underline">
              Trade
            </Link>
          </li>
          <li>
            <Link href="/earn" className="text-blue-500 hover:underline">
              Earn
            </Link>
          </li>
          <li>
            <Link href="/docs" className="text-blue-500 hover:underline">
              Docs
            </Link>
          </li>
        </ul>
      </div>
      <div>
        {userAddress ? (
          <DisconnectButton
            wallet={wallet}
            setPublicToken={setPublicToken}
            setUserAddress={setUserAddress}
            setUserBalance={setUserBalance}
            setWallet={setWallet}
            setTezos={setTezos}
            setBeaconConnection={setBeaconConnection}
        />
        ) : (
          <ConnectButton
          Tezos={Tezos}
          setContract={setContract}
          setPublicToken={setPublicToken}
          setWallet={setWallet}
          setUserAddress={setUserAddress}
          setUserBalance={setUserBalance}
          setStorage={setStorage}
          contractAddress={contractAddress}
          setBeaconConnection={setBeaconConnection}
          wallet={wallet}
          />
        )}
      
      </div>
    </nav>
  );
}
