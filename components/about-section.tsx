"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Lightbulb, HeadphonesIcon } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { getTranslations } from "@/lib/translations"
import { ScrollAnimation } from "@/components/scroll-animation"

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
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <ScrollAnimation animation="fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance px-2">{t.about.title}</h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-up" delay={200}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">{t.about.subtitle}</p>
          </ScrollAnimation>
          {t.about.content && (
            <ScrollAnimation animation="fade-in-up" delay={300}>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
                {t.about.content}
              </p>
            </ScrollAnimation>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <ScrollAnimation key={index} animation="scale-in" delay={400 + index * 150}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
