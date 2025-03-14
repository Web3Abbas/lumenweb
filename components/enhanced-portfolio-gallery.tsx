"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Globe } from "lucide-react"

const categories = [
  "All",
  "Web Development",
  "Web3/DeFi",
  "UI/UX Design",
  "Mobile Apps",
  "Branding",
  "Enterprise"
]

const projects = [
  {
    id: 1,
    title: "DeFi Trading Platform",
    category: "Web3/DeFi",
    image: "/portfolio/defi-platform.jpg",
    description: "A sophisticated decentralized trading platform with real-time price feeds, wallet integration, and advanced charting capabilities.",
    techStack: ["React", "Solidity", "Web3.js", "TailwindCSS", "Hardhat"],
    outcomes: [
      "100,000+ monthly active users",
      "$50M+ in trading volume",
      "Integration with major blockchain networks"
    ],
    demoUrl: "https://defi.example.com",
    githubUrl: "https://github.com/example/defi"
  },
  {
    id: 2,
    title: "AI-Powered SaaS Dashboard",
    category: "Enterprise",
    image: "/portfolio/saas-dashboard.jpg",
    description: "Enterprise analytics dashboard with AI-driven insights, real-time data visualization, and predictive modeling.",
    techStack: ["Next.js", "TypeScript", "Python", "TensorFlow", "PostgreSQL"],
    outcomes: [
      "Reduced decision-making time by 60%",
      "Increased user productivity by 40%",
      "Seamless integration with existing systems"
    ],
    demoUrl: "https://saas.example.com"
  },
  {
    id: 3,
    title: "Luxury E-commerce Platform",
    category: "Web Development",
    image: "/portfolio/ecommerce.jpg",
    description: "High-end e-commerce platform with AR product visualization, personalized recommendations, and seamless checkout experience.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe", "ThreeJS"],
    outcomes: [
      "200% increase in conversion rate",
      "45% reduction in cart abandonment",
      "99.9% uptime maintained"
    ],
    demoUrl: "https://luxury.example.com"
  },
  {
    id: 4,
    title: "HealthTech Mobile App",
    category: "Mobile Apps",
    image: "/portfolio/health-app.jpg",
    description: "Comprehensive health tracking app with AI-powered insights, telemedicine integration, and real-time monitoring.",
    techStack: ["React Native", "Firebase", "TensorFlow Lite", "Node.js"],
    outcomes: [
      "500,000+ downloads",
      "4.8/5 App Store rating",
      "Featured in App Store"
    ],
    demoUrl: "https://apps.example.com/health"
  },
  {
    id: 5,
    title: "Modern Banking Interface",
    category: "UI/UX Design",
    image: "/portfolio/banking-ui.jpg",
    description: "Next-generation banking interface with focus on accessibility, security, and user experience.",
    techStack: ["Figma", "Principle", "Framer", "Adobe CC"],
    outcomes: [
      "90% user satisfaction rate",
      "60% reduction in support tickets",
      "Award-winning design"
    ],
    demoUrl: "https://banking.example.com"
  },
  {
    id: 6,
    title: "Tech Startup Branding",
    category: "Branding",
    image: "/portfolio/startup-brand.jpg",
    description: "Complete brand identity for an innovative tech startup, including logo, guidelines, and marketing materials.",
    techStack: ["Adobe CC", "Figma", "Blender", "After Effects"],
    outcomes: [
      "Successful Series A funding",
      "Strong brand recognition",
      "Consistent brand presence"
    ],
    demoUrl: "https://brand.example.com"
  }
]

export function EnhancedPortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="space-y-8">
      {/* Category Filter */}
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

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:shadow-glow bg-navy-900/50 border border-gold-500/10"
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gold-400 mb-2">{project.category}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-gold-500/20 text-slate-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-sm">
          <div className="bg-navy-900 border border-gold-500/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              <button
                className="absolute top-4 right-4 bg-navy-950/80 text-white p-2 rounded-full hover:bg-navy-950"
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
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <div className="flex gap-2">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-400 hover:text-gold-300"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-400 hover:text-gold-300"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gold-400 mb-4">{selectedProject.category}</p>
              <p className="text-slate-300 mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-gold-500/20 text-slate-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Key Outcomes</h4>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  {selectedProject.outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 