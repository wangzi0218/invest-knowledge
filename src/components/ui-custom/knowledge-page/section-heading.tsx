import React from "react";
import { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  icon?: LucideIcon;
  description?: string;
}

export function SectionHeading({ title, icon: Icon, description }: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        {Icon && <Icon className="h-8 w-8 text-primary" />}
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      {description && (
        <p className="text-muted-foreground ml-11">{description}</p>
      )}
    </div>
  );
}
