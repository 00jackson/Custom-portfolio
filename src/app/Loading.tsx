"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Code, Dumbbell, Heart } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [shouldExit, setShouldExit] = useState(false)

  // Fast loading - 2.5 seconds total
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 2 // 50 steps = 2.5 seconds
        if (next >= 100) {
          clearInterval(interval)
          // Auto continue after brief pause
          setTimeout(() => {
            setShouldExit(true)
            if (typeof window !== 'undefined' && (window as any).onLoadingComplete) {
              (window as any).onLoadingComplete()
            }
          }, 300)
          return 100
        }
        return next
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const handleClick = () => {
    if (progress >= 100) {
      setShouldExit(true)
      if (typeof window !== 'undefined' && (window as any).onLoadingComplete) {
        (window as any).onLoadingComplete()
      }
    }
  }

  return (
    <AnimatePresence>
      {!shouldExit && (
        <motion.div
          className="fixed inset-0 bg-[#2c3e50] flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center w-full max-w-sm px-4">
            {/* Minimal progress circle */}
            {/* <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full border-2 border-[#34495e]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Terminal className="w-8 h-8 text-[#2ecc71]" />
                </motion.div>
              </div>
            </div> */}

            {/* Progress text */}
            <div className="text-center mb-4">
              <div className="text-white font-mono text-normal mb-1">
                $ loading...
              </div>
              <div className="text-gray-400 text-xs font-mono">
                {progress}%
              </div>
            </div>

            {/* Simple progress bar */}
            <div className="w-48 h-1 bg-[#34495e] rounded-full overflow-hidden mb-6">
              <motion.div
                className="h-full bg-[#2ecc71]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>

            {/* Minimal icons */}
            <div className="flex gap-3 mb-6">
              {[
                { Icon: Code, color: '#3498db', label: 'code' },
                { Icon: Dumbbell, color: '#e67e22', label: 'lift' },
                { Icon: Heart, color: '#9b59b6', label: 'repeat' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`text-normal ${progress >= (i + 1) * 33 ? 'opacity-100' : 'opacity-30'}`}
                  animate={progress >= (i + 1) * 33 ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <item.Icon className="w-6 h-6 mx-auto" style={{ color: item.color }} />
                  <div className="text-gray-400 mt-1">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Continue button - appears when complete */}
            {progress >= 100 && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleClick}
                className="text-[#2ecc71] font-mono text-normal hover:text-white transition-colors"
              >
                Press to continue →
              </motion.button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}