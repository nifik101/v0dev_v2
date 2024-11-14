'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Section } from "./layout/Section"
import { useLanguage } from "../hooks/useLanguage"

export function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects">
      <h2 className="mb-12 text-3xl font-bold">{t.projects.title}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {t.projects.items.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}