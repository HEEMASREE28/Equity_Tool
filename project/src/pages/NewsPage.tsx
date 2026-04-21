import React, { useState, useEffect } from 'react';
import NewsFilters from '../components/news/NewsFilters';
import NewsList from '../components/news/NewsList';
import { fetchNews } from '../services/newsService';
import { News } from '../types/News';

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    date: 'week',
    sentiment: 'all'
  });

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const newsData = await fetchNews(filters);
        setNews(newsData);
      } catch (error) {
        console.error("Failed to load news:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [filters]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Financial News</h1>
      
      <NewsFilters filters={filters} onFilterChange={handleFilterChange} />
      
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <NewsList news={news} />
      )}
    </div>
  );
};

export default NewsPage;