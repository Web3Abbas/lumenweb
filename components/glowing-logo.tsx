"use client"

import { useEffect, useRef } from "react"

interface GlowingLogoProps {
  className?: string
}

export function GlowingLogo({ className = "" }: GlowingLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Animation variables
    let animationFrameId: number
    const particles: Particle[] = []
    const particleCount = 50

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: `rgba(255, 215, 0, ${Math.random() * 0.5 + 0.2})`,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
      })
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw logo text with glow
      const rect = canvas.getBoundingClientRect()
      const fontSize = rect.height * 0.6
      ctx.font = `bold ${fontSize}px sans-serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Glow effect
      ctx.shadowColor = "rgba(255, 215, 0, 0.8)"
      ctx.shadowBlur = 15
      ctx.fillStyle = "white"
      ctx.fillText("LumenWeb", rect.width / 2, rect.height / 2)

      // Remove glow for particles
      ctx.shadowBlur = 0

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Update particle position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap particles around canvas
        if (particle.x < 0) particle.x = rect.width
        if (particle.x > rect.width) particle.x = 0
        if (particle.y < 0) particle.y = rect.height
        if (particle.y > rect.height) particle.y = 0
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`h-12 w-48 ${className}`} aria-label="LumenWeb Logo" />
}

interface Particle {
  x: number
  y: number
  radius: number
  color: string
  speedX: number
  speedY: number
}

