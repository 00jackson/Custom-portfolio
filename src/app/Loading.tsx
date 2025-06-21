"use client"
import { motion } from 'framer-motion'
import { FaDumbbell, FaCode, FaHeartbeat } from 'react-icons/fa'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { SiTypescript } from 'react-icons/si'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#2c3e50] flex flex-col items-center justify-center z-50">
      <motion.div 
        className="relative w-64 h-64"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <FaCode className="absolute top-0 left-1/2 -ml-4 text-3xl text-emerald-400" />
        <FaDumbbell className="absolute bottom-0 left-1/2 -ml-4 text-3xl text-orange-500" />
        <SiTypescript className="absolute top-1/2 left-0 -mt-4 text-3xl text-blue-400" />
        <GiWeightLiftingUp className="absolute top-1/2 right-0 -mt-4 text-3xl text-amber-400" />
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "60%" }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="h-1.5 bg-gradient-to-r from-emerald-400 via-blue-400 to-orange-500 rounded-full mt-12"
      />

      <motion.div 
        className="mt-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-2xl font-mono text-white">Jackson Kujur</span>
        <span className="text-sm text-gray-400 text-center">
          Lifting code by day, lifting weights by night with beats in my ears
        </span>
      </motion.div>
    </div>
  )
}