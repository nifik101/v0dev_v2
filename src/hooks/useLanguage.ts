"use client"

import { useState, useCallback, useEffect } from "react"
import type { Content } from "@/types/types"
import { content } from "@/content"

export function useLanguage() {
  const [lang, setLang] = useState<"sv" | "en">(() => {
    // Try to get the stored language preference, default to "sv"
    if (typeof window !== "undefined") {
      return (localStorage.getItem("language") as "sv" | "en") || "sv"
    }
    return "sv"
  })

  const toggleLanguage = useCallback(() => {
    setLang((prevLang) => {
      const newLang = prevLang === "sv" ? "en" : "sv"
      if (typeof window !== "undefined") {
        localStorage.setItem("language", newLang)
      }
      return newLang
    })
  }, [])

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t: Content = content[lang]

  return { lang, toggleLanguage, t }
}