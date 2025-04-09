"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { StickySidebar } from "@/components/ui-custom/knowledge-page";
import { cn } from "@/lib/utils";

export default function FundsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>基金</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">基金</h1>
        <p className="text-xl text-muted-foreground">
          了解不同类型基金的投资目标、策略及风险收益特征，助您选择合适的基金产品
        </p>
      </div>
      
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8" id="main-content">
          {/* 基金简介 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">什么是基金？</h2>
            <p className="text-muted-foreground">
              基金是一种集合投资工具，由基金管理公司代表众多投资者进行专业化的资产管理。投资者通过购买基金份额，将资金交由专业的基金经理进行投资管理，
              从而间接投资于股票、债券等金融资产，分享投资收益并分担投资风险。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>基金的主要特点</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>专业管理：由专业基金经理进行投资决策</li>
                    <li>分散投资：资金分散投资于多种资产，降低风险</li>
                    <li>流动性好：开放式基金可以随时申购赎回</li>
                    <li>门槛低：投资起点较低，适合普通投资者</li>
                    <li>透明度高：定期披露投资组合和业绩</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>基金与直接投资的区别</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>投资决策：基金由专业经理决策，直接投资由投资者自己决策</li>
                    <li>分散程度：基金投资更分散，单只股票风险集中</li>
                    <li>投资门槛：基金门槛低，直接投资某些资产门槛高</li>
                    <li>费用结构：基金收取管理费等，直接投资只有交易费用</li>
                    <li>时间成本：基金节省研究和管理时间</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 基金分类 */}
          <section className="space-y-4 mt-8" id="classification">
            <h2 className="text-2xl font-bold tracking-tight">基金分类</h2>
            <p className="text-muted-foreground">
              基金可以按照不同的标准进行分类，了解不同类型基金的特点有助于投资者选择适合自己的基金产品。
            </p>
            
            <Tabs defaultValue="by-assets" className="mt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="by-assets" id="by-assets">按投资标的分类</TabsTrigger>
                <TabsTrigger value="by-operation" id="by-operation">按运作方式分类</TabsTrigger>
                <TabsTrigger value="by-strategy" id="by-strategy">按投资策略分类</TabsTrigger>
              </TabsList>
              
              <TabsContent value="by-assets" className="mt-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>股票基金</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">主要投资于股票市场的基金，收益潜力较高，但风险也较大。</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>高风险高收益</li>
                        <li>长期投资效果较好</li>
                        <li>受市场波动影响大</li>
                        <li>适合风险承受能力较强的投资者</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>债券基金</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">主要投资于债券市场的基金，收益相对稳定，风险较低。</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>中低风险中低收益</li>
                        <li>收益来源主要是利息</li>
                        <li>受利率变动影响较大</li>
                        <li>适合风险承受能力较低的投资者</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>货币市场基金</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">主要投资于短期货币市场工具的基金，流动性高，风险最低。</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>低风险低收益</li>
                        <li>流动性极佳，可随时赎回</li>
                        <li>收益率略高于活期存款</li>
                        <li>适合短期资金管理或风险厌恶型投资者</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>混合基金</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">同时投资于股票和债券等多种资产的基金，风险和收益介于股票基金和债券基金之间。</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>中等风险中等收益</li>
                        <li>资产配置更加灵活</li>
                        <li>分散投资降低风险</li>
                        <li>适合大多数普通投资者</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="by-operation" className="mt-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>开放式基金</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">投资者可以随时申购或赎回基金份额，规模不固定。</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>流动性好，交易便捷</li>
                        <li>按净值交易</li>
                        <li>规模可变，份额不固定</li>
                        <li>是目前最主流的基金运作方式</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>封闭式基金</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">发行时规模固定，存续期内不能申购赎回，只能在二级市场交易。</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>在证券交易所上市交易</li>
                        <li>价格受供需影响，可能出现折价或溢价</li>
                        <li>规模固定，存续期固定</li>
                        <li>投资运作更加灵活</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>ETF（交易型开放式指数基金）</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">结合了开放式基金和封闭式基金特点，既可以申购赎回，也可以在交易所买卖。</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>在交易所实时交易</li>
                        <li>费用低廉</li>
                        <li>透明度高</li>
                        <li>通常跟踪特定指数</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>LOF（上市开放式基金）</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">既可以在场外按净值申购赎回，也可以在交易所交易。</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>兼具开放式和封闭式特点</li>
                        <li>交易渠道多样</li>
                        <li>流动性较好</li>
                        <li>适合不同交易习惯的投资者</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="by-strategy" className="mt-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>指数基金</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">通过复制特定指数的成分股及权重来追踪指数表现的基金。</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>被动投资策略</li>
                        <li>费用低廉</li>
                        <li>透明度高</li>
                        <li>长期业绩稳定</li>
                        <li>适合长期投资者</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>主动管理型基金</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">基金经理通过主动选股和择时来获取超额收益的基金。</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>主动投资策略</li>
                        <li>费用较高</li>
                        <li>依赖基金经理能力</li>
                        <li>业绩波动较大</li>
                        <li>有可能获取超额收益</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>价值型基金</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">投资于被低估的价值股，追求长期稳定增长。</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>关注公司基本面和内在价值</li>
                        <li>投资周期较长</li>
                        <li>波动相对较小</li>
                        <li>适合稳健型投资者</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>成长型基金</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">投资于高成长性公司，追求资本快速增值。</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>关注公司成长性和未来潜力</li>
                        <li>波动较大</li>
                        <li>收益潜力高</li>
                        <li>适合风险承受能力较强的投资者</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* 基金费用 */}
          <section className="space-y-4 mt-8" id="fees">
            <h2 className="text-2xl font-bold tracking-tight">基金费用</h2>
            <p className="text-muted-foreground">
              投资基金需要支付各种费用，了解这些费用的构成和计算方式有助于降低投资成本，提高实际收益率。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <Card id="management-fee">
                <CardHeader>
                  <CardTitle>管理费</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">支付给基金管理公司的费用，用于覆盖投资管理、研究和运营成本。</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>按基金资产净值的一定比例收取</li>
                    <li>股票基金：约1.0%-1.5%/年</li>
                    <li>债券基金：约0.6%-0.8%/年</li>
                    <li>货币基金：约0.3%-0.4%/年</li>
                    <li>指数基金：约0.5%-0.8%/年</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card id="subscription-fee">
                <CardHeader>
                  <CardTitle>申购费</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">投资者购买基金时支付的费用，用于销售渠道的佣金和营销费用。</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>按申购金额的一定比例收取</li>
                    <li>股票基金：约1.0%-1.5%</li>
                    <li>债券基金：约0.6%-0.8%</li>
                    <li>货币基金：通常免申购费</li>
                    <li>申购费通常有折扣，且随申购金额增加而递减</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card id="redemption-fee">
                <CardHeader>
                  <CardTitle>赎回费</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">投资者赎回基金时支付的费用，部分计入基金资产，用于弥补交易成本。</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>按赎回金额的一定比例收取</li>
                    <li>持有时间越长，费率越低</li>
                    <li>股票基金：7天内1.5%，1年以上0.15%</li>
                    <li>债券基金：7天内1.5%，1年以上0.05%</li>
                    <li>货币基金：通常免赎回费</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>其他费用</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">托管费</h3>
                    <p className="text-muted-foreground mb-2">支付给基金托管银行的费用，用于资产保管和监督基金管理人。</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>一般为0.1%-0.25%/年</li>
                      <li>按日计提，按月支付</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">交易佣金</h3>
                    <p className="text-muted-foreground mb-2">基金买卖证券时支付的交易费用，直接从基金资产中扣除。</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>股票交易佣金：约0.1%</li>
                      <li>债券交易费用：较低</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 基金选择 */}
          <section className="space-y-4 mt-8" id="selection">
            <h2 className="text-2xl font-bold tracking-tight">基金选择</h2>
            <p className="text-muted-foreground">
              选择适合自己的基金需要考虑多方面因素，包括投资目标、风险偏好、投资期限和基金表现等。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>基金选择的关键指标</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-1">收益类指标</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>历史收益率</strong>：过去一年、三年、五年的收益表现</li>
                        <li><strong>超额收益</strong>：相对于基准指数的超额回报</li>
                        <li><strong>阿尔法系数</strong>：衡量基金经理的选股能力</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-1">风险类指标</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>波动率（标准差）</strong>：反映基金收益率的波动程度</li>
                        <li><strong>最大回撤</strong>：历史上净值从最高点到最低点的最大跌幅</li>
                        <li><strong>贝塔系数</strong>：反映基金相对于市场的波动程度</li>
                        <li><strong>夏普比率</strong>：单位风险下的超额收益，越高越好</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>基金选择的步骤</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong>明确投资目标</strong>
                      <p className="text-sm text-muted-foreground mt-1">确定投资期限、预期收益和风险承受能力</p>
                    </li>
                    <li>
                      <strong>选择基金类型</strong>
                      <p className="text-sm text-muted-foreground mt-1">根据投资目标选择适合的基金类型（股票、债券、混合等）</p>
                    </li>
                    <li>
                      <strong>筛选基金</strong>
                      <p className="text-sm text-muted-foreground mt-1">根据规模、历史业绩、费率等因素初步筛选</p>
                    </li>
                    <li>
                      <strong>深入研究</strong>
                      <p className="text-sm text-muted-foreground mt-1">分析基金经理能力、投资策略、风险控制等</p>
                    </li>
                    <li>
                      <strong>组合配置</strong>
                      <p className="text-sm text-muted-foreground mt-1">合理分散投资，不要将资金集中在单一基金</p>
                    </li>
                    <li>
                      <strong>定期评估</strong>
                      <p className="text-sm text-muted-foreground mt-1">定期检查基金表现，必要时调整投资组合</p>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>不同投资者的基金选择建议</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">保守型投资者</h3>
                    <p className="text-muted-foreground mb-2">风险承受能力低，追求资金安全和稳定收益。</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>货币市场基金</li>
                      <li>短期债券基金</li>
                      <li>保本型基金</li>
                      <li>低波动率的指数基金</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">平衡型投资者</h3>
                    <p className="text-muted-foreground mb-2">风险承受能力中等，追求收益与风险的平衡。</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>混合型基金</li>
                      <li>平衡型基金</li>
                      <li>指数增强型基金</li>
                      <li>部分价值型股票基金</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">积极型投资者</h3>
                    <p className="text-muted-foreground mb-2">风险承受能力高，追求较高收益，能够承受较大波动。</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>股票型基金</li>
                      <li>行业主题基金</li>
                      <li>成长型基金</li>
                      <li>海外市场基金</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
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
                  <a href="#main-content" className="text-primary hover:underline block">基金简介</a>
                </div>
                <div>
                  <a href="#classification" className="text-primary hover:underline block">基金分类</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#by-assets" className="text-muted-foreground hover:text-primary block">按投资标的分类</a>
                    <a href="#by-operation" className="text-muted-foreground hover:text-primary block">按运作方式分类</a>
                    <a href="#by-strategy" className="text-muted-foreground hover:text-primary block">按投资策略分类</a>
                  </div>
                </div>
                <div>
                  <a href="#fees" className="text-primary hover:underline block">基金费用</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#management-fee" className="text-muted-foreground hover:text-primary block">管理费</a>
                    <a href="#subscription-fee" className="text-muted-foreground hover:text-primary block">申购费</a>
                    <a href="#redemption-fee" className="text-muted-foreground hover:text-primary block">赎回费</a>
                  </div>
                </div>
                <div>
                  <a href="#selection" className="text-primary hover:underline block">基金选择</a>
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
                  <AccordionTrigger>如何选择适合自己的基金？</AccordionTrigger>
                  <AccordionContent>
                    <p>选择适合自己的基金需要考虑以下因素：</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>投资目标和期限</li>
                      <li>风险承受能力</li>
                      <li>基金历史业绩和波动性</li>
                      <li>基金经理的管理能力和经验</li>
                      <li>基金费用结构</li>
                    </ul>
                    <p className="mt-2">建议新手投资者可以从指数基金或货币市场基金开始，积累经验后再考虑其他类型的基金。</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>基金定投是什么？有什么优势？</AccordionTrigger>
                  <AccordionContent>
                    <p>基金定投是指在固定的时间以固定的金额投资基金的方式。主要优势包括：</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>平均成本法</strong>：在市场高点少买，低点多买，降低平均成本</li>
                      <li><strong>纪律性投资</strong>：养成良好的投资习惯，避免择时困难</li>
                      <li><strong>小额投资</strong>：门槛低，适合普通投资者</li>
                      <li><strong>长期复利效应</strong>：长期投资享受复利增长</li>
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
                <a href="/etf" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">ETF</h3>
                    <p className="text-xs text-muted-foreground">了解交易型开放式指数基金</p>
                  </div>
                </a>
                <a href="/securities" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">证券</h3>
                    <p className="text-xs text-muted-foreground">探索基金投资的底层资产</p>
                  </div>
                </a>
                <a href="/financial-products" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">金融产品</h3>
                    <p className="text-xs text-muted-foreground">比较不同类型的金融产品</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </StickySidebar>
      </div>
    </div>
  );
}
