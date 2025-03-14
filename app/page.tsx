import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { GlowingLogo } from "@/components/glowing-logo"
import { ServiceCard } from "@/components/service-card"
import { ExpertiseItem } from "@/components/expertise-item"
import { EnhancedPortfolioGallery } from "@/components/enhanced-portfolio-gallery"
import { ContactForm } from "@/components/contact-form"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-navy-950">
        <AnimatedBackground />
        <div className="container relative z-10 px-4 py-32 mx-auto text-center">
          <GlowingLogo className="mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gold-300">
            Illuminating Your Digital Presence
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Where light meets design. We transform visions into stunning digital experiences that captivate and inspire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-navy-950 font-medium"
            >
              Illuminate Your Brand
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-gold-500 text-gold-400 hover:bg-gold-500/10">
              View Our Work
            </Button>
          </div>
          <p className="mt-16 text-sm text-slate-400">Crafted by a Team of Visionaries</p>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <ChevronRight className="h-8 w-8 text-gold-400 rotate-90" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-24 bg-navy-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gold-300">
              Our Illuminating Services
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We offer a comprehensive range of design and development services to bring your vision to light.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Web Design"
              description="We create websites that shine, combining stunning visuals with intuitive user experiences."
              icon="Monitor"
            />
            <ServiceCard
              title="Graphic Design"
              description="From logos to marketing materials, we craft designs that captivate and inspire."
              icon="Palette"
            />
            <ServiceCard
              title="Branding"
              description="We build cohesive brand identities that illuminate your unique value proposition."
              icon="Sparkles"
            />
            <ServiceCard
              title="UI/UX Design"
              description="We design interfaces that delight users and drive engagement through intuitive experiences."
              icon="Layout"
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-blue blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-400 blur-[100px]"></div>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gold-300">
              Our Glow
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              What sets LumenWeb apart and makes us the perfect partner for your digital journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExpertiseItem
              title="A Powerful Team of Experts"
              description="Backed by a large, talented team of designers, developers, and strategists who bring diverse skills to every project."
              icon="Users"
            />
            <ExpertiseItem
              title="Lightning-Fast Delivery"
              description="We combine speed with precision to bring your vision to life faster without compromising on quality."
              icon="Zap"
            />
            <ExpertiseItem
              title="Innovative Design Solutions"
              description="We transform ideas into stunning, functional designs using cutting-edge technology and creative approaches."
              icon="Lightbulb"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="w-full py-24 bg-navy-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gold-300">
              Our Luminary Work
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Explore our portfolio of innovative projects that showcase our expertise in web development, design, and digital transformation.
            </p>
          </div>
          <EnhancedPortfolioGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-neon-blue blur-[100px]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-gold-400 blur-[100px]"></div>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gold-300">
                Let's Illuminate Your Vision
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Ready to bring your ideas to light? Get in touch with our team to start your journey.
              </p>
            </div>
            <div className="bg-navy-900/50 backdrop-blur-lg border border-gold-500/20 rounded-2xl p-8 shadow-glow">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-navy-950 border-t border-gold-500/20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <GlowingLogo className="mb-4 h-10" />
              <p className="text-slate-400 text-sm">
                Illuminating digital experiences through innovative design and development.
              </p>
            </div>
            <div>
              <h3 className="text-gold-400 font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-gold-400 transition-colors">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-gold-400 transition-colors">
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-gold-400 transition-colors">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-gold-400 transition-colors">
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold-400 font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-gold-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-gold-400 transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-gold-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-gold-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold-400 font-medium mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-300 hover:text-gold-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-slate-300 hover:text-gold-400 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-slate-300 hover:text-gold-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gold-500/10 text-center">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} LumenWeb. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

