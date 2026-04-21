import React from 'react';
import { TrendingUp } from 'lucide-react';
import { mockTrendingTopics } from '../../services/mockData';

const TrendingTopics: React.FC = () => {
  const trendingTopics = mockTrendingTopics;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <TrendingUp size={20} className="text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold">Trending Topics</h2>
      </div>
      
      <div className="space-y-4">
        {trendingTopics.map((topic, index) => (
          <div key={index} className="cursor-pointer group">
            <div className="flex items-start">
              <span className="bg-gray-100 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3">
                {index + 1}
              </span>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {topic.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{topic.mentionCount} mentions today</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {topic.relatedSymbols.map((symbol) => (
                    <span key={symbol} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                      {symbol}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {index < trendingTopics.length - 1 && <div className="border-b border-gray-100 my-4"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;