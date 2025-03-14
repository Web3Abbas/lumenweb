"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Mail, User, Briefcase, MessageSquare } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          message: formData.get('message'),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-300 max-w-md mx-auto mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          className="border-gold-500 text-gold-400 hover:bg-gold-500/10"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 text-red-500 bg-red-500/10 rounded-lg border border-red-500/20">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-300">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4 text-gold-400" />
              Your Name
            </span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            required
            className="bg-navy-800/50 border-gold-500/20 focus:border-gold-500 focus:ring-gold-500/20"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-300">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold-400" />
              Email Address
            </span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            className="bg-navy-800/50 border-gold-500/20 focus:border-gold-500 focus:ring-gold-500/20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="text-slate-300">
          <span className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-gold-400" />
            Company
          </span>
        </Label>
        <Input
          id="company"
          name="company"
          placeholder="Your Company"
          className="bg-navy-800/50 border-gold-500/20 focus:border-gold-500 focus:ring-gold-500/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-slate-300">
          <span className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-gold-400" />
            Your Message
          </span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          required
          className="min-h-[120px] bg-navy-800/50 border-gold-500/20 focus:border-gold-500 focus:ring-gold-500/20"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-navy-950 font-medium"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

