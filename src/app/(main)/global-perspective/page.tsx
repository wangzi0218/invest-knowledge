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

export default function GlobalPerspectivePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>全球投资视角</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">全球投资视角</h1>
        <p className="text-xl text-muted-foreground">
          不同国家和地区的投资文化比较、全球资产配置、跨境投资的机会与挑战
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">        
        <div className="lg:col-span-2 space-y-8">
        
        {/* 全球投资文化比较 */}
        <section className="space-y-4" id="investment-cultures">
          <h2 className="text-2xl font-bold tracking-tight">全球投资文化比较</h2>
          <p className="text-muted-foreground">
            不同国家和地区的投资者往往表现出不同的投资偏好、风险态度和决策方式。
            这些差异源于文化背景、历史经验、经济发展阶段和制度环境等多种因素。
            了解这些差异有助于投资者在全球市场中做出更明智的决策。
          </p>

          <Tabs defaultValue="asia" className="mt-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="asia">亚洲</TabsTrigger>
              <TabsTrigger value="north-america">北美</TabsTrigger>
              <TabsTrigger value="europe">欧洲</TabsTrigger>
              <TabsTrigger value="emerging">新兴市场</TabsTrigger>
            </TabsList>
            
            <TabsContent value="asia" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">亚洲投资文化</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">中国投资文化特点：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>储蓄倾向</strong>：高储蓄率，现金和房地产是主要资产</li>
                    <li><strong>风险偏好</strong>：股市投资者偏好短期交易，波动性较高</li>
                    <li><strong>家族观念</strong>：投资决策常考虑家庭需求和代际传承</li>
                    <li><strong>房产偏好</strong>：房地产被视为首选投资和财富保值手段</li>
                    <li><strong>新兴趋势</strong>：年轻投资者对互联网金融和海外资产兴趣增加</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">日本投资文化特点：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>保守主义</strong>：偏好低风险投资，大量资金存放在银行</li>
                    <li><strong>通缩经历</strong>：经历长期通缩，对股市持谨慎态度</li>
                    <li><strong>公司持股</strong>：企业间交叉持股传统深厚</li>
                    <li><strong>长期视角</strong>：投资决策通常基于长期考量</li>
                    <li><strong>近期变化</strong>：安倍经济学后，投资文化逐渐转向更积极</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">新加坡/香港投资文化特点：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>国际化视野</strong>：投资者普遍具有全球投资意识</li>
                    <li><strong>金融素养</strong>：较高的金融知识水平和市场参与度</li>
                    <li><strong>多元化</strong>：投资组合通常包含多种资产类别和地区</li>
                    <li><strong>税收意识</strong>：税收优化是投资决策的重要考量</li>
                    <li><strong>房地产</strong>：房产投资在投资组合中占重要位置</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="north-america" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">北美投资文化</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">美国投资文化特点：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>股票市场参与</strong>：高比例家庭直接或间接参与股市</li>
                    <li><strong>退休导向</strong>：401(k)等退休账户是主要投资渠道</li>
                    <li><strong>风险接受度</strong>：相对较高的风险承受能力</li>
                    <li><strong>金融创新</strong>：ETF、指数基金等创新产品普及率高</li>
                    <li><strong>自主投资</strong>：DIY投资文化发达，线上交易平台普及</li>
                    <li><strong>企业家精神</strong>：风险资本和创业投资活跃</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">加拿大投资文化特点：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>平衡取向</strong>：比美国更保守，但仍积极参与市场</li>
                    <li><strong>银行主导</strong>：大型银行在金融服务中占主导地位</li>
                    <li><strong>资源敏感</strong>：投资组合常与自然资源和能源相关</li>
                    <li><strong>税收规划</strong>：RRSP、TFSA等税收优惠账户广泛使用</li>
                    <li><strong>房地产偏好</strong>：房地产在家庭资产中占较大比重</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">北美投资者行为特点：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>个人责任</strong>：退休规划主要是个人责任</li>
                    <li><strong>信息获取</strong>：丰富的金融媒体和研究资源</li>
                    <li><strong>顾问关系</strong>：专业财务顾问使用普遍</li>
                    <li><strong>投资教育</strong>：学校和社区金融教育较为普及</li>
                    <li><strong>长期投资</strong>："买入并持有"策略受到推崇</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="europe" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">欧洲投资文化</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">欧洲整体特点：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>区域差异</strong>：北欧vs南欧投资文化存在显著差异</li>
                    <li><strong>社会保障</strong>：较强的社会保障体系影响投资需求</li>
                    <li><strong>银行关系</strong>：传统上与银行关系紧密</li>
                    <li><strong>保守倾向</strong>：相比美国，整体更偏好保守投资</li>
                    <li><strong>可持续投资</strong>：ESG投资在欧洲发展较为领先</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">区域特色：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>英国</strong>：金融市场发达，养老金制度完善，ISA等税收优惠账户普及</li>
                    <li><strong>德国</strong>：储蓄率高，风险厌恶，保险产品受欢迎，现金和房产比重大</li>
                    <li><strong>北欧</strong>：金融素养高，科技接受度高，股票参与率高</li>
                    <li><strong>南欧</strong>：家族企业传统，房地产偏好，现金和实物资产重要性高</li>
                    <li><strong>瑞士</strong>：私人银行传统，国际化投资视野，财富保值意识强</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">欧洲投资趋势：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>数字化转型</strong>：在线投资平台和机器人顾问兴起</li>
                    <li><strong>被动投资增长</strong>：ETF和指数基金市场份额增加</li>
                    <li><strong>可持续投资主流化</strong>：环境和社会因素纳入投资决策</li>
                    <li><strong>养老金改革</strong>：向更多个人责任方向发展</li>
                    <li><strong>低利率环境适应</strong>：投资者寻找替代收益来源</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="emerging" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">新兴市场投资文化</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">新兴市场共同特点：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>发展阶段</strong>：金融市场相对年轻，制度建设进行中</li>
                    <li><strong>波动性</strong>：市场波动较大，投机行为较为普遍</li>
                    <li><strong>金融普惠</strong>：金融服务覆盖率不均衡，正在快速提升</li>
                    <li><strong>现金经济</strong>：现金交易在许多地区仍占主导</li>
                    <li><strong>快速变化</strong>：投资文化和行为正在快速演变</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">区域特色：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>印度</strong>：黄金作为传统投资，股市参与度增长，科技驱动的金融普惠</li>
                    <li><strong>巴西</strong>：高通胀历史影响，房地产重要性高，政治风险敏感</li>
                    <li><strong>俄罗斯</strong>：资源依赖，地缘政治风险，现金和硬资产偏好</li>
                    <li><strong>南非</strong>：矿业投资传统，贫富差距影响投资行为，养老金改革</li>
                    <li><strong>中东</strong>：伊斯兰金融原则，石油财富管理，主权财富基金重要性</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">新兴市场投资趋势：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>移动金融</strong>：移动支付和金融服务快速普及</li>
                    <li><strong>中产阶级增长</strong>：新兴中产阶级推动投资需求</li>
                    <li><strong>金融教育</strong>：投资知识和能力建设受到重视</li>
                    <li><strong>国际化</strong>：投资者寻求海外资产配置机会</li>
                    <li><strong>制度建设</strong>：监管框架和投资者保护机制不断完善</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* 全球资产配置策略 */}
        <section className="space-y-4 mt-8" id="global-asset-allocation">
          <h2 className="text-2xl font-bold tracking-tight">全球资产配置策略</h2>
          <p className="text-muted-foreground">
            全球资产配置是指在不同国家和地区的资产类别间分散投资，以降低风险并把握全球增长机会。
            有效的全球资产配置可以提高投资组合的风险调整后回报，并减少单一市场波动的影响。
          </p>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>全球资产配置的关键考量</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium">宏观经济因素</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>经济增长差异</strong>：不同国家和地区的GDP增长率</li>
                    <li><strong>通胀水平</strong>：各国通胀率及其对资产价格的影响</li>
                    <li><strong>利率环境</strong>：央行政策及收益率曲线变化</li>
                    <li><strong>货币政策</strong>：量化宽松、紧缩周期的影响</li>
                    <li><strong>财政政策</strong>：政府支出和税收政策的变化</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">市场估值</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>相对估值</strong>：不同市场的PE、PB、股息率比较</li>
                    <li><strong>历史估值</strong>：当前估值相对历史平均水平</li>
                    <li><strong>风险溢价</strong>：各市场的股权风险溢价</li>
                    <li><strong>盈利增长</strong>：企业盈利预期和增长潜力</li>
                    <li><strong>行业结构</strong>：市场的行业构成和权重</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">货币因素</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>汇率波动</strong>：汇率变化对投资回报的影响</li>
                    <li><strong>货币对冲</strong>：是否、如何对冲货币风险</li>
                    <li><strong>购买力平价</strong>：长期汇率趋势评估</li>
                    <li><strong>货币相关性</strong>：不同货币间的相关性分析</li>
                    <li><strong>基础货币</strong>：投资者的基础货币考量</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">地缘政治风险</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>政治稳定性</strong>：政府稳定性和政策连续性</li>
                    <li><strong>监管环境</strong>：法律框架和投资者保护</li>
                    <li><strong>贸易关系</strong>：贸易政策和国际关系</li>
                    <li><strong>区域冲突</strong>：地区紧张局势的潜在影响</li>
                    <li><strong>制裁风险</strong>：经济制裁可能性及影响</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">全球资产配置模型示例</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>配置类型</TableHead>
                  <TableHead>发达市场股票</TableHead>
                  <TableHead>新兴市场股票</TableHead>
                  <TableHead>发达市场债券</TableHead>
                  <TableHead>新兴市场债券</TableHead>
                  <TableHead>另类资产</TableHead>
                  <TableHead>现金</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">保守型</TableCell>
                  <TableCell>15-20%</TableCell>
                  <TableCell>5-10%</TableCell>
                  <TableCell>40-50%</TableCell>
                  <TableCell>5-10%</TableCell>
                  <TableCell>5-10%</TableCell>
                  <TableCell>10-15%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">平衡型</TableCell>
                  <TableCell>25-35%</TableCell>
                  <TableCell>10-15%</TableCell>
                  <TableCell>25-35%</TableCell>
                  <TableCell>5-10%</TableCell>
                  <TableCell>10-15%</TableCell>
                  <TableCell>5-10%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">增长型</TableCell>
                  <TableCell>35-45%</TableCell>
                  <TableCell>15-20%</TableCell>
                  <TableCell>15-20%</TableCell>
                  <TableCell>5-10%</TableCell>
                  <TableCell>10-20%</TableCell>
                  <TableCell>0-5%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">进取型</TableCell>
                  <TableCell>40-50%</TableCell>
                  <TableCell>20-30%</TableCell>
                  <TableCell>0-10%</TableCell>
                  <TableCell>5-10%</TableCell>
                  <TableCell>15-25%</TableCell>
                  <TableCell>0-5%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-sm text-muted-foreground mt-2">
              注：另类资产包括房地产、商品、私募股权等。实际配置应根据个人风险承受能力、投资目标和市场环境调整。
            </p>
          </div>
        </section>
        
        {/* 跨境投资机会与挑战 */}
        <section className="space-y-4 mt-8" id="cross-border-investment">
          <h2 className="text-2xl font-bold tracking-tight">跨境投资机会与挑战</h2>
          <p className="text-muted-foreground">
            跨境投资为投资者提供了分散风险、把握全球增长机会的途径，但同时也带来了独特的挑战和复杂性。
            了解这些机会和挑战，可以帮助投资者做出更明智的跨境投资决策。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>跨境投资的主要机会</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">市场多元化</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>接触不同增长阶段的经济体</li>
                      <li>降低单一市场风险</li>
                      <li>把握不同经济周期的机会</li>
                      <li>获取本国市场缺乏的行业敞口</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">收益潜力</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>把握高增长市场机会</li>
                      <li>发现被低估的资产</li>
                      <li>获取更高的股息收益率</li>
                      <li>利用市场效率差异</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">货币多元化</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>对冲本国货币贬值风险</li>
                      <li>从有利的汇率趋势中获益</li>
                      <li>降低通胀风险</li>
                      <li>增加资产组合稳定性</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">特殊投资机会</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>参与全球领先企业增长</li>
                      <li>投资新兴技术和创新</li>
                      <li>获取特定资源和商品敞口</li>
                      <li>参与全球主题投资趋势</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>跨境投资的主要挑战</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">监管与法律风险</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>不同的监管环境和投资者保护</li>
                      <li>外资投资限制和准入条件</li>
                      <li>跨境资本流动管制</li>
                      <li>法律制度差异和执行风险</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">信息不对称</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>获取及时准确信息的难度</li>
                      <li>语言和文化障碍</li>
                      <li>公司治理和信息披露差异</li>
                      <li>对当地市场动态理解有限</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">货币风险</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>汇率波动影响投资回报</li>
                      <li>货币对冲成本</li>
                      <li>外汇管制风险</li>
                      <li>货币危机风险</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">税务复杂性</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>双重征税可能性</li>
                      <li>不同国家税制差异</li>
                      <li>税收申报合规要求</li>
                      <li>税收协定理解和应用</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>主要跨境投资渠道比较</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>投资渠道</TableHead>
                    <TableHead>优势</TableHead>
                    <TableHead>劣势</TableHead>
                    <TableHead>适合投资者</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">国际ETF/指数基金</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 text-sm">
                        <li>低成本、高流动性</li>
                        <li>一次性获得广泛市场敞口</li>
                        <li>无需直接处理跨境交易</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 text-sm">
                        <li>有限的个性化</li>
                        <li>被动跟踪指数</li>
                        <li>可能存在跟踪误差</li>
                      </ul>
                    </TableCell>
                    <TableCell>大多数跨境投资者，特别是初次进行国际投资的投资者</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">全球/国际共同基金</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 text-sm">
                        <li>专业管理</li>
                        <li>研究支持</li>
                        <li>可能的超额收益</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 text-sm">
                        <li>较高费用</li>
                        <li>业绩可能不稳定</li>
                        <li>风格漂移风险</li>
                      </ul>
                    </TableCell>
                    <TableCell>寻求主动管理和潜在超额收益的投资者</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">直接海外证券投资</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 text-sm">
                        <li>完全控制投资决策</li>
                        <li>针对性投资特定公司</li>
                        <li>潜在更高回报</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 text-sm">
                        <li>高交易成本</li>
                        <li>信息获取难度大</li>
                        <li>需要专业知识</li>
                      </ul>
                    </TableCell>
                    <TableCell>经验丰富、了解目标市场的投资者</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">跨境房地产投资</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 text-sm">
                        <li>实物资产所有权</li>
                        <li>潜在租金收入</li>
                        <li>资本增值潜力</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 text-sm">
                        <li>管理复杂性高</li>
                        <li>流动性低</li>
                        <li>法律和税务复杂</li>
                      </ul>
                    </TableCell>
                    <TableCell>长期投资者，有国际房地产经验或专业顾问支持</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">跨境私募股权/风投</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 text-sm">
                        <li>高潜在回报</li>
                        <li>非公开市场机会</li>
                        <li>投资新兴领域</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 text-sm">
                        <li>高准入门槛</li>
                        <li>流动性极低</li>
                        <li>高风险</li>
                      </ul>
                    </TableCell>
                    <TableCell>高净值投资者，能承受高风险和长期资金锁定</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <div className="mt-6 space-y-4">
            <h3 className="text-xl font-semibold">跨境投资实践建议</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>准备阶段</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <strong>教育与研究</strong>
                      <p className="text-sm mt-1">深入了解目标市场的经济基本面、政治环境、监管框架和文化背景</p>
                    </li>
                    <li>
                      <strong>明确目标</strong>
                      <p className="text-sm mt-1">确定跨境投资在整体投资组合中的角色、配置比例和预期目标</p>
                    </li>
                    <li>
                      <strong>选择合适渠道</strong>
                      <p className="text-sm mt-1">根据自身经验、资金规模和风险承受能力选择适合的投资渠道</p>
                    </li>
                    <li>
                      <strong>了解税务影响</strong>
                      <p className="text-sm mt-1">咨询专业税务顾问，了解跨境投资的税务处理和申报要求</p>
                    </li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>执行与管理</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <strong>分步实施</strong>
                      <p className="text-sm mt-1">采用分批投资策略，避免一次性投入全部资金</p>
                    </li>
                    <li>
                      <strong>货币策略</strong>
                      <p className="text-sm mt-1">制定明确的货币管理策略，决定是否及如何对冲货币风险</p>
                    </li>
                    <li>
                      <strong>定期审视</strong>
                      <p className="text-sm mt-1">定期评估跨境投资表现，关注影响因素变化</p>
                    </li>
                    <li>
                      <strong>保持灵活</strong>
                      <p className="text-sm mt-1">根据全球经济和地缘政治变化调整投资策略</p>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

