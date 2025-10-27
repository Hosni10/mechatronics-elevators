"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Lightbulb, HeadphonesIcon } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { getTranslations } from "@/lib/translations"

export function AboutSection() {
  const { locale } = useLocale()
  const t = getTranslations(locale)

  const features = [
    {
      icon: Award,
      title: t.about.quality,
      description: t.about.qualityDesc,
    },
    {
      icon: Shield,
      title: t.about.safety,
      description: t.about.safetyDesc,
    },
    {
      icon: Lightbulb,
      title: t.about.innovation,
      description: t.about.innovationDesc,
    },
    {
      icon: HeadphonesIcon,
      title: t.about.support,
      description: t.about.supportDesc,
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance animate-fade-in-up">{t.about.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">{t.about.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fade-in-up group" style={{ animationDelay: `${400 + index * 150}ms` }}>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
