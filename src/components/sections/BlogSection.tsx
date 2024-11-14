'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Section } from "./layout/Section"
import { useLanguage } from "../hooks/useLanguage"
import { BlogPost } from "../types"

const blogPosts: BlogPost[] = [
  { title: "The Future of Remote Work", date: "2023-05-15" },
  { title: "Effective Leadership in the Digital Age", date: "2023-06-02" },
  { title: "Optimizing Business Processes with AI", date: "2023-06-20" },
]

export function BlogSection() {
  const { t } = useLanguage();

  return (
    <Section id="blog">
      <h2 className="mb-6 text-3xl font-bold">{t.blog.title}</h2>
      <p className="mb-12 text-xl text-muted-foreground">{t.blog.description}</p>
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}