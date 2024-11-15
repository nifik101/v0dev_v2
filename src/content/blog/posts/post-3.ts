"use client"

import type { BlogPost } from "@/types/types"

export const post: BlogPost = {
  id: "post-3",
  date: "2024-03-25",
  image: {
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    alt: {
      en: "AI and automation in the workplace",
      sv: "AI och automatisering på arbetsplatsen"
    }
  },
  en: {
    title: "The Impact of AI on Modern Workplaces",
    description: "How artificial intelligence is reshaping the way we work and collaborate",
    content: "Full English content about AI impact here..."
  },
  sv: {
    title: "AI:s påverkan på moderna arbetsplatser",
    description: "Hur artificiell intelligens förändrar vårt sätt att arbeta och samarbeta",
    content: "Fullständigt svenskt innehåll om AI:s påverkan här..."
  }
} 