import { News } from '../types/News';
import { CompanySearchResult } from '../types/Company';

// Mock news data
export const mockNews: News[] = [
  {
    id: '1',
    title: 'Apple Reports Record Quarterly Earnings, Exceeding Wall Street Expectations',
    summary: 'Apple Inc. reported its highest-ever quarterly revenue, driven by strong iPhone sales and growth in its services segment, surpassing analyst estimates.',
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    url: 'https://example.com/news/1',
    source: {
      id: 'bloomberg',
      name: 'Bloomberg',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bloomberg_logo.svg/280px-Bloomberg_logo.svg.png'
    },
    categories: ['earnings', 'technology'],
    sentiment: 'positive',
    relatedCompanies: [
      { symbol: 'AAPL', name: 'Apple Inc.' }
    ]
  },
  {
    id: '2',
    title: 'Tesla Shares Drop After Missing Delivery Targets for Q2',
    summary: 'Tesla stock fell 5% in pre-market trading after the electric vehicle maker reported quarterly deliveries below analyst expectations, citing supply chain challenges.',
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), // 8 hours ago
    url: 'https://example.com/news/2',
    source: {
      id: 'reuters',
      name: 'Reuters',
      logo: 'https://www.reuters.com/pf/resources/images/reuters/logo-vertical-default.svg?d=116'
    },
    categories: ['earnings', 'auto'],
    sentiment: 'negative',
    relatedCompanies: [
      { symbol: 'TSLA', name: 'Tesla, Inc.' }
    ]
  },
  {
    id: '3',
    title: 'Amazon to Acquire Streaming Platform Roku in $15 Billion Deal',
    summary: 'Amazon announced plans to purchase Roku for $15 billion, expanding its streaming capabilities and hardware offerings in a move analysts call a strategic fit.',
    publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    url: 'https://example.com/news/3',
    source: {
      id: 'wsj',
      name: 'Wall Street Journal',
      logo: 'https://images.wsj.net/im-528869/social'
    },
    categories: ['mergers', 'technology'],
    sentiment: 'positive',
    relatedCompanies: [
      { symbol: 'AMZN', name: 'Amazon.com, Inc.' },
      { symbol: 'ROKU', name: 'Roku, Inc.' }
    ]
  },
  {
    id: '4',
    title: 'Federal Reserve Signals Rate Cut Possible in September Meeting',
    summary: 'The Federal Reserve indicated it may begin cutting interest rates as early as September, as inflation shows signs of easing and economic growth moderates.',
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    url: 'https://example.com/news/4',
    source: {
      id: 'cnbc',
      name: 'CNBC',
      logo: 'https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.png'
    },
    categories: ['economy', 'finance'],
    sentiment: 'positive',
    relatedCompanies: [
      { symbol: 'SPY', name: 'SPDR S&P 500 ETF Trust' },
      { symbol: 'XLF', name: 'Financial Select Sector SPDR Fund' }
    ]
  },
  {
    id: '5',
    title: 'Microsoft Announces Major Layoffs in Gaming Division Following Activision Integration',
    summary: 'Microsoft plans to lay off approximately 1,900 employees across its gaming businesses, primarily affecting Activision Blizzard teams as it streamlines operations post-acquisition.',
    publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    url: 'https://example.com/news/5',
    source: {
      id: 'bloomberg',
      name: 'Bloomberg',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bloomberg_logo.svg/280px-Bloomberg_logo.svg.png'
    },
    categories: ['technology', 'layoffs'],
    sentiment: 'negative',
    relatedCompanies: [
      { symbol: 'MSFT', name: 'Microsoft Corporation' }
    ]
  },
  {
    id: '6',
    title: 'JPMorgan Chase Reports Strong Q2 Results, Trading Revenue Surges',
    summary: 'JPMorgan Chase posted better-than-expected second-quarter earnings, with significant growth in trading operations and stable consumer banking performance.',
    publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    url: 'https://example.com/news/6',
    source: {
      id: 'ft',
      name: 'Financial Times',
      logo: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1:brand-ft-logo-square-coloured?source=origami-build-tools&width=100&height=100&format=png'
    },
    categories: ['earnings', 'finance'],
    sentiment: 'positive',
    relatedCompanies: [
      { symbol: 'JPM', name: 'JPMorgan Chase & Co.' }
    ]
  },
  {
    id: '7',
    title: 'Nvidia Market Cap Crosses $3 Trillion, Surpassing Apple and Microsoft',
    summary: 'Nvidia briefly became the world\'s most valuable company, with market capitalization exceeding $3 trillion on continued AI chip demand and optimistic growth forecasts.',
    publishedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 days ago
    url: 'https://example.com/news/7',
    source: {
      id: 'reuters',
      name: 'Reuters',
      logo: 'https://www.reuters.com/pf/resources/images/reuters/logo-vertical-default.svg?d=116'
    },
    categories: ['technology', 'stock'],
    sentiment: 'positive',
    relatedCompanies: [
      { symbol: 'NVDA', name: 'NVIDIA Corporation' },
      { symbol: 'AAPL', name: 'Apple Inc.' },
      { symbol: 'MSFT', name: 'Microsoft Corporation' }
    ]
  },
  {
    id: '8',
    title: 'Walmart Expands Healthcare Push with Acquisition of Clinics Chain',
    summary: 'Walmart announced the acquisition of a regional healthcare provider with over 50 clinics, accelerating its expansion into primary care and pharmacy services.',
    publishedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(), // 8 days ago
    url: 'https://example.com/news/8',
    source: {
      id: 'wsj',
      name: 'Wall Street Journal',
      logo: 'https://images.wsj.net/im-528869/social'
    },
    categories: ['mergers', 'healthcare', 'retail'],
    sentiment: 'positive',
    relatedCompanies: [
      { symbol: 'WMT', name: 'Walmart Inc.' }
    ]
  },
  {
    id: '9',
    title: 'Oil Prices Surge as Middle East Tensions Escalate',
    summary: 'Crude oil prices jumped more than 4% amid rising geopolitical tensions in the Middle East, raising concerns about potential supply disruptions.',
    publishedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
    url: 'https://example.com/news/9',
    source: {
      id: 'bloomberg',
      name: 'Bloomberg',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bloomberg_logo.svg/280px-Bloomberg_logo.svg.png'
    },
    categories: ['commodities', 'economy'],
    sentiment: 'negative',
    relatedCompanies: [
      { symbol: 'XOM', name: 'Exxon Mobil Corporation' },
      { symbol: 'CVX', name: 'Chevron Corporation' },
      { symbol: 'USO', name: 'United States Oil Fund' }
    ]
  },
  {
    id: '10',
    title: 'Google Unveils Next-Generation AI Model, Shares Rally',
    summary: 'Google revealed its latest AI system that outperforms competitors on key benchmarks, driving Alphabet shares up 7% as analysts upgraded their outlooks on potential commercial applications.',
    publishedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(), // 12 days ago
    url: 'https://example.com/news/10',
    source: {
      id: 'cnbc',
      name: 'CNBC',
      logo: 'https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.png'
    },
    categories: ['technology', 'ai'],
    sentiment: 'positive',
    relatedCompanies: [
      { symbol: 'GOOGL', name: 'Alphabet Inc.' }
    ]
  },
  {
    id: '11',
    title: 'Pfizer Receives FDA Approval for Breakthrough Cancer Treatment',
    summary: 'The FDA granted approval to Pfizer\'s innovative cancer therapy, which showed significant efficacy in late-stage clinical trials for treating resistant forms of lung cancer.',
    publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days ago
    url: 'https://example.com/news/11',
    source: {
      id: 'reuters',
      name: 'Reuters',
      logo: 'https://www.reuters.com/pf/resources/images/reuters/logo-vertical-default.svg?d=116'
    },
    categories: ['healthcare', 'pharma'],
    sentiment: 'positive',
    relatedCompanies: [
      { symbol: 'PFE', name: 'Pfizer Inc.' }
    ]
  },
  {
    id: '12',
    title: 'GameStop Shares Volatile After Unexpected Quarterly Profit',
    summary: 'GameStop stock experienced dramatic swings after the company reported a surprise profit for the quarter, attributed to aggressive cost-cutting measures and digital sales growth.',
    publishedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days ago
    url: 'https://example.com/news/12',
    source: {
      id: 'ft',
      name: 'Financial Times',
      logo: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1:brand-ft-logo-square-coloured?source=origami-build-tools&width=100&height=100&format=png'
    },
    categories: ['earnings', 'retail', 'stock'],
    sentiment: 'neutral',
    relatedCompanies: [
      { symbol: 'GME', name: 'GameStop Corp.' }
    ]
  },
  {
    id: '13',
    title: 'Meta Platforms Faces New EU Antitrust Investigation',
    summary: 'European regulators opened a formal antitrust investigation into Meta\'s marketplace practices, examining potential anti-competitive behavior in advertising and e-commerce sectors.',
    publishedAt: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(), // 18 days ago
    url: 'https://example.com/news/13',
    source: {
      id: 'wsj',
      name: 'Wall Street Journal',
      logo: 'https://images.wsj.net/im-528869/social'
    },
    categories: ['regulatory', 'technology'],
    sentiment: 'negative',
    relatedCompanies: [
      { symbol: 'META', name: 'Meta Platforms, Inc.' }
    ]
  },
  {
    id: '14',
    title: 'Bitcoin Surpasses $75,000 as Institutional Adoption Accelerates',
    summary: 'Bitcoin reached an all-time high above $75,000, driven by increased institutional investment flows and growing mainstream financial adoption.',
    publishedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(), // 20 days ago
    url: 'https://example.com/news/14',
    source: {
      id: 'bloomberg',
      name: 'Bloomberg',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bloomberg_logo.svg/280px-Bloomberg_logo.svg.png'
    },
    categories: ['crypto', 'finance'],
    sentiment: 'positive',
    relatedCompanies: [
      { symbol: 'COIN', name: 'Coinbase Global, Inc.' },
      { symbol: 'MSTR', name: 'MicroStrategy Incorporated' }
    ]
  },
  {
    id: '15',
    title: 'Disney and Comcast Finalize Hulu Ownership Agreement',
    summary: 'Disney will acquire Comcast\'s 33% stake in Hulu for $8.6 billion, giving Disney full control of the streaming service as competition intensifies in the digital entertainment market.',
    publishedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(), // 25 days ago
    url: 'https://example.com/news/15',
    source: {
      id: 'cnbc',
      name: 'CNBC',
      logo: 'https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.png'
    },
    categories: ['mergers', 'media', 'entertainment'],
    sentiment: 'neutral',
    relatedCompanies: [
      { symbol: 'DIS', name: 'The Walt Disney Company' },
      { symbol: 'CMCSA', name: 'Comcast Corporation' }
    ]
  }
];

