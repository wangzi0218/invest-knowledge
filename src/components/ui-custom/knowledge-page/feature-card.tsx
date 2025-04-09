import React from "react";
import { LucideIcon, CheckCircle2 } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  variant?: "default" | "primary" | "secondary";
}

export function FeatureCard({ 
  title, 
  description, 
  icon: Icon = CheckCircle2,
  variant = "default"
}: FeatureCardProps) {
  const variantStyles = {
    default: {
      bg: "bg-gray-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    primary: {
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    secondary: {
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  };

  const styles = variantStyles[variant];

  return (
    <div className={`${styles.bg} border rounded-lg p-4 flex flex-col items-center text-center`}>
      <div className={`rounded-full ${styles.iconBg} p-2 mb-2`}>
        <Icon className={`h-5 w-5 ${styles.iconColor}`} />
      </div>
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
