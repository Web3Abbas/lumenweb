"use client"

import { useState, useEffect, useRef } from "react"
import { Users, Zap, Lightbulb, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExpertiseItemProps {
  title: string
  description: string
  icon: "Users" | "Zap" | "Lightbulb"
}

export function ExpertiseItem({ title, description, icon }: ExpertiseItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  const IconComponent: LucideIcon = icon === "Users" ? Users : icon === "Zap" ? Zap : Lightbulb

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={itemRef}
      className={cn(
        "bg-navy-900/50 backdrop-blur-sm border border-gold-500/10 rounded-xl p-6 transition-all duration-700 transform opacity-0 translate-y-8",
        isVisible ? "opacity-100 translate-y-0" : "",
      )}
    >
      <div className="relative w-14 h-14 mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute inset-1 bg-navy-900 rounded-full flex items-center justify-center">
          <IconComponent className="h-7 w-7 text-gold-400" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300">{description}</p>
      <div className="mt-6 h-1 w-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></div>
    </div>
  )
}