// Mock market data
export const mockMarketData = {
  indices: [
    { symbol: 'SPY', name: 'S&P 500', price: 4983.15, change: 0.42 },
    { symbol: 'DJI', name: 'Dow Jones', price: 37903.45, change: 0.23 },
    { symbol: 'IXIC', name: 'NASDAQ', price: 16748.76, change: 0.67 },
    { symbol: 'RUT', name: 'Russell 2000', price: 2057.82, change: -0.18 }
  ],
  mostActive: [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 187.30, changePercent: 1.05, volume: 32500000 },
    { symbol: 'MSFT', name: 'Microsoft Corporation', price: 405.18, changePercent: 0.88, volume: 27800000 },
    { symbol: 'TSLA', name: 'Tesla, Inc.', price: 212.19, changePercent: -2.31, volume: 25600000 },
    { symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 178.12, changePercent: 1.23, volume: 22100000 },
    { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 121.75, changePercent: 3.45, volume: 19800000 }
  ],
  topGainers: [
    { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 121.75, changePercent: 3.45, volume: 19800000 },
    { symbol: 'AMD', name: 'Advanced Micro Devices, Inc.', price: 156.38, changePercent: 2.87, volume: 15200000 },
    { symbol: 'META', name: 'Meta Platforms, Inc.', price: 472.92, changePercent: 2.65, volume: 12400000 },
    { symbol: 'CRM', name: 'Salesforce, Inc.', price: 274.65, changePercent: 2.34, volume: 9800000 },
    { symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 178.12, changePercent: 1.23, volume: 22100000 }
  ]
};

