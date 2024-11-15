"use client"

import type { BlogPost } from "@/types/types"

export const post: BlogPost = {
  id: "post-2",
  date: "2024-03-22",
  image: {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    alt: {
      en: "Team collaborating in modern office",
      sv: "Team som samarbetar i modernt kontor"
    }
  },
  en: {
    title: "Building Effective Remote Teams",
    description: "Best practices for managing and leading distributed teams in the digital age",
    content: "Full English content about remote team management here..."
  },
  sv: {
    title: "Bygga effektiva distansteam",
    description: "Bästa praxis för att hantera och leda distribuerade team i den digitala tidsåldern",
    content: "Fullständigt svenskt innehåll om distansteamhantering här..."
  }
} 