{/* 全球投资趋势 */}
<section className="space-y-4 mt-8" id="global-trends">
  <h2 className="text-2xl font-bold tracking-tight">全球投资趋势</h2>
  <p className="text-muted-foreground">
    全球投资环境正经历深刻变革，新兴趋势正在重塑投资格局和机会。了解这些趋势有助于投资者
    提前布局，把握未来增长机会，并为可能的挑战做好准备。
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <Card>
      <CardHeader>
        <CardTitle>可持续投资与ESG</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          环境、社会和治理(ESG)因素正日益成为投资决策的核心考量，全球资金正大规模流向可持续发展领域。
        </p>
        <div>
          <h4 className="font-medium mb-2">关键发展：</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>ESG资产规模持续扩大，预计2025年全球将超过50万亿美元</li>
            <li>监管框架日益完善，信息披露要求不断提高</li>
            <li>从价值观驱动转向价值创造，ESG表现与财务回报的关联日益明显</li>
            <li>碳中和承诺推动气候相关投资机会</li>
            <li>社会因素（如多样性、包容性）受到更多关注</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">投资者影响：</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>需要发展ESG分析能力，整合到投资流程中</li>
            <li>关注ESG评级方法差异和数据质量问题</li>
            <li>警惕"漂绿"现象，寻求实质性ESG整合</li>
            <li>考虑气候风险对长期投资组合的影响</li>
          </ul>
        </div>
      </CardContent>
    </Card>
    
    <Card>
      <CardHeader>
        <CardTitle>数字化与金融科技</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          技术创新正彻底改变金融服务的提供方式和投资者的参与方式，创造新的投资机会同时也带来新挑战。
        </p>
        <div>
          <h4 className="font-medium mb-2">关键发展：</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>数字投资平台民主化投资渠道，降低准入门槛</li>
            <li>人工智能和大数据分析增强投资决策能力</li>
            <li>区块链技术推动资产代币化和去中心化金融(DeFi)发展</li>
            <li>数字支付和无现金社会趋势加速</li>
            <li>监管科技(RegTech)提升合规效率</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">投资者影响：</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>更多低成本、便捷的全球投资工具可用</li>
            <li>需要提高数字金融素养，了解新型投资产品</li>
            <li>关注数据安全和隐私保护问题</li>
            <li>评估传统金融机构的数字化转型进程</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <Card>
      <CardHeader>
        <CardTitle>地缘政治与经济格局变化</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          全球力量平衡正在发生变化，地缘政治紧张局势和经济政策转向正重塑投资环境和风险格局。
        </p>
        <div>
          <h4 className="font-medium mb-2">关键发展：</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>全球化模式转变，区域化和"友岸外包"趋势兴起</li>
            <li>中美战略竞争影响全球供应链和技术发展</li>
            <li>保护主义政策增加，跨境投资审查趋严</li>
            <li>货币政策和财政政策协调性下降</li>
            <li>能源转型带来地缘经济新格局</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">投资者影响：</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>需要更密切关注地缘政治风险</li>
            <li>评估供应链重构对公司和行业的影响</li>
            <li>考虑战略资源和关键技术的投资机会</li>
            <li>关注政策分化对不同市场的影响</li>
          </ul>
        </div>
      </CardContent>
    </Card>
    
    <Card>
      <CardHeader>
        <CardTitle>人口结构变化</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          全球人口结构正在发生深刻变化，老龄化、城市化和中产阶级扩张等趋势正创造新的投资主题和挑战。
        </p>
        <div>
          <h4 className="font-medium mb-2">关键发展：</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>发达经济体人口老龄化加速，劳动力市场结构变化</li>
            <li>新兴市场中产阶级规模扩大，消费模式升级</li>
            <li>城市化进程持续，特别是亚非地区</li>
            <li>Z世代和千禧一代成为主要消费和投资群体</li>
            <li>养老金体系面临可持续性挑战</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">投资者影响：</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>关注医疗保健、养老服务等银发经济机会</li>
            <li>评估人口结构变化对房地产市场的长期影响</li>
            <li>把握新兴市场消费升级带来的投资机会</li>
            <li>考虑代际价值观差异对消费和投资行为的影响</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
  
  <Card className="mt-6">
    <CardHeader>
      <CardTitle>未来十年关键投资主题</CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>投资主题</TableHead>
            <TableHead>驱动因素</TableHead>
            <TableHead>潜在投资领域</TableHead>
            <TableHead>风险考量</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">能源转型</TableCell>
            <TableCell>气候变化政策、技术进步、消费者偏好转变</TableCell>
            <TableCell>可再生能源、储能技术、智能电网、电动车产业链</TableCell>
            <TableCell>政策依赖性、技术路径不确定性、传统能源转型风险</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">数字化转型</TableCell>
            <TableCell>云计算普及、5G/6G部署、人工智能应用扩展</TableCell>
            <TableCell>云服务提供商、网络安全、数据分析、人工智能应用</TableCell>
            <TableCell>监管风险、技术泡沫、隐私和安全挑战</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">医疗创新</TableCell>
            <TableCell>人口老龄化、基因技术突破、医疗数字化</TableCell>
            <TableCell>生物技术、精准医疗、远程医疗、医疗机器人</TableCell>
            <TableCell>研发不确定性、监管审批、医保支付政策</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">供应链重构</TableCell>
            <TableCell>地缘政治张力、韧性需求、自动化技术</TableCell>
            <TableCell>区域制造中心、自动化设备、物流技术、战略材料</TableCell>
            <TableCell>政策变动、成本上升、转型期效率损失</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">新兴市场消费</TableCell>
            <TableCell>中产阶级扩张、数字普惠金融、城市化</TableCell>
            <TableCell>电子商务、金融服务、教育科技、优质消费品</TableCell>
            <TableCell>政治不稳定性、货币波动、增长放缓风险</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
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
                  <a href="#investment-cultures" className="text-primary hover:underline block">全球投资文化比较</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#" className="text-muted-foreground hover:text-primary block">亚洲</a>
                    <a href="#" className="text-muted-foreground hover:text-primary block">北美</a>
                    <a href="#" className="text-muted-foreground hover:text-primary block">欧洲</a>
                    <a href="#" className="text-muted-foreground hover:text-primary block">新兴市场</a>
                  </div>
                </div>
                <div>
                  <a href="#global-asset-allocation" className="text-primary hover:underline block">全球资产配置策略</a>
                </div>
                <div>
                  <a href="#cross-border-investment" className="text-primary hover:underline block">跨境投资机会与挑战</a>
                </div>
                <div>
                  <a href="#global-trends" className="text-primary hover:underline block">全球投资趋势</a>
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
                  <AccordionTrigger>如何应对全球投资中的货币风险？</AccordionTrigger>
                  <AccordionContent>
                    <p>应对全球投资中的货币风险有几种策略：1）货币对冲：通过远期合约、期权或货币ETF对冲汇率风险，但需考虑对冲成本；2）分散货币敞口：投资多种货币资产，降低单一货币波动影响；3）考虑货币趋势：在投资决策中纳入长期货币趋势分析；4）选择货币对冲产品：使用已内置货币对冲的基金或ETF；5）利用货币相关性：选择与本国货币负相关的外币资产，可能在本币贬值时提供保护。对普通投资者而言，分散投资不同货币区域并长期持有通常是最实用的策略。</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>中国投资者如何进行合规的海外投资？</AccordionTrigger>
                  <AccordionContent>
                    <p>中国投资者进行合规海外投资的主要渠道包括：1）合格境内个人投资者(QDII)基金：通过国内发行的QDII基金间接投资海外市场；2）港股通：通过内地与香港股票市场交易互联互通机制投资港股；3）跨境理财通：在粤港澳大湾区试点的跨境理财产品投资渠道；4）境外直接投资：符合条件的个人可通过银行办理每年最高5万美元的购汇额度；5）海外保险和投资产品：通过合规渠道购买境外保险和投资产品。投资者应了解外汇管理规定，遵守税务申报要求，并关注不同国家的投资者准入条件和税收协定。</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3">
                  <AccordionTrigger>全球投资组合应如何再平衡？</AccordionTrigger>
                  <AccordionContent>
                    <p>全球投资组合再平衡应考虑以下因素：1）再平衡频率：通常每季度或每年一次，或当资产配置偏离目标比例超过一定阈值（如5%）时；2）税务影响：在税收效率高的账户内进行再平衡，考虑不同国家的税收处理；3）交易成本：考虑跨境交易费用、货币兑换成本和市场时差；4）市场时机：避免在极端市场波动期间机械再平衡；5）区域轮动：评估不同地区的经济周期和相对价值。再平衡不仅是恢复目标配置，也是审视全球经济形势变化、调整区域配置的机会。建议结合定期再平衡和阈值触发再平衡的混合策略，平衡成本控制和风险管理。</p>
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
                <a href="/domestic-international" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">国内外证券市场</h3>
                    <p className="text-xs text-muted-foreground">了解不同国家和地区的证券市场特点</p>
                  </div>
                </a>
                <a href="/investment-cases" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">投资案例与教训</h3>
                    <p className="text-xs text-muted-foreground">全球成功投资者的案例分析</p>
                  </div>
                </a>
                <a href="/etf" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">ETF投资</h3>
                    <p className="text-xs text-muted-foreground">了解如何通过ETF进行全球资产配置</p>
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
