'use client'

import { motion } from 'framer-motion'

interface FitnessProgressProps {
  value: number
  max?: number
  label: string
  color?: 'primary' | 'orange' | 'purple'
}

const colorMap = {
  primary: 'bg-primary',
  orange: 'bg-accent-orange',
  purple: 'bg-accent-purple'
}

export function FitnessProgress({
  value,
  max = 100,
  label,
  color = 'primary'
}: FitnessProgressProps) {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span className="font-mono">{value}/{max}</span>
      </div>
      <div className="w-full h-2 bg-secondary-light rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${colorMap[color]} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}