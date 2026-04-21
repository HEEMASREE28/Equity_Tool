import React, { useState } from 'react';
import WatchlistTable from '../components/watchlist/WatchlistTable';
import WatchlistAdd from '../components/watchlist/WatchlistAdd';
import { useWatchlist } from '../context/WatchlistContext';

const WatchlistPage: React.FC = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Watchlist</h1>
        <button 
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          Add Company
        </button>
      </div>
      
      {watchlist.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-600 mb-4">Your watchlist is empty.</p>
          <button 
            onClick={() => setShowAddForm(true)}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Add your first company
          </button>
        </div>
      ) : (
        <WatchlistTable 
          watchlist={watchlist} 
          onRemove={removeFromWatchlist} 
        />
      )}
      
      {showAddForm && (
        <WatchlistAdd 
          onClose={() => setShowAddForm(false)} 
        />
      )}
    </div>
  );
};

export default WatchlistPage;