import React from "react";

interface QuoteCardProps {
  quote: string;
  author?: string;
  role?: string;
}

export function QuoteCard({ quote, author, role }: QuoteCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-50 border p-4 my-4">
      <div className="relative z-10">
        <blockquote className="italic text-muted-foreground border-l-4 border-blue-300 pl-4 py-1">
          "{quote}"
          {(author || role) && (
            <footer className="text-sm mt-1 font-normal">
              {author && `- ${author}`}{role && author && ", "}{role && role}
            </footer>
          )}
        </blockquote>
      </div>
    </div>
  );
}
