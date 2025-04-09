"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight, BookOpen, TrendingUp, BarChart2, GitBranch, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { StickySidebar } from "@/components/ui-custom/knowledge-page";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

export default function DerivativesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>衍生品与复杂投资工具</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">衍生品与复杂投资工具</h1>
        <p className="text-xl text-muted-foreground">
          了解金融衍生品的基本概念、种类、风险特征及其在投资组合中的应用
        </p>
      </div>
      
      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8" id="main-content">
          {/* 期货与期权部分 */}
          <div className="space-y-8">
            <div id="futures-basics">
              <h2 className="text-2xl font-bold mb-4">期货与期权</h2>
              <p className="text-muted-foreground mb-4">金融衍生品市场中最基础和流动性最强的工具</p>
            </div>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>市场规模</CardTitle>
              </CardHeader>
              <CardContent>
                <p>全球衍生品市场的名义价值超过600万亿美元，其中期货和期权占据主导地位，每日交易量超过数万亿美元。</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>期货合约基础</CardTitle>
                <CardDescription>期货合约的定义、特点及交易机制</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">期货合约是一种标准化的金融衍生品，赋予持有人在未来特定日期以预定价格买入或卖出特定资产的权利和义务。</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">期货合约的主要特点</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>标准化：合约条款（如交割日期、数量、质量）由交易所统一规定</li>
                      <li>杠杆效应：通过保证金机制，投资者只需支付合约价值的一小部分</li>
                      <li>零和博弈：一方的盈利等于另一方的亏损</li>
                      <li>双向交易：可以做多（买入）或做空（卖出）</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">常见的期货品种</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>商品期货：农产品、能源、金属等</li>
                      <li>金融期货：股指期货、利率期货、外汇期货</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* 互换与结构性产品部分 */}
          <div className="space-y-8 mt-12">
            <div id="swaps">
              <h2 className="text-2xl font-bold mb-4">互换与结构性产品</h2>
              <p className="text-muted-foreground mb-4">为特定风险管理需求设计的复杂金融工具</p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>互换合约</CardTitle>
                <CardDescription>互换的基本概念与主要类型</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">互换是一种场外交易(OTC)衍生品，双方约定在未来某一时期内交换一系列现金流。</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">主要类型</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>利率互换</strong>
                        <p className="text-sm text-muted-foreground">最常见的互换类型，一方支付固定利率，另一方支付浮动利率</p>
                      </li>
                      <li>
                        <strong>货币互换</strong>
                        <p className="text-sm text-muted-foreground">交换不同货币的本金和利息支付</p>
                      </li>
                      <li>
                        <strong>信用违约互换(CDS)</strong>
                        <p className="text-sm text-muted-foreground">买方支付保费，卖方承诺在发生信用事件时赔付</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* 量化投资工具部分 */}
          <div className="space-y-8 mt-12">
            <div id="quantitative">
              <h2 className="text-2xl font-bold mb-4">量化投资工具</h2>
              <p className="text-muted-foreground mb-4">利用数学模型和计算机算法进行投资决策的工具</p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>量化策略基础</CardTitle>
                <CardDescription>量化投资的核心概念与常用策略</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">量化投资使用数学模型、统计分析和计算机算法来识别投资机会并执行交易，减少人为情绪干扰。</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">常见量化策略</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>趋势跟踪</strong>
                        <p className="text-sm text-muted-foreground">基于价格趋势持续的假设，追踪市场动量</p>
                      </li>
                      <li>
                        <strong>均值回归</strong>
                        <p className="text-sm text-muted-foreground">假设价格会回归到历史平均水平</p>
                      </li>
                      <li>
                        <strong>统计套利</strong>
                        <p className="text-sm text-muted-foreground">利用相关资产之间的价格差异进行套利</p>
                      </li>
                      <li>
                        <strong>因子投资</strong>
                        <p className="text-sm text-muted-foreground">基于价值、动量、规模等因子构建投资组合</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* 风险与监管部分 */}
          <div className="space-y-8 mt-12">
            <div id="risks">
              <h2 className="text-2xl font-bold mb-4">衍生品风险与监管</h2>
              <p className="text-muted-foreground mb-4">了解衍生品投资的主要风险及监管框架</p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>主要风险</CardTitle>
                <CardDescription>投资衍生品面临的主要风险类型</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>市场风险</strong>
                        <p className="text-sm text-muted-foreground">基础资产价格波动导致的风险，由于杠杆效应可能被放大</p>
                      </li>
                      <li>
                        <strong>流动性风险</strong>
                        <p className="text-sm text-muted-foreground">无法以合理价格快速平仓的风险</p>
                      </li>
                      <li>
                        <strong>交易对手风险</strong>
                        <p className="text-sm text-muted-foreground">尤其在场外交易中，交易对手可能无法履行合约义务</p>
                      </li>
                      <li>
                        <strong>操作风险</strong>
                        <p className="text-sm text-muted-foreground">由于系统故障、人为错误或流程不当导致的风险</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2">投资者适合性提示</h3>
              <div className="flex items-start">
                <AlertTriangle className="text-warning mr-2 mt-0.5" size={18} />
                <p className="text-sm">衍生品投资涉及高风险，适合具有丰富投资经验、风险承受能力强且了解产品复杂性的投资者。新手投资者应谨慎参与，建议先通过模拟交易熟悉衍生品市场。</p>
              </div>
            </div>
          </div>

        </div>
        
        {/* 右侧边栏 */}
        <StickySidebar className="space-y-6">
          {/* 目录导航 */}
          <Card>
            <CardHeader>
              <CardTitle>目录</CardTitle>
              <CardDescription>快速导航到各个部分</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <a href="#futures-basics" className="text-primary hover:underline block">期货与期权</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#futures-basics" className="text-muted-foreground hover:text-primary block">期货合约基础</a>
                  </div>
                </div>
                <div>
                  <a href="#swaps" className="text-primary hover:underline block">互换与结构性产品</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#swaps" className="text-muted-foreground hover:text-primary block">互换合约</a>
                  </div>
                </div>
                <div>
                  <a href="#quantitative" className="text-primary hover:underline block">量化投资工具</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#quantitative" className="text-muted-foreground hover:text-primary block">量化策略基础</a>
                  </div>
                </div>
                <div>
                  <a href="#risks" className="text-primary hover:underline block">衍生品风险与监管</a>
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
                  <AccordionTrigger>衍生品交易适合哪些投资者？</AccordionTrigger>
                  <AccordionContent>
                    衍生品交易主要适合以下投资者：
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>具有丰富投资经验的专业投资者</li>
                      <li>风险承受能力较强的投资者</li>
                      <li>对衍生品产品机制有深入了解的投资者</li>
                      <li>有明确风险管理或投资策略需求的投资者</li>
                    </ul>
                    新手投资者应谨慎参与，建议先通过模拟交易熟悉衍生品市场。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>期货与期权的主要区别是什么？</AccordionTrigger>
                  <AccordionContent>
                    期货与期权的主要区别：
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><strong>权利与义务：</strong>期货是买卖双方的义务，期权是买方的权利、卖方的义务</li>
                      <li><strong>风险特征：</strong>期货买卖双方风险对称，期权买方风险有限、卖方风险较大</li>
                      <li><strong>保证金：</strong>期货交易双方都需缴纳保证金，期权只有卖方需要缴纳</li>
                      <li><strong>盈亏特征：</strong>期货理论上盈亏无限，期权买方最大亏损为权利金</li>
                    </ul>
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
                <Link href="/risk-management" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">风险管理与对冲</h3>
                    <p className="text-xs text-muted-foreground">学习如何管理投资组合风险</p>
                  </div>
                </Link>
                <Link href="/investment-strategies" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">投资策略与方法论</h3>
                    <p className="text-xs text-muted-foreground">了解不同的投资策略</p>
                  </div>
                </Link>
                <Link href="/fintech" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">金融科技与创新</h3>
                    <p className="text-xs text-muted-foreground">探索量化交易和算法投资</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </StickySidebar>
      </div>
    </div>
  );
}
