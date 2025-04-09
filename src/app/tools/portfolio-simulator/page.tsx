"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Info, PieChart } from "lucide-react";
import Link from "next/link";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";

// 注册 ChartJS 组件
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

// 定义资产类型
type AssetId = "stocks" | "bonds" | "cash" | "realestate" | "commodities";

interface Asset {
  id: AssetId;
  name: string;
  color: string;
  expectedReturn: number;
  risk: number;
  description: string;
}

interface AssetAllocation {
  [key: string]: number;
  stocks: number;
  bonds: number;
  cash: number;
  realestate: number;
  commodities: number;
}

interface ScenarioReturns {
  [key: string]: number;
  stocks: number;
  bonds: number;
  cash: number;
  realestate: number;
  commodities: number;
}

// 资产类别
const assetClasses: Asset[] = [
  {
    id: "stocks",
    name: "股票",
    color: "#ef4444", // 红色
    expectedReturn: 9.5,
    risk: 15.0,
    description: "包括国内外股票、股票基金和ETF",
  },
  {
    id: "bonds",
    name: "债券",
    color: "#3b82f6", // 蓝色
    expectedReturn: 4.0,
    risk: 5.0,
    description: "包括政府债券、企业债券和债券基金",
  },
  {
    id: "cash",
    name: "现金",
    color: "#22c55e", // 绿色
    expectedReturn: 1.5,
    risk: 0.5,
    description: "包括货币市场基金、短期存款和高流动性资产",
  },
  {
    id: "realestate",
    name: "房地产",
    color: "#a855f7", // 紫色
    expectedReturn: 7.0,
    risk: 12.0,
    description: "包括房地产投资信托基金(REITs)和房地产基金",
  },
  {
    id: "commodities",
    name: "大宗商品",
    color: "#eab308", // 黄色
    expectedReturn: 5.0,
    risk: 17.0,
    description: "包括黄金、白银和商品ETF",
  },
];

// 预设投资组合
const presetPortfolios: { name: string; allocation: AssetAllocation }[] = [
  {
    name: "保守型",
    allocation: {
      stocks: 20,
      bonds: 50,
      cash: 25,
      realestate: 5,
      commodities: 0,
    },
  },
  {
    name: "稳健型",
    allocation: {
      stocks: 40,
      bonds: 40,
      cash: 10,
      realestate: 5,
      commodities: 5,
    },
  },
  {
    name: "平衡型",
    allocation: {
      stocks: 60,
      bonds: 25,
      cash: 5,
      realestate: 5,
      commodities: 5,
    },
  },
  {
    name: "成长型",
    allocation: {
      stocks: 70,
      bonds: 15,
      cash: 5,
      realestate: 5,
      commodities: 5,
    },
  },
  {
    name: "进取型",
    allocation: {
      stocks: 80,
      bonds: 5,
      cash: 0,
      realestate: 10,
      commodities: 5,
    },
  },
];

// 市场情景
const marketScenarios: { id: string; name: string; description: string; returns: ScenarioReturns }[] = [
  {
    id: "normal",
    name: "正常市场",
    description: "市场按照历史平均水平表现",
    returns: {
      stocks: 1.0,
      bonds: 1.0,
      cash: 1.0,
      realestate: 1.0,
      commodities: 1.0,
    },
  },
  {
    id: "bull",
    name: "牛市",
    description: "股票市场强劲上涨，债券表现平平",
    returns: {
      stocks: 1.5,
      bonds: 0.8,
      cash: 0.9,
      realestate: 1.2,
      commodities: 0.9,
    },
  },
  {
    id: "bear",
    name: "熊市",
    description: "股票市场大幅下跌，避险资产表现较好",
    returns: {
      stocks: 0.5,
      bonds: 1.1,
      cash: 1.1,
      realestate: 0.7,
      commodities: 1.3,
    },
  },
  {
    id: "inflation",
    name: "高通胀",
    description: "通胀率上升，实物资产表现较好",
    returns: {
      stocks: 0.9,
      bonds: 0.7,
      cash: 0.6,
      realestate: 1.1,
      commodities: 1.4,
    },
  },
];

