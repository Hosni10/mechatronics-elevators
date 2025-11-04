"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { getTranslations } from "@/lib/translations"
import { AnimatedNumber } from "@/components/animated-number"

export function HeroSection() {
  const { locale } = useLocale()
  const t = getTranslations(locale)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/modern-elevator-shaft-interior-with-sleek-metallic.jpg" alt="Elevator background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance animate-fade-in-up px-2">
            {t.hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-accent font-medium mb-3 sm:mb-4 animate-fade-in-up animation-delay-200 px-2">
            {t.hero.subtitle}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty animate-fade-in-up animation-delay-400 px-2">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-600 px-2">
            <Button 
              size="lg" 
              className="text-base hover:scale-105 transition-transform duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeRIHOFhN4QuQciQ24TmhknOj1KaWYv5ryo14kJ8inbgo6YgQ/viewform?usp=publish-editor', '_blank', 'noopener,noreferrer')}
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base bg-transparent hover:scale-105 transition-transform duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto px-4">
          {[
            { value: "20+", label: t.stats.experience },
            { value: "500+", label: t.stats.projects },
            { value: "300+", label: t.stats.clients },
            { value: "20+", label: t.stats.engineers },
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${800 + index * 100}ms` }}>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-1 sm:mb-2">
                <AnimatedNumber value={stat.value} duration={2000} />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground px-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
      </div>
    </section>
  )
}
