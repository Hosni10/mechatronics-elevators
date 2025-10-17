"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { type Locale, defaultLocale, getDirection } from "@/lib/i18n"

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  direction: "ltr" | "rtl"
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr")

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale
    if (savedLocale && (savedLocale === "en" || savedLocale === "ar")) {
      setLocaleState(savedLocale)
      setDirection(getDirection(savedLocale))
      document.documentElement.dir = getDirection(savedLocale)
      document.documentElement.lang = savedLocale
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    setDirection(getDirection(newLocale))
    localStorage.setItem("locale", newLocale)
    document.documentElement.dir = getDirection(newLocale)
    document.documentElement.lang = newLocale
  }

  return <LocaleContext.Provider value={{ locale, setLocale, direction }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
