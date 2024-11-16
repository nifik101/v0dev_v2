'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/layout/Section"
import { useLanguageContext } from "@/contexts/LanguageContext"
import { type BlogPost } from "@/types/types"
// Import blog posts
import { post as post1 } from "@/content/blog/posts/post-1"
import { post as post2 } from "@/content/blog/posts/post-2"
import { post as post3 } from "@/content/blog/posts/post-3"

// Combine all posts in an array
const blogPosts: BlogPost[] = [post1, post2, post3]

export function BlogSection() {
  const { t, lang } = useLanguageContext();

  return (
    <Section id="blog">
      <h2 className="mb-6 text-3xl font-bold">{t.blog.title}</h2>
      <p className="mb-12 text-xl text-muted-foreground">{t.blog.description}</p>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-6 flex gap-6">
              <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={post.image.src}
                  alt={post.image.alt[lang]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 192px"
                  onError={(e) => {
                    e.currentTarget.src = '/images/fallback.jpg'
                  }}
                />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">{post[lang].title}</h3>
                <p className="mb-2 text-muted-foreground">{post[lang].description}</p>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}