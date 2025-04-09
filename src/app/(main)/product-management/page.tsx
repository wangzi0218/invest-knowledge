import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ProductManagementPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>产品经理视角</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">产品经理视角</h1>
        <p className="text-xl text-muted-foreground">
          从产品经理视角看信息服务在投资中的价值与用户体验
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">信息服务在投资中的价值</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  在投资市场中，<strong>信息是最宝贵的资源之一</strong>。投资者需要及时、准确、全面的信息来做出明智的投资决策。作为产品经理，我们需要理解信息服务如何为投资者创造价值，并设计出满足用户需求的产品。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">降低信息不对称</h3>
                    <p>
                      投资市场存在天然的信息不对称，优质的信息服务可以帮助普通投资者获取更多市场信息，减少与专业机构之间的信息差距。
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">提高决策效率</h3>
                    <p>
                      通过整合和分析海量数据，信息服务可以帮助投资者快速获取关键信息，提高决策效率，把握市场机会。
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">降低投资风险</h3>
                    <p>
                      全面的信息分析和风险提示可以帮助投资者识别潜在风险，做好风险管理，避免盲目投资。
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">提升投资体验</h3>
                    <p>
                      良好的信息服务不仅提供数据，还能提供知识和洞见，帮助投资者学习成长，提升整体投资体验。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">投资产品的用户体验设计</h2>
            <Tabs defaultValue="principles" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="principles">设计原则</TabsTrigger>
                <TabsTrigger value="elements">核心要素</TabsTrigger>
                <TabsTrigger value="cases">案例分析</TabsTrigger>
              </TabsList>
              <TabsContent value="principles" className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>投资产品设计原则</CardTitle>
                    <CardDescription>
                      打造优质投资产品体验的关键原则
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li>
                        <strong>简洁明了：</strong>投资信息通常较为复杂，产品设计应追求简洁明了，避免信息过载，帮助用户快速获取关键信息。
                      </li>
                      <li>
                        <strong>层级清晰：</strong>信息应有明确的层级结构，从概览到详情，让用户可以根据需要深入了解。
                      </li>
                      <li>
                        <strong>个性化定制：</strong>不同投资者有不同的需求和偏好，产品应支持个性化设置，提供定制化的信息服务。
                      </li>
                      <li>
                        <strong>及时响应：</strong>投资市场瞬息万变，产品应能及时更新信息，并在关键时刻向用户推送重要提醒。
                      </li>
                      <li>
                        <strong>可靠安全：</strong>投资涉及资金安全，产品必须保证数据准确性和系统安全性，建立用户信任。
                      </li>
                    </ul>
                    <div className="bg-muted p-4 rounded-lg mt-4">
                      <h3 className="font-medium mb-2">设计思考</h3>
                      <p>
                        在设计投资产品时，我们需要平衡专业性与易用性。产品既要满足专业投资者的深度需求，又要照顾普通投资者的使用门槛，这需要精心的信息架构和交互设计。
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="elements" className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>投资产品核心要素</CardTitle>
                    <CardDescription>
                      构成优质投资产品的关键组成部分
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">数据可视化</h3>
                        <p>
                          通过图表、仪表盘等方式，将复杂的金融数据转化为直观易懂的视觉呈现，帮助用户快速理解市场趋势和投资表现。
                        </p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">实时资讯</h3>
                        <p>
                          提供市场动态、公司新闻、政策变化等实时信息，帮助投资者及时了解影响投资决策的关键因素。
                        </p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">分析工具</h3>
                        <p>
                          提供技术分析、基本面分析等工具，帮助投资者进行深入研究和分析，支持专业投资决策。
                        </p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">个性化推荐</h3>
                        <p>
                          基于用户的投资偏好、风险承受能力和历史行为，提供个性化的投资建议和内容推荐。
                        </p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">社区互动</h3>
                        <p>
                          构建投资者社区，促进用户之间的交流和分享，形成良性的信息生态和社交体验。
                        </p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">教育内容</h3>
                        <p>
                          提供投资知识、市场解读、策略分析等教育内容，帮助用户提升投资素养和能力。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="cases" className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>投资产品案例分析</CardTitle>
                    <CardDescription>
                      优秀投资信息产品的设计亮点
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">案例一：专业投资终端</h3>
                        <p className="mb-3">
                          以彭博终端(Bloomberg Terminal)为代表的专业投资终端，提供全面的市场数据、分析工具和新闻资讯。
                        </p>
                        <div className="bg-muted p-3 rounded">
                          <h4 className="font-medium mb-1">设计亮点</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>高度可定制的界面，满足不同专业用户的需求</li>
                            <li>强大的数据分析能力，支持复杂的投资决策</li>
                            <li>整合多种信息源，提供一站式服务体验</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">案例二：移动投资应用</h3>
                        <p className="mb-3">
                          以Robinhood等为代表的移动投资应用，通过简洁的界面和流畅的体验，降低了投资的门槛。
                        </p>
                        <div className="bg-muted p-3 rounded">
                          <h4 className="font-medium mb-1">设计亮点</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>简洁直观的界面设计，降低学习成本</li>
                            <li>精简的信息展示，突出关键数据</li>
                            <li>流畅的交易流程，提升用户体验</li>
                            <li>社区功能的整合，增强用户粘性</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">案例三：投资教育平台</h3>
                        <p className="mb-3">
                          以Investopedia等为代表的投资教育平台，通过丰富的教育内容帮助用户提升投资知识。
                        </p>
                        <div className="bg-muted p-3 rounded">
                          <h4 className="font-medium mb-1">设计亮点</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>系统化的知识结构，从基础到进阶</li>
                            <li>多样化的内容形式，包括文章、视频、模拟交易等</li>
                            <li>个性化的学习路径，适应不同用户需求</li>
                            <li>将理论与实践相结合，提升学习效果</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">信息服务与交易产品的互生关系</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  在投资生态中，信息服务与交易产品存在密切的互生关系。优质的信息服务可以促进交易决策，而交易行为又会产生新的数据和需求，推动信息服务的发展。
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <h3 className="font-medium mb-2">互生关系模型</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>信息驱动交易：</strong>投资者基于获取的信息做出交易决策，信息质量直接影响交易行为。
                    </li>
                    <li>
                      <strong>交易产生数据：</strong>交易行为产生市场数据，这些数据又成为新的信息源。
                    </li>
                    <li>
                      <strong>用户需求演化：</strong>随着交易经验的积累，用户对信息的需求会不断演化和提升。
                    </li>
                    <li>
                      <strong>产品融合趋势：</strong>信息服务与交易功能逐渐融合，形成一站式投资平台。
                    </li>
                  </ul>
                </div>
                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium mb-3">产品经理的思考</h3>
                  <p className="mb-3">
                    作为投资产品的产品经理，我们需要思考如何优化这种互生关系，创造更好的用户价值：
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <strong>无缝集成：</strong>将信息获取与交易执行无缝集成，减少用户在不同平台间的切换成本。
                    </li>
                    <li>
                      <strong>智能推荐：</strong>基于用户的交易行为和偏好，提供个性化的信息推荐。
                    </li>
                    <li>
                      <strong>闭环优化：</strong>通过分析交易结果，不断优化信息服务的质量和相关性。
                    </li>
                    <li>
                      <strong>价值平衡：</strong>在商业模式设计中，平衡信息服务与交易服务的价值贡献。
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">未来趋势：AI与大数据在投资信息服务中的应用</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  随着技术的发展，AI与大数据正在深刻改变投资信息服务的形态和能力。作为产品经理，我们需要把握这些技术趋势，设计出更智能、更个性化的投资产品。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="border p-4 rounded-lg">
                    <h3 className="font-medium mb-2">智能数据分析</h3>
                    <p>
                      AI可以处理和分析海量的市场数据，从中发现人类难以察觉的模式和趋势，为投资决策提供更深入的洞察。
                    </p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h3 className="font-medium mb-2">自然语言处理</h3>
                    <p>
                      NLP技术可以分析新闻、研报、社交媒体等非结构化数据，评估市场情绪，预测可能的市场走向。
                    </p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h3 className="font-medium mb-2">个性化推荐</h3>
                    <p>
                      基于用户画像和行为数据，AI可以提供高度个性化的内容和投资建议，提升用户体验和决策质量。
                    </p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h3 className="font-medium mb-2">智能风险管理</h3>
                    <p>
                      AI可以实时监控市场风险，识别潜在的风险因素，并向用户提供及时的风险提示和应对建议。
                    </p>
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">产品经理的机遇与挑战</h3>
                  <p className="mb-3">
                    AI与大数据为投资产品带来了新的机遇，但也面临一系列挑战：
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>技术与体验平衡：</strong>如何在应用先进技术的同时，保持产品的易用性和人性化。
                    </li>
                    <li>
                      <strong>数据隐私保护：</strong>在收集和利用用户数据时，如何保护用户隐私和数据安全。
                    </li>
                    <li>
                      <strong>算法透明度：</strong>如何提高AI决策的透明度和可解释性，建立用户信任。
                    </li>
                    <li>
                      <strong>人机协作：</strong>如何设计人机协作的模式，让AI成为用户的得力助手而非黑盒决策者。
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>产品经理思考点</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>如何平衡专业性与易用性？</AccordionTrigger>
                  <AccordionContent>
                    投资产品需要同时满足专业用户和普通用户的需求。可以采用渐进式披露的设计方法，基础信息简洁直观，专业信息触手可及；或者提供不同的用户模式，让用户根据自身需求选择界面复杂度。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>如何提升信息的可信度？</AccordionTrigger>
                  <AccordionContent>
                    投资决策高度依赖信息可信度。产品设计中应明确信息来源，提供数据更新时间，区分事实与观点，多角度验证关键信息，并建立用户反馈机制，不断优化信息质量。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>如何设计有效的风险提示？</AccordionTrigger>
                  <AccordionContent>
                    风险提示应当醒目但不干扰，内容具体而非笼统，时机恰当而非滞后。可以采用分级风险提示，根据风险程度调整提示强度；同时提供风险背景解释和可能的应对方案，帮助用户做出明智决策。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>如何衡量信息服务的价值？</AccordionTrigger>
                  <AccordionContent>
                    信息服务的价值可以从多维度衡量：用户决策质量的提升、用户满意度和忠诚度、用户愿意支付的价格、用户使用频率和深度等。产品经理需要设计合适的指标体系，持续评估和优化信息服务的价值创造。
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
              <ul className="space-y-2">
                <li>
                  <a href="/primary-market" className="text-primary hover:underline">
                    一级市场
                  </a>
                </li>
                <li>
                  <a href="/secondary-market" className="text-primary hover:underline">
                    二级市场
                  </a>
                </li>
                <li>
                  <a href="/regulations" className="text-primary hover:underline">
                    监管与规则
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
