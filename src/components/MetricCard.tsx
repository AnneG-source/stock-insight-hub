import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string | number;
  subValue?: string;
  icon?: ReactNode;
  trend?: "positive" | "negative" | "neutral";
  delay?: number;
}

export function MetricCard({ label, value, subValue, icon, trend = "neutral", delay = 0 }: MetricCardProps) {
  return (
    <div 
      className="glass-card p-5 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="data-label">{label}</span>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      <div className={cn(
        "text-2xl font-semibold font-mono",
        trend === "positive" && "metric-positive",
        trend === "negative" && "metric-negative",
        trend === "neutral" && "text-foreground"
      )}>
        {value}
      </div>
      {subValue && (
        <div className="text-sm text-muted-foreground mt-1">
          {subValue}
        </div>
      )}
    </div>
  );
}
