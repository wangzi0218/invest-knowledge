"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { StickySidebar } from "@/components/ui-custom/knowledge-page";

export default function FinancialProductsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>金融产品</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">金融产品</h1>
        <p className="text-xl text-muted-foreground">
          了解各类金融产品的特点、风险收益特性及适合的投资人群
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* 金融产品概述 */}
          <section className="space-y-4" id="overview">
            <h2 className="text-2xl font-bold tracking-tight">金融产品概述</h2>
            <p className="text-muted-foreground">
              金融产品是金融机构为满足投资者不同需求而设计的各类投资工具，包括存款类、投资类、保障类等多种类型。
              了解各类金融产品的特点和风险收益特性，有助于投资者根据自身需求和风险承受能力选择合适的产品。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>存款类产品</CardTitle>
                  <CardDescription>安全性高，收益相对稳定</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>活期存款</li>
                    <li>定期存款</li>
                    <li>大额存单</li>
                    <li>结构性存款</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>投资类产品</CardTitle>
                  <CardDescription>风险收益特性多样</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>基金</li>
                    <li>股票</li>
                    <li>债券</li>
                    <li>理财产品</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>保障类产品</CardTitle>
                  <CardDescription>提供风险保障和长期储蓄</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>保险</li>
                    <li>年金</li>
                    <li>养老金计划</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 产品分类详情 */}
          <section className="space-y-4 mt-8" id="categories">
            <h2 className="text-2xl font-bold tracking-tight">产品分类详情</h2>
            <Tabs defaultValue="deposit" className="mt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="deposit">存款类产品</TabsTrigger>
                <TabsTrigger value="investment">投资类产品</TabsTrigger>
                <TabsTrigger value="insurance">保障类产品</TabsTrigger>
              </TabsList>
              
              {/* 存款类产品内容 */}
              <TabsContent value="deposit" className="p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">存款类产品</h3>
                  <p className="text-muted-foreground">
                    存款类产品是银行等金融机构吸收资金的基础产品，具有安全性高、流动性强等特点，适合风险承受能力较低的投资者。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>活期存款</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>产品特点：</strong>存取灵活，无期限限制，可随时支取</p>
                          <p><strong>收益水平：</strong>较低，一般在0.3%-0.35%左右</p>
                          <p><strong>风险等级：</strong>极低</p>
                          <p><strong>适合人群：</strong>需要高流动性资金的投资者，日常备用金</p>
                          <p><strong>优缺点：</strong>流动性高，但收益率低于通货膨胀率</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>定期存款</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>产品特点：</strong>有固定期限，提前支取会降低利率</p>
                          <p><strong>收益水平：</strong>中等，一般在1.5%-2.75%之间，期限越长利率越高</p>
                          <p><strong>风险等级：</strong>极低</p>
                          <p><strong>适合人群：</strong>有稳定收入且短期内无大额支出需求的保守型投资者</p>
                          <p><strong>优缺点：</strong>安全性高，收益稳定，但流动性较差</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>大额存单</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>产品特点：</strong>起点金额较高（通常20万起），可转让</p>
                          <p><strong>收益水平：</strong>中等偏高，一般比同期定期存款高0.3%-0.5%</p>
                          <p><strong>风险等级：</strong>极低</p>
                          <p><strong>适合人群：</strong>有一定资金量的稳健型投资者</p>
                          <p><strong>优缺点：</strong>收益较定期存款高，流动性较好（可转让），但起投金额较高</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>结构性存款</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>产品特点：</strong>收益与特定市场指标挂钩，具有一定保底收益</p>
                          <p><strong>收益水平：</strong>浮动，一般有保底收益和浮动收益两部分</p>
                          <p><strong>风险等级：</strong>低</p>
                          <p><strong>适合人群：</strong>风险承受能力较低但希望获得比定期存款更高收益的投资者</p>
                          <p><strong>优缺点：</strong>保本保息，收益可能高于传统存款，但实际收益不确定</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-medium mb-2">存款产品比较</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 text-left font-medium">产品类型</th>
                            <th className="px-4 py-2 text-left font-medium">流动性</th>
                            <th className="px-4 py-2 text-left font-medium">收益性</th>
                            <th className="px-4 py-2 text-left font-medium">风险性</th>
                            <th className="px-4 py-2 text-left font-medium">适合人群</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-2">活期存款</td>
                            <td className="px-4 py-2">极高</td>
                            <td className="px-4 py-2">极低</td>
                            <td className="px-4 py-2">极低</td>
                            <td className="px-4 py-2">需要随时取用资金的投资者</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">定期存款</td>
                            <td className="px-4 py-2">低</td>
                            <td className="px-4 py-2">中低</td>
                            <td className="px-4 py-2">极低</td>
                            <td className="px-4 py-2">追求稳定收益的保守型投资者</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">大额存单</td>
                            <td className="px-4 py-2">中</td>
                            <td className="px-4 py-2">中</td>
                            <td className="px-4 py-2">极低</td>
                            <td className="px-4 py-2">有一定资金量的稳健型投资者</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">结构性存款</td>
                            <td className="px-4 py-2">低</td>
                            <td className="px-4 py-2">中高</td>
                            <td className="px-4 py-2">低</td>
                            <td className="px-4 py-2">希望在保本基础上获得更高收益的投资者</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-muted p-4 rounded-lg">
                    <h4 className="text-lg font-medium mb-2">投资提示</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>存款产品受到存款保险制度保障，最高保障限额为50万元</li>
                      <li>合理分配活期和定期存款，平衡流动性和收益性</li>
                      <li>选择结构性存款时，注意了解收益计算方式和挂钩标的</li>
                      <li>大额存单可以在二级市场转让，提高了流动性</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              {/* 投资类产品内容 */}
              <TabsContent value="investment" className="p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">投资类产品</h3>
                  <p className="text-muted-foreground">
                    投资类产品是指可以在二级市场交易或通过金融机构购买的各类金融工具，风险收益特性各异，适合不同风险偏好的投资者。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>基金</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>产品特点：</strong>由基金管理公司管理，投资于多种金融工具，实现专业化管理</p>
                          <p><strong>主要类型：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><strong>股票型基金</strong>：主要投资于股票市场，风险收益较高</li>
                            <li><strong>债券型基金</strong>：主要投资于债券市场，风险收益适中</li>
                            <li><strong>混合型基金</strong>：同时投资股票和债券，平衡风险收益</li>
                            <li><strong>货币市场基金</strong>：投资于短期货币工具，风险收益较低</li>
                            <li><strong>指数基金</strong>：跟踪特定指数，被动投资策略</li>
                          </ul>
                          <p><strong>风险等级：</strong>低至高（根据基金类型不同）</p>
                          <p><strong>适合人群：</strong>希望通过专业机构管理资产的各类投资者</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>股票</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>产品特点：</strong>代表公司所有权，可在二级市场交易，有权参与公司分红和决策</p>
                          <p><strong>主要类型：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><strong>A股</strong>：在上海、深圳交易所上市的人民币普通股</li>
                            <li><strong>H股</strong>：在香港交易所上市的内地公司股票</li>
                            <li><strong>蓝筹股</strong>：高质量大型公司股票</li>
                            <li><strong>创业板股票</strong>：创新型企业股票，风险较高</li>
                          </ul>
                          <p><strong>风险等级：</strong>高</p>
                          <p><strong>适合人群：</strong>风险承受能力较强，有一定市场分析能力的投资者</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>债券</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>产品特点：</strong>代表债权，有固定到期日和利率，收益相对稳定</p>
                          <p><strong>主要类型：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><strong>国债</strong>：国家发行，风险最低</li>
                            <li><strong>金融债</strong>：金融机构发行，风险适中</li>
                            <li><strong>企业债</strong>：企业发行，风险较高</li>
                            <li><strong>可转换债券</strong>：可转换为发行公司股票</li>
                          </ul>
                          <p><strong>风险等级：</strong>低至中（根据发行主体不同）</p>
                          <p><strong>适合人群：</strong>追求稳定收益的中等风险承受能力投资者</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>理财产品</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>产品特点：</strong>由银行、信托等金融机构发行，投资于各类金融工具</p>
                          <p><strong>主要类型：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><strong>固定收益类</strong>：收益相对确定，风险较低</li>
                            <li><strong>浮动收益类</strong>：收益不确定，风险较高</li>
                            <li><strong>结构性理财</strong>：收益与特定标的挂钩，风险适中</li>
                          </ul>
                          <p><strong>风险等级：</strong>低至高（根据产品类型不同）</p>
                          <p><strong>适合人群：</strong>各类风险偏好的投资者，根据产品风险等级选择</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-medium mb-2">投资产品比较</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 text-left font-medium">产品类型</th>
                            <th className="px-4 py-2 text-left font-medium">流动性</th>
                            <th className="px-4 py-2 text-left font-medium">收益潜力</th>
                            <th className="px-4 py-2 text-left font-medium">风险性</th>
                            <th className="px-4 py-2 text-left font-medium">投资门槛</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-2">基金</td>
                            <td className="px-4 py-2">高（开放式）/低（封闭式）</td>
                            <td className="px-4 py-2">中至高</td>
                            <td className="px-4 py-2">低至高</td>
                            <td className="px-4 py-2">低（1元起步）</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">股票</td>
                            <td className="px-4 py-2">高</td>
                            <td className="px-4 py-2">高</td>
                            <td className="px-4 py-2">高</td>
                            <td className="px-4 py-2">中（按手等费用）</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">债券</td>
                            <td className="px-4 py-2">中</td>
                            <td className="px-4 py-2">中</td>
                            <td className="px-4 py-2">低至中</td>
                            <td className="px-4 py-2">高（一般10万起）</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">理财产品</td>
                            <td className="px-4 py-2">低至中</td>
                            <td className="px-4 py-2">中至高</td>
                            <td className="px-4 py-2">低至高</td>
                            <td className="px-4 py-2">中（一般万元起）</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-muted p-4 rounded-lg">
                    <h4 className="text-lg font-medium mb-2">投资提示</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>根据自身风险承受能力选择适合的投资产品</li>
                      <li>基金适合投资新手，可以低门槛实现专业化管理</li>
                      <li>直接投资股票需要一定的市场分析能力和风险承受能力</li>
                      <li>债券投资门槛较高，适合资金量较大的投资者</li>
                      <li>理财产品需要注意产品期限和流动性限制</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              {/* 保障类产品内容 */}
              <TabsContent value="insurance" className="p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">保障类产品</h3>
                  <p className="text-muted-foreground">
                    保障类产品是指由保险公司发行，为投保人提供风险保障和财富管理的金融产品，包括保险、年金和养老金计划等。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>人身保险</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>产品特点：</strong>保障人身安全和健康，提供风险转移和财务保障</p>
                          <p><strong>主要类型：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><strong>寄险人寿保险</strong>：兼具保障和储蓄功能，有现金价值</li>
                            <li><strong>定期寿险</strong>：在特定期限内提供保障，无现金价值</li>
                            <li><strong>重疾险</strong>：针对特定重大疾病提供保障</li>
                            <li><strong>医疗险</strong>：补充基本医疗保障，提供额外医疗费用保障</li>
                            <li><strong>意外险</strong>：针对意外伤害提供保障</li>
                          </ul>
                          <p><strong>风险等级：</strong>低</p>
                          <p><strong>适合人群：</strong>需要风险保障和财务规划的个人和家庭</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>年金保险</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>产品特点：</strong>提供定期或终身的收入流，保障退休生活质量</p>
                          <p><strong>主要类型：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><strong>即期年金</strong>：缴纳保费后立即开始领取年金</li>
                            <li><strong>延期年金</strong>：在特定年龄或时间后开始领取年金</li>
                            <li><strong>终身年金</strong>：提供终身的定期收入</li>
                            <li><strong>增额年金</strong>：年金金额随时间增长，应对通货膨胀</li>
                          </ul>
                          <p><strong>风险等级：</strong>低</p>
                          <p><strong>适合人群：</strong>需要规划退休收入的中长期投资者</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>养老金计划</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>产品特点：</strong>长期储蓄与投资结合，提供退休后的财务保障</p>
                          <p><strong>主要类型：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><strong>企业年金计划</strong>：由雇主和员工共同缴纳</li>
                            <li><strong>个人养老金账户</strong>：个人自主缴纳的养老金计划</li>
                            <li><strong>商业养老保险</strong>：由保险公司提供的养老金计划</li>
                          </ul>
                          <p><strong>风险等级：</strong>低至中</p>
                          <p><strong>适合人群：</strong>关注退休规划的长期投资者</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>财产保险</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p><strong>产品特点：</strong>保障财产安全，补偿因意外事故造成的财产损失</p>
                          <p><strong>主要类型：</strong></p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><strong>车险</strong>：保障机动车辆相关风险</li>
                            <li><strong>家财险</strong>：保障家庭财产和责任风险</li>
                            <li><strong>财产责任险</strong>：保障因责任事故导致的财产赔偿</li>
                          </ul>
                          <p><strong>风险等级：</strong>低</p>
                          <p><strong>适合人群：</strong>需要保障财产安全的个人和家庭</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-medium mb-2">保障产品比较</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 text-left font-medium">产品类型</th>
                            <th className="px-4 py-2 text-left font-medium">保障功能</th>
                            <th className="px-4 py-2 text-left font-medium">投资功能</th>
                            <th className="px-4 py-2 text-left font-medium">流动性</th>
                            <th className="px-4 py-2 text-left font-medium">适合人群</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-2">寄险人寿保险</td>
                            <td className="px-4 py-2">强</td>
                            <td className="px-4 py-2">中</td>
                            <td className="px-4 py-2">低</td>
                            <td className="px-4 py-2">需要长期保障和储蓄的人群</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">年金保险</td>
                            <td className="px-4 py-2">中</td>
                            <td className="px-4 py-2">强</td>
                            <td className="px-4 py-2">低</td>
                            <td className="px-4 py-2">需要规划退休收入的人群</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">养老金计划</td>
                            <td className="px-4 py-2">中</td>
                            <td className="px-4 py-2">强</td>
                            <td className="px-4 py-2">低</td>
                            <td className="px-4 py-2">关注退休规划的长期投资者</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">财产保险</td>
                            <td className="px-4 py-2">强</td>
                            <td className="px-4 py-2">弱</td>
                            <td className="px-4 py-2">中</td>
                            <td className="px-4 py-2">需要保障财产安全的个人和家庭</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-muted p-4 rounded-lg">
                    <h4 className="text-lg font-medium mb-2">投资提示</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>保险产品应优先考虑其保障功能，而非单纯作为投资工具</li>
                      <li>年金和养老金计划需要长期持有，中途退保可能损失较大</li>
                      <li>合理配置不同类型的保险，建立完整的保障体系</li>
                      <li>注意保险合同的除外责任和免赔条款</li>
                      <li>定期寿险保障成本低，适合纯保障需求；寄险兼具储蓄功能，但保费较高</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* 产品选择指南 */}
          <section className="space-y-4 mt-8" id="selection-guide">
            <h2 className="text-2xl font-bold tracking-tight">产品选择指南</h2>
            <p className="text-muted-foreground">
              选择适合自己的金融产品需要考虑多方面因素，包括个人风险承受能力、投资期限、流动性需求等。
            </p>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">产品选择的四步法</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="bg-muted/50">
                    <CardTitle className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground mr-2">1</span>
                      评估自身情况
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>风险承受能力</strong>：评估自己能承受的投资风险程度</li>
                      <li><strong>投资期限</strong>：确定资金可以投入的时间长度</li>
                      <li><strong>流动性需求</strong>：评估是否需要随时取用资金</li>
                      <li><strong>收益预期</strong>：明确自己对投资回报的期望</li>
                      <li><strong>财务目标</strong>：明确投资的目的（养老、教育、购房等）</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-muted/50">
                    <CardTitle className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground mr-2">2</span>
                      了解产品特性
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>风险收益特性</strong>：了解产品的风险收益特性</li>
                      <li><strong>流动性</strong>：产品的变现能力和限制条件</li>
                      <li><strong>投资门槛</strong>：产品的最低投资金额要求</li>
                      <li><strong>收费标准</strong>：产品的各类费用（管理费、申购费等）</li>
                      <li><strong>税收政策</strong>：产品的税收影响和优惠政策</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-muted/50">
                    <CardTitle className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground mr-2">3</span>
                      匹配需求与产品
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>保障需求优先</strong>：先满足基本保障需求，再考虑投资需求</li>
                      <li><strong>风险分级匹配</strong>：根据风险承受能力选择相应风险等级的产品</li>
                      <li><strong>期限匹配</strong>：根据资金使用时间选择相应期限的产品</li>
                      <li><strong>目标对应</strong>：选择与财务目标对应的产品类型</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-muted/50">
                    <CardTitle className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground mr-2">4</span>
                      资产配置与调整
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>分散投资</strong>：合理分配资金到不同类型的金融产品</li>
                      <li><strong>定期评估</strong>：定期评估产品表现和个人需求变化</li>
                      <li><strong>动态调整</strong>：根据生命周期和市场变化调整产品组合</li>
                      <li><strong>专业建议</strong>：必要时寻求专业理财顾问的建议</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">不同生命周期的产品选择建议</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left font-medium">生命周期阶段</th>
                      <th className="px-4 py-2 text-left font-medium">财务特点</th>
                      <th className="px-4 py-2 text-left font-medium">重点需求</th>
                      <th className="px-4 py-2 text-left font-medium">推荐产品组合</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2">初入职场（20-30岁）</td>
                      <td className="px-4 py-2">收入有限，负债少，风险承受能力强</td>
                      <td className="px-4 py-2">基础保障、财富积累</td>
                      <td className="px-4 py-2">
                        <ul className="list-disc pl-5">
                          <li>意外险、医疗险</li>
                          <li>货币基金、指数基金</li>
                          <li>活期存款（应急金）</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">家庭建立期（30-45岁）</td>
                      <td className="px-4 py-2">收入增长，负债增加，责任加重</td>
                      <td className="px-4 py-2">家庭保障、子女教育、财富增值</td>
                      <td className="px-4 py-2">
                        <ul className="list-disc pl-5">
                          <li>寄险人寿保险、重疾险</li>
                          <li>混合型基金、股票型基金</li>
                          <li>定期存款、结构性理财</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">事业稳定期（45-55岁）</td>
                      <td className="px-4 py-2">收入高峰，负债减轻，积累能力强</td>
                      <td className="px-4 py-2">养老规划、财富保值增值</td>
                      <td className="px-4 py-2">
                        <ul className="list-disc pl-5">
                          <li>年金保险、养老金计划</li>
                          <li>债券型基金、债券产品</li>
                          <li>大额存单、固定收益类理财</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">退休养老期（55岁以上）</td>
                      <td className="px-4 py-2">收入减少，财富消费，风险承受能力低</td>
                      <td className="px-4 py-2">稳定收入、医疗保障、财富保值</td>
                      <td className="px-4 py-2">
                        <ul className="list-disc pl-5">
                          <li>即期年金、长期护理险</li>
                          <li>货币基金、债券型基金</li>
                          <li>定期存款、固定收益类产品</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6 bg-muted p-4 rounded-lg">
              <h4 className="text-lg font-medium mb-2">产品选择注意事项</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>不要追求高收益而忽视风险，金融产品的收益与风险通常成正比</li>
                <li>不要将所有资金都投入单一产品，分散投资可以降低风险</li>
                <li>保持足够的应急金，一般建议为3-6个月的生活费用</li>
                <li>先考虑基本保障需求，再考虑投资需求</li>
                <li>注意产品的流动性和期限限制，不要将短期可能需要的资金投入长期产品</li>
                <li>仔细阅读产品说明书和合同条款，了解产品的风险、收费和限制条件</li>
              </ul>
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
                  <a href="#overview" className="text-primary hover:underline block">金融产品概述</a>
                </div>
                <div>
                  <a href="#categories" className="text-primary hover:underline block">产品分类详情</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#categories" className="text-muted-foreground hover:text-primary block">存款类产品</a>
                    <a href="#categories" className="text-muted-foreground hover:text-primary block">投资类产品</a>
                    <a href="#categories" className="text-muted-foreground hover:text-primary block">保障类产品</a>
                  </div>
                </div>
                <div>
                  <a href="#selection-guide" className="text-primary hover:underline block">产品选择指南</a>
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
                  <AccordionTrigger>如何评估金融产品的风险？</AccordionTrigger>
                  <AccordionContent>
                    <p>评估金融产品风险可以从以下几个方面考虑：</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>风险等级：查看产品说明书中的风险等级评定</li>
                      <li>历史波动性：观察产品历史收益的波动情况</li>
                      <li>投资标的：了解产品投资的具体标的及其风险特性</li>
                      <li>流动性风险：评估产品的变现能力和限制条件</li>
                      <li>发行机构信用：考察发行机构的信用评级和实力</li>
                    </ul>
                    <p className="mt-2">一般而言，收益越高的产品风险通常也越高，投资者应根据自身风险承受能力选择适合的产品。</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>新手投资者适合哪些金融产品？</AccordionTrigger>
                  <AccordionContent>
                    <p>新手投资者可以考虑以下产品：</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>货币市场基金</strong>：风险低，流动性高，适合作为入门产品</li>
                      <li><strong>指数基金</strong>：低成本、被动投资，长期收益稳定</li>
                      <li><strong>定期存款</strong>：安全性高，收益稳定，适合保守型投资者</li>
                      <li><strong>债券型基金</strong>：风险适中，收益相对稳定</li>
                    </ul>
                    <p className="mt-2">新手投资者应从低风险产品开始，逐步了解市场和积累经验，同时建立良好的风险意识和投资习惯。</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>如何避免投资陷阱？</AccordionTrigger>
                  <AccordionContent>
                    <p>避免投资陷阱的关键策略：</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>警惕高收益承诺</strong>：过高的收益承诺通常伴随着高风险或欺诈</li>
                      <li><strong>核实机构资质</strong>：选择正规持牌金融机构的产品</li>
                      <li><strong>了解产品结构</strong>：不投资自己不理解的产品</li>
                      <li><strong>阅读合同条款</strong>：仔细阅读产品说明书和合同条款</li>
                      <li><strong>分散投资</strong>：不将所有资金投入单一产品</li>
                      <li><strong>保持怀疑态度</strong>：对"保证收益"、"零风险"等宣传持怀疑态度</li>
                    </ul>
                    <p className="mt-2">记住投资的基本原则：收益与风险成正比，没有"稳赚不赔"的投资。</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>如何根据年龄段选择合适的金融产品？</AccordionTrigger>
                  <AccordionContent>
                    <p>不同年龄段的产品选择建议：</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>20-30岁</strong>：风险承受能力强，可以配置更多权益类产品（股票、股票型基金），同时建立基础保障</li>
                      <li><strong>30-45岁</strong>：家庭责任增加，需平衡保障和投资，可配置寄险人寿保险、混合型基金等</li>
                      <li><strong>45-55岁</strong>：开始为退休做准备，增加固定收益类产品比例，如债券、年金保险等</li>
                      <li><strong>55岁以上</strong>：风险承受能力下降，以保值为主，配置更多低风险产品，如定期存款、债券型基金等</li>
                    </ul>
                    <p className="mt-2">随着年龄增长，一般应逐步降低投资组合的整体风险水平，增加稳定收益类产品的比例。</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>如何理解金融产品的费用结构？</AccordionTrigger>
                  <AccordionContent>
                    <p>金融产品常见费用类型：</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>申购费/认购费</strong>：购买产品时收取的费用</li>
                      <li><strong>赎回费</strong>：赎回产品时收取的费用，通常与持有时间相关</li>
                      <li><strong>管理费</strong>：产品管理机构收取的费用，通常按年收取</li>
                      <li><strong>托管费</strong>：产品托管机构收取的费用</li>
                      <li><strong>销售服务费</strong>：产品销售机构收取的费用</li>
                      <li><strong>保险费</strong>：保险产品的保障成本</li>
                    </ul>
                    <p className="mt-2">费用会直接影响投资收益，投资者应关注产品的总费用率，选择费用合理的产品。同类产品中，费用越低通常越有利于长期投资者。</p>
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
                <a href="/funds" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">基金</h3>
                    <p className="text-xs text-muted-foreground">了解不同类型基金的特点和投资策略</p>
                  </div>
                </a>
                <a href="/etf" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">ETF</h3>
                    <p className="text-xs text-muted-foreground">探索ETF的运作机制和投资优势</p>
                  </div>
                </a>
                <a href="/securities" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">证券</h3>
                    <p className="text-xs text-muted-foreground">深入了解股票、债券等证券产品</p>
                  </div>
                </a>
                <a href="/precious-metals" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">贵金属</h3>
                    <p className="text-xs text-muted-foreground">探索黄金等贵金属的投资方式</p>
                  </div>
                </a>
                <a href="/real-estate" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">房地产</h3>
                    <p className="text-xs text-muted-foreground">了解房地产投资的特点和策略</p>
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
