'use client'

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from 'lucide-react'
import { Section } from "./layout/Section"
import { useLanguage } from "../hooks/useLanguage"

export function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-12 text-3xl font-bold">{t.contact.title}</h2>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Github className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Section>
  )
}