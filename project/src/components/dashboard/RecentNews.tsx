import React from 'react';
import { News } from '../../types/News';
import NewsCard from '../news/NewsCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface RecentNewsProps {
  news: News[];
}

const RecentNews: React.FC<RecentNewsProps> = ({ news }) => {
  // Show only the first 6 news items
  const recentNews = news.slice(0, 6);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent News</h2>
        <Link 
          to="/news" 
          className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
        >
          View All <ChevronRight size={16} />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recentNews.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
      
      {recentNews.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No recent news available
        </div>
      )}
    </div>
  );
};

export default RecentNews;