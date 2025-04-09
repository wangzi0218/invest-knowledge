"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowLeft, ArrowRight, BarChart, HelpCircle } from "lucide-react";
import Link from "next/link";

// 风险偏好类型
const riskProfiles = [
  {
    type: "保守型",
    description: "您倾向于保守投资，优先考虑资本保全而非高回报。适合低风险投资如货币市场基金、短期债券和定期存款。",
    allocation: {
      stocks: 20,
      bonds: 60,
      cash: 20,
      alternatives: 0,
    },
    color: "#4ade80", // 绿色
  },
  {
    type: "稳健型",
    description: "您愿意承担适度风险以获取更好回报。适合平衡型投资组合，包括优质债券、蓝筹股和部分指数基金。",
    allocation: {
      stocks: 40,
      bonds: 40,
      cash: 15,
      alternatives: 5,
    },
    color: "#60a5fa", // 蓝色
  },
  {
    type: "平衡型",
    description: "您在风险和回报之间寻求平衡。适合多元化投资组合，包括各类股票、债券和少量另类投资。",
    allocation: {
      stocks: 60,
      bonds: 30,
      cash: 5,
      alternatives: 5,
    },
    color: "#f59e0b", // 黄色
  },
  {
    type: "成长型",
    description: "您愿意承担较高风险以追求更高回报。适合以股票为主的投资组合，包括成长型股票和国际市场投资。",
    allocation: {
      stocks: 75,
      bonds: 15,
      cash: 5,
      alternatives: 5,
    },
    color: "#f97316", // 橙色
  },
  {
    type: "进取型",
    description: "您能够承受高风险波动，追求最大化长期回报。适合激进型投资组合，包括高成长股票、新兴市场和另类投资。",
    allocation: {
      stocks: 85,
      bonds: 5,
      cash: 0,
      alternatives: 10,
    },
    color: "#ef4444", // 红色
  },
];

