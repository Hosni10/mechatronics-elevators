"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ArrowRight } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { ScrollAnimation } from "@/components/scroll-animation"

export function ProjectsSection() {
  const { locale } = useLocale()
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

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
          <ScrollAnimation animation="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {locale === "ar" ? "مشاريعنا المميزة" : "Featured Projects"}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-up" delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {locale === "ar"
                ? "نفخر بتقديم حلول مبتكرة لمشاريع متنوعة في جميع أنحاء جمهورية مصر العربية"
                : "Proud to deliver innovative solutions for diverse projects across the country"}
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={400 + index * 200}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div 
                  className="relative h-80 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(index)}
                >
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
            </ScrollAnimation>
          ))}
        </div>

        <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl p-0">
            {selectedProject !== null && (
              <>
                <DialogHeader className="px-6 pt-6">
                  <DialogTitle>{projects[selectedProject].title}</DialogTitle>
                </DialogHeader>
                <div className="relative w-full aspect-video overflow-hidden">
                  <img
                    src={projects[selectedProject].image || "/placeholder.svg"}
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="px-6 pb-6 space-y-2">
                  <p className="text-muted-foreground text-sm">{projects[selectedProject].location}</p>
                  <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {projects[selectedProject].type}
                  </span>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <ScrollAnimation animation="fade-in-up" delay={800}>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300 hover:shadow-lg group">
              {locale === "ar" ? "عرض جميع المشاريع" : "View All Projects"}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
