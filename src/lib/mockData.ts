// Mock data for demonstration - will be replaced with real API calls when Cloud is enabled

export interface StockData {
  name: string;
  ticker: string;
  price: number;
  currency: string;
  change: number;
  changePercent: number;
  metrics: {
    change1m: number;
    change6m: number;
    change1y: number;
    volatility: number;
    pe?: number;
    dividendYield?: number;
    marketCap: string;
    volume: string;
    high52w: number;
    low52w: number;
  };
}

const mockStocks: Record<string, StockData> = {
  NVDA: {
    name: "NVIDIA Corporation",
    ticker: "NVDA",
    price: 875.28,
    currency: "$",
    change: 18.45,
    changePercent: 2.15,
    metrics: {
      change1m: 12.8,
      change6m: 85.2,
      change1y: 220.5,
      volatility: 48.6,
      pe: 72.4,
      dividendYield: 0.02,
      marketCap: "$2.16T",
      volume: "42.3M",
      high52w: 974.00,
      low52w: 373.56,
    },
  },
  TSLA: {
    name: "Tesla, Inc.",
    ticker: "TSLA",
    price: 248.50,
    currency: "$",
    change: 5.32,
    changePercent: 2.19,
    metrics: {
      change1m: 8.5,
      change6m: -12.3,
      change1y: 45.2,
      volatility: 52.3,
      pe: 68.2,
      dividendYield: undefined,
      marketCap: "$789B",
      volume: "98.2M",
      high52w: 299.29,
      low52w: 138.80,
    },
  },
  AAPL: {
    name: "Apple Inc.",
    ticker: "AAPL",
    price: 178.72,
    currency: "$",
    change: -1.28,
    changePercent: -0.71,
    metrics: {
      change1m: 2.1,
      change6m: 8.7,
      change1y: 12.4,
      volatility: 24.8,
      pe: 28.5,
      dividendYield: 0.55,
      marketCap: "$2.78T",
      volume: "52.1M",
      high52w: 199.62,
      low52w: 164.08,
    },
  },
  GOOGL: {
    name: "Alphabet Inc.",
    ticker: "GOOGL",
    price: 141.80,
    currency: "$",
    change: 2.15,
    changePercent: 1.54,
    metrics: {
      change1m: 6.2,
      change6m: 22.4,
      change1y: 35.8,
      volatility: 28.9,
      pe: 24.6,
      dividendYield: 0.50,
      marketCap: "$1.76T",
      volume: "24.8M",
      high52w: 153.78,
      low52w: 115.35,
    },
  },
  AMZN: {
    name: "Amazon.com, Inc.",
    ticker: "AMZN",
    price: 178.25,
    currency: "$",
    change: 3.42,
    changePercent: 1.96,
    metrics: {
      change1m: 8.1,
      change6m: 18.9,
      change1y: 52.3,
      volatility: 32.4,
      pe: 58.2,
      dividendYield: undefined,
      marketCap: "$1.86T",
      volume: "38.6M",
      high52w: 189.77,
      low52w: 118.35,
    },
  },
  META: {
    name: "Meta Platforms, Inc.",
    ticker: "META",
    price: 505.95,
    currency: "$",
    change: 8.72,
    changePercent: 1.75,
    metrics: {
      change1m: 5.4,
      change6m: 28.6,
      change1y: 168.2,
      volatility: 38.5,
      pe: 32.8,
      dividendYield: 0.40,
      marketCap: "$1.29T",
      volume: "12.4M",
      high52w: 531.49,
      low52w: 274.38,
    },
  },
  "MC.PA": {
    name: "LVMH Moët Hennessy",
    ticker: "MC.PA",
    price: 725.40,
    currency: "€",
    change: 12.80,
    changePercent: 1.80,
    metrics: {
      change1m: 5.2,
      change6m: -8.1,
      change1y: -15.3,
      volatility: 28.4,
      pe: 22.1,
      dividendYield: 1.82,
      marketCap: "€362B",
      volume: "892K",
      high52w: 904.60,
      low52w: 595.00,
    },
  },
  MSFT: {
    name: "Microsoft Corporation",
    ticker: "MSFT",
    price: 378.91,
    currency: "$",
    change: 2.45,
    changePercent: 0.65,
    metrics: {
      change1m: 4.8,
      change6m: 15.2,
      change1y: 28.9,
      volatility: 22.1,
      pe: 34.2,
      dividendYield: 0.78,
      marketCap: "$2.81T",
      volume: "18.4M",
      high52w: 384.30,
      low52w: 309.45,
    },
  },
  AMD: {
    name: "Advanced Micro Devices",
    ticker: "AMD",
    price: 156.42,
    currency: "$",
    change: 4.28,
    changePercent: 2.81,
    metrics: {
      change1m: 15.2,
      change6m: 42.8,
      change1y: 68.4,
      volatility: 55.2,
      pe: 245.8,
      dividendYield: undefined,
      marketCap: "$253B",
      volume: "58.2M",
      high52w: 164.46,
      low52w: 93.12,
    },
  },
  INTC: {
    name: "Intel Corporation",
    ticker: "INTC",
    price: 31.25,
    currency: "$",
    change: -0.85,
    changePercent: -2.65,
    metrics: {
      change1m: -8.4,
      change6m: -22.1,
      change1y: -35.6,
      volatility: 42.8,
      pe: 108.2,
      dividendYield: 1.28,
      marketCap: "$132B",
      volume: "45.6M",
      high52w: 51.28,
      low52w: 29.73,
    },
  },
  "TTE.PA": {
    name: "TotalEnergies SE",
    ticker: "TTE.PA",
    price: 62.85,
    currency: "€",
    change: 0.92,
    changePercent: 1.49,
    metrics: {
      change1m: 2.8,
      change6m: 5.4,
      change1y: 8.2,
      volatility: 24.6,
      pe: 7.8,
      dividendYield: 5.12,
      marketCap: "€148B",
      volume: "4.2M",
      high52w: 68.72,
      low52w: 54.28,
    },
  },
  "OR.PA": {
    name: "L'Oréal S.A.",
    ticker: "OR.PA",
    price: 412.50,
    currency: "€",
    change: 5.80,
    changePercent: 1.43,
    metrics: {
      change1m: 3.2,
      change6m: -4.8,
      change1y: -8.5,
      volatility: 22.4,
      pe: 35.2,
      dividendYield: 1.65,
      marketCap: "€218B",
      volume: "580K",
      high52w: 458.35,
      low52w: 355.40,
    },
  },
  "BNP.PA": {
    name: "BNP Paribas SA",
    ticker: "BNP.PA",
    price: 58.42,
    currency: "€",
    change: 1.15,
    changePercent: 2.01,
    metrics: {
      change1m: 4.8,
      change6m: 12.5,
      change1y: 18.2,
      volatility: 28.6,
      pe: 6.2,
      dividendYield: 7.25,
      marketCap: "€68B",
      volume: "3.8M",
      high52w: 66.44,
      low52w: 49.82,
    },
  },
  NFLX: {
    name: "Netflix, Inc.",
    ticker: "NFLX",
    price: 628.45,
    currency: "$",
    change: 12.85,
    changePercent: 2.09,
    metrics: {
      change1m: 8.5,
      change6m: 35.2,
      change1y: 82.4,
      volatility: 38.2,
      pe: 45.8,
      dividendYield: undefined,
      marketCap: "$272B",
      volume: "4.2M",
      high52w: 639.00,
      low52w: 344.73,
    },
  },
  DIS: {
    name: "The Walt Disney Company",
    ticker: "DIS",
    price: 112.85,
    currency: "$",
    change: 1.45,
    changePercent: 1.30,
    metrics: {
      change1m: 5.2,
      change6m: 8.4,
      change1y: 22.5,
      volatility: 32.4,
      pe: 72.8,
      dividendYield: 0.88,
      marketCap: "$206B",
      volume: "8.5M",
      high52w: 123.74,
      low52w: 78.73,
    },
  },
  JPM: {
    name: "JPMorgan Chase & Co.",
    ticker: "JPM",
    price: 195.82,
    currency: "$",
    change: 2.18,
    changePercent: 1.13,
    metrics: {
      change1m: 3.8,
      change6m: 18.2,
      change1y: 38.5,
      volatility: 24.2,
      pe: 11.2,
      dividendYield: 2.35,
      marketCap: "$565B",
      volume: "8.2M",
      high52w: 200.94,
      low52w: 135.19,
    },
  },
  V: {
    name: "Visa Inc.",
    ticker: "V",
    price: 278.45,
    currency: "$",
    change: 3.25,
    changePercent: 1.18,
    metrics: {
      change1m: 4.2,
      change6m: 12.8,
      change1y: 18.5,
      volatility: 20.4,
      pe: 29.5,
      dividendYield: 0.75,
      marketCap: "$557B",
      volume: "5.8M",
      high52w: 290.96,
      low52w: 227.68,
    },
  },
  WMT: {
    name: "Walmart Inc.",
    ticker: "WMT",
    price: 165.28,
    currency: "$",
    change: 1.85,
    changePercent: 1.13,
    metrics: {
      change1m: 5.4,
      change6m: 22.5,
      change1y: 42.8,
      volatility: 18.5,
      pe: 28.4,
      dividendYield: 1.35,
      marketCap: "$445B",
      volume: "6.2M",
      high52w: 169.94,
      low52w: 151.48,
    },
  },
  KO: {
    name: "The Coca-Cola Company",
    ticker: "KO",
    price: 62.45,
    currency: "$",
    change: 0.42,
    changePercent: 0.68,
    metrics: {
      change1m: 2.1,
      change6m: 8.4,
      change1y: 5.2,
      volatility: 14.8,
      pe: 24.2,
      dividendYield: 3.12,
      marketCap: "$269B",
      volume: "12.4M",
      high52w: 64.99,
      low52w: 51.55,
    },
  },
  BA: {
    name: "The Boeing Company",
    ticker: "BA",
    price: 178.52,
    currency: "$",
    change: -2.85,
    changePercent: -1.57,
    metrics: {
      change1m: -12.4,
      change6m: -18.5,
      change1y: -15.2,
      volatility: 45.8,
      pe: undefined,
      dividendYield: undefined,
      marketCap: "$110B",
      volume: "8.5M",
      high52w: 267.54,
      low52w: 159.71,
    },
  },
};

