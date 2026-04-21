import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { mockSectorPerformance } from '../../services/mockData';

const SectorPerformance: React.FC = () => {
  const sectorData = mockSectorPerformance;
  
  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-600' : 'text-red-600';
  };
  
  const getChangeIcon = (change: number) => {
    return change >= 0 ? 
      <ArrowUpRight size={14} className="mr-1" /> : 
      <ArrowDownRight size={14} className="mr-1" />;
  };
  
  // Sort by performance (descending)
  const sortedSectors = [...sectorData].sort((a, b) => b.performance - a.performance);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Sector Performance</h2>
      
      <div className="space-y-3">
        {sortedSectors.map((sector) => (
          <div key={sector.name} className="flex items-center justify-between">
            <span className="text-gray-700">{sector.name}</span>
            <div className={`flex items-center ${getChangeColor(sector.performance)}`}>
              {getChangeIcon(sector.performance)}
              <span>{sector.performance >= 0 ? '+' : ''}{sector.performance.toFixed(2)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorPerformance;