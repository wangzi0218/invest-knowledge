import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

export default function MarketIndicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>指数与行情</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">指数与行情</h1>
        <p className="text-xl text-muted-foreground">
          了解市场指数构成、行情解读、技术指标分析与市场情绪判断
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">        
        <div className="lg:col-span-2 space-y-8">
        
        {/* 指数基础知识 */}
        <section className="space-y-4" id="basics">
          <h2 className="text-2xl font-bold tracking-tight">指数基础知识</h2>
          <p className="text-muted-foreground">
            市场指数是反映特定市场或市场板块整体表现的统计工具，通过对一组证券价格的加权平均计算得出。
            投资者可以通过观察指数变动来了解市场整体趋势，而无需分析每只个股的表现。
          </p>
          
          <Tabs defaultValue="definition" className="mt-6">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="definition">指数定义与作用</TabsTrigger>
              <TabsTrigger value="types">指数类型</TabsTrigger>
              <TabsTrigger value="major">全球主要指数</TabsTrigger>
            </TabsList>
            
            <TabsContent value="definition" className="space-y-4">
              <h3 className="text-lg font-semibold">指数的定义与作用</h3>
              <p>市场指数是通过特定方法计算的数值，用于反映一组证券的价格变动。指数的主要作用包括：</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>市场晴雨表</strong>：反映整体市场或特定板块的表现</li>
                <li><strong>业绩基准</strong>：为投资组合提供比较基准</li>
                <li><strong>投资工具</strong>：通过指数基金或ETF进行投资</li>
                <li><strong>市场研究</strong>：分析市场历史表现和趋势</li>
                <li><strong>衍生品基础</strong>：作为期货、期权等衍生品的标的</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="types" className="space-y-4">
              <h3 className="text-lg font-semibold">指数类型</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>按计算方法分类</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>价格加权指数</strong>：以股票价格为权重</li>
                      <li><strong>市值加权指数</strong>：以公司市值为权重</li>
                      <li><strong>等权重指数</strong>：每只股票权重相同</li>
                      <li><strong>基本面加权指数</strong>：以公司基本面指标为权重</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>按覆盖范围分类</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>综合指数</strong>：覆盖整个市场</li>
                      <li><strong>行业指数</strong>：特定行业的股票</li>
                      <li><strong>风格指数</strong>：如成长股、价值股指数</li>
                      <li><strong>主题指数</strong>：如ESG指数、创新指数</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="major" className="space-y-4">
              <h3 className="text-lg font-semibold">全球主要指数</h3>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">指数名称</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">国家/地区</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">特点</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">上证综指</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">中国大陆</td>
                      <td className="px-4 py-2 text-sm">上海证券交易所上市的所有股票</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">深证成指</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">中国大陆</td>
                      <td className="px-4 py-2 text-sm">深圳证券交易所具代表性的500只股票</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">恒生指数</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">中国香港</td>
                      <td className="px-4 py-2 text-sm">香港交易所市值最大的成分股</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">道琼斯工业平均指数</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">美国</td>
                      <td className="px-4 py-2 text-sm">30家大型美国上市公司</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">标普500指数</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">美国</td>
                      <td className="px-4 py-2 text-sm">500家大型美国上市公司</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">纳斯达克综合指数</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">美国</td>
                      <td className="px-4 py-2 text-sm">纳斯达克市场上市的所有公司</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* 行情解读 */}
        <section className="space-y-4" id="market-reading">
          <h2 className="text-2xl font-bold tracking-tight">行情解读</h2>
          <p className="text-muted-foreground">
            行情解读是分析市场价格变动的过程，通过解读各种图表和数据，投资者可以更好地理解市场动态和趋势。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>K线图基础</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>阳线与阴线</strong>：表示上涨和下跌</li>
                  <li><strong>开盘价与收盘价</strong>：交易时段的起始和结束价格</li>
                  <li><strong>最高价与最低价</strong>：交易时段的价格极值</li>
                  <li><strong>常见K线形态</strong>：锤子线、吞没形态、十字星等</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>成交量分析</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>量价关系</strong>：价格上涨时成交量增加，信号更可靠</li>
                  <li><strong>量能变化</strong>：成交量的放大和萎缩反映市场参与度</li>
                  <li><strong>异常成交量</strong>：可能预示重要转折点</li>
                  <li><strong>成交量指标</strong>：OBV、CMF等</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* 技术指标分析 */}
        <section className="space-y-4" id="technical-indicators">
          <h2 className="text-2xl font-bold tracking-tight">技术指标分析</h2>
          <p className="text-muted-foreground">
            技术指标是基于价格、交易量等市场数据计算出的数学公式，用于分析市场趋势、动量和反转信号。
          </p>
          
          <Tabs defaultValue="trend" className="mt-6">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="trend">趋势指标</TabsTrigger>
              <TabsTrigger value="momentum">动量指标</TabsTrigger>
              <TabsTrigger value="volatility">波动指标</TabsTrigger>
            </TabsList>
            
            <TabsContent value="trend" className="space-y-4" id="trend">
              <h3 className="text-lg font-semibold">趋势指标</h3>
              <p>趋势指标用于确定市场的方向和强度，帮助投资者识别上升、下降或相对平稳的市场环境。</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>移动平均线 (MA)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">一段时间内价格的平均值，常用于平滑价格波动并确定趋势方向。</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>短期移动平均线</strong>: 5日、20日</li>
                      <li><strong>中期移动平均线</strong>: 50日</li>
                      <li><strong>长期移动平均线</strong>: 100日、200日</li>
                      <li><strong>交叉信号</strong>: 短期平均线上穿长期平均线为看涨信号</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>MACD</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">移动平均收敛散度，结合了趋势和动量的特性。</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>MACD线</strong>: 12日EMA减26日EMA</li>
                      <li><strong>信号线</strong>: MACD线的9日EMA</li>
                      <li><strong>柱状图</strong>: MACD线与信号线的差值</li>
                      <li><strong>重要信号</strong>: MACD线与信号线的交叉、零线穿越</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="momentum" className="space-y-4" id="momentum">
              <h3 className="text-lg font-semibold">动量指标</h3>
              <p>动量指标用于衡量价格变动的速度和强度，帮助投资者识别趋势的动能和可能的反转点。</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>相对强弱指数 (RSI)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">测量价格变动速度和幅度的指标，范围为0-100。</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>超买区域</strong>: RSI 大于 70，可能出现回调</li>
                      <li><strong>超卖区域</strong>: RSI 小于 30，可能出现反弹</li>
                      <li><strong>背离</strong>: RSI与价格走势不一致，可能预示趋势反转</li>
                      <li><strong>常用周期</strong>: 14天RSI最为常用</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>随机指标 (Stochastic)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">比较当前收盘价与特定时期内的最高价和最低价的关系。</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>%K线</strong>: 主要随机线</li>
                      <li><strong>%D线</strong>: %K线的移动平均</li>
                      <li><strong>超买超卖</strong>: 高于80为超买，低于20为超卖</li>
                      <li><strong>交叉信号</strong>: %K线与%D线的交叉提供买卖信号</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="volatility" className="space-y-4" id="volatility">
              <h3 className="text-lg font-semibold">波动指标</h3>
              <p>波动指标用于衡量市场的波动性和价格变动的幅度，帮助投资者识别潜在的突破或趋势变化。</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>布林带 (Bollinger Bands)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">由中轨（移动平均线）和上下轨（标准差的倍数）组成。</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>带宽收缩</strong>: 预示可能的大幅波动</li>
                      <li><strong>价格触及上下轨</strong>: 可能出现反转</li>
                      <li><strong>突破上下轨</strong>: 表明强势继续</li>
                      <li><strong>标准设置</strong>: 20日移动平均线加2倍标准差</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>ATR (真实波动幅度)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">衡量市场波动性的指标，不包含方向性。</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>高ATR</strong>: 表示市场波动大，可能处于转折点</li>
                      <li><strong>低ATR</strong>: 表示市场波动小，可能即将爆发</li>
                      <li><strong>应用</strong>: 设置止损位置、确定头寿命、识别波动模式</li>
                      <li><strong>常用周期</strong>: 14天ATR最为常用</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* 市场情绪指标 */}
        <section className="space-y-4" id="sentiment">
          <h2 className="text-2xl font-bold tracking-tight">市场情绪指标</h2>
          <p className="text-muted-foreground">
            市场情绪指标用于衡量投资者的态度和心理状态，帮助识别市场的过度乐观或悲观状态。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>恐慌与贪婪指数</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">恐慌与贪婪指数反映了市场参与者的情绪状态，常用于逆向指标。</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>VIX指数</strong>: 反映市场对未来波动性的预期，高值表示恐慌</li>
                  <li><strong>PUT/CALL比率</strong>: 看跌/看涨期权交易量比率，高值表示恐慌</li>
                  <li><strong>资金流向</strong>: 资金流入流出情况反映投资者情绪</li>
                  <li><strong>逆向指标原理</strong>: 当指标达到极端时，市场可能出现反转</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>技术面与市场广度</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">技术面指标和市场广度指标用于衡量市场参与度和趋势强度。</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>新高/新低比率</strong>: 创新高价与创新低价股票数量比率</li>
                  <li><strong>上涨/下跌线</strong>: 上涨股票与下跌股票数量的差值</li>
                  <li><strong>市场广度</strong>: 参与市场趋势的股票比例</li>
                  <li><strong>技术面趋同</strong>: 当大多数股票跟随大目标趋势时，该趋势更强势</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>市场情绪分析案例</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <h4 className="font-medium mb-2">极端恐慌时的投资机会</h4>
                  <p className="mb-2">当VIX指数升至异常高位，市场处于极度恐慌状态时，往往是买入的良机。</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>历史数据显示，VIX超过35时，市场往往在未来几个月内出现反弹</li>
                    <li>结合其他指标，如PUT/CALL比率过高、机构持币率低等，可增强信号可靠性</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-md">
                  <h4 className="font-medium mb-2">过度乐观时的风险信号</h4>
                  <p className="mb-2">当市场处于过度乐观状态，多个情绪指标处于极端区域时，可能预示市场即将调整。</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>VIX指数处于异常低位（低于15）时，表明市场过于自满</li>
                    <li>当技术面过度一致看涨，且新高/新低比率持续超高时，应谨慎对待</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
      
      {/* 侧边栏 */}
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
                <a href="#basics" className="text-primary hover:underline block">指数基础知识</a>
                <div className="pl-4 mt-1 space-y-1 text-sm">
                  <a href="#definition" className="text-muted-foreground hover:text-primary block">指数定义与作用</a>
                  <a href="#types" className="text-muted-foreground hover:text-primary block">指数类型</a>
                  <a href="#major" className="text-muted-foreground hover:text-primary block">全球主要指数</a>
                </div>
              </div>
              <div>
                <a href="#market-reading" className="text-primary hover:underline block">行情解读</a>
                <div className="pl-4 mt-1 space-y-1 text-sm">
                  <a href="#market-reading" className="text-muted-foreground hover:text-primary block">K线图基础</a>
                  <a href="#market-reading" className="text-muted-foreground hover:text-primary block">成交量分析</a>
                </div>
              </div>
              <div>
                <a href="#technical-indicators" className="text-primary hover:underline block">技术指标分析</a>
                <div className="pl-4 mt-1 space-y-1 text-sm">
                  <a href="#trend" className="text-muted-foreground hover:text-primary block">趋势指标</a>
                  <a href="#momentum" className="text-muted-foreground hover:text-primary block">动量指标</a>
                  <a href="#volatility" className="text-muted-foreground hover:text-primary block">波动指标</a>
                </div>
              </div>
              <div>
                <a href="#sentiment" className="text-primary hover:underline block">市场情绪指标</a>
                <div className="pl-4 mt-1 space-y-1 text-sm">
                  <a href="#sentiment" className="text-muted-foreground hover:text-primary block">恐慌与贪婪指数</a>
                  <a href="#sentiment" className="text-muted-foreground hover:text-primary block">技术面与市场广度</a>
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
                <AccordionTrigger>如何利用指数进行投资？</AccordionTrigger>
                <AccordionContent>
                  <p>投资者可以通过多种方式利用指数进行投资：</p>
                  <ol className="list-decimal pl-5 space-y-1 mt-2">
                    <li>购买跟踪特定指数的ETF或指数基金</li>
                    <li>利用指数期货或期权进行投机或对冲</li>
                    <li>通过指数变化判断市场趋势，辅助个股选择</li>
                    <li>构建多指数组合，实现资产多元化配置</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>技术分析与基本面分析的关系是什么？</AccordionTrigger>
                <AccordionContent>
                  <p>技术分析与基本面分析是两种互补的投资分析方法：</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><strong>技术分析</strong>关注价格和交易量的历史数据，寻找价格走势的规律</li>
                    <li><strong>基本面分析</strong>关注公司财务状况、行业前景和宏观经济因素</li>
                    <li>两者结合使用往往能提供更全面的投资决策依据</li>
                    <li>短期交易通常更依赖技术分析，长期投资则更看重基本面分析</li>
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
              <a href="/securities" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                <div className="ml-3">
                  <h3 className="text-sm font-medium">证券</h3>
                  <p className="text-xs text-muted-foreground">了解不同证券类型的特点与风险收益特征</p>
                </div>
              </a>
              <a href="/etf" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                <div className="ml-3">
                  <h3 className="text-sm font-medium">ETF</h3>
                  <p className="text-xs text-muted-foreground">探索如何通过ETF投资市场指数</p>
                </div>
              </a>
              <a href="/funds" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                <div className="ml-3">
                  <h3 className="text-sm font-medium">基金</h3>
                  <p className="text-xs text-muted-foreground">了解指数基金的特点与投资策略</p>
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
