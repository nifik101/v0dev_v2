'use client'

import Image from "next/image"
import { Section } from "@/components/layout/Section"
import { useLanguage } from "@/hooks/useLanguage"

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-bold">{t.about.title}</h2>
          <p className="mb-4 text-lg text-muted-foreground">{t.about.description}</p>
          <p className="text-lg text-muted-foreground">{t.about.style}</p>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
          <Image
            src="/images/profile_image_1.jpeg"
            alt="Jonas Norlander"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </Section>
  )
}