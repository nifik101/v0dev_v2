"use client"

import { useState, useCallback, useEffect } from "react"
import type { Content } from "@/types/types"
import { content } from "@/content"

const DEFAULT_LANGUAGE = "sv"

export function useLanguage() {
  const [lang, setLang] = useState<"sv" | "en">(DEFAULT_LANGUAGE)

  useEffect(() => {
    // Only update language from localStorage after initial render
    const storedLang = localStorage.getItem("language") as "sv" | "en"
    if (storedLang) {
      setLang(storedLang)
    }
  }, [])

  const toggleLanguage = useCallback(() => {
    setLang((prevLang) => {
      const newLang = prevLang === "sv" ? "en" : "sv"
      localStorage.setItem("language", newLang)
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