import React, { useState } from 'react';

const Earn = () => {
  const [amount, setAmount] = useState('');

  const handleProvideLiquidity = () => {
    // Logic to provide liquidity, typically involves interacting with a blockchain.
    console.log(`Provided ${amount} liquidity`);
  };

  return (
    <div>
      <h2>Provide Liquidity</h2>
      <input 
        type="text" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount to provide"
      />
      <button onClick={handleProvideLiquidity}>Provide Liquidity</button>
    </div>
  );
};

const EarnPage = () => {
  return (
    <div>
      <h1>Earn Rewards by Providing Liquidity</h1>
      <Earn />
    </div>
  );
};

export default EarnPage;
