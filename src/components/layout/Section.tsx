'use client'

import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface SectionProps {
  id: string
  className?: string
  children: ReactNode
}

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`py-[var(--section-padding)] container ${className}`}
    >
      {children}
    </motion.section>
  )
}