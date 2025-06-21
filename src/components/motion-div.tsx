'use client'

import { motion } from 'framer-motion'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

const MotionDiv = forwardRef<
  ElementRef<typeof motion.div>,
  ComponentPropsWithoutRef<typeof motion.div>
>((props, ref) => <motion.div ref={ref} {...props} />)

MotionDiv.displayName = 'MotionDiv'

export { MotionDiv }