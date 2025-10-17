"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { getTranslations } from "@/lib/translations"

export function HeroSection() {
  const { locale } = useLocale()
  const t = getTranslations(locale)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/modern-elevator-shaft-interior-with-sleek-metallic.jpg" alt="Elevator background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl text-accent font-medium mb-4">{t.hero.subtitle}</p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">{t.hero.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base">
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
          {[
            { value: "25+", label: t.stats.experience },
            { value: "500+", label: t.stats.projects },
            { value: "300+", label: t.stats.clients },
            { value: "50+", label: t.stats.engineers },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  )
}
