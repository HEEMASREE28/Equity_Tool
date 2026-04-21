import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Dashboard from './pages/Dashboard';
import NewsPage from './pages/NewsPage';
import WatchlistPage from './pages/WatchlistPage';
import { NewsProvider } from './context/NewsContext';
import { WatchlistProvider } from './context/WatchlistContext';
import './App.css';

function App() {
  return (
    <Router>
      <NewsProvider>
        <WatchlistProvider>
          <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/watchlist" element={<WatchlistPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </WatchlistProvider>
      </NewsProvider>
    </Router>
  );
}

export default App;