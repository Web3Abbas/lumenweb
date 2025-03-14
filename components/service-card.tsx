"use client"

import { useState } from "react"
import { Monitor, Palette, Sparkles, Layout, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: "Monitor" | "Palette" | "Sparkles" | "Layout"
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const IconComponent: LucideIcon =
    icon === "Monitor" ? Monitor : icon === "Palette" ? Palette : icon === "Sparkles" ? Sparkles : Layout

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-500 border-gold-500/20 bg-navy-800/50 backdrop-blur-sm",
        isHovered ? "transform -translate-y-2 shadow-glow" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-gold-400/10 to-neon-blue/10 opacity-0 transition-opacity duration-500",
          isHovered ? "opacity-100" : "",
        )}
      />

      <CardHeader>
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 transition-all duration-500",
            isHovered ? "scale-110" : "",
          )}
        >
          <IconComponent className="h-6 w-6" />
        </div>
        <CardTitle className="mt-4 text-xl font-bold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-300">{description}</CardDescription>
        <div
          className={cn(
            "mt-4 text-gold-400 flex items-center transition-all duration-500 opacity-0",
            isHovered ? "opacity-100" : "",
          )}
        >
          <span className="text-sm font-medium">Learn more</span>
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </CardContent>
    </Card>
  )
}

