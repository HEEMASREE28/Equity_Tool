import React, { useState, useEffect } from 'react';
import TrendingTopics from '../components/dashboard/TrendingTopics';
import MarketSummary from '../components/dashboard/MarketSummary';
import RecentNews from '../components/dashboard/RecentNews';
import WatchlistSummary from '../components/dashboard/WatchlistSummary';
import SectorPerformance from '../components/dashboard/SectorPerformance';
import { fetchLatestNews } from '../services/newsService';
import { useWatchlist } from '../context/WatchlistContext';
import { News } from '../types/News';

const Dashboard: React.FC = () => {
  const [latestNews, setLatestNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { watchlist } = useWatchlist();

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const news = await fetchLatestNews(12);
        setLatestNews(news);
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Market Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <MarketSummary />
        </div>
        <div>
          <TrendingTopics />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentNews news={latestNews} />
        </div>
        <div className="space-y-8">
          <WatchlistSummary watchlist={watchlist} />
          <SectorPerformance />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;