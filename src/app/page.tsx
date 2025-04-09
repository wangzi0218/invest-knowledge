import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartBar, PieChart, TrendingUp, Calculator, BookOpen, HelpCircle } from "lucide-react";

const investmentTopics = [
  {
    title: "投资启蒙与教育",
    description: "儿童财商教育、青少年投资入门、家庭投资讨论与决策、培养健康的金钱观",
    href: "/investment-education",
    icon: "🎓"
  },
  {
    title: "一级市场",
    description: "新股发行、IPO流程、询价机制、申购策略、包销与代销模式、发行定价方法",
    href: "/primary-market",
    icon: "📈"
  },
  {
    title: "二级市场",
    description: "交易所与场外市场、做市商制度、撮合交易、涨跌停机制、T+1交易规则",
    href: "/secondary-market",
    icon: "🔄"
  },
  {
    title: "证券",
    description: "股票、债券、可转债、优先股、权证、存托凭证、不同证券风险收益特征",
    href: "/securities",
    icon: "📑"
  },
  {
    title: "指数与行情",
    description: "市场指数构成、行情解读、技术指标分析、量价关系、趋势判断、市场情绪指标",
    href: "/market-indices",
    icon: "📊"
  },
  {
    title: "基金",
    description: "股票基金、债券基金、混合基金、指数基金、FOF、费率结构、净值计算",
    href: "/funds",
    icon: "📊"
  },
  {
    title: "ETF",
    description: "交易型开放式指数基金、一二级市场套利、申购赎回机制、跟踪误差分析",
    href: "/etf",
    icon: "📉"
  },
  {
    title: "保险投资",
    description: "年金保险、万能险、投连险、分红险、现金价值、保障与投资平衡策略",
    href: "/insurance",
    icon: "🛡️"
  },
  {
    title: "理财产品",
    description: "银行理财、结构性存款、货币基金、定期理财、收益率计算、流动性分析",
    href: "/financial-products",
    icon: "💰"
  },
  {
    title: "定期",
    description: "定期存款、大额存单、定期理财产品、利率与通胀、期限选择策略",
    href: "/time-deposit",
    icon: "⏱️"
  },
  {
    title: "养老金",
    description: "养老金体系、个人养老金、企业年金、养老目标基金、长期资产配置策略",
    href: "/pension",
    icon: "👵"
  },
  {
    title: "黄金与贵金属",
    description: "实物黄金、黄金ETF、黄金期货、白银投资、铂金投资、避险属性分析",
    href: "/precious-metals",
    icon: "🥇"
  },
  {
    title: "房地产投资",
    description: "自住型投资、商业地产、REITs、租金收益、增值空间、流动性考量",
    href: "/real-estate",
    icon: "🏘️"
  },
  {
    title: "另类投资",
    description: "艺术品、红酒、邮票、古董、数字藏品、稀缺性价值、收藏与投资边界",
    href: "/alternative-investments",
    icon: "🎨"
  },
  {
    title: "衍生品与复杂投资工具",
    description: "期货与期权、互换与结构性产品、量化投资工具、套期保值与投机策略",
    href: "/derivatives",
    icon: "📉"
  },
  {
    title: "投资策略与方法论",
    description: "价值投资、成长投资、指数投资、技术分析、行为金融学、估值方法",
    href: "/investment-strategies",
    icon: "📊"
  },
  {
    title: "风险管理与对冲",
    description: "风险评估模型、对冲策略、多空策略、市场中性策略、信用风险与流动性风险",
    href: "/risk-management",
    icon: "🔰"
  },
  {
    title: "金融科技与创新",
    description: "智能投顾、区块链与加密货币、大数据与人工智能、DeFi去中心化金融",
    href: "/fintech",
    icon: "🤖"
  },
  {
    title: "国内外证券市场",
    description: "A股与港股对比、美股特点、沪港通、深港通、北向与南向资金、跨境投资",
    href: "/domestic-international",
    icon: "🌐"
  },
  {
    title: "全球投资视角",
    description: "不同国家和地区的投资文化比较、全球资产配置、跨境投资的机会与挑战",
    href: "/global-perspective",
    icon: "🌎"
  },
  {
    title: "投资心理学",
    description: "常见投资心理偏误、情绪对投资决策的影响、行为金融学、健康投资心态的培养",
    href: "/investment-psychology",
    icon: "🧠"
  },
  {
    title: "投资案例与教训",
    description: "著名投资者成功案例、历史泡沫与崩盘分析、不同投资策略的表现对比",
    href: "/investment-cases",
    icon: "📜"
  },
  {
    title: "投资与财务规划",
    description: "全生命周期的财务规划、重大生活事件的财务准备、家庭资产配置与财富传承",
    href: "/financial-planning",
    icon: "💳"
  },
  {
    title: "监管与规则",
    description: "证监会职责、交易所规则、信息披露制度、投资者适当性、违规处罚机制",
    href: "/regulations",
    icon: "⚖️"
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      {/* Hero Section */}
      <section className="py-8 md:py-16 lg:py-20 flex flex-col items-center text-center space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
          通俗易懂的<span className="text-primary">投资知识库</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
        探索各个投资领域的基础知识，通过简单易懂的示例与说明，轻松掌握投资概念
        </p>
      </section>

      {/* Topics Section */}
      <section className="py-8 space-y-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            投资主题知识
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            探索各个投资领域的基础知识，从市场机制到各类投资产品
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {investmentTopics.map((topic) => (
            <Link href={topic.href} key={topic.title} className="block h-full">
              <Card className="group hover:shadow-md transition-all h-full cursor-pointer hover:border-primary hover:bg-primary/5">
                <CardHeader className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{topic.icon}</span>
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                  </div>
                  <CardDescription className="text-xs">{topic.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Investment Tools Section */}
      <section className="py-8 mt-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            投资实用工具
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            使用这些互动工具辅助您的投资决策，简单易用且提供详细解释
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/tools/risk-assessment" className="block h-full">
            <Card className="group hover:shadow-md transition-all h-full cursor-pointer hover:border-primary hover:bg-primary/5">
              <CardHeader className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                    <ChartBar className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-base">风险偏好评估</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  评估您的风险承受能力，获取适合的投资建议
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          
          <Link href="/tools/portfolio-simulator" className="block h-full">
            <Card className="group hover:shadow-md transition-all h-full cursor-pointer hover:border-primary hover:bg-primary/5">
              <CardHeader className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                    <PieChart className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-base">投资组合模拟器</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  测试不同资产配置的预期回报和风险水平
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          
          <Link href="/tools/compound-calculator" className="block h-full">
            <Card className="group hover:shadow-md transition-all h-full cursor-pointer hover:border-primary hover:bg-primary/5">
              <CardHeader className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-base">复利计算器</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  直观展示长期投资和复利的强大效果
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          
          <Link href="/tools/investment-glossary" className="block h-full">
            <Card className="group hover:shadow-md transition-all h-full cursor-pointer hover:border-primary hover:bg-primary/5">
              <CardHeader className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-base">投资术语词典</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  查询常见投资术语的简明解释和示例
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>


    </div>
  );
}
