"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StickySidebar } from "@/components/ui-custom/knowledge-page";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

export default function InvestmentEducationPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>投资启蒙与教育</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">投资启蒙与教育</h1>
        <p className="text-xl text-muted-foreground">
          儿童财商教育、青少年投资入门、家庭投资讨论与决策、培养健康的金钱观
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">        
        <div className="lg:col-span-2 space-y-8">
        
        {/* 儿童财商教育 */}
        <section className="space-y-4" id="children-financial-literacy">
          <h2 className="text-2xl font-bold tracking-tight">儿童财商教育</h2>
          <p className="text-muted-foreground">
            财商教育应从儿童时期开始，培养孩子对金钱的正确认识和良好习惯。
            通过适合年龄的活动和教育方式，可以帮助孩子建立健康的金钱观念和基本理财技能。
          </p>

          <Tabs defaultValue="age-3-6" className="mt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="age-3-6">3-6岁</TabsTrigger>
              <TabsTrigger value="age-7-12">7-12岁</TabsTrigger>
              <TabsTrigger value="age-13-18">13-18岁</TabsTrigger>
            </TabsList>
            
            <TabsContent value="age-3-6" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">幼儿期（3-6岁）</h3>
              <p className="mb-4">
                这个阶段是培养基本金钱概念的关键期，孩子开始理解金钱的基本功能和价值。
                教育重点应放在认识货币、理解简单的交换概念和培养等待满足的能力上。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">关键教育目标：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>认识不同面额的硬币和纸币</li>
                    <li>理解金钱可以用来交换物品</li>
                    <li>区分需要和想要</li>
                    <li>培养耐心和延迟满足能力</li>
                    <li>理解工作与收入的基本关系</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">实用教育活动：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>硬币分类游戏</strong>：帮助孩子识别不同面额的硬币</li>
                    <li><strong>角色扮演商店</strong>：模拟简单的购物场景</li>
                    <li><strong>储蓄罐</strong>：使用透明储蓄罐，让孩子看到钱的积累过程</li>
                    <li><strong>绘本阅读</strong>：选择与金钱相关的儿童绘本</li>
                    <li><strong>小任务奖励</strong>：完成简单家务获得小额奖励</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">家长指导要点：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>用简单语言解释金钱概念，避免复杂术语</li>
                    <li>通过日常生活情境自然引入金钱话题</li>
                    <li>成为榜样，展示健康的消费行为</li>
                    <li>避免将金钱与情感或自我价值联系起来</li>
                    <li>保持积极态度，不要将金钱描述为焦虑源</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="age-7-12" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">儿童期（7-12岁）</h3>
              <p className="mb-4">
                这个阶段孩子的认知能力显著提升，可以理解更复杂的金钱概念。
                教育重点应放在培养储蓄习惯、预算意识和做出简单财务决策的能力上。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">关键教育目标：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>建立储蓄习惯和目标</li>
                    <li>学习基本预算概念</li>
                    <li>理解价格比较和基本消费决策</li>
                    <li>了解银行账户的基本功能</li>
                    <li>培养工作与收入的关联意识</li>
                    <li>理解广告的目的和影响</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">实用教育活动：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>三罐系统</strong>：分配零花钱到"花费"、"储蓄"和"分享"三个罐子</li>
                    <li><strong>储蓄目标表</strong>：设定具体储蓄目标并视觉化进度</li>
                    <li><strong>超市预算挑战</strong>：给予固定金额，让孩子在超市做出选择</li>
                    <li><strong>开设儿童银行账户</strong>：带孩子去银行开设第一个储蓄账户</li>
                    <li><strong>家庭会议参与</strong>：让孩子参与部分家庭消费决策</li>
                    <li><strong>广告分析活动</strong>：讨论广告如何影响购买欲望</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">家长指导要点：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>提供规律的零花钱，建立金钱管理习惯</li>
                    <li>允许孩子犯错并从中学习，避免过度干预</li>
                    <li>解释家庭财务决策的理由，提供思考模型</li>
                    <li>讨论价值观如何影响消费选择</li>
                    <li>鼓励提问，坦诚回答金钱相关问题</li>
                    <li>强调金钱是工具而非目标本身</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="age-13-18" className="p-4 border rounded-md mt-2">
              <h3 className="text-xl font-semibold mb-4">青少年期（13-18岁）</h3>
              <p className="mb-4">
                青少年期是培养更高级财务技能和责任感的关键时期。
                教育重点应放在长期财务规划、理解复杂金融产品和为成年后的财务独立做准备。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">关键教育目标：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>掌握预算编制和现金流管理</li>
                    <li>理解储蓄、投资和复利概念</li>
                    <li>了解信用卡、贷款和债务管理</li>
                    <li>学习基本投资概念和风险管理</li>
                    <li>了解税收基础知识</li>
                    <li>为大学和职业规划做财务准备</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">实用教育活动：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>月度预算练习</strong>：帮助青少年制定和管理个人预算</li>
                    <li><strong>银行账户管理</strong>：开设支票账户并学习管理</li>
                    <li><strong>模拟投资游戏</strong>：使用虚拟资金进行股票投资模拟</li>
                    <li><strong>兼职工作经验</strong>：鼓励适当的兼职工作体验</li>
                    <li><strong>大学费用规划</strong>：共同研究和规划大学费用</li>
                    <li><strong>信用评分教育</strong>：解释信用评分的重要性和影响因素</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">家长指导要点：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>逐步增加财务责任和自主权</li>
                    <li>分享家庭财务决策过程，但保持适当边界</li>
                    <li>讨论职业选择与财务影响的关系</li>
                    <li>帮助理解消费主义和社会压力</li>
                    <li>讨论长期财务目标和规划的重要性</li>
                    <li>在重大财务错误前提供指导，但允许小错误发生</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* 家庭投资讨论与决策 */}
        <section className="space-y-4 mt-8" id="family-investment-discussion">
          <h2 className="text-2xl font-bold tracking-tight">家庭投资讨论与决策</h2>
          <p className="text-muted-foreground">
            家庭投资讨论是培养下一代投资意识和能力的重要途径。通过适当的方式将孩子纳入家庭投资对话，
            可以传递重要的金融知识和价值观，同时培养他们的决策能力和长期思维。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>有效的家庭投资讨论方法</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>年龄适宜的内容</strong>：根据孩子的年龄和理解能力调整讨论复杂度</li>
                  <li><strong>定期家庭财务会议</strong>：设立固定时间讨论家庭财务和投资话题</li>
                  <li><strong>真实案例分享</strong>：分享家庭实际投资决策和结果（成功与失败）</li>
                  <li><strong>新闻事件讨论</strong>：利用财经新闻作为教育契机</li>
                  <li><strong>共同研究</strong>：一起研究感兴趣的公司或投资机会</li>
                  <li><strong>价值观融入</strong>：将家庭价值观与投资决策联系起来</li>
                  <li><strong>渐进式参与</strong>：随着年龄增长，逐步增加孩子在决策中的发言权</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>家庭投资教育项目</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>家庭投资俱乐部</strong>：设立小额家庭投资账户，共同决策和管理</li>
                  <li><strong>公司认养计划</strong>：让孩子选择一家他们熟悉的公司进行研究和跟踪</li>
                  <li><strong>投资比赛</strong>：家庭成员各自选择投资并比较结果，讨论原因</li>
                  <li><strong>股东大会参与</strong>：带孩子参加股东大会，体验企业运作</li>
                  <li><strong>财务目标板</strong>：创建家庭财务目标视觉板，跟踪进度</li>
                  <li><strong>投资日记</strong>：鼓励记录投资决策、理由和结果</li>
                  <li><strong>慈善投资</strong>：讨论并实践将部分资金用于慈善或社会责任投资</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="text-xl font-semibold">讨论关键投资概念的方法</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">风险与回报</h4>
                <p className="text-muted-foreground">
                  通过简单的游戏和比喻解释风险与回报的关系。例如，可以使用不同难度的任务和相应奖励来说明：
                  简单任务获得小奖励（低风险低回报），困难任务可能获得大奖励但也可能失败（高风险高回报）。
                  讨论如何根据个人情况和目标在风险与安全之间取得平衡。
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">复利增长</h4>
                <p className="text-muted-foreground">
                  使用视觉化工具展示复利的力量。例如，折纸实验（连续折30次纸的厚度可达太阳）或"一分钱翻倍30天"的例子。
                  创建电子表格模拟不同储蓄和投资情景，展示时间对财富增长的影响。强调早期开始投资的重要性。
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">多元化投资</h4>
                <p className="text-muted-foreground">
                  使用"不把所有鸡蛋放在一个篮子里"的比喻，并通过实际例子说明。
                  可以用不同颜色的弹珠代表不同投资，展示随机抽取时多元化如何降低风险。
                  讨论家庭实际投资组合如何分散在不同资产类别和地区。
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">长期思维</h4>
                <p className="text-muted-foreground">
                  分享历史投资数据，展示短期波动与长期趋势的区别。
                  讨论家族中长期投资的成功案例，或著名投资者的长期投资故事。
                  创建长期目标视觉板，将投资与未来梦想和目标联系起来。
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* 培养健康的金钱观 */}
        <section className="space-y-4 mt-8" id="healthy-money-mindset">
          <h2 className="text-2xl font-bold tracking-tight">培养健康的金钱观</h2>
          <p className="text-muted-foreground">
            健康的金钱观是成功投资和财务幸福的基础。它不仅影响个人的财务决策，
            还影响心理健康和生活质量。培养下一代健康的金钱观需要有意识的引导和模范。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>健康金钱观的核心要素</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">丰足思维</h4>
                    <p className="text-muted-foreground">
                      相信资源是充足的，而非稀缺的。关注机会而非限制，相信自己有能力创造价值和财富。
                      这种思维模式鼓励合作、创新和长期视角，避免零和博弈的思维方式。
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>引导孩子发现和创造机会，而非仅关注限制</li>
                      <li>分享成功故事，展示创造价值的不同途径</li>
                      <li>避免使用“我们负担不起”等语言，转而讨论优先级和选择</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">平衡关系</h4>
                    <p className="text-muted-foreground">
                      将金钱视为工具而非目标，理解金钱与幸福、关系和价值观的平衡关系。
                      避免将自我价值与财富或物质拥有挂钩。
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>讨论金钱可以买到什么和买不到什么</li>
                      <li>分享非物质的快乐来源和成就感</li>
                      <li>让孩子参与慈善活动，体验给予的喜悦</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">责任意识</h4>
                    <p className="text-muted-foreground">
                      培养对金钱的责任感和管理意识，理解金钱决策对自己和他人的影响。
                      强调财务选择的后果和长期影响。
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>鼓励孩子为自己的消费决策负责</li>
                      <li>讨论消费和投资选择的社会和环境影响</li>
                      <li>引导思考如何使用财富造福他人和社会</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>避免的负面金钱观</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">缺乏思维</h4>
                    <p className="text-muted-foreground">
                      相信财富是有限的，必须从他人那里获取才能拥有。这种思维导致竞争、嫌妙和短期行为。
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground font-medium">
                      <li>说法：“这世界上的钱是固定的，别人得到更多意味着你得到更少”</li>
                      <li>行为：过度比较自己与他人的财富状况</li>
                      <li>影响：导致焦虑、嫌妙和贪婪行为</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">金钱嵌入自我价值</h4>
                    <p className="text-muted-foreground">
                      将自我价值与财富、收入或物质拥有紧密连接，导致不健康的财务决策和情绪问题。
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground font-medium">
                      <li>说法：“有钱的人才是成功人士”或“你拥有的才能定义你是谁”</li>
                      <li>行为：为了外表而过度消费，超出经济能力</li>
                      <li>影响：财务压力、自尊心波动和社交焦虑</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">金钱焦虑与恐惧</h4>
                    <p className="text-muted-foreground">
                      将金钱与恐惧、焦虑和不安全感联系起来，影响心理健康和决策能力。
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground font-medium">
                      <li>说法：“我们一直都会穷”或“钱从来都不够用”</li>
                      <li>行为：即使在财务状况良好时仍有强烈的经济不安全感</li>
                      <li>影响：过度储蓄、风险规避和错失机会</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">培养健康金钱观的实践策略</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>模范与引导</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>展示健康的金钱行为和态度，孩子从观察中学习</li>
                    <li>在孩子面前进行积极、开放的金钱对话</li>
                    <li>分享个人财务决策和理由（年龄适宜地）</li>
                    <li>避免在孩子面前表达过度的金钱焦虑或冲突</li>
                    <li>展示如何平衡消费、储蓄和分享</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>价值观教育</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>将金钱话题与家庭核心价值观联系起来</li>
                    <li>讨论消费和投资决策如何反映价值观</li>
                    <li>鼓励慈善和分享，培养全球公民意识</li>
                    <li>讨论工作作为创造价值和服务他人的方式</li>
                    <li>帮助孩子定义个人成功，超越纯粹的金钱指标</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>实践活动</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>家庭感恩练习，关注已有的丰足</li>
                    <li>制定家庭慈善预算，共同决定如何分配</li>
                    <li>分析媒体和广告中的金钱信息，培养批判性思维</li>
                    <li>讨论消费决策背后的真正动机和需求</li>
                    <li>分享非物质礼物和体验的喜悦</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 投资教育资源 */}