export default function PortfolioSimulatorPage() {
  const [allocation, setAllocation] = useState<AssetAllocation>({
    stocks: 60,
    bonds: 25,
    cash: 5,
    realestate: 5,
    commodities: 5,
  });
  const [selectedScenario, setSelectedScenario] = useState("normal");
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [portfolioRisk, setPortfolioRisk] = useState(0);
  const [projectionData, setProjectionData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("allocation");

  // 处理资产分配变化
  const handleAllocationChange = (assetId: string, value: number[]) => {
    // 更新当前资产的分配
    const newAllocation = { ...allocation, [assetId]: value[0] };
    
    // 计算总和
    const total = Object.values(newAllocation).reduce((sum, value) => sum + value, 0);
    
    // 如果总和不等于100，调整其他资产的分配
    if (total !== 100) {
      const diff = total - 100;
      const otherAssets = Object.keys(newAllocation).filter(id => id !== assetId);
      
      // 如果只有一个其他资产，直接调整它
      if (otherAssets.length === 1) {
        const otherAsset = otherAssets[0];
        newAllocation[otherAsset] = Math.max(0, newAllocation[otherAsset] - diff);
      } else {
        // 按比例调整其他资产
        const otherTotal = otherAssets.reduce((sum, id) => sum + newAllocation[id], 0);
        if (otherTotal > 0) {
          otherAssets.forEach(id => {
            const proportion = newAllocation[id] / otherTotal;
            newAllocation[id] = Math.max(0, Math.round(newAllocation[id] - diff * proportion));
          });
        }
        
        // 确保总和为100
        const newTotal = Object.values(newAllocation).reduce((sum, value) => sum + value, 0);
        if (newTotal !== 100) {
          // 找到最大的非当前资产进行最终调整
          const maxOtherAsset = otherAssets.reduce((a, b) => 
            newAllocation[a] > newAllocation[b] ? a : b
          );
          newAllocation[maxOtherAsset] += (100 - newTotal);
        }
      }
    }
    
    setAllocation(newAllocation);
  };

  // 应用预设组合
  const applyPreset = (preset: typeof presetPortfolios[0]) => {
    setAllocation(preset.allocation);
  };

  // 计算投资组合的预期回报和风险
  useEffect(() => {
    let totalReturn = 0;
    let totalRisk = 0;
    let weightedCovariance = 0;

    // 获取当前情景的回报修正因子
    const scenario = marketScenarios.find(s => s.id === selectedScenario);
    const scenarioReturns: ScenarioReturns = scenario ? scenario.returns : marketScenarios[0].returns;

    // 计算预期回报
    assetClasses.forEach(asset => {
      const weight = allocation[asset.id] / 100;
      totalReturn += weight * asset.expectedReturn * scenarioReturns[asset.id];
      totalRisk += weight * asset.risk * asset.risk; // 简化的风险计算
    });

    // 简化的风险计算，假设资产之间有一定相关性
    totalRisk = Math.sqrt(totalRisk) * 0.85; // 假设有15%的多元化收益

    setExpectedReturn(totalReturn);
    setPortfolioRisk(totalRisk);

    // 生成未来20年的投资组合价值投影
    generateProjection(totalReturn, totalRisk);
  }, [allocation, selectedScenario]);

  // 生成投资组合价值投影
  const generateProjection = (annualReturn: number, risk: number) => {
    const years = 20;
    const initialInvestment = 10000; // 假设初始投资10万元
    const labels = Array.from({ length: years + 1 }, (_, i) => `第${i}年`);
    
    // 生成三条线：预期回报、乐观情景和悲观情景
    const expectedData = [initialInvestment];
    const optimisticData = [initialInvestment];
    const pessimisticData = [initialInvestment];
    
    for (let i = 1; i <= years; i++) {
      // 预期回报线
      expectedData.push(expectedData[i-1] * (1 + annualReturn / 100));
      
      // 乐观情景（预期回报+风险）
      optimisticData.push(optimisticData[i-1] * (1 + (annualReturn + risk/2) / 100));
      
      // 悲观情景（预期回报-风险）
      pessimisticData.push(pessimisticData[i-1] * (1 + (annualReturn - risk/2) / 100));
    }
    
    setProjectionData({
      labels,
      datasets: [
        {
          label: '预期回报',
          data: expectedData,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          fill: false,
        },
        {
          label: '乐观情景',
          data: optimisticData,
          borderColor: '#22c55e',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          borderDash: [5, 5],
          fill: false,
        },
        {
          label: '悲观情景',
          data: pessimisticData,
          borderColor: '#ef4444',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          borderDash: [5, 5],
          fill: false,
        },
      ],
    });
  };

  // 准备饼图数据
  const pieData = {
    labels: assetClasses.map(asset => asset.name),
    datasets: [
      {
        data: assetClasses.map(asset => allocation[asset.id]),
        backgroundColor: assetClasses.map(asset => asset.color),
        borderWidth: 1,
      },
    ],
  };

  // 饼图选项
  const pieOptions = {
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  // 折线图选项
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: '投资组合价值投影（初始投资10,000元）',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function(value: any) {
            return '¥' + value.toLocaleString();
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
          <h1 className="text-3xl font-bold tracking-tight">投资组合模拟器</h1>
          <p className="text-muted-foreground mt-2">
            创建和测试不同的投资组合，查看预期回报和风险水平，规划您的投资策略。
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="allocation">资产配置</TabsTrigger>
            <TabsTrigger value="projection">回报投影</TabsTrigger>
          </TabsList>
          
          <TabsContent value="allocation">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-medium mb-4">资产配置</h2>
                  
                  <div className="space-y-6">
                    {assetClasses.map(asset => (
                      <div key={asset.id}>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: asset.color }}></div>
                            <span className="font-medium">{asset.name}</span>
                          </div>
                          <span className="text-sm font-medium">{allocation[asset.id]}%</span>
                        </div>
                        <Slider
                          value={[allocation[asset.id]]}
                          min={0}
                          max={100}
                          step={1}
                          onValueChange={(value) => handleAllocationChange(asset.id, value)}
                          className="mb-1"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>预期回报: {asset.expectedReturn}%</span>
                          <span>风险: {asset.risk}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <h3 className="text-sm font-medium mb-3">预设投资组合</h3>
                    <div className="flex flex-wrap gap-2">
                      {presetPortfolios.map((preset, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => applyPreset(preset)}
                        >
                          {preset.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-medium mb-4">组合分析</h2>
                    
                    <div className="mb-6 h-[200px] flex items-center justify-center">
                      <Pie data={pieData} options={pieOptions} />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">预期年回报率:</span>
                        <span className="font-medium">{expectedReturn.toFixed(2)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">投资组合风险:</span>
                        <span className="font-medium">{portfolioRisk.toFixed(2)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">风险回报比:</span>
                        <span className="font-medium">{(expectedReturn / portfolioRisk).toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-medium mb-4">市场情景</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      选择不同的市场情景，查看您的投资组合在各种市场条件下的表现。
                    </p>
                    
                    <div className="space-y-3">
                      {marketScenarios.map(scenario => (
                        <div
                          key={scenario.id}
                          className={`flex items-start p-3 border rounded-md cursor-pointer hover:border-primary transition-colors ${
                            selectedScenario === scenario.id ? 'border-primary bg-primary/5' : ''
                          }`}
                          onClick={() => setSelectedScenario(scenario.id)}
                        >
                          <div className="flex-1">
                            <div className="font-medium">{scenario.name}</div>
                            <div className="text-sm text-muted-foreground">{scenario.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="projection">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium">投资组合价值投影</h2>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Info className="h-4 w-4 mr-1" />
                    <span>基于当前资产配置和所选市场情景</span>
                  </div>
                </div>
                
                <div className="h-[400px]">
                  {projectionData && <Line data={projectionData} options={lineOptions} />}
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-md">
                      <div className="text-sm text-muted-foreground mb-1">20年后预期价值</div>
                      <div className="text-xl font-bold">
                        ¥{Math.round(10000 * Math.pow(1 + expectedReturn / 100, 20)).toLocaleString()}
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-md">
                      <div className="text-sm text-muted-foreground mb-1">乐观情景价值</div>
                      <div className="text-xl font-bold">
                        ¥{Math.round(10000 * Math.pow(1 + (expectedReturn + portfolioRisk/2) / 100, 20)).toLocaleString()}
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 rounded-md">
                      <div className="text-sm text-muted-foreground mb-1">悲观情景价值</div>
                      <div className="text-xl font-bold">
                        ¥{Math.round(10000 * Math.pow(1 + (expectedReturn - portfolioRisk/2) / 100, 20)).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end mt-6">
              <Link href="/tools/compound-calculator">
                <Button>
                  前往复利计算器
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