// Simulate name to ticker lookup
const nameToTicker: Record<string, string> = {
  nvidia: "NVDA",
  tesla: "TSLA",
  apple: "AAPL",
  google: "GOOGL",
  alphabet: "GOOGL",
  amazon: "AMZN",
  meta: "META",
  facebook: "META",
  lvmh: "MC.PA",
  microsoft: "MSFT",
  amd: "AMD",
  intel: "INTC",
  total: "TTE.PA",
  totalenergies: "TTE.PA",
  loreal: "OR.PA",
  "l'oreal": "OR.PA",
  bnp: "BNP.PA",
  "bnp paribas": "BNP.PA",
  netflix: "NFLX",
  disney: "DIS",
  jpmorgan: "JPM",
  "jp morgan": "JPM",
  visa: "V",
  walmart: "WMT",
  "coca-cola": "KO",
  "coca cola": "KO",
  coke: "KO",
  boeing: "BA",
};

export function resolveTickerFromName(query: string): string | null {
  const normalized = query.toLowerCase().trim();
  
  // Check if it's already a ticker
  const upperQuery = query.toUpperCase();
  if (mockStocks[upperQuery]) {
    return upperQuery;
  }
  
  // Check name mapping
  if (nameToTicker[normalized]) {
    return nameToTicker[normalized];
  }
  
  return null;
}

