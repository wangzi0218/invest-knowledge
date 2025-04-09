"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, X, TrendingUp, BarChart } from "lucide-react";
import { searchContents, SearchContent, PageSection } from "@/data/search-content";

// 搜索结果类型
interface SearchResult extends SearchContent {
  matchedSections?: PageSection[];
  relevance: number;
}

// 不再使用静态数据
/*
const investmentTopics = [
  {
    title: "一级市场",
    description: "了解一级市场的基本概念、特点及运作机制",
    href: "/primary-market",
    category: "市场",
    keywords: "IPO, 首次公开发行, 证券发行, 承销商, 路演, 询价, 定价, 配售, 融资"
  },
  {
    title: "二级市场",
    description: "探索二级市场的交易方式、参与者及市场规则",
    href: "/secondary-market",
    category: "市场",
    keywords: "股票交易, 市场深度, 流动性, 价格发现, 市场波动, 牛市, 熊市, 市场恐慌, 市场恐惧, 投资者心理, 技术分析, 基本面分析"
  },
  {
    title: "证券",
    description: "掌握各类证券的基本知识、风险特征及投资策略",
    href: "/securities",
    category: "投资工具"
  },
  {
    title: "理财产品",
    description: "了解常见理财产品的类型、收益特点及适合人群",
    href: "/financial-products",
    category: "投资工具"
  },
  {
    title: "基金",
    description: "认识不同类型基金的投资目标、策略及风险收益特征",
    href: "/funds",
    category: "投资工具"
  },
  {
    title: "ETF",
    description: "探索ETF的运作机制、优势及投资方法",
    href: "/etf",
    category: "投资工具"
  },
  {
    title: "保险投资",
    description: "了解保险作为投资工具的特点、类型及适用场景",
    href: "/insurance",
    category: "投资工具"
  },
  {
    title: "黄金与贵金属",
    description: "探索黄金等贵金属投资的特性、方式及避险功能",
    href: "/precious-metals",
    category: "投资工具"
  },
  {
    title: "房地产投资",
    description: "分析房地产投资的特点、方式及风险收益特征",
    href: "/real-estate",
    category: "投资工具"
  },
  {
    title: "另类投资",
    description: "了解艺术品、收藏品等另类投资的特点与价值",
    href: "/alternative-investments",
    category: "投资工具"
  },
  {
    title: "监管与规则",
    description: "了解投资市场的监管框架、法规及投资者保护机制",
    href: "/regulations",
    category: "投资知识"
  },
  {
    title: "国内外证券市场",
    description: "比较国内外证券市场的异同、特点及投资机会",
    href: "/domestic-international",
    category: "市场"
  },
  {
    title: "投资信息服务",
    description: "探讨信息服务在投资决策中的价值与应用",
    href: "/investment-services",
    category: "投资知识"
  },
  {
    title: "投资心理学",
    description: "了解投资者心理和行为偏差对投资决策的影响",
    href: "/investment-psychology",
    category: "投资知识",
    keywords: "过度自信, 损失厌恶, 从众心理, 锁定效应, 恐惧, 贪婪, 市场恐慌, 情绪化投资, 行为金融学, 非理性决策, 心理偏差, 错误归因, 效用启发式, 锁定效应, 浮动亏损效应"
  },
  {
    title: "投资案例分析",
    description: "通过真实案例学习投资成功与失败的经验教训",
    href: "/investment-cases",
    category: "投资知识",
    keywords: "成功投资者, 巴菲特, 格雷厄姆, 彭博, 历史泡沫, 市场崩盘, 金融危机, 市场恐慌, 市场波动, 投资策略, 价值投资, 成长投资, 指数投资, 主动管理, 被动管理"
  },
  {
    title: "财务规划",
    description: "学习个人和家庭财务规划的方法和策略",
    href: "/financial-planning",
    category: "投资知识"
  },
  {
    title: "全球投资视角",
    description: "了解全球投资趋势和跨境投资机会",
    href: "/global-perspective",
    category: "投资知识",
    keywords: "全球化, 跨境投资, 国际化, 新兴市场, 发达市场, 地缘政治, 货币政策, 汇率风险, 可持续投资, ESG, 数字化转型, 能源转型, 供应链重构, 人口结构变化, 市场周期, 全球化风险, 市场恐慌"
  },
  {
    title: "投资教育",
    description: "获取家庭投资教育和儿童财商培养的资源和方法",
    href: "/investment-education",
    category: "投资知识"
  },
  {
    title: "定期存款",
    description: "了解定期存款的特点、类型和投资策略",
    href: "/time-deposit",
    category: "投资工具"
  },
  {
    title: "养老金投资",
    description: "探索养老金投资的规划方法和策略",
    href: "/pension",
    category: "投资工具"
  }
];*/

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 shrink-0 group">
          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <span className="font-bold text-xl max-md:text-lg bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:from-primary/90 group-hover:to-primary transition-all">投资知识库</span>
        </Link>
        <div className="flex justify-end items-center">
          <SearchComponent />
        </div>
      </div>
    </header>
  );
}

