'use client';

import { useState, useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, X } from "lucide-react";
import Link from "next/link";
import Fuse from 'fuse.js';
import type { FuseResult, FuseResultMatch } from 'fuse.js';

// 搜索数据结构
type SearchItem = {
  title: string;
  description: string;
  href: string;
  category: string;
  sections?: Array<{
    title: string;
    id: string;
    content: string;
  }>;
};

// 投资主题和内容数据
const searchData: SearchItem[] = [
  {
    title: "一级市场",
    description: "了解一级市场的基本概念、特点及运作机制",
    href: "/primary-market",
    category: "市场",
    sections: [
      {
        title: "一级市场定义",
        id: "primary-market-definition",
        content: "一级市场是指证券首次发行和认购的市场，企业通过一级市场直接从投资者处筹集资金。"
      },
      {
        title: "一级市场参与者",
        id: "primary-market-participants",
        content: "一级市场的主要参与者包括发行人、承销商、投资银行、投资者等。"
      },
      {
        title: "IPO流程",
        id: "ipo-process",
        content: "首次公开发行(IPO)是企业在一级市场最常见的融资方式，包括路演、询价、定价、配售等环节。"
      }
    ]
  },
  {
    title: "二级市场",
    description: "探索二级市场的交易方式、参与者及市场规则",
    href: "/secondary-market",
    category: "市场"
  },
  {
    title: "证券",
    description: "掌握各类证券的基本知识、风险特征及投资策略",
    href: "/securities",
    category: "投资工具",
    sections: [
      {
        title: "股票",
        id: "stocks",
        content: "股票代表对公司的所有权，投资者通过持有股票成为公司股东，可以享受公司分红和股价增值。"
      },
      {
        title: "债券",
        id: "bonds",
        content: "债券是债务凭证，投资者通过购买债券成为债权人，可以获得固定的利息收入和到期本金返还。"
      },
      {
        title: "衍生品",
        id: "derivatives",
        content: "衍生品是基于基础资产价格变动而设计的金融工具，包括期货、期权、互换等。"
      }
    ]
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
    category: "投资工具",
    sections: [
      {
        title: "股票基金",
        id: "equity-funds",
        content: "股票基金主要投资于股票市场，追求长期资本增值，风险较高但长期回报潜力也较大。"
      },
      {
        title: "债券基金",
        id: "bond-funds",
        content: "债券基金主要投资于各类债券，追求稳定收益和本金保值，风险通常低于股票基金。"
      },
      {
        title: "混合基金",
        id: "mixed-funds",
        content: "混合基金同时投资股票和债券等多种资产，追求平衡的风险和回报。"
      },
      {
        title: "指数基金",
        id: "index-funds",
        content: "指数基金追踪特定市场指数，提供低成本的市场平均回报，是被动投资的代表。"
      }
    ]
  },
  {
    title: "ETF",
    description: "探索ETF的运作机制、优势及投资方法",
    href: "/etf",
    category: "投资工具",
    sections: [
      {
        title: "ETF定义与特点",
        id: "etf-definition",
        content: "ETF(交易所交易基金)是在交易所上市交易的基金产品，兼具开放式基金和股票的特点。"
      },
      {
        title: "ETF运作机制",
        id: "etf-mechanism",
        content: "ETF通过独特的申购赎回机制和二级市场交易，保持其价格与净值的一致性。"
      },
      {
        title: "ETF分类",
        id: "etf-types",
        content: "ETF按照跟踪标的可分为股票ETF、债券ETF、商品ETF等；按照投资策略可分为宽基ETF、行业ETF、主题ETF等。"
      },
      {
        title: "ETF投资优势",
        id: "etf-advantages",
        content: "ETF具有低成本、高流动性、透明度高、税收效率高等优势，适合各类投资者。"
      }
    ]
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
    sections: [
      {
        title: "常见投资心理偏差",
        id: "psychological-biases",
        content: "投资者常见的心理偏差包括过度自信、损失厌恶、锚定效应、从众心理等，这些偏差会导致非理性决策。"
      },
      {
        title: "情绪与投资决策",
        id: "emotions-and-decisions",
        content: "恐惧和贪婪是影响投资决策的两种主要情绪，市场波动往往会放大这些情绪反应。"
      },
      {
        title: "行为金融学的关键发现",
        id: "behavioral-finance",
        content: "行为金融学研究表明，市场并非完全有效，投资者的非理性行为会导致市场异常现象。"
      },
      {
        title: "构建健康投资心态",
        id: "healthy-investment-mindset",
        content: "健康的投资心态需要自我认知、情绪管理、纪律性和长期思维，有助于避免常见的投资错误。"
      }
    ]
  },
  {
    title: "投资案例分析",
    description: "通过真实案例学习投资成功与失败的经验教训",
    href: "/investment-cases",
    category: "投资知识"
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
    category: "投资知识"
  },
  {
    title: "投资教育",
    description: "获取家庭投资教育和儿童财商培养的资源和方法",
    href: "/investment-education",
    category: "投资知识",
    sections: [
      {
        title: "儿童财商教育",
        id: "children-financial-literacy",
        content: "儿童财商教育应根据不同年龄段设计合适的内容，从简单的金钱认知到复杂的投资概念，循序渐进。"
      },
      {
        title: "家庭投资讨论与决策",
        id: "family-investment-discussion",
        content: "家庭投资讨论是培养下一代财商的重要方式，包括共同制定目标、分析选择和评估结果等环节。"
      },
      {
        title: "培养健康的金钱观",
        id: "healthy-money-mindset",
        content: "健康的金钱观是成功投资的基础，包括丰足思维、平衡关系和责任意识等核心要素。"
      },
      {
        title: "投资教育资源",
        id: "education-resources",
        content: "投资教育资源包括适合不同年龄段的图书、游戏、应用、课程和实践活动等。"
      }
    ]
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
];

// 配置Fuse.js搜索选项
const fuseOptions = {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'description', weight: 2 },
    { name: 'category', weight: 1 },
    { name: 'sections.title', weight: 2 },
    { name: 'sections.content', weight: 1.5 }
  ],
  threshold: 0.4, // 较低的阈值意味着更严格的匹配
  includeScore: true,
  includeMatches: true // 包含匹配信息，用于高亮显示
};

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FuseResult<SearchItem>[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const fuse = new Fuse(searchData, fuseOptions);

  // 处理搜索
  const handleSearch = (searchQuery: string) => {
    if (searchQuery.length === 0) {
      setResults([]);
      return;
    }
    
    const searchResults = fuse.search(searchQuery);
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
    <div className="relative" ref={searchRef}>
      <div className="flex items-center">
        <div className="relative w-full">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="搜索投资主题..."
            className="pl-10 pr-10 w-[300px]"
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
            <h3 className="text-sm font-medium text-muted-foreground mb-2">搜索结果</h3>
            <ul className="space-y-2">
              {results.map((result, index) => {
                // 检查是否有匹配的子标题或内容
                const sectionMatches = result.matches?.filter((match) => 
                  match.key?.startsWith('sections.') && match.indices.length > 0
                );
                
                // 确定要跳转的URL
                let targetUrl = result.item.href;
                
                // 如果匹配到了特定的子标题，添加锚点
                if (sectionMatches && sectionMatches.length > 0) {
                  const sectionMatch = sectionMatches[0];
                  if (sectionMatch.key?.includes('sections.title')) {
                    const sectionIndex = parseInt(sectionMatch.key.split('.')[1]);
                    if (!isNaN(sectionIndex) && result.item.sections && result.item.sections[sectionIndex]) {
                      targetUrl = `${result.item.href}#${result.item.sections[sectionIndex].id}`;
                    }
                  }
                }
                
                return (
                  <li key={`${result.item.href}-${index}`} className="border-b last:border-b-0 pb-2">
                    <Link 
                      href={targetUrl}
                      className="block p-2 rounded-md hover:bg-muted"
                      onClick={() => {
                        setIsOpen(false);
                        clearSearch();
                      }}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <p className="text-sm font-medium">{result.item.title}</p>
                          <p className="text-xs text-muted-foreground">{result.item.description}</p>
                        </div>
                        <span className="text-xs px-1.5 py-0.5 rounded bg-muted-foreground/20 text-muted-foreground">
                          {result.item.category}
                        </span>
                      </div>
                      
                      {/* 如果有匹配的子标题或内容，显示匹配项 */}
                      {sectionMatches && sectionMatches.length > 0 && (
                        <div className="mt-1 border-l-2 border-primary pl-2">
                          {sectionMatches.slice(0, 2).map((match, mIdx: number) => {
                            if (match.key?.includes('sections.title')) {
                              const sectionIndex = parseInt(match.key.split('.')[1]);
                              if (!isNaN(sectionIndex) && result.item.sections && result.item.sections[sectionIndex]) {
                                return (
                                  <div key={`title-${mIdx}`} className="mt-1">
                                    <p className="text-xs font-medium text-primary">
                                      → {result.item.sections[sectionIndex].title}
                                    </p>
                                  </div>
                                );
                              }
                            } else if (match.key?.includes('sections.content')) {
                              const sectionIndex = parseInt(match.key.split('.')[1]);
                              if (!isNaN(sectionIndex) && result.item.sections && result.item.sections[sectionIndex]) {
                                const content = result.item.sections[sectionIndex].content;
                                const matchIndices = match.indices;
                                
                                // 展示匹配的内容片段，并高亮匹配部分
                                if (matchIndices.length > 0) {
                                  // 获取匹配的第一个片段
                                  const [start, end] = matchIndices[0];
                                  const preMatch = content.substring(Math.max(0, start - 10), start);
                                  const match = content.substring(start, end + 1);
                                  const postMatch = content.substring(end + 1, Math.min(content.length, end + 30));
                                  
                                  return (
                                    <div key={`content-${mIdx}`} className="mt-1">
                                      <p className="text-xs text-muted-foreground">
                                        {preMatch}<span className="bg-yellow-100 text-yellow-900">{match}</span>{postMatch}...
                                      </p>
                                    </div>
                                  );
                                }
                              }
                            }
                            return null;
                          })}
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {/* 无结果提示 */}
      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full mt-1 w-full bg-background border rounded-md shadow-md z-50">
          <div className="p-4 text-center">
            <p className="text-sm text-muted-foreground">没有找到相关结果</p>
          </div>
        </div>
      )}
    </div>
  );
}
