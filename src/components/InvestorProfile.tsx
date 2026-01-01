import { cn } from "@/lib/utils";
import { Shield, TrendingUp, Zap } from "lucide-react";

export type ProfileType = "conservative" | "moderate" | "aggressive";

interface InvestorProfileProps {
  selected: ProfileType;
  onChange: (profile: ProfileType) => void;
}

const profiles = [
  {
    id: "conservative" as ProfileType,
    label: "Conservative",
    description: "Low risk, stable returns",
    icon: Shield,
  },
  {
    id: "moderate" as ProfileType,
    label: "Moderate",
    description: "Balanced risk/reward",
    icon: TrendingUp,
  },
  {
    id: "aggressive" as ProfileType,
    label: "Aggressive",
    description: "High risk, high potential",
    icon: Zap,
  },
];

export function InvestorProfile({ selected, onChange }: InvestorProfileProps) {
  return (
    <div className="animate-fade-in">
      <h3 className="data-label mb-4">Investor Profile</h3>
      <div className="grid grid-cols-3 gap-3">
        {profiles.map((profile) => {
          const Icon = profile.icon;
          const isSelected = selected === profile.id;
          return (
            <button
              key={profile.id}
              onClick={() => onChange(profile.id)}
              className={cn(
                "glass-card p-4 text-left transition-all duration-200 hover:border-primary/50",
                isSelected && "border-primary bg-primary/10 pulse-glow"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 mb-2",
                isSelected ? "text-primary" : "text-muted-foreground"
              )} />
              <div className="font-medium text-sm">{profile.label}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {profile.description}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
