'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Section } from "./layout/Section"
import { useLanguage } from "../hooks/useLanguage"

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills">
      <h2 className="mb-12 text-3xl font-bold">{t.skills.title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {t.skills.items.map((skill, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="mb-2 text-lg font-semibold">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}