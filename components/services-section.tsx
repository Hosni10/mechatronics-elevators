"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Settings, TrendingUp } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { getTranslations } from "@/lib/translations"

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
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
