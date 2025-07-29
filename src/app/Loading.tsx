"use client"
import { motion, Variants } from 'framer-motion'
import { Terminal, Code, Heart, Dumbbell } from 'lucide-react'
import { useEffect, useState } from 'react'
import React from 'react'

export default function Loading() {
  const [currentStep, setCurrentStep] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const [shouldExit, setShouldExit] = useState(false)

  const bootSequence = [
    { 
      icon: Terminal, 
      text: 'Jackson@portfolio:~$ init --system', 
      color: '#2ecc71',
      delay: 0
    },
  
    { 
      icon: Code, 
      text: '✓ React.js modules loaded', 
      color: '#3498db',
      delay: 1000
    },
    { 
      icon: Heart, 
      text: '✓ Health vitals connected', 
      color: '#e67e22',
      delay: 800
    },
    { 
      icon: Dumbbell, 
      text: '✓ Gains protocol activated', 
      color: '#9b59b6',
      delay: 500
    },
    { 
      icon: Terminal, 
      text: 'System ready. Welcome to Jackson Kujur\'s portfolio!', 
      color: '#2ecc71',
      delay: 250
    }
  ]

  useEffect(() => {
    const typeText = (text: string, callback?: () => void) => {
      let i = 0
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayText(text.substring(0, i))
          i++
        } else {
          clearInterval(interval)
          if (callback) callback()
        }
      }, 30)
    }

    const processStep = (stepIndex: number) => {
      if (stepIndex >= bootSequence.length) {
        setIsComplete(true)
        // Auto-transition after showing complete state for 3 seconds
        setTimeout(() => {
          setShouldExit(true)
        }, 3000)
        return
      }

      const step = bootSequence[stepIndex]
      
      setTimeout(() => {
        typeText(step.text, () => {
          setTimeout(() => {
            setCurrentStep(stepIndex + 1)
            processStep(stepIndex + 1)
          }, 50)
        })
      }, step.delay)
    }

    processStep(0)
  }, [])

  // Add prop to handle loading completion
  const onLoadingComplete = () => {
    setShouldExit(true)
  }

  // Expose loading state to parent component
  useEffect(() => {
    if (shouldExit && (window as any).onLoadingComplete) {
      (window as any).onLoadingComplete()
    }
  }, [shouldExit])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  // Variants for terminal lines animation
  const lineVariants: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  // Variants for glitch name effect (appears at the end)
  const glitchVariants: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      x: [0, -2, 2, 0],
      y: [0, 1, -1, 0],
      transition: {
        scale: { duration: 0.5 },
        opacity: { duration: 0.5 },
        x: {
          duration: 0.2,
          repeat: Infinity,
          repeatType: "mirror" as const,
          delay: 0.5
        },
        y: {
          duration: 0.15,
          repeat: Infinity,
          repeatType: "mirror" as const,
          delay: 0.5
        }
      },
    },
  }

  // Variants for page exit
  const pageVariants: Variants = {
    initial: { rotateY: 0, opacity: 1 },
    exit: {
      rotateY: 90,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  }

  // Background matrix-style effect
  const backgroundVariants: Variants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  return (
    <motion.div
      className="fixed inset-0 bg-[#2c3e50] flex items-center justify-center z-50 overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate={shouldExit ? "exit" : "initial"}
    >
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        variants={backgroundVariants}
        animate="animate"
        style={{
          backgroundImage: `repeating-linear-gradient(
            43deg,
            transparent,
            transparent 1px,
            #2ecc71 2px,
            #2ecc71 4px
          )`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="flex flex-col items-center justify-center max-w-4xl w-full px-8">
        {/* Terminal Window */}
        <div className="bg-[#2c3e50] rounded-lg border border-[#34495e] shadow-2xl w-full max-w-2xl">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#34495e] rounded-t-lg border-b border-[#2c3e50]">
            <div className="w-3 h-3 rounded-full bg-[#e74c3c]"></div>
            <div className="w-3 h-3 rounded-full bg-[#f39c12]"></div>
            <div className="w-3 h-3 rounded-full bg-[#2ecc71]"></div>
            <span className="ml-4 text-gray-400 text-sm font-mono">terminal</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm space-y-3" style={{ minHeight: '300px' }}>
            {bootSequence.slice(0, currentStep).map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  variants={lineVariants}
                  initial="initial"
                  animate="animate"
                >
                  <IconComponent
                    className="text-lg flex-shrink-0"
                    style={{ color: step.color }}
                  />
                  <span style={{ color: step.color }}>
                    {step.text}
                  </span>
                </motion.div>
              )
            })}

            {/* Current typing line */}
            {currentStep < bootSequence.length && (
              <motion.div
                className="flex items-center gap-3"
                variants={lineVariants}
                initial="initial"
                animate="animate"
              >
                {currentStep < bootSequence.length && (
                  <>
                    {React.createElement(bootSequence[currentStep]?.icon || Terminal, {
                      className: "text-lg flex-shrink-0",
                      style: { color: bootSequence[currentStep]?.color || '#2ecc71' }
                    })}
                    <span style={{ color: bootSequence[currentStep]?.color || '#2ecc71' }}>
                      {displayText}
                      {showCursor && (
                        <span className="bg-[#2ecc71] text-[#2c3e50] px-1 ml-1">
                          █
                        </span>
                      )}
                    </span>
                  </>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Glitch Name Effect - appears when complete */}
        {isComplete && (
          <motion.div
            className="mt-8 relative"
            variants={glitchVariants}
            initial="initial"
            animate="animate"
          >
            <motion.span
              className="text-4xl font-mono text-white font-bold tracking-wide"
            >
              Jackson Kujur
            </motion.span>
            <motion.span
              className="absolute top-0 left-0 text-4xl font-mono text-[#2ecc71]/40 font-bold tracking-wide"
              animate={{
                x: [0, 2, 0],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatType: "mirror" as const
              }}
            >
              Jackson Kujur
            </motion.span>
            <motion.span
              className="absolute top-0 left-0 text-4xl font-mono text-[#9b59b6]/40 font-bold tracking-wide"
              animate={{
                x: [0, -2, 0],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{
                duration: 0.18,
                repeat: Infinity,
                repeatType: "mirror" as const
              }}
            >
              Jackson Kujur
            </motion.span>
            
            {/* Subtitle */}
            <motion.div
              className="text-center mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-gray-400 font-mono text-sm">
                $ code --lift --repeat
              </span>
            </motion.div>
          </motion.div>
        )}

        {/* Click to continue hint - appears when complete */}
        {isComplete && !shouldExit && (
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button
              onClick={onLoadingComplete}
              className="text-gray-400 hover:text-white font-mono text-sm transition-colors border border-gray-600 hover:border-[#2ecc71] px-4 py-2 rounded"
            >
              Press ENTER to continue
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}