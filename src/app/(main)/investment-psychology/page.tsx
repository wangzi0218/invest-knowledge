"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { StickySidebar } from "@/components/ui-custom/knowledge-page";
import { cn } from "@/lib/utils";

export default function InvestmentPsychologyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>投资心理学</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">投资心理学与行为金融学</h1>
        <p className="text-xl text-muted-foreground">
          了解投资心理偏误、情绪影响与行为金融学，培养健康的投资心态
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">        
        <div className="lg:col-span-2 space-y-8">
        
        {/* 投资心理学基础 */}
        <section className="space-y-4" id="basics">
          <h2 className="text-2xl font-bold tracking-tight">投资心理学基础</h2>
          <p className="text-muted-foreground">
            投资心理学研究投资者在决策过程中的心理因素和行为模式，探索这些因素如何影响投资结果。
            虽然传统金融理论假设投资者是完全理性的，但现实中，人类的决策常常受到情绪、认知偏误和社会影响等非理性因素的干扰。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>理性与非理性决策</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>理性决策</strong>：基于完整信息和逻辑分析</li>
                  <li><strong>非理性决策</strong>：受情绪和心理偏误影响</li>
                  <li><strong>有限理性</strong>：在有限信息和认知能力下的决策</li>
                  <li><strong>启发式思维</strong>：使用思维捷径做出快速判断</li>
                  <li><strong>系统思维</strong>：慢速、分析性、理性的思考过程</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>心理因素对投资的影响</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>过度自信</strong>：高估自己的判断能力和预测准确性</li>
                  <li><strong>损失厌恶</strong>：对亏损的痛苦感大于对等额收益的喜悦</li>
                  <li><strong>从众心理</strong>：跟随大众行为而非独立思考</li>
                  <li><strong>锚定效应</strong>：过度依赖首先获得的信息</li>
                  <li><strong>可得性偏误</strong>：基于容易想到的信息做决策</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 常见投资心理偏误 */}
        <section className="space-y-4 mt-8" id="biases">
          <h2 className="text-2xl font-bold tracking-tight">常见投资心理偏误</h2>
          <p className="text-muted-foreground">
            投资者常常受到各种心理偏误的影响，这些偏误可能导致非理性的投资决策和次优的投资结果。
            识别并理解这些偏误是提高投资决策质量的第一步。
          </p>

          <Tabs defaultValue="loss-aversion" className="mt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="loss-aversion">损失厌恶</TabsTrigger>
              <TabsTrigger value="herding">从众心理</TabsTrigger>
              <TabsTrigger value="overconfidence">过度自信</TabsTrigger>
            </TabsList>
            
            <TabsContent value="loss-aversion" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">损失厌恶</h3>
              <p className="mb-4">
                损失厌恶是指人们对亏损的痛苦感远大于对等额收益的喜悦感。研究表明，亏损的心理影响约为同等收益的2-2.5倍。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">表现形式：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>持有亏损股票过长时间，希望"解套"</li>
                    <li>过早卖出盈利股票，害怕利润回吐</li>
                    <li>在亏损后采取更高风险的投资策略试图"翻本"</li>
                    <li>过度关注短期波动而忽视长期价值</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">应对策略：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>制定明确的买入和卖出规则，并严格执行</li>
                    <li>使用止损策略限制单笔投资的最大亏损</li>
                    <li>定期重新评估投资，基于当前价值而非购买价格做决策</li>
                    <li>培养长期投资思维，减少对短期波动的关注</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="herding" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">从众心理</h3>
              <p className="mb-4">
                从众心理是指人们倾向于模仿他人的行为，尤其是在不确定性高的情况下。在投资中，这表现为跟随市场趋势或其他投资者的决策，而非基于独立分析。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">表现形式：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>追涨杀跌，在市场高点买入，低点卖出</li>
                    <li>投资热门行业或"明星股"，而忽视基本面分析</li>
                    <li>过度关注媒体报道和市场情绪</li>
                    <li>害怕错过（FOMO），在资产价格快速上涨时盲目跟风</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">应对策略：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>培养独立思考能力，建立自己的投资分析框架</li>
                    <li>关注基本面和价值，而非短期价格走势</li>
                    <li>制定投资计划并坚持执行，不受市场情绪影响</li>
                    <li>逆向思考，在市场恐慌时考虑买入，在市场狂热时保持谨慎</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="overconfidence" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">过度自信</h3>
              <p className="mb-4">
                过度自信是指投资者高估自己的知识、能力和预测准确性。研究表明，大多数人认为自己的判断和技能高于平均水平，这在投资领域尤为明显。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">表现形式：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>过度交易，频繁买卖证券</li>
                    <li>投资组合过度集中，缺乏多元化</li>
                    <li>忽视风险，过度使用杠杆</li>
                    <li>对市场走势做出过于精确的预测</li>
                    <li>低估不确定性和未知因素的影响</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">应对策略：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>记录并回顾过去的投资决策及其结果</li>
                    <li>考虑多种可能的情景，包括最坏情况</li>
                    <li>寻求不同观点，特别是与自己相反的观点</li>
                    <li>适当分散投资，不将"所有鸡蛋放在一个篮子里"</li>
                    <li>设定明确的风险限制，并严格遵守</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* 情绪与投资决策 */}
        <section className="space-y-4 mt-8" id="emotions">
          <h2 className="text-2xl font-bold tracking-tight">情绪与投资决策</h2>
          <p className="text-muted-foreground">
            情绪是投资决策中的重要因素，无论是恐惧、贪婪、希望还是后悔，都会显著影响投资行为和结果。
            了解情绪如何影响决策过程，可以帮助投资者在市场波动时保持冷静和理性。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>主要情绪及其影响</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>恐惧</strong>：导致过度保守、错失机会、在市场低点卖出</li>
                  <li><strong>贪婪</strong>：引发过度冒险、忽视风险信号、追逐热门投资</li>
                  <li><strong>希望</strong>：可能导致不切实际的乐观和对亏损投资的过度持有</li>
                  <li><strong>后悔</strong>：影响未来决策，导致过度交易或犹豫不决</li>
                  <li><strong>兴奋</strong>：可能导致冲动决策和对风险的低估</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>情绪管理策略</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>情绪识别</strong>：培养觉察自身情绪状态的能力</li>
                  <li><strong>决策延迟</strong>：在强烈情绪状态下，推迟重要投资决策</li>
                  <li><strong>预设规则</strong>：制定投资规则，减少情绪化决策的空间</li>
                  <li><strong>情境模拟</strong>：提前设想不同市场情境下的情绪反应</li>
                  <li><strong>记录与反思</strong>：记录情绪与决策，定期回顾和学习</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 行为金融学的关键发现 */}
        <section className="space-y-4 mt-8" id="behavioral-finance">
          <h2 className="text-2xl font-bold tracking-tight">行为金融学的关键发现</h2>
          <p className="text-muted-foreground">
            行为金融学是研究投资者心理和行为如何影响金融市场的学科，它挑战了传统金融理论中关于投资者完全理性的假设。
            这一领域的研究成果帮助我们更好地理解市场异常现象和投资者决策过程。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>市场异常与行为解释</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>价值溢价</strong>：低估值股票长期表现优于高估值股票，可能源于投资者对成长的过度乐观</li>
                  <li><strong>动量效应</strong>：价格趋势往往短期内持续，反映了投资者对新信息的反应不足和从众行为</li>
                  <li><strong>过度波动</strong>：市场价格波动超过基本面变化所能解释的范围，反映了投资者情绪的影响</li>
                  <li><strong>季节性异常</strong>：如一月效应、周末效应等，部分归因于投资者的行为模式</li>
                  <li><strong>IPO异常</strong>：新股上市后的长期表现往往不佳，反映了投资者的过度乐观</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>前沿研究与应用</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>神经金融学</strong>：研究大脑活动与投资决策的关系，揭示决策的神经基础</li>
                  <li><strong>社会影响研究</strong>：探索社交媒体、同伴压力等社会因素对投资行为的影响</li>
                  <li><strong>行为投资组合理论</strong>：将行为因素纳入投资组合构建过程</li>
                  <li><strong>行为经济学干预</strong>：设计“助推”策略帮助投资者做出更好的决策</li>
                  <li><strong>情绪分析</strong>：利用自然语言处理等技术分析市场情绪，预测市场走势</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 构建健康投资心态 */}
        <section className="space-y-4 mt-8" id="healthy-mindset">
          <h2 className="text-2xl font-bold tracking-tight">构建健康投资心态</h2>
          <p className="text-muted-foreground">
            健康的投资心态是长期投资成功的关键。它不仅帮助投资者在市场波动时保持冷静，还能促使更理性、系统化的决策过程。
            培养健康投资心态需要自我认知、持续学习和实践。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>健康投资心态的特征</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>长期视角</strong>：关注长期目标，不被短期波动干扰</li>
                  <li><strong>过程导向</strong>：重视投资过程和决策质量，而非仅关注结果</li>
                  <li><strong>自我觉察</strong>：了解自己的心理偏误和情绪触发点</li>
                  <li><strong>适度自信</strong>：既不过度自信，也不过度怀疑自己</li>
                  <li><strong>持续学习</strong>：保持好奇心，愿意从错误中学习和调整</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>培养健康投资心态的方法</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>投资日志</strong>：记录决策过程、理由和情绪状态</li>
                  <li><strong>明确目标</strong>：设定具体、可衡量、有时限的投资目标</li>
                  <li><strong>系统化流程</strong>：建立一套个人投资流程和规则</li>
                  <li><strong>定期反思</strong>：回顾和分析投资决策，无论成功还是失败</li>
                  <li><strong>寻求反馈</strong>：与其他投资者交流，获取不同视角</li>
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
                  <a href="#basics" className="text-primary hover:underline block">投资心理学基础</a>
                </div>
                <div>
                  <a href="#biases" className="text-primary hover:underline block">常见投资心理偏误</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#" className="text-muted-foreground hover:text-primary block">损失厌恶</a>
                    <a href="#" className="text-muted-foreground hover:text-primary block">从众心理</a>
                    <a href="#" className="text-muted-foreground hover:text-primary block">过度自信</a>
                  </div>
                </div>
                <div>
                  <a href="#emotions" className="text-primary hover:underline block">情绪与投资决策</a>
                </div>
                <div>
                  <a href="#behavioral-finance" className="text-primary hover:underline block">行为金融学的关键发现</a>
                </div>
                <div>
                  <a href="#healthy-mindset" className="text-primary hover:underline block">构建健康投资心态</a>
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
                  <AccordionTrigger>如何克服恐惧情绪进行投资？</AccordionTrigger>
                  <AccordionContent>
                    <p>克服投资恐惧需要几个步骤：首先，通过学习增加投资知识，减少未知带来的恐惧；其次，从小额开始，逐步积累经验和信心；第三，制定明确的投资计划和风险管理策略；最后，培养长期投资思维，减少对短期波动的过度关注。记住，适度的谨慎是健康的，但过度恐惧可能导致错失重要的投资机会。</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>为什么知道投资心理学仍难以改变行为？</AccordionTrigger>
                  <AccordionContent>
                    <p>知识与行为之间存在差距是因为：1）情绪反应往往是自动和潜意识的，难以通过理性思考完全控制；2）在压力和不确定性下，人们容易回归到直觉和习惯性反应；3）认知偏误深植于我们的思维方式中，需要持续的自我觉察和练习才能改变。改变投资行为需要建立系统和规则，创造环境提示，并通过反复练习形成新的习惯。</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3">
                  <AccordionTrigger>市场情绪如何影响股价走势？</AccordionTrigger>
                  <AccordionContent>
                    <p>市场情绪通过多种方式影响股价：1）恐慌和贪婪可导致价格大幅偏离基本面价值；2）情绪驱动的交易形成自我强化的循环，加剧市场波动；3）投资者情绪会影响风险偏好，进而影响资产配置决策；4）市场情绪指标（如VIX恐慌指数）有时可作为反向指标，极端恐慌可能预示市场底部，而极端贪婪可能预示市场顶部。理解市场情绪可以帮助投资者在市场非理性时保持冷静。</p>
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
                <a href="/investment-cases" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">投资案例与教训</h3>
                    <p className="text-xs text-muted-foreground">学习成功投资者的经验和历史教训</p>
                  </div>
                </a>
                <a href="/financial-planning" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">投资与财务规划</h3>
                    <p className="text-xs text-muted-foreground">了解如何将投资融入全生命周期财务规划</p>
                  </div>
                </a>
                <a href="/global-perspective" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">全球投资视角</h3>
                    <p className="text-xs text-muted-foreground">探索不同文化背景下的投资心理差异</p>
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
