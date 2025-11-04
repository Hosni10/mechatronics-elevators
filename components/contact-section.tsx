"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { getTranslations } from "@/lib/translations"
import { ScrollAnimation } from "@/components/scroll-animation"

export function ContactSection() {
  const { locale } = useLocale()
  const t = getTranslations(locale)

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <ScrollAnimation animation="fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance px-2">{t.contact.title}</h2>
          </ScrollAnimation>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Google Maps */}
          <ScrollAnimation animation="slide-in-right" delay={400}>
            <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden w-full max-w-full">
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="group-hover:text-primary transition-colors duration-300 text-lg sm:text-xl">{locale === "ar" ? "موقعنا" : "Our Location"}</CardTitle>
                <CardDescription className="text-sm">
                  {locale === "ar" ? "زورنا في موقعنا" : "Visit us at our location"}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 w-full max-w-full overflow-hidden">
                <div className="w-full max-w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d575.0652428167531!2d31.203361467923038!3d30.004600368975623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584777e1d0fa9d%3A0x914a4dd3e99ebcc7!2z2YXZitmD2KfYqtix2YjZhtmK2YPYsyDZhNmE2YXYtdin2LnYrw!5e0!3m2!1sen!2seg!4v1762091785926!5m2!1sen!2seg"
                    width="100%"
                    height="100%"
                    style={{ border: 0, maxWidth: '100%' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full max-w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 w-full max-w-full min-w-0">
            <ScrollAnimation animation="slide-in-left" delay={600}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 group w-full max-w-full overflow-hidden">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">{locale === "ar" ? "اتصل بنا" : "Call Us"}</h3>
                    <p className="text-muted-foreground text-sm break-words" dir="ltr">+2010 2457 9810</p>
                    <p className="text-muted-foreground text-sm break-words" dir="ltr">+2011 1934 1239</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-left" delay={700}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 group w-full max-w-full overflow-hidden">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">{locale === "ar" ? "راسلنا" : "Email Us"}</h3>
                    <p className="text-muted-foreground text-sm break-all">mechatronicselevators1@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-left" delay={800}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 group w-full max-w-full overflow-hidden">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">{locale === "ar" ? "زورنا" : "Visit Us"}</h3>
                    <div className="text-muted-foreground text-sm">
                      {locale === "ar" ? (
                        <div>
                          <p className="font-medium mb-1 sm:mb-2">الفرع الرئيسي:</p>
                          <p className="mb-2 sm:mb-3 break-words">برج أ - ابراج بنك مصر ش خاتم المرسلين - الهرم - الجيزة</p>
                          <p className="font-medium mb-1 sm:mb-2">فرع حدائق أكتوبر:</p>
                          <p className="break-words">19 كومبوند الرايات ريزيدنس - حدائق أكتوبر - الجيزة</p>
                        </div>
                      ) : (
                        <div>
                          <p className="font-medium mb-1 sm:mb-2">Main Branch:</p>
                          <p className="mb-2 sm:mb-3 break-words">Tower A - Banque Misr Towers, Khatam Al-Mursaleen St. - Al-Haram - Giza</p>
                          <p className="font-medium mb-1 sm:mb-2">October Gardens Branch:</p>
                          <p className="break-words">19 Al-Rayat Residence Compound - October Gardens - Giza</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
