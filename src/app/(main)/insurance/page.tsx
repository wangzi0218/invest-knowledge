import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function InsurancePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>保险投资</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">保险投资</h1>
        <p className="text-xl text-muted-foreground">
          了解保险作为投资工具的特点、类型及适用场景
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section id="introduction">
            <h2 className="text-2xl font-semibold mb-4">保险作为投资工具</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  保险的主要功能是<strong>风险保障</strong>，但某些类型的保险产品也具有<strong>投资属性</strong>，可以作为投资组合的一部分。保险投资是指通过购买具有储蓄和投资功能的保险产品，在获得风险保障的同时实现资产增值的投资方式。
                </p>
                <p className="mb-4">
                  相比纯粹的投资产品，保险投资具有"保障+投资"的双重特性，既能提供风险保障，又能实现资金的长期稳健增值。这种特性使其成为资产配置中独特的一环，特别适合追求长期稳健回报和风险保障的投资者。
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <h3 className="font-medium mb-2">通俗解释</h3>
                  <p>
                    如果把投资比作种树，那么普通投资就像是单纯种树等待果实；而保险投资则像是在种树的同时，还为树木购买了"树木保险"，即使遇到风雨雷电，也能获得一定的补偿，同时树木仍然可以生长并结出果实。
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="insurance-types">
            <h2 className="text-2xl font-semibold mb-4">具有投资功能的保险类型</h2>
            <Tabs defaultValue="universal" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="universal">万能险</TabsTrigger>
                <TabsTrigger value="investment">投连险</TabsTrigger>
                <TabsTrigger value="whole">终身寿险</TabsTrigger>
              </TabsList>
              <TabsContent value="universal" className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>万能寿险</CardTitle>
                    <CardDescription>
                      兼具保障和投资功能的灵活保险产品
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      万能寿险是一种兼具保障和投资功能的保险产品，其保费分为保障部分和投资账户部分。投资账户部分由保险公司进行投资运作，并根据实际投资收益向保单持有人支付利息。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">主要特点</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>保费灵活，可以根据个人财务状况调整</li>
                          <li>保障与投资分离，透明度较高</li>
                          <li>有最低保证利率，同时可分享超额收益</li>
                          <li>现金价值可以随时部分提取</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">适合人群</h3>
                        <p>
                          适合那些希望在获得保障的同时实现资金稳健增值，且对资金灵活性有一定要求的投资者。特别适合中长期投资规划，可以作为养老金储备的补充。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="investment" className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>投资连结保险</CardTitle>
                    <CardDescription>
                      保险与投资基金相结合的产品
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      投资连结保险（简称投连险）是一种将保险保障与投资账户相结合的保险产品。保单持有人可以选择将保费分配到不同的投资账户中，如股票型、债券型、货币型等，自主决定投资风险和收益。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">主要特点</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>投资自主性强，可选择不同风险等级的投资账户</li>
                          <li>投资收益与市场表现直接相关，没有最低保证收益</li>
                          <li>投资风险由投保人承担</li>
                          <li>可以灵活调整投资组合和保障内容</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">适合人群</h3>
                        <p>
                          适合那些具有一定投资经验和风险承受能力，希望通过保险产品获得较高投资回报的投资者。投资者需要具备基本的金融知识，能够根据市场变化调整投资策略。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="whole" className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>终身寿险</CardTitle>
                    <CardDescription>
                      提供终身保障并具有现金价值累积功能的保险
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      终身寿险提供终身的死亡保障，同时具有现金价值累积功能。保单的现金价值会随着时间增长，形成一种长期的强制储蓄机制，可以在需要时通过保单贷款或部分退保方式使用。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">主要特点</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>提供终身保障，不会因年龄增长而终止</li>
                          <li>保单现金价值稳定增长，具有长期储蓄功能</li>
                          <li>可以通过红利分配方式获得额外收益（分红型）</li>
                          <li>可以作为遗产规划和财富传承的工具</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">适合人群</h3>
                        <p>
                          适合那些重视长期保障和财富传承，希望通过保险产品实现资产稳健增值的投资者。特别适合作为家庭财务规划的基础保障和长期资产配置的一部分。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <section id="pros-cons">
            <h2 className="text-2xl font-semibold mb-4">保险投资的优势与局限</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3">优势</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <div>
                          <strong>双重功能：</strong>同时满足保障需求和投资需求，一举两得。
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <div>
                          <strong>税收优惠：</strong>在某些国家和地区，保险产品享有税收优惠政策。
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <div>
                          <strong>强制储蓄：</strong>通过定期缴费形成强制储蓄机制，培养长期投资习惯。
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <div>
                          <strong>遗产规划：</strong>保险金可以直接传递给受益人，避免遗产税和繁琐的继承程序。
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <div>
                          <strong>债权人保护：</strong>在许多司法管辖区，保险金受法律保护，不受债权人追索。
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">局限</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <div>
                          <strong>流动性较低：</strong>早期退保可能面临较高的退保费用和现金价值损失。
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <div>
                          <strong>收益率可能较低：</strong>相比纯投资产品，保险投资产品的收益率可能较低。
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <div>
                          <strong>费用结构复杂：</strong>保险产品的各种费用可能较高且结构复杂，降低实际回报。
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <div>
                          <strong>产品复杂度高：</strong>保险投资产品条款复杂，普通投资者可能难以完全理解。
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <div>
                          <strong>投资选择有限：</strong>投资选择和调整的灵活性不如直接投资市场。
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-lg mt-6">
                  <h3 className="font-medium mb-2">投资建议</h3>
                  <p>
                    保险投资应该作为整体投资组合的一部分，而非全部。建议先满足基本保障需求，再考虑具有投资功能的保险产品。购买前应充分了解产品特性、费用结构和投资风险，选择与自身风险承受能力和投资目标相匹配的产品。
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="comparison">
            <h2 className="text-2xl font-semibold mb-4">保险投资与其他投资方式的比较</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">比较项</th>
                        <th className="text-left p-2">保险投资</th>
                        <th className="text-left p-2">基金投资</th>
                        <th className="text-left p-2">股票投资</th>
                        <th className="text-left p-2">银行存款</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">风险水平</td>
                        <td className="p-2">低至中等</td>
                        <td className="p-2">低至高（视基金类型）</td>
                        <td className="p-2">中至高</td>
                        <td className="p-2">极低</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">潜在收益</td>
                        <td className="p-2">低至中等</td>
                        <td className="p-2">中至高</td>
                        <td className="p-2">高（波动大）</td>
                        <td className="p-2">低</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">流动性</td>
                        <td className="p-2">低（尤其是早期）</td>
                        <td className="p-2">中至高</td>
                        <td className="p-2">高</td>
                        <td className="p-2">中至高（视存期）</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">保障功能</td>
                        <td className="p-2">有</td>
                        <td className="p-2">无</td>
                        <td className="p-2">无</td>
                        <td className="p-2">无</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">投资期限</td>
                        <td className="p-2">长期（通常5年以上）</td>
                        <td className="p-2">灵活</td>
                        <td className="p-2">灵活</td>
                        <td className="p-2">短期至长期</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">税收优惠</td>
                        <td className="p-2">可能有</td>
                        <td className="p-2">部分有</td>
                        <td className="p-2">部分有</td>
                        <td className="p-2">通常无</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">专业知识要求</td>
                        <td className="p-2">中等</td>
                        <td className="p-2">中等</td>
                        <td className="p-2">高</td>
                        <td className="p-2">低</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <h3 className="font-medium mb-2">通俗解释</h3>
                  <p>
                    如果把各种投资比作交通工具，保险投资就像是一辆配备了安全气囊的家用车，速度不是最快，但安全性高；基金投资像是公共交通，由专业人士驾驶，乘客只需选择路线；股票投资则像是自己驾驶跑车，速度快但风险高；而银行存款则像是慢悠悠的自行车，虽然速度慢，但几乎不会摔倒。
                  </p>
                </div>
              </CardContent>
            </Card>
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
                  <a href="#introduction" className="text-primary hover:underline block">保险作为投资工具</a>
                </div>
                <div>
                  <a href="#insurance-types" className="text-primary hover:underline block">投资类保险产品</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#universal" className="text-muted-foreground hover:text-primary block">万能密险</a>
                    <a href="#investment" className="text-muted-foreground hover:text-primary block">投资连结保险</a>
                    <a href="#whole" className="text-muted-foreground hover:text-primary block">终身密险</a>
                  </div>
                </div>
                <div>
                  <a href="#pros-cons" className="text-primary hover:underline block">优势与局限</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#pros" className="text-muted-foreground hover:text-primary block">保险投资优势</a>
                    <a href="#cons" className="text-muted-foreground hover:text-primary block">保险投资局限</a>
                  </div>
                </div>
                <div>
                  <a href="#comparison" className="text-primary hover:underline block">与其他投资的比较</a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 常见问题 */}
          <Card>
            <CardHeader>
              <CardTitle>常见问题</CardTitle>
            </CardHeader>
            <CardContent id="faq">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>保险投资适合作为主要投资方式吗？</AccordionTrigger>
                  <AccordionContent>
                    <p>保险投资通常不适合作为主要投资方式，而应该是整体投资组合的一部分。</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>先建立应急基金，满足基本保障需求</li>
                      <li>然后考虑分散投资于不同类型的资产</li>
                      <li>保险投资产品可作为稳健资产的一部分</li>
                    </ul>
                    <p className="mt-2">保险投资的主要价值在于提供风险保障的同时实现资金稳健增值，适合作为长期财务规划的组成部分。</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>购买保险投资产品需要注意什么？</AccordionTrigger>
                  <AccordionContent>
                    <p>购买保险投资产品需要注意以下几点：</p>
                    <ol className="list-decimal pl-5 space-y-1 mt-2">
                      <li>明确自己的保障需求和投资目标</li>
                      <li>仔细了解产品的保障内容、投资机制和费用结构</li>
                      <li>评估产品的流动性和退保条件</li>
                      <li>了解产品的历史收益情况，但不要将其作为未来收益的保证</li>
                      <li>选择资质良好、服务完善的保险公司</li>
                      <li>自己研读保险条款，不要仅听信销售人员的介绍</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>保险投资产品的收益是否有保证？</AccordionTrigger>
                  <AccordionContent>
                    这取决于具体的保险产品类型。万能险通常有最低保证利率，但实际收益可能高于保证利率；投连险的收益完全取决于所选投资账户的市场表现，没有保证收益；分红型终身寿险有保证的现金价值增长，但分红部分是非保证的。投资者应该根据自己的风险偏好选择适合的产品，并且理解"保证"与"非保证"部分的区别。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>保险投资产品如何纳入整体资产配置？</AccordionTrigger>
                  <AccordionContent>
                    在整体资产配置中，保险投资产品通常被视为低风险资产的一部分，可以与高风险投资（如股票）形成互补。具体配置比例应根据个人年龄、风险承受能力、财务目标和时间跨度来决定。年轻投资者可能将较小比例配置于保险投资，而接近退休的投资者可能会增加保险投资的比重。保险投资特别适合作为长期目标（如养老、子女教育）的资金储备。
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
                <a href="/financial-products" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">理财产品</h3>
                    <p className="text-xs text-muted-foreground">了解各类金融产品的分类与特点</p>
                  </div>
                </a>
                <a href="/funds" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">基金</h3>
                    <p className="text-xs text-muted-foreground">探索不同类型的基金产品与投资策略</p>
                  </div>
                </a>
                <a href="/regulations" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">监管与规则</h3>
                    <p className="text-xs text-muted-foreground">了解保险产品的监管政策与法规</p>
                  </div>
                </a>
                <a href="/product-management" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">产品经理视角</h3>
                    <p className="text-xs text-muted-foreground">从产品设计角度理解保险投资产品</p>
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
