"use client";

import React from "react";
import { StickySidebar } from "@/components/ui-custom/knowledge-page";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

export default function PrimaryMarketPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>一级市场</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">一级市场</h1>
        <p className="text-xl text-muted-foreground">
          了解一级市场的基本概念、特点及运作机制
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8" id="main-content">
          <section id="definition">
            <h2 className="text-2xl font-semibold mb-4">什么是一级市场？</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  <strong>一级市场</strong>（Primary Market）是指企业首次发行证券并向投资者出售的市场，也称为<strong>发行市场</strong>。在一级市场中，证券的买卖双方是发行人（如公司、政府）和投资者，发行人通过发行证券直接从投资者那里筹集资金。
                </p>
                <p className="mb-4">
                  一级市场是企业获取长期资金的重要渠道，也是投资者参与企业初始投资的主要途径。通过一级市场，企业可以获得发展所需的资金，而投资者则有机会在企业早期阶段参与投资。
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <h3 className="font-medium mb-2">通俗解释</h3>
                  <p>
                    想象一下，一级市场就像是一个"新车直销市场"，企业（汽车制造商）直接向消费者（投资者）销售全新的汽车（证券），消费者支付的钱直接进入制造商的口袋。这是汽车第一次被出售，因此称为"一级市场"。
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="features">
            <h2 className="text-2xl font-semibold mb-4">一级市场的主要特点</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li>
                    <strong>直接融资：</strong>发行人直接从投资者那里获取资金，没有中间交易环节。
                  </li>
                  <li>
                    <strong>首次交易：</strong>证券在此市场首次被出售，之后的交易将在二级市场进行。
                  </li>
                  <li>
                    <strong>价格确定：</strong>证券的发行价格通常由发行人与承销商共同确定，而非由市场供需决定。
                  </li>
                  <li>
                    <strong>资金流向：</strong>投资者支付的资金直接流向发行人，用于企业发展。
                  </li>
                  <li>
                    <strong>参与限制：</strong>一级市场的参与者通常受到一定限制，不是所有投资者都能参与。
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section id="types">
            <h2 className="text-2xl font-semibold mb-4">一级市场的主要类型</h2>
            <Tabs defaultValue="ipo" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="ipo">IPO</TabsTrigger>
                <TabsTrigger value="private">私募融资</TabsTrigger>
                <TabsTrigger value="bond">债券发行</TabsTrigger>
              </TabsList>
              <TabsContent value="ipo" className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>首次公开募股 (IPO)</CardTitle>
                    <CardDescription>
                      公司首次向公众投资者发行股票的过程
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      IPO是公司首次向公众发行股票并在证券交易所上市的过程。通过IPO，私营公司转变为公众公司，允许公众投资者购买公司股份。
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-medium mb-2">IPO流程示例</h3>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>公司聘请投资银行作为承销商</li>
                        <li>准备招股说明书，披露公司详细信息</li>
                        <li>向证监会提交上市申请并获批</li>
                        <li>路演推介，吸引潜在投资者</li>
                        <li>确定发行价格和发行规模</li>
                        <li>正式发行股票，投资者认购</li>
                        <li>在证券交易所上市交易</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="private" className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>私募融资</CardTitle>
                    <CardDescription>
                      向特定投资者非公开发行证券的融资方式
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      私募融资是指公司向特定的合格投资者非公开发行证券进行融资的方式。相比IPO，私募融资的监管要求较低，流程更为简化，但参与者受到限制。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">私募股权融资</h3>
                        <p>
                          公司向私募股权基金、风险投资机构等专业投资者出售股权，获取发展资金。常见于初创企业和成长期企业。
                        </p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">私募债券融资</h3>
                        <p>
                          公司向特定投资者非公开发行债券进行融资，投资者获得固定收益回报。适合稳定经营但不想稀释股权的企业。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="bond" className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>债券发行</CardTitle>
                    <CardDescription>
                      企业或政府发行债券筹集资金的方式
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      债券发行是企业或政府通过发行债券向投资者借款的融资方式。债券持有人成为发行方的债权人，有权按约定获得本金和利息，但不享有所有权。
                    </p>
                    <div className="bg-muted p-4 rounded-lg mb-4">
                      <h3 className="font-medium mb-2">主要债券类型</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>政府债券：由中央或地方政府发行，信用等级最高</li>
                        <li>企业债券：由企业发行，风险和收益通常高于政府债券</li>
                        <li>可转换债券：可以转换为发行公司股票的债券</li>
                        <li>金融债券：由金融机构发行的债券</li>
                      </ul>
                    </div>
                    <p>
                      债券发行为企业和政府提供了一种不稀释所有权的融资方式，同时为投资者提供了相对稳定的收益选择。
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <section id="comparison">
            <h2 className="text-2xl font-semibold mb-4">一级市场与二级市场的区别</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">比较项</th>
                        <th className="text-left p-2">一级市场</th>
                        <th className="text-left p-2">二级市场</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">交易对象</td>
                        <td className="p-2">发行人与投资者</td>
                        <td className="p-2">投资者之间</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">资金流向</td>
                        <td className="p-2">流向发行人</td>
                        <td className="p-2">投资者之间转移</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">价格形成</td>
                        <td className="p-2">发行人与承销商确定</td>
                        <td className="p-2">市场供需决定</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">交易频率</td>
                        <td className="p-2">一次性</td>
                        <td className="p-2">持续交易</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">参与限制</td>
                        <td className="p-2">较多限制</td>
                        <td className="p-2">较少限制</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">主要功能</td>
                        <td className="p-2">企业融资</td>
                        <td className="p-2">提供流动性</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <h3 className="font-medium mb-2">通俗解释</h3>
                  <p>
                    如果把证券比作汽车，一级市场就是汽车制造商直接向消费者销售全新汽车的市场，钱直接进入制造商口袋；而二级市场则是二手车市场，消费者之间交易已经使用过的汽车，钱在消费者之间流转，制造商不再参与交易。
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="participants">
            <h2 className="text-2xl font-semibold mb-4">一级市场的主要参与者</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>发行人</CardTitle>
                  <CardDescription>证券的发行主体</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    发行人是证券的发行主体，可以是企业、政府或其他机构，通过发行证券筹集资金用于业务发展、项目建设或债务重组等。
                  </p>
                  <div className="bg-muted p-3 rounded-lg">
                    <h3 className="font-medium mb-2">主要职责</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>准备发行文件和披露材料</li>
                      <li>配合中介机构进行尽职调查</li>
                      <li>参与路演和投资者沟通</li>
                      <li>遵守信息披露规定</li>
                      <li>履行募集资金使用承诺</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>承销商</CardTitle>
                  <CardDescription>证券发行的中介机构</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    承销商通常是投资银行或证券公司，作为发行人与投资者之间的桥梁，负责证券发行的组织、推广和销售工作。
                  </p>
                  <div className="bg-muted p-3 rounded-lg">
                    <h3 className="font-medium mb-2">主要职责</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>协助发行人设计发行方案</li>
                      <li>进行尽职调查和风险评估</li>
                      <li>为证券定价提供专业建议</li>
                      <li>组织路演和推介活动</li>
                      <li>包销或代销证券</li>
                      <li>提供发行后的市场支持</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>投资者</CardTitle>
                  <CardDescription>证券的购买者</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    投资者是证券的购买者，通过认购新发行的证券获得所有权或债权，可以是机构投资者或个人投资者。
                  </p>
                  <div className="bg-muted p-3 rounded-lg">
                    <h3 className="font-medium mb-2">主要类型</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>机构投资者</strong>：基金、保险公司、养老金等</li>
                      <li><strong>合格投资者</strong>：符合特定资质的高净值个人</li>
                      <li><strong>散户投资者</strong>：普通个人投资者</li>
                      <li><strong>战略投资者</strong>：与发行人有战略合作关系的投资者</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="process" className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">一级市场的融资流程</h2>
            <Card>
              <CardContent className="pt-6">
                <StickySidebar className="space-y-6">
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted-foreground/20"></div>
                    <ol className="space-y-6 relative">
                      <li className="pl-10 relative">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">1</div>
                        <h3 className="text-lg font-medium mb-2">准备阶段</h3>
                        <p className="text-muted-foreground mb-2">发行人内部决策并开始准备发行工作</p>
                        <div className="bg-muted p-3 rounded-lg">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>公司内部决策（董事会、股东大会批准）</li>
                            <li>选择承销商和其他中介机构</li>
                            <li>签署承销协议和其他服务协议</li>
                            <li>制定初步发行方案</li>
                          </ul>
                        </div>
                      </li>

                      <li className="pl-10 relative">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">2</div>
                        <h3 className="text-lg font-medium mb-2">尽职调查与文件准备</h3>
                        <p className="text-muted-foreground mb-2">中介机构对发行人进行尽职调查，准备发行文件</p>
                        <div className="bg-muted p-3 rounded-lg">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>承销商、律师、会计师等进行尽职调查</li>
                            <li>准备招股说明书、发行公告等文件</li>
                            <li>完成财务审计和法律尽调</li>
                            <li>制定详细发行方案和时间表</li>
                          </ul>
                        </div>
                      </li>

                      <li className="pl-10 relative">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">3</div>
                        <h3 className="text-lg font-medium mb-2">监管审批</h3>
                        <p className="text-muted-foreground mb-2">向监管机构提交申请并获得批准</p>
                        <div className="bg-muted p-3 rounded-lg">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>向证监会或其他监管机构提交申请材料</li>
                            <li>回答监管机构反馈意见</li>
                            <li>根据需要修改发行文件</li>
                            <li>获得发行批准</li>
                          </ul>
                        </div>
                      </li>

                      <li className="pl-10 relative">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">4</div>
                        <h3 className="text-lg font-medium mb-2">发行前准备与路演</h3>
                        <p className="text-muted-foreground mb-2">确定发行细节并向潜在投资者推介</p>
                        <div className="bg-muted p-3 rounded-lg">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>确定发行价格区间（IPO）或利率（债券）</li>
                            <li>组织路演和投资者推介会</li>
                            <li>收集投资者意向</li>
                            <li>完成发行前的准备工作</li>
                          </ul>
                        </div>
                      </li>

                      <li className="pl-10 relative">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">5</div>
                        <h3 className="text-lg font-medium mb-2">发行与认购</h3>
                        <p className="text-muted-foreground mb-2">正式发行证券并接受投资者认购</p>
                        <div className="bg-muted p-3 rounded-lg">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>确定最终发行价格和规模</li>
                            <li>公布发行公告</li>
                            <li>投资者申购和缴款</li>
                            <li>承销商包销未售出部分（如有）</li>
                          </ul>
                        </div>
                      </li>

                      <li className="pl-10 relative">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">6</div>
                        <h3 className="text-lg font-medium mb-2">发行后工作</h3>
                        <p className="text-muted-foreground mb-2">完成发行后的各项工作</p>
                        <div className="bg-muted p-3 rounded-lg">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>办理证券登记和托管手续</li>
                            <li>安排在证券交易所上市（如适用）</li>
                            <li>发行人履行信息披露义务</li>
                            <li>承销商提供市场支持和稳定价格服务</li>
                          </ul>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className="bg-muted p-4 rounded-lg mt-6">
                    <h3 className="font-medium mb-2">不同类型证券发行流程的差异</h3>
                    <p className="mb-2">虽然一级市场融资的基本流程相似，但不同类型证券在具体流程上存在差异：</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>IPO</strong>：流程最为复杂，监管审核严格，时间周期长</li>
                      <li><strong>私募股权</strong>：监管相对宽松，流程简化，主要面向特定投资者</li>
                      <li><strong>债券发行</strong>：根据债券类型不同，审批流程和要求各异</li>
                      <li><strong>定向增发</strong>：上市公司再融资方式，流程比IPO简化</li>
                    </ul>
                  </div>
                </StickySidebar>
              </CardContent>
            </Card>
          </section>
        </div>
        
        {/* 右侧边栏 */}
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
                  <a href="#definition" className="text-primary hover:underline block">什么是一级市场？</a>
                </div>
                <div>
                  <a href="#features" className="text-primary hover:underline block">一级市场的主要特点</a>
                </div>
                <div>
                  <a href="#types" className="text-primary hover:underline block">一级市场的主要类型</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#types" className="text-muted-foreground hover:text-primary block">IPO</a>
                    <a href="#types" className="text-muted-foreground hover:text-primary block">私募融资</a>
                    <a href="#types" className="text-muted-foreground hover:text-primary block">债券发行</a>
                  </div>
                </div>
                <div>
                  <a href="#comparison" className="text-primary hover:underline block">一级市场与二级市场的区别</a>
                </div>
                <div>
                  <a href="#participants" className="text-primary hover:underline block">一级市场的主要参与者</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#participants" className="text-muted-foreground hover:text-primary block">发行人</a>
                    <a href="#participants" className="text-muted-foreground hover:text-primary block">承销商</a>
                    <a href="#participants" className="text-muted-foreground hover:text-primary block">投资者</a>
                  </div>
                </div>
                <div>
                  <a href="#process" className="text-primary hover:underline block">一级市场的融资流程</a>
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
                  <AccordionTrigger>个人投资者如何参与一级市场？</AccordionTrigger>
                  <AccordionContent>
                    个人投资者可以通过以下方式参与一级市场：
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>参与新股申购（IPO）</li>
                      <li>认购新发行的债券</li>
                      <li>通过私募基金间接参与私募股权投资</li>
                      <li>参与众筹平台上的项目</li>
                    </ul>
                    需要注意的是，一些一级市场投资（如私募）可能有投资者资质要求。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>一级市场投资有哪些风险？</AccordionTrigger>
                  <AccordionContent>
                    一级市场投资主要风险包括：
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>信息不对称风险：投资者可能无法获得全面的企业信息</li>
                      <li>流动性风险：一级市场投资通常缺乏流动性</li>
                      <li>估值风险：新发行证券的定价可能不合理</li>
                      <li>政策风险：监管政策变化可能影响投资</li>
                      <li>企业经营风险：尤其是初创企业的生存和发展风险</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>IPO与私募融资有什么区别？</AccordionTrigger>
                  <AccordionContent>
                    IPO与私募融资的主要区别：
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><strong>公开性：</strong>IPO面向公众投资者，私募仅面向特定投资者</li>
                      <li><strong>监管要求：</strong>IPO监管严格，信息披露要求高；私募相对宽松</li>
                      <li><strong>融资规模：</strong>IPO通常规模更大</li>
                      <li><strong>流动性：</strong>IPO后股票可在二级市场交易，流动性高；私募流动性低</li>
                      <li><strong>时间成本：</strong>IPO流程长，私募相对快速</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>承销商在一级市场中扮演什么角色？</AccordionTrigger>
                  <AccordionContent>
                    承销商在一级市场中的主要角色：
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>协助发行人准备发行文件和申请材料</li>
                      <li>进行尽职调查，评估发行人情况</li>
                      <li>为证券定价提供建议</li>
                      <li>组织路演，向潜在投资者推介</li>
                      <li>包销或代销证券，确保发行成功</li>
                      <li>提供发行后的市场支持和稳定价格服务</li>
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
                <a href="/secondary-market" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">二级市场</h3>
                    <p className="text-xs text-muted-foreground">了解证券交易的主要场所</p>
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
        </StickySidebar>
      </div>
    </div>
  );
}
