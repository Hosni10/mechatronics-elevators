import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { LocaleProvider } from "@/contexts/locale-context"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Elite Elevators - Premium Elevator Solutions",
  description: "Leading provider of innovative elevator and escalator systems with over 25 years of experience",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <LocaleProvider>{children}</LocaleProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