// 评估问题
const questions = [
  {
    id: 1,
    question: "您计划多久后开始使用这笔投资资金？",
    explanation: "投资时间范围是决定风险承受能力的关键因素。时间越长，您承受短期市场波动的能力就越强。",
    options: [
      { value: "a", label: "1年内", score: 1 },
      { value: "b", label: "1-3年", score: 2 },
      { value: "c", label: "3-5年", score: 3 },
      { value: "d", label: "5-10年", score: 4 },
      { value: "e", label: "10年以上", score: 5 },
    ],
  },
  {
    id: 2,
    question: "如果您的投资在短期内下跌15%，您最可能采取什么行动？",
    explanation: "您对市场波动的反应反映了您的风险承受能力。能够在市场下跌时保持冷静的投资者通常适合承担更高风险。",
    options: [
      { value: "a", label: "立即全部卖出，避免进一步损失", score: 1 },
      { value: "b", label: "卖出部分投资，减少风险敞口", score: 2 },
      { value: "c", label: "持有不动，等待市场恢复", score: 3 },
      { value: "d", label: "如果有额外资金，会考虑逢低买入更多", score: 4 },
      { value: "e", label: "积极买入更多，把握市场低点机会", score: 5 },
    ],
  },
  {
    id: 3,
    question: "您的投资知识和经验如何？",
    explanation: "投资知识和经验有助于理解不同投资产品的风险和回报特性，从而做出更明智的投资决策。",
    options: [
      { value: "a", label: "几乎没有投资知识和经验", score: 1 },
      { value: "b", label: "有基本投资知识，但经验有限", score: 2 },
      { value: "c", label: "了解主要投资类型，有一定投资经验", score: 3 },
      { value: "d", label: "具备良好投资知识，有丰富投资经验", score: 4 },
      { value: "e", label: "专业投资知识，多年投资经验", score: 5 },
    ],
  },
  {
    id: 4,
    question: "您的投资目标是什么？",
    explanation: "不同的投资目标需要不同的投资策略。保本目标通常需要低风险策略，而追求高增长则需要承担更高风险。",
    options: [
      { value: "a", label: "保本为主，稳定收益", score: 1 },
      { value: "b", label: "保本为主，适度增长", score: 2 },
      { value: "c", label: "平衡收益与增长", score: 3 },
      { value: "d", label: "主要追求资本增长", score: 4 },
      { value: "e", label: "积极追求最大化资本增长", score: 5 },
    ],
  },
  {
    id: 5,
    question: "您的年龄段是？",
    explanation: "年龄是影响风险承受能力的因素之一。年轻投资者通常有更长的时间来弥补潜在损失，因此可以承担更高风险。",
    options: [
      { value: "a", label: "60岁以上", score: 1 },
      { value: "b", label: "50-60岁", score: 2 },
      { value: "c", label: "40-50岁", score: 3 },
      { value: "d", label: "30-40岁", score: 4 },
      { value: "e", label: "30岁以下", score: 5 },
    ],
  },
  {
    id: 6,
    question: "您的收入来源稳定性如何？",
    explanation: "稳定的收入来源可以增强您承担投资风险的能力，因为您不太可能需要提前赎回投资来满足生活需求。",
    options: [
      { value: "a", label: "非常不稳定，收入波动很大", score: 1 },
      { value: "b", label: "较不稳定，有一定收入波动", score: 2 },
      { value: "c", label: "一般稳定，偶有波动", score: 3 },
      { value: "d", label: "较为稳定，波动很小", score: 4 },
      { value: "e", label: "非常稳定，几乎没有波动", score: 5 },
    ],
  },
  {
    id: 7,
    question: "您更看重哪种投资回报？",
    explanation: "不同投资者对回报的偏好不同，有些人更看重稳定的收入流，而有些人则更看重长期资本增值。",
    options: [
      { value: "a", label: "稳定的利息或股息收入", score: 1 },
      { value: "b", label: "主要是收入，少量资本增值", score: 2 },
      { value: "c", label: "收入和资本增值平衡", score: 3 },
      { value: "d", label: "主要是资本增值，少量收入", score: 4 },
      { value: "e", label: "完全追求长期资本增值", score: 5 },
    ],
  },
];

