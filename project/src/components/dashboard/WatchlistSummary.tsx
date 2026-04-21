import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { WatchlistItem } from '../../types/Watchlist';

interface WatchlistSummaryProps {
  watchlist: WatchlistItem[];
}

const WatchlistSummary: React.FC<WatchlistSummaryProps> = ({ watchlist }) => {
  // Show only the first 5 watchlist items
  const displayItems = watchlist.slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Watchlist</h2>
        <Link 
          to="/watchlist" 
          className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
        >
          View All <ChevronRight size={16} />
        </Link>
      </div>
      
      {displayItems.length === 0 ? (
        <div className="text-center p-4 border border-dashed border-gray-300 rounded-lg">
          <p className="text-gray-500 mb-2">Your watchlist is empty</p>
          <Link 
            to="/watchlist" 
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Add companies to track
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {displayItems.map((item) => (
            <div key={item.symbol} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <div>
                <div className="font-medium">{item.symbol}</div>
                <div className="text-sm text-gray-500">{item.name}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">${item.price.toFixed(2)}</div>
                <div className={`text-sm flex items-center justify-end ${
                  item.changePercent >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.changePercent >= 0 ? (
                    <ArrowUpRight size={14} className="mr-1" />
                  ) : (
                    <ArrowDownRight size={14} className="mr-1" />
                  )}
                  {Math.abs(item.changePercent).toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchlistSummary;