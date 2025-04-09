import React from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";

interface ComparisonItem {
  text: string;
  number: number;
}

interface ComparisonCardProps {
  positiveTitle: string;
  positiveItems: ComparisonItem[];
  negativeTitle: string;
  negativeItems: ComparisonItem[];
}

export function ComparisonCard({
  positiveTitle,
  positiveItems,
  negativeTitle,
  negativeItems
}: ComparisonCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
      <div className="border rounded-lg p-4">
        <h4 className="font-medium text-green-600 mb-2 flex items-center gap-1">
          <CheckCircle2 className="h-4 w-4" /> {positiveTitle}
        </h4>
        <ul className="space-y-2">
          {positiveItems.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mt-0.5">
                {item.number}
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border rounded-lg p-4">
        <h4 className="font-medium text-red-600 mb-2 flex items-center gap-1">
          <AlertTriangle className="h-4 w-4" /> {negativeTitle}
        </h4>
        <ul className="space-y-2">
          {negativeItems.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mt-0.5">
                {item.number}
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