export default function RiskAssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [riskProfile, setRiskProfile] = useState<typeof riskProfiles[0] | null>(null);

  // 当前问题编号
  const questionNumber = currentQuestion + 1;

  // 处理答案选择
  const handleAnswerSelect = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  // 下一个问题
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateRiskProfile();
      setShowResults(true);
    }
  };

  // 上一个问题
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // 计算风险偏好类型
  const calculateRiskProfile = () => {
    // 计算总分
    let totalScore = 0;
    Object.keys(answers).forEach((questionId) => {
      const question = questions.find((q) => q.id === parseInt(questionId));
      if (question) {
        const selectedOption = question.options.find((o) => o.value === answers[parseInt(questionId)]);
        if (selectedOption) {
          totalScore += selectedOption.score;
        }
      }
    });

    // 根据总分确定风险偏好类型
    const maxPossibleScore = questions.length * 5; // 每题最高5分
    const scorePercentage = (totalScore / maxPossibleScore) * 100;

    if (scorePercentage < 30) {
      setRiskProfile(riskProfiles[0]); // 保守型
    } else if (scorePercentage < 45) {
      setRiskProfile(riskProfiles[1]); // 稳健型
    } else if (scorePercentage < 65) {
      setRiskProfile(riskProfiles[2]); // 平衡型
    } else if (scorePercentage < 85) {
      setRiskProfile(riskProfiles[3]); // 成长型
    } else {
      setRiskProfile(riskProfiles[4]); // 进取型
    }
  };

  // 重新开始测试
  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setRiskProfile(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            返回首页
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">风险偏好评估</h1>
          <p className="text-muted-foreground mt-2">
            通过回答一系列问题，了解您的投资风险承受能力和适合的投资类型。
          </p>
        </div>

        {!showResults ? (
          <Card>
            <CardContent className="pt-6">
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">问题 {questionNumber} / {questions.length}</span>
                </div>
                <div className="bg-muted p-3 rounded-md text-sm mb-4">
                  <p className="font-medium text-primary">提示：</p>
                  <p>每个问题都会评估您投资决策的不同方面。请选择最符合您实际情况的选项，这将帮助我们更准确地评估您的风险承受能力。</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-medium mb-2">{questions[currentQuestion].question}</h2>
                <div className="bg-primary/5 p-3 rounded-md text-sm mb-4">
                  <p>{questions[currentQuestion].explanation}</p>
                </div>
                
                <RadioGroup
                  value={answers[questions[currentQuestion].id] || ""}
                  onValueChange={handleAnswerSelect}
                  className="space-y-3"
                >
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`option-${option.value}`} />
                      <Label htmlFor={`option-${option.value}`} className="flex-1 cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  上一题
                </Button>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                        <Button
                          onClick={handleNext}
                          disabled={!answers[questions[currentQuestion].id]}
                        >
                          {currentQuestion < questions.length - 1 ? (
                            <>
                              下一题
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </>
                          ) : (
                            "查看结果"
                          )}
                        </Button>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      {!answers[questions[currentQuestion].id] ? 
                        "请先选择一个选项" : 
                        currentQuestion < questions.length - 1 ? 
                          "继续下一个问题" : 
                          "完成评估并查看您的风险偏好类型"}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div>
            {riskProfile && (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                      <BarChart className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">您的风险偏好类型: <span className="text-primary">{riskProfile.type}</span></h2>
                    <p className="text-muted-foreground">{riskProfile.description}</p>
                  </div>

                  <div className="bg-muted p-4 rounded-md text-sm mb-6">
                    <p className="font-medium text-primary mb-2">什么是风险偏好？</p>
                    <p>风险偏好反映了您在追求投资回报时愿意承担风险的程度。不同风险偏好类型适合不同的投资策略和资产配置方案。了解自己的风险偏好有助于制定适合自己的投资计划，并在市场波动时做出理性决策。</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                      建议资产配置
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs">
                            资产配置是指将投资资金分配到不同类型资产的比例。合理的资产配置可以帮助平衡风险和回报。
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="flex items-center gap-1">
                            股票
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle className="h-3 w-3 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                  股票代表公司所有权的份额，通常提供较高的长期回报，但也伴随较高的波动性和风险。
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </span>
                          <span className="font-medium">{riskProfile.allocation.stocks}%</span>
                        </div>
                        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-red-500 h-full rounded-full" 
                            style={{ width: `${riskProfile.allocation.stocks}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="flex items-center gap-1">
                            债券
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle className="h-3 w-3 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                  债券是政府或公司发行的借款工具，通常提供固定收益，风险低于股票但高于现金。
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </span>
                          <span className="font-medium">{riskProfile.allocation.bonds}%</span>
                        </div>
                        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-blue-500 h-full rounded-full" 
                            style={{ width: `${riskProfile.allocation.bonds}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="flex items-center gap-1">
                            现金
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle className="h-3 w-3 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                  现金和现金等价物（如货币市场基金）提供高流动性和安全性，但回报率通常较低。
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </span>
                          <span className="font-medium">{riskProfile.allocation.cash}%</span>
                        </div>
                        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-green-500 h-full rounded-full" 
                            style={{ width: `${riskProfile.allocation.cash}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="flex items-center gap-1">
                            另类投资
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle className="h-3 w-3 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                  另类投资包括房地产、大宗商品、私募股权等非传统资产，可以提供多元化和潜在的高回报。
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </span>
                          <span className="font-medium">{riskProfile.allocation.alternatives}%</span>
                        </div>
                        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-purple-500 h-full rounded-full" 
                            style={{ width: `${riskProfile.allocation.alternatives}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={handleRestart} variant="outline" className="flex-1">
                      重新测试
                    </Button>
                    <Link href="/tools/portfolio-simulator" className="flex-1">
                      <Button className="w-full">
                        前往投资组合模拟器
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
