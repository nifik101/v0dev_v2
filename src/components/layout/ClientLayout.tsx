"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"
import { BlogSection } from "@/components/sections/BlogSection"
import { Contact } from "@/components/sections/Contact"

export function ClientLayout() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for dark mode preference
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("darkMode", (!isDark).toString())
  }

  return (
    <div className="flex min-h-screen flex-col">
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
  )
} 