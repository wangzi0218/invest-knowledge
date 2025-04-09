"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StickySidebarProps {
  children: ReactNode;
  className?: string;
  offsetTop?: number;
}

export function StickySidebar({ 
  children, 
  className, 
  offsetTop = 20 
}: StickySidebarProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > offsetTop);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetTop]);

  return (
    <div
      className={cn(
        "lg:sticky transition-all duration-200",
        isSticky ? "top-20" : "top-0",
        className
      )}
    >
      {children}
    </div>
  );
}

export default StickySidebar;