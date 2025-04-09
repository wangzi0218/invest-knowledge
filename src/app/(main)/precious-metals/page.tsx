"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { StickySidebar } from "@/components/ui-custom/knowledge-page";

export default function PreciousMetalsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>黄金与贵金属投资</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">黄金与贵金属投资</h1>
        <p className="text-xl text-muted-foreground">
          了解黄金、白银等贵金属的投资特点、方式及策略
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">


          {/* 贵金属简介 */}
          <section id="introduction" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">什么是贵金属投资？</h2>
          <p className="text-muted-foreground">
            贵金属投资是指投资者通过各种方式购买黄金、白银、铂金、钯金等贵金属资产，以期获得资产保值增值的投资行为。
            贵金属因其稀缺性、耐久性和普遍认可的价值，自古以来就被视为重要的投资和避险工具。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader id="metal-types">
                <CardTitle>主要贵金属种类</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>黄金</strong>：最主要的贵金属投资品种，具有全球认可的价值</li>
                  <li><strong>白银</strong>：价格较黄金低廉，波动性较大，兼具投资和工业属性</li>
                  <li><strong>铂金</strong>：稀有度高于黄金，主要用于汽车催化剂和珠宝</li>
                  <li><strong>钯金</strong>：近年价格波动显著，主要用于汽车工业</li>
                  <li><strong>铑金</strong>：极其稀有的贵金属，主要用于工业领域</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader id="features">
                <CardTitle>贵金属的基本特点</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>避险属性</strong>：经济不确定性增加时，贵金属往往表现良好</li>
                  <li><strong>抗通胀</strong>：长期来看，贵金属价格往往跟随通胀上涨</li>
                  <li><strong>实物价值</strong>：具有内在价值，不依赖于发行机构的信用</li>
                  <li><strong>全球流通</strong>：在全球范围内被认可和交易</li>
                  <li><strong>供应有限</strong>：开采量有限，无法像货币一样任意增发</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

          {/* 投资方式 */}
          <section id="investment-methods" className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold tracking-tight">贵金属投资方式</h2>
          <p className="text-muted-foreground">
            投资者可以通过多种方式参与贵金属投资，每种方式各有优缺点，适合不同的投资需求和风险偏好。
          </p>

          <Tabs defaultValue="physical" className="mt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="physical">实物投资</TabsTrigger>
              <TabsTrigger value="paper">纸黄金/纸白银</TabsTrigger>
              <TabsTrigger value="financial">金融产品</TabsTrigger>
            </TabsList>
            <TabsContent id="physical" value="physical" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">实物贵金属投资</h3>
              <p className="mb-4">
                实物贵金属投资是指直接购买和持有贵金属实物，如金条、金币、银条、银币等。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">优势：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>直接拥有实物，不存在交易对手风险</li>
                    <li>可以在金融体系之外保存财富</li>
                    <li>在极端情况下（如金融危机）可能更有价值</li>
                    <li>部分收藏版金币可能具有额外的收藏价值</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">劣势：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>存在保管和安全风险</li>
                    <li>购买和变现时通常有较高的溢价和折价</li>
                    <li>不便于小额交易和频繁交易</li>
                    <li>不产生收益流（如利息、股息）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">常见形式：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>金条/银条</strong>：不同重量规格（如1克、10克、1盎司、1公斤等）</li>
                    <li><strong>金币/银币</strong>：各国铸币厂发行的投资金币（如加拿大枫叶金币、美国鹰洋金币等）</li>
                    <li><strong>贵金属首饰</strong>：含金量较高的首饰也可视为一种投资</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                注意：购买实物贵金属时，应选择信誉良好的渠道，并注意产品的纯度、重量和真伪。
              </p>
            </TabsContent>
            <TabsContent id="paper" value="paper" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">纸黄金/纸白银</h3>
              <p className="mb-4">
                纸黄金/纸白银是银行推出的一种贵金属账户投资方式，投资者通过银行账户买卖贵金属，而无需实际持有实物。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">优势：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>交易便捷，可以通过银行网银、手机银行等渠道随时交易</li>
                    <li>可以小额投资，起点低（通常为1克）</li>
                    <li>买卖差价较实物贵金属小</li>
                    <li>无需担心保管问题</li>
                    <li>部分银行支持提取实物（需支付加工费）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">劣势：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>存在交易对手风险（依赖银行信用）</li>
                    <li>交易时间受限于银行交易时间</li>
                    <li>部分银行可能收取账户管理费</li>
                    <li>提取实物时可能面临较高费用</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">交易方式：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>实时交易</strong>：在银行交易时间内按实时价格交易</li>
                    <li><strong>委托交易</strong>：设定价格条件，当市场价格达到条件时自动成交</li>
                    <li><strong>定投计划</strong>：定期定额购买，平均成本</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                注意：不同银行的纸黄金/纸白银产品在费用、交易规则等方面可能有所不同，投资前应详细了解产品说明。
              </p>
            </TabsContent>
            <TabsContent id="financial" value="financial" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">贵金属金融产品</h3>
              <p className="mb-4">
                除了实物和纸黄金/纸白银外，投资者还可以通过各种金融产品间接投资贵金属。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">贵金属ETF：</h4>
                  <p className="text-sm">
                    贵金属ETF是在交易所交易的基金，通过持有实物贵金属或贵金属期货合约来跟踪贵金属价格。
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>交易便捷，可以像股票一样在交易所买卖</li>
                    <li>费用较低，通常年费率在0.4%-0.5%左右</li>
                    <li>无需担心实物保管问题</li>
                    <li>流动性较好（主要ETF）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">贵金属期货：</h4>
                  <p className="text-sm">
                    贵金属期货是标准化的合约，约定在未来某一时间以特定价格买入或卖出一定数量的贵金属。
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>杠杆交易，资金利用效率高</li>
                    <li>可做多也可做空</li>
                    <li>流动性好，价格透明</li>
                    <li>风险较高，适合专业投资者</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">贵金属相关股票：</h4>
                  <p className="text-sm">
                    投资贵金属开采、加工、销售等相关公司的股票。
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>潜在杠杆效应：贵金属价格上涨可能带来更大比例的公司利润增长</li>
                    <li>可能获得股息收益</li>
                    <li>受公司经营状况、管理能力等多种因素影响，不仅仅是贵金属价格</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                这些金融产品各有特点，投资者应根据自己的风险承受能力、投资目标和专业知识水平选择合适的产品。
              </p>
            </TabsContent>
          </Tabs>
        </section>

          {/* 投资特点与风险 */}
          <section id="characteristics" className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold tracking-tight">投资特点与风险</h2>
          <p className="text-muted-foreground">
            了解贵金属投资的特点和风险，有助于投资者做出更明智的投资决策。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>投资特点</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>避险资产</strong>：在经济不确定性增加、地缘政治风险上升时表现较好</li>
                  <li><strong>通胀对冲</strong>：长期来看，贵金属价格往往能跟上通货膨胀</li>
                  <li><strong>货币贬值保护</strong>：当法定货币贬值时，贵金属往往能保持购买力</li>
                  <li><strong>低相关性</strong>：与股票等传统资产相关性较低，有助于分散投资组合风险</li>
                  <li><strong>流动性</strong>：全球市场交易活跃，容易变现（尤其是黄金）</li>
                  <li><strong>无信用风险</strong>：实物贵金属不依赖于任何发行机构的信用</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>投资风险</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>价格波动风险</strong>：贵金属价格可能出现显著波动</li>
                  <li><strong>机会成本</strong>：不产生收益流（如利息、股息），持有期间有机会成本</li>
                  <li><strong>保管风险</strong>：实物贵金属存在被盗、损坏、丢失的风险</li>
                  <li><strong>交易对手风险</strong>：非实物投资方式依赖于交易对手的信用</li>
                  <li><strong>政策风险</strong>：政府可能实施限制贵金属交易或持有的政策</li>
                  <li><strong>流动性风险</strong>：部分小众贵金属或特殊规格产品可能流动性较差</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

         
        </div>

        <div className="space-y-6">
          {/* 目录导航 */}
          <Card>
            <CardHeader>
              <CardTitle>目录</CardTitle>
              <CardDescription>快速导航到各个部分</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <a href="#introduction" className="text-primary hover:underline block">贵金属投资简介</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#metal-types" className="text-muted-foreground hover:text-primary block">主要贵金属种类</a>
                    <a href="#features" className="text-muted-foreground hover:text-primary block">贵金属基本特点</a>
                  </div>
                </div>
                <div>
                  <a href="#investment-methods" className="text-primary hover:underline block">投资方式</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#physical" className="text-muted-foreground hover:text-primary block">实物投资</a>
                    <a href="#paper" className="text-muted-foreground hover:text-primary block">纸黄金/纸白银</a>
                    <a href="#financial" className="text-muted-foreground hover:text-primary block">金融产品</a>
                  </div>
                </div>
                <div>
                  <a href="#characteristics" className="text-primary hover:underline block">投资特点与风险</a>
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
                  <AccordionTrigger>贵金属投资适合哪些人？</AccordionTrigger>
                  <AccordionContent>
                    <p>贵金属投资适合以下类型的投资者：</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>寻求资产配置多元化</strong>的投资者：贵金属可以作为投资组合中的一部分，帮助分散风险</li>
                      <li><strong>担忧通货膨胀</strong>的投资者：贵金属历来被视为对抗通胀的工具</li>
                      <li><strong>对经济前景持谨慎态度</strong>的投资者：在经济不确定性增加时，贵金属往往表现较好</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>投资贵金属的最佳时机是什么？</AccordionTrigger>
                  <AccordionContent>
                    <p>贵金属投资的时机考虑因素：</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>经济周期</strong>：经济衰退或不确定性增加时，贵金属往往表现较好</li>
                      <li><strong>通胀预期</strong>：通胀预期上升时，贵金属价格往往上涨</li>
                      <li><strong>实际利率</strong>：实际利率下降时，贵金属通常表现较好</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>相关主题</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                <a href="/etf" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">ETF</h3>
                    <p className="text-xs text-muted-foreground">了解黄金ETF等贵金属相关ETF投资</p>
                  </div>
                </a>
                <a href="/financial-products" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">金融产品</h3>
                    <p className="text-xs text-muted-foreground">探索更多金融产品的分类与特点</p>
                  </div>
                </a>
                <a href="/securities" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">证券投资</h3>
                    <p className="text-xs text-muted-foreground">了解证券市场与投资策略</p>
                  </div>
                </a>
                <a href="/real-estate" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">房地产投资</h3>
                    <p className="text-xs text-muted-foreground">对比不同类型的实物资产投资</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-1">
          <StickySidebar>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">目录</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#introduction" className="text-sm text-muted-foreground hover:text-foreground">什么是贵金属投资？</a>
                  </li>
                  <li>
                    <a href="#metal-types" className="text-sm text-muted-foreground hover:text-foreground">主要贵金属种类</a>
                  </li>
                  <li>
                    <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">贵金属的基本特点</a>
                  </li>
                  <li>
                    <a href="#investment-methods" className="text-sm text-muted-foreground hover:text-foreground">贵金属投资方式</a>
                  </li>
                  <li>
                    <a href="#risks" className="text-sm text-muted-foreground hover:text-foreground">风险与注意事项</a>
                  </li>
                  <li>
                    <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">常见问题</a>
                  </li>
                </ul>
              </div>
            </div>
          </StickySidebar>
        </div>
      </div>
    </div>
  );
}
