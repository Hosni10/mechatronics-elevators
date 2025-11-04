import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { LocaleProvider } from "@/contexts/locale-context"
import { Suspense } from "react"
import "./globals.css"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Elite Elevators - Premium Elevator Solutions",
  description: "Leading provider of innovative elevator and escalator systems with over 25 years of experience",
  generator: "v0.app",
  icons: {
    icon: "/mechatronics-elevators-logo.png",
    shortcut: "/mechatronics-elevators-logo.png",
    apple: "/mechatronics-elevators-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased overflow-x-hidden`}>
        <Suspense fallback={null}>
          <LocaleProvider>{children}</LocaleProvider>
          <Analytics />
          <WhatsAppButton />
        </Suspense>
      </body>
    </html>
  )
}
