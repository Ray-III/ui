import React, { useEffect, useState } from 'react';

interface CryptoData {
  symbol: string;
  price: string;
}

const Footer: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [scrollingIndex, setScrollingIndex] = useState(0);

  // Fonction pour récupérer les données des 10 premières cryptos depuis l'API de Binance
  const fetchCryptoData = async () => {
    try {
      const response = await fetch('https://api.binance.com/api/v3/ticker/price');
      const data: CryptoData[] = await response.json();
      // Filtrer les 10 premières cryptos avec le plus gros market cap
      const top10Cryptos = data.slice(0, 10);
      setCryptoData(top10Cryptos);
    } catch (error) {
      console.error('Erreur lors de la récupération des données crypto :', error);
    }
  };

  // Utilisez useEffect pour appeler fetchCryptoData au chargement du composant
  useEffect(() => {
    fetchCryptoData();
  }, []);

  // Utilisez setInterval pour faire défiler les valeurs de gauche à droite
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollingIndex((prevIndex) => (prevIndex + 1) % cryptoData.length);
    }, 3000); // Changer de valeur toutes les 3 secondes (ajustez si nécessaire)
    return () => clearInterval(interval);
  }, [cryptoData]);

  return (
    <footer className="bg-red-600 text-white p-2 text-center">
      <div className="marquee">
        {cryptoData.map((crypto, index) => (
          <span
            key={index}
            className={index === scrollingIndex ? 'scrolling' : 'hidden'}
          >
            {crypto.symbol}: {crypto.price}
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
