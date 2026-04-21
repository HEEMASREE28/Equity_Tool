import { News } from '../types/News';
import { mockNews } from './mockData';

// In a real application, this would make actual API calls
// For now, we'll use mock data with filters

export const fetchLatestNews = async (limit: number = 10): Promise<News[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return the most recent news articles
  return mockNews.slice(0, limit);
};

export const fetchNews = async (filters: {
  search?: string;
  category?: string;
  date?: string;
  sentiment?: string;
}): Promise<News[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  let filteredNews = [...mockNews];
  
  // Apply search filter
  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filteredNews = filteredNews.filter(news => 
      news.title.toLowerCase().includes(searchTerm) || 
      news.summary.toLowerCase().includes(searchTerm) ||
      news.relatedCompanies.some(company => 
        company.name.toLowerCase().includes(searchTerm) || 
        company.symbol.toLowerCase().includes(searchTerm)
      )
    );
  }
  
  // Apply category filter
  if (filters.category && filters.category !== 'all') {
    filteredNews = filteredNews.filter(news => 
      news.categories.includes(filters.category as string)
    );
  }
  
  // Apply date filter
  if (filters.date) {
    const now = new Date();
    let startDate = new Date();
    
    switch (filters.date) {
      case 'today':
        startDate.setHours(0, 0, 0, 0);
        break;
      case 'week':
        startDate.setDate(now.getDate() - 7);
        break;
      case 'month':
        startDate.setMonth(now.getMonth() - 1);
        break;
      case 'quarter':
        startDate.setMonth(now.getMonth() - 3);
        break;
      case 'year':
        startDate.setFullYear(now.getFullYear() - 1);
        break;
      default:
        startDate = new Date(0); // Beginning of time
    }
    
    filteredNews = filteredNews.filter(news => 
      new Date(news.publishedAt) >= startDate
    );
  }
  
  // Apply sentiment filter
  if (filters.sentiment && filters.sentiment !== 'all') {
    filteredNews = filteredNews.filter(news => 
      news.sentiment === filters.sentiment
    );
  }
  
  return filteredNews;
};