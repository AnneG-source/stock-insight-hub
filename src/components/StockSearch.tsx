import { useState, useEffect, useRef } from "react";
import { Search, TrendingUp, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchStocks } from "@/lib/mockData";
import { cn } from "@/lib/utils";

interface StockSearchProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export function StockSearch({ onSearch, isLoading }: StockSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ ticker: string; name: string }[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Search as user types
  useEffect(() => {
    const filtered = searchStocks(query);
    setResults(filtered.slice(0, 8)); // Limit to 8 results
    setSelectedIndex(-1);
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (ticker: string) => {
    setQuery("");
    setIsOpen(false);
    onSearch(ticker);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleSelect(results[selectedIndex].ticker);
        } else if (query.trim()) {
          handleSelect(query.trim());
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in" ref={containerRef}>
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
            <TrendingUp className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Stock Analyzer
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Instant analysis for <span className="text-primary font-medium">20+ stocks</span> — just start typing
        </p>
      </div>

      <div className="relative">
        <div className="glass-card p-2">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Type a company name or ticker..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
              className="pl-12 h-14 bg-transparent border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 text-lg"
              disabled={isLoading}
              autoComplete="off"
            />
            {isLoading && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              </div>
            )}
          </div>
        </div>

        {/* Autocomplete dropdown */}
        {isOpen && results.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 glass-card overflow-hidden z-50 animate-fade-in">
            <div className="p-2">
              <div className="text-xs text-muted-foreground px-3 py-2 font-medium uppercase tracking-wider">
                {query ? "Search Results" : "Popular Stocks"}
              </div>
              {results.map((stock, index) => (
                <button
                  key={stock.ticker}
                  onClick={() => handleSelect(stock.ticker)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-3 rounded-lg transition-all duration-150 group",
                    index === selectedIndex
                      ? "bg-primary/20 text-foreground"
                      : "hover:bg-secondary/80 text-foreground"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center font-mono text-sm font-bold transition-colors",
                      index === selectedIndex 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-secondary text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                    )}>
                      {stock.ticker.slice(0, 2)}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{stock.ticker}</div>
                      <div className="text-sm text-muted-foreground truncate max-w-[250px]">
                        {stock.name}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={cn(
                    "w-4 h-4 text-muted-foreground transition-transform",
                    index === selectedIndex && "translate-x-1 text-primary"
                  )} />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick access chips */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <span className="text-sm text-muted-foreground mr-1">Popular:</span>
        {["NVDA", "AAPL", "TSLA", "GOOGL", "MSFT", "META"].map((ticker) => (
          <button
            key={ticker}
            onClick={() => handleSelect(ticker)}
            disabled={isLoading}
            className="px-4 py-1.5 text-sm font-medium rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all disabled:opacity-50 border border-transparent hover:border-primary/30"
          >
            {ticker}
          </button>
        ))}
      </div>
    </div>
  );
}
