"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { getTranslations } from "@/lib/translations"

export function ContactSection() {
  const { locale } = useLocale()
  const t = getTranslations(locale)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setMessage({ type: "success", text: t.contact.success })
        e.currentTarget.reset()
      } else {
        setMessage({ type: "error", text: t.contact.error })
      }
    } catch (error) {
      setMessage({ type: "error", text: t.contact.error })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance animate-fade-in-up">{t.contact.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="animate-fade-in-up animation-delay-400 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors duration-300">{locale === "ar" ? "أرسل لنا رسالة" : "Send us a message"}</CardTitle>
              <CardDescription>
                {locale === "ar" ? "سنرد عليك في أقرب وقت ممكن" : "We'll get back to you as soon as possible"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input name="name" placeholder={t.contact.name} required className="transition-all duration-300 focus:scale-105" />
                </div>
                <div>
                  <Input name="email" type="email" placeholder={t.contact.email} required className="transition-all duration-300 focus:scale-105" />
                </div>
                <div>
                  <Input name="phone" type="tel" placeholder={t.contact.phone} className="transition-all duration-300 focus:scale-105" />
                </div>
                <div>
                  <Textarea name="message" placeholder={t.contact.message} rows={5} required className="transition-all duration-300 focus:scale-105" />
                </div>
                {message && (
                  <div
                    className={`p-3 rounded-lg text-sm animate-scale-in ${
                      message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {message.text}
                  </div>
                )}
                <Button type="submit" className="w-full hover:scale-105 transition-transform duration-300 hover:shadow-lg" disabled={isSubmitting}>
                  {isSubmitting ? t.contact.sending : t.contact.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="animate-fade-in-up animation-delay-600 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
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

            <Card className="animate-fade-in-up animation-delay-700 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
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

            <Card className="animate-fade-in-up animation-delay-800 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
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
          </div>
        </div>
      </div>
    </section>
  )
}
