'use client'

import { motion } from 'framer-motion'
import { Dumbbell, HeartPulse, Code2 } from 'lucide-react'

const iconMap = {
  fitness: Dumbbell,
  wellness: HeartPulse,
  code: Code2
}

type BadgeType = keyof typeof iconMap

interface FitnessBadgeProps {
  type: BadgeType
  value: string
  label: string
}

export function FitnessBadge({ type, value, label }: FitnessBadgeProps) {
  const Icon = iconMap[type]
  const color = {
    fitness: 'text-accent-orange',
    wellness: 'text-accent-purple',
    code: 'text-primary'
  }[type]

  return (
    <motion.div 
      className="flex items-center gap-3 p-3 border rounded-lg border-secondary-light"
      whileHover={{ scale: 1.05 }}
    >
      <div className={`p-2 rounded-full ${color}/20`}>
        <Icon className={`h-5 w-5 ${color}`} />
      </div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </motion.div>
  )
}