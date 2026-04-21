import React from 'react';
import { Bookmark, BookmarkCheck, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { News } from '../../types/News';
import { formatDate } from '../../utils/dateUtils';
import { useWatchlist } from '../../context/WatchlistContext';
import { useNews } from '../../context/NewsContext';

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const { bookmarkedNews, bookmarkNews, removeBookmark } = useNews();
  const { watchlist } = useWatchlist();
  
  const isBookmarked = bookmarkedNews.some(item => item.id === news.id);
  const isWatchlisted = news.relatedCompanies.some(company => 
    watchlist.some(w => w.symbol === company.symbol)
  );
  
  const getSentimentIcon = () => {
    switch (news.sentiment) {
      case 'positive':
        return <TrendingUp size={18} className="text-green-500" />;
      case 'negative':
        return <TrendingDown size={18} className="text-red-500" />;
      default:
        return <Minus size={18} className="text-gray-400" />;
    }
  };
  
  const handleBookmarkToggle = () => {
    if (isBookmarked) {
      removeBookmark(news.id);
    } else {
      bookmarkNews(news);
    }
  };
  
  return (
    <div className={`bg-white rounded-lg shadow-sm border p-4 news-card ${
      isWatchlisted ? 'border-l-4 border-l-blue-500' : ''
    }`}>
      <div className="flex justify-between items-start mb-2">
        <div className="flex space-x-2">
          {news.categories.map((category, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        <button 
          onClick={handleBookmarkToggle}
          className="text-gray-400 hover:text-blue-500 transition-colors"
        >
          {isBookmarked ? 
            <BookmarkCheck size={20} className="text-blue-500" /> : 
            <Bookmark size={20} />
          }
        </button>
      </div>
      
      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{news.title}</h3>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.summary}</p>
      
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center space-x-2">
          <img 
            src={news.source.logo} 
            alt={news.source.name}
            className="w-4 h-4 rounded-full"
          />
          <span className="text-gray-500">{news.source.name}</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            {getSentimentIcon()}
          </div>
          <span className="text-gray-500">{formatDate(news.publishedAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;