export function getStockData(ticker: string): StockData | null {
  return mockStocks[ticker.toUpperCase()] || null;
}

// Get all available stocks for autocomplete
export function getAllStocks(): { ticker: string; name: string }[] {
  return Object.values(mockStocks).map((stock) => ({
    ticker: stock.ticker,
    name: stock.name,
  }));
}

// Search stocks by query
export function searchStocks(query: string): { ticker: string; name: string }[] {
  if (!query.trim()) return getAllStocks();
  
  const normalized = query.toLowerCase();
  return Object.values(mockStocks)
    .filter(
      (stock) =>
        stock.name.toLowerCase().includes(normalized) ||
        stock.ticker.toLowerCase().includes(normalized)
    )
    .map((stock) => ({
      ticker: stock.ticker,
      name: stock.name,
    }));
}

export function generateRecommendation(
  data: StockData,
  profile: "conservative" | "moderate" | "aggressive"
): { recommendation: "buy" | "hold" | "sell"; summary: string; justification: string } {
  const { metrics, name } = data;
  
  // Simple logic based on metrics and profile
  let score = 0;
  
  // Price momentum
  if (metrics.change1y > 20) score += 2;
  else if (metrics.change1y > 0) score += 1;
  else if (metrics.change1y < -20) score -= 2;
  else score -= 1;
  
  // Volatility (matters more for conservative)
  if (profile === "conservative" && metrics.volatility > 40) score -= 2;
  if (profile === "aggressive" && metrics.volatility > 40) score += 1;
  
  // PE ratio
  if (metrics.pe && metrics.pe < 20) score += 1;
  if (metrics.pe && metrics.pe > 50) score -= 1;
  
  // Dividend (matters for conservative)
  if (profile === "conservative" && metrics.dividendYield && metrics.dividendYield > 1) score += 1;
  
  let recommendation: "buy" | "hold" | "sell";
  if (score >= 2) recommendation = "buy";
  else if (score <= -2) recommendation = "sell";
  else recommendation = "hold";
  
  const summaries = {
    buy: `${name} shows strong fundamentals aligned with your ${profile} investment strategy.`,
    hold: `${name} presents a mixed picture. Consider monitoring before making changes.`,
    sell: `${name} may not align well with your ${profile} risk tolerance at current levels.`,
  };
  
  const justifications = {
    buy: `The stock has shown ${metrics.change1y > 0 ? "positive" : "recovering"} momentum with ${metrics.change1y.toFixed(1)}% annual performance. ${metrics.pe ? `P/E ratio of ${metrics.pe.toFixed(1)} suggests reasonable valuation.` : ""} ${metrics.dividendYield ? `Dividend yield of ${metrics.dividendYield.toFixed(2)}% provides income.` : ""} Volatility of ${metrics.volatility.toFixed(1)}% ${profile === "aggressive" ? "offers trading opportunities" : "is within acceptable range"}.`,
    hold: `Mixed signals: ${metrics.change1y.toFixed(1)}% annual change with ${metrics.volatility.toFixed(1)}% volatility. ${metrics.pe ? `P/E of ${metrics.pe.toFixed(1)} is neither cheap nor expensive.` : ""} Wait for clearer trend confirmation before acting.`,
    sell: `Concerns include ${metrics.change1y < 0 ? `negative ${Math.abs(metrics.change1y).toFixed(1)}% annual return` : "slowing momentum"} and ${metrics.volatility > 35 ? "elevated" : "moderate"} volatility at ${metrics.volatility.toFixed(1)}%. ${profile === "conservative" ? "Risk level may exceed your comfort zone." : "Better opportunities may exist elsewhere."}`,
  };
  
  return {
    recommendation,
    summary: summaries[recommendation],
    justification: justifications[recommendation],
  };
}
