"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, TrendingUp, Info } from "lucide-react";
import Link from "next/link";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

// 注册 ChartJS 组件
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// 定义年度数据类型
interface YearlyData {
  year: number;
  value: number;
  contributions: number;
  interest: number;
  inflationAdjustedValue: number;
}

export default function CompoundCalculatorPage() {
  // 基本参数
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [annualReturnRate, setAnnualReturnRate] = useState(8);
  const [investmentYears, setInvestmentYears] = useState(20);
  const [considerInflation, setConsiderInflation] = useState(true);
  const [inflationRate, setInflationRate] = useState(3);
  
  // 计算结果
  const [futureValue, setFutureValue] = useState(0);
  const [totalContributions, setTotalContributions] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);
  const [inflationAdjustedValue, setInflationAdjustedValue] = useState(0);
  const [yearlyData, setYearlyData] = useState<YearlyData[]>([]);
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      backgroundColor?: string;
      borderColor?: string;
      borderWidth?: number;
      fill?: boolean;
      borderDash?: number[];
      hidden?: boolean;
    }>;
  }>({ labels: [], datasets: [] });
  const [comparisonData, setComparisonData] = useState<{
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string;
      borderWidth?: number;
    }>;
  }>({ labels: [], datasets: [] });
  
  // 活跃标签
  const [activeTab, setActiveTab] = useState("calculator");

  // 计算复利增长
  useEffect(() => {
    calculateCompoundGrowth();
  }, [initialInvestment, monthlyContribution, annualReturnRate, investmentYears, considerInflation, inflationRate]);

  const calculateCompoundGrowth = () => {
    const monthlyRate = annualReturnRate / 100 / 12;
    const totalMonths = investmentYears * 12;
    const monthlyInflationRate = inflationRate / 100 / 12;
    
    let currentValue = initialInvestment;
    let yearlyValues: YearlyData[] = [];
    
    // 计算每年的投资价值
    for (let year = 0; year <= investmentYears; year++) {
      if (year === 0) {
        yearlyValues.push({
          year,
          value: initialInvestment,
          contributions: initialInvestment,
          interest: 0,
          inflationAdjustedValue: initialInvestment,
        });
        continue;
      }
      
      let yearStartValue = currentValue;
      
      // 计算这一年的每月复利
      for (let month = 1; month <= 12; month++) {
        // 添加月供
        currentValue += monthlyContribution;
        
        // 计算当月收益
        const monthlyInterest = currentValue * monthlyRate;
        currentValue += monthlyInterest;
      }
      
      // 计算这一年的总贡献
      const yearContributions = year === 0 ? initialInvestment : yearlyValues[year - 1].contributions + monthlyContribution * 12;
      
      // 计算这一年的总收益
      const yearInterest = currentValue - yearContributions;
      
      // 计算通胀调整后的价值
      const inflationFactor = Math.pow(1 + inflationRate / 100, year);
      const adjustedValue = considerInflation ? currentValue / inflationFactor : currentValue;
      
      yearlyValues.push({
        year,
        value: currentValue,
        contributions: yearContributions,
        interest: yearInterest,
        inflationAdjustedValue: adjustedValue,
      });
    }
    
    setYearlyData(yearlyValues);
    setFutureValue(currentValue);
    setTotalContributions(initialInvestment + monthlyContribution * 12 * investmentYears);
    setInterestEarned(currentValue - (initialInvestment + monthlyContribution * 12 * investmentYears));
    setInflationAdjustedValue(yearlyValues[investmentYears].inflationAdjustedValue);
    
    // 准备图表数据
    prepareChartData(yearlyValues);
    prepareComparisonData(yearlyValues);
  };

  // 准备图表数据
  const prepareChartData = (data: YearlyData[]) => {
    const labels = data.map(item => `第${item.year}年`);
    
    setChartData({
      labels,
      datasets: [
        {
          label: '投资总值',
          data: data.map(item => item.value),
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          fill: true,
        },
        {
          label: '本金投入',
          data: data.map(item => item.contributions),
          borderColor: '#22c55e',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          fill: true,
        },
        {
          label: '通胀调整后价值',
          data: data.map(item => item.inflationAdjustedValue),
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          borderDash: [5, 5],
          fill: false,
          hidden: !considerInflation,
        },
      ],
    });
  };

  // 准备比较数据
  const prepareComparisonData = (data: YearlyData[]) => {
    // 比较不同投资策略
    const strategies = [
      {
        label: '不投资 (0%)',
        value: initialInvestment + monthlyContribution * 12 * investmentYears,
        color: '#94a3b8',
      },
      {
        label: '低风险 (3%)',
        value: calculateStrategyValue(3),
        color: '#22c55e',
      },
      {
        label: '中风险 (6%)',
        value: calculateStrategyValue(6),
        color: '#3b82f6',
      },
      {
        label: '高风险 (9%)',
        value: calculateStrategyValue(9),
        color: '#a855f7',
      },
      {
        label: '您的策略',
        value: data[investmentYears].value,
        color: '#ef4444',
      },
    ];
    
    setComparisonData({
      labels: strategies.map(s => s.label),
      datasets: [
        {
          label: '投资策略比较',
          data: strategies.map(s => s.value),
          backgroundColor: strategies.map(s => s.color),
        },
      ],
    });
  };

  // 计算不同策略的最终价值
  const calculateStrategyValue = (rate: number) => {
    const monthlyRate = rate / 100 / 12;
    const totalMonths = investmentYears * 12;
    
    let value = initialInvestment;
    
    for (let month = 1; month <= totalMonths; month++) {
      value += monthlyContribution;
      value *= (1 + monthlyRate);
    }
    
    return value;
  };

  // 处理输入变化
  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>, value: string, min: number, max: number) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= min && numValue <= max) {
      setter(numValue);
    }
  };

  // 格式化货币
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // 图表选项
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: '投资价值增长曲线',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return formatCurrency(value);
          }
        }
      }
    }
  };

  // 比较图表选项
  const comparisonOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '不同投资策略最终价值比较',
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return formatCurrency(context.raw);
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return formatCurrency(value);
          }
        }
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            返回首页
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">复利计算器</h1>
          <p className="text-muted-foreground mt-2">
            直观展示长期投资和复利的强大效果，帮助您规划财务未来。
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="calculator">计算器</TabsTrigger>
            <TabsTrigger value="comparison">投资比较</TabsTrigger>
          </TabsList>
          
          <TabsContent value="calculator">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-medium mb-6">投资参数</h2>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="initialInvestment">初始投资金额</Label>
                        <span className="text-sm text-muted-foreground">{formatCurrency(initialInvestment)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input
                          id="initialInvestment"
                          type="number"
                          value={initialInvestment}
                          onChange={(e) => handleInputChange(setInitialInvestment, e.target.value, 0, 10000000)}
                          className="w-full"
                        />
                      </div>
                      <Slider
                        value={[initialInvestment]}
                        min={0}
                        max={100000}
                        step={1000}
                        onValueChange={(value) => setInitialInvestment(value[0])}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="monthlyContribution">每月定投金额</Label>
                        <span className="text-sm text-muted-foreground">{formatCurrency(monthlyContribution)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input
                          id="monthlyContribution"
                          type="number"
                          value={monthlyContribution}
                          onChange={(e) => handleInputChange(setMonthlyContribution, e.target.value, 0, 100000)}
                          className="w-full"
                        />
                      </div>
                      <Slider
                        value={[monthlyContribution]}
                        min={0}
                        max={10000}
                        step={100}
                        onValueChange={(value) => setMonthlyContribution(value[0])}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="annualReturnRate">年化收益率</Label>
                        <span className="text-sm text-muted-foreground">{annualReturnRate}%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input
                          id="annualReturnRate"
                          type="number"
                          value={annualReturnRate}
                          onChange={(e) => handleInputChange(setAnnualReturnRate, e.target.value, 0, 30)}
                          className="w-full"
                        />
                      </div>
                      <Slider
                        value={[annualReturnRate]}
                        min={0}
                        max={15}
                        step={0.5}
                        onValueChange={(value) => setAnnualReturnRate(value[0])}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="investmentYears">投资年限</Label>
                        <span className="text-sm text-muted-foreground">{investmentYears}年</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input
                          id="investmentYears"
                          type="number"
                          value={investmentYears}
                          onChange={(e) => handleInputChange(setInvestmentYears, e.target.value, 1, 50)}
                          className="w-full"
                        />
                      </div>
                      <Slider
                        value={[investmentYears]}
                        min={1}
                        max={40}
                        step={1}
                        onValueChange={(value) => setInvestmentYears(value[0])}
                      />
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="considerInflation">考虑通胀因素</Label>
                          <p className="text-sm text-muted-foreground">
                            显示通胀调整后的实际购买力
                          </p>
                        </div>
                        <Switch
                          id="considerInflation"
                          checked={considerInflation}
                          onCheckedChange={setConsiderInflation}
                        />
                      </div>
                      
                      {considerInflation && (
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="inflationRate">年通胀率</Label>
                            <span className="text-sm text-muted-foreground">{inflationRate}%</span>
                          </div>
                          <Slider
                            value={[inflationRate]}
                            min={0}
                            max={10}
                            step={0.5}
                            onValueChange={(value) => setInflationRate(value[0])}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-medium mb-4">投资结果</h2>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-blue-50 rounded-md">
                        <div className="text-sm text-muted-foreground mb-1">最终投资价值</div>
                        <div className="text-xl font-bold">{formatCurrency(futureValue)}</div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-md">
                        <div className="text-sm text-muted-foreground mb-1">本金投入总额</div>
                        <div className="text-xl font-bold">{formatCurrency(totalContributions)}</div>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-md">
                        <div className="text-sm text-muted-foreground mb-1">复利收益</div>
                        <div className="text-xl font-bold">{formatCurrency(interestEarned)}</div>
                      </div>
                      {considerInflation && (
                        <div className="p-4 bg-amber-50 rounded-md">
                          <div className="text-sm text-muted-foreground mb-1">通胀调整后价值</div>
                          <div className="text-xl font-bold">{formatCurrency(inflationAdjustedValue)}</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Info className="h-4 w-4 mr-1" />
                      <span>复利的力量: 本金占{Math.round((totalContributions / futureValue) * 100)}%, 收益占{Math.round((interestEarned / futureValue) * 100)}%</span>
                    </div>
                    
                    <div className="h-[250px]">
                      {chartData && <Line data={chartData} options={chartOptions} />}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-medium mb-4">投资要点</h2>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <TrendingUp className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>
                          <strong>复利效应</strong>: 您的投资在{investmentYears}年后增长了{Math.round((futureValue / totalContributions) * 100) / 100}倍。
                        </span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>
                          <strong>时间的力量</strong>: 投资时间越长，复利效应越显著。提前开始投资比增加投资金额更重要。
                        </span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>
                          <strong>定期投资</strong>: 每月定投{formatCurrency(monthlyContribution)}，累计投入{formatCurrency(monthlyContribution * 12 * investmentYears)}，最终获得{formatCurrency(interestEarned)}的额外收益。
                        </span>
                      </li>
                      {considerInflation && (
                        <li className="flex items-start">
                          <TrendingUp className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>
                            <strong>通胀影响</strong>: 考虑{inflationRate}%的年通胀率，您的实际购买力为{formatCurrency(inflationAdjustedValue)}，相当于今天的购买力。
                          </span>
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="comparison">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-medium mb-6">投资策略比较</h2>
                
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    下图比较了不同投资策略在{investmentYears}年后的最终价值，包括不投资、低风险、中风险、高风险策略与您当前设置的策略({annualReturnRate}%)。
                  </p>
                  
                  <div className="h-[400px]">
                    {comparisonData && <Bar data={comparisonData} options={comparisonOptions} />}
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">关键见解</h3>
                  
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>风险与回报</strong>: 更高的预期回报通常伴随着更高的风险。您的风险承受能力应该与您的投资策略相匹配。
                    </p>
                    <p className="text-sm">
                      <strong>时间视角</strong>: 长期投资者通常可以承担更高的风险，因为他们有更多时间来度过市场波动。
                    </p>
                    <p className="text-sm">
                      <strong>复利效应</strong>: 即使是小幅提高年化收益率，长期来看也会产生显著差异。{investmentYears}年后，3%和9%的年化收益率可能导致最终价值相差数倍。
                    </p>
                    <p className="text-sm">
                      <strong>投资策略</strong>: 根据您的风险偏好和投资目标，您可能需要调整资产配置以达到理想的风险回报平衡。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end mt-6">
              <Link href="/tools/risk-assessment">
                <Button variant="outline">
                  返回风险偏好评估
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
