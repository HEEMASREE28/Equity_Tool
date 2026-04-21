import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { WatchlistItem } from '../types/Watchlist';

interface WatchlistContextProps {
  watchlist: WatchlistItem[];
  addToWatchlist: (item: WatchlistItem) => void;
  removeFromWatchlist: (symbol: string) => void;
  clearWatchlist: () => void;
}

const WatchlistContext = createContext<WatchlistContextProps>({
  watchlist: [],
  addToWatchlist: () => {},
  removeFromWatchlist: () => {},
  clearWatchlist: () => {}
});

export const useWatchlist = () => useContext(WatchlistContext);

interface WatchlistProviderProps {
  children: ReactNode;
}

export const WatchlistProvider: React.FC<WatchlistProviderProps> = ({ children }) => {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>(() => {
    const savedWatchlist = localStorage.getItem('watchlist');
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);
  
  const addToWatchlist = (item: WatchlistItem) => {
    if (!watchlist.some(watchItem => watchItem.symbol === item.symbol)) {
      setWatchlist([...watchlist, item]);
    }
  };
  
  const removeFromWatchlist = (symbol: string) => {
    setWatchlist(watchlist.filter(item => item.symbol !== symbol));
  };
  
  const clearWatchlist = () => {
    setWatchlist([]);
  };
  
  return (
    <WatchlistContext.Provider value={{ 
      watchlist, 
      addToWatchlist, 
      removeFromWatchlist, 
      clearWatchlist 
    }}>
      {children}
    </WatchlistContext.Provider>
  );
};