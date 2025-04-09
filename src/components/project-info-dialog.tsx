"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import Link from "next/link";

export function ProjectInfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
          <Info className="h-4 w-4" />
          <span>关于投资知识库</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-xl">关于投资知识库</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            项目背景、目标与未来规划
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4 px-6 overflow-y-auto flex-grow">
          <div>
            <h3 className="text-lg font-medium mb-2">项目初衷</h3>
            <p className="text-sm text-muted-foreground">
              投资知识库项目源于个人学习投资知识的需求，旨在帮助自己和投资小白快速掌握系统化的投资知识。在学习投资的过程中，我发现市面上的投资知识往往零散且专业性过强，不易被初学者理解和吸收。因此，我希望构建一个结构清晰、内容易懂的知识库，将复杂的投资概念简化，帮助初学者建立正确的投资思维和知识体系。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">AI 辅助开发</h3>
            <p className="text-sm text-muted-foreground">
              在本项目的开发过程中，我借助了AI的能力来加速前端项目的实现。AI不仅帮助我构建了基础的页面结构和组件，还协助我优化了内容组织和表达方式，使得复杂的投资概念能够以更清晰、更易理解的方式呈现。这种人机协作的开发模式大大提高了开发效率，也为项目注入了更多创新的思考。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">产品设计考量</h3>
            <p className="text-sm text-muted-foreground">
              在产品设计上，我主要从以下几个角度进行了考虑：
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-muted-foreground">
              <li><strong>用户友好性</strong>：采用清晰的导航结构和直观的界面设计，降低用户使用门槛</li>
              <li><strong>内容结构化</strong>：将投资知识按主题分类，构建系统化的知识体系，便于用户循序渐进地学习</li>
              <li><strong>信息可访问性</strong>：通过目录导航、相关主题推荐等功能，提高信息的可发现性和关联性</li>
              <li><strong>视觉简洁性</strong>：采用简约的设计风格，减少视觉干扰，让用户专注于内容本身</li>
              <li><strong>内容可理解性</strong>：使用通俗易懂的语言和实例解释复杂概念，降低学习难度</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">未来改进方向</h3>
            <p className="text-sm text-muted-foreground">
              由于时间限制，当前版本比较粗糙，未来还有如下的优化空间：
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-muted-foreground">
              <li>增强交互体验：引入更精美的动画和交互效果，提升用户体验</li>
              <li>优化信息密度：调整内容布局和展示方式，提高信息传递效率</li>
              <li>增加可视化内容：添加图表、图示等可视化元素，帮助用户更直观地理解概念</li>
              <li>完善导航功能：优化右侧栏目的固定效果，提高浏览体验</li>
              <li>扩充学习资源：增加推荐书目、视频资源等补充材料，为用户提供更多学习途径</li>
              <li>添加互动功能：引入问答、笔记等功能，增强用户参与度和学习效果</li>
              <li>个性化推荐：基于用户兴趣和学习进度，提供个性化的内容推荐</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">真诚感言</h3>
            <p className="text-sm text-muted-foreground">
              投资知识库是一个不断成长的项目，我希望它能够成为投资初学者的得力助手，帮助更多人建立正确的投资观念和方法。尽管当前版本还有诸多不足，但我会持续改进和完善，让它变得更好。感谢每一位使用者的支持和反馈，你们的参与是这个项目进步的最大动力。
            </p>
          </div>
        </div>
        
        <DialogFooter className="px-6 py-4 border-t">
          <Button variant="outline" className="w-full" asChild>
            <Link href="https://hiwannz.cn/contact" target="_blank">
              联系我提建议
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
