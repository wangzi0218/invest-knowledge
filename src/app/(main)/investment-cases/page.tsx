"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StickySidebar } from "@/components/ui-custom/knowledge-page";
import { cn } from "@/lib/utils";

export default function InvestmentCasesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>投资案例与教训</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">投资案例与教训</h1>
        <p className="text-xl text-muted-foreground">
          通过著名投资者的成功案例、历史泡沫与崩盘分析，学习不同投资策略的表现与教训
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">        
        <div className="lg:col-span-2 space-y-8">
        
        {/* 成功投资者案例分析 */}
        <section className="space-y-4" id="successful-investors">
          <h2 className="text-2xl font-bold tracking-tight">成功投资者案例分析</h2>
          <p className="text-muted-foreground">
            研究成功投资者的投资理念、策略和方法，可以帮助我们理解长期成功投资的关键因素。
            以下是几位著名投资者的案例分析，探讨他们的投资哲学和实践方法。
          </p>

          <Tabs defaultValue="buffett" className="mt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="buffett">巴菲特</TabsTrigger>
              <TabsTrigger value="lynch">彼得·林奇</TabsTrigger>
              <TabsTrigger value="dalio">雷·达利欧</TabsTrigger>
            </TabsList>
            
            <TabsContent value="buffett" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">沃伦·巴菲特的价值投资</h3>
              <p className="mb-4">
                沃伦·巴菲特是全球最成功的投资者之一，以价值投资理念著称。他通过伯克希尔·哈撒韦公司进行投资，
                从1965年至今，其投资组合年化回报率约为20%，远超标普500指数。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">投资哲学与原则：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>专注于企业内在价值，寻找市场价格低于内在价值的公司</li>
                    <li>投资于自己理解的行业和企业（能力圈理念）</li>
                    <li>长期持有优质企业，而非频繁交易</li>
                    <li>重视企业管理层的诚信和能力</li>
                    <li>保持安全边际，降低永久性资本损失风险</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">代表性投资案例：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>可口可乐</strong>：1988年开始大量买入，投资约12亿美元，目前价值超过250亿美元</li>
                    <li><strong>美国运通</strong>：1964年首次投资，在1963年"沙拉油丑闻"后的低迷期买入</li>
                    <li><strong>苹果公司</strong>：2016年开始投资，成为伯克希尔最大持仓之一</li>
                    <li><strong>喜诗糖果</strong>：1972年全资收购，展示了巴菲特对消费品牌的偏好</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">关键教训：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>市场短期是投票机，长期是称重机</li>
                    <li>投资优质企业比追求便宜价格更重要</li>
                    <li>复利是投资中最强大的力量</li>
                    <li>在别人恐惧时贪婪，在别人贪婪时恐惧</li>
                    <li>投资最大的风险是不了解自己在做什么</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="lynch" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">彼得·林奇的成长投资</h3>
              <p className="mb-4">
                彼得·林奇在1977年至1990年管理富达麦哲伦基金期间，年化回报率达到29.2%，是基金业最出色的业绩之一。
                他以"投资于你了解的企业"和寻找高增长潜力公司的策略闻名。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">投资哲学与原则：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>投资于你了解的企业和行业</li>
                    <li>寻找"十倍股"潜力的成长型公司</li>
                    <li>关注日常生活中的投资机会</li>
                    <li>分散投资，持有大量不同类型的股票</li>
                    <li>重视基本面研究，亲自调研企业</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">代表性投资案例：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>邓肯甜甜圈</strong>：林奇在品尝其咖啡后进行调研并投资</li>
                    <li><strong>沃尔玛</strong>：在其扩张早期阶段识别并投资</li>
                    <li><strong>克里斯蒂制药</strong>：一家小型生物制药公司，投资后股价上涨超过10倍</li>
                    <li><strong>La Quinta汽车旅馆</strong>：通过实地考察发现其扩张潜力</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">关键教训：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>普通投资者在自己熟悉的领域可能比华尔街专家更有优势</li>
                    <li>投资研究应该从消费者视角出发</li>
                    <li>股票价格最终会反映企业的增长和盈利能力</li>
                    <li>分散投资可以降低风险，不必每次都押对</li>
                    <li>持续学习和调研是投资成功的关键</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="dalio" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">雷·达利欧的全天候策略</h3>
              <p className="mb-4">
                雷·达利欧是全球最大对冲基金桥水基金的创始人，以宏观投资和风险平价策略著称。
                他开创的"全天候投资组合"旨在在任何经济环境下都能获得稳定回报。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">投资哲学与原则：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>理解经济"机器"如何运作，识别经济周期</li>
                    <li>分散投资于不同经济环境下表现良好的资产</li>
                    <li>平衡风险而非平衡资金配置</li>
                    <li>建立系统化的投资决策流程</li>
                    <li>透明的思维和激进的真相追求</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">全天候投资组合策略：</h4>
                  <p>达利欧的全天候投资组合基于四种经济环境设计：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>经济增长、通胀上升</strong>：商品、通胀保值债券</li>
                    <li><strong>经济增长、通胀下降</strong>：股票、公司债</li>
                    <li><strong>经济衰退、通胀上升</strong>：黄金、商品</li>
                    <li><strong>经济衰退、通胀下降</strong>：长期国债</li>
                  </ul>
                  <p className="mt-2">资产配置基于风险贡献而非金额，通常包括：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>30% 股票</li>
                    <li>40% 长期和中期国债</li>
                    <li>15% 中期债券</li>
                    <li>7.5% 黄金</li>
                    <li>7.5% 商品</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">关键教训：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>没有人能持续预测市场，应准备应对各种环境</li>
                    <li>分散投资应基于经济环境而非简单的资产类别</li>
                    <li>风险平价比资金平价更重要</li>
                    <li>系统化决策优于情绪化决策</li>
                    <li>从失败中学习是成功的关键</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* 历史泡沫与崩盘分析 */}
        <section className="space-y-4 mt-8" id="bubbles-crashes">
          <h2 className="text-2xl font-bold tracking-tight">历史泡沫与崩盘分析</h2>
          <p className="text-muted-foreground">
            金融历史充满了泡沫形成和崩盘的案例，研究这些事件可以帮助投资者识别市场非理性行为的模式，
            并从历史教训中学习如何在类似情况下保护自己的投资组合。
          </p>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>著名金融泡沫与崩盘</CardTitle>
              <CardDescription>历史上的主要金融泡沫、其形成原因和最终结果</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>事件</TableHead>
                    <TableHead>时间</TableHead>
                    <TableHead>泡沫形成因素</TableHead>
                    <TableHead>崩盘结果</TableHead>
                    <TableHead>关键教训</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">荷兰郁金香泡沫</TableCell>
                    <TableCell>1636-1637</TableCell>
                    <TableCell>稀缺性、投机心理、信贷扩张</TableCell>
                    <TableCell>郁金香价格暴跌95%以上</TableCell>
                    <TableCell>投机品价格可能与内在价值完全脱节</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">南海泡沫</TableCell>
                    <TableCell>1720</TableCell>
                    <TableCell>政府支持、投资者狂热、信息不透明</TableCell>
                    <TableCell>股价崩盘，投资者巨额亏损</TableCell>
                    <TableCell>政府背书不等于投资安全</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">1929年华尔街崩盘</TableCell>
                    <TableCell>1929</TableCell>
                    <TableCell>杠杆投机、信贷扩张、过度乐观</TableCell>
                    <TableCell>道指下跌89%，引发大萧条</TableCell>
                    <TableCell>过度杠杆可能导致灾难性后果</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">日本资产泡沫</TableCell>
                    <TableCell>1986-1991</TableCell>
                    <TableCell>宽松货币政策、房地产投机、企业过度投资</TableCell>
                    <TableCell>日经指数跌去60%，房价暴跌</TableCell>
                    <TableCell>资产泡沫破裂后可能导致长期经济停滞</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">互联网泡沫</TableCell>
                    <TableCell>1995-2000</TableCell>
                    <TableCell>新技术狂热、风险投资涌入、忽视盈利能力</TableCell>
                    <TableCell>纳斯达克指数跌去78%</TableCell>
                    <TableCell>技术革新不等于商业成功</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2008年金融危机</TableCell>
                    <TableCell>2007-2009</TableCell>
                    <TableCell>次贷扩张、金融创新、监管不足</TableCell>
                    <TableCell>全球股市暴跌，多家金融机构倒闭</TableCell>
                    <TableCell>系统性风险可能导致全球性危机</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="mt-6 space-y-4">
            <h3 className="text-xl font-semibold">泡沫形成的共同特征</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>市场因素</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>信贷扩张</strong>：容易获得的信贷和低利率环境</li>
                    <li><strong>新范式叙事</strong>："这次不一样"的普遍信念</li>
                    <li><strong>投机行为增加</strong>：投资者购买资产的目的是转售获利，而非基于内在价值</li>
                    <li><strong>价格与基本面脱节</strong>：资产价格远超其产生现金流的能力</li>
                    <li><strong>交易量激增</strong>：市场参与度和交易频率显著提高</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>心理因素</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>从众心理</strong>：投资者跟随他人行为，害怕错过机会</li>
                    <li><strong>确认偏误</strong>：只关注支持自己观点的信息</li>
                    <li><strong>锚定效应</strong>：过度关注近期价格走势</li>
                    <li><strong>过度自信</strong>：低估风险，高估获利可能性</li>
                    <li><strong>有限注意力</strong>：忽视警告信号和负面信息</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 不同投资策略的表现对比 */}
        <section className="space-y-4 mt-8" id="investment-strategies">
          <h2 className="text-2xl font-bold tracking-tight">不同投资策略的表现对比</h2>
          <p className="text-muted-foreground">
            不同的投资策略在不同的市场环境中表现各异。了解各类策略的特点、优势和劣势，
            可以帮助投资者根据自身情况和市场环境选择适合的投资方法。
          </p>

          <div className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>主要投资策略比较</CardTitle>
                <CardDescription>不同投资策略的关键特点、优势和劣势</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>投资策略</TableHead>
                      <TableHead>核心理念</TableHead>
                      <TableHead>代表人物</TableHead>
                      <TableHead>适合环境</TableHead>
                      <TableHead>优势</TableHead>
                      <TableHead>劣势</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">价值投资</TableCell>
                      <TableCell>以低于内在价值的价格购买优质公司</TableCell>
                      <TableCell>本杰明·格雷厄姆、沃伦·巴菲特</TableCell>
                      <TableCell>理性市场，经济复苏期</TableCell>
                      <TableCell>安全边际大，长期回报稳定</TableCell>
                      <TableCell>可能长期表现不佳，需要耐心</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">成长投资</TableCell>
                      <TableCell>投资于高增长潜力的公司</TableCell>
                      <TableCell>彼得·林奇、菲利普·费舍</TableCell>
                      <TableCell>经济扩张期，技术革新时期</TableCell>
                      <TableCell>有机会获得超高回报</TableCell>
                      <TableCell>波动性大，估值通常较高</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">指数投资</TableCell>
                      <TableCell>跟踪市场指数，被动投资</TableCell>
                      <TableCell>约翰·博格尔、巴顿·马洛克</TableCell>
                      <TableCell>任何市场环境，特别是效率市场</TableCell>
                      <TableCell>低成本，高分散度，操作简单</TableCell>
                      <TableCell>无法超越市场平均收益</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">技术分析</TableCell>
                      <TableCell>基于价格图表和交易量预测走势</TableCell>
                      <TableCell>杰西·利弗莫尔、威廉姆·奥尼尔</TableCell>
                      <TableCell>高波动性市场，短期交易</TableCell>
                      <TableCell>可以捕捉短期趋势和动量</TableCell>
                      <TableCell>需要频繁交易，成本高</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">宏观投资</TableCell>
                      <TableCell>基于经济周期和全球趋势配置资产</TableCell>
                      <TableCell>雷·达利欧、乔治·索罗斯</TableCell>
                      <TableCell>经济转换期，政策变化时期</TableCell>
                      <TableCell>可以适应不同经济环境</TableCell>
                      <TableCell>预测宏观趋势困难</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>不同策略在各类市场环境中的表现</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>牛市环境</strong>：成长型策略通常表现最佳，技术分析中的追踪趋势策略也有较好表现</li>
                    <li><strong>熊市环境</strong>：价值投资策略通常表现较好，防御型行业和高股息股票更受青睐</li>
                    <li><strong>波动市场</strong>：全天候策略和平衡配置策略表现相对稳定</li>
                    <li><strong>通货膨胀环境</strong>：实物资产、通货膨胀保值债券和股息股票表现较好</li>
                    <li><strong>经济衰退期</strong>：防御型消费品行业、公用事业和高质量债券表现较好</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>历史收益率对比</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">不同投资策略的长期年化收益率（1970-2020）：</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>价值型股票</strong>：约13.5%，但在不同时期波动较大</li>
                    <li><strong>成长型股票</strong>：约10.5%，在技术革新期表现突出</li>
                    <li><strong>指数型投资</strong>（标普500）：约10.2%</li>
                    <li><strong>小市值股票</strong>：约12.0%，但波动性更大</li>
                    <li><strong>国际股票</strong>：约8.5%，提供分散化收益</li>
                    <li><strong>债券</strong>（长期国债）：约5.5%，波动性显著低于股票</li>
                    <li><strong>黄金</strong>：约7.0%，在经济危机期表现出色</li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">注：实际收益受多种因素影响，包括特定时期、市场环境、费用和税收等。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 投资失败的关键教训 */}
        <section className="space-y-4 mt-8" id="lessons">
          <h2 className="text-2xl font-bold tracking-tight">投资失败的关键教训</h2>
          <p className="text-muted-foreground">
            投资失败往往能提供比成功更宝贵的教训。分析著名投资者和普通投资者的失败案例，
            可以帮助我们避免重踩相同的错误，提高投资决策质量。
          </p>

          <div className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>著名投资者的失败案例</CardTitle>
                <CardDescription>即使最成功的投资者也曾经犯下重大错误</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">沃伦·巴菲特的德克斯特投资（1993）：</h4>
                    <p className="text-sm mb-2">
                      巴菲特在维持德克斯特纸业公司投资上损失了4.3亿美元，他认为这是他最大的投资错误之一。
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>错误原因</strong>：过度关注低价，忽视了纸业行业的结构性问题</li>
                      <li><strong>关键教训</strong>：低价不等于价值；要评估行业长期前景，而非仅关注当前价格</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">比尔·阿克曼的微软投资（1997）：</h4>
                    <p className="text-sm mb-2">
                      佛教徒阿克曼在互联网泡沫期间大量投资微软，并在市场低迹时消减了所有持股。
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>错误原因</strong>：过度关注短期市场波动，背离了长期投资理念</li>
                      <li><strong>关键教训</strong>：坚持长期投资理念；不要被短期市场波动影响投资决策</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">约翰·保尔森的长期资本管理基金（1998）：</h4>
                    <p className="text-sm mb-2">
                      该对冲基金在俄罗斯金融危机中损失了近倀4十亿美元，最终导致基金清算。
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>错误原因</strong>：过度杠杆、过度集中投资、低估了系统性风险</li>
                      <li><strong>关键教训</strong>：控制杠杆水平；考虑极端情况下的风险；适当分散投资</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>常见投资错误模式</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>追高杀低</strong>：在市场高点买入，低点恐慌卖出</li>
                    <li><strong>过度交易</strong>：频繁买卖导致高额交易成本和税收</li>
                    <li><strong>从众投资</strong>：跟风追投热门行业或股票</li>
                    <li><strong>过度集中</strong>：将资金过度集中在单一资产或行业</li>
                    <li><strong>忽视风险管理</strong>：没有设置止损或风险控制措施</li>
                    <li><strong>情绪化决策</strong>：基于恐惧或贪婪做出决策</li>
                    <li><strong>确认偏误</strong>：只关注支持自己观点的信息</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>防范投资失败的实用策略</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>制定投资计划</strong>：在情绪决策前制定清晰的投资规则</li>
                    <li><strong>分散投资</strong>：跨资产类别、行业和地区分散投资</li>
                    <li><strong>设置止损点</strong>：预先确定可接受的最大亏损水平</li>
                    <li><strong>逐步建仓</strong>：使用定投策略，而非一次性大额投入</li>
                    <li><strong>定期再平衡</strong>：维持目标资产配置，防止风险集中</li>
                    <li><strong>保持记录</strong>：记录每个投资决策及其理由</li>
                    <li><strong>定期回顾</strong>：审视投资表现和决策过程</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>从失败中成长的案例</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">彼得·林奇的错误与恢复：</h4>
                    <p className="text-sm">
                      林奇曾在管理麦哈伦基金期间认为欧洲电话公司将成为下一个大机会，结果损失惊人。但他从这个错误中学会了更仔细地研究公司的管理层和竞争格局，这些经验帮助他后来取得了更大的成功。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">雷·达利欧的“痛苦机器”：</h4>
                    <p className="text-sm">
                      达利欧在桥水基金经历了重大失败后，开发了他称之为“痛苦机器”的系统，详细记录和分析每一个错误。这个系统最终帮助他开发了“原则”，一套指导生活和投资的核心原则，使他成为全球最成功的对冲基金经理之一。
                    </p>
                  </div>
                </div>
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
                  <a href="#successful-investors" className="text-primary hover:underline block">成功投资者案例分析</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#" className="text-muted-foreground hover:text-primary block">巴菲特的价值投资</a>
                    <a href="#" className="text-muted-foreground hover:text-primary block">彼得·林奇的成长投资</a>
                    <a href="#" className="text-muted-foreground hover:text-primary block">雷·达利欧的全天候策略</a>
                  </div>
                </div>
                <div>
                  <a href="#bubbles-crashes" className="text-primary hover:underline block">历史泡沫与崩盘分析</a>
                </div>
                <div>
                  <a href="#investment-strategies" className="text-primary hover:underline block">不同投资策略的表现对比</a>
                </div>
                <div>
                  <a href="#lessons" className="text-primary hover:underline block">投资失败的关键教训</a>
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
                <AccordionItem value="q1">
                  <AccordionTrigger>如何从投资失败中恢复并吸取教训？</AccordionTrigger>
                  <AccordionContent>
                    <p>从投资失败中恢复需要几个步骤：首先，客观分析失败原因，区分运气因素和决策错误；其次，记录教训并修改投资策略，避免重复同样的错误；第三，控制情绪反应，避免因恐惧而完全退出市场；最后，采取渐进式恢复，从小额投资开始重建信心。记住，几乎所有成功的投资者都经历过重大失败，关键是从中学习并变得更强。</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>如何识别市场泡沫并保护自己的投资？</AccordionTrigger>
                  <AccordionContent>
                    <p>识别市场泡沫的信号包括：资产价格与基本面严重脱节（如高P/E比率）；投机行为普遍；"这次不一样"的叙事流行；媒体过度关注；普通人热衷讨论投资。保护投资的策略包括：保持资产多元化；设定止损点；减少杠杆使用；增加现金比例；关注估值而非价格走势；警惕自己的贪婪情绪。记住，提前退出泡沫市场比试图抓住最后一波上涨更明智。</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3">
                  <AccordionTrigger>成功投资者的共同特质是什么？</AccordionTrigger>
                  <AccordionContent>
                    <p>成功投资者通常具有以下共同特质：独立思考能力，不随大众情绪波动；长期思维，专注于复利增长；严格的风险管理意识；持续学习和适应能力；情绪控制能力，在市场恐慌时保持冷静；明确的投资哲学和框架；对自身能力圈的清晰认识；耐心等待合适的投资机会；从错误中学习的谦逊态度。这些特质比特定的投资策略更重要，因为市场环境总是在变化，但这些基本原则适用于各种市场条件。</p>
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
                <a href="/investment-psychology" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">投资心理学</h3>
                    <p className="text-xs text-muted-foreground">了解投资心理偏误和行为金融学原理</p>
                  </div>
                </a>
                <a href="/financial-planning" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">投资与财务规划</h3>
                    <p className="text-xs text-muted-foreground">将投资案例的教训应用于个人财务规划</p>
                  </div>
                </a>
                <a href="/global-perspective" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">全球投资视角</h3>
                    <p className="text-xs text-muted-foreground">探索不同国家和地区的投资案例与经验</p>
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
