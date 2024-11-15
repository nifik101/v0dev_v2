'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/layout/Section"
import { useLanguage } from "@/hooks/useLanguage"
import { One2TelLogo, UniversumLogo } from "@/components/projects/logos"
import { type ProjectItem } from "@/types/types"

function ProjectCard({ project }: { project: ProjectItem }) {
  const isOne2Tel = project.title.toLowerCase().includes('one2tel');
  const isUniversum = project.title.toLowerCase().includes('universum');

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        {isOne2Tel && <One2TelLogo className="mb-4" />}
        {isUniversum && <UniversumLogo className="mb-4" />}
        <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>
    </Card>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects">
      <h2 className="mb-12 text-3xl font-bold">{t.projects.title}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {t.projects.items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}