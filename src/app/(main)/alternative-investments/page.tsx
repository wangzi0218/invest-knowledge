"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { StickySidebar } from "@/components/ui-custom/knowledge-page";

export default function AlternativeInvestmentsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/alternative-investments">另类投资</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">另类投资</h1>
        <p className="text-xl text-muted-foreground">
          了解艺术品、红酒、邮票、古董、数字藏品等非传统投资的特点、策略及风险管理
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">        
        <div className="lg:col-span-2 space-y-8">
          
          {/* 什么是另类投资 */}
          <section id="introduction" className="scroll-mt-16">
            <h2 className="text-2xl font-bold tracking-tight">什么是另类投资？</h2>
            <p className="mt-4 text-muted-foreground">
              另类投资是指传统金融市场（如股票、债券）之外的投资品类，包括艺术品、红酒、邮票、古董、数字藏品等实物资产或收藏品。这些投资通常具有独特的价值来源、不同的风险收益特征，以及与传统金融资产较低的相关性。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>另类投资的价值来源</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>稀缺性和独特性</li>
                    <li>历史和文化价值</li>
                    <li>审美和收藏价值</li>
                    <li>社会地位象征</li>
                    <li>潜在的升值空间</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>另类投资的特点</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>低流动性</li>
                    <li>较高的交易成本</li>
                    <li>与传统资产低相关性</li>
                    <li>价值评估的主观性</li>
                    <li>通常需要专业知识</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* 另类投资的种类 */}
          <section id="types" className="mt-10 scroll-mt-16">
            <h2 className="text-2xl font-bold tracking-tight">另类投资的种类</h2>
            <Tabs defaultValue="art" className="mt-6">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="art">艺术品</TabsTrigger>
                <TabsTrigger value="wine">红酒</TabsTrigger>
                <TabsTrigger value="stamps">邮票与钱币</TabsTrigger>
                <TabsTrigger value="antiques">古董与收藏品</TabsTrigger>
                <TabsTrigger value="nft">数字藏品</TabsTrigger>
              </TabsList>
              <TabsContent value="art" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>艺术品投资</CardTitle>
                    <CardDescription>
                      包括绘画、雕塑、摄影、装置艺术等多种形式
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">投资特点</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>具有审美和文化价值</li>
                        <li>价格受艺术家声誉、作品稀缺性、市场需求影响</li>
                        <li>需要专业知识评估真伪和价值</li>
                        <li>通常需要长期持有</li>
                        <li>保存和保险成本较高</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">投资渠道</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>画廊和艺术展</li>
                        <li>拍卖行</li>
                        <li>艺术品交易平台</li>
                        <li>艺术基金</li>
                        <li>艺术品共享所有权平台</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="wine" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>红酒投资</CardTitle>
                    <CardDescription>
                      主要投资对象为高品质的收藏级葡萄酒
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">投资特点</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>价值随年份陈酿增长</li>
                        <li>受产区声誉、年份、评分影响</li>
                        <li>需要专业储存条件</li>
                        <li>有实物消费价值</li>
                        <li>市场相对成熟，有专业评级系统</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">投资渠道</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>专业酒商和拍卖行</li>
                        <li>期酒（en primeur）市场</li>
                        <li>葡萄酒交易平台</li>
                        <li>葡萄酒投资基金</li>
                        <li>酒庄直购</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="stamps" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>邮票与钱币投资</CardTitle>
                    <CardDescription>
                      集邮和钱币收藏是历史悠久的收藏投资领域
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">投资特点</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>价值主要来源于稀缺性和历史意义</li>
                        <li>保存状态对价值影响巨大</li>
                        <li>存储成本相对较低</li>
                        <li>有成熟的分级系统和目录</li>
                        <li>市场相对小众，流动性有限</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">投资渠道</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>专业邮票/钱币交易商</li>
                        <li>收藏品拍卖会</li>
                        <li>邮票/钱币展览和交易会</li>
                        <li>在线收藏品交易平台</li>
                        <li>邮政局限量发行</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="antiques" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>古董与收藏品投资</CardTitle>
                    <CardDescription>
                      包括家具、瓷器、珠宝、手表、玩具、体育纪念品等
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">投资特点</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>价值来源于历史意义、工艺和稀缺性</li>
                        <li>市场细分程度高，各类别有独特规律</li>
                        <li>真伪鉴定至关重要</li>
                        <li>价格波动可能较大</li>
                        <li>可能有使用或展示价值</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">投资渠道</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>古董店和专业经销商</li>
                        <li>拍卖行</li>
                        <li>古董展览和交易会</li>
                        <li>在线收藏品平台</li>
                        <li>私人交易</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="nft" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>数字藏品投资</CardTitle>
                    <CardDescription>
                      包括NFT艺术品、数字收藏品、虚拟土地等
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">投资特点</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>基于区块链技术，确保唯一性和所有权</li>
                        <li>市场波动性极大</li>
                        <li>无实物保存成本</li>
                        <li>技术风险（如钱包安全）</li>
                        <li>市场仍处于早期发展阶段</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">投资渠道</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>NFT交易平台（如OpenSea、Binance NFT）</li>
                        <li>数字艺术平台</li>
                        <li>游戏内资产市场</li>
                        <li>元宇宙平台</li>
                        <li>NFT发行项目</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* 另类投资的特点 */}
          <section id="characteristics" className="mt-10 scroll-mt-16">
            <h2 className="text-2xl font-bold tracking-tight">另类投资的特点</h2>
            <p className="mt-4 text-muted-foreground">
              另类投资与传统金融投资相比，具有以下独特的特点和优势：
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>多元化与低相关性</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>与传统资产类低相关性</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        另类投资的价格波动通常与股票、债券等传统资产的波动相关性较低，可以帮助分散投资组合风险。
                      </p>
                    </li>
                    <li>
                      <strong>投资组合多元化</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        将另类投资纳入投资组合可以提高整体投资组合的效率前沿，在不增加风险的情况下提高收益。
                      </p>
                    </li>
                    <li>
                      <strong>市场周期隔离</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        很多另类投资不受金融市场周期性波动的直接影响，可以在经济下行期间提供相对稳定的价值。
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>抗通胀与价值保存</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>抗通胀能力</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        历史数据显示，许多另类投资（如艺术品、红酒、古董）长期来看具有良好的抗通胀能力，可以保存购买力。
                      </p>
                    </li>
                    <li>
                      <strong>实物资产价值</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        大多数另类投资是实物资产，具有内在价值，不会完全失去价值，这与某些金融资产可能归零的风险不同。
                      </p>
                    </li>
                    <li>
                      <strong>长期升值潜力</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        稀缺性和收藏价值随时间增长，优质的另类投资品往往具有长期升值的潜力。
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>非金融收益</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>享受与使用价值</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        艺术品、红酒、古董等另类投资品除了投资价值外，还具有实物享受价值，可以带来精神和审美上的满足。
                      </p>
                    </li>
                    <li>
                      <strong>社交与身份象征</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        收藏和投资特定类别的另类资产可以提供社交机会和社会地位象征，这是传统金融投资所不能提供的。
                      </p>
                    </li>
                    <li>
                      <strong>兴趣与专业发展</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        另类投资往往与个人兴趣相结合，可以在追求投资回报的同时培养专业知识和技能。
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>流动性与交易特点</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>低流动性</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        与股票、债券等传统金融资产相比，另类投资通常流动性较低，变现时间较长，交易成本较高。
                      </p>
                    </li>
                    <li>
                      <strong>交易不透明</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        大多数另类投资市场的价格发现和信息透明度低于公开交易的金融市场，需要更多的专业知识和信息渠道。
                      </p>
                    </li>
                    <li>
                      <strong>交易成本高</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        另类投资通常涉及较高的交易成本，如拍卖佣金、存储费、保险费、运输费等，这些成本会降低实际投资回报。
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 投资策略 */}
          <section id="strategies" className="mt-10 scroll-mt-16">
            <h2 className="text-2xl font-bold tracking-tight">投资策略</h2>
            <p className="mt-4 text-muted-foreground">
              成功的另类投资需要特定的策略和方法，以下是一些关键的投资策略：
            </p>
            
            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="strategy1">
                <AccordionTrigger>直接投资与间接投资</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">直接投资</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        直接购买并持有实物资产，如艺术品、红酒、古董等。
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>优势</strong>：完全控制权、可以享受实物使用价值、无管理费</li>
                        <li><strong>劣势</strong>：需要专业知识、保管成本高、流动性低、单一资产风险</li>
                        <li><strong>适合人群</strong>：对特定领域有专业知识、有足够资金和存储条件的投资者</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">间接投资</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        通过基金、信托或平台投资于另类资产组合。
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>优势</strong>：专业管理、分散风险、无需专业知识、无需担心保管问题</li>
                        <li><strong>劣势</strong>：管理费用、无法享受实物使用价值、控制权有限</li>
                        <li><strong>适合人群</strong>：普通投资者、希望分散风险的投资者、资金有限的投资者</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="strategy2">
                <AccordionTrigger>长期持有与短期交易</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">长期持有策略</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        购买优质资产并长期持有，等待价值增长和升值。
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>优势</strong>：可以充分享受稀缺性带来的长期升值、减少交易成本、税收优惠</li>
                        <li><strong>劣势</strong>：资金长期锁定、可能面临市场趋势变化风险</li>
                        <li><strong>适合资产</strong>：高品质艺术品、一级名庄葡萄酒、稀有古董、高端珠宝</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">短期交易策略</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        利用市场波动和短期价格差异进行交易获利。
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>优势</strong>：资金周转快、可以把握短期市场机会</li>
                        <li><strong>劣势</strong>：交易成本高、需要专业市场知识、风险较高</li>
                        <li><strong>适合资产</strong>：数字藏品(NFT)、部分收藏品、二级市场交易活跃的资产</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="strategy3">
                <AccordionTrigger>专注与多元化策略</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">专注策略</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        专注于单一类别或特定领域的另类资产。
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>优势</strong>：可以充分发挥专业知识、深入了解市场、把握机会</li>
                        <li><strong>劣势</strong>：风险集中、受单一市场波动影响大</li>
                        <li><strong>适合人群</strong>：对特定领域有深入研究和专业知识的投资者</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">多元化策略</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        投资于多种不同类型的另类资产。
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>优势</strong>：分散风险、减少单一市场波动影响、把握多元机会</li>
                        <li><strong>劣势</strong>：需要更广泛的知识、可能无法深入每个领域</li>
                        <li><strong>适合人群</strong>：希望广泛接触另类投资的普通投资者、风险承受能力中等的投资者</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="strategy4">
                <AccordionTrigger>价值投资与趋势投资</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">价值投资策略</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        关注资产的内在价值，寻找被低估或具有长期价值的资产。
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>优势</strong>：长期投资回报潜力大、风险相对较低</li>
                        <li><strong>劣势</strong>：可能需要长时间等待市场认可、需要较强的价值判断能力</li>
                        <li><strong>适合资产</strong>：新兴艺术家作品、潜力酒庄、新兴收藏领域</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">趋势投资策略</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        跟随市场热点和流行趋势进行投资。
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>优势</strong>：短期内可能获得高回报、流动性较好</li>
                        <li><strong>劣势</strong>：风险较高、可能遇到泡气、需要密切关注市场动向</li>
                        <li><strong>适合资产</strong>：数字藏品(NFT)、流行收藏品、新兴艺术形式</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          
          {/* 风险与注意事项 */}
          <section id="risks" className="mt-10 scroll-mt-16">
            <h2 className="text-2xl font-bold tracking-tight">风险与注意事项</h2>
            <p className="mt-4 text-muted-foreground">
              另类投资虽然有吸引力，但也伴随着独特的风险，投资者应该充分了解这些风险：
            </p>
            
            <div className="grid gap-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>市场风险</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    另类投资市场可能受到经济周期、消费者偏好变化和流行趋势的影响。
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>收藏品市场周期性波动，可能出现泡气和崩盘</li>
                    <li>特定类别的另类资产可能经历长期价格下跌</li>
                    <li>流行和时尚变化可能导致某些资产快速败落</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>流动性风险</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    大多数另类投资的流动性远低于传统金融资产。
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>可能需要长时间才能找到买家，尤其是高价值或非常专业的资产</li>
                    <li>在市场下行时期，可能需要以显著低于估值的价格出售</li>
                    <li>交易成本高，包括拍卖费、佣金、保险和运输费用</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>真实性与估值风险</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    另类投资的真实性和价值评估往往具有主观性和不确定性。
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>质量和真实性问题，包括伪造品和复制品的风险</li>
                    <li>估值差异大，不同专家可能给出差异显著的估值</li>
                    <li>收藏品的条件和品质可能影响其价值，需要专业评估</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>存储与维护风险</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    实物另类资产需要适当的存储和维护条件。
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>存储和保管成本，如温湿度控制、安全措施和保险</li>
                    <li>资产可能需要定期维护和修复，增加持有成本</li>
                    <li>自然灾害、盗窃或损坏的风险</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>法律与监管风险</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    另类投资可能面临复杂的法律和监管环境。
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>跨境交易的法律和海关问题，包括进出口限制和关税</li>
                    <li>所有权和知识产权的法律问题</li>
                    <li>税收政策变化可能影响投资回报</li>
                    <li>数字资产的监管不确定性和法律风险</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold">投资者注意事项</h3>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                <li><strong>充分研究</strong>：在投资前进行充分的専业研究，了解市场历史和趋势。</li>
                <li><strong>咨询专家</strong>：寻求专业领域专家的建议，如艺术顾问、收藏品专家或评估师。</li>
                <li><strong>多元化投资</strong>：不要将所有资金集中在单一类别的另类投资上。</li>
                <li><strong>流动性规划</strong>：考虑到资产的流动性限制，确保有足够的应急资金。</li>
                <li><strong>长期视角</strong>：另类投资通常需要长期持有才能实现最大价值。</li>
                <li><strong>保险保障</strong>：考虑为高价值收藏品购买适当的保险。</li>
              </ul>
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
                  <a href="#introduction" className="text-primary hover:underline block">什么是另类投资？</a>
                </div>
                <div>
                  <a href="#types" className="text-primary hover:underline block">另类投资类型</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#art" className="text-muted-foreground hover:text-primary block">艺术品</a>
                    <a href="#collectibles" className="text-muted-foreground hover:text-primary block">收藏品</a>
                    <a href="#wine" className="text-muted-foreground hover:text-primary block">红酒</a>
                    <a href="#digital" className="text-muted-foreground hover:text-primary block">数字藏品</a>
                  </div>
                </div>
                <div>
                  <a href="#characteristics" className="text-primary hover:underline block">投资特点</a>
                </div>
                <div>
                  <a href="#strategies" className="text-primary hover:underline block">投资策略</a>
                </div>
                <div>
                  <a href="#risks" className="text-primary hover:underline block">风险与注意事项</a>
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
              <Accordion type="single" collapsible className="w-full" id="faq">
              <AccordionItem value="faq-1">
                <AccordionTrigger>另类投资适合普通投资者吗？</AccordionTrigger>
                <AccordionContent>
                  另类投资通常需要一定的专业知识和资金实力。普通投资者可以通过基金或信托等间接方式参与，或从小额开始学习和探索。建议先从小额开始，并将另类投资作为整体投资组合的补充。
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-2">
                <AccordionTrigger>如何判断另类投资的真实性和价值？</AccordionTrigger>
                <AccordionContent>
                  判断另类投资的真实性和价值需要专业知识。建议咨询专业评估师或领域专家，获取认证证书和来源证明，并在可能的情况下进行状况检查和真伪鉴定。对于高价值资产，应该寻求多个独立专家的意见。
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-3">
                <AccordionTrigger>另类投资应占投资组合的多大比例？</AccordionTrigger>
                <AccordionContent>
                  一般建议另类投资占投资组合的比例不超过10-20%，具体比例取决于个人风险承受能力、财务目标和专业知识水平。对于初学者，建议从更小的比例（如5%以下）开始，随着经验和知识的积累逐步增加。
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-4">
                <AccordionTrigger>数字藏品(NFT)是否是可靠的另类投资？</AccordionTrigger>
                <AccordionContent>
                  数字藏品(NFT)是相对较新的另类投资形式，具有高波动性和风险。目前市场仍处于早期发展阶段，监管环境不完善。投资者应谨慎对待，只投资于自己能承受损失的金额，并充分了解区块链技术和特定项目的基本面。
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-5">
                <AccordionTrigger>如何开始另类投资？</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>首先选择一个你有兴趣或爱好的领域，这样你会更有动力学习相关知识</li>
                    <li>充分研究和阅读相关书籍、参加行业展会或论坛</li>
                    <li>从小额开始，逐步积累经验</li>
                    <li>考虑通过基金或ETF等间接方式先接触这个领域</li>
                    <li>与其他收藏家或投资者建立联系，学习他们的经验</li>
                    <li>制定明确的预算和投资计划，不要投入超出能力的资金</li>
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
                <a href="/real-estate" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">房地产投资</h3>
                    <p className="text-xs text-muted-foreground">了解另一种实物资产投资方式</p>
                  </div>
                </a>
                <a href="/precious-metals" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">黄金与贵金属</h3>
                    <p className="text-xs text-muted-foreground">探索贵金属投资的特点与方法</p>
                  </div>
                </a>
                <a href="/funds" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">基金投资</h3>
                    <p className="text-xs text-muted-foreground">了解如何通过基金间接投资另类资产</p>
                  </div>
                </a>
                <a href="/etf" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">ETF投资</h3>
                    <p className="text-xs text-muted-foreground">探索交易所交易基金的投资机会</p>
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
