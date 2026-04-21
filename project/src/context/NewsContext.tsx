import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { News } from '../types/News';

interface NewsContextProps {
  bookmarkedNews: News[];
  bookmarkNews: (news: News) => void;
  removeBookmark: (newsId: string) => void;
  clearBookmarks: () => void;
}

const NewsContext = createContext<NewsContextProps>({
  bookmarkedNews: [],
  bookmarkNews: () => {},
  removeBookmark: () => {},
  clearBookmarks: () => {}
});

export const useNews = () => useContext(NewsContext);

interface NewsProviderProps {
  children: ReactNode;
}

export const NewsProvider: React.FC<NewsProviderProps> = ({ children }) => {
  const [bookmarkedNews, setBookmarkedNews] = useState<News[]>(() => {
    const savedBookmarks = localStorage.getItem('bookmarkedNews');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('bookmarkedNews', JSON.stringify(bookmarkedNews));
  }, [bookmarkedNews]);
  
  const bookmarkNews = (news: News) => {
    if (!bookmarkedNews.some(item => item.id === news.id)) {
      setBookmarkedNews([...bookmarkedNews, news]);
    }
  };
  
  const removeBookmark = (newsId: string) => {
    setBookmarkedNews(bookmarkedNews.filter(item => item.id !== newsId));
  };
  
  const clearBookmarks = () => {
    setBookmarkedNews([]);
  };
  
  return (
    <NewsContext.Provider value={{ 
      bookmarkedNews, 
      bookmarkNews, 
      removeBookmark, 
      clearBookmarks 
    }}>
      {children}
    </NewsContext.Provider>
  );
};