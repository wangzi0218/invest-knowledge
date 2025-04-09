"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight, Shield, BarChart2, TrendingUp, AlertTriangle, CheckCircle2, Info, GitBranch, Activity, LineChart } from "lucide-react";


export default function RiskManagementPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>风险管理与对冲</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">风险管理与对冲</h1>
        <p className="text-xl text-muted-foreground">
          掌握投资风险评估、控制和对冲的方法，保护您的投资组合免受市场波动的影响
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8" id="main-content">
              <div id="risk-models-basics">
                <h2 className="text-2xl font-bold mb-4">风险评估模型</h2>
                <p className="text-muted-foreground mb-4">量化和评估投资组合风险的方法和工具</p>
              </div>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>风险管理重要性</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>有效的风险管理是投资成功的关键，研究表明，长期投资回报的差异有60-80%可归因于风险管理策略的不同，而非资产选择。</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader id="var-model">
                  <CardTitle>风险价值(VaR)</CardTitle>
                  <CardDescription>衡量潜在损失的统计方法</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    风险价值(Value at Risk, VaR)是一种衡量投资组合在特定时间段内、特定置信水平下可能发生的最大损失的统计方法。它回答了"在最坏情况下，我们可能损失多少钱"这一问题。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">VaR的计算方法</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>历史模拟法：基于历史数据模拟未来可能的损失</li>
                    <li>方差-协方差法：假设回报呈正态分布，基于统计参数计算</li>
                    <li>蒙特卡洛模拟：通过大量随机模拟估计潜在损失</li>
                  </ul>
                  <h3 className="text-lg font-semibold mt-4">VaR的局限性</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>无法衡量极端市场条件下的风险（尾部风险）</li>
                    <li>依赖历史数据，可能无法预测未来的市场变化</li>
                    <li>不考虑流动性风险和操作风险</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader id="stress-test">
                  <CardTitle>压力测试</CardTitle>
                  <CardDescription>评估极端市场条件下的投资组合表现</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    压力测试是一种模拟极端市场条件对投资组合影响的方法，帮助投资者了解在最坏情况下可能面临的损失，以及投资组合的弹性。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">压力测试的主要类型</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>历史情景分析：基于历史重大市场事件（如2008年金融危机）模拟投资组合表现</li>
                    <li>假设情景分析：基于假设的市场变动（如股市下跌30%）评估影响</li>
                    <li>敏感性分析：测试单一风险因素变化对投资组合的影响</li>
                  </ul>
                </CardContent>
              </Card>
              
              <div id="hedging-strategies-basics" className="pt-8">
                <h2 className="text-2xl font-bold mb-4">对冲策略</h2>
                <p className="text-muted-foreground mb-4">保护投资组合免受市场波动影响的方法</p>
              </div>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>对冲效率</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>有效的对冲策略可以减少投资组合的波动性，研究显示，适当的对冲可以将投资组合的波动率降低20-40%，同时保持相近的长期回报。</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader id="long-short">
                  <CardTitle>多空策略</CardTitle>
                  <CardDescription>同时持有多头和空头头寸的投资方法</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    多空策略通过同时持有看好的资产（多头）和看跌的资产（空头），寻求在各种市场环境下获得正回报，同时降低整体市场风险暴露。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">多空策略的主要类型</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>股票多空：买入被低估的股票，卖空被高估的股票</li>
                    <li>行业轮动：买入看好的行业，卖空看跌的行业</li>
                    <li>统计套利：利用价格偏离统计规律的情况进行交易</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader id="derivatives-hedging">
                  <CardTitle>衍生品对冲</CardTitle>
                  <CardDescription>使用期货、期权等金融工具进行风险管理</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    衍生品对冲是指使用衍生品合约，如期货、期权和掉期等，来管理投资组合的风险。这些工具可以帮助投资者对冲市场风险、利率风险和信用风险等。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">衍生品对冲的主要类型</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>期货对冲：使用期货合约对冲价格风险</li>
                    <li>期权对冲：使用期权合约对冲价格风险</li>
                    <li>掉期对冲：使用掉期合约对冲利率风险或信用风险</li>
                  </ul>
                </CardContent>
              </Card>
              
              <div id="credit-liquidity-basics" className="pt-8">
                <h2 className="text-2xl font-bold mb-4">信用与流动性风险</h2>
                <p className="text-muted-foreground mb-4">理解与管理信用风险和流动性风险</p>
              </div>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>风险来源</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>信用和流动性风险在市场危机时期尤为突出，2008年金融危机中，许多投资者因无法及时退出头寸而遭受严重损失，即使其投资理论上仍具价值。</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader id="credit-risk">
                  <CardTitle>信用风险管理</CardTitle>
                  <CardDescription>评估和控制交易对手违约风险</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    信用风险是指交易对手无法履行其财务义务的风险，包括借款人违约、债券发行人无法支付利息或本金等情况。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">信用风险评估方法</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>信用评级分析：利用评级机构的评级作为参考</li>
                    <li>财务比率分析：评估公司的偿债能力和财务健康状况</li>
                    <li>信用违约互换(CDS)价格：市场对违约风险的定价</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader id="liquidity-risk">
                  <CardTitle>流动性风险管理</CardTitle>
                  <CardDescription>确保投资组合在需要时能够快速变现</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    流动性风险是指无法以合理价格迅速买入或卖出资产的风险，在市场压力时期尤为重要，因为流动性往往在最需要时消失。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">流动性风险管理策略</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>分散投资：避免过度集中于流动性较低的资产</li>
                    <li>流动性缓冲：保持足够的现金或高流动性资产</li>
                    <li>流动性分层：根据流动性特征构建投资组合</li>
                    <li>压力测试：评估极端市场条件下的流动性需求</li>
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
                  <a href="#risk-models-basics" className="text-primary hover:underline block font-medium">风险评估模型</a>
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>
                      <a href="#var-model" className="text-sm text-muted-foreground hover:text-primary block">风险价值(VaR)</a>
                    </li>
                    <li>
                      <a href="#stress-test" className="text-sm text-muted-foreground hover:text-primary block">压力测试</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <a href="#hedging-strategies-basics" className="text-primary hover:underline block font-medium">对冲策略</a>
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>
                      <a href="#long-short" className="text-sm text-muted-foreground hover:text-primary block">多空策略</a>
                    </li>
                    <li>
                      <a href="#derivatives-hedging" className="text-sm text-muted-foreground hover:text-primary block">衍生品对冲</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <a href="#credit-liquidity-basics" className="text-primary hover:underline block font-medium">信用与流动性风险</a>
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>
                      <a href="#credit-risk" className="text-sm text-muted-foreground hover:text-primary block">信用风险管理</a>
                    </li>
                    <li>
                      <a href="#liquidity-risk" className="text-sm text-muted-foreground hover:text-primary block">流动性风险管理</a>
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
                  <AccordionTrigger>个人投资者需要进行风险管理吗？</AccordionTrigger>
                  <AccordionContent>
                    是的，风险管理对所有投资者都至关重要，包括个人投资者。良好的风险管理可以帮助您保护资产、减少损失，并在市场波动时保持冷静。个人投资者可以通过资产配置、分散投资和定期重新平衡等简单方法实施风险管理。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>如何确定自己的风险承受能力？</AccordionTrigger>
                  <AccordionContent>
                    确定风险承受能力需要考虑多个因素，包括您的投资目标、投资期限、财务状况、收入稳定性和个人心理特质。您可以通过风险评估问卷、与财务顾问咨询，或者反思过去市场波动时的反应来了解自己的风险承受能力。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>对冲策略会降低投资回报吗？</AccordionTrigger>
                  <AccordionContent>
                    对冲策略可能会在短期内降低潜在回报，这是风险降低的代价。然而，从长期来看，有效的对冲策略可以通过减少大幅下跌带来的损失，提高风险调整后的回报，并帮助投资者在市场低迷时保持投资能力。
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
                <a href="/derivatives" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">衍生品与复杂投资工具</h3>
                    <p className="text-xs text-muted-foreground">了解如何使用衍生品进行风险管理</p>
                  </div>
                </a>
                <a href="/investment-strategies" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">投资策略与方法论</h3>
                    <p className="text-xs text-muted-foreground">探索不同风险偏好下的投资策略</p>
                  </div>
                </a>
                <a href="/etf" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">ETF</h3>
                    <p className="text-xs text-muted-foreground">了解ETF如何帮助分散风险</p>
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