<section className="space-y-4 mt-8" id="education-resources">
  <h2 className="text-2xl font-bold tracking-tight">投资教育资源</h2>
  <p className="text-muted-foreground">
    为了帮助家庭更好地进行投资教育，这里提供了一系列适合不同年龄段和学习偏好的资源。
    这些资源可以补充家庭讨论，提供系统化的知识框架和实践工具。
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <Card>
      <CardHeader>
        <CardTitle>适合儿童的投资教育资源</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">图书推荐</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>《小狗钱钱》</strong> - 博多·舍费尔：通过故事形式介绍基本财务概念</li>
              <li><strong>《爸爸，我要做富翁》</strong> - 罗伯特·清崎：儿童版《富爸爸穷爸爸》</li>
              <li><strong>《给孩子的经济学》</strong> - 崔玉涛：用简单语言解释经济学概念</li>
              <li><strong>《钱从哪里来》</strong> - 妮可·拉沃伊：解释货币、银行和经济基础</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">游戏与应用</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Bankaroo</strong> - 虚拟银行应用，教导储蓄和预算</li>
              <li><strong>储蓄猪</strong> - 数字储蓄罐应用，帮助设定和跟踪储蓄目标</li>
              <li><strong>大富翁/Monopoly</strong> - 经典桌游，教导房地产投资和现金流管理</li>
              <li><strong>股票交易游戏</strong> - 模拟股票市场的教育游戏</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">视频与在线课程</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>儿童财商频道</strong> - 适合儿童的财经知识短视频</li>
              <li><strong>可汗学院金融课程</strong> - 免费在线视频课程，适合年龄较大的儿童</li>
              <li><strong>财商小课堂</strong> - 针对不同年龄段的财商教育视频系列</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <Card>
      <CardHeader>
        <CardTitle>适合青少年的投资教育资源</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">图书与杂志</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>《富爸爸穷爸爸》</strong> - 罗伯特·清崎：经典财商教育书籍</li>
              <li><strong>《投资第一课》</strong> - 约翰·博格尔：介绍指数投资基础</li>
              <li><strong>《巴菲特给青少年的投资建议》</strong> - 精选巴菲特的简单投资智慧</li>
              <li><strong>《经济学人》青少年版</strong> - 适合青少年的经济新闻与分析</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">在线课程与平台</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>青少年投资课程</strong> - 专为青少年设计的投资基础课程</li>
              <li><strong>模拟股票交易平台</strong> - 使用虚拟资金进行投资实践</li>
              <li><strong>财务规划工具</strong> - 帮助青少年规划储蓄和投资</li>
              <li><strong>投资竞赛平台</strong> - 参与模拟投资竞赛，学习投资策略</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">社区与活动</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>青少年投资俱乐部</strong> - 线上或线下投资讨论小组</li>
              <li><strong>投资夏令营</strong> - 沉浸式财商和投资教育项目</li>
              <li><strong>企业参观计划</strong> - 参观上市公司，了解企业运作</li>
              <li><strong>创业比赛</strong> - 培养商业思维和创新能力</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
  
  <div className="mt-6">
    <h3 className="text-xl font-semibold mb-4">家庭投资教育工具</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>实体工具</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>家庭财务规划板</strong> - 视觉化展示家庭财务目标和进度</li>
            <li><strong>投资日记模板</strong> - 记录投资决策和结果的结构化工具</li>
            <li><strong>财务教育卡片</strong> - 包含关键财务概念的学习卡片</li>
            <li><strong>分类储蓄罐</strong> - 帮助儿童学习资金分配的实体工具</li>
            <li><strong>投资决策流程图</strong> - 引导家庭投资讨论的视觉工具</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>数字工具</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>家庭预算应用</strong> - 协作式家庭财务管理工具</li>
            <li><strong>投资组合跟踪器</strong> - 适合家庭共同查看的投资监控工具</li>
            <li><strong>财务目标应用</strong> - 设定和跟踪家庭财务目标</li>
            <li><strong>复利计算器</strong> - 展示长期投资增长的互动工具</li>
            <li><strong>风险评估工具</strong> - 帮助评估不同投资选择的风险</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>教育资源平台</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>家庭财商教育网站</strong> - 提供系统化的家庭财商课程</li>
            <li><strong>投资教育博客</strong> - 分享适合家庭的投资知识和策略</li>
            <li><strong>财经新闻解读平台</strong> - 将复杂财经新闻简化为适合家庭讨论的内容</li>
            <li><strong>投资专家问答社区</strong> - 解答家庭投资疑问的在线平台</li>
            <li><strong>家庭投资案例库</strong> - 真实家庭投资故事和经验分享</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </div>
  
  <div className="mt-6 space-y-4">
    <h3 className="text-xl font-semibold">选择适合的投资教育资源的建议</h3>
    <div className="space-y-4">
      <div>
        <h4 className="font-medium mb-1">考虑年龄适宜性</h4>
        <p className="text-muted-foreground">
          确保资源内容符合孩子的认知发展水平。过于复杂的概念可能导致挫折感，而过于简单的内容则可能无法保持兴趣。
          随着孩子成长，逐步引入更复杂的资源和概念。
        </p>
      </div>
      <div>
        <h4 className="font-medium mb-1">匹配学习风格</h4>
        <p className="text-muted-foreground">
          考虑孩子的学习偏好。有些孩子通过阅读学习效果最佳，而其他孩子可能更喜欢视频、游戏或实践活动。
          结合多种形式的资源，创造全面的学习体验。
        </p>
      </div>
      <div>
        <h4 className="font-medium mb-1">与家庭价值观一致</h4>
        <p className="text-muted-foreground">
          选择与家庭价值观和投资理念一致的教育资源。审查资源内容，确保其传递的信息与您希望培养的金钱观和投资态度相符。
          必要时，讨论资源中可能与家庭价值观不一致的观点。
        </p>
      </div>
      <div>
        <h4 className="font-medium mb-1">实践与理论结合</h4>
        <p className="text-muted-foreground">
          优先选择能够将理论知识与实际应用相结合的资源。最有效的学习发生在理解概念并有机会应用这些概念时。
          寻找包含实践活动、案例研究或模拟练习的资源。
        </p>
      </div>
    </div>
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
                  <a href="#children-financial-literacy" className="text-primary hover:underline block">儿童财商教育</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#" className="text-muted-foreground hover:text-primary block">幼儿期（3-6岁）</a>
                    <a href="#" className="text-muted-foreground hover:text-primary block">儿童期（7-12岁）</a>
                    <a href="#" className="text-muted-foreground hover:text-primary block">青少年期（13-18岁）</a>
                  </div>
                </div>
                <div>
                  <a href="#family-investment-discussion" className="text-primary hover:underline block">家庭投资讨论与决策</a>
                </div>
                <div>
                  <a href="#healthy-money-mindset" className="text-primary hover:underline block">培养健康的金钱观</a>
                </div>
                <div>
                  <a href="#education-resources" className="text-primary hover:underline block">投资教育资源</a>
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
                  <AccordionTrigger>什么时候开始与孩子谈论金钱和投资？</AccordionTrigger>
                  <AccordionContent>
                    <p>金钱教育应从孩子能够计数时开始（通常3-4岁），从简单的概念如认识硬币、理解物品有价格等基础开始。投资概念可以在7-8岁左右引入，通过储蓄目标和简单的增长概念。关键是根据孩子的认知发展阶段，使用他们能理解的语言和例子，并在日常生活中自然融入这些话题，而不是刻意安排的正式"教育"。记住，孩子从很小就能感知父母对金钱的态度，所以展示健康的金钱关系比言语教导更重要。</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>如何平衡金钱教育与避免物质主义？</AccordionTrigger>
                  <AccordionContent>
                    <p>平衡金钱教育与避免物质主义需要几个策略：1）强调金钱是工具而非目标，讨论金钱如何帮助实现价值而非获取物品；2）教导金钱的三种用途：消费、储蓄和分享，尤其强调分享和慈善的重要性；3）区分价格与价值，解释最贵的并不总是最好的；4）分享非物质的快乐来源，如体验、关系和成就；5）以身作则，展示理性消费和有意义的支出决策；6）讨论广告和社会压力如何影响欲望，培养批判性思维。关键是将金钱教育与价值观教育结合，帮助孩子理解金钱在生活中的适当位置。</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3">
                  <AccordionTrigger>如何帮助青少年建立第一个投资组合？</AccordionTrigger>
                  <AccordionContent>
                    <p>帮助青少年建立第一个投资组合的步骤：1）从教育开始，解释基本投资概念、复利和长期投资的重要性；2）设定明确目标，讨论投资时间范围和用途；3）选择合适账户，如父母托管的投资账户或专为青少年设计的投资平台；4）从熟悉的公司开始，投资他们了解和使用的产品或服务的公司；5）考虑指数基金作为核心，提供多元化基础；6）设定规律投资计划，如将零花钱或兼职收入的一部分定期投资；7）共同监控和学习，定期回顾投资表现并讨论市场事件；8）允许犯错并从中学习，小额投资的损失是宝贵的教育经验。记住目标是教育而非短期回报，重点应放在培养良好习惯和长期思维上。</p>
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
                <a href="/financial-planning" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">投资与财务规划</h3>
                    <p className="text-xs text-muted-foreground">家庭财务规划与投资教育的结合</p>
                  </div>
                </a>
                <a href="/investment-psychology" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">投资心理学</h3>
                    <p className="text-xs text-muted-foreground">培养健康的投资心态与情绪管理</p>
                  </div>
                </a>
                <a href="/funds" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">基金投资</h3>
                    <p className="text-xs text-muted-foreground">了解适合新手投资者的基金产品</p>
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
