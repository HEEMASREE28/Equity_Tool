import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EquityLens</h3>
            <p className="text-blue-200 text-sm">
              Your comprehensive platform for equity news research and market insights.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors text-sm">Dashboard</Link></li>
              <li><Link to="/news" className="text-blue-200 hover:text-white transition-colors text-sm">News</Link></li>
              <li><Link to="/watchlist" className="text-blue-200 hover:text-white transition-colors text-sm">Watchlist</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Market Glossary</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Investment Guides</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-blue-200">support@equitylens.com</li>
              <li className="text-blue-200">+1 (555) 123-4567</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {/* Social media links would go here */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} EquityLens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;