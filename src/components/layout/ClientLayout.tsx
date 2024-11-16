"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"
import { BlogSection } from "@/components/sections/BlogSection"
import { Contact } from "@/components/sections/Contact"
import { LanguageProvider } from "@/contexts/LanguageContext"

export function ClientLayout() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check system preference first
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    // Then check localStorage, fallback to system preference
    const storedDarkMode = localStorage.getItem("darkMode")
    const shouldBeDark = storedDarkMode !== null ? storedDarkMode === "true" : systemPrefersDark
    
    setIsDark(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  // Avoid hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <BlogSection />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  )
} 