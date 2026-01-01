import { cn } from "@/lib/utils";
import { ThumbsUp, Minus, ThumbsDown, Loader2 } from "lucide-react";

export type Recommendation = "buy" | "hold" | "sell";

interface RecommendationCardProps {
  recommendation?: Recommendation;
  summary?: string;
  justification?: string;
  isLoading?: boolean;
}

const recommendationConfig = {
  buy: {
    label: "BUY",
    icon: ThumbsUp,
    className: "text-success border-success/30 bg-success/10",
    iconClass: "text-success",
  },
  hold: {
    label: "HOLD",
    icon: Minus,
    className: "text-warning border-warning/30 bg-warning/10",
    iconClass: "text-warning",
  },
  sell: {
    label: "SELL",
    icon: ThumbsDown,
    className: "text-destructive border-destructive/30 bg-destructive/10",
    iconClass: "text-destructive",
  },
};

export function RecommendationCard({ recommendation, summary, justification, isLoading }: RecommendationCardProps) {
  if (isLoading) {
    return (
      <div className="glass-card p-6 animate-fade-in">
        <div className="flex items-center justify-center gap-3 py-8">
          <Loader2 className="w-6 h-6 text-primary animate-spin" />
          <span className="text-muted-foreground">Generating AI recommendation...</span>
        </div>
      </div>
    );
  }

  if (!recommendation) return null;

  const config = recommendationConfig[recommendation];
  const Icon = config.icon;

  return (
    <div className="glass-card p-6 animate-slide-up">
      <h3 className="data-label mb-4">AI Recommendation</h3>
      
      <div className="flex items-start gap-4">
        <div className={cn(
          "flex-shrink-0 w-16 h-16 rounded-xl border-2 flex items-center justify-center",
          config.className
        )}>
          <Icon className={cn("w-7 h-7", config.iconClass)} />
        </div>
        
        <div className="flex-1">
          <div className={cn(
            "text-2xl font-bold font-mono tracking-wider mb-2",
            recommendation === "buy" && "metric-positive",
            recommendation === "hold" && "text-warning",
            recommendation === "sell" && "metric-negative"
          )}>
            {config.label}
          </div>
          
          {summary && (
            <p className="text-foreground mb-3">{summary}</p>
          )}
          
          {justification && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {justification}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
