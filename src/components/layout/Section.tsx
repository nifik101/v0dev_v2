'use client'

import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface SectionProps {
  id: string
  className?: string
  children: ReactNode
  fullWidth?: boolean
  reducedPadding?: boolean
}

export function Section({ 
  id, 
  className = '', 
  children,
  fullWidth = false,
  reducedPadding = false
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        ${reducedPadding ? 'py-8 md:py-12' : 'py-12 md:py-16 lg:py-20'} 
        ${fullWidth ? 'w-full' : 'container'}
        ${className}
      `}
    >
      <div className={`${fullWidth ? 'container' : ''}`}>
        {children}
      </div>
    </motion.section>
  )
}