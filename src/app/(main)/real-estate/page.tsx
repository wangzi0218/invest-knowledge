"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { StickySidebar } from "@/components/ui-custom/knowledge-page";
import { cn } from "@/lib/utils";

export default function RealEstatePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>房地产投资</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">房地产投资</h1>
        <p className="text-xl text-muted-foreground">
          了解房地产投资的类型、特点、策略及风险管理
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">        
        <div className="lg:col-span-2 space-y-8">

        {/* 房地产投资简介 */}
        <section className="space-y-4" id="introduction">
          <h2 className="text-2xl font-bold tracking-tight">什么是房地产投资？</h2>
          <p className="text-muted-foreground">
            房地产投资是指通过购买、持有、管理、出租或出售房地产资产以获取收益的投资活动。
            作为一种实物资产投资，房地产投资具有保值增值、产生现金流、抵御通胀等特点，是投资组合多元化的重要选择。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>房地产投资的主要特点</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>实物资产</strong>：具有实际使用价值，不会完全贬值</li>
                  <li><strong>收益双重性</strong>：可同时获得租金收入和资本增值</li>
                  <li><strong>杠杆效应</strong>：可通过贷款放大投资回报</li>
                  <li><strong>通胀对冲</strong>：房地产价值和租金往往随通胀上升</li>
                  <li><strong>税收优惠</strong>：多数国家对房地产投资提供税收优惠政策</li>
                  <li><strong>低波动性</strong>：相比股票等金融资产，价格波动通常较小</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>房地产投资与其他投资的比较</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>流动性</strong>：低于股票和债券，变现周期较长</li>
                  <li><strong>投资门槛</strong>：通常高于其他投资类型</li>
                  <li><strong>管理要求</strong>：需要更多的主动管理和专业知识</li>
                  <li><strong>分散化</strong>：单个房产难以分散，集中度高</li>
                  <li><strong>收益稳定性</strong>：租金收入相对稳定，类似于债券的固定收益</li>
                  <li><strong>价值增长</strong>：长期增值潜力，类似于股票的资本增值</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 房地产投资类型 */}
        <section className="space-y-4 mt-8" id="investment-types">
          <h2 className="text-2xl font-bold tracking-tight">房地产投资类型</h2>
          <p className="text-muted-foreground">
            房地产投资有多种形式，从直接购买物业到通过金融工具间接投资，投资者可以根据自身情况选择合适的投资方式。
          </p>

          <Tabs defaultValue="direct" className="mt-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="direct">直接投资</TabsTrigger>
              <TabsTrigger value="indirect">间接投资</TabsTrigger>
            </TabsList>
            <TabsContent value="direct" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">直接房地产投资</h3>
              <p className="mb-4">
                直接房地产投资是指投资者直接购买和持有实物房地产资产，自行管理或委托管理。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">住宅类投资：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>自住型投资</strong>：购买自住房产，同时期待长期增值</li>
                    <li><strong>出租型住宅</strong>：购买住宅用于出租，获取租金收入和潜在增值</li>
                    <li><strong>短期租赁</strong>：通过平台如爱彼迎、小猪等提供短期住宿服务</li>
                    <li><strong>翻新转售</strong>：购买低价房产，翻新后以更高价格出售</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">商业地产投资：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>办公楼</strong>：出租给企业用作办公场所</li>
                    <li><strong>零售商铺</strong>：出租给零售商经营商店</li>
                    <li><strong>工业地产</strong>：如仓库、工厂、物流中心等</li>
                    <li><strong>酒店地产</strong>：投资酒店物业获取经营收益</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">特殊用途地产：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>学生公寓</strong>：专为学生提供住宿的物业</li>
                    <li><strong>养老地产</strong>：为老年人提供居住和服务的物业</li>
                    <li><strong>自助仓储</strong>：提供存储空间出租服务</li>
                    <li><strong>医疗地产</strong>：如诊所、医院等医疗用途物业</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                直接投资的优势在于投资者对资产有完全控制权，可以通过主动管理提高收益。但也需要较高的资金投入和专业知识，管理负担较重。
              </p>
            </TabsContent>
            <TabsContent value="indirect" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">间接房地产投资</h3>
              <p className="mb-4">
                间接房地产投资是指通过购买与房地产相关的金融产品或证券来间接参与房地产市场，无需直接持有和管理实物资产。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">房地产投资信托基金(REITs)：</h4>
                  <p className="text-sm">
                    REITs是一种在证券交易所交易的投资工具，投资者通过购买REITs份额来间接投资于房地产资产组合。
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>流动性高，可以像股票一样在交易所买卖</li>
                    <li>投资门槛低，适合小额投资者</li>
                    <li>专业管理，由专业团队负责物业选择和管理</li>
                    <li>收益分配，通常定期分配租金收入</li>
                    <li>多元化，一次投资即可获得多个物业的曝光</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">房地产基金：</h4>
                  <p className="text-sm">
                    由专业基金管理人管理的集合投资计划，投资于各类房地产项目。
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li><strong>公募房地产基金</strong>：面向公众投资者，流动性较好</li>
                    <li><strong>私募房地产基金</strong>：面向合格投资者，投资门槛较高</li>
                    <li><strong>房地产有限合伙</strong>：投资者作为有限合伙人参与特定项目</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">房地产相关股票：</h4>
                  <p className="text-sm">
                    投资于房地产开发、管理、服务等相关上市公司的股票。
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>房地产开发商股票</li>
                    <li>物业管理公司股票</li>
                    <li>房地产中介服务公司股票</li>
                    <li>建筑材料和家居用品公司股票</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">房地产众筹和P2P借贷：</h4>
                  <p className="text-sm">
                    通过互联网平台参与房地产项目融资或借贷。
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>投资门槛低，可小额参与</li>
                    <li>项目多样，可选择不同风险收益特征的项目</li>
                    <li>风险较高，需谨慎评估平台和项目质量</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                间接投资的主要优势是流动性更好、投资门槛更低、管理负担小，但投资者对底层资产的控制力较弱，收益可能被管理费等成本稀释。
              </p>
            </TabsContent>
          </Tabs>
        </section>

        {/* 房地产投资策略 */}
        <section className="space-y-4 mt-8" id="investment-strategies">
          <h2 className="text-2xl font-bold tracking-tight">房地产投资策略</h2>
          <p className="text-muted-foreground">
            成功的房地产投资需要明确的投资策略，投资者应根据自身目标、风险承受能力和市场状况选择合适的策略。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">收益型策略</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm">
                  以获取稳定现金流为主要目标，适合追求被动收入的投资者。
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>核心策略</strong>：投资于位置优越、租户质量高的成熟物业</li>
                  <li><strong>关键指标</strong>：现金收益率、租金收入稳定性、租约质量</li>
                  <li><strong>风险水平</strong>：相对较低</li>
                  <li><strong>适合人群</strong>：保守型投资者、退休规划、追求稳定现金流</li>
                  <li><strong>典型例子</strong>：长期出租的优质住宅或商业地产、REITs投资</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">增值型策略</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm">
                  以资本增值为主要目标，通过物业升级或市场上涨获利。
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>核心策略</strong>：购买低估或有改善空间的物业，通过翻新、重新定位或管理改善提升价值</li>
                  <li><strong>关键指标</strong>：投资回报率(ROI)、内部收益率(IRR)、升值潜力</li>
                  <li><strong>风险水平</strong>：中等</li>
                  <li><strong>适合人群</strong>：平衡型投资者、有一定专业知识的投资者</li>
                  <li><strong>典型例子</strong>：房屋翻新、物业重新定位、新兴区域投资</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">机会型策略</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm">
                  以高回报为目标，通过把握特殊机会获取超额收益。
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>核心策略</strong>：投资于高风险高回报的项目，如开发项目、不良资产或特殊情况物业</li>
                  <li><strong>关键指标</strong>：项目IRR、风险调整后收益、退出策略</li>
                  <li><strong>风险水平</strong>：较高</li>
                  <li><strong>适合人群</strong>：积极型投资者、专业投资者、风险承受能力强的投资者</li>
                  <li><strong>典型例子</strong>：房地产开发、不良资产收购、市场低迷期的投资</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 房地产投资风险与管理 */}
        <section className="space-y-4 mt-8" id="risk-management">
          <h2 className="text-2xl font-bold tracking-tight">投资风险与管理</h2>
          <p className="text-muted-foreground">
            房地产投资虽有诸多优势，但也面临各种风险，投资者需要了解这些风险并采取适当的管理措施。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>主要风险</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>市场风险</strong>：房地产市场周期性波动，价格可能下跌</li>
                  <li><strong>流动性风险</strong>：房产不易快速变现，尤其在市场低迷时期</li>
                  <li><strong>财务风险</strong>：高杠杆可能导致现金流压力和违约风险</li>
                  <li><strong>租赁风险</strong>：空置率上升、租金下降或租户违约</li>
                  <li><strong>管理风险</strong>：物业管理不善导致价值下降或收益减少</li>
                  <li><strong>政策风险</strong>：税收、土地使用、租赁等政策变化影响投资收益</li>
                  <li><strong>位置风险</strong>：区域发展不及预期或环境恶化</li>
                  <li><strong>实物风险</strong>：建筑老化、自然灾害等导致的物理损失</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>风险管理策略</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>充分调研</strong>：投资前对市场、区域和物业进行全面调研</li>
                  <li><strong>多元化投资</strong>：分散投资于不同类型、地区的房产或REITs</li>
                  <li><strong>合理杠杆</strong>：控制负债比例，确保有足够的现金流缓冲</li>
                  <li><strong>预留资金</strong>：设立应急基金应对维修、空置等突发情况</li>
                  <li><strong>专业管理</strong>：聘请专业物业管理公司或提升自身管理能力</li>
                  <li><strong>保险保障</strong>：购买适当的财产保险和责任保险</li>
                  <li><strong>长期视角</strong>：采取长期投资策略，减少短期波动影响</li>
                  <li><strong>退出策略</strong>：提前规划投资退出时机和方式</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

       


        </div>
        
        {/* 右侧栏 - 目录、常见问题和相关主题 */}
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
                  <a href="#introduction" className="text-primary hover:underline block">什么是房地产投资？</a>
                </div>
                <div>
                  <a href="#investment-types" className="text-primary hover:underline block">房地产投资类型</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#direct" className="text-muted-foreground hover:text-primary block">直接投资</a>
                    <a href="#indirect" className="text-muted-foreground hover:text-primary block">间接投资</a>
                  </div>
                </div>
                <div>
                  <a href="#investment-strategies" className="text-primary hover:underline block">投资策略</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#income" className="text-muted-foreground hover:text-primary block">收益型策略</a>
                    <a href="#value-add" className="text-muted-foreground hover:text-primary block">增值型策略</a>
                    <a href="#opportunistic" className="text-muted-foreground hover:text-primary block">机会型策略</a>
                  </div>
                </div>
                <div>
                  <a href="#risk-management" className="text-primary hover:underline block">风险与管理</a>
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
                  <AccordionTrigger>如何评估房地产投资的价值？</AccordionTrigger>
                  <AccordionContent>
                    <p>评估房地产投资价值的主要方法包括收益法（资本化率法、现金流折现法）、市场比较法、成本法等。关键指标有现金收益率、投资回报率(ROI)、内部收益率(IRR)和回收期。综合使用多种评估方法，结合市场状况和投资目标进行判断最为准确。</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>房地产投资适合哪些人？</AccordionTrigger>
                  <AccordionContent>
                    <p>房地产投资适合长期投资者、寻求稳定现金流的投资者、希望对冲通胀的投资者、寻求资产多元化的投资者，以及有一定资金实力和相关知识的投资者。对于需要高流动性的投资者或资金紧张的人，REITs等间接投资方式可能更合适。</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>如何开始房地产投资？</AccordionTrigger>
                  <AccordionContent>
                    <p>开始房地产投资的步骤包括：教育与学习、明确投资目标、财务准备、建立专业网络、市场调研，然后开始投资。初学者可以从REITs或房地产基金等间接投资开始，或从自住型房产或小型出租物业起步。房地产投资是长期过程，应该保守行事，随着经验积累逐步扩大规模。</p>
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
                <a href="/funds" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">REITs</h3>
                    <p className="text-xs text-muted-foreground">了解房地产投资信托基金的运作与投资</p>
                  </div>
                </a>
                <a href="/precious-metals" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">贵金属投资</h3>
                    <p className="text-xs text-muted-foreground">探索另一种实物资产投资方式</p>
                  </div>
                </a>
                <a href="/financial-products" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">金融产品</h3>
                    <p className="text-xs text-muted-foreground">了解更多投资产品与房地产的关系</p>
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
