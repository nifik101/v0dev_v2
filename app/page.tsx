"use client"

import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { BlogSection } from "./components/BlogSection"
import { Contact } from "./components/Contact"
import { useLanguage } from "./hooks/useLanguage"

export function BlockPage() {
  const [isDark, setIsDark] = useState(false)
  const { lang } = useLanguage();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />

      <main className="relative">
        <Hero />

        <div className="bg-background text-foreground">
          <div className="container mx-auto px-4 pt-16">
            <About />
            <Projects />
            <Skills />
            <BlogSection />
            <Contact />
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jonas Norlander. {lang === 'sv' ? 'Alla rättigheter förbehållna.' : 'All rights reserved.'}
          </div>
        </div>
      </footer>
    </div>
  )
}