import React from "react";

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  // 检测屏幕尺寸
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // 处理搜索
  const handleSearch = (searchQuery: string) => {
    if (searchQuery.length === 0) {
      setResults([]);
      return;
    }
    
    const query = searchQuery.toLowerCase().trim();
    const searchResults: SearchResult[] = [];
    
    // 基于实际内容搜索
    searchContents.forEach(content => {
      // 初始相关度计算
      let relevance = 0;
      const matchedSections: PageSection[] = [];
      
      // 检查标题和描述匹配
      if (content.title.toLowerCase().includes(query)) {
        relevance += 10; // 标题匹配权重高
      }
      
      if (content.description.toLowerCase().includes(query)) {
        relevance += 5; // 描述匹配次之
      }
      
      // 检查内容部分匹配
      content.sections.forEach(section => {
        const titleMatch = section.title.toLowerCase().includes(query);
        const contentMatch = section.content.toLowerCase().includes(query);
        
        if (titleMatch || contentMatch) {
          matchedSections.push(section);
          relevance += titleMatch ? 3 : 0; // 小标题匹配
          relevance += contentMatch ? 2 : 0; // 内容匹配
        }
      });
      
      // 如果有匹配，添加到结果中
      if (relevance > 0) {
        searchResults.push({
          ...content,
          matchedSections,
          relevance
        });
      }
    });
    
    // 按相关性排序
    searchResults.sort((a, b) => b.relevance - a.relevance);
    
    setResults(searchResults);
  };

  // 当输入变化时更新搜索
  useEffect(() => {
    handleSearch(query);
  }, [query]);

  // 点击外部关闭搜索结果
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 清除搜索
  const clearSearch = () => {
    setQuery('');
    setResults([]);
  };

  return (
    <div className="relative w-full max-w-[600px] md:max-w-[500px] lg:max-w-[600px]" ref={searchRef}>
      <div className="flex items-center w-full">
        <div className="relative w-full">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="搜索投资主题..."
            className="pl-10 pr-10 w-full h-10"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground"
              onClick={clearSearch}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* 搜索结果下拉框 */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-1 w-full bg-background border rounded-md shadow-md z-50 max-h-[400px] overflow-y-auto">
          <div className="p-2">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">搜索结果</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 px-2 text-xs" 
                onClick={() => setIsOpen(false)}
              >
                关闭
              </Button>
            </div>
            <ul className="space-y-1">
              {results.map((result) => (
                <li key={result.href}>
                  <Link 
                    href={result.href}
                    className="block p-2 rounded-md hover:bg-muted"
                    onClick={() => {
                      setIsOpen(false);
                      clearSearch();
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div className="flex-1 min-w-0"> {/* min-w-0 防止子元素溢出 */}
                        <p className="text-sm font-medium truncate">{result.title}</p>
                        <p className="text-xs text-muted-foreground line-clamp-2">{result.description}</p>
                        
                        {/* 显示匹配的内容片段 */}
                        {result.matchedSections && result.matchedSections.length > 0 && (
                          <div className="mt-1">
                            {result.matchedSections.slice(0, 1).map((section, idx) => {
                              // 提取匹配的上下文
                              const content = section.content;
                              const lowerContent = content.toLowerCase();
                              const lowerQuery = query.toLowerCase();
                              const matchIndex = lowerContent.indexOf(lowerQuery);
                              
                              if (matchIndex >= 0) {
                                // 计算要显示的上下文范围
                                const start = Math.max(0, matchIndex - 30);
                                const end = Math.min(content.length, matchIndex + query.length + 30);
                                let snippet = content.substring(start, end);
                                
                                // 添加省略号
                                if (start > 0) snippet = '...' + snippet;
                                if (end < content.length) snippet = snippet + '...';
                                
                                return (
                                  <div key={idx} className="text-xs text-muted-foreground mt-1 border-l-2 border-primary pl-2 line-clamp-3">
                                    <span className="font-medium text-primary">{section.title}:</span> {snippet}
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
                        )}
                      </div>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-muted-foreground/20 text-muted-foreground shrink-0">
                        {result.category}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 无结果提示 */}
      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full mt-1 w-full bg-background border rounded-md shadow-md z-50">
          <div className="p-4 text-center">
            <p className="text-sm text-muted-foreground">没有找到相关结果</p>
            <Button 
              variant="ghost" 
              size="sm" 
              className="mt-2 h-6 px-2 text-xs" 
              onClick={() => setIsOpen(false)}
            >
              关闭
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
