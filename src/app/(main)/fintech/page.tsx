"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight, Bot, Cpu, Coins, Database, Brain, BarChart2, TrendingUp, AlertTriangle, CheckCircle2, Info } from "lucide-react";

export default function FintechPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>金融科技与创新</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">金融科技与创新</h1>
        <p className="text-xl text-muted-foreground">
          探索金融科技的最新发展趋势、创新应用及其对投资领域的深远影响
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8" id="main-content">
              <div id="robo-advisor-basics">
                <h2 className="text-2xl font-bold mb-4">智能投顾</h2>
                <p className="text-muted-foreground mb-4">自动化投资管理服务的原理与应用</p>
              </div>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>市场活跃度</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>全球智能投顾市场预计将从2023年的约1.5万亿美元增长到2030年的5万亿美元，年复合增长率达18.5%。</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader id="robo-advisor-basics">
                  <CardTitle>智能投顾基础</CardTitle>
                  <CardDescription>智能投顾的定义、工作原理和发展历程</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    智能投顾（Robo-Advisor）是利用算法和人工智能技术提供自动化投资管理服务的平台，通常以低成本、低门槛和高效率为特点，为大众投资者提供专业级的资产配置服务。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">智能投顾的核心功能</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>风险评估：通过问卷调查了解投资者的风险偏好和投资目标</li>
                    <li>资产配置：基于现代投资组合理论自动构建多元化投资组合</li>
                    <li>自动再平衡：定期调整投资组合以保持目标资产配置比例</li>
                    <li>税务优化：通过税收损失收获等策略最小化税务影响</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader id="robo-advisor-algorithm">
                  <CardTitle>算法推荐与个性化</CardTitle>
                  <CardDescription>智能投顾如何根据个人情况提供定制化建议</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    智能投顾平台利用各种算法和机器学习技术，根据投资者的个人情况、风险偏好和投资目标提供定制化的投资建议，实现投资的个性化和精准化。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">个性化推荐的关键技术</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>机器学习算法：分析用户行为和偏好，不断优化推荐结果</li>
                    <li>自然语言处理：理解和回应用户的文本查询</li>
                    <li>预测分析：基于历史数据预测市场趋势和投资机会</li>
                    <li>行为金融学应用：考虑投资者的心理和行为偏误</li>
                  </ul>
                </CardContent>
              </Card>
              
              <div id="blockchain-basics" className="pt-8">
                <h2 className="text-2xl font-bold mb-4">区块链与加密货币</h2>
                <p className="text-muted-foreground mb-4">分布式账本技术及其在金融领域的应用</p>
              </div>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>市场规模</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>全球区块链市场规模预计将从2023年的约100亿美元增长到2030年的超过1000亿美元，而加密货币总市值已超过2万亿美元。</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader id="blockchain-tech">
                  <CardTitle>区块链技术基础</CardTitle>
                  <CardDescription>区块链的工作原理、特点及应用场景</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    区块链是一种分布式账本技术，通过密码学原理保证数据的安全性和不可篡改性，实现在无需中心化信任机构的情况下进行可靠的价值传输和信息记录。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">区块链的核心特点</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>去中心化：不依赖单一中心机构，由网络节点共同维护</li>
                    <li>不可篡改：一旦数据被记录，几乎不可能被修改</li>
                    <li>透明性：所有交易记录对网络参与者可见</li>
                    <li>安全性：通过密码学和共识机制保证数据安全</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader id="crypto-investment">
                  <CardTitle>加密货币投资</CardTitle>
                  <CardDescription>加密货币的类型、风险与投资策略</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    加密货币是基于区块链技术的数字或虚拟货币，使用密码学原理确保交易安全，控制新单位的创建，并验证资产转移。比特币是第一个也是最知名的加密货币。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">主要加密货币类型</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>支付型：如比特币(BTC)，主要用作价值存储和支付手段</li>
                    <li>平台型：如以太坊(ETH)，提供智能合约和去中心化应用开发平台</li>
                    <li>稳定币：如USDT、USDC，价值与法定货币挂钩，波动性较小</li>
                    <li>治理型：用于参与去中心化组织(DAO)的决策和治理</li>
                  </ul>
                </CardContent>
              </Card>
              
              <div id="big-data-ai-basics" className="pt-8">
                <h2 className="text-2xl font-bold mb-4">大数据与人工智能</h2>
                <p className="text-muted-foreground mb-4">数据分析与机器学习在投资决策中的应用</p>
              </div>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>技术影响</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>金融机构通过大数据和AI技术可以提高决策准确率20-30%，降低运营成本15-25%，并显著提升客户体验和风险管理能力。</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader id="big-data-finance">
                  <CardTitle>大数据金融应用</CardTitle>
                  <CardDescription>数据分析在金融领域的应用与价值</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    金融大数据分析是利用海量、多样、高速生成的数据，通过先进的分析技术，挖掘有价值的信息和模式，为金融决策提供支持的过程。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">金融大数据的主要来源</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>市场数据：价格、交易量、订单流等</li>
                    <li>社交媒体：情绪分析、舆情监测</li>
                    <li>客户数据：行为、偏好、交易历史</li>
                    <li>宏观经济数据：GDP、就业率、通胀率等</li>
                    <li>替代数据：卫星图像、移动设备数据、物联网数据等</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader id="ai-investment">
                  <CardTitle>人工智能投资应用</CardTitle>
                  <CardDescription>机器学习在投资决策中的应用</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    人工智能技术正在深刻改变投资领域，从量化交易到风险管理，从资产配置到客户服务，AI的应用几乎覆盖了投资过程的各个环节。
                  </p>
                  <h3 className="text-lg font-semibold mt-4">AI投资应用的主要领域</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>量化交易：利用机器学习算法识别交易机会和优化执行</li>
                    <li>风险评估：预测和管理各类投资风险</li>
                    <li>资产配置：优化投资组合构建和再平衡</li>
                    <li>情绪分析：分析新闻、社交媒体等非结构化数据</li>
                    <li>自然语言处理：从财报、研报等文本中提取信息</li>
                  </ul>
                </CardContent>
              </Card>
        </div>
        
        {/* 右侧边栏 */}
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
                  <a href="#robo-advisor-basics" className="text-primary hover:underline block font-medium">智能投顾</a>
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>
                      <a href="#robo-advisor-basics" className="text-sm text-muted-foreground hover:text-primary block">智能投顾基础</a>
                    </li>
                    <li>
                      <a href="#robo-advisor-algorithm" className="text-sm text-muted-foreground hover:text-primary block">算法推荐与个性化</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <a href="#blockchain-basics" className="text-primary hover:underline block font-medium">区块链与加密货币</a>
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>
                      <a href="#blockchain-tech" className="text-sm text-muted-foreground hover:text-primary block">区块链技术基础</a>
                    </li>
                    <li>
                      <a href="#crypto-investment" className="text-sm text-muted-foreground hover:text-primary block">加密货币投资</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <a href="#big-data-ai-basics" className="text-primary hover:underline block font-medium">大数据与人工智能</a>
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>
                      <a href="#big-data-finance" className="text-sm text-muted-foreground hover:text-primary block">大数据金融应用</a>
                    </li>
                    <li>
                      <a href="#ai-investment" className="text-sm text-muted-foreground hover:text-primary block">人工智能投资应用</a>
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
                  <AccordionTrigger>智能投顾可以完全替代人类理财顾问吗？</AccordionTrigger>
                  <AccordionContent>
                    智能投顾在标准化的资产配置和投资组合管理方面表现出色，但在处理复杂的财务规划、税务策略、遗产规划等方面仍有局限。对于简单的投资需求，智能投顾可能足够；但对于复杂的财务情况，人类顾问的专业判断和个性化服务仍然重要。未来可能是人机协作模式，结合两者的优势。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>加密货币适合普通投资者投资吗？</AccordionTrigger>
                  <AccordionContent>
                    加密货币具有高波动性和较高风险，普通投资者需谨慎对待。如考虑投资，应遵循以下原则：1)只投资能够承受完全损失的资金；2)充分了解加密货币的技术原理和投资风险；3)选择有信誉的交易平台；4)考虑将加密货币作为整体投资组合的小部分，而非主要投资。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>如何评估金融科技产品的安全性？</AccordionTrigger>
                  <AccordionContent>
                    评估金融科技产品安全性可考虑以下因素：1)监管合规状况，是否获得相关金融牌照；2)数据安全措施，如加密技术和隐私保护政策；3)公司背景和声誉，包括运营历史和用户评价；4)安全认证和审计情况；5)资金保障机制，如存款保险或第三方托管。建议选择透明度高、安全措施完善的产品。
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
                <a href="/investment-strategies" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">投资策略与方法论</h3>
                    <p className="text-xs text-muted-foreground">了解现代投资组合理论与投资策略</p>
                  </div>
                </a>
                <a href="/risk-management" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">风险管理与对冲</h3>
                    <p className="text-xs text-muted-foreground">探索风险评估与管理方法</p>
                  </div>
                </a>
                <a href="/derivatives" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">衍生品与复杂投资工具</h3>
                    <p className="text-xs text-muted-foreground">了解金融衍生品与结构化产品</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
