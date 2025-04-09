"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StickySidebar } from "@/components/ui-custom/knowledge-page";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function FinancialPlanningPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>投资与财务规划</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">投资与财务规划</h1>
        <p className="text-xl text-muted-foreground">
          全生命周期的财务规划、重大生活事件的财务准备、家庭资产配置与财富传承
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">        
        <div className="lg:col-span-2 space-y-8">
        
        {/* 生命周期财务规划 */}
        <section className="space-y-4" id="lifecycle-planning">
          <h2 className="text-2xl font-bold tracking-tight">生命周期财务规划</h2>
          <p className="text-muted-foreground">
            财务规划应该根据人生不同阶段的需求和目标进行调整。每个阶段都有其独特的财务挑战和机遇，
            合理的规划可以帮助您在每个阶段都为未来做好准备，同时满足当前的需求。
          </p>

          <Tabs defaultValue="early-career" className="mt-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="early-career">职业早期</TabsTrigger>
              <TabsTrigger value="mid-career">职业中期</TabsTrigger>
              <TabsTrigger value="pre-retirement">退休前</TabsTrigger>
              <TabsTrigger value="retirement">退休期</TabsTrigger>
            </TabsList>
            
            <TabsContent value="early-career" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">职业早期（20-35岁）</h3>
              <p className="mb-4">
                这一阶段通常是收入相对较低但增长潜力大的时期。重点应放在建立良好的财务习惯、
                开始投资积累和为未来的重大支出做准备上。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">财务目标：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>建立应急基金（3-6个月生活费）</li>
                    <li>偿还高息债务（如信用卡债务）</li>
                    <li>开始为退休储蓄</li>
                    <li>为短期目标（如旅行、进修）储蓄</li>
                    <li>为中期目标（如购房首付）做准备</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">投资策略：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>风险承受能力</strong>：较高，可以承受更大的市场波动</li>
                    <li><strong>资产配置</strong>：股票比例可达80-90%，以追求长期增长</li>
                    <li><strong>投资工具</strong>：指数基金、ETF、定投计划</li>
                    <li><strong>关键考量</strong>：利用时间优势，发挥复利效应</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">行动建议：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>制定预算并养成储蓄习惯（建议收入的20%用于储蓄和投资）</li>
                    <li>充分利用雇主提供的退休计划</li>
                    <li>开始学习投资知识，培养投资习惯</li>
                    <li>考虑增加技能投资，提高未来收入潜力</li>
                    <li>购买基本保险（如医疗、意外、定期寿险）</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="mid-career" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">职业中期（35-50岁）</h3>
              <p className="mb-4">
                这一阶段通常是收入高峰期，但也面临着更多的财务责任，如子女教育和赡养父母。
                需要平衡当前支出和未来目标，特别是加速退休储蓄。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">财务目标：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>加速退休储蓄</li>
                    <li>为子女教育储蓄</li>
                    <li>减少债务，特别是消费债务</li>
                    <li>增加保险保障</li>
                    <li>开始考虑财富传承规划</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">投资策略：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>风险承受能力</strong>：中等到较高，但应开始适度降低风险</li>
                    <li><strong>资产配置</strong>：股票60-80%，债券20-40%</li>
                    <li><strong>投资工具</strong>：指数基金、ETF、部分主动管理基金、可考虑房地产投资</li>
                    <li><strong>关键考量</strong>：平衡增长与风险控制，开始多元化投资</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">行动建议：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>定期评估退休储蓄进度，必要时增加储蓄比例</li>
                    <li>考虑设立教育金账户或专项储蓄</li>
                    <li>优化税务策略，合理利用税收优惠</li>
                    <li>增加保险保障，考虑重疾险和更高额的寿险</li>
                    <li>开始制定遗产规划，如立遗嘱、设立信托等</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="pre-retirement" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">退休前（50-65岁）</h3>
              <p className="mb-4">
                这一阶段是为退休做最后准备的关键时期。需要评估退休储蓄是否充足，
                调整投资策略以保护已积累的财富，并开始规划退休生活。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">财务目标：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>最大化退休储蓄</li>
                    <li>减少或清除所有债务</li>
                    <li>调整投资组合，降低风险</li>
                    <li>完善医疗和长期护理规划</li>
                    <li>细化退休收入来源和支出计划</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">投资策略：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>风险承受能力</strong>：中等偏低，需要更注重资本保全</li>
                    <li><strong>资产配置</strong>：股票40-60%，债券30-50%，现金10-20%</li>
                    <li><strong>投资工具</strong>：蓝筹股、高质量债券、稳健型基金、部分固定收益产品</li>
                    <li><strong>关键考量</strong>：保护资本，确保退休收入来源，抵御通胀</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">行动建议：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>进行详细的退休收入规划，估算退休后的支出需求</li>
                    <li>考虑延迟退休或部分退休，增加财务灵活性</li>
                    <li>研究社保、养老金等政策，优化领取策略</li>
                    <li>完善遗产规划，确保财富顺利传承</li>
                    <li>考虑长期护理保险或建立专项基金应对未来医疗需求</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="retirement" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">退休期（65岁以上）</h3>
              <p className="mb-4">
                退休后的财务管理重点转向保全资产、产生稳定收入和有效管理支出。
                同时需要考虑健康管理、长期护理和财富传承等问题。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">财务目标：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>管理退休收入，确保资金持续性</li>
                    <li>控制支出，应对通胀</li>
                    <li>管理医疗和长期护理支出</li>
                    <li>优化遗产规划和财富传承</li>
                    <li>保持适当的投资增长以对抗通胀</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">投资策略：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>风险承受能力</strong>：低到中等，以保本和收入为主</li>
                    <li><strong>资产配置</strong>：股票20-40%，债券40-60%，现金15-25%</li>
                    <li><strong>投资工具</strong>：高股息股票、政府债券、企业债、定期存款、年金产品</li>
                    <li><strong>关键考量</strong>：产生稳定收入，保护资本，部分抵御通胀</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">行动建议：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>制定系统的提款策略，确保资金持续性</li>
                    <li>定期审视支出，调整生活方式以适应固定收入</li>
                    <li>关注医疗保险和长期护理选项</li>
                    <li>考虑将部分资产转换为终身收入产品（如年金）</li>
                    <li>完善并执行遗产规划，考虑生前赠与策略</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* 重大生活事件的财务准备 */}
        <section className="space-y-4 mt-8" id="life-events">
          <h2 className="text-2xl font-bold tracking-tight">重大生活事件的财务准备</h2>
          <p className="text-muted-foreground">
            人生中的重大事件往往伴随着重要的财务决策和调整。提前规划和准备可以帮助您在面对这些转变时
            保持财务稳定，并为未来奠定坚实基础。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>购买房产</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">财务准备：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>首付款（通常为房价的20-30%）</li>
                    <li>交易费用（契税、中介费、评估费等）</li>
                    <li>装修和搬家费用</li>
                    <li>应急基金（至少3个月的月供和生活费）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">关键考量：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>月供不应超过月收入的30%</li>
                    <li>评估不同贷款方案（固定利率vs浮动利率）</li>
                    <li>考虑未来的生活变化（如家庭扩大、工作变动）</li>
                    <li>了解房产税、物业费等长期持有成本</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">行动计划：</h4>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>建立专项储蓄账户用于首付</li>
                    <li>提前了解并改善个人信用状况</li>
                    <li>研究目标区域的房价趋势和发展规划</li>
                    <li>咨询专业人士（房产经纪、贷款顾问、律师）</li>
                    <li>准备充足的文件（收入证明、资产证明等）</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>结婚与家庭规划</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">财务准备：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>婚礼预算（根据个人情况和文化背景而定）</li>
                    <li>共同生活起步资金</li>
                    <li>合并或协调财务计划</li>
                    <li>考虑婚前财产协议（如适用）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">关键考量：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>讨论并协调财务目标和价值观</li>
                    <li>决定财务管理方式（共同账户、分开账户或混合模式）</li>
                    <li>调整保险和受益人设置</li>
                    <li>规划子女教育和家庭发展资金</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">行动计划：</h4>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>进行坦诚的财务状况和目标讨论</li>
                    <li>制定共同的预算和储蓄计划</li>
                    <li>更新保险、遗嘱和受益人信息</li>
                    <li>考虑增加保险保障（如寿险、重疾险）</li>
                    <li>开始为未来的家庭发展储蓄（如子女教育金）</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>子女教育规划</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">财务准备：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>教育储蓄基金</li>
                    <li>了解各阶段教育成本（幼儿园至大学）</li>
                    <li>考虑公立vs私立、国内vs国外的成本差异</li>
                    <li>评估奖学金、助学贷款等选项</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">关键考量：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>教育成本增长通常高于一般通胀</li>
                    <li>平衡子女教育与自身退休储蓄</li>
                    <li>考虑税收优惠的教育储蓄方式</li>
                    <li>评估不同教育路径的投资回报</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">行动计划：</h4>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>尽早开始教育储蓄，利用复利效应</li>
                    <li>设立专门的教育基金账户</li>
                    <li>考虑投资组合随子女年龄增长而调整风险</li>
                    <li>研究各类奖学金和助学金申请条件</li>
                    <li>教导子女财务知识，培养正确金钱观</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>职业转变与创业</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">财务准备：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>过渡期生活费（6-12个月）</li>
                    <li>创业启动资金（视行业而定）</li>
                    <li>保险和福利的替代方案</li>
                    <li>应急基金增强（至少6-12个月支出）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">关键考量：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>评估收入波动的影响</li>
                    <li>考虑创业失败的财务影响</li>
                    <li>了解税务变化（如自雇税）</li>
                    <li>评估对长期财务目标的影响</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">行动计划：</h4>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>制定详细的商业计划和财务预测</li>
                    <li>在转变前积累足够的应急资金</li>
                    <li>考虑分阶段转变（如先兼职创业）</li>
                    <li>安排独立的医疗保险和退休计划</li>
                    <li>咨询专业人士（会计师、律师、商业顾问）</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* 家庭资产配置策略 */}
        <section className="space-y-4 mt-8" id="asset-allocation">
          <h2 className="text-2xl font-bold tracking-tight">家庭资产配置策略</h2>
          <p className="text-muted-foreground">
            家庭资产配置是实现财务目标的关键。合理的资产配置可以平衡风险和回报，
            为您的家庭提供稳定的财务基础，同时实现长期财富增长。
          </p>
          
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>资产配置基本原则</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    资产配置是指将投资资金分散到不同类型的资产中，以平衡风险和回报。
                    有效的资产配置应考虑家庭的财务目标、风险承受能力、时间范围和流动性需求。
                  </p>
                  
                  <div>
                    <h4 className="font-medium mb-2">资产配置的核心原则：</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>多元化投资</strong> - 分散投资于不同资产类别、行业和地区，降低整体投资组合风险
                      </li>
                      <li>
                        <strong>风险与回报平衡</strong> - 根据家庭风险承受能力和财务目标，平衡高风险高回报与低风险低回报资产
                      </li>
                      <li>
                        <strong>长期视角</strong> - 保持长期投资视角，避免因短期市场波动而频繁调整
                      </li>
                      <li>
                        <strong>定期再平衡</strong> - 定期审视和调整资产配置，确保与目标保持一致
                      </li>
                      <li>
                        <strong>税务效率</strong> - 考虑税收因素，优化投资回报的税后收益
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">常见家庭资产配置模型</h3>
              
              <Table>
                <TableCaption>不同风险偏好的资产配置示例</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>资产类别</TableHead>
                    <TableHead>保守型配置</TableHead>
                    <TableHead>平衡型配置</TableHead>
                    <TableHead>进取型配置</TableHead>
                    <TableHead>特点与作用</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">现金及等价物</TableCell>
                    <TableCell>20-30%</TableCell>
                    <TableCell>10-15%</TableCell>
                    <TableCell>5-10%</TableCell>
                    <TableCell>提供流动性和安全性，应急资金</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">固定收益（债券等）</TableCell>
                    <TableCell>40-50%</TableCell>
                    <TableCell>30-40%</TableCell>
                    <TableCell>15-25%</TableCell>
                    <TableCell>提供稳定收入，降低整体波动性</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">股票</TableCell>
                    <TableCell>20-30%</TableCell>
                    <TableCell>30-50%</TableCell>
                    <TableCell>50-70%</TableCell>
                    <TableCell>提供长期增长潜力，抵御通胀</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">房地产</TableCell>
                    <TableCell>5-10%</TableCell>
                    <TableCell>5-15%</TableCell>
                    <TableCell>5-15%</TableCell>
                    <TableCell>提供收入和资本增值，分散风险</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">另类投资</TableCell>
                    <TableCell>0-5%</TableCell>
                    <TableCell>0-10%</TableCell>
                    <TableCell>5-15%</TableCell>
                    <TableCell>进一步分散风险，潜在高回报</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold">家庭资产配置策略制定流程</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>第一步：评估家庭财务状况</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>盘点家庭总资产和负债</li>
                      <li>评估家庭收入稳定性和增长潜力</li>
                      <li>确定短期、中期和长期财务目标</li>
                      <li>评估家庭成员的风险承受能力</li>
                      <li>考虑家庭生命周期阶段（如有子女、接近退休等）</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>第二步：设计资产配置方案</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>确定战略资产配置（各类资产的长期目标比例）</li>
                      <li>选择适合的投资工具（基金、ETF、直接投资等）</li>
                      <li>考虑税务效率和费用因素</li>
                      <li>设计流动性管理策略</li>
                      <li>制定再平衡规则和触发条件</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>第三步：执行与监控</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>分阶段实施资产配置计划</li>
                      <li>定期审视投资组合表现</li>
                      <li>根据市场变化和表现进行战术性调整</li>
                      <li>定期（如年度）进行全面评估</li>
                      <li>在重大生活事件后重新评估配置策略</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>常见误区与注意事项</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>过度关注短期市场波动</li>
                      <li>忽视通胀影响</li>
                      <li>资产过度集中（如过度投资于房产或单一股票）</li>
                      <li>忽视流动性需求</li>
                      <li>未考虑家庭整体情况（如债务、保险保障等）</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* 财富传承与遗产规划 */}
        <section className="space-y-4 mt-8" id="wealth-transfer">
          <h2 className="text-2xl font-bold tracking-tight">财富传承与遗产规划</h2>
          <p className="text-muted-foreground">
            财富传承不仅关乎资产的转移，更涉及价值观和财务智慧的传递。
            良好的遗产规划可以确保您的财富按照您的意愿传承给下一代，同时最大化财富保全，
            减少不必要的税务负担和家庭纠纷。
          </p>
          
          <div className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>财富传承的核心要素</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">财富传承的多个维度：</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>财务资产</strong> - 包括现金、投资、不动产、企业股权等
                      </li>
                      <li>
                        <strong>无形资产</strong> - 如家族价值观、商业智慧、人脉关系等
                      </li>
                      <li>
                        <strong>社会责任</strong> - 慈善事业、社会贡献等
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">有效财富传承的原则：</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>明确传承目标和价值观</li>
                      <li>平衡当代需求与后代利益</li>
                      <li>考虑税务效率和法律保障</li>
                      <li>培养继承人的财务素养和责任感</li>
                      <li>建立透明且公平的传承机制</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>遗产规划工具</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="tool1">
                      <AccordionTrigger>遗嘱</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">遗嘱是最基本的遗产规划工具，明确说明您希望如何分配资产。</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>应包含资产分配、监护人指定、遗嘱执行人等内容</li>
                          <li>需符合法律要求，建议由专业律师起草</li>
                          <li>应定期更新，特别是在重大生活变化后</li>
                          <li>优点：灵活、成本低；缺点：需经过遗产继承程序，缺乏隐私保护</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="tool2">
                      <AccordionTrigger>信托</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">信托是一种法律安排，允许第三方（受托人）代表受益人持有资产。</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>可以是生前信托或遗嘱信托</li>
                          <li>提供更大的控制权和隐私保护</li>
                          <li>可避免遗产继承程序，实现资产平稳过渡</li>
                          <li>可设定条件和时间表控制资产分配</li>
                          <li>优点：灵活性高、隐私保护好；缺点：设立和管理成本较高</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="tool3">
                      <AccordionTrigger>保险</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">人寿保险可作为财富传承的工具，为受益人提供即时流动性。</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>保险金直接支付给指定受益人，绕过遗产继承程序</li>
                          <li>可用于支付遗产税、债务或提供即时流动性</li>
                          <li>某些保险产品还具有投资和现金价值积累功能</li>
                          <li>优点：流动性好、税务效率高；缺点：保费成本需考虑</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="tool4">
                      <AccordionTrigger>赠与</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">生前赠与可减少遗产规模，同时让您看到财富传承的效果。</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>可利用年度免税赠与额度</li>
                          <li>直接支付教育和医疗费用通常可免税</li>
                          <li>可结合慈善赠与获得税收优惠</li>
                          <li>优点：减少遗产规模、即时见效；缺点：失去对资产的控制权</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>财富教育与价值观传承</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    除了物质财富，传递财务知识和价值观对于确保家族财富的长期保全同样重要。
                    研究表明，没有适当准备的继承人往往会在一代或两代内耗尽继承的财富。
                  </p>
                  
                  <div>
                    <h4 className="font-medium mb-2">有效的财富教育策略：</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>从小开始</strong> - 从儿童时期开始培养正确的金钱观和财务习惯
                      </li>
                      <li>
                        <strong>循序渐进</strong> - 根据年龄和成熟度逐步增加财务责任和知识
                      </li>
                      <li>
                        <strong>实践学习</strong> - 通过实际参与家庭财务决策和管理学习
                      </li>
                      <li>
                        <strong>开放沟通</strong> - 坦诚讨论家庭财务状况、目标和价值观
                      </li>
                      <li>
                        <strong>专业指导</strong> - 适时引入财务顾问、导师等专业人士指导
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">家族会议与沟通：</h4>
                    <p>
                      定期的家族会议可以作为讨论财务目标、传承计划和价值观的平台，
                      帮助所有家庭成员了解并参与财富传承过程，减少未来的误解和冲突。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>财富传承规划步骤</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong>盘点与评估</strong>
                      <p className="mt-1">全面盘点家庭资产、负债、保险和现有法律文件，评估当前财务状况和未来需求。</p>
                    </li>
                    
                    <li>
                      <strong>确立目标与原则</strong>
                      <p className="mt-1">明确财富传承的目标、价值观和原则，包括对家庭成员、慈善事业等的考虑。</p>
                    </li>
                    
                    <li>
                      <strong>组建专业团队</strong>
                      <p className="mt-1">聘请专业人士（如遗产律师、财务顾问、税务专家）协助规划。</p>
                    </li>
                    
                    <li>
                      <strong>制定传承策略</strong>
                      <p className="mt-1">根据目标选择合适的传承工具和策略，平衡控制权、税务效率和灵活性。</p>
                    </li>
                    
                    <li>
                      <strong>文件准备与执行</strong>
                      <p className="mt-1">准备并签署必要的法律文件，如遗嘱、信托协议、授权委托书等。</p>
                    </li>
                    
                    <li>
                      <strong>沟通与教育</strong>
                      <p className="mt-1">与家庭成员沟通传承计划，培养继承人的财务素养和责任感。</p>
                    </li>
                    
                    <li>
                      <strong>定期审视与更新</strong>
                      <p className="mt-1">定期（如每3-5年）或在重大生活变化后审视并更新传承计划。</p>
                    </li>
                  </ol>
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
                  <a href="#lifecycle-planning" className="text-primary hover:underline block">生命周期财务规划</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#" className="text-muted-foreground hover:text-primary block">职业早期</a>
                    <a href="#" className="text-muted-foreground hover:text-primary block">职业中期</a>
                    <a href="#" className="text-muted-foreground hover:text-primary block">退休前</a>
                    <a href="#" className="text-muted-foreground hover:text-primary block">退休期</a>
                  </div>
                </div>
                <div>
                  <a href="#life-events" className="text-primary hover:underline block">重大生活事件的财务准备</a>
                </div>
                <div>
                  <a href="#asset-allocation" className="text-primary hover:underline block">家庭资产配置策略</a>
                </div>
                <div>
                  <a href="#wealth-transfer" className="text-primary hover:underline block">财富传承与遗产规划</a>
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
                  <AccordionTrigger>如何平衡退休储蓄和子女教育投入？</AccordionTrigger>
                  <AccordionContent>
                    <p>平衡退休储蓄和子女教育需要优先考虑退休储蓄，因为子女可以通过奖学金、助学贷款等方式获得教育资金，而退休没有"贷款"选项。建议：1）确保每月至少存入推荐的退休储蓄金额（通常为收入的15-20%）；2）利用税收优惠的教育储蓄账户；3）考虑公立教育选项和奖学金机会；4）教导子女理财知识，鼓励他们通过兼职工作承担部分教育费用；5）避免为子女教育动用退休金或过度借贷。</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>不同年龄段应该如何调整投资组合？</AccordionTrigger>
                  <AccordionContent>
                    <p>投资组合应随年龄变化而调整：年轻时（20-30岁）可以承担更高风险，股票比例可达80-90%，追求长期增长；中年时期（40-50岁）应开始降低风险，股票比例调整至60-70%，增加债券配置；接近退休时（50-60岁）进一步降低风险，股票比例降至40-60%，增加固定收益产品；退休后（65岁以上）以保本和收入为主，股票比例通常控制在20-40%，主要配置稳健型资产。这种调整应考虑个人风险承受能力、财务目标和市场环境，不应机械执行。</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3">
                  <AccordionTrigger>如何评估自己是否有足够的退休储蓄？</AccordionTrigger>
                  <AccordionContent>
                    <p>评估退休储蓄充足性需要几个步骤：1）估算退休后的年度支出（通常为工作期间收入的70-80%）；2）考虑退休后的预期寿命（建议规划至少到90岁）；3）计算社保、养老金等固定收入来源；4）使用"4%提款规则"估算所需资产（年度支出除以4%）；5）考虑通胀因素（长期通胀率约为2-3%）；6）定期重新评估，特别是在重大生活变化后。多数财务顾问建议，退休时的储蓄金额应达到退休前年收入的10-12倍。如果发现差距，可以增加储蓄率、延迟退休或调整退休生活预期。</p>
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
                    <p className="text-xs text-muted-foreground">了解心理因素如何影响财务决策</p>
                  </div>
                </a>
                <a href="/investment-cases" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">投资案例与教训</h3>
                    <p className="text-xs text-muted-foreground">从成功投资者的财务规划中学习</p>
                  </div>
                </a>
                <a href="/insurance" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">保险投资</h3>
                    <p className="text-xs text-muted-foreground">了解保险在财务规划中的重要作用</p>
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
