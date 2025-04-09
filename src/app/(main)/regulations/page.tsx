"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { StickySidebar } from "@/components/ui-custom/knowledge-page";
import { cn } from "@/lib/utils";

export default function RegulationPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      {/* 面包屑导航 */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="flex items-center gap-1">
                首页
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/regulations">
              投资监管
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">投资监管</h1>
        <p className="text-xl text-muted-foreground">
          了解金融市场监管体系、主要监管机构及其对投资者的保护措施
        </p>
      </div>

      <div className="my-6 h-px bg-border" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧主要内容区域 */}
        <div className="lg:col-span-2 space-y-8" id="main-content">

        {/* 监管概述 */}
        <section id="regulation-overview" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">什么是投资监管？</h2>
          <p className="text-muted-foreground">
            投资监管是指政府和相关机构通过制定法律法规、实施监督检查、进行市场干预等方式，
            对金融市场及其参与者的活动进行规范和约束，以维护市场秩序、保护投资者权益、
            防范系统性风险，促进金融市场健康发展的一系列制度和措施。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>监管的主要目标</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>维护市场秩序</strong>：确保市场公平、公正、透明运行</li>
                  <li><strong>保护投资者权益</strong>：特别是中小投资者的合法权益</li>
                  <li><strong>防范系统性风险</strong>：避免局部风险扩散为全局性危机</li>
                  <li><strong>促进市场效率</strong>：提高资源配置效率，促进经济发展</li>
                  <li><strong>打击违法违规行为</strong>：如内幕交易、市场操纵等</li>
                  <li><strong>维护金融稳定</strong>：保障金融体系安全稳健运行</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>监管的主要手段</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>法律法规</strong>：制定和完善相关法律法规体系</li>
                  <li><strong>市场准入</strong>：对市场参与者实施牌照管理和资质审查</li>
                  <li><strong>持续监督</strong>：对市场活动进行日常监测和定期检查</li>
                  <li><strong>信息披露</strong>：要求相关主体充分披露重要信息</li>
                  <li><strong>行为规范</strong>：对市场参与者的行为进行规范和约束</li>
                  <li><strong>风险管理</strong>：设立风险预警和处置机制</li>
                  <li><strong>处罚机制</strong>：对违法违规行为实施惩罚</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 中国监管体系 */}
        <section id="china-system" className="space-y-4 mt-8">
          <h2 className="text-2xl font-bold tracking-tight">中国金融监管体系</h2>
          <p className="text-muted-foreground">
            中国金融监管体系经历了从分业监管到综合协调的发展历程，目前形成了以中国人民银行、国家金融监督管理总局为主的监管架构。
          </p>

          <Tabs defaultValue="structure" className="mt-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="structure">监管架构</TabsTrigger>
              <TabsTrigger value="agencies">主要监管机构</TabsTrigger>
            </TabsList>
            <TabsContent id="structure" value="structure" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">中国金融监管架构</h3>
              <p className="mb-4">
                中国金融监管体系经历了多次改革，从最初的"一行三会"（央行、银监会、证监会、保监会）到现在的新型监管架构。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">当前监管架构：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>中国人民银行</strong>：作为中央银行，负责货币政策和宏观审慎管理</li>
                    <li><strong>国家金融监督管理总局</strong>：2023年组建，整合原银保监会和证监会的职责，对银行业、证券业、保险业、金融控股公司等进行统一监管</li>
                    <li><strong>地方金融监管局</strong>：负责辖区内地方金融组织的监管</li>
                    <li><strong>国务院金融稳定发展委员会</strong>：负责统筹协调金融改革发展稳定重大问题</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">监管体系特点：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>统筹协调</strong>：加强了各监管机构之间的协调配合</li>
                    <li><strong>功能监管</strong>：逐步从机构监管向功能监管转变</li>
                    <li><strong>风险为本</strong>：以防范系统性风险为核心</li>
                    <li><strong>科技赋能</strong>：加强金融科技在监管中的应用</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                随着金融业态的不断创新和发展，中国金融监管体系也在持续完善，以适应新的市场环境和监管需求。
              </p>
            </TabsContent>
            <TabsContent id="agencies" value="agencies" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">主要监管机构及职责</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">中国人民银行：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>制定和执行货币政策</li>
                    <li>防范和化解系统性金融风险</li>
                    <li>维护金融稳定</li>
                    <li>负责宏观审慎管理</li>
                    <li>管理人民币汇率和外汇管理</li>
                    <li>管理金融市场（货币市场、债券市场等）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">国家金融监督管理总局：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>统一监督管理银行业、证券业、保险业</li>
                    <li>保护金融消费者和投资者合法权益</li>
                    <li>维护金融市场秩序</li>
                    <li>防范化解金融风险</li>
                    <li>监管金融控股公司和重要金融基础设施</li>
                    <li>拟订重要金融法律法规草案和审慎监管基本制度</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">其他相关监管机构：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>国家外汇管理局</strong>：负责外汇市场监管和外汇储备管理</li>
                    <li><strong>地方金融监管局</strong>：负责辖区内小额贷款公司、融资担保公司、区域性股权市场等地方金融组织的监管</li>
                    <li><strong>中国证券投资者保护基金公司</strong>：负责证券投资者保护基金的筹集、管理和使用</li>
                    <li><strong>中国投资者保护中心</strong>：开展投资者教育、纠纷调解、支持诉讼等投资者保护工作</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* 主要监管领域 */}
        <section className="space-y-4 mt-8">
          <h2 className="text-2xl font-bold tracking-tight">主要监管领域</h2>
          <p className="text-muted-foreground">
            金融监管涵盖多个领域，针对不同市场和金融活动有特定的监管重点和要求。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">证券市场监管</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>发行监管</strong>：审核上市公司发行条件，规范发行流程</li>
                  <li><strong>信息披露</strong>：要求上市公司及时、准确、完整披露信息</li>
                  <li><strong>交易监管</strong>：监控异常交易，打击内幕交易、市场操纵等</li>
                  <li><strong>中介监管</strong>：规范证券公司、会计师事务所、律师事务所等中介机构行为</li>
                  <li><strong>投资者保护</strong>：建立投资者适当性制度，保护中小投资者权益</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">银行业监管</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>审慎监管</strong>：资本充足率、流动性、杠杆率等监管指标</li>
                  <li><strong>风险管理</strong>：信用风险、市场风险、操作风险等管理要求</li>
                  <li><strong>公司治理</strong>：规范银行内部治理结构和决策机制</li>
                  <li><strong>消费者保护</strong>：规范银行产品销售和服务行为</li>
                  <li><strong>反洗钱</strong>：要求银行建立健全反洗钱内控制度</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">保险业监管</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>偿付能力监管</strong>：确保保险公司具备足够的偿付能力</li>
                  <li><strong>市场行为监管</strong>：规范保险产品设计、销售和理赔行为</li>
                  <li><strong>资金运用监管</strong>：对保险资金投资范围和比例进行限制</li>
                  <li><strong>保险消费者保护</strong>：保障投保人、被保险人和受益人权益</li>
                  <li><strong>再保险监管</strong>：监督保险公司分散风险的再保险安排</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 投资者保护 */}
        <section id="investor-protection" className="space-y-4 mt-8">
          <h2 className="text-2xl font-bold tracking-tight">投资者保护</h2>
          <p className="text-muted-foreground">
            投资者保护是金融监管的核心目标之一，通过多种机制和措施保障投资者特别是中小投资者的合法权益。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>投资者保护机制</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>投资者适当性制度</strong>：根据投资者风险承受能力和产品风险等级进行匹配</li>
                  <li><strong>信息披露制度</strong>：确保投资者获取充分、准确的投资信息</li>
                  <li><strong>投资者教育</strong>：提升投资者金融知识和风险意识</li>
                  <li><strong>投资者保护基金</strong>：在证券公司破产等情况下对投资者进行补偿</li>
                  <li><strong>存款保险制度</strong>：保障存款人在银行破产时的权益</li>
                  <li><strong>保险保障基金</strong>：在保险公司破产时保障投保人权益</li>
                  <li><strong>纠纷解决机制</strong>：提供多元化的纠纷解决渠道</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>投资者自我保护</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>了解自身风险承受能力</strong>：客观评估自己的风险偏好和承受能力</li>
                  <li><strong>充分了解投资产品</strong>：投资前详细了解产品特点、风险和收益</li>
                  <li><strong>选择合规机构</strong>：选择有资质、信誉良好的金融机构</li>
                  <li><strong>保留交易记录</strong>：妥善保存投资合同、交易记录等文件</li>
                  <li><strong>理性投资</strong>：避免盲目跟风和非理性投资行为</li>
                  <li><strong>警惕投资陷阱</strong>：提高对非法集资、庞氏骗局等的识别能力</li>
                  <li><strong>了解维权渠道</strong>：知晓投诉举报和纠纷解决的途径</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 国际监管协调 */}
        <section className="space-y-4 mt-8" id="global-cooperation">
          <h2 className="text-2xl font-bold tracking-tight">国际监管协调</h2>
          <p className="text-muted-foreground">
            随着金融全球化的深入发展，各国金融监管机构加强了国际协调与合作，共同应对全球金融风险和挑战。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>主要国际监管组织</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>金融稳定理事会(FSB)</strong>：协调国际金融监管政策，促进金融稳定</li>
                  <li><strong>巴塞尔银行监管委员会(BCBS)</strong>：制定全球银行业监管标准</li>
                  <li><strong>国际证监会组织(IOSCO)</strong>：协调全球证券市场监管</li>
                  <li><strong>国际保险监督官协会(IAIS)</strong>：制定全球保险业监管标准</li>
                  <li><strong>国际会计准则理事会(IASB)</strong>：制定国际财务报告准则</li>
                  <li><strong>金融行动特别工作组(FATF)</strong>：打击洗钱和恐怖融资</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>国际监管合作机制</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>监管标准协调</strong>：如巴塞尔协议对银行资本充足率的全球标准</li>
                  <li><strong>监管信息共享</strong>：各国监管机构之间的信息交流与共享</li>
                  <li><strong>联合监管</strong>：对跨国金融机构的联合监管安排</li>
                  <li><strong>危机管理协调</strong>：应对全球金融危机的协调机制</li>
                  <li><strong>技术援助</strong>：发达国家向发展中国家提供监管技术支持</li>
                  <li><strong>监管评估</strong>：如IMF和世界银行的金融部门评估计划(FSAP)</li>
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
                  <a href="#regulation-overview" className="text-primary hover:underline block">什么是投资监管？</a>
                </div>
                <div>
                  <a href="#china-system" className="text-primary hover:underline block">中国金融监管体系</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#pboc" className="text-muted-foreground hover:text-primary block">中国人民银行</a>
                    <a href="#csrc" className="text-muted-foreground hover:text-primary block">中国证监会</a>
                    <a href="#cbirc" className="text-muted-foreground hover:text-primary block">银保监会</a>
                  </div>
                </div>
                <div>
                  <a href="#investor-protection" className="text-primary hover:underline block">投资者保护</a>
                </div>
                <div>
                  <a href="#global-cooperation" className="text-primary hover:underline block">国际监管合作</a>
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
              <Accordion type="single" collapsible className="w-full" id="faq">
                <AccordionItem value="q1">
                  <AccordionTrigger>如何查询金融机构是否合法？</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      查询金融机构合法性的方法：官方网站查询、公共信息平台、监管APP、电话咨询或营业场所检查。合法金融机构应具备相应的金融牌照。
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>遇到金融纷争如何维权？</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      金融纷争维权途径包括：协商解决、投诉举报、调解、仲裁和诉讼。维权时要保留完整证据，并根据纷争复杂程度选择合适途径。
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3">
                  <AccordionTrigger>如何识别非法金融活动？</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      非法金融活动特征：承诺高回报、无牌照经营、模式可疑、宣传夸大、资金池运作、虚构项目和信息不透明。防范建议：坑持收益与风险匹配原则，核实机构资质。
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
                <a href="/securities" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">证券投资</h3>
                    <p className="text-xs text-muted-foreground">了解证券市场的监管要求与规则</p>
                  </div>
                </a>
                <a href="/funds" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">基金投资</h3>
                    <p className="text-xs text-muted-foreground">探索基金产品的监管与合规要求</p>
                  </div>
                </a>
                <a href="/primary-market" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">一级市场</h3>
                    <p className="text-xs text-muted-foreground">了解证券发行的监管流程与规则</p>
                  </div>
                </a>
                <a href="/secondary-market" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">二级市场</h3>
                    <p className="text-xs text-muted-foreground">探索交易市场的监管与交易规则</p>
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
