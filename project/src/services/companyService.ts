import { CompanySearchResult } from '../types/Company';
import { mockCompanies } from './mockData';

export const searchCompanies = async (searchTerm: string): Promise<CompanySearchResult[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const term = searchTerm.toLowerCase();
  
  return mockCompanies.filter(company => 
    company.symbol.toLowerCase().includes(term) || 
    company.name.toLowerCase().includes(term)
  ).slice(0, 10); // Limit results
};

export const getCompanyDetails = async (symbol: string): Promise<CompanySearchResult | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return mockCompanies.find(company => company.symbol === symbol) || null;
};