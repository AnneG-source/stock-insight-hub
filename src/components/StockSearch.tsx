import { useState } from "react";
import { Search, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface StockSearchProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export function StockSearch({ onSearch, isLoading }: StockSearchProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const examples = ["Tesla", "AAPL", "LVMH", "MC.PA", "Microsoft"];

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-4">
          <TrendingUp className="w-8 h-8 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Stock Analyzer
          </h1>
        </div>
        <p className="text-muted-foreground">
          Enter a company name or ticker symbol for AI-powered analysis
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div className="glass-card p-2 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name (Tesla) or ticker (TSLA)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 h-12 bg-transparent border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 text-lg"
              disabled={isLoading}
            />
          </div>
          <Button
            type="submit"
            variant="glow"
            size="lg"
            disabled={isLoading || !query.trim()}
            className="min-w-[120px]"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            ) : (
              "Analyze"
            )}
          </Button>
        </div>
      </form>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <span className="text-sm text-muted-foreground">Try:</span>
        {examples.map((example) => (
          <button
            key={example}
            onClick={() => {
              setQuery(example);
              onSearch(example);
            }}
            disabled={isLoading}
            className="px-3 py-1 text-sm rounded-full bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors disabled:opacity-50"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
}
