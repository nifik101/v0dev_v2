'use client'

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "../hooks/useLanguage"

export function Hero() {
  const { t } = useLanguage();
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })

  const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 30])
  const smoothTextScale = useSpring(textScale, { damping: 15, stiffness: 100 })

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0])
  const smoothTextOpacity = useSpring(textOpacity, { damping: 15,
    stiffness: 100
  })

  const blackOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1])
  const smoothBlackOpacity = useSpring(blackOpacity, {
    damping: 15,
    stiffness: 100
  })

  return (
    <div ref={targetRef} className="h-[200vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="text-black text-center"
          style={{
            scale: smoothTextScale,
            opacity: smoothTextOpacity
          }}
        >
          <h1 className="text-6xl font-bold">Jonas Norlander</h1>
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-black"
          style={{
            opacity: smoothBlackOpacity
          }}
        />
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: [1, 0.5, 1], y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </motion.div>
      </div>
    </div>
  )
}