// Mock trending topics
export const mockTrendingTopics = [
  { 
    name: 'AI Chip Demand', 
    mentionCount: 247, 
    relatedSymbols: ['NVDA', 'AMD', 'INTC', 'TSM'] 
  },
  { 
    name: 'Interest Rate Cut', 
    mentionCount: 186, 
    relatedSymbols: ['JPM', 'BAC', 'GS', 'XLF'] 
  },
  { 
    name: 'Apple Product Launch', 
    mentionCount: 152, 
    relatedSymbols: ['AAPL', 'QCOM', 'AVGO'] 
  },
  { 
    name: 'Renewable Energy', 
    mentionCount: 118, 
    relatedSymbols: ['ENPH', 'SEDG', 'NEE', 'FSLR'] 
  },
  { 
    name: 'EV Market Competition', 
    mentionCount: 95, 
    relatedSymbols: ['TSLA', 'F', 'GM', 'RIVN', 'LCID'] 
  }
];

// Mock sector performance
export const mockSectorPerformance = [
  { name: 'Technology', performance: 1.82 },
  { name: 'Healthcare', performance: 0.57 },
  { name: 'Financial Services', performance: 0.43 },
  { name: 'Consumer Cyclical', performance: 0.28 },
  { name: 'Communication Services', performance: 0.21 },
  { name: 'Industrials', performance: -0.12 },
  { name: 'Basic Materials', performance: -0.35 },
  { name: 'Energy', performance: -0.54 },
  { name: 'Real Estate', performance: -0.67 },
  { name: 'Utilities', performance: -0.91 }
];

// Mock company data for search
export const mockCompanies: CompanySearchResult[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', sector: 'Technology', price: 187.30, changePercent: 1.05, volume: 32500000 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', sector: 'Technology', price: 405.18, changePercent: 0.88, volume: 27800000 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', sector: 'Communication Services', price: 147.68, changePercent: 0.75, volume: 18200000 },
  { symbol: 'AMZN', name: 'Amazon.com, Inc.', sector: 'Consumer Cyclical', price: 178.12, changePercent: 1.23, volume: 22100000 },
  { symbol: 'META', name: 'Meta Platforms, Inc.', sector: 'Communication Services', price: 472.92, changePercent: 2.65, volume: 12400000 },
  { symbol: 'TSLA', name: 'Tesla, Inc.', sector: 'Auto Manufacturers', price: 212.19, changePercent: -2.31, volume: 25600000 },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', sector: 'Technology', price: 121.75, changePercent: 3.45, volume: 19800000 },
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.', sector: 'Financial Services', price: 189.74, changePercent: 0.34, volume: 9400000 },
  { symbol: 'V', name: 'Visa Inc.', sector: 'Financial Services', price: 277.85, changePercent: 0.12, volume: 6500000 },
  { symbol: 'PG', name: 'The Procter & Gamble Company', sector: 'Consumer Defensive', price: 156.83, changePercent: -0.21, volume: 5200000 },
  { symbol: 'DIS', name: 'The Walt Disney Company', sector: 'Entertainment', price: 99.43, changePercent: 0.56, volume: 7800000 },
  { symbol: 'KO', name: 'The Coca-Cola Company', sector: 'Consumer Defensive', price: 60.17, changePercent: -0.15, volume: 4700000 },
  { symbol: 'PFE', name: 'Pfizer Inc.', sector: 'Healthcare', price: 27.42, changePercent: -0.85, volume: 8900000 },
  { symbol: 'BAC', name: 'Bank of America Corporation', sector: 'Financial Services', price: 33.78, changePercent: 0.23, volume: 10200000 },
  { symbol: 'NFLX', name: 'Netflix, Inc.', sector: 'Entertainment', price: 615.34, changePercent: 1.78, volume: 4300000 },
  { symbol: 'XOM', name: 'Exxon Mobil Corporation', sector: 'Energy', price: 108.89, changePercent: -0.67, volume: 8500000 },
  { symbol: 'INTC', name: 'Intel Corporation', sector: 'Technology', price: 42.83, changePercent: -1.54, volume: 11600000 },
  { symbol: 'VZ', name: 'Verizon Communications Inc.', sector: 'Communication Services', price: 40.75, changePercent: -0.32, volume: 5600000 },
  { symbol: 'ADBE', name: 'Adobe Inc.', sector: 'Technology', price: 487.12, changePercent: 1.34, volume: 3200000 },
  { symbol: 'CSCO', name: 'Cisco Systems, Inc.', sector: 'Technology', price: 49.18, changePercent: 0.05, volume: 4800000 },
  { symbol: 'CRM', name: 'Salesforce, Inc.', sector: 'Technology', price: 274.65, changePercent: 2.34, volume: 9800000 },
  { symbol: 'NKE', name: 'NIKE, Inc.', sector: 'Consumer Cyclical', price: 92.35, changePercent: -0.48, volume: 4100000 },
  { symbol: 'MCD', name: 'McDonald\'s Corporation', sector: 'Consumer Cyclical', price: 285.73, changePercent: 0.21, volume: 2900000 },
  { symbol: 'WMT', name: 'Walmart Inc.', sector: 'Consumer Defensive', price: 59.76, changePercent: 0.38, volume: 5700000 },
  { symbol: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare', price: 157.92, changePercent: -0.11, volume: 4300000 }
];