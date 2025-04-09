"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight, BookOpen, LineChart, BarChart2, TrendingUp, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";


export default function InvestmentStrategiesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>投资策略与方法论</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">投资策略与方法论</h1>
        <p className="text-xl text-muted-foreground">
          探索不同的投资策略、分析方法和决策框架，帮助您构建适合自己的投资体系
        </p>
      </div>
      
      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8" id="main-content">
              <div id="value-growth-basics">
                <h2 className="text-2xl font-bold mb-4">价值与成长投资</h2>
                <p className="text-muted-foreground mb-4">基于公司基本面和成长潜力的投资策略</p>
              </div>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>市场表现</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>长期来看，价值投资和成长投资的表现会交替领先，但价值投资在长周期内通常提供更稳定的风险调整后回报。</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader id="value-investing">
                  <CardTitle>价值投资基础</CardTitle>
                  <CardDescription>价值投资的核心理念、分析方法和实践原则</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    价值投资是一种寻找被市场低估的证券并长期持有的投资策略，由本杰明·格雷厄姆创立并被沃伦·巴菲特等投资大师发扬光大。价值投资者相信市场短期内可能非理性，但长期来看价格终将反映内在价值。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">价值投资的核心原则</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>安全边际：以显著低于内在价值的价格购买资产，为投资提供保护缓冲</li>
                    <li>长期视角：关注公司的长期基本面而非短期市场波动</li>
                    <li>独立思考：形成自己的投资判断，不盲从市场情绪</li>
                    <li>理性分析：基于事实和数据做出决策，而非情绪和猜测</li>
                  </ul>
                  <h3 className="text-lg font-semibold mt-4">基本面分析方法</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>财务报表分析：研究公司的资产负债表、利润表和现金流量表</li>
                    <li>竞争优势评估：分析公司的护城河和可持续竞争优势</li>
                    <li>管理层评价：考察管理团队的能力、诚信和股东友好度</li>
                    <li>行业分析：了解行业趋势、竞争格局和监管环境</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>成长投资</CardTitle>
                  <CardDescription>成长型股票的特征、筛选方法和投资策略</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    成长投资关注那些收入和利润增长快于平均水平的公司，即使当前估值较高，成长投资者也愿意支付溢价，押注未来的高增长将证明当前价格是合理的。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">成长型股票的主要特征</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>高收入增长率：销售额增长显著高于行业平均水平</li>
                    <li>高利润增长率：盈利能力持续提升</li>
                    <li>高投资回报率：资本使用效率高</li>
                    <li>创新能力：持续推出新产品或服务，保持竞争优势</li>
                    <li>市场领导地位：在细分市场占据领先位置或快速获取市场份额</li>
                  </ul>
                </CardContent>
              </Card>
              
              <div id="index-passive-basics" className="pt-8">
                <h2 className="text-2xl font-bold mb-4">指数与被动投资</h2>
                <p className="text-muted-foreground mb-4">低成本、高效率的市场参与策略</p>
              </div>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>市场趋势</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>被动投资在全球范围内持续增长，目前管理的资产规模已超过主动管理型基金，ETF市场规模超过10万亿美元。</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader id="index-investing">
                  <CardTitle>指数投资原理</CardTitle>
                  <CardDescription>指数投资的原理、优势和实施方法</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    指数投资是一种通过购买跟踪特定市场指数的基金或ETF，以获得与该指数相近回报的投资策略。这种方法基于有效市场假说，认为长期来看大多数主动管理型基金难以持续战胜市场。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">指数投资的主要优势</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>低成本：管理费用和交易成本显著低于主动管理型基金</li>
                    <li>多元化：一次投资即可获得广泛的市场暴露</li>
                    <li>透明度高：投资组合构成清晰可见</li>
                    <li>税收效率：由于换手率低，产生的应税事件较少</li>
                    <li>简单易行：不需要选股和市场择时的专业知识</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader id="etf-investing">
                  <CardTitle>ETF投资策略</CardTitle>
                  <CardDescription>ETF的运作机制、类型和选择策略</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    交易所交易基金(ETF)是一种结合了开放式基金和封闭式基金特点的投资工具，它既可以像股票一样在交易所买卖，又可以通过申购赎回机制保持价格与净值的一致性。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">ETF的主要类型</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>股票ETF：跟踪特定股票指数，如沪深300ETF、标普500ETF</li>
                    <li>债券ETF：跟踪债券指数，提供固定收益暴露</li>
                    <li>商品ETF：跟踪商品价格，如黄金ETF、原油ETF</li>
                    <li>行业ETF：聚焦特定行业，如科技ETF、医疗ETF</li>
                    <li>主题ETF：围绕特定投资主题，如ESG、人工智能、元宇宙等</li>
                  </ul>
                </CardContent>
              </Card>
              
              <div id="technical-behavioral-basics" className="pt-8">
                <h2 className="text-2xl font-bold mb-4">技术分析与行为金融</h2>
                <p className="text-muted-foreground mb-4">基于市场趋势和投资者心理的投资方法</p>
              </div>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>应用范围</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>技术分析和行为金融学在短期交易和市场时机选择中应用广泛，尤其受到日内交易者和波段交易者的青睐。</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader id="technical-analysis">
                  <CardTitle>技术分析方法</CardTitle>
                  <CardDescription>使用价格图表和技术指标进行市场分析</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    技术分析是通过研究历史价格和交易量数据来预测未来市场走势的方法。技术分析师相信市场价格已经反映了所有可获得的信息，价格变动遵循一定的模式，历史会以某种形式重复。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">技术分析的核心概念</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>趋势：价格的总体方向，可分为上升趋势、下降趋势和横盘整理</li>
                    <li>支撑位与阻力位：价格反弹或回落的关键水平</li>
                    <li>成交量：交易活跃度的指标，常用于确认价格走势</li>
                    <li>图表形态：如头肩顶、双底、三角形等价格形态</li>
                    <li>技术指标：如移动平均线、相对强弱指数(RSI)、MACD等</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader id="behavioral-finance">
                  <CardTitle>行为金融学</CardTitle>
                  <CardDescription>投资者心理、市场异象和决策偏误</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    行为金融学研究投资者的心理和行为如何影响金融市场，挑战了传统金融理论中关于投资者完全理性的假设。行为金融学家认为，投资者的认知偏误和情绪因素会导致市场异象和非理性行为。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">常见的投资者偏误</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>过度自信：高估自己的知识和预测能力</li>
                    <li>损失厌恶：对损失的痛苦感受强于对等额收益的喜悦</li>
                    <li>锚定效应：过度依赖初始信息或数字作为决策参考点</li>
                    <li>从众心理：盲目跟随他人的投资决策</li>
                    <li>确认偏误：倾向于寻找支持自己已有观点的信息</li>
                  </ul>
                </CardContent>
              </Card>
        </div>
        
        {/* 右侧边栏 */}
        <div className="lg:col-span-1">
            <div className="space-y-6">
          {/* 目录导航 */}
          <Card>
            <CardHeader>
              <CardTitle>目录</CardTitle>
              <CardDescription>快速导航到各个部分</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <a href="#value-growth-basics" className="text-primary hover:underline block font-medium">价值与成长投资</a>
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>
                      <a href="#value-investing" className="text-sm text-muted-foreground hover:text-primary block">价值投资基础</a>
                    </li>
                    <li>
                      <a href="#growth-investing" className="text-sm text-muted-foreground hover:text-primary block">成长投资策略</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <a href="#index-passive-basics" className="text-primary hover:underline block font-medium">指数与被动投资</a>
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>
                      <a href="#index-investing" className="text-sm text-muted-foreground hover:text-primary block">指数投资原理</a>
                    </li>
                    <li>
                      <a href="#etf-investing" className="text-sm text-muted-foreground hover:text-primary block">ETF投资策略</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <a href="#technical-behavioral-basics" className="text-primary hover:underline block font-medium">技术分析与行为金融</a>
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>
                      <a href="#technical-analysis" className="text-sm text-muted-foreground hover:text-primary block">技术分析方法</a>
                    </li>
                    <li>
                      <a href="#behavioral-finance" className="text-sm text-muted-foreground hover:text-primary block">行为金融学</a>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          

          
          {/* 常见问题 */}
          <Card>
            <CardHeader>
              <CardTitle>常见问题</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>价值投资和成长投资哪个更好？</AccordionTrigger>
                  <AccordionContent>
                    没有绝对的好坏之分，两种策略各有优势和适用场景。价值投资在市场低迷时期通常表现更好，而成长投资在牛市中往往领先。投资者可以根据自己的风险偏好、投资期限和市场环境选择适合的策略，甚至可以将两者结合使用。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>指数投资适合所有投资者吗？</AccordionTrigger>
                  <AccordionContent>
                    指数投资因其低成本、简单易行的特点，适合大多数投资者，尤其是长期投资者和缺乏专业知识或时间的投资者。但它并非万能的，某些投资者可能有特定的投资目标或风险偏好，需要更个性化的投资策略。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>技术分析能可靠预测市场走势吗？</AccordionTrigger>
                  <AccordionContent>
                    技术分析不能100%准确预测市场走势，但它可以帮助投资者识别趋势和潜在的交易机会。技术分析最好与基本面分析结合使用，作为投资决策的辅助工具，而非唯一依据。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          
          {/* 相关主题 */}
          <Card>
            <CardHeader>
              <CardTitle>相关主题</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                <a href="/etf" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">ETF</h3>
                    <p className="text-xs text-muted-foreground">了解ETF如何实现投资策略</p>
                  </div>
                </a>
                <a href="/risk-management" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">风险管理与对冲</h3>
                    <p className="text-xs text-muted-foreground">如何在不同策略中控制风险</p>
                  </div>
                </a>
                <a href="/derivatives" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">衍生品与复杂投资工具</h3>
                    <p className="text-xs text-muted-foreground">探索高级投资工具与策略</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
