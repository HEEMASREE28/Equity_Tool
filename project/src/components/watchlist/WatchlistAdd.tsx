import React, { useState, useEffect, useRef } from 'react';
import { X, Search, Plus } from 'lucide-react';
import { searchCompanies } from '../../services/companyService';
import { useWatchlist } from '../../context/WatchlistContext';
import { CompanySearchResult } from '../../types/Company';

interface WatchlistAddProps {
  onClose: () => void;
}

const WatchlistAdd: React.FC<WatchlistAddProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<CompanySearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { addToWatchlist, watchlist } = useWatchlist();
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleSearch = async () => {
      if (searchTerm.trim().length < 2) {
        setSearchResults([]);
        return;
      }
      
      setIsLoading(true);
      try {
        const results = await searchCompanies(searchTerm);
        setSearchResults(results);
      } catch (error) {
        console.error("Error searching companies:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    const timeoutId = setTimeout(handleSearch, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);
  
  const handleAddToWatchlist = (company: CompanySearchResult) => {
    addToWatchlist({
      symbol: company.symbol,
      name: company.name,
      sector: company.sector,
      price: company.price,
      changePercent: company.changePercent,
      volume: company.volume
    });
  };
  
  const isInWatchlist = (symbol: string) => {
    return watchlist.some(item => item.symbol === symbol);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Add to Watchlist</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4">
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by company name or symbol"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="space-y-2">
                {searchResults.map((company) => (
                  <div 
                    key={company.symbol}
                    className="flex justify-between items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <div>
                      <div className="font-medium">{company.symbol}</div>
                      <div className="text-sm text-gray-500">{company.name}</div>
                    </div>
                    <button
                      onClick={() => handleAddToWatchlist(company)}
                      disabled={isInWatchlist(company.symbol)}
                      className={`p-1.5 rounded-full ${
                        isInWatchlist(company.symbol)
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                      }`}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                ))}
              </div>
            ) : searchTerm.length > 0 ? (
              <div className="text-center py-4 text-gray-500">
                No companies found matching "{searchTerm}"
              </div>
            ) : (
              <div className="text-center py-4 text-gray-500">
                Search for a company to add to your watchlist
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchlistAdd;