export interface NewsSource {
  id: string;
  name: string;
  logo: string;
}

export interface RelatedCompany {
  symbol: string;
  name: string;
}

export interface News {
  id: string;
  title: string;
  summary: string;
  content?: string;
  publishedAt: string;
  url: string;
  source: NewsSource;
  categories: string[];
  sentiment: 'positive' | 'neutral' | 'negative';
  relatedCompanies: RelatedCompany[];
}