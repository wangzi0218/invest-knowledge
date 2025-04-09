import React from "react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

export default function SecondaryMarketPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>二级市场</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">二级市场</h1>
        <p className="text-xl text-muted-foreground">
          探索二级市场的交易方式、参与者及市场规则
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8" id="main-content">
          <section id="definition">
            <h2 className="text-2xl font-semibold mb-4">什么是二级市场？</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  <strong>二级市场</strong>（Secondary Market）是指已发行证券进行交易的市场，也称为<strong>流通市场</strong>。在二级市场中，投资者之间相互买卖已经发行的证券，而发行这些证券的公司或政府并不直接参与交易，也不会从这些交易中获得资金。
                </p>
                <p className="mb-4">
                  二级市场的主要功能是为证券提供流动性，使投资者能够在需要时买入或卖出证券。这种流动性对于一级市场的健康发展至关重要，因为如果投资者无法在未来出售其持有的证券，他们将不愿意在一级市场购买新发行的证券。
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <h3 className="font-medium mb-2">通俗解释</h3>
                  <p>
                    如果把证券比作汽车，二级市场就像是二手车市场，买家和卖家在这里交易已经使用过的汽车，而汽车制造商并不参与这些交易。交易的钱款直接在买家和卖家之间流转，制造商不会从这些交易中获得任何收入。
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="features">
            <h2 className="text-2xl font-semibold mb-4">二级市场的主要特点</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li>
                    <strong>交易主体：</strong>投资者之间相互交易，发行人不参与。
                  </li>
                  <li>
                    <strong>资金流向：</strong>资金在投资者之间流转，不流向发行人。
                  </li>
                  <li>
                    <strong>价格形成：</strong>价格由市场供求关系决定，而非发行人设定。
                  </li>
                  <li>
                    <strong>交易频率：</strong>可以持续、频繁地进行交易。
                  </li>
                  <li>
                    <strong>流动性：</strong>为证券提供流动性，使投资者能够随时买卖。
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section id="types">
            <h2 className="text-2xl font-semibold mb-4">二级市场的主要类型</h2>
            <Tabs defaultValue="exchange" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="exchange">交易所市场</TabsTrigger>
                <TabsTrigger value="otc">场外交易市场</TabsTrigger>
                <TabsTrigger value="dark">暗池交易</TabsTrigger>
              </TabsList>
              <TabsContent value="exchange" className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>交易所市场</CardTitle>
                    <CardDescription>
                      集中化的证券交易场所
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      交易所市场是一个集中化的交易场所，证券交易在特定的物理场所或电子系统中进行。交易所市场具有标准化的交易规则、清算和结算系统，以及严格的监管要求。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">主要特点</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>交易透明度高，价格公开</li>
                          <li>交易规则标准化</li>
                          <li>有严格的上市要求</li>
                          <li>交易成本相对较低</li>
                          <li>流动性通常较高</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">主要交易所</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>上海证券交易所</li>
                          <li>深圳证券交易所</li>
                          <li>纽约证券交易所</li>
                          <li>纳斯达克</li>
                          <li>伦敦证券交易所</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="otc" className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>场外交易市场</CardTitle>
                    <CardDescription>
                      分散化的证券交易网络
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      场外交易市场（OTC，Over-The-Counter）是指在交易所之外进行的证券交易。交易通过分散的交易商网络进行，而非集中在特定的交易场所。场外交易市场通常用于交易未在交易所上市的证券。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">主要特点</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>交易透明度相对较低</li>
                          <li>交易规则较为灵活</li>
                          <li>上市要求较为宽松</li>
                          <li>交易成本可能较高</li>
                          <li>流动性通常较低</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">主要OTC市场</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>美国OTCBB（场外交易公告板）</li>
                          <li>美国粉单市场</li>
                          <li>中国新三板</li>
                          <li>区域性股权市场</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="dark" className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>暗池交易</CardTitle>
                    <CardDescription>
                      非公开的证券交易系统
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      暗池交易是指在非公开的交易系统中进行的大宗证券交易。这些交易不会在公开市场上显示，直到交易完成后才会公布。暗池交易主要用于大型机构投资者进行大额交易，以避免对市场价格产生重大影响。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">主要特点</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>交易前透明度极低</li>
                          <li>适合大宗交易</li>
                          <li>可以减少市场冲击</li>
                          <li>主要面向机构投资者</li>
                          <li>交易完成后才公布信息</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">争议与监管</h3>
                        <p>
                          暗池交易因其缺乏透明度而存在争议，一些监管机构对其进行了限制。监管重点包括提高交易后透明度、防止利益冲突，以及确保公平交易。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <section id="participants">
            <h2 className="text-2xl font-semibold mb-4">二级市场的主要参与者</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">个人投资者</h3>
                    <p>
                      以个人身份参与市场交易的投资者。通常资金规模较小，但数量众多，是市场的重要组成部分。个人投资者通常通过证券经纪商参与交易。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">机构投资者</h3>
                    <p>
                      代表组织或集体利益进行投资的专业投资机构，如基金公司、保险公司、养老金、主权财富基金等。机构投资者通常资金规模大，具有专业的投资团队和研究能力。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">做市商</h3>
                    <p>
                      为特定证券提供流动性的专业交易商。做市商通过持续提供买卖报价，随时准备买入或卖出证券，从买卖价差中获利。做市商在维持市场流动性方面发挥重要作用。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">套利交易者</h3>
                    <p>
                      寻找市场定价不一致的机会并从中获利的交易者。套利交易者通过同时在不同市场或不同证券之间进行交易，利用价格差异获取无风险或低风险收益。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">高频交易者</h3>
                    <p>
                      使用高速计算机和算法进行极速交易的专业交易者。高频交易通常在极短时间内完成大量交易，利用微小的价格差异获利。高频交易在现代市场中占据相当大的交易量。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="trading">
            <h2 className="text-2xl font-semibold mb-4">交易机制与流程</h2>
            <Tabs defaultValue="order" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="order">订单驱动</TabsTrigger>
                <TabsTrigger value="quote">报价驱动</TabsTrigger>
              </TabsList>
              <TabsContent value="order" className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>订单驱动机制</CardTitle>
                    <CardDescription>
                      以投资者的买卖订单为基础的交易机制
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      订单驱动机制是大多数股票交易所采用的交易机制。在这种机制下，交易是由投资者提交的买卖订单匹配而成的。订单根据价格优先和时间优先的原则进行匹配。
                    </p>
                    <div className="bg-muted p-4 rounded-lg mb-4">
                      <h3 className="font-medium mb-2">主要订单类型</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>市价订单：</strong>以当前可获得的最佳价格立即执行的订单</li>
                        <li><strong>限价订单：</strong>指定价格或更好价格执行的订单</li>
                        <li><strong>止损订单：</strong>当价格达到指定水平时触发的市价订单</li>
                        <li><strong>止损限价订单：</strong>当价格达到指定水平时触发的限价订单</li>
                      </ul>
                    </div>
                    <p>
                      订单驱动机制的优点是交易透明度高，所有投资者都可以看到订单簿中的买卖订单。这种机制特别适合流动性较高的证券交易。
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="quote" className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>报价驱动机制</CardTitle>
                    <CardDescription>
                      以做市商提供的报价为基础的交易机制
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      报价驱动机制主要在场外交易市场中使用。在这种机制下，做市商为特定证券提供买入价和卖出价，投资者与做市商而非其他投资者进行交易。
                    </p>
                    <div className="bg-muted p-4 rounded-lg mb-4">
                      <h3 className="font-medium mb-2">做市商的角色</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>持续提供买卖报价，确保市场流动性</li>
                        <li>承担库存风险，随时准备买入或卖出证券</li>
                        <li>从买卖价差（点差）中获取收益</li>
                        <li>在市场波动时期维持市场稳定</li>
                      </ul>
                    </div>
                    <p>
                      报价驱动机制特别适合流动性较低的证券交易。虽然交易透明度不如订单驱动机制，但它能确保投资者在任何时候都能买卖证券，提高市场的连续性。
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">二级市场的重要指标</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">市场指数</h3>
                    <p className="mb-2">
                      市场指数是反映特定市场或市场细分整体表现的指标。它通常由一组具有代表性的证券组成，根据特定方法计算。
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-1">主要市场指数</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>上证综指：反映上海证券交易所上市股票的整体表现</li>
                        <li>深证成指：反映深圳证券交易所上市股票的整体表现</li>
                        <li>道琼斯工业平均指数：反映美国30家大型上市公司的表现</li>
                        <li>标普500指数：反映美国500家大型上市公司的表现</li>
                        <li>纳斯达克综合指数：反映纳斯达克市场上市公司的整体表现</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">交易量</h3>
                    <p>
                      交易量是指在特定时期内交易的证券数量。高交易量通常表示市场活跃，流动性好。交易量的变化可以反映市场情绪和参与度的变化。
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">市场宽度</h3>
                    <p>
                      市场宽度是指参与市场上涨或下跌的证券数量。市场宽度指标包括上涨/下跌比率、新高/新低比率等。良好的市场宽度表示市场走势有广泛的参与。
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">波动性</h3>
                    <p>
                      波动性是指证券价格变动的幅度和频率。高波动性表示价格变动剧烈，风险较高。VIX指数（恐慌指数）是衡量市场预期波动性的常用指标。
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">流动性</h3>
                    <p>
                      流动性是指证券可以被快速买卖而不显著影响价格的能力。流动性指标包括买卖价差、市场深度、成交速度等。良好的流动性对市场健康运行至关重要。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
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
              <div className="space-y-2">
                <div>
                  <a href="#definition" className="text-primary hover:underline block">什么是二级市场？</a>
                </div>
                <div>
                  <a href="#features" className="text-primary hover:underline block">二级市场的主要特点</a>
                </div>
                <div>
                  <a href="#types" className="text-primary hover:underline block">二级市场的主要类型</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#exchange" className="text-muted-foreground hover:text-primary block">交易所市场</a>
                    <a href="#otc" className="text-muted-foreground hover:text-primary block">场外交易市场</a>
                  </div>
                </div>
                <div>
                  <a href="#participants" className="text-primary hover:underline block">二级市场的主要参与者</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#participants" className="text-muted-foreground hover:text-primary block">个人投资者</a>
                    <a href="#participants" className="text-muted-foreground hover:text-primary block">机构投资者</a>
                    <a href="#participants" className="text-muted-foreground hover:text-primary block">做市商</a>
                  </div>
                </div>
                <div>
                  <a href="#trading" className="text-primary hover:underline block">交易机制与流程</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#order" className="text-muted-foreground hover:text-primary block">订单驱动机制</a>
                    <a href="#quote" className="text-muted-foreground hover:text-primary block">报价驱动机制</a>
                  </div>
                </div>
                <div>
                  <a href="#regulations" className="text-primary hover:underline block">二级市场的监管与规则</a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 常见问题 */}
          <Card>
            <CardHeader>
              <CardTitle>常见问题</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>二级市场和一级市场有什么区别？</AccordionTrigger>
                  <AccordionContent>
                    二级市场与一级市场的主要区别：
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><strong>交易对象：</strong>二级市场是投资者之间，一级市场是发行人与投资者</li>
                      <li><strong>资金流向：</strong>二级市场资金在投资者间流转，不流向发行人</li>
                      <li><strong>价格形成：</strong>二级市场由市场供需决定，一级市场由发行人与承销商确定</li>
                      <li><strong>交易频率：</strong>二级市场可持续交易，一级市场为一次性交易</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>二级市场的主要功能是什么？</AccordionTrigger>
                  <AccordionContent>
                    二级市场的主要功能包括：
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>提供流动性，使投资者能够随时买卖证券</li>
                      <li>通过供需关系形成公平合理的价格</li>
                      <li>将资金引导到最有效的使用领域，促进资源配置</li>
                      <li>支持一级市场的存在，没有二级市场的流动性，一级市场将难以运作</li>
                      <li>提供价格信号，帮助投资者和企业决策</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>普通投资者如何参与二级市场交易？</AccordionTrigger>
                  <AccordionContent>
                    普通投资者参与二级市场交易的步骤：
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>在证券公司或银行开立证券账户和资金账户</li>
                      <li>安装并学习使用交易软件或平台</li>
                      <li>根据交易策略选择适合的交易方式（如限价、市价等）</li>
                      <li>关注交易时间，交易所有特定的交易时段</li>
                      <li>学习基本的技术分析和基本面分析方法</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>二级市场的风险有哪些？</AccordionTrigger>
                  <AccordionContent>
                    二级市场的主要风险包括：
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><strong>市场风险：</strong>证券价格波动导致的投资损失</li>
                      <li><strong>流动性风险：</strong>某些证券可能难以快速交易或交易价差较大</li>
                      <li><strong>信息风险：</strong>信息不对称导致的决策错误</li>
                      <li><strong>操作风险：</strong>交易系统故障或人为操作错误</li>
                      <li><strong>监管风险：</strong>政策变化对市场的影响</li>
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
                <a href="/primary-market" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">一级市场</h3>
                    <p className="text-xs text-muted-foreground">了解证券发行与融资的市场</p>
                  </div>
                </a>
                <a href="/securities" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">证券</h3>
                    <p className="text-xs text-muted-foreground">探索股票、债券等证券产品</p>
                  </div>
                </a>
                <a href="/funds" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">基金</h3>
                    <p className="text-xs text-muted-foreground">了解不同类型基金的特点和投资策略</p>
                  </div>
                </a>
                <a href="/etf" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">ETF</h3>
                    <p className="text-xs text-muted-foreground">交易型开放式指数基金的特点与机制</p>
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
