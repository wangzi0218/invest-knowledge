"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronUp, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const pathname = usePathname();
  
  // 检查是否是工具页面或首页
  const isToolsPage = pathname.startsWith("/tools");
  const isHomePage = pathname === "/";

  // 在路径变化时重置状态
  useEffect(() => {
    // 重置进度条和按钮状态
    setScrollProgress(0);
    setShowButton(false);
    
    // 确保页面滚动到顶部
    window.scrollTo(0, 0);
  }, [pathname]);
  
  // 计算滚动进度
  useEffect(() => {
    // 如果是工具页面或首页，不添加滚动监听
    if (isToolsPage || isHomePage) return;
    
    // 初始化时确保状态重置
    setScrollProgress(0);
    setShowButton(false);
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // 当滚动超过页面高度的20%时显示回到顶部按钮
      setShowButton(window.scrollY > document.documentElement.clientHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isToolsPage, isHomePage, pathname]);

  // 回到顶部的函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 如果是工具页面或首页，不显示进度条和回到顶部按钮
  if (isToolsPage || isHomePage) {
    return null;
  }
  
  return (
    <>
      {/* 进度条 */}
      <div className="fixed top-14 left-0 w-full h-1 bg-gray-200 z-40">
        <div 
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 导航按钮组 */}
      <div className={cn(
        "fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-40 transition-opacity duration-300",
        showButton ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        {/* 回到顶部按钮 */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-primary text-primary-foreground rounded-full shadow-md hover:bg-primary/90 hover:scale-110 transition-all duration-200"
          aria-label="回到顶部"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
        
        {/* 返回首页按钮 */}
        <Link href="/" aria-label="返回首页">
          <button
            className="p-3 bg-primary text-primary-foreground rounded-full shadow-md hover:bg-primary/90 hover:scale-110 transition-all duration-200"
          >
            <Home className="h-5 w-5" />
          </button>
        </Link>
      </div>
    </>
  );
}
