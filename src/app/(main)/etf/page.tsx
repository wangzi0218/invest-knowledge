"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { StickySidebar } from "@/components/ui-custom/knowledge-page";

export default function ETFPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>ETF</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">ETF</h1>
        <p className="text-xl text-muted-foreground">
          了解交易型开放式指数基金(ETF)的运作机制、优势及投资方法
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">        
        <div className="lg:col-span-2 space-y-8">
          {/* ETF简介 */}
          <section className="space-y-4" id="introduction">
            <h2 className="text-2xl font-bold tracking-tight">什么是ETF？</h2>
            <p className="text-muted-foreground">
              ETF(Exchange Traded Fund)，即交易型开放式指数基金，是一种在交易所上市交易的、基金份额可变的一种开放式基金。
              它结合了封闭式基金和开放式基金的优点，既可以像股票一样在二级市场交易，又可以通过申购赎回机制在一级市场创设和赎回基金份额。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>ETF的主要特点</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>交易便捷：可以像股票一样在交易所买卖</li>
                    <li>费用低廉：管理费和交易成本较低</li>
                    <li>透明度高：投资组合每日公开</li>
                    <li>分散风险：一次买入即可获得一篮子股票</li>
                    <li>套利机制：保证ETF价格与净值的接近</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ETF与普通指数基金的区别</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>交易方式：ETF在交易所交易，普通指数基金通过基金公司申购赎回</li>
                    <li>交易时间：ETF可以在交易时段内随时交易，普通指数基金通常按日结算</li>
                    <li>交易价格：ETF以市场价格交易，普通指数基金以当日净值交易</li>
                    <li>最小购买单位：ETF有最小交易单位(通常为100份)，普通指数基金起点较低</li>
                    <li>费用结构：ETF通常总费用率更低</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* ETF运作机制 */}
          <section className="space-y-4" id="mechanism">
            <h2 className="text-2xl font-bold tracking-tight">ETF运作机制</h2>
            <p className="text-muted-foreground">
              ETF的运作涉及一级市场和二级市场两个层面，通过特殊的申购赎回机制和套利机制保证ETF价格与其追踪的指数保持一致。
            </p>
            
            <Tabs defaultValue="primary" className="mt-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="primary">一级市场</TabsTrigger>
                <TabsTrigger value="secondary">二级市场</TabsTrigger>
              </TabsList>
              
              <TabsContent value="primary" className="p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">一级市场运作</h3>
                  <p className="text-muted-foreground">
                    一级市场是ETF份额的创设和赎回市场，主要参与者是ETF基金管理人和具有ETF申购赎回资格的特定机构（通常是券商）。
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="text-lg font-medium mb-2">申购过程</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>特定机构按照ETF规定的股票篮子比例，准备相应的一篮子股票</li>
                      <li>将这篮子股票交给ETF基金管理人</li>
                      <li>基金管理人验证后，向特定机构发行相应的ETF份额</li>
                      <li>特定机构可以在二级市场出售这些ETF份额</li>
                    </ol>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-lg font-medium mb-2">赎回过程</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>特定机构从二级市场购买一定数量的ETF份额</li>
                      <li>将这些ETF份额交给基金管理人</li>
                      <li>基金管理人注销这些份额，并向特定机构返还相应的一篮子股票</li>
                      <li>特定机构可以在股票市场出售这些股票</li>
                    </ol>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg mt-4">
                    <h4 className="text-lg font-medium mb-2">重要特点</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>最小申购赎回单位：通常为50万份或100万份</li>
                      <li>实物申购赎回：主要以股票篮子而非现金进行</li>
                      <li>T+0交易：申购赎回在当日完成</li>
                      <li>仅对特定机构开放：个人投资者无法直接参与</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="secondary" className="p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">二级市场运作</h3>
                  <p className="text-muted-foreground">
                    二级市场是ETF份额的交易市场，所有投资者（包括个人投资者）都可以参与，交易方式与股票完全相同。
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="text-lg font-medium mb-2">交易特点</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>交易场所：证券交易所（如上海证券交易所、深圳证券交易所）</li>
                      <li>交易单位：通常为100份或更少</li>
                      <li>交易时间：与股票交易时间相同</li>
                      <li>交易方式：限价委托、市价委托等，与股票交易方式相同</li>
                      <li>交易费用：佣金、印花税等，与股票交易费用结构相似</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-lg font-medium mb-2">价格形成</h4>
                    <p className="text-muted-foreground">
                      ETF在二级市场的价格由买卖双方共同决定，理论上应该接近ETF的净值，但实际交易中可能出现溢价或折价：
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>溢价</strong>：ETF市场价格高于净值</li>
                      <li><strong>折价</strong>：ETF市场价格低于净值</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg mt-4">
                    <h4 className="text-lg font-medium mb-2">套利机制</h4>
                    <p className="text-muted-foreground">
                      当ETF出现明显溢价或折价时，会触发套利机制：
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>溢价套利</strong>：特定机构在一级市场申购ETF份额，在二级市场卖出，赚取差价</li>
                      <li><strong>折价套利</strong>：特定机构在二级市场买入ETF份额，在一级市场赎回，赚取差价</li>
                    </ul>
                    <p className="mt-2">
                      套利机制确保ETF的市场价格不会与净值产生太大偏离，保证ETF的定价效率。
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">ETF运作流程图</h3>
              <Card className="bg-muted/30">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-center">申购流程</h4>
                      <div className="space-y-2">
                        <div className="bg-background p-3 rounded-md text-center">特定机构准备一篮子股票</div>
                        <div className="flex justify-center">↓</div>
                        <div className="bg-background p-3 rounded-md text-center">交给ETF基金管理人</div>
                        <div className="flex justify-center">↓</div>
                        <div className="bg-background p-3 rounded-md text-center">获得ETF份额</div>
                        <div className="flex justify-center">↓</div>
                        <div className="bg-background p-3 rounded-md text-center">在二级市场出售ETF份额</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-center">赎回流程</h4>
                      <div className="space-y-2">
                        <div className="bg-background p-3 rounded-md text-center">特定机构从二级市场购买ETF份额</div>
                        <div className="flex justify-center">↓</div>
                        <div className="bg-background p-3 rounded-md text-center">交给ETF基金管理人</div>
                        <div className="flex justify-center">↓</div>
                        <div className="bg-background p-3 rounded-md text-center">获得一篮子股票</div>
                        <div className="flex justify-center">↓</div>
                        <div className="bg-background p-3 rounded-md text-center">在股票市场出售股票</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* ETF分类 */}
          <section className="space-y-4" id="types">
            <h2 className="text-2xl font-bold tracking-tight">ETF分类</h2>
            <p className="text-muted-foreground">
              ETF可以按照不同的标准进行分类，包括按照跟踪标的分类、按照投资区域分类和按照投资策略分类等。
            </p>

            <Tabs defaultValue="target" className="mt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="target">按跟踪标的分类</TabsTrigger>
                <TabsTrigger value="region">按投资区域分类</TabsTrigger>
                <TabsTrigger value="strategy">按投资策略分类</TabsTrigger>
              </TabsList>
              
              <TabsContent value="target" className="p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">按跟踪标的分类</h3>
                  <p className="text-muted-foreground">
                    根据ETF跟踪的标的类型，可以将ETF分为以下几类：
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>股票指数ETF</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>定义：</strong>跟踪特定股票指数的ETF，如沪深300、标普500等</p>
                          <p><strong>特点：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>投资标的是指数成分股票</li>
                            <li>风险收益特性与股票市场相关</li>
                            <li>流动性较高，交易活跃</li>
                          </ul>
                          <p><strong>主要例子：</strong>沪深300ETF、创业板ETF、中证500ETF等</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>债券指数ETF</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>定义：</strong>跟踪债券指数的ETF，如国债指数、信用债指数等</p>
                          <p><strong>特点：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>投资标的是各类债券</li>
                            <li>风险收益特性相对稳定</li>
                            <li>收益来源包括利息和价格变动</li>
                          </ul>
                          <p><strong>主要例子：</strong>国债指数ETF、中期约国债ETF、信用债指数ETF等</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>商品ETF</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>定义：</strong>跟踪商品价格或商品指数的ETF，如黄金ETF、原油ETF等</p>
                          <p><strong>特点：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>投资标的是商品期货或相关公司股票</li>
                            <li>可以作为对冲通货膨胀的工具</li>
                            <li>与宏观经济周期相关性较强</li>
                          </ul>
                          <p><strong>主要例子：</strong>黄金ETF、白银ETF、原油ETF等</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>货币市场ETF</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>定义：</strong>跟踪货币市场指数的ETF，投资于短期货币市场工具</p>
                          <p><strong>特点：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>风险极低，收益相对稳定</li>
                            <li>流动性高，可以作为现金管理工具</li>
                            <li>收益率一般高于活期存款</li>
                          </ul>
                          <p><strong>主要例子：</strong>货币ETF、短期国债ETF等</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="region" className="p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">按投资区域分类</h3>
                  <p className="text-muted-foreground">
                    根据ETF投资的地理区域，可以将ETF分为以下几类：
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>国内ETF</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>定义：</strong>跟踪国内市场指数的ETF</p>
                          <p><strong>特点：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>投资于国内市场的证券</li>
                            <li>交易方便，流动性高</li>
                            <li>无汇率风险</li>
                          </ul>
                          <p><strong>主要例子：</strong>沪深300ETF、中证500ETF、创业板ETF等</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>海外市场ETF</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>定义：</strong>跟踪海外市场指数的ETF</p>
                          <p><strong>特点：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>投资于海外市场的证券</li>
                            <li>提供国际市场的投资机会</li>
                            <li>存在汇率风险</li>
                          </ul>
                          <p><strong>主要例子：</strong>纳指ETF、恒生国指ETF、标普500ETF等</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>新兴市场ETF</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>定义：</strong>跟踪新兴市场指数的ETF</p>
                          <p><strong>特点：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>投资于新兴经济体市场</li>
                            <li>潜在增长空间大，但波动也较大</li>
                            <li>风险相对较高</li>
                          </ul>
                          <p><strong>主要例子：</strong>MSCI新兴市场ETF、金砖四国ETF等</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>区域性ETF</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>定义：</strong>跟踪特定区域指数的ETF，如亚太地区、欧洲地区等</p>
                          <p><strong>特点：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>投资于特定地理区域的证券</li>
                            <li>可以实现区域分散投资</li>
                            <li>不同区域的经济周期可能不同步</li>
                          </ul>
                          <p><strong>主要例子：</strong>亚太综合ETF、欧洲ETF、日经ETF等</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="strategy" className="p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">按投资策略分类</h3>
                  <p className="text-muted-foreground">
                    根据ETF采用的投资策略，可以将ETF分为以下几类：
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>被动型ETF</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>定义：</strong>完全跟踪特定指数的ETF，不进行主动选股</p>
                          <p><strong>特点：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>管理费用低</li>
                            <li>透明度高，投资策略简单明确</li>
                            <li>追求跟踪指数的表现</li>
                          </ul>
                          <p><strong>主要例子：</strong>沪深300ETF、标普500ETF等大多数指数ETF</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>智能贴标型ETF</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>定义：</strong>跟踪非市值加权指数的ETF，如基本面加权、红利加权等</p>
                          <p><strong>特点：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>结合了被动和主动投资的特点</li>
                            <li>有特定的因子替代人为选股</li>
                            <li>费用介于被动型和主动型之间</li>
                          </ul>
                          <p><strong>主要例子：</strong>红利ETF、价值型ETF、低波动ETF等</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>杠杆ETF</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>定义：</strong>使用杠杆原理设计的ETF，可以放大指数涨跌幅度</p>
                          <p><strong>特点：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>包括正向杠杆（放大涨幅）和反向杠杆（放大跌幅）</li>
                            <li>风险较高，适合短期投资</li>
                            <li>存在跟踪误差累积问题</li>
                          </ul>
                          <p><strong>主要例子：</strong>国内少见，在美国市场有ProShares Ultra S&P500（正向杠杆）等</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>主题型ETF</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>定义：</strong>跟踪特定行业或主题的ETF</p>
                          <p><strong>特点：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>聚焦于特定行业或投资主题</li>
                            <li>可以抓住行业轮动或特定主题机会</li>
                            <li>集中度较高，风险也相对较高</li>
                          </ul>
                          <p><strong>主要例子：</strong>消费ETF、医药生物ETF、新能源汽车ETF等</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>
          
          {/* ETF优缺点 */}
          <section className="space-y-4" id="pros-cons">
            <h2 className="text-2xl font-bold tracking-tight">ETF的优势与劣势</h2>
            <p className="text-muted-foreground">
              ETF作为一种投资工具，具有一系列独特的优势，同时也存在一些局限性，投资者需要全面了解这些特点。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <Card>
                  <CardHeader className="bg-green-50 dark:bg-green-950/20">
                    <CardTitle className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      ETF的优势
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">低成本高效率</h3>
                        <ul className="list-disc pl-5 space-y-1 mt-1 text-muted-foreground">
                          <li>管理费率低，通常在0.1%-0.5%之间，显著低于主动管理基金</li>
                          <li>交易成本低，与股票交易相同</li>
                          <li>税收效率高，由于换手率低，产生的资本利得税较少</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium">分散投资便捷</h3>
                        <ul className="list-disc pl-5 space-y-1 mt-1 text-muted-foreground">
                          <li>一次购买即可获得一篮子证券，实现广泛分散</li>
                          <li>轻松实现行业、区域、国家等多元化配置</li>
                          <li>降低非系统性风险，提高组合效率</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium">交易灵活性高</h3>
                        <ul className="list-disc pl-5 space-y-1 mt-1 text-muted-foreground">
                          <li>交易时间与股票相同，可在交易时段内随时买卖</li>
                          <li>支持各种交易方式，如限价、市价、停损等委托</li>
                          <li>可以做空卖出，在下跌市场中获利</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium">透明度高</h3>
                        <ul className="list-disc pl-5 space-y-1 mt-1 text-muted-foreground">
                          <li>每日公布投资组合和净值，投资者可以清楚知道持有的资产</li>
                          <li>投资策略明确，跟踪特定指数</li>
                          <li>定价机制透明，套利机制确保价格接近净值</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader className="bg-red-50 dark:bg-red-950/20">
                    <CardTitle className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      ETF的劣势
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">跟踪误差风险</h3>
                        <ul className="list-disc pl-5 space-y-1 mt-1 text-muted-foreground">
                          <li>ETF的实际表现可能与指数存在偏差，尤其是流动性低的标的</li>
                          <li>杠杆ETF和反向ETF存在跟踪误差累积问题</li>
                          <li>跟踪海外指数的ETF可能受到时区差异、汇率等因素影响</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium">无法超越市场</h3>
                        <ul className="list-disc pl-5 space-y-1 mt-1 text-muted-foreground">
                          <li>被动型ETF只能跟踪指数，无法战胜市场</li>
                          <li>在下跌市场中，除非做空，否则无法避免下跌</li>
                          <li>不适合追求高收益的激进型投资者</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium">溢价折价风险</h3>
                        <ul className="list-disc pl-5 space-y-1 mt-1 text-muted-foreground">
                          <li>ETF价格可能与净值存在差异，尤其是流动性低的ETF</li>
                          <li>海外ETF可能因为时区差异、交易时间不同步等原因出现较大溢价折价</li>
                          <li>在市场极端波动时期，套利机制可能失效</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium">其他限制</h3>
                        <ul className="list-disc pl-5 space-y-1 mt-1 text-muted-foreground">
                          <li>部分ETF流动性不足，交易量小，可能导致买卖价差较大</li>
                          <li>无法选择指数成分股，必须整体购买</li>
                          <li>部分特殊类型ETF（如杠杆ETF）结构复杂，风险较高</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">适合使用ETF的投资者类型</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>长期投资者</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>追求长期资产增值</li>
                      <li>采用“买入并持有”策略</li>
                      <li>适合用于退休金、养老金等长期资金规划</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>被动投资者</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>无意或无能力进行个股选择</li>
                      <li>相信市场有效性，认为难以战胜大市场</li>
                      <li>追求低成本、简单易行的投资方式</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>资产配置者</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>需要快速调整资产类别配置的投资者</li>
                      <li>利用ETF实现大类资产轮动和战略性配置</li>
                      <li>需要快速实现行业、区域或主题投资的机构投资者</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="bg-muted p-4 rounded-lg mt-6">
              <h4 className="text-lg font-medium mb-2">ETF投资注意事项</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>关注ETF的跟踪误差，选择跟踪误差小的ETF产品</li>
                <li>注意流动性，避免选择交易量过小的ETF</li>
                <li>理性看待溢价和折价，利用它们进行价值投资</li>
                <li>根据自身风险承受能力和投资目标选择合适的ETF类型</li>
                <li>对于杠杆ETF和反向ETF，应谨慎使用，了解其特殊风险</li>
                <li>注意海外ETF的汇率风险和跨境投资政策风险</li>
              </ul>
            </div>
          </section>
        </div>
        
        {/* 右侧栏 - 目录、常见问题和相关主题 */}
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
                  <a href="#introduction" className="text-primary hover:underline block">什么是ETF？</a>
                </div>
                <div>
                  <a href="#mechanism" className="text-primary hover:underline block">ETF运作机制</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#creation-redemption" className="text-muted-foreground hover:text-primary block">申购赎回机制</a>
                    <a href="#trading" className="text-muted-foreground hover:text-primary block">交易机制</a>
                  </div>
                </div>
                <div>
                  <a href="#types" className="text-primary hover:underline block">ETF分类</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#by-target" className="text-muted-foreground hover:text-primary block">按跟踪标的分类</a>
                    <a href="#by-region" className="text-muted-foreground hover:text-primary block">按投资区域分类</a>
                    <a href="#by-strategy" className="text-muted-foreground hover:text-primary block">按投资策略分类</a>
                  </div>
                </div>
                <div>
                  <a href="#pros-cons" className="text-primary hover:underline block">ETF的优势与劣势</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#advantages" className="text-muted-foreground hover:text-primary block">优点</a>
                    <a href="#disadvantages" className="text-muted-foreground hover:text-primary block">缺点</a>
                  </div>
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
                  <AccordionTrigger>ETF与普通指数基金有什么区别？</AccordionTrigger>
                  <AccordionContent>
                    <p>ETF与普通指数基金的主要区别在于交易方式和流动性。ETF在交易所交易，可以像股票一样实时买卖，而普通指数基金通过基金公司申购赎回，按照当日收盘后的净值计算。此外，ETF通常费用更低，交易更灵活。</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>如何选择合适的ETF？</AccordionTrigger>
                  <AccordionContent>
                    <p>选择ETF时应考虑以下因素：跟踪标的、费用率、流动性、规模、跟踪误差、发行机构实力等。投资者应根据自身投资目标、风险偏好和投资期限选择合适的ETF产品。</p>
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
                    <h3 className="text-sm font-medium">基金</h3>
                    <p className="text-xs text-muted-foreground">了解不同类型基金的特点和投资策略</p>
                  </div>
                </a>
                <a href="/securities" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">证券</h3>
                    <p className="text-xs text-muted-foreground">探索股票、债券等证券产品</p>
                  </div>
                </a>
                <a href="/primary-market" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">一级市场</h3>
                    <p className="text-xs text-muted-foreground">了解ETF创设和赎回的市场</p>
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
                    <a href="#introduction" className="text-sm text-muted-foreground hover:text-foreground">什么是ETF？</a>
                  </li>
                  <li>
                    <a href="#mechanism" className="text-sm text-muted-foreground hover:text-foreground">ETF运作机制</a>
                  </li>
                  <li>
                    <a href="#types" className="text-sm text-muted-foreground hover:text-foreground">ETF分类</a>
                  </li>
                  <li>
                    <a href="#advantages" className="text-sm text-muted-foreground hover:text-foreground">ETF优势与劣势</a>
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
