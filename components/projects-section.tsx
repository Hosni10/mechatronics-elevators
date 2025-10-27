"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"

export function ProjectsSection() {
  const { locale } = useLocale()

  const projects = [
    {
      title: locale === "ar" ? "مطعم واحة ستهم" : "Setohom Oasis Restaurant",
      location: locale === "ar" ? "القاهرة، مصر" : "Cairo, Egypt",
      image: "/modern-glass-office-building-elevator-lobby.jpg",
      type: locale === "ar" ? "مصاعد تجارية" : "Commercial Elevators",
    },
    {
      title: locale === "ar" ? "كومبوند نيو جيزة" : "New Giza Residential Compound",
      location: locale === "ar" ? "الجيزة، مصر" : "Giza, Egypt",
      image: "/luxury-residential-building-elevator-interior.jpg",
      type: locale === "ar" ? "مصاعد سكنية" : "Residential Elevators",
    },
    {
      title: locale === "ar" ? "مصنع البحر الأحمر للمواسير" : "Red Sea Pipes Factory",
      location: locale === "ar" ? "الجيزة، مصر" : "Giza, Egypt",
      image: "/shopping-mall-escalators-modern-design.jpg",
      type: locale === "ar" ? "مصانع و مستشفيات" : "Factories and Hospitals",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance animate-fade-in-up">
            {locale === "ar" ? "مشاريعنا المميزة" : "Featured Projects"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {locale === "ar"
              ? "نفخر بتقديم حلول مبتكرة لمشاريع متنوعة في جميع أنحاء جمهورية مصر العربية"
              : "Proud to deliver innovative solutions for diverse projects across the country"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in-up" style={{ animationDelay: `${400 + index * 200}ms` }}>
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium group-hover:scale-110 transition-transform duration-300">
                  {project.type}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animation-delay-800">
          <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300 hover:shadow-lg group">
            {locale === "ar" ? "عرض جميع المشاريع" : "View All Projects"}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}
