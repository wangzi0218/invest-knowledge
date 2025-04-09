import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { TrendingUp } from "lucide-react";
import { ProjectInfoDialog } from "@/components/project-info-dialog";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <Link href="/" className="group inline-flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:from-primary/90 group-hover:to-primary transition-all">投资知识库</h3>
            </Link>
            <p className="text-sm text-muted-foreground">
              投资知识库是一个面向初学者的投资学习平台，我们的目标是将复杂的投资概念简化，帮助您建立正确的投资思维和知识体系。
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-base font-medium">系统化学习</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              我们提供系统化的投资知识体系，从基础概念到实用策略，帮助您全面了解投资领域。
            </p>
            
            <div className="flex items-center gap-3 mt-4 mb-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-medium">客观中立</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              我们坚持客观中立的原则，不推荐特定投资产品，而是提供客观分析和多元视角。
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-base font-medium">持续更新</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              我们不断更新知识库内容，反映市场变化和新兴投资理念，确保您获取最新、最相关的投资知识。
            </p>
            
            <div className="flex items-center gap-3 mt-4 mb-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-base font-medium">易于理解</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              我们使用清晰直观的语言和实例解释复杂概念，让投资知识更加易懂和实用。
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 投资知识库. 保留所有权利.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <ProjectInfoDialog />
            <span className="text-sm text-muted-foreground">
              Made by <Link href="https://hiwannz.cn" target="_blank" className="text-primary hover:underline">Hiwannz</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
