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
};

// Simulate name to ticker lookup
const nameToTicker: Record<string, string> = {
  tesla: "TSLA",
  apple: "AAPL",
  lvmh: "MC.PA",
  microsoft: "MSFT",
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
