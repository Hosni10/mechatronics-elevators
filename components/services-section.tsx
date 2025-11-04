"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Settings, TrendingUp } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { getTranslations } from "@/lib/translations"
import { ScrollAnimation } from "@/components/scroll-animation"

export function ServicesSection() {
  const { locale } = useLocale()
  const t = getTranslations(locale)

  const services = [
    {
      icon: Wrench,
      title: t.services.installation.title,
      description: t.services.installation.description,
    },
    {
      icon: Settings,
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
    },
    {
      icon: TrendingUp,
      title: t.services.modernization.title,
      description: t.services.modernization.description,
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <ScrollAnimation animation="fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance px-2">{t.services.title}</h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-up" delay={200}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">{t.services.subtitle}</p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollAnimation key={index} animation="slide-in-left" delay={400 + index * 200}>
                <Card className="border-2 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg group h-full flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </section>
  )
}
