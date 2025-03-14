"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const categories = ["All", "Web Design", "Branding", "UI/UX", "Graphic Design"]

const projects = [
  {
    id: 1,
    title: "Luxury Fashion E-commerce",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    description: "A premium shopping experience for a high-end fashion brand.",
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "UI/UX",
    image: "/placeholder.svg?height=600&width=800",
    description: "Intuitive interface for complex financial data visualization.",
  },
  {
    id: 3,
    title: "Wellness Brand Identity",
    category: "Branding",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete brand identity for a modern wellness company.",
  },
  {
    id: 4,
    title: "Tech Conference Materials",
    category: "Graphic Design",
    image: "/placeholder.svg?height=600&width=800",
    description: "Comprehensive design system for a major tech conference.",
  },
  {
    id: 5,
    title: "Boutique Hotel Website",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    description: "Elegant website design for a luxury boutique hotel chain.",
  },
  {
    id: 6,
    title: "Mobile App UI Kit",
    category: "UI/UX",
    image: "/placeholder.svg?height=600&width=800",
    description: "Comprehensive UI kit for a cutting-edge mobile application.",
  },
]

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className={cn(
              "rounded-full",
              activeCategory === category
                ? "bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950"
                : "border-gold-500/20 text-slate-300 hover:text-gold-400 hover:border-gold-500/50",
            )}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:shadow-glow"
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-slate-300">{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-sm">
          <div className="bg-navy-900 border border-gold-500/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              <button
                className="absolute top-4 right-4 bg-navy-950/80 text-white p-2 rounded-full"
                onClick={() => setSelectedProject(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-gold-400 mb-4">{selectedProject.category}</p>
              <p className="text-slate-300">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

