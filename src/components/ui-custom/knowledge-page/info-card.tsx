import React from "react";
import { LucideIcon, Info } from "lucide-react";

interface InfoCardProps {
  title: string;
  content: string;
  icon?: LucideIcon;
  variant?: "info" | "warning" | "success";
}

export function InfoCard({ 
  title, 
  content, 
  icon: Icon = Info,
  variant = "info"
}: InfoCardProps) {
  const variantStyles = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    warning: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    }
  };

  const styles = variantStyles[variant];

  return (
    <div className={`mb-6 ${styles.bg} border ${styles.border} p-4 rounded-lg`}>
      <div className="flex items-start gap-3">
        <div className={`rounded-full ${styles.iconBg} p-2 mt-0.5`}>
          <Icon className={`h-5 w-5 ${styles.iconColor}`} />
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{content}</p>
        </div>
      </div>
    </div>
  );
}
