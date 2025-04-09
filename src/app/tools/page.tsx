import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ChartBar, PieChart, TrendingUp, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "投资工具 | 投资知识库",
  description: "实用的投资工具集，包括风险偏好评估、投资组合模拟器和复利计算器，帮助您做出更明智的投资决策。",
};

export default function ToolsPage() {
  const tools = [
    {
      id: "risk-assessment",
      title: "风险偏好评估",
      description: "通过一系列问题评估您的风险承受能力，了解适合您的投资类型。",
      icon: <ChartBar className="h-6 w-6 text-primary" />,
      href: "/tools/risk-assessment",
    },
    {
      id: "portfolio-simulator",
      title: "投资组合模拟器",
      description: "测试不同资产配置的预期回报和风险水平，了解多元化投资的重要性",
      icon: <PieChart className="h-6 w-6 text-primary" />,
      href: "/tools/portfolio-simulator",
    },
    {
      id: "compound-calculator",
      title: "复利计算器",
      description: "直观展示长期投资和复利的强大效果，帮助您理解时间对投资的影响",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      href: "/tools/compound-calculator",
    },
    {
      id: "investment-glossary",
      title: "投资术语词典",
      description: "查询常见投资术语的简明解释和实际示例，帮助您更好地理解投资概念",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      href: "/tools/investment-glossary",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">投资工具</h1>
        <p className="text-lg text-muted-foreground mb-10">
          使用这些互动工具来评估您的投资风格、测试投资策略并规划您的财务未来。这些工具旨在帮助您做出更明智的投资决策。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="group block p-6 border rounded-lg hover:border-primary hover:shadow-md transition-all"
            >
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
                {tool.icon}
              </div>
              <h2 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                {tool.title}
              </h2>
              <p className="text-muted-foreground">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
