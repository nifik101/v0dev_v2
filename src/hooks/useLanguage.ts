"use client"

import { useState, useCallback, useEffect } from "react"
import type { Content } from "@/types/types"
import { content } from "@/content"

export function useLanguage() {
  const [lang, setLang] = useState<"sv" | "en">(() => {
    // Try to get from localStorage during initialization, default to browser language
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("language") as "sv" | "en"
      if (stored) return stored
      
      // Check browser language
      const browserLang = navigator.language.toLowerCase()
      return browserLang.startsWith("sv") ? "sv" : "en"
    }
    return "en" // Default fallback
  })

  const toggleLanguage = useCallback(() => {
    setLang((prevLang) => {
      const newLang = prevLang === "sv" ? "en" : "sv"
      if (typeof window !== 'undefined') {
        localStorage.setItem("language", newLang)
      }
      return newLang
    })
  }, [])

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = lang
    // Force a re-render of components that depend on translations
    window.dispatchEvent(new Event('languagechange'))
  }, [lang])

  const t: Content = content[lang]

  return { lang, toggleLanguage, t }
}