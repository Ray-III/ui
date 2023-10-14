// components/Chart.js
"use client";
import { useEffect } from 'react';

export default function Chart({ selectedPair }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      const widget = new TradingView.widget({
        // Configuration du widget TradingView
        container_id: 'tv_chart_container',
        symbol: `BINANCE:${selectedPair}`,  // Utilisation du symbole sélectionné
        interval: 'D',  // Interval de temps (quotidien)
        theme: 'dark',  // Thème sombre
        style: '1',
        locale: 'fr',
        enable_publishing: false,  // Désactiver le partage
        hide_legend: true,  // Masquer la légende
        hide_side_toolbar: false,  // Afficher la barre latérale
        withdateranges: true,
      });
    };
    document.head.appendChild(script);

    return () => {
      // Nettoyer le script si le composant est démonté
      document.head.removeChild(script);
    };
  }, [selectedPair]);

  return (
    <div id="tv_chart_container" style={{ height: '500px', width: '100%' }}></div>
  );
}
