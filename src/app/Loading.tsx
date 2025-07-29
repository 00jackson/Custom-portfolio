"use client"
import { motion, Variants } from 'framer-motion'
import { Terminal, Code, Dumbbell } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function Loading() {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [shouldExit, setShouldExit] = useState(false)

  const bootSequence = [
    { icon: Terminal, text: 'Initializing system...', color: '#2ecc71', percentage: 25 },
    { icon: Code, text: 'Loading code modules...', color: '#3498db', percentage: 50 },
    { icon: Dumbbell, text: 'Calibrating strength metrics...', color: '#9b59b6', percentage: 75 },
    { icon: Terminal, text: 'Portfolio ready!', color: '#2ecc71', percentage: 100 },
  ]

  useEffect(() => {
    const processStep = (stepIndex: number) => {
      if (stepIndex >= bootSequence.length) {
        setTimeout(() => {
          setShouldExit(true)
        }, 1500)
        return
      }

      const step = bootSequence[stepIndex]
      setProgress(step.percentage)

      setTimeout(() => {
        setCurrentStep(stepIndex + 1)
        processStep(stepIndex + 1)
      }, 1000)
    }

    processStep(0)
  }, [bootSequence])

  // Variants for glitch text effect
  const glitchVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: [1, 0.9, 1],
      y: [0, 3, 0],
      x: [0, -3, 0],
      transition: {
        duration: 0.4,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "mirror" as const,
        repeatDelay: 0.1,
      },
    },
  }

  // Variants for glitch overlay
  const glitchOverlayVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: [0.6, 0.4, 0.6],
      x: [0, 3, 0],
      transition: {
        duration: 0.4,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "mirror" as const,
        repeatDelay: 0.15,
      },
    },
  }

  // Variants for progress bar
  const progressVariants: Variants = {
    initial: { width: 0 },
    animate: {
      width: `${progress}%`,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  // Variants for page flip
  const pageVariants: Variants = {
    initial: { rotateY: 0, opacity: 1 },
    exit: {
      rotateY: 90,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  }

  // Variants for background lines
  const lineVariants: Variants = {
    animate: {
      scaleY: [0.5, 1, 0.5],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  // Variants for icon animation
  const iconVariants: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className="fixed inset-0 bg-[#2c3e50] flex items-center justify-center z-50 overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate={shouldExit ? "exit" : "initial"}
    >
      {/* Terminal-style background lines */}
      <div className="absolute inset-0 flex flex-col justify-center gap-2 opacity-10 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="h-px bg-gradient-to-r from-[#2ecc71] to-[#9b59b6]"
            variants={lineVariants}
            animate="animate"
            style={{ marginLeft: `${Math.random() * 20}%`, marginRight: `${Math.random() * 20}%` }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center gap-8 max-w-2xl w-full px-4">
        {/* Glitch text effect */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <motion.span
              className="text-5xl font-mono text-white font-bold tracking-wide"
              variants={glitchVariants}
              initial="initial"
              animate="animate"
            >
              Jackson Kujur
            </motion.span>
            <motion.span
              className="absolute top-0 left-0 text-5xl font-mono text-[#2ecc71]/50 font-bold tracking-wide"
              variants={glitchOverlayVariants}
              initial="initial"
              animate="animate"
            >
              Jackson Kujur
            </motion.span>
            <motion.span
              className="absolute top-0 left-0 text-5xl font-mono text-[#9b59b6]/50 font-bold tracking-wide"
              variants={glitchOverlayVariants}
              initial="initial"
              animate="animate"
            >
              Jackson Kujur
            </motion.span>
          </div>
          <div className="relative">
            <motion.span
              className="text-base text-gray-300 text-center max-w-sm font-light"
              variants={glitchVariants}
              initial="initial"
              animate="animate"
            >
              $ code --lift --repeat
            </motion.span>
            <motion.span
              className="absolute top-0 left-0 text-base text-[#2ecc71]/50 text-center max-w-sm font-light"
              variants={glitchOverlayVariants}
              initial="initial"
              animate="animate"
            >
              $ code --lift --repeat
            </motion.span>
            <motion.span
              className="absolute top-0 left-0 text-base text-[#9b59b6]/50 text-center max-w-sm font-light"
              variants={glitchOverlayVariants}
              initial="initial"
              animate="animate"
            >
              $ code --lift --repeat
            </motion.span>
          </div>
        </div>

        {/* Progress bar with icon and text */}
        <div className="w-full max-w-md">
          <motion.div
            className="flex items-center gap-3 mb-2"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            key={currentStep}
          >
            {React.createElement(bootSequence[currentStep]?.icon || Terminal, {
              className: "text-2xl flex-shrink-0",
              style: { color: bootSequence[currentStep]?.color || '#2ecc71' },
            })}
            <span
              className="text-sm font-mono"
              style={{ color: bootSequence[currentStep]?.color || '#2ecc71' }}
            >
              {bootSequence[currentStep]?.text || 'Initializing...'}
            </span>
          </motion.div>
          <div className="h-2 bg-[#34495e] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#2ecc71] to-[#9b59b6]"
              variants={progressVariants}
              initial="initial"
              animate="animate"
            />
          </div>
          <div className="text-right text-sm text-gray-400 mt-1 font-mono">
            {progress}%
          </div>
        </div>
      </div>
    </motion.div>
  )
}
