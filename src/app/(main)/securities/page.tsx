"use client";

import React from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import { StickySidebar } from "@/components/ui-custom/knowledge-page";
import { cn } from "@/lib/utils";

export default function SecuritiesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>证券</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">证券投资</h1>
        <p className="text-xl text-muted-foreground">
          了解证券投资的基础知识、分类、风险与收益，以及投资策略和分析方法。
        </p>
      </div>
      
      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8" id="main-content">
          {/* 证券简介 */}
          <section className="space-y-4" id="introduction">
            <h2 className="text-2xl font-bold tracking-tight">证券简介</h2>
            <p className="text-muted-foreground">
              证券是指各类能够证明持有人拥有特定权益的凭证，是投资者参与金融市场的重要工具。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>什么是证券？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    证券是代表特定权益的法律凭证，包括所有权、债权或其他权利。持有证券的投资者可以根据证券类型获得不同的权益，如分红、利息、投票权或其他收益。
                  </p>
                  <p className="mt-2">
                    证券的发行和交易受到严格的法律法规监管，以保护投资者权益并维护市场秩序。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>证券的特点</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>流动性：大多数证券可以在二级市场自由交易，具有较高的流动性</li>
                    <li>风险性：证券投资存在市场风险、信用风险等多种风险</li>
                    <li>收益性：不同类型的证券提供不同形式的投资回报</li>
                    <li>标准化：同一类证券具有相同的面值、条款和权益</li>
                    <li>法律保护：证券交易受到法律法规的严格监管和保护</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 证券分类 */}
          <section className="space-y-4 mt-8" id="classification">
            <h2 className="text-2xl font-bold tracking-tight">证券分类</h2>
            <p className="text-muted-foreground">
              证券可以根据不同的标准进行分类，以下是几种常见的分类方式：
            </p>
            
            <Tabs defaultValue="equity" className="mt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="equity">权益类证券</TabsTrigger>
                <TabsTrigger value="debt">债务类证券</TabsTrigger>
                <TabsTrigger value="derivative">衍生类证券</TabsTrigger>
              </TabsList>
              
              <TabsContent value="equity" className="p-4 border rounded-md mt-2">
                <h3 className="text-xl font-semibold mb-4">权益类证券</h3>
                <p className="mb-4">
                  权益类证券代表对发行机构的所有权，投资者通过持有权益类证券成为发行机构的所有者（股东），有权分享企业的利润和增长。
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>普通股</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>代表对公司的基本所有权</li>
                        <li>享有投票权和分红权</li>
                        <li>在公司清算时的求偿顺序靠后</li>
                        <li>潜在收益无上限，但风险较高</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>优先股</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>具有固定或可调整的股息率</li>
                        <li>在分红和清算时优先于普通股</li>
                        <li>通常没有或有限的投票权</li>
                        <li>风险低于普通股，但收益潜力也较低</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="debt" className="p-4 border rounded-md mt-2">
                <h3 className="text-xl font-semibold mb-4">债务类证券</h3>
                <p className="mb-4">
                  债务类证券代表对发行机构的债权，投资者通过持有债务类证券成为发行机构的债权人，有权按约定获得本金和利息。
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>政府债券</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>由政府发行，信用风险最低</li>
                        <li>包括国债、地方政府债券等</li>
                        <li>收益率相对较低，但稳定性高</li>
                        <li>期限从短期到长期不等</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>公司债券</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>由企业发行，信用风险视发行人而定</li>
                        <li>通常提供固定利率或浮动利率</li>
                        <li>收益率高于政府债券，但风险也较高</li>
                        <li>可能有各种特殊条款（如可转换、可赎回）</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="derivative" className="p-4 border rounded-md mt-2">
                <h3 className="text-xl font-semibold mb-4">衍生类证券</h3>
                <p className="mb-4">
                  衍生类证券的价值来源于基础资产（如股票、债券、商品等），主要用于风险管理、投机或套利。
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>期权</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>赋予持有人在特定日期或之前以特定价格买入或卖出标的资产的权利</li>
                        <li>包括看涨期权和看跌期权</li>
                        <li>买方支付权利金，风险有限</li>
                        <li>卖方收取权利金，但承担潜在无限风险</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>期货</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>合约双方约定在未来特定日期以特定价格交割标的资产</li>
                        <li>用于对冲价格风险或投机</li>
                        <li>需要缴纳保证金，使用杠杆</li>
                        <li>盈亏每日结算，风险较高</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* 证券投资风险与收益 */}
          <section className="space-y-4 mt-8" id="risk-return">
            <h2 className="text-2xl font-bold tracking-tight">证券投资风险与收益</h2>
            <p className="text-muted-foreground">
              证券投资的风险与收益通常呈正相关关系，高风险通常伴随高收益潜力，低风险则对应较低的收益。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>证券投资风险</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">市场风险：</span>
                      由于市场整体波动导致的证券价格变动风险，受到经济周期、利率变动、政策调整等因素影响。
                    </li>
                    <li>
                      <span className="font-medium">信用风险：</span>
                      发行人无法履行其义务（如还本付息、分红等）的风险，尤其在债券投资中尤为重要。
                    </li>
                    <li>
                      <span className="font-medium">流动性风险：</span>
                      无法以合理价格快速卖出证券的风险，尤其在市场波动大或交易量小的情况下。
                    </li>
                    <li>
                      <span className="font-medium">通货膨胀风险：</span>
                      物价上涨导致购买力下降，使实际收益率降低的风险。
                    </li>
                    <li>
                      <span className="font-medium">政策风险：</span>
                      由于政府政策、法规变化导致的风险。
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>证券投资收益</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">资本收益：</span>
                      来自证券价格上涨带来的收益，尤其在股票投资中比较显著。
                    </li>
                    <li>
                      <span className="font-medium">股息/利息收益：</span>
                      股票的股息或债券的利息支付带来的收益。
                    </li>
                    <li>
                      <span className="font-medium">红利收益：</span>
                      某些股票可能提供额外的红利分配。
                    </li>
                    <li>
                      <span className="font-medium">权益收益：</span>
                      如附送股、配股等额外的权益带来的收益。
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-muted p-4 rounded-md mt-6">
              <h3 className="font-medium mb-2">风险与收益平衡</h3>
              <p>
                不同类型的证券具有不同的风险收益特征：
              </p>
              <div className="overflow-x-auto mt-2">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-3">证券类型</th>
                      <th className="text-left py-2 px-3">风险水平</th>
                      <th className="text-left py-2 px-3">收益潜力</th>
                      <th className="text-left py-2 px-3">流动性</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-3">政府债券</td>
                      <td className="py-2 px-3">低</td>
                      <td className="py-2 px-3">低</td>
                      <td className="py-2 px-3">高</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-3">公司债券</td>
                      <td className="py-2 px-3">中低</td>
                      <td className="py-2 px-3">中低</td>
                      <td className="py-2 px-3">中高</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-3">优先股</td>
                      <td className="py-2 px-3">中</td>
                      <td className="py-2 px-3">中</td>
                      <td className="py-2 px-3">中</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-3">普通股</td>
                      <td className="py-2 px-3">高</td>
                      <td className="py-2 px-3">高</td>
                      <td className="py-2 px-3">高</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">衍生品</td>
                      <td className="py-2 px-3">非常高</td>
                      <td className="py-2 px-3">非常高</td>
                      <td className="py-2 px-3">变化大</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 证券交易流程 */}
          <section className="space-y-4 mt-8" id="trading-process">
            <h2 className="text-2xl font-bold tracking-tight">证券交易流程</h2>
            <p className="text-muted-foreground">
              了解证券交易的基本流程和步骤，有助于投资者更好地参与证券市场。
            </p>
            
            <div className="relative mt-6">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted-foreground/20"></div>
              <ol className="space-y-6 relative">
                <li className="pl-10 relative">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">1</div>
                  <h3 className="text-lg font-medium">开立证券账户</h3>
                  <p className="mt-2 text-muted-foreground">
                    选择一家可靠的证券公司或在线交易平台，完成身份验证和资金账户关联。开户过程通常需要提供个人身份证件、银行账户信息和签署相关协议。
                  </p>
                </li>
                
                <li className="pl-10 relative">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">2</div>
                  <h3 className="text-lg font-medium">资金充值</h3>
                  <p className="mt-2 text-muted-foreground">
                    将资金转入证券账户，以便进行证券交易。充值方式通常包括银行转账、第三方支付或直接从关联的银行账户转入。
                  </p>
                </li>
                
                <li className="pl-10 relative">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">3</div>
                  <h3 className="text-lg font-medium">研究和选择证券</h3>
                  <p className="mt-2 text-muted-foreground">
                    在交易前，需要进行充分的研究和分析，选择符合自己投资目标和风险承受能力的证券。可以利用交易平台提供的研究报告、市场数据和分析工具。
                  </p>
                </li>
                
                <li className="pl-10 relative">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">4</div>
                  <h3 className="text-lg font-medium">下单交易</h3>
                  <p className="mt-2 text-muted-foreground">
                    通过交易平台提交买入或卖出证券的订单。交易订单类型通常包括：
                  </p>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>市价单：以当前市场最优价格执行</li>
                    <li>限价单：指定价格执行，可能无法立即成交</li>
                    <li>止损单：设置止损价格，限制潜在损失</li>
                    <li>限价止损单：结合限价单和止损单的特点</li>
                  </ul>
                </li>
                
                <li className="pl-10 relative">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">5</div>
                  <h3 className="text-lg font-medium">订单执行与清算</h3>
                  <p className="mt-2 text-muted-foreground">
                    一旦订单被匹配，交易将被执行。在大多数市场，证券交易的清算和结算通常需要T+1或T+2天（T代表交易日）。
                  </p>
                </li>
                
                <li className="pl-10 relative">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">6</div>
                  <h3 className="text-lg font-medium">持有与管理</h3>
                  <p className="mt-2 text-muted-foreground">
                    交易成功后，证券将存入您的账户。持有期间，需要定期监控投资表现，并根据市场变化和个人投资目标调整投资组合。
                  </p>
                </li>
              </ol>
            </div>
            
            <div className="bg-muted p-4 rounded-lg mt-6">
              <h3 className="font-medium mb-2">交易费用</h3>
              <p className="mb-2">证券交易通常涉及以下费用：</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-3">费用类型</th>
                      <th className="text-left py-2 px-3">说明</th>
                      <th className="text-left py-2 px-3">计算方式</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-3">交易佣金</td>
                      <td className="py-2 px-3">给予证券公司的交易服务费</td>
                      <td className="py-2 px-3">交易金额的一定比例，或固定金额</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-3">印花税</td>
                      <td className="py-2 px-3">证券交易税</td>
                      <td className="py-2 px-3">交易金额的一定比例</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-3">过户费/登记费</td>
                      <td className="py-2 px-3">证券过户或登记的费用</td>
                      <td className="py-2 px-3">按笔数或金额比例收取</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">账户管理费</td>
                      <td className="py-2 px-3">证券账户的维护费用</td>
                      <td className="py-2 px-3">按月或年收取固定费用</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 证券投资策略 */}
          <section className="space-y-4 mt-8" id="investment">
            <h2 className="text-2xl font-bold tracking-tight">证券投资策略</h2>
            <p className="text-muted-foreground">
              成功的证券投资需要制定合适的投资策略，以下是几种常见的证券投资策略。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>价值投资</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">
                    价值投资者寻找被低估的证券，这些证券的市场价格低于其内在价值。
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>关注低市盈率、低市净率和高股息率的股票</li>
                    <li>对公司基本面进行深入分析</li>
                    <li>具有长期投资视角，耐心等待市场认可价值</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>成长投资</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">
                    成长投资者寻找具有高于平均增长潜力的公司，即使其当前估值较高。
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>关注高增长行业和创新公司</li>
                    <li>关注销售、利润和市场份额的快速增长</li>
                    <li>愿意为未来增长支付溢价</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>收入投资</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">
                    收入投资者优先考虑能提供稳定现金流的证券。
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>关注高股息股票和债券</li>
                    <li>适合追求稳定现金流的投资者</li>
                    <li>常见于公用事业、房地产信托和成熟行业的公司</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>指数投资</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">
                    指数投资者购买跟踪特定市场指数的基金或ETF，而非选择个股。
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>低成本、被动管理的投资方式</li>
                    <li>提供广泛的市场曝露和多元化</li>
                    <li>适合长期投资和定投策略</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>证券投资组合管理</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  成功的证券投资通常需要建立和管理多元化的投资组合，以分散风险并实现投资目标。
                </p>
                
                <h4 className="font-medium mb-2">组合构建步骤：</h4>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>
                    <span className="font-medium">确定投资目标和风险承受能力：</span>
                    根据个人财务状况、年龄、投资期限和风险偏好确定投资目标。
                  </li>
                  <li>
                    <span className="font-medium">资产配置：</span>
                    决定在不同类型的证券（股票、债券、现金等）之间如何分配资金。
                  </li>
                  <li>
                    <span className="font-medium">多元化选择：</span>
                    在不同行业、地区和公司规模之间分散投资，以降低特定风险。
                  </li>
                  <li>
                    <span className="font-medium">定期再平衡：</span>
                    定期调整组合，以维持目标资产配置并应对市场变化。
                  </li>
                </ol>
                
                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">组合管理技巧：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>使用止损订单控制潜在损失</li>
                    <li>考虑定投策略，利用市场波动降低平均成本</li>
                    <li>关注税收效率，合理安排交易时机以减少税收影响</li>
                    <li>保持足够的现金储备，以应对紧急情况或抓住投资机会</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 证券评级与分析方法 */}
          <section className="space-y-4 mt-8" id="analysis">
            <h2 className="text-2xl font-bold tracking-tight">证券评级与分析方法</h2>
            <p className="text-muted-foreground">
              证券分析是投资决策的基础，主要分为基本面分析和技术分析两大类。证券评级则提供了专业机构对证券风险和收益的评估。
            </p>
            
            <Tabs defaultValue="fundamental" className="mt-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="fundamental">基本面分析</TabsTrigger>
                <TabsTrigger value="technical">技术分析</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fundamental" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>基本面分析方法</CardTitle>
                    <CardDescription>
                      基本面分析考察公司的财务状况、经营效率、行业地位和竞争优势等因素，评估证券的内在价值。
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium mb-2">定量分析</h3>
                        <p className="mb-2">常用的财务比率和指标：</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border rounded-md p-3">
                            <h4 className="font-medium mb-1">估值指标</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><span className="font-medium">P/E（市盈率）：</span> 股价与每股收益的比率</li>
                              <li><span className="font-medium">P/B（市净率）：</span> 股价与每股净资产的比率</li>
                              <li><span className="font-medium">P/S（市销率）：</span> 股价与每股销售额的比率</li>
                              <li><span className="font-medium">EV/EBITDA：</span> 企业价值与利息、税、折旧和摧销前利润的比率</li>
                            </ul>
                          </div>
                          
                          <div className="border rounded-md p-3">
                            <h4 className="font-medium mb-1">盈利能力指标</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><span className="font-medium">ROE（净资产收益率）：</span> 净利润与股东权益的比率</li>
                              <li><span className="font-medium">ROA（总资产收益率）：</span> 净利润与总资产的比率</li>
                              <li><span className="font-medium">利润率：</span> 净利润与销售收入的比率</li>
                              <li><span className="font-medium">每股收益增长率：</span> 每股收益的年度增长率</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">定性分析</h3>
                        <div className="border rounded-md p-3">
                          <ul className="list-disc pl-5 space-y-2">
                            <li>
                              <span className="font-medium">行业分析：</span>
                              评估行业的增长前景、竞争格局、盈利能力和监管环境。
                            </li>
                            <li>
                              <span className="font-medium">公司竞争力：</span>
                              分析公司的市场地位、品牌价值、管理团队和创新能力。
                            </li>
                            <li>
                              <span className="font-medium">商业模式：</span>
                              评估公司的盈利模式、收入来源和可持续性。
                            </li>
                            <li>
                              <span className="font-medium">公司治理：</span>
                              考察公司的治理结构、股东权益保护和信息透明度。
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="technical" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>技术分析方法</CardTitle>
                    <CardDescription>
                      技术分析通过研究证券的历史价格和交易量等市场数据，预测未来的价格走势。
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium mb-2">价格图表分析</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border rounded-md p-3">
                            <h4 className="font-medium mb-1">趋势分析</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><span className="font-medium">趋势线：</span> 连接价格高点或低点的直线，用于识别价格趋势</li>
                              <li><span className="font-medium">支撑与阻力位：</span> 价格可能遇到阻力或支撑的价格水平</li>
                              <li><span className="font-medium">移动平均线：</span> 一段时间内的平均价格，常用于确定趋势方向</li>
                            </ul>
                          </div>
                          
                          <div className="border rounded-md p-3">
                            <h4 className="font-medium mb-1">图表形态</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><span className="font-medium">头肩底形态：</span> 表示趋势反转的常见图表形态</li>
                              <li><span className="font-medium">三角形：</span> 价格波动在两条收敛线之间的形态</li>
                              <li><span className="font-medium">旗形与楼形：</span> 表示趋势暂停或继续的形态</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">技术指标</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border rounded-md p-3">
                            <h4 className="font-medium mb-1">动量指标</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><span className="font-medium">RSI（相对强弱指数）：</span> 衡量证券超买或超卖状态</li>
                              <li><span className="font-medium">MACD（移动平均收敛散度）：</span> 识别趋势变化和动量</li>
                              <li><span className="font-medium">随机指标：</span> 衡量价格变动的随机性</li>
                            </ul>
                          </div>
                          
                          <div className="border rounded-md p-3">
                            <h4 className="font-medium mb-1">交易量分析</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li><span className="font-medium">交易量变化：</span> 证券交易量的增减可以确认或否定价格趋势</li>
                              <li><span className="font-medium">成交量指标（OBV）：</span> 累计交易量，用于预测价格变动</li>
                              <li><span className="font-medium">价格与交易量关系：</span> 价格上涨时交易量增加通常是强势信号</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>证券评级系统</CardTitle>
                <CardDescription>
                  证券评级是由专业评级机构对证券（尤其是债券）的信用风险和投资价值进行的评估。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">债券评级</h3>
                    <p className="mb-2">主要评级机构（如标准普尔、穆迪和惠誉）使用字母符号表示债券的信用质量：</p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-3">评级等级</th>
                            <th className="text-left py-2 px-3">简要说明</th>
                            <th className="text-left py-2 px-3">风险级别</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-3">AAA</td>
                            <td className="py-2 px-3">最高信用质量</td>
                            <td className="py-2 px-3">极低风险</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-3">AA</td>
                            <td className="py-2 px-3">非常高的信用质量</td>
                            <td className="py-2 px-3">非常低风险</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-3">A</td>
                            <td className="py-2 px-3">高信用质量</td>
                            <td className="py-2 px-3">低风险</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-3">BBB</td>
                            <td className="py-2 px-3">中等信用质量</td>
                            <td className="py-2 px-3">中等风险</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-3">BB, B</td>
                            <td className="py-2 px-3">投机级别</td>
                            <td className="py-2 px-3">高风险</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3">CCC, CC, C</td>
                            <td className="py-2 px-3">高风险级别</td>
                            <td className="py-2 px-3">极高风险</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">股票评级</h3>
                    <p className="mb-2">研究机构通常使用以下评级系统对股票进行评估：</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-md p-3">
                        <ul className="list-disc pl-5 space-y-1">
                          <li><span className="font-medium">强烈推荐买入（Strong Buy）：</span> 预期股票将显著超越市场</li>
                          <li><span className="font-medium">买入（Buy）：</span> 预期股票将超越市场</li>
                          <li><span className="font-medium">持有（Hold）：</span> 预期股票表现与市场相当</li>
                          <li><span className="font-medium">减持（Reduce）：</span> 预期股票表现低于市场</li>
                          <li><span className="font-medium">卖出（Sell）：</span> 预期股票表现显著低于市场</li>
                        </ul>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <h4 className="font-medium mb-1">目标价格</h4>
                        <p>研究机构通常会给出目标价格，表示分析师对股票在特定时间范围内的预期价格。目标价格与当前价格的差距可以反映分析师对股票上涨潜力的看法。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>


        </div>
        
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
                  <a href="#introduction" className="text-primary hover:underline block">证券简介</a>
                </div>
                <div>
                  <a href="#classification" className="text-primary hover:underline block">证券分类</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#equity" className="text-muted-foreground hover:text-primary block">权益类证券</a>
                    <a href="#debt" className="text-muted-foreground hover:text-primary block">债务类证券</a>
                    <a href="#derivative" className="text-muted-foreground hover:text-primary block">衍生类证券</a>
                  </div>
                </div>
                <div>
                  <a href="#risk-return" className="text-primary hover:underline block">风险与收益</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#risk-return" className="text-muted-foreground hover:text-primary block">证券投资风险</a>
                    <a href="#risk-return" className="text-muted-foreground hover:text-primary block">证券投资收益</a>
                  </div>
                </div>
                <div>
                  <a href="#trading-process" className="text-primary hover:underline block">交易流程</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#trading-process" className="text-muted-foreground hover:text-primary block">开户与交易步骤</a>
                    <a href="#trading-process" className="text-muted-foreground hover:text-primary block">交易费用</a>
                  </div>
                </div>
                <div>
                  <a href="#investment" className="text-primary hover:underline block">投资策略</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#investment" className="text-muted-foreground hover:text-primary block">价值投资</a>
                    <a href="#investment" className="text-muted-foreground hover:text-primary block">成长投资</a>
                    <a href="#investment" className="text-muted-foreground hover:text-primary block">指数投资</a>
                  </div>
                </div>
                <div>
                  <a href="#analysis" className="text-primary hover:underline block">评级与分析</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#fundamental" className="text-muted-foreground hover:text-primary block">基本面分析</a>
                    <a href="#technical" className="text-muted-foreground hover:text-primary block">技术分析</a>
                    <a href="#rating" className="text-muted-foreground hover:text-primary block">证券评级系统</a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* 常见问题 */}
          <Card id="faq">
            <CardHeader>
              <CardTitle>常见问题</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q1">
                  <AccordionTrigger>新手如何开始证券投资？</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      新手开始证券投资可以遍循以下步骤：
                    </p>
                    <ol className="list-decimal pl-5 mt-2 space-y-1">
                      <li>学习基本知识：了解证券市场的基本运作原理和不同类型的证券。</li>
                      <li>确定投资目标和风险承受能力：根据个人财务状况和投资期限设定合理目标。</li>
                      <li>开立证券账户：选择信誉良好的证券公司或在线交易平台开立账户。</li>
                      <li>从小额开始：初学者可以从小额投资开始，逐步积累经验。</li>
                      <li>多元化投资：不要将所有资金集中在单一证券上，可以考虑指数基金或ETF作为入门选择。</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="q2">
                  <AccordionTrigger>证券投资和储蓄有什么区别？</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><span className="font-medium">风险水平：</span> 证券投资存在市场风险，本金可能损失；而储蓄产品通常本金安全。</li>
                      <li><span className="font-medium">收益潜力：</span> 证券投资的长期收益潜力通常高于储蓄，但伴随着更高的风险。</li>
                      <li><span className="font-medium">流动性：</span> 证券的流动性取决于市场条件，而储蓄产品通常有固定的期限。</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="q3">
                  <AccordionTrigger>如何评估证券投资的风险？</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><span className="font-medium">市场波动性：</span> 通过历史波动率和标准差评估证券价格的波动程度。</li>
                      <li><span className="font-medium">信用评级：</span> 对于债券，查看发行人的信用评级和还债能力。</li>
                      <li><span className="font-medium">流动性风险：</span> 评估证券在不同市场条件下的交易量和价差。</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="q4">
                  <AccordionTrigger>证券交易的时机如何把握？</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><span className="font-medium">价值判断：</span> 基于基本面分析，判断证券当前是否被低估或高估。</li>
                      <li><span className="font-medium">市场趋势：</span> 关注大目标市场趋势，避免逆势操作。</li>
                      <li><span className="font-medium">定投策略：</span> 对于长期投资者，可以采用定期定额投资。</li>
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
                <a href="/stocks" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">股票</h3>
                    <p className="text-xs text-muted-foreground">了解股票投资的基本原理与策略</p>
                  </div>
                </a>
                <a href="/bonds" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">债券</h3>
                    <p className="text-xs text-muted-foreground">探索债券的类型、风险与收益特点</p>
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
                <a href="/derivatives" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">金融衍生品</h3>
                    <p className="text-xs text-muted-foreground">探索期货、期权等衍生工具的原理</p>
                  </div>
                </a>
                <a href="/secondary-market" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">二级市场</h3>
                    <p className="text-xs text-muted-foreground">了解证券交易的场所与机制</p>
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
