import { useState } from "react";
import { StockSearch } from "@/components/StockSearch";
import { StockHeader } from "@/components/StockHeader";
import { MetricCard } from "@/components/MetricCard";
import { InvestorProfile, ProfileType } from "@/components/InvestorProfile";
import { RecommendationCard, Recommendation } from "@/components/RecommendationCard";
import { resolveTickerFromName, getStockData, generateRecommendation, StockData } from "@/lib/mockData";
import { useToast } from "@/hooks/use-toast";
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  DollarSign, 
  PieChart,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

export default function Index() {
  const [isLoading, setIsLoading] = useState(false);
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [investorProfile, setInvestorProfile] = useState<ProfileType>("moderate");
  const [recommendation, setRecommendation] = useState<{
    recommendation: Recommendation;
    summary: string;
    justification: string;
  } | null>(null);
  const [isGeneratingRec, setIsGeneratingRec] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setStockData(null);
    setRecommendation(null);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const ticker = resolveTickerFromName(query);
    
    if (!ticker) {
      toast({
        variant: "destructive",
        title: "Stock not found",
        description: `Could not find data for "${query}". Try a ticker like AAPL or TSLA.`,
      });
      setIsLoading(false);
      return;
    }

    const data = getStockData(ticker);
    
    if (!data) {
      toast({
        variant: "destructive",
        title: "Data unavailable",
        description: "Could not retrieve stock data. Please try again.",
      });
      setIsLoading(false);
      return;
    }

    setStockData(data);
    setIsLoading(false);

    // Generate recommendation with delay
    setIsGeneratingRec(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const rec = generateRecommendation(data, investorProfile);
    setRecommendation(rec);
    setIsGeneratingRec(false);
  };

  const handleProfileChange = async (profile: ProfileType) => {
    setInvestorProfile(profile);
    
    if (stockData) {
      setIsGeneratingRec(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      const rec = generateRecommendation(stockData, profile);
      setRecommendation(rec);
      setIsGeneratingRec(false);
    }
  };

  const getTrend = (value: number): "positive" | "negative" | "neutral" => {
    if (value > 0) return "positive";
    if (value < 0) return "negative";
    return "neutral";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="relative container mx-auto px-4 py-12">
        {/* Search Section */}
        <section className="mb-12">
          <StockSearch onSearch={handleSearch} isLoading={isLoading} />
        </section>

        {/* Results Section */}
        {stockData && (
          <div className="space-y-6 max-w-6xl mx-auto">
            {/* Stock Header */}
            <StockHeader
              name={stockData.name}
              ticker={stockData.ticker}
              price={stockData.price}
              currency={stockData.currency}
              change={stockData.change}
              changePercent={stockData.changePercent}
            />

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricCard
                label="1 Month"
                value={`${stockData.metrics.change1m > 0 ? "+" : ""}${stockData.metrics.change1m.toFixed(1)}%`}
                icon={stockData.metrics.change1m >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                trend={getTrend(stockData.metrics.change1m)}
                delay={0}
              />
              <MetricCard
                label="6 Months"
                value={`${stockData.metrics.change6m > 0 ? "+" : ""}${stockData.metrics.change6m.toFixed(1)}%`}
                icon={stockData.metrics.change6m >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                trend={getTrend(stockData.metrics.change6m)}
                delay={50}
              />
              <MetricCard
                label="1 Year"
                value={`${stockData.metrics.change1y > 0 ? "+" : ""}${stockData.metrics.change1y.toFixed(1)}%`}
                icon={stockData.metrics.change1y >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                trend={getTrend(stockData.metrics.change1y)}
                delay={100}
              />
              <MetricCard
                label="Volatility"
                value={`${stockData.metrics.volatility.toFixed(1)}%`}
                icon={<Activity className="w-4 h-4" />}
                trend={stockData.metrics.volatility > 40 ? "negative" : stockData.metrics.volatility > 25 ? "neutral" : "positive"}
                delay={150}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricCard
                label="P/E Ratio"
                value={stockData.metrics.pe?.toFixed(1) ?? "N/A"}
                icon={<PieChart className="w-4 h-4" />}
                delay={200}
              />
              <MetricCard
                label="Dividend Yield"
                value={stockData.metrics.dividendYield ? `${stockData.metrics.dividendYield.toFixed(2)}%` : "N/A"}
                icon={<DollarSign className="w-4 h-4" />}
                trend={stockData.metrics.dividendYield ? "positive" : "neutral"}
                delay={250}
              />
              <MetricCard
                label="Market Cap"
                value={stockData.metrics.marketCap}
                icon={<BarChart3 className="w-4 h-4" />}
                delay={300}
              />
              <MetricCard
                label="52W Range"
                value={`${stockData.currency}${stockData.metrics.low52w} - ${stockData.currency}${stockData.metrics.high52w}`}
                subValue={`Current: ${((stockData.price - stockData.metrics.low52w) / (stockData.metrics.high52w - stockData.metrics.low52w) * 100).toFixed(0)}%`}
                delay={350}
              />
            </div>

            {/* Investor Profile & Recommendation */}
            <div className="grid md:grid-cols-2 gap-6">
              <InvestorProfile
                selected={investorProfile}
                onChange={handleProfileChange}
              />
              <RecommendationCard
                recommendation={recommendation?.recommendation}
                summary={recommendation?.summary}
                justification={recommendation?.justification}
                isLoading={isGeneratingRec}
              />
            </div>
          </div>
        )}

        {/* Empty State */}
        {!stockData && !isLoading && (
          <div className="text-center py-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/50 mb-6">
              <BarChart3 className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium text-muted-foreground mb-2">
              No stock selected
            </h3>
            <p className="text-muted-foreground/60">
              Search for a stock above to see detailed analysis
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
