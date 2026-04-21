import React from 'react';
import NewsCard from './NewsCard';
import { News } from '../../types/News';

interface NewsListProps {
  news: News[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  if (news.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <p className="text-gray-600">No news articles found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
};

export default NewsList;