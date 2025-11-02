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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ScrollAnimation animation="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.contact.title}</h2>
          </ScrollAnimation>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Google Maps */}
          <ScrollAnimation animation="slide-in-right" delay={400}>
            <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">{locale === "ar" ? "موقعنا" : "Our Location"}</CardTitle>
                <CardDescription>
                  {locale === "ar" ? "زورنا في موقعنا" : "Visit us at our location"}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-[450px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d575.0652428167531!2d31.203361467923038!3d30.004600368975623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584777e1d0fa9d%3A0x914a4dd3e99ebcc7!2z2YXZitmD2KfYqtix2YjZhtmK2YPYsyDZhNmE2YXYtdin2LnYrw!5e0!3m2!1sen!2seg!4v1762091785926!5m2!1sen!2seg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Contact Information */}
          <div className="space-y-6">
            <ScrollAnimation animation="slide-in-left" delay={600}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{locale === "ar" ? "اتصل بنا" : "Call Us"}</h3>
                    <p className="text-muted-foreground" dir="ltr">+2010 2457 9810</p>
                    <p className="text-muted-foreground" dir="ltr">+2011 1934 1239</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-left" delay={700}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{locale === "ar" ? "راسلنا" : "Email Us"}</h3>
                    <p className="text-muted-foreground">mechatronicselevators1@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-left" delay={800}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{locale === "ar" ? "زورنا" : "Visit Us"}</h3>
                    <div className="text-muted-foreground">
                      {locale === "ar" ? (
                        <div>
                          <p className="font-medium mb-2">الفرع الرئيسي:</p>
                          <p className="mb-3">برج أ - ابراج بنك مصر ش خاتم المرسلين - الهرم - الجيزة</p>
                          <p className="font-medium mb-2">فرع حدائق أكتوبر:</p>
                          <p>19 كومبوند الرايات ريزيدنس - حدائق أكتوبر - الجيزة</p>
                        </div>
                      ) : (
                        <div>
                          <p className="font-medium mb-2">Main Branch:</p>
                          <p className="mb-3">Tower A - Banque Misr Towers, Khatam Al-Mursaleen St. - Al-Haram - Giza</p>
                          <p className="font-medium mb-2">October Gardens Branch:</p>
                          <p>19 Al-Rayat Residence Compound - October Gardens - Giza</p>
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
