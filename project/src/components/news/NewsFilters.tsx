import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

interface NewsFiltersProps {
  filters: {
    search: string;
    category: string;
    date: string;
    sentiment: string;
  };
  onFilterChange: (filters: any) => void;
}

const NewsFilters: React.FC<NewsFiltersProps> = ({ filters, onFilterChange }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState(filters.search);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ search: localSearch });
  };
  
  const handleClearSearch = () => {
    setLocalSearch('');
    onFilterChange({ search: '' });
  };
  
  const categories = [
    'all', 'earnings', 'mergers', 'ipo', 'stock', 'economy', 'technology', 'finance'
  ];
  
  const dateRanges = [
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'quarter', label: 'This Quarter' },
    { value: 'year', label: 'This Year' },
  ];
  
  const sentiments = [
    { value: 'all', label: 'All Sentiments' },
    { value: 'positive', label: 'Positive' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'negative', label: 'Negative' },
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <form onSubmit={handleSearchSubmit} className="flex items-center mb-4">
        <div className="relative flex-grow">
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder="Search news by keyword, company, or ticker..."
            className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {localSearch && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
          >
            <Search size={20} />
          </button>
        </div>
        <button
          type="button"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="ml-3 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg flex items-center hover:bg-gray-200"
        >
          <Filter size={16} className="mr-2" />
          <span>Filters</span>
        </button>
      </form>
      
      {isFiltersOpen && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-gray-200">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => onFilterChange({ category })}
                  className={`px-3 py-1 text-sm rounded-full capitalize ${
                    filters.category === category
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <select
              value={filters.date}
              onChange={(e) => onFilterChange({ date: e.target.value })}
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {dateRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sentiment</label>
            <select
              value={filters.sentiment}
              onChange={(e) => onFilterChange({ sentiment: e.target.value })}
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {sentiments.map((sentiment) => (
                <option key={sentiment.value} value={sentiment.value}>
                  {sentiment.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsFilters;