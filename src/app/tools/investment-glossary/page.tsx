"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Search, HelpCircle } from "lucide-react";
import Link from "next/link";

// 投资术语数据
const investmentTerms = [
  {
    id: "compound-interest",
    term: "复利",
    category: "基础概念",
    definition: "复利是指在初始投资金额上产生的利息，再加上这些利息产生的利息。这是一种'利滚利'的计算方式。",
    example: "如果您投资10,000元，年回报率为8%，第一年结束时您将获得800元利息。第二年，您的本金变为10,800元，因此您将获得864元利息（10,800 × 8%）。",
    relatedTerms: ["单利", "复利效应", "72法则"]
  },
  {
    id: "diversification",
    term: "多元化投资",
    category: "投资策略",
    definition: "多元化投资是指将资金分散投资于不同类型的资产，以降低整体投资组合的风险。",
    example: "一个多元化的投资组合可能包括股票、债券、房地产和现金等不同资产类别，以及不同地区和行业的投资。",
    relatedTerms: ["资产配置", "相关性", "系统性风险"]
  },
  {
    id: "asset-allocation",
    term: "资产配置",
    category: "投资策略",
    definition: "资产配置是指如何在不同资产类别（如股票、债券、现金等）之间分配投资资金的策略。",
    example: "一个典型的平衡型投资组合可能包含60%的股票和40%的债券，而保守型投资组合可能包含30%的股票和70%的债券。",
    relatedTerms: ["多元化投资", "风险承受能力", "再平衡"]
  },
  {
    id: "market-capitalization",
    term: "市值",
    category: "股票投资",
    definition: "市值是指一家公司的总市场价值，计算方式为公司股票价格乘以流通股数量。",
    example: "如果一家公司有1,000万股流通股，每股价格为50元，那么该公司的市值为5亿元。",
    relatedTerms: ["大盘股", "中盘股", "小盘股"]
  },
  {
    id: "dividend",
    term: "股息",
    category: "股票投资",
    definition: "股息是公司向股东支付的一部分利润，通常以现金形式定期发放。",
    example: "如果一家公司宣布每股派发2元股息，拥有100股的投资者将获得200元的股息收入。",
    relatedTerms: ["股息率", "派息率", "除息日"]
  },
  {
    id: "pe-ratio",
    term: "市盈率",
    category: "股票投资",
    definition: "市盈率（P/E比率）是股票价格与每股收益的比率，用于评估股票的估值水平。",
    example: "如果一家公司的股票价格为50元，每股收益为2.5元，那么其市盈率为20倍（50÷2.5）。",
    relatedTerms: ["市净率", "市销率", "估值"]
  },
  {
    id: "bond-yield",
    term: "债券收益率",
    category: "债券投资",
    definition: "债券收益率是债券投资的预期回报率，通常以年化百分比表示。",
    example: "如果一张面值1,000元、票面利率为3.5%的债券以950元的价格交易，其当前收益率约为3.68%（35÷950）。",
    relatedTerms: ["到期收益率", "票面利率", "债券价格"]
  },
  {
    id: "etf",
    term: "交易所交易基金(ETF)",
    category: "基金投资",
    definition: "ETF是一种在交易所交易的投资基金，通常追踪特定指数、行业或资产类别的表现。",
    example: "沪深300 ETF追踪沪深300指数，投资者可以像买卖股票一样在交易时间内随时买卖这只ETF。",
    relatedTerms: ["指数基金", "被动投资", "跟踪误差"]
  },
  {
    id: "volatility",
    term: "波动率",
    category: "风险管理",
    definition: "波动率是衡量投资价格变动幅度的指标，通常用标准差表示。高波动率意味着价格变动较大，风险较高。",
    example: "股票市场的波动率通常高于债券市场，这也是为什么股票投资通常被认为风险更高。",
    relatedTerms: ["标准差", "贝塔系数", "风险"]
  },
  {
    id: "inflation",
    term: "通货膨胀",
    category: "经济指标",
    definition: "通货膨胀是指一般物价水平持续上涨，导致货币购买力下降的经济现象。",
    example: "如果年通货膨胀率为3%，那么今天100元的购买力在一年后将相当于约97元。",
    relatedTerms: ["CPI", "实际回报率", "通货紧缩"]
  },
  {
    id: "dollar-cost-averaging",
    term: "定投策略",
    category: "投资策略",
    definition: "定投策略是指定期投入固定金额购买特定投资产品，不考虑其价格波动。",
    example: "每月固定投资1,000元购买指数基金，无论当时市场价格如何。在市场下跌时，同样的金额可以买到更多份额。",
    relatedTerms: ["价值平均法", "长期投资", "复利效应"]
  },
  {
    id: "rebalancing",
    term: "再平衡",
    category: "投资策略",
    definition: "再平衡是指定期调整投资组合中各类资产的比例，使其回到原定的资产配置目标。",
    example: "如果您的目标资产配置是60%股票和40%债券，但由于股票市场上涨，股票比例已增至70%，再平衡就是卖出一部分股票并买入债券，使比例回到60:40。",
    relatedTerms: ["资产配置", "投资组合管理", "风险控制"]
  },
  {
    id: "risk-tolerance",
    term: "风险承受能力",
    category: "投资者特征",
    definition: "风险承受能力是指投资者在追求更高回报的同时，能够承受投资价值波动和潜在损失的能力。",
    example: "年轻投资者通常有更高的风险承受能力，因为他们有更长的时间来弥补短期损失；而接近退休的投资者风险承受能力则相对较低。",
    relatedTerms: ["风险偏好", "投资目标", "投资时间范围"]
  },
  {
    id: "bear-market",
    term: "熊市",
    category: "市场周期",
    definition: "熊市是指市场价格持续下跌的时期，通常定义为从高点下跌20%或以上。",
    example: "2008年金融危机期间，全球股市进入熊市，许多主要股指下跌了40%以上。",
    relatedTerms: ["牛市", "市场调整", "市场底部"]
  },
  {
    id: "bull-market",
    term: "牛市",
    category: "市场周期",
    definition: "牛市是指市场价格持续上涨的时期，通常定义为从低点上涨20%或以上。",
    example: "2009年至2020年，美国股市经历了历史上最长的牛市之一，标普500指数上涨了约400%。",
    relatedTerms: ["熊市", "市场回调", "市场顶部"]
  },
  {
    id: "liquidity",
    term: "流动性",
    category: "基础概念",
    definition: "流动性是指资产转换为现金的难易程度，不会显著影响其市场价格。",
    example: "大型上市公司的股票通常具有较高的流动性，可以在市场上迅速买卖而不会导致价格大幅波动。",
    relatedTerms: ["交易量", "买卖价差", "流动性风险"]
  },
  {
    id: "mutual-fund",
    term: "共同基金",
    category: "基金投资",
    definition: "共同基金是由专业基金经理管理的投资工具，汇集多个投资者的资金投资于股票、债券或其他资产。",
    example: "投资者购买某股票型基金的份额，间接持有该基金投资的所有股票，从而获得多元化投资的好处。",
    relatedTerms: ["ETF", "开放式基金", "封闭式基金", "基金净值"]
  },
  {
    id: "reit",
    term: "房地产投资信托(REITs)",
    category: "另类投资",
    definition: "REITs是一种投资工具，允许投资者购买商业地产的股份，如办公楼、购物中心、公寓等，并从中获得租金收入和潜在的资本增值。",
    example: "通过投资REITs，普通投资者可以参与大型商业地产项目，而无需直接购买和管理房地产。",
    relatedTerms: ["股息收益率", "商业地产", "被动收入"]
  },
  {
    id: "beta",
    term: "贝塔系数",
    category: "风险管理",
    definition: "贝塔系数是衡量一项投资相对于整体市场波动性的指标。贝塔为1表示与市场同步波动，大于1表示波动性高于市场，小于1表示波动性低于市场。",
    example: "科技股通常有较高的贝塔系数（如1.5），意味着当市场上涨10%时，这些股票可能上涨15%；但市场下跌时，它们也可能面临更大的跌幅。",
    relatedTerms: ["阿尔法", "系统性风险", "非系统性风险"]
  },
  {
    id: "alpha",
    term: "阿尔法",
    category: "投资绩效",
    definition: "阿尔法是衡量投资组合相对于其基准指数的超额回报的指标。正阿尔法表示表现优于基准，负阿尔法表示表现不如基准。",
    example: "如果一个基金经理的投资组合获得了12%的回报，而同期基准指数回报为10%，则该基金经理创造了2%的阿尔法。",
    relatedTerms: ["贝塔系数", "风险调整回报", "主动管理"]
  },
  {
    id: "sharpe-ratio",
    term: "夏普比率",
    category: "投资绩效",
    definition: "夏普比率是衡量投资风险调整回报的指标，计算方法是超额回报率（投资回报率减去无风险回报率）除以标准差。",
    example: "一个夏普比率为1.5的投资组合比夏普比率为0.8的投资组合提供了更好的风险调整回报，即使前者的总回报率可能较低。",
    relatedTerms: ["风险调整回报", "标准差", "索提诺比率"]
  },
  {
    id: "margin-trading",
    term: "保证金交易",
    category: "交易策略",
    definition: "保证金交易是指投资者借用券商的资金购买证券，只需支付一部分资金作为保证金。这种杠杆可以放大收益，但也会放大损失。",
    example: "投资者使用10,000元作为保证金，借入额外的10,000元购买价值20,000元的股票。如果股票上涨10%，投资者的收益率将接近20%（扣除利息）；但如果下跌10%，损失也将接近20%。",
    relatedTerms: ["杠杆", "追加保证金", "强制平仓"]
  },
  {
    id: "short-selling",
    term: "卖空",
    category: "交易策略",
    definition: "卖空是指投资者借入证券并立即卖出，希望在未来以更低的价格买回并归还，从价格下跌中获利的交易策略。",
    example: "投资者认为某股票价格过高，于是借入100股并以每股50元卖出。如果价格下跌至40元，投资者可以买回这些股票并归还，获得每股10元的利润（减去借股成本）。",
    relatedTerms: ["空头", "做多", "空头挤压"]
  },
  {
    id: "dividend-yield",
    term: "股息率",
    category: "股票投资",
    definition: "股息率是年度股息与当前股价的比率，通常以百分比表示。它是衡量投资收益中股息部分的重要指标。",
    example: "如果一家公司的股票价格为50元，每年每股派发2元股息，则其股息率为4%（2÷50）。",
    relatedTerms: ["股息", "派息率", "总回报率"]
  }
];

// 分类列表
const categories = [
  "全部",
  "基础概念",
  "投资策略",
  "股票投资",
  "债券投资",
  "基金投资",
  "风险管理",
  "经济指标",
  "市场周期",
  "投资者特征",
  "另类投资",
  "投资绩效",
  "交易策略"
];

export default function InvestmentGlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");
  const [filteredTerms, setFilteredTerms] = useState(investmentTerms);
  const [selectedTerm, setSelectedTerm] = useState<typeof investmentTerms[0] | null>(null);

  // 处理搜索和分类过滤
  useEffect(() => {
    let results = investmentTerms;
    
    // 应用分类过滤
    if (activeCategory !== "全部") {
      results = results.filter(term => term.category === activeCategory);
    }
    
    // 应用搜索过滤
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      results = results.filter(term => 
        term.term.toLowerCase().includes(searchLower) || 
        term.definition.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredTerms(results);
    
    // 如果没有选中的术语或选中的术语不在过滤结果中，选择第一个
    if (results.length > 0 && (!selectedTerm || !results.some(t => t.id === selectedTerm.id))) {
      setSelectedTerm(results[0]);
    } else if (results.length === 0) {
      setSelectedTerm(null);
    }
  }, [searchTerm, activeCategory, selectedTerm]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col space-y-2 text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">投资术语词典</h1>
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          查询常见投资术语的简明解释和实际示例，帮助您更好地理解投资概念
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* 搜索和分类侧边栏 */}
        <div className="md:col-span-1 space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Search className="h-4 w-4" />
                搜索术语
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  placeholder="输入关键词搜索..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">按分类浏览</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <Button
                        key={category}
                        variant={activeCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveCategory(category)}
                        className="text-xs"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                术语列表
              </CardTitle>
              <CardDescription>
                {filteredTerms.length} 个术语
              </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[400px] overflow-y-auto">
              <div className="space-y-1">
                {filteredTerms.map(term => (
                  <Button
                    key={term.id}
                    variant="ghost"
                    className={`w-full justify-start text-left ${selectedTerm?.id === term.id ? 'bg-primary/10 text-primary' : ''}`}
                    onClick={() => setSelectedTerm(term)}
                  >
                    {term.term}
                  </Button>
                ))}
                
                {filteredTerms.length === 0 && (
                  <div className="text-center py-4 text-muted-foreground">
                    没有找到匹配的术语
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* 术语详情 */}
        <div className="md:col-span-3">
          {selectedTerm ? (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {selectedTerm.category}
                      </span>
                    </div>
                    <CardTitle className="text-2xl">{selectedTerm.term}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-primary" />
                    定义
                  </h3>
                  <p className="text-muted-foreground">{selectedTerm.definition}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    示例
                  </h3>
                  <div className="bg-muted p-4 rounded-md text-sm">
                    {selectedTerm.example}
                  </div>
                </div>
                
                {selectedTerm.relatedTerms.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">相关术语</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedTerm.relatedTerms.map(term => (
                        <span key={term} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">请选择一个术语</h3>
              <p className="text-muted-foreground max-w-md">
                从左侧列表中选择一个投资术语，或使用搜索框查找特定术语
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Link href="/">
          <Button variant="outline">返回首页</Button>
        </Link>
      </div>
    </div>
  );
}
