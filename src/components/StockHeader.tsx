import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StockHeaderProps {
  name: string;
  ticker: string;
  price: number;
  currency: string;
  change: number;
  changePercent: number;
}

export function StockHeader({ name, ticker, price, currency, change, changePercent }: StockHeaderProps) {
  const isPositive = change >= 0;

  return (
    <div className="glass-card p-6 animate-slide-up">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-2xl font-bold">{name}</h2>
            <span className="ticker-display text-primary">{ticker}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>

        <div className="flex items-end gap-4">
          <div className="text-right">
            <div className="text-4xl font-bold font-mono">
              {currency}{price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
          
          <div className={cn(
            "flex items-center gap-1 px-3 py-2 rounded-lg font-mono text-sm font-medium",
            isPositive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
          )}>
            {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
            <span>{isPositive ? "+" : ""}{change.toFixed(2)}</span>
            <span>({isPositive ? "+" : ""}{changePercent.toFixed(2)}%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
