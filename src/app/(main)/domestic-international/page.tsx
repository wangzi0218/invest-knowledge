import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "国内外金融市场 - 投资知识库",
  description: "了解中国与国际金融市场的结构特点、差异及投资机会，把握全球投资视野",
};

export default function DomesticMarketPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      {/* 面包屑导航 */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/domestic-international">国内外金融市场</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      {/* 页面标题 */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">国内外金融市场</h1>
        <p className="text-muted-foreground mt-2">
          了解中国与国际金融市场的结构特点、差异及投资机会
        </p>
      </div>
      
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
        {/* 左侧主要内容区域 */}
        <div className="md:col-span-2 space-y-8">

        {/* 市场概述 */}
        <section id="market-overview" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">市场概述</h2>
          <p className="text-muted-foreground">
            全球金融市场是一个相互关联的复杂系统，各国市场既有共性又有差异。中国金融市场经过数十年的发展，已成为全球第二大金融市场，
            而美国、欧洲等成熟市场则在全球金融体系中占据主导地位。了解不同市场的特点和差异，有助于投资者制定更全面的投资策略。
          </p>
          
          <Tabs defaultValue="china" className="mt-6" id="market-comparison">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="china" id="china-market">中国市场</TabsTrigger>
              <TabsTrigger value="international" id="international-market">国际市场</TabsTrigger>
            </TabsList>
            <TabsContent value="china" className="p-4 border rounded-md mt-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">中国金融市场发展历程</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>发展阶段</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>初创期(1990-2000)</strong>：上海、深圳证券交易所成立，建立基本市场框架</li>
                        <li><strong>规范期(2001-2010)</strong>：加入WTO后市场开放加速，监管体系逐步完善</li>
                        <li><strong>发展期(2011-2020)</strong>：多层次资本市场体系形成，金融创新加速</li>
                        <li><strong>新阶段(2021至今)</strong>：高质量发展，注册制改革全面推进，市场开放程度进一步提高</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>市场规模</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>股票市场</strong>：沪深两市总市值超过10万亿美元，位居全球第二</li>
                        <li><strong>债券市场</strong>：债券市场余额超过15万亿美元，全球第二大债券市场</li>
                        <li><strong>银行业</strong>：中国银行业总资产超过50万亿美元，多家银行跻身全球系统重要性银行</li>
                        <li><strong>保险市场</strong>：保费收入位居全球前列，保险深度和密度持续提升</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <h3 className="text-xl font-semibold mt-4">中国市场主要特点</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>政府引导</strong>：政府在市场发展中扮演重要角色，宏观调控力度较大</li>
                  <li><strong>散户为主</strong>：个人投资者占比高，机构投资者力量相对较弱</li>
                  <li><strong>银行主导</strong>：银行在金融体系中占据主导地位，直接融资比例相对较低</li>
                  <li><strong>快速发展</strong>：市场规模和深度快速增长，金融创新活跃</li>
                  <li><strong>开放程度提升</strong>：近年来市场开放步伐加快，外资参与度不断提高</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="international" className="p-4 border rounded-md mt-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">国际金融市场概览</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>主要市场</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>美国市场</strong>：全球最大、最成熟的金融市场，纽约是世界金融中心</li>
                        <li><strong>欧洲市场</strong>：伦敦、法兰克福、巴黎等金融中心，欧元区统一货币</li>
                        <li><strong>日本市场</strong>：亚洲发达金融市场，东京是重要的金融中心</li>
                        <li><strong>新兴市场</strong>：印度、巴西、俄罗斯等新兴经济体市场，增长潜力大</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>市场规模</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>股票市场</strong>：美国股市总市值超过40万亿美元，占全球市值约40%</li>
                        <li><strong>债券市场</strong>：全球债券市场规模超过100万亿美元，美国占比最大</li>
                        <li><strong>外汇市场</strong>：日均交易量超过6万亿美元，伦敦是最大外汇交易中心</li>
                        <li><strong>衍生品市场</strong>：名义价值数百万亿美元，芝加哥是重要的衍生品交易中心</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <h3 className="text-xl font-semibold mt-4">国际市场主要特点</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>高度市场化</strong>：市场机制成熟，政府干预相对较少</li>
                  <li><strong>机构主导</strong>：机构投资者是市场主力，专业投资理念普及</li>
                  <li><strong>多元化融资</strong>：直接融资比例高，融资渠道多样</li>
                  <li><strong>高度国际化</strong>：资本自由流动，跨境投资便利</li>
                  <li><strong>创新活跃</strong>：金融产品和服务创新不断，金融科技发展迅速</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* 主要市场板块 */}
        <section id="market-segments" className="space-y-4 mt-8">
          <h2 className="text-2xl font-bold tracking-tight">主要市场板块</h2>
          <p className="text-muted-foreground">
            中国金融市场由多个板块组成，每个板块有其独特的特点、参与者和交易规则。
          </p>

          <Tabs defaultValue="stock" className="mt-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="stock">股票市场</TabsTrigger>
              <TabsTrigger value="bond">债券市场</TabsTrigger>
              <TabsTrigger value="money">货币市场</TabsTrigger>
              <TabsTrigger value="forex">外汇市场</TabsTrigger>
              <TabsTrigger value="futures">期货市场</TabsTrigger>
            </TabsList>
            <TabsContent value="stock" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">股票市场</h3>
              <div className="space-y-4">
                <p>
                  股票市场是股票发行和交易的场所，是资本市场的重要组成部分。中国与国际股票市场在结构、交易机制和投资者结构等方面存在显著差异。
                </p>
                
                <Tabs defaultValue="china-stock" className="mt-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="china-stock">中国股市</TabsTrigger>
                    <TabsTrigger value="intl-stock">国际股市</TabsTrigger>
                  </TabsList>
                  <TabsContent value="china-stock" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">中国股票市场结构</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">交易所市场</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>上海证券交易所</strong>：主板、科创板</li>
                              <li><strong>深圳证券交易所</strong>：主板、创业板</li>
                              <li><strong>北京证券交易所</strong>：服务创新型中小企业</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">场外市场</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>新三板</strong>：全国中小企业股份转让系统</li>
                              <li><strong>区域性股权市场</strong>：各地方性股权交易场所</li>
                              <li><strong>私募市场</strong>：非公开发行股票的市场</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h4 className="text-lg font-medium mt-4">主要特点</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>投资者结构</strong>：个人投资者占比超过50%，散户交易活跃</li>
                        <li><strong>交易机制</strong>：T+1交易制度，当天买入的股票需次日才能卖出</li>
                        <li><strong>涨跌幅限制</strong>：一般股票每日涨跌幅限制在10%，科创板、创业板为20%</li>
                        <li><strong>上市制度</strong>：实行注册制，市场化程度提高</li>
                        <li><strong>监管体系</strong>：以国家金融监督管理总局为主要监管机构</li>
                      </ul>
                      
                      <h4 className="text-lg font-medium mt-4">投资渠道</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>直接投资</strong>：开立证券账户直接交易股票</li>
                        <li><strong>基金投资</strong>：通过股票型基金、指数基金等间接投资</li>
                        <li><strong>港股通</strong>：内地投资者可通过港股通投资香港上市公司</li>
                        <li><strong>合格境外投资者计划(QFII/RQFII)</strong>：境外机构投资者参与A股市场的主要渠道</li>
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="intl-stock" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">国际股票市场结构</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">美国市场</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>纽约证券交易所(NYSE)</strong>：全球最大的证券交易所</li>
                              <li><strong>纽约证券交易所美国证券交易所(NYSE American)</strong>：主要面向中小型公司</li>
                              <li><strong>纽约证券交易所全球市场(NYSE Arca)</strong>：主要交易ETF等产品</li>
                              <li><strong>纳斯达克(Nasdaq)</strong>：全球最大的电子化证券交易所，科技股为主</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">其他主要市场</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>伦敦证券交易所(LSE)</strong>：欧洲最大的证券交易所</li>
                              <li><strong>东京证券交易所(TSE)</strong>：亚洲最大的证券交易所之一</li>
                              <li><strong>法兰克福证券交易所(FWB)</strong>：欧洲重要的证券交易所</li>
                              <li><strong>香港联合交易所(HKEX)</strong>：亚洲重要的国际金融中心</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h4 className="text-lg font-medium mt-4">主要特点</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>投资者结构</strong>：机构投资者占主导地位，美国机构持股比例超过70%</li>
                        <li><strong>交易机制</strong>：多数市场采用T+0交易，当天买入可当天卖出</li>
                        <li><strong>涨跌幅限制</strong>：多数市场无涨跌幅限制，部分市场有熔断机制</li>
                        <li><strong>上市制度</strong>：以注册制为主，市场化程度高</li>
                        <li><strong>法律体系</strong>：完善的证券法律体系，投资者保护机制健全</li>
                      </ul>
                      
                      <h4 className="text-lg font-medium mt-4">投资渠道</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>直接投资</strong>：通过境外证券账户直接交易</li>
                        <li><strong>境内券商海外交易</strong>：通过境内券商的海外交易服务</li>
                        <li><strong>ADR/GDR</strong>：美国存托凭证/全球存托凭证，投资境外公司</li>
                        <li><strong>ETF/基金</strong>：通过投资跟踪海外市场的ETF或基金</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <h4 className="text-lg font-medium mt-6">中国与国际股市的主要差异</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left font-medium">对比项目</th>
                        <th className="px-4 py-2 text-left font-medium">中国股市</th>
                        <th className="px-4 py-2 text-left font-medium">国际股市(以美国为主)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2">投资者结构</td>
                        <td className="px-4 py-2">散户为主</td>
                        <td className="px-4 py-2">机构为主</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">交易制度</td>
                        <td className="px-4 py-2">T+1交易</td>
                        <td className="px-4 py-2">T+0交易</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">涨跌幅限制</td>
                        <td className="px-4 py-2">有限制(10%/20%)</td>
                        <td className="px-4 py-2">无限制，有熔断机制</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">做空机制</td>
                        <td className="px-4 py-2">限制较多，仅部分股票可融券</td>
                        <td className="px-4 py-2">做空机制完善</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">市场波动性</td>
                        <td className="px-4 py-2">波动较大</td>
                        <td className="px-4 py-2">相对稳定</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="bond" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">债券市场</h3>
              <div className="space-y-4">
                <p>
                  债券市场是发行、交易债券的场所，是固定收益市场的重要组成部分。中国与国际债券市场在发展阶段、市场结构和投资者结构等方面存在差异。
                </p>
                
                <Tabs defaultValue="china-bond" className="mt-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="china-bond">中国债市</TabsTrigger>
                    <TabsTrigger value="intl-bond">国际债市</TabsTrigger>
                  </TabsList>
                  <TabsContent value="china-bond" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">中国债券市场结构</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">交易市场分类</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>银行间债券市场</strong>：中国最大的债券市场，交易量占总量的约90%</li>
                              <li><strong>交易所债券市场</strong>：包括上海和深圳证券交易所的债券交易</li>
                              <li><strong>商业银行柜台市场</strong>：面向个人投资者的债券零售市场</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要债券品种</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>国债</strong>：中央政府发行的债券，包括记账式国债和凭证式国债</li>
                              <li><strong>地方政府债券</strong>：地方政府发行的债券</li>
                              <li><strong>金融债</strong>：金融机构发行的债券，如政策性金融债、商业银行债</li>
                              <li><strong>企业债</strong>：企业发行的债券，包括公司债、企业债、中期票据等</li>
                              <li><strong>资产支持证券(ABS)</strong>：以资产为支持的证券化产品</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h4 className="text-lg font-medium mt-4">主要特点</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>市场规模</strong>：债券市场存量超过15万亿美元，全球第二大债券市场</li>
                        <li><strong>投资者结构</strong>：以机构投资者为主，商业银行是最大的持有者</li>
                        <li><strong>交易结构</strong>：银行间市场以场外交易(OTC)为主，交易所市场以集中竞价交易为主</li>
                        <li><strong>信用结构</strong>：以高信用等级债券为主，高收益债券市场相对不发达</li>
                        <li><strong>流动性</strong>：整体流动性低于成熟市场，二级市场交易不活跃</li>
                      </ul>
                      
                      <h4 className="text-lg font-medium mt-4">投资渠道</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>直接投资</strong>：机构投资者可通过银行间市场直接交易，个人投资者可通过交易所交易</li>
                        <li><strong>债券基金</strong>：通过债券型基金间接投资债券市场</li>
                        <li><strong>银行理财产品</strong>：通过银行理财产品间接投资债券</li>
                        <li><strong>债券ETF</strong>：通过交易所交易的债券ETF进行投资</li>
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="intl-bond" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">国际债券市场结构</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要市场</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>美国债券市场</strong>：全球最大的债券市场，以国债和公司债为主</li>
                              <li><strong>欧洲债券市场</strong>：包括欧元区国家债券和公司债</li>
                              <li><strong>日本债券市场</strong>：以国债为主的成熟债券市场</li>
                              <li><strong>国际债券市场</strong>：如欧洲债市、离岸人民币债券市场等</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要债券品种</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>国家主权债券</strong>：各国政府发行的债券</li>
                              <li><strong>公司债</strong>：企业发行的债券，包括投资级和高收益债券</li>
                              <li><strong>市政债券</strong>：地方政府发行的债券，如美国市政债</li>
                              <li><strong>抵押债券</strong>：以抵押资产为担保的债券，如MBS</li>
                              <li><strong>新兴市场债券</strong>：新兴经济体发行的债券</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h4 className="text-lg font-medium mt-4">主要特点</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>市场规模</strong>：全球债券市场规模超过100万亿美元，美国市场最大</li>
                        <li><strong>投资者结构</strong>：机构投资者为主，包括养老基金、保险公司、共同基金等</li>
                        <li><strong>交易结构</strong>：以场外交易为主，电子交易平台发展成熟</li>
                        <li><strong>信用结构</strong>：信用级别多元化，高收益债券市场发达</li>
                        <li><strong>流动性</strong>：主要债券品种流动性高，二级市场交易活跃</li>
                      </ul>
                      
                      <h4 className="text-lg font-medium mt-4">投资渠道</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>直接投资</strong>：通过境外账户直接购买债券</li>
                        <li><strong>债券基金/ETF</strong>：通过投资境外债券基金或ETF</li>
                        <li><strong>境内QDII产品</strong>：通过境内发行的QDII债券基金</li>
                        <li><strong>债券联接票据</strong>：与国际债券收益挂钩的结构性产品</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <h4 className="text-lg font-medium mt-6">中国与国际债市的主要差异</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left font-medium">对比项目</th>
                        <th className="px-4 py-2 text-left font-medium">中国债市</th>
                        <th className="px-4 py-2 text-left font-medium">国际债市(以美国为主)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2">市场结构</td>
                        <td className="px-4 py-2">银行间市场为主，交易所市场为辅</td>
                        <td className="px-4 py-2">场外交易为主，电子交易平台发达</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">产品结构</td>
                        <td className="px-4 py-2">以国债、金融债为主，企业债占比较低</td>
                        <td className="px-4 py-2">产品多元化，公司债占比高</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">信用结构</td>
                        <td className="px-4 py-2">以高信用级别债券为主，高收益债市场小</td>
                        <td className="px-4 py-2">信用级别多元化，高收益债市场发达</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">投资者结构</td>
                        <td className="px-4 py-2">以银行为主要持有者，个人投资者参与度低</td>
                        <td className="px-4 py-2">机构投资者多元化，个人投资者参与度高</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">二级市场活跃度</td>
                        <td className="px-4 py-2">相对不活跃，“买入并持有”策略为主</td>
                        <td className="px-4 py-2">交易活跃，价格发现功能强</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="money" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">货币市场</h3>
              <div className="space-y-4">
                <p>
                  货币市场是短期资金融通的场所，主要交易期限在一年以内的金融工具。货币市场在经济中发挥着重要的流动性管理和短期融资功能。
                </p>
                
                <Tabs defaultValue="china-money" className="mt-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="china-money">中国货币市场</TabsTrigger>
                    <TabsTrigger value="intl-money">国际货币市场</TabsTrigger>
                  </TabsList>
                  <TabsContent value="china-money" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">中国货币市场结构</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要市场分类</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>银行间市场</strong>：金融机构之间进行短期资金融通的场所</li>
                              <li><strong>证券公司回购市场</strong>：证券公司之间的短期融资市场</li>
                              <li><strong>商业票据市场</strong>：企业发行短期债务工具的市场</li>
                              <li><strong>货币基金市场</strong>：为个人和机构投资者提供的短期投资工具</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要交易工具</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>同业拖放</strong>：银行间短期资金借贷，期限从隔夜到一年</li>
                              <li><strong>回购协议</strong>：以债券为担保的短期资金借贷</li>
                              <li><strong>央行票据</strong>：中央银行发行的短期债务工具</li>
                              <li><strong>大额可转让存单(NCD)</strong>：银行发行的可转让存款凭证</li>
                              <li><strong>商业票据</strong>：企业发行的短期债务工具</li>
                              <li><strong>货币基金</strong>：投资于短期货币市场工具的基金</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h4 className="text-lg font-medium mt-4">主要特点</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>市场规模</strong>：中国货币市场规模不断扩大，银行间市场交易量大</li>
                        <li><strong>参与主体</strong>：以金融机构为主，包括银行、证券公司、保险公司等</li>
                        <li><strong>利率形成</strong>：以Shibor(上海银行间同业拖放利率)为基准利率</li>
                        <li><strong>监管机构</strong>：主要由中国人民银行进行监管</li>
                        <li><strong>市场功能</strong>：为金融机构提供短期流动性管理，为中央银行货币政策操作提供平台</li>
                      </ul>
                      
                      <h4 className="text-lg font-medium mt-4">投资渠道</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>货币基金</strong>：个人投资者可通过货币基金参与货币市场</li>
                        <li><strong>银行理财产品</strong>：通过银行发行的短期理财产品间接参与</li>
                        <li><strong>大额存单</strong>：机构投资者可购买银行发行的大额存单</li>
                        <li><strong>回购协议</strong>：机构投资者可通过回购协议进行短期资金管理</li>
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="intl-money" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">国际货币市场结构</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要市场</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>美国货币市场</strong>：全球最大、最成熟的货币市场</li>
                              <li><strong>欧洲货币市场</strong>：以伦敦为中心的欧洲货币市场</li>
                              <li><strong>亚洲货币市场</strong>：以东京、香港、新加坡为主要中心</li>
                              <li><strong>离岸货币市场</strong>：如欧洲美元市场(Eurodollar Market)</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要交易工具</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>联邦基金利率(Fed Funds)</strong>：美国银行间隔夜借贷利率</li>
                              <li><strong>商业票据(Commercial Paper)</strong>：企业发行的短期票据</li>
                              <li><strong>国库券(Treasury Bills)</strong>：美国政府发行的期限一年以内的短期债券</li>
                              <li><strong>回购协议(Repos)</strong>：以债券为担保的短期借贷</li>
                              <li><strong>存款证书(CDs)</strong>：银行发行的可转让存款凭证</li>
                              <li><strong>欧洲美元存款</strong>：在美国境外银行的美元存款</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h4 className="text-lg font-medium mt-4">主要特点</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>市场规模</strong>：全球货币市场规模巨大，美国货币市场是最大的单一市场</li>
                        <li><strong>参与主体</strong>：包括商业银行、中央银行、证券商、共同基金、企业等</li>
                        <li><strong>利率形成</strong>：以LIBOR(伦敦银行同业拖放利率)和SOFR(拨备隐含利率)为主要基准利率</li>
                        <li><strong>市场效率</strong>：流动性高，价格发现功能强，交易成本低</li>
                        <li><strong>国际化程度</strong>：跨境交易活跃，全球性强</li>
                      </ul>
                      
                      <h4 className="text-lg font-medium mt-4">投资渠道</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>货币市场基金(Money Market Funds)</strong>：投资于短期货币市场工具的基金</li>
                        <li><strong>短期国债基金</strong>：投资于短期国库券的基金</li>
                        <li><strong>短期债券ETF</strong>：跟踪短期债券指数的ETF</li>
                        <li><strong>境内QDII产品</strong>：通过境内发行的QDII货币市场基金</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <h4 className="text-lg font-medium mt-6">中国与国际货币市场的主要差异</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left font-medium">对比项目</th>
                        <th className="px-4 py-2 text-left font-medium">中国货币市场</th>
                        <th className="px-4 py-2 text-left font-medium">国际货币市场(以美国为主)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2">市场发展阶段</td>
                        <td className="px-4 py-2">发展中，产品体系不断完善</td>
                        <td className="px-4 py-2">成熟，产品体系完善</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">交易工具多样性</td>
                        <td className="px-4 py-2">相对较少，以同业拖放、回购为主</td>
                        <td className="px-4 py-2">多样化，创新产品丰富</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">参与主体</td>
                        <td className="px-4 py-2">以银行为主，非银行金融机构参与度低</td>
                        <td className="px-4 py-2">参与主体多元化，非银行金融机构参与度高</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">利率市场化程度</td>
                        <td className="px-4 py-2">市场化程度提高但仍有行政影响</td>
                        <td className="px-4 py-2">高度市场化，价格发现功能强</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">个人投资者参与度</td>
                        <td className="px-4 py-2">主要通过货币基金和银行理财产品参与</td>
                        <td className="px-4 py-2">参与渠道多元，可直接购买国库券等工具</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="forex" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">外汇市场</h3>
              <div className="space-y-4">
                <p>
                  外汇市场是进行外汇交易的场所，是全球最大、最活跃的金融市场之一。外汇市场的交易量巨大，每日交易量超过6万亿美元，全天候交易，全球联动。
                </p>
                
                <Tabs defaultValue="china-forex" className="mt-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="china-forex">中国外汇市场</TabsTrigger>
                    <TabsTrigger value="intl-forex">国际外汇市场</TabsTrigger>
                  </TabsList>
                  <TabsContent value="china-forex" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">中国外汇市场结构</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要市场分类</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>银行间外汇市场</strong>：中国外汇交易中心(CFETS)提供交易平台</li>
                              <li><strong>银行柜台市场</strong>：商业银行为个人和企业提供的外汇服务</li>
                              <li><strong>境内外汇期货市场</strong>：中国金融期货交易所提供的外汇期货交易</li>
                              <li><strong>离岸人民币市场</strong>：境外的人民币交易市场，如香港离岸人民币市场</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要交易产品</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>即期外汇</strong>：即时交易的外汇产品，主要包括美元、欧元、日元等</li>
                              <li><strong>远期外汇</strong>：约定在未来某一时间交易的外汇产品</li>
                              <li><strong>外汇期权</strong>：在中国仅限于特定机构交易的期权产品</li>
                              <li><strong>货币互换</strong>：主要用于对冲汇率风险的金融行业产品</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h4 className="text-lg font-medium mt-4">主要特点</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>汇率制度</strong>：人民币实行以市场供求为基础、参考一插子货币、有管理的浮动汇率制度</li>
                        <li><strong>交易时间</strong>：银行间外汇市场交易时间为工作日的9:30-23:30</li>
                        <li><strong>交易量</strong>：与国际外汇市场相比规模较小，但增长迅速</li>
                        <li><strong>监管体系</strong>：由中国人民银行和国家外汇管理局共同监管</li>
                        <li><strong>资本项管制</strong>：中国实行资本项管制，但正在逐步开放</li>
                      </ul>
                      
                      <h4 className="text-lg font-medium mt-4">投资渠道</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>外汇储蓄</strong>：个人和企业可在银行开立外汇账户进行外汇储蓄</li>
                        <li><strong>外汇理财产品</strong>：银行提供的外汇理财产品</li>
                        <li><strong>外汇保证金理财</strong>：以外汇保证金为基础的理财产品</li>
                        <li><strong>QDII产品</strong>：通过合格境内机构投资者计划投资境外市场</li>
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="intl-forex" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">国际外汇市场结构</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要交易中心</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>伦敦</strong>：全球最大的外汇交易中心，占全球交易量的约40%</li>
                              <li><strong>纽约</strong>：第二大外汇交易中心，美元交易活跃</li>
                              <li><strong>东京</strong>：亚洲主要外汇交易中心，日元交易为主</li>
                              <li><strong>新加坡</strong>：亚洲重要外汇交易中心，连接亚洲与欧美市场</li>
                              <li><strong>香港</strong>：亚洲重要外汇交易中心，人民币离岸交易活跃</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要交易产品</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>即期外汇(Spot)</strong>：即时交易的外汇产品，通常T+2结算</li>
                              <li><strong>远期外汇(Forward)</strong>：约定未来某一时间交易的外汇产品</li>
                              <li><strong>外汇期货(Futures)</strong>：标准化的外汇合约，在期货交易所交易</li>
                              <li><strong>外汇期权(Options)</strong>：购买者有权利但无义务在特定时间以特定汇率交易</li>
                              <li><strong>货币互换(Swaps)</strong>：交换不同货币的现金流的金融行业产品</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h4 className="text-lg font-medium mt-4">主要特点</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>交易时间</strong>：24小时交易，从周一早上悬开到周五晚上收盘</li>
                        <li><strong>交易规模</strong>：日均交易量超过6万亿美元，是全球最大的金融市场</li>
                        <li><strong>交易方式</strong>：以场外交易(OTC)为主，通过电子交易平台进行</li>
                        <li><strong>交易主体</strong>：商业银行、中央银行、对冲基金、工商企业和个人投资者</li>
                        <li><strong>流动性</strong>：流动性极高，交易点差小，交易成本低</li>
                      </ul>
                      
                      <h4 className="text-lg font-medium mt-4">投资渠道</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>外汇交易账户</strong>：通过境外或境内券商开立外汇交易账户</li>
                        <li><strong>外汇ETF</strong>：跟踪特定货币汇率的ETF产品</li>
                        <li><strong>外汇期货</strong>：通过期货交易所交易外汇期货合约</li>
                        <li><strong>货币对冲基金</strong>：专注于外汇交易的对冲基金</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <h4 className="text-lg font-medium mt-6">中国与国际外汇市场的主要差异</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left font-medium">对比项目</th>
                        <th className="px-4 py-2 text-left font-medium">中国外汇市场</th>
                        <th className="px-4 py-2 text-left font-medium">国际外汇市场</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2">交易时间</td>
                        <td className="px-4 py-2">工作日的指定时间段</td>
                        <td className="px-4 py-2">24小时交易，全球轮转</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">汇率制度</td>
                        <td className="px-4 py-2">有管理的浮动汇率制，日浮动区间有限制</td>
                        <td className="px-4 py-2">主要货币采用自由浮动汇率制</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">交易规模</td>
                        <td className="px-4 py-2">相对较小，但增长迅速</td>
                        <td className="px-4 py-2">巨大，日均交易量超过6万亿美元</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">资本项管制</td>
                        <td className="px-4 py-2">实行资本项管制，逐步开放</td>
                        <td className="px-4 py-2">主要发达国家无资本项管制</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">交易产品</td>
                        <td className="px-4 py-2">相对单一，衡生品种有限</td>
                        <td className="px-4 py-2">多样化，衡生品种丰富</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="futures" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">期货市场</h3>
              <div className="space-y-4">
                <p>
                  期货市场是交易标准化期货合约的场所，是重要的风险管理和价格发现平台。期货合约是买卖双方约定在未来某一时间以特定价格交收标的物的标准化合约。
                </p>
                
                <Tabs defaultValue="china-futures" className="mt-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="china-futures">中国期货市场</TabsTrigger>
                    <TabsTrigger value="intl-futures">国际期货市场</TabsTrigger>
                  </TabsList>
                  <TabsContent value="china-futures" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">中国期货市场结构</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要交易所</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>上海期货交易所(SHFE)</strong>：主要交易金属、能源类期货</li>
                              <li><strong>大连商品交易所(DCE)</strong>：主要交易农产品、化工类期货</li>
                              <li><strong>郑州商品交易所(CZCE)</strong>：主要交易农产品、化工类期货</li>
                              <li><strong>中国金融期货交易所(CFFEX)</strong>：主要交易金融期货和期权</li>
                              <li><strong>广州期货交易所(GFEX)</strong>：新设立的期货交易所，交易碳排放配额等产品</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要产品类型</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>商品期货</strong>：包括农产品、金属、能源等实物商品期货</li>
                              <li><strong>金融期货</strong>：包括股指期货、国债期货等</li>
                              <li><strong>期权</strong>：包括商品期权和金融期权</li>
                              <li><strong>期货期权</strong>：以期货合约为标的物的期权合约</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h4 className="text-lg font-medium mt-4">主要特点</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>市场规模</strong>：中国期货市场在全球市场中排名前列，部分品种交易量全球领先</li>
                        <li><strong>交易机制</strong>：采用保证金交易制度，保证金比例通常在5%-15%之间</li>
                        <li><strong>每日结算</strong>：采用每日无负债结算制度，当日盈亏当日结算</li>
                        <li><strong>价格限制</strong>：大多数期货品种设有涨跌停板限制，一般为上一交易日结算价的3%-10%</li>
                        <li><strong>监管体系</strong>：由中国证监会统一监管，各期货交易所实行自律管理</li>
                      </ul>
                      
                      <h4 className="text-lg font-medium mt-4">投资渠道</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>直接交易</strong>：通过期货公司开立期货账户进行交易</li>
                        <li><strong>期货公司资产管理产品</strong>：如期货理财、管理计划等</li>
                        <li><strong>基于期货的ETF</strong>：跟踪期货价格的ETF产品</li>
                        <li><strong>期货投资基金</strong>：专业投资于期货市场的基金产品</li>
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="intl-futures" className="p-4 border rounded-md mt-2">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">国际期货市场结构</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要交易所</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>芝加哥商品交易所(CME Group)</strong>：全球最大的期货交易所集团，包括CME、CBOT、NYMEX、COMEX</li>
                              <li><strong>洲际交易所(ICE)</strong>：全球主要期货交易所，主要交易能源、软商品等</li>
                              <li><strong>欧洲期货交易所(Eurex)</strong>：欧洲最大的期货交易所，主要交易金融期货</li>
                              <li><strong>伦敦金属交易所(LME)</strong>：全球最重要的有色金属期货交易所</li>
                              <li><strong>日本交易所集团(JPX)</strong>：亚洲重要的期货交易所集团</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">主要产品类型</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><strong>能源期货</strong>：原油、天然气等能源类期货</li>
                              <li><strong>农产品期货</strong>：小麦、玉米、大豆等农产品期货</li>
                              <li><strong>金属期货</strong>：黄金、白银、铜等金属期货</li>
                              <li><strong>金融期货</strong>：股指期货、国债期货、利率期货等</li>
                              <li><strong>外汇期货</strong>：各主要货币对的期货合约</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h4 className="text-lg font-medium mt-4">主要特点</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>市场规模</strong>：全球期货市场交易量巨大，以美国期货市场为主导</li>
                        <li><strong>交易机制</strong>：采用保证金交易制度，保证金比例因品种而异</li>
                        <li><strong>交易方式</strong>：以电子交易为主，部分交易所保留场内交易</li>
                        <li><strong>流动性</strong>：主要品种流动性高，价格发现功能强</li>
                        <li><strong>监管体系</strong>：各国监管体系完善，如美国的CFTC、英国的FCA等</li>
                      </ul>
                      
                      <h4 className="text-lg font-medium mt-4">投资渠道</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>直接交易</strong>：通过境外期货经纪商开立账户进行交易</li>
                        <li><strong>期货ETF</strong>：跟踪特定期货价格的ETF产品</li>
                        <li><strong>境内QDII产品</strong>：通过境内发行的QDII产品间接参与</li>
                        <li><strong>商品指数基金</strong>：跟踪商品指数的基金产品</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <h4 className="text-lg font-medium mt-6">中国与国际期货市场的主要差异</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left font-medium">对比项目</th>
                        <th className="px-4 py-2 text-left font-medium">中国期货市场</th>
                        <th className="px-4 py-2 text-left font-medium">国际期货市场(以美国为主)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2">市场参与者</td>
                        <td className="px-4 py-2">以个人投资者为主，机构参与度提升中</td>
                        <td className="px-4 py-2">以机构投资者为主，如对冲基金、商品交易商</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">产品结构</td>
                        <td className="px-4 py-2">商品期货为主，金融期货发展中</td>
                        <td className="px-4 py-2">商品期货与金融期货并重，金融期货发展成熟</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">价格限制</td>
                        <td className="px-4 py-2">设有涨跌停板限制，一般为3%-10%</td>
                        <td className="px-4 py-2">部分市场无涨跌停板限制，有熔断机制</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">交易时间</td>
                        <td className="px-4 py-2">交易时间相对较短，多为白天交易</td>
                        <td className="px-4 py-2">部分产品提供电子交易平台进行夜盘交易</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">国际化程度</td>
                        <td className="px-4 py-2">国际化程度不断提高，部分品种开放外资参与</td>
                        <td className="px-4 py-2">高度国际化，全球投资者广泛参与</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* 市场特点与挑战 */}
        <section id="market-features" className="space-y-4 mt-8">
          <h2 className="text-2xl font-bold tracking-tight">市场特点与挑战</h2>
          <p className="text-muted-foreground">
            中国金融市场具有自身独特的特点，同时也面临一系列挑战和发展机遇。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>市场特点</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>高增长性</strong>：中国金融市场增长速度快，与经济高速增长相匹配</li>
                  <li><strong>政策引导强</strong>：政府在市场发展中发挥重要引导作用</li>
                  <li><strong>多层次市场体系</strong>：已形成主板、创业板、科创板、新三板等多层次市场</li>
                  <li><strong>波动性较大</strong>：相比成熟市场，中国市场波动性较大</li>
                  <li><strong>投资者结构特殊</strong>：个人投资者占比高，机构投资者力量正在增强</li>
                  <li><strong>银行主导型金融体系</strong>：银行在金融体系中占据主导地位</li>
                  <li><strong>市场化改革加速</strong>：注册制改革全面推进，市场化程度提高</li>
                  <li><strong>开放程度提升</strong>：资本项目开放步伐加快，外资准入限制逐步放宽</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>市场挑战</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>监管平衡</strong>：在防范金融风险与促进金融创新之间寻求平衡</li>
                  <li><strong>投资者结构优化</strong>：需要提高机构投资者比例，减少投机行为</li>
                  <li><strong>信息透明度</strong>：提高上市公司信息披露质量和透明度</li>
                  <li><strong>市场波动管理</strong>：减少过度波动，提高市场稳定性</li>
                  <li><strong>深化金融供给侧改革</strong>：提高直接融资比例，完善多层次资本市场体系</li>
                  <li><strong>国际化挑战</strong>：应对国际金融市场波动和资本流动的影响</li>
                  <li><strong>金融科技发展</strong>：需要平衡金融科技创新与风险防控</li>
                  <li><strong>绿色金融转型</strong>：推动金融体系支持碳达峰、碳中和目标</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 投资者参与方式 */}
        <section id="investment-channels" className="space-y-4 mt-8">
          <h2 className="text-2xl font-bold tracking-tight">投资者参与方式</h2>
          <p className="text-muted-foreground">
            投资者可以通过多种渠道和方式参与中国金融市场，了解基本的参与规则和流程有助于投资者更好地进行投资决策。
          </p>

          <Tabs defaultValue="domestic" className="mt-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="domestic">境内投资者</TabsTrigger>
              <TabsTrigger value="foreign">境外投资者</TabsTrigger>
            </TabsList>
            <TabsContent value="domestic" className="p-4 border rounded-md mt-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">境内投资者参与渠道</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">直接投资</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li><strong>股票市场</strong>：开立证券账户，直接参与交易所交易</li>
                        <li><strong>债券市场</strong>：通过交易所或银行间市场交易债券</li>
                        <li><strong>期货市场</strong>：开立期货账户，参与期货交易</li>
                        <li><strong>外汇市场</strong>：通过银行进行外汇交易或外汇理财</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">间接投资</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li><strong>基金投资</strong>：购买公募基金、ETF、LOF等产品</li>
                        <li><strong>银行理财</strong>：购买银行发行的理财产品</li>
                        <li><strong>保险产品</strong>：购买带有投资性质的保险产品</li>
                        <li><strong>私募基金</strong>：高净值投资者可参与私募基金投资</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <h4 className="text-lg font-medium mt-4">境内投资者参与国际市场的渠道</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>港股通</strong>：境内投资者可通过港股通机制投资香港市场</li>
                  <li><strong>QDII产品</strong>：购买合格境内机构投资者发行的境外投资产品</li>
                  <li><strong>境外直接投资</strong>：符合条件的投资者可办理境外投资并开立境外账户</li>
                  <li><strong>CDR产品</strong>：投资境内上市的境外公司存托凭证</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="foreign" className="p-4 border rounded-md mt-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">境外投资者参与渠道</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">直接投资渠道</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li><strong>QFII/RQFII</strong>：合格境外机构投资者计划，可直接投资A股和债券</li>
                        <li><strong>沙箱机制</strong>：外资参与中国金融市场的试点机制</li>
                        <li><strong>外商投资准入</strong>：外资金融机构在华设立机构参与市场</li>
                        <li><strong>债券通</strong>：境外投资者可通过债券通投资中国债券市场</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">间接投资渠道</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li><strong>H股</strong>：投资在香港上市的中国内地公司</li>
                        <li><strong>ADR/GDR</strong>：投资在美国或全球其他市场上市的中国公司</li>
                        <li><strong>UCITS基金</strong>：投资于中国市场的欧洲基金产品</li>
                        <li><strong>ETF</strong>：跟踪中国市场指数的境外ETF产品</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <h4 className="text-lg font-medium mt-4">境外投资者注意事项</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>监管政策变化</strong>：关注中国金融市场监管政策的变化</li>
                  <li><strong>汇率风险</strong>：注意人民币汇率波动带来的风险</li>
                  <li><strong>文化差异</strong>：了解中国市场的文化和制度特点</li>
                  <li><strong>资本管制</strong>：了解中国资本项目管制政策及其影响</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* 常见问题 */}
        <section id="faq" className="space-y-4 mt-8">
          <h2 className="text-2xl font-bold tracking-tight">常见问题</h2>
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="q1">
              <AccordionTrigger>如何开始投资中国股票市场？</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>在中国开始股票投资需要以下步骤：</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li><strong>开立证券账户</strong>：携带身份证到证券公司或通过线上平台开立账户</li>
                    <li><strong>开立银行资金账户</strong>：关联银行卡作为资金账户</li>
                    <li><strong>资金充值</strong>：将资金转入证券账户</li>
                    <li><strong>进行交易</strong>：通过证券公司交易软件或APP进行股票交易</li>
                  </ol>
                  <p className="mt-2">新手投资者建议：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>先学习基本的投资知识，了解股票市场的基本规则</li>
                    <li>从小额开始，逐步累积经验</li>
                    <li>考虑从指数基金或ETF等产品入手，降低风险</li>
                    <li>关注市场动态和政策变化</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>外国投资者如何参与中国金融市场？</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>外国投资者可以通过以下主要渠道参与中国金融市场：</p>
                  <h5 className="font-medium mt-2">直接投资渠道：</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>QFII/RQFII</strong>：合格境外机构投资者可直接投资A股和中国债券市场</li>
                    <li><strong>沈港通/深港通</strong>：境外投资者可通过香港市场投资符合条件的A股</li>
                    <li><strong>债券通</strong>：境外投资者可通过香港投资中国银行间债券市场</li>
                  </ul>
                  
                  <h5 className="font-medium mt-2">间接投资渠道：</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>H股</strong>：投资在香港上市的中国内地公司</li>
                    <li><strong>ADR</strong>：投资在美国上市的中国公司存托凭证</li>
                    <li><strong>UCITS基金</strong>：投资于中国市场的欧洲基金产品</li>
                    <li><strong>ETF</strong>：跟踪中国市场指数的境外ETF产品</li>
                  </ul>
                  
                  <p className="mt-2">外国投资者参与中国市场需要注意：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>了解中国的监管政策和市场规则</li>
                    <li>关注人民币汇率风险</li>
                    <li>识别中国市场的独特投资环境和文化差异</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>中国金融市场的主要风险有哪些？</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>中国金融市场的主要风险包括：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>政策风险</strong>：中国金融市场受政策影响较大，政策变化可能导致市场波动</li>
                    <li><strong>市场波动风险</strong>：中国市场相比成熟市场波动性更大</li>
                    <li><strong>流动性风险</strong>：某些市场或产品的流动性可能不足</li>
                    <li><strong>信息不对称风险</strong>：市场信息透明度和披露质量有待提高</li>
                    <li><strong>汇率风险</strong>：人民币汇率波动可能影响投资回报</li>
                  </ul>
                  
                  <p className="mt-2">风险管理建议：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>分散投资</strong>：跨不同市场和资产类别分散投资</li>
                    <li><strong>长期视角</strong>：采取长期投资策略，减少短期波动影响</li>
                    <li><strong>持续学习</strong>：关注市场政策和动态，提高市场认知</li>
                    <li><strong>专业建议</strong>：对于复杂投资，可寻求专业投资顾问的建议</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* 投资服务 */}
        <section id="investment-services" className="space-y-4 mt-8">
          <h2 className="text-2xl font-bold tracking-tight">投资服务</h2>
          <p className="text-muted-foreground">
            中国金融市场提供了丰富的投资服务，帮助投资者更好地参与市场。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>交易服务</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>证券公司</strong>：提供股票、债券交易服务和投资咨询</li>
                  <li><strong>期货公司</strong>：提供期货和期权交易服务</li>
                  <li><strong>银行金融服务</strong>：提供外汇交易、理财产品和资产管理</li>
                  <li><strong>网上交易平台</strong>：提供便捷的线上交易服务和市场信息</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>信息服务</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>研究报告</strong>：证券公司和研究机构提供的市场和个股研究</li>
                  <li><strong>数据服务</strong>：提供市场数据、指数和行情信息</li>
                  <li><strong>资讯平台</strong>：提供实时市场新闻和分析</li>
                  <li><strong>投资教育</strong>：提供投资知识和技能培训</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>专业投资服务</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>投资顾问</strong>：提供个性化投资建议和组合管理</li>
                  <li><strong>资产配置</strong>：根据风险偏好和投资目标进行资产配置</li>
                  <li><strong>财富管理</strong>：高净值客户的全面财富规划服务</li>
                  <li><strong>私人银行</strong>：高端客户的专属金融服务</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>私募与另类投资</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>私募基金</strong>：面向合格投资者的另类投资机会</li>
                  <li><strong>创投/风投</strong>：投资初创公司和高增长企业</li>
                  <li><strong>对冲基金</strong>：采用特殊策略的另类投资基金</li>
                  <li><strong>家族办公室</strong>：为超高净值家族提供的投资管理服务</li>
                </ul>
              </CardContent>
            </Card>
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
                  <a href="#market-overview" className="text-primary hover:underline block">市场概述</a>
                </div>
                <div>
                  <a href="#market-comparison" className="text-primary hover:underline block">市场对比</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#china-market" className="text-muted-foreground hover:text-primary block">中国市场</a>
                    <a href="#international-market" className="text-muted-foreground hover:text-primary block">国际市场</a>
                  </div>
                </div>
                <div>
                  <a href="#market-segments" className="text-primary hover:underline block">主要市场板块</a>
                </div>
                <div>
                  <a href="#market-features" className="text-primary hover:underline block">市场特点与挑战</a>
                </div>
                <div>
                  <a href="#investment-channels" className="text-primary hover:underline block">投资者参与方式</a>
                </div>
                <div>
                  <a href="#investment-services" className="text-primary hover:underline block">投资服务</a>
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
                  <AccordionTrigger>如何开始投资中国股票市场？</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      需要开立证券账户、关联银行资金账户、资金充值后即可交易。建议新手先学习基本知识，从小额开始或考虑从指数基金入手。
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>外国投资者如何参与中国金融市场？</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      主要渠道包括QFII/RQFII、沈港通/深港通、债券通等直接渠道，以及H股、ADR、UCITS基金、ETF等间接渠道。需要注意了解中国监管政策、汇率风险和文化差异。
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3">
                  <AccordionTrigger>中国金融市场的主要风险有哪些？</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      主要风险包括政策风险、市场波动风险、流动性风险、信息不对称风险和汇率风险。建议分散投资、采取长期视角。
                    </p>
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
                <a href="/regulations" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">投资监管</h3>
                    <p className="text-xs text-muted-foreground">了解中国金融市场的监管架构</p>
                  </div>
                </a>
                <a href="/securities" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">证券投资</h3>
                    <p className="text-xs text-muted-foreground">探索中国证券市场的投资机会</p>
                  </div>
                </a>
                <a href="/funds" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">基金投资</h3>
                    <p className="text-xs text-muted-foreground">了解如何通过基金参与国内外市场</p>
                  </div>
                </a>
                <a href="/etf" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">ETF投资</h3>
                    <p className="text-xs text-muted-foreground">探索跟踪国际指数的ETF产品</p>
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