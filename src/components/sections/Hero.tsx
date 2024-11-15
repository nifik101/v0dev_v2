'use client'

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })

  const textScale = useTransform(scrollYProgress, [0, 0.2], [1.5, 30])
  const smoothTextScale = useSpring(textScale, { damping: 15, stiffness: 100 })

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.15], [1, 0])
  const smoothTextOpacity = useSpring(textOpacity, { 
    damping: 15,
    stiffness: 100
  })

  const blackOpacity = useTransform(scrollYProgress, [0.15, 0.2], [0, 1])
  const fadeOutBlack = useTransform(scrollYProgress, [0.2, 0.25], [1, 0])
  const smoothBlackOpacity = useSpring(blackOpacity, {
    damping: 15,
    stiffness: 100
  })

  const scrollIndicatorColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    ["#000", "#000", "#fff"]
  )
  
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15],
    [1, 1, 0]
  )

  return (
    <div ref={targetRef} className="h-[120vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="text-black text-center px-4"
          style={{
            scale: smoothTextScale,
            opacity: smoothTextOpacity
          }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Jonas Norlander
          </h1>
        </motion.div>
        <motion.div
          className="absolute inset-0 dark:bg-black bg-black"
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0.15, 0.2, 0.25],
              [0, 1, 0]
            )
          }}
        />
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 1, y: 0 }}
          animate={{ 
            opacity: [1, 0.5, 1], 
            y: [0, 10, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          style={{
            opacity: scrollIndicatorOpacity
          }}
        >
          <motion.div 
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
            }}
          >
            <motion.div 
              className="h-8 w-8"
              style={{
                color: scrollIndicatorColor
              }}
            >
              <ChevronDown className="h-full w-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}