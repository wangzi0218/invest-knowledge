import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

export default function TimeDepositPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>定期</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">定期存款与理财</h1>
        <p className="text-xl text-muted-foreground">
          了解定期存款、大额存单、定期理财产品的特点与投资策略
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">        
        <div className="lg:col-span-2 space-y-8">
          {/* 定期存款基础 */}
          <section className="space-y-4" id="basics">
            <h2 className="text-2xl font-bold tracking-tight">定期存款基础</h2>
            <p className="text-muted-foreground">
              定期存款是银行吸收的一种有约定期限的存款，客户在存入资金时与银行约定存期和利率，
              到期后可取回本金和利息。定期存款具有安全性高、收益稳定、流动性较低的特点。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card id="features">
                <CardHeader>
                  <CardTitle>定期存款的特点与优势</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>安全性高</strong>：存款保险制度保障，50万元以内本息全额保障</li>
                    <li><strong>收益稳定</strong>：利率在存入时确定，不受市场波动影响</li>
                    <li><strong>期限多样</strong>：一般有三个月、六个月、一年、两年、三年、五年等多种期限</li>
                    <li><strong>起存金额低</strong>：普通定期存款起存金额低，一般为50元起</li>
                    <li><strong>利率递增</strong>：存期越长，利率通常越高</li>
                    <li><strong>自动续存</strong>：可选择到期自动续存，方便管理</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card id="comparison">
                <CardHeader>
                  <CardTitle>与活期存款对比</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">对比项</th>
                          <th className="text-left py-2">定期存款</th>
                          <th className="text-left py-2">活期存款</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">利率水平</td>
                          <td className="py-2">较高</td>
                          <td className="py-2">较低</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">流动性</td>
                          <td className="py-2">较低，提前支取有损失</td>
                          <td className="py-2">高，随存随取</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">资金使用灵活性</td>
                          <td className="py-2">低</td>
                          <td className="py-2">高</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">适合用途</td>
                          <td className="py-2">间歇性大额支出、长期储蓄</td>
                          <td className="py-2">日常消费、应急储备</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-6" id="calculation">
              <CardHeader>
                <CardTitle>利率计算</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">利息计算公式</h3>
                    <p className="mt-2">定期存款利息 = 本金 × 利率 × 存期(天数) ÷ 360</p>
                    <p className="text-sm text-muted-foreground mt-1">注：中国大陆地区银行通常以360天为一年计算利息</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium">计息方式</h3>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>单利</strong>：只计算本金的利息，不计算利息的利息</li>
                      <li><strong>复利</strong>：利息累计到本金中再计算利息，主要应用于累计存款等产品</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium">实际案例</h3>
                    <div className="p-4 bg-muted rounded-lg mt-2">
                      <p>如果存入100,000元，一年期定期存款，利率为2.25%，则：</p>
                      <p className="mt-2">到期利息 = 100,000 × 2.25% × 365 ÷ 360 = 2,281.25元</p>
                      <p className="mt-2">到期本息总额 = 100,000 + 2,281.25 = 102,281.25元</p>
                      <p className="mt-2 text-sm text-muted-foreground">注：实际计算中可能存在四舍五入等差异，以银行实际结算为准</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* 大额存单 */}
          <section className="space-y-4" id="large-deposit">
            <h2 className="text-2xl font-bold tracking-tight">大额存单</h2>
            <p className="text-muted-foreground">
              大额存单是银行发行的一种金额较大、有固定期限的凭证式存款，具有利率较高、可转让等特点，是定期存款的一种特殊形式。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card id="large-features">
                <CardHeader>
                  <CardTitle>大额存单特点</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>起存金额高</strong>：一般起存金额为20万元人民币</li>
                    <li><strong>利率优势</strong>：利率通常高于同期限的普通定期存款</li>
                    <li><strong>凭证式存款</strong>：银行会发放存单凭证，需妥善保管</li>
                    <li><strong>可转让性</strong>：可以在二级市场转让，提高了流动性</li>
                    <li><strong>定期发行</strong>：银行通常定期发行大额存单产品</li>
                    <li><strong>存款保险保障</strong>：与普通定期存款一样受存款保险保障</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card id="large-vs-regular">
                <CardHeader>
                  <CardTitle>与普通定期对比</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">对比项</th>
                          <th className="text-left py-2">大额存单</th>
                          <th className="text-left py-2">普通定期存款</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">起存金额</td>
                          <td className="py-2">20万元起</td>
                          <td className="py-2">50元起</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">利率水平</td>
                          <td className="py-2">较高</td>
                          <td className="py-2">一般</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">是否可转让</td>
                          <td className="py-2">可以</td>
                          <td className="py-2">不可以</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">提前支取</td>
                          <td className="py-2">限制较严，损失较大</td>
                          <td className="py-2">相对灵活</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">发行方式</td>
                          <td className="py-2">定期发行</td>
                          <td className="py-2">随时可存</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-6" id="suitable-groups">
              <CardHeader>
                <CardTitle>适合人群</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>大额存单特别适合以下人群：</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium">有一定闲置资金的中高净值客户</h3>
                      <p className="text-sm mt-2">拥有超过20万元的闲置资金，并对收益率有要求的投资者</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium">追求安全性的保守型投资者</h3>
                      <p className="text-sm mt-2">对投资安全性要求高，不愿承担市场波动风险的投资者</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium">短期内无大额资金需求的投资者</h3>
                      <p className="text-sm mt-2">在存款期限内不需要使用大额资金，可以将资金锁定一定时间的投资者</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium">对流动性有一定要求的投资者</h3>
                      <p className="text-sm mt-2">考虑到大额存单的可转让性，适合对流动性有一定要求但又想获得较高收益的投资者</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg mt-4">
                    <h3 className="font-medium">注意事项</h3>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>大额存单提前支取的损失通常比普通定期存款更大</li>
                      <li>转让大额存单可能需要承担一定的交易成本</li>
                      <li>大额存单也受存款保险制度保障，每个存款人在同一家银行的存款本息合计不超50万元人民币的部分全额保障</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* 期限选择策略 */}
          <section className="space-y-4" id="strategy">
            <h2 className="text-2xl font-bold tracking-tight">期限选择策略</h2>
            <p className="text-muted-foreground">
              选择合适的定期存款期限是实现收益最大化的关键。不同的期限选择策略可以帮助投资者平衡收益、流动性和风险。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card id="ladder-strategy">
                <CardHeader>
                  <CardTitle>阶梯存款策略</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>阶梯存款策略是将资金分散存入不同期限的定期存款中，以获得平衡的收益和流动性。</p>
                  
                  <div className="mt-4">
                    <h4 className="font-medium">策略步骤</h4>
                    <ol className="list-decimal pl-5 space-y-1 mt-2">
                      <li>将资金平均分配到不同期限的定期存款中（如三个月、六个月、一年、两年等）</li>
                      <li>当短期存款到期后，根据当前利率和资金需求决定是否继续存入长期</li>
                      <li>定期调整各期限存款的比例，以适应利率变化和个人资金需求</li>
                    </ol>
                  </div>
                  
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <h4 className="font-medium">优势</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>提高整体流动性，定期有存款到期</li>
                      <li>平滑利率波动带来的风险</li>
                      <li>在不同利率环境下都能获得平衡收益</li>
                      <li>避免将所有资金锁定在低利率产品中</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card id="liquidity-needs">
                <CardHeader>
                  <CardTitle>流动性需求评估</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>在选择定期存款期限前，应该评估自身的流动性需求，合理规划资金用途和时间。</p>
                  
                  <div className="mt-4">
                    <h4 className="font-medium">评估步骤</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>应急储备</strong>：首先确保有足够的应急资金（通常为3-6个月生活支出）存入活期或货币基金</li>
                      <li><strong>短期需求</strong>：评估未来半年到一年内的大额支出，如旅行、装修等</li>
                      <li><strong>中期需求</strong>：评估未来一到三年的资金需求，如教育、购车等</li>
                      <li><strong>长期需求</strong>：评估长期财务目标，如养老、子女教育等</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 p-4 border rounded-lg">
                    <h4 className="font-medium">期限选择建议</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>短期（3-6个月）</strong>：适合近期有资金需求或预期利率上升的情况</li>
                      <li><strong>中期（1年）</strong>：平衡流动性和收益率，适合大多数投资者</li>
                      <li><strong>长期（2年及以上）</strong>：适合追求更高收益且长期内无资金需求的投资者</li>
                      <li><strong>组合配置</strong>：将资金分配到不同期限产品，实现收益和流动性的平衡</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold">利率环境对期限选择的影响</h3>
              <div className="mt-2 space-y-2">
                <div>
                  <h4 className="font-medium">利率上升周期</h4>
                  <p className="mt-1 text-sm">当预期利率上升时，可以选择短期定期，到期后再以更高的利率重新存入。</p>
                </div>
                <div>
                  <h4 className="font-medium">利率下降周期</h4>
                  <p className="mt-1 text-sm">当预期利率下降时，可以选择长期定期，锁定当前较高的利率水平。</p>
                </div>
                <div>
                  <h4 className="font-medium">利率波动不定时</h4>
                  <p className="mt-1 text-sm">当利率走势不明确时，阶梯存款策略是最佳选择，分散存入不同期限的定期存款中。</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* 定期理财产品 */}
          <section className="space-y-4" id="time-financial-products">
            <h2 className="text-2xl font-bold tracking-tight">定期理财产品</h2>
            <p className="text-muted-foreground">
              定期理财产品是指有固定期限的理财产品，包括银行发行的定期理财产品和非银行金融机构发行的定期理财产品。
              与定期存款相比，定期理财产品通常收益更高，但风险也相应增加。
            </p>
            
            <Tabs defaultValue="bank" className="mt-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="bank" id="bank-products">银行定期理财产品</TabsTrigger>
                <TabsTrigger value="non-bank" id="non-bank-products">非银行定期理财产品</TabsTrigger>
              </TabsList>
              
              <TabsContent value="bank" className="space-y-4">
                <h3 className="text-lg font-semibold">银行定期理财产品</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>产品特点</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>收益类型</strong>：固定收益型、浮动收益型、结构性产品</li>
                        <li><strong>投资门槛</strong>：一般起点为1万元</li>
                        <li><strong>期限</strong>：短期（1-3个月）、中期（3-12个月）、长期（1年以上）</li>
                        <li><strong>流动性</strong>：封闭式运作，到期兑付，部分产品支持提前赎回</li>
                        <li><strong>风险等级</strong>：通常为低风险或中低风险</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>产品分类</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>固定收益类</strong>：收益率固定，投资债券等固收资产</li>
                        <li><strong>混合类</strong>：投资多种资产，如债券、股票、基金等</li>
                        <li><strong>结构性存款</strong>：收益与特定市场指标挂钩</li>
                        <li><strong>净值型产品</strong>：以产品净值反映收益，风险自担</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <h4 className="font-medium">风险提示</h4>
                  <p className="mt-2 text-sm">
                    银行理财产品不同于存款，不受存款保险保障，收益不确定，可能面临本金损失风险。
                    2018年资管新规后，银行理财产品逐步打破刚性兑付，由“预期收益型”向“净值型”转变，
                    投资者需充分了解产品风险特征，选择与自身风险承受能力相匹配的产品。
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="non-bank" className="space-y-4">
                <h3 className="text-lg font-semibold">非银行定期理财产品</h3>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="font-medium">券商理财产品</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>收益特点</strong>：收益率通常高于银行理财</li>
                      <li><strong>投资标的</strong>：债券、股票、基金等多元化资产</li>
                      <li><strong>风险水平</strong>：风险通常高于银行理财</li>
                      <li><strong>适合人群</strong>：风险承受能力较强的投资者</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">信托理财产品</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>产品特点</strong>：由信托公司发行，投资门槛较高</li>
                      <li><strong>收益水平</strong>：收益率通常高于银行理财产品</li>
                      <li><strong>风险等级</strong>：中等风险，高于银行理财</li>
                      <li><strong>流动性</strong>：流动性较差，通常封闭运作至到期</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">保险理财产品</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>产品特点</strong>：兼具保障和理财功能</li>
                      <li><strong>期限特点</strong>：通常为中长期，如三年期、五年期等</li>
                      <li><strong>税收优势</strong>：部分保险理财产品有税收优惠</li>
                      <li><strong>提前退保</strong>：可能面临较高的退保费用</li>
                    </ul>
                  </div>
                </div>
                
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle>各类定期理财产品对比</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">对比项</th>
                            <th className="text-left py-2">银行理财</th>
                            <th className="text-left py-2">券商理财</th>
                            <th className="text-left py-2">信托理财</th>
                            <th className="text-left py-2">保险理财</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2">收益水平</td>
                            <td className="py-2">中等</td>
                            <td className="py-2">较高</td>
                            <td className="py-2">高</td>
                            <td className="py-2">中等</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">风险等级</td>
                            <td className="py-2">低-中</td>
                            <td className="py-2">中</td>
                            <td className="py-2">中-高</td>
                            <td className="py-2">中</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">流动性</td>
                            <td className="py-2">中等</td>
                            <td className="py-2">中等</td>
                            <td className="py-2">较差</td>
                            <td className="py-2">差</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">投资门槛</td>
                            <td className="py-2">1万起</td>
                            <td className="py-2">1-5万起</td>
                            <td className="py-2">10万起</td>
                            <td className="py-2">1万起</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>
          
          {/* 利率与通胀 */}
          <section className="space-y-4" id="inflation">
            <h2 className="text-2xl font-bold tracking-tight">利率与通胀</h2>
            <p className="text-muted-foreground">
              在考虑定期存款和理财产品收益时，需要考虑通货膨胀的影响，以确保资金的实际购买力不会随时间而败坏。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card id="real-return">
                <CardHeader>
                  <CardTitle>实际收益率</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">实际收益率计算</h3>
                      <p className="mt-2">实际收益率 = 名义收益率 - 通货膨胀率</p>
                      <p className="text-sm text-muted-foreground mt-1">当实际收益率为正时，表示资金的购买力在增长；为负时，表示资金的购买力在下降。</p>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="font-medium">案例分析</h3>
                      <p className="mt-2">如果一年期定期存款利率为2.25%，而同期通货膨胀率为2.5%，则：</p>
                      <p className="mt-2">实际收益率 = 2.25% - 2.5% = -0.25%</p>
                      <p className="mt-2">这意味着存款的实际购买力在下降，尽管名义上有正收益。</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card id="inflation-impact">
                <CardHeader>
                  <CardTitle>通胀影响</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">通胀对定期存款的影响</h3>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li><strong>购买力下降</strong>：当通胀率高于存款利率时，存款的实际购买力会下降</li>
                        <li><strong>长期影响显著</strong>：长期存款受通胀影响更大，特别是在高通胀环境下</li>
                        <li><strong>利率调整扳延</strong>：存款利率调整通常落后于通胀变化</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium">应对通胀的策略</h3>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li><strong>多元化投资</strong>：将资金分散到不同类型的投资产品中</li>
                        <li><strong>考虑通胀指数债券</strong>：收益与通胀指数挂钩，提供通胀保护</li>
                        <li><strong>定期调整策略</strong>：根据通胀和利率变化定期调整投资组合</li>
                        <li><strong>选择浮动利率产品</strong>：在高通胀环境下，考虑选择浮动利率的产品</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
                  <a href="#basics" className="text-primary hover:underline block">定期存款基础</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#features" className="text-muted-foreground hover:text-primary block">特点与优势</a>
                    <a href="#comparison" className="text-muted-foreground hover:text-primary block">与活期存款对比</a>
                    <a href="#calculation" className="text-muted-foreground hover:text-primary block">利率计算</a>
                  </div>
                </div>
                <div>
                  <a href="#large-deposit" className="text-primary hover:underline block">大额存单</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#large-features" className="text-muted-foreground hover:text-primary block">大额存单特点</a>
                    <a href="#large-vs-regular" className="text-muted-foreground hover:text-primary block">与普通定期对比</a>
                    <a href="#suitable-groups" className="text-muted-foreground hover:text-primary block">适合人群</a>
                  </div>
                </div>
                <div>
                  <a href="#time-financial-products" className="text-primary hover:underline block">定期理财产品</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#bank-products" className="text-muted-foreground hover:text-primary block">银行定期理财产品</a>
                    <a href="#non-bank-products" className="text-muted-foreground hover:text-primary block">非银行定期理财产品</a>
                  </div>
                </div>
                <div>
                  <a href="#inflation" className="text-primary hover:underline block">利率与通胀</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#real-return" className="text-muted-foreground hover:text-primary block">实际收益率</a>
                    <a href="#inflation-impact" className="text-muted-foreground hover:text-primary block">通胀影响</a>
                  </div>
                </div>
                <div>
                  <a href="#strategy" className="text-primary hover:underline block">期限选择策略</a>
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    <a href="#ladder-strategy" className="text-muted-foreground hover:text-primary block">阶梯存款策略</a>
                    <a href="#liquidity-needs" className="text-muted-foreground hover:text-primary block">流动性需求评估</a>
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
                  <AccordionTrigger>定期存款提前支取会有什么影响？</AccordionTrigger>
                  <AccordionContent>
                    <p>定期存款提前支取的主要影响包括：</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>利息损失</strong>：提前支取通常按照活期利率计息，相比定期利率会有显著损失</li>
                      <li><strong>计息方式变更</strong>：从存入日到支取日按活期利率计算利息</li>
                    </ul>
                    <p className="mt-2 text-sm">如果可能需要提前使用资金，建议采用阶梯式存款策略。</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>如何在保证流动性的同时获得较高收益？</AccordionTrigger>
                  <AccordionContent>
                    <p>平衡流动性和收益可以考虑以下策略：</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>资金分层配置</strong>：将资金分为日常使用、短期备用和长期投资三层</li>
                      <li><strong>阶梯式存款</strong>：将资金分成不同期限的定期存款</li>
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
                <a href="/financial-products" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">理财产品</h3>
                    <p className="text-xs text-muted-foreground">了解更多银行理财产品的类型与特点</p>
                  </div>
                </a>
                <a href="/financial-planning" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">投资与财务规划</h3>
                    <p className="text-xs text-muted-foreground">将定期存款纳入整体财务规划</p>
                  </div>
                </a>
                <a href="/pension" className="flex items-center p-3 bg-muted rounded-lg hover:bg-muted/80">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">养老金</h3>
                    <p className="text-xs text-muted-foreground">了解定期存款在养老规划中的作用</p>
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
