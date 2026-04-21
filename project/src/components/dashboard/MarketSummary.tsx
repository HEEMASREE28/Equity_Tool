import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { mockMarketData } from '../../services/mockData';

const MarketSummary: React.FC = () => {
  const marketData = mockMarketData;
  
  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-600' : 'text-red-600';
  };
  
  const getChangeIcon = (change: number) => {
    return change >= 0 ? 
      <ArrowUpRight size={16} className="text-green-600" /> : 
      <ArrowDownRight size={16} className="text-red-600" />;
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Market Summary</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {marketData.indices.map((index) => (
          <div key={index.symbol} className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-600 mb-1">{index.name}</h3>
            <div className="flex justify-between items-baseline">
              <span className="text-xl font-bold">{index.price.toLocaleString()}</span>
              <div className="flex items-center">
                {getChangeIcon(index.change)}
                <span className={`${getChangeColor(index.change)} ml-1`}>
                  {Math.abs(index.change).toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-medium text-gray-600 mb-3">Most Active</h3>
          <div className="space-y-3">
            {marketData.mostActive.slice(0, 3).map((stock) => (
              <div key={stock.symbol} className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{stock.symbol}</div>
                  <div className="text-sm text-gray-500">{stock.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${stock.price.toFixed(2)}</div>
                  <div className={`text-sm ${getChangeColor(stock.changePercent)}`}>
                    {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-medium text-gray-600 mb-3">Top Gainers</h3>
          <div className="space-y-3">
            {marketData.topGainers.slice(0, 3).map((stock) => (
              <div key={stock.symbol} className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{stock.symbol}</div>
                  <div className="text-sm text-gray-500">{stock.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${stock.price.toFixed(2)}</div>
                  <div className="text-sm text-green-600">
                    +{stock.changePercent.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSummary;