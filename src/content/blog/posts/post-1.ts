"use client"

import type { BlogPost } from "@/types/types"

export const post: BlogPost = {
  id: "post-1",
  date: "2024-03-20",
  image: {
    src: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1",
    alt: {
      en: "Person working remotely on laptop",
      sv: "Person som arbetar på distans med bärbar dator"
    }
  },
  en: {
    title: "The Future of Remote Work",
    description: "Exploring the trends and challenges...",
    content: "Full English content here..."
  },
  sv: {
    title: "Framtiden för distansarbete",
    description: "Utforska trender och utmaningar...",
    content: "Fullständigt svenskt innehåll här..."
  }
} 