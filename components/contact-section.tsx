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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{locale === "ar" ? "أرسل لنا رسالة" : "Send us a message"}</CardTitle>
              <CardDescription>
                {locale === "ar" ? "سنرد عليك في أقرب وقت ممكن" : "We'll get back to you as soon as possible"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input name="name" placeholder={t.contact.name} required />
                </div>
                <div>
                  <Input name="email" type="email" placeholder={t.contact.email} required />
                </div>
                <div>
                  <Input name="phone" type="tel" placeholder={t.contact.phone} />
                </div>
                <div>
                  <Textarea name="message" placeholder={t.contact.message} rows={5} required />
                </div>
                {message && (
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {message.text}
                  </div>
                )}
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t.contact.sending : t.contact.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{locale === "ar" ? "اتصل بنا" : "Call Us"}</h3>
                    <p className="text-muted-foreground">+20 123 456 7890</p>
                    <p className="text-muted-foreground">+20 123 456 7891</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{locale === "ar" ? "راسلنا" : "Email Us"}</h3>
                    <p className="text-muted-foreground">info@eliteelevators.com</p>
                    <p className="text-muted-foreground">sales@eliteelevators.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{locale === "ar" ? "زورنا" : "Visit Us"}</h3>
                    <p className="text-muted-foreground">
                      {locale === "ar" ? "123 شارع الأعمال، القاهرة، مصر" : "123 Business Street, Cairo, Egypt"}
                    </p>
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
