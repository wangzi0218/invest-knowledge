import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

export default function PensionPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>养老金</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">养老金投资与规划</h1>
        <p className="text-xl text-muted-foreground">
          了解养老金体系、个人养老金、企业年金与长期资产配置策略
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">        
        <div className="lg:col-span-2 space-y-8">
        
        {/* 养老金体系介绍 */}
        <section className="space-y-4" id="pension-system">
          <h2 className="text-2xl font-bold tracking-tight">养老金体系介绍</h2>
          <p className="text-muted-foreground">
            养老金体系是为保障退休后的经济安全而设计的多层次保障体系，通常由政府、企业和个人共同参与构建。
            世界各国普遍采用“三支柱”养老金体系，不同国家在具体实施上有所差异。
          </p>
          
          <Card className="mt-6" id="three-pillars">
            <CardHeader>
              <CardTitle>三支柱养老金体系</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg">第一支柱：基本养老保险</h3>
                  <p className="mt-2 text-muted-foreground">由政府主导的强制性社会保障体系，通过现收现付制或部分积累制运行，为全体公民提供基础养老保障。</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>覆盖面广，强制参与</li>
                    <li>替代率相对较低</li>
                    <li>保障基本生活需求</li>
                    <li>在中国主要指城镇职工基本养老保险和城乡居民基本养老保险</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg">第二支柱：企业年金/职业年金</h3>
                  <p className="mt-2 text-muted-foreground">由企业或雇主为员工建立的补充养老金计划，通常采用完全积累制。</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>企业与员工共同缴费</li>
                    <li>享受税收优惠</li>
                    <li>在中国主要包括企业年金和机关事业单位职业年金</li>
                    <li>参与度受限于企业规模和经济实力</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg">第三支柱：个人养老金</h3>
                  <p className="mt-2 text-muted-foreground">个人自愿参与的商业养老保险和个人养老投资计划。</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>完全自愿参与</li>
                    <li>投资选择多样化</li>
                    <li>税收优惠政策支持</li>
                    <li>在中国包括个人养老金、商业养老保险等</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6" id="comparison">
            <h3 className="text-lg font-semibold mb-4">各国养老金制度比较</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">国家</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">第一支柱特点</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">第二支柱特点</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">第三支柱特点</th>
                  </tr>
                </thead>
                <tbody className="bg-card divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">中国</td>
                    <td className="px-4 py-2 text-sm">统筹账户与个人账户相结合</td>
                    <td className="px-4 py-2 text-sm">企业年金/职业年金，发展中</td>
                    <td className="px-4 py-2 text-sm">个人养老金，起步阶段</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">美国</td>
                    <td className="px-4 py-2 text-sm">社会保障金，替代率较低</td>
                    <td className="px-4 py-2 text-sm">401(k)计划，广泛普及</td>
                    <td className="px-4 py-2 text-sm">IRA账户，高度发达</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">日本</td>
                    <td className="px-4 py-2 text-sm">国民年金+厚生年金</td>
                    <td className="px-4 py-2 text-sm">企业年金，普及率高</td>
                    <td className="px-4 py-2 text-sm">个人型确定缴费年金(iDeCo)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">新加坡</td>
                    <td className="px-4 py-2 text-sm">公积金制度(CPF)，高强制缴费率</td>
                    <td className="px-4 py-2 text-sm">补充退休计划(SRS)</td>
                    <td className="px-4 py-2 text-sm">商业保险和投资</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* 个人养老金 */}
        <section className="space-y-4" id="personal-pension">
          <h2 className="text-2xl font-bold tracking-tight">个人养老金</h2>
          <p className="text-muted-foreground">
            个人养老金是我国养老保障体系第三支柱的重要组成部分，是个人自愿参加、享受税收优惠的补充养老制度。
            2022年4月，中国正式启动个人养老金制度，为个人提供了更多元化的养老资金积累渠道。
          </p>
          
          <Tabs defaultValue="account" className="mt-6">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="account">账户设立与管理</TabsTrigger>
              <TabsTrigger value="tax">税收优惠政策</TabsTrigger>
              <TabsTrigger value="strategy">投资选择与策略</TabsTrigger>
            </TabsList>
            
            <TabsContent value="account" className="space-y-4">
              <h3 className="text-lg font-semibold">个人养老金账户的设立与管理</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">账户开立流程</h4>
                  <ol className="list-decimal pl-5 space-y-1 mt-2">
                    <li>在国家社保服务平台或当地社保APP开立个人养老金账户</li>
                    <li>选择一家银行开立个人养老金资金账户</li>
                    <li>通过资金账户购买符合规定的养老金融产品</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-medium">账户特点</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>一人一户，全国唯一</li>
                    <li>自主选择金融机构和产品</li>
                    <li>账户资金封闭运行，原则上至退休领取</li>
                    <li>年度缴费上限12000元</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium">资金领取条件</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>达到法定退休年龄</li>
                    <li>完全丧失劳动能力</li>
                    <li>出国(境)定居</li>
                    <li>账户持有人身故</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tax" className="space-y-4">
              <h3 className="text-lg font-semibold">税收优惠政策</h3>
              <p>个人养老金享受"EET"税收模式（缴费环节和投资环节免税，领取环节征税）的税收优惠：</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">缴费环节(E)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">个人缴纳的养老金，按照每年12000元的限额，可以在个人所得税税前扣除</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">投资环节(E)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">账户资金产生的收益暂不征收个人所得税</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">领取环节(T)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">领取个人养老金时，按照3%的比例税率计算缴纳个人所得税</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <h4 className="font-medium">税收优惠示例</h4>
                <p className="mt-2 text-sm">
                  假设某纳税人月薪20000元，年终奖60000元，全年工资薪金所得300000元。如果每年缴纳个人养老金12000元，则可减少个人所得税：12000 × 适用税率(10%或更高) = 至少1200元。
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="strategy" className="space-y-4">
              <h3 className="text-lg font-semibold">投资选择与策略</h3>
              <p>个人养老金可投资的金融产品主要包括：</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>养老理财产品</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>银行发行的专属理财产品</li>
                      <li>期限长，流动性较低</li>
                      <li>风险相对较低，收益稳健</li>
                      <li>适合风险承受能力较低的投资者</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>养老目标基金</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>包括目标日期型和目标风险型基金</li>
                      <li>专业化管理，资产配置多元</li>
                      <li>风险收益特征多样</li>
                      <li>适合不同风险偏好的投资者</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>商业养老保险</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>保险公司提供的养老年金保险</li>
                      <li>兼具保障和储蓄功能</li>
                      <li>可提供终身领取选择</li>
                      <li>适合追求稳定现金流的投资者</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>储蓄存款</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>银行提供的专属定期存款</li>
                      <li>本金安全，收益确定</li>
                      <li>流动性较低，期限较长</li>
                      <li>适合极度厌恶风险的投资者</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-4 p-4 border rounded-lg">
                <h4 className="font-medium">投资策略建议</h4>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>年龄梯度配置</strong>：年轻时可配置更多权益类资产，随年龄增长逐步提高固定收益类资产比例</li>
                  <li><strong>分散投资</strong>：在不同类型产品间进行分散，降低集中风险</li>
                  <li><strong>定期检视</strong>：每年检视投资表现，必要时调整配置</li>
                  <li><strong>长期坚持</strong>：养老投资是长期行为，避免频繁操作，坚持定投策略</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
      
      {/* 侧边栏 */}
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
                <a href="#pension-system" className="text-primary hover:underline block">养老金体系介绍</a>
                <div className="pl-4 mt-1 space-y-1 text-sm">
                  <a href="#three-pillars" className="text-muted-foreground hover:text-primary block">三支柱养老金体系</a>
                  <a href="#comparison" className="text-muted-foreground hover:text-primary block">各国养老金制度比较</a>
                </div>
              </div>
              <div>
                <a href="#personal-pension" className="text-primary hover:underline block">个人养老金</a>
                <div className="pl-4 mt-1 space-y-1 text-sm">
                  <a href="#account" className="text-muted-foreground hover:text-primary block">账户设立与管理</a>
                  <a href="#tax" className="text-muted-foreground hover:text-primary block">税收优惠政策</a>
                  <a href="#strategy" className="text-muted-foreground hover:text-primary block">投资选择与策略</a>
                </div>
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
                <AccordionTrigger>个人养老金和基本养老保险有什么区别？</AccordionTrigger>
                <AccordionContent>
                  <p>个人养老金和基本养老保险的主要区别在于：</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><strong>参与性质</strong>：基本养老保险是强制参加，个人养老金是自愿参加</li>
                    <li><strong>资金管理</strong>：基本养老保险由政府统一管理，个人养老金由个人自主选择金融产品</li>
                    <li><strong>投资方式</strong>：基本养老保险投资选择有限，个人养老金投资选择多样</li>
                    <li><strong>税收政策</strong>：个人养老金享受专属税收优惠</li>
                    <li><strong>定位不同</strong>：基本养老保险是基础保障，个人养老金是补充保障</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>如何选择合适的养老金融产品？</AccordionTrigger>
                <AccordionContent>
                  <p>选择养老金融产品时，应考虑以下因素：</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><strong>风险承受能力</strong>：根据自身风险偏好选择相应风险等级的产品</li>
                    <li><strong>投资期限</strong>：距离退休时间越短，应选择风险越低的产品</li>
                    <li><strong>收益预期</strong>：平衡风险和收益，设定合理的收益预期</li>
                    <li><strong>产品费率</strong>：关注管理费、托管费等费用，长期投资中费率差异会显著影响最终收益</li>
                    <li><strong>机构实力</strong>：选择资质良好、信誉可靠的金融机构</li>
                    <li><strong>分散配置</strong>：不同类型产品搭配，分散风险</li>
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
              <a href="/financial-planning" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                <div className="ml-3">
                  <h3 className="text-sm font-medium">投资与财务规划</h3>
                  <p className="text-xs text-muted-foreground">将养老金规划融入全生命周期财务规划</p>
                </div>
              </a>
              <a href="/funds" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                <div className="ml-3">
                  <h3 className="text-sm font-medium">基金</h3>
                  <p className="text-xs text-muted-foreground">了解养老目标基金的特点与投资策略</p>
                </div>
              </a>
              <a href="/insurance" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                <div className="ml-3">
                  <h3 className="text-sm font-medium">保险投资</h3>
                  <p className="text-xs text-muted-foreground">探索商业养老保险在养老规划中的作用</p>
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
