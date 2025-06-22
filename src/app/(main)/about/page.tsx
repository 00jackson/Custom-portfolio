"use client"
import { motion } from 'framer-motion'
import { FaTerminal, FaCode, FaDumbbell, FaHeartbeat, FaBrain, FaServer } from 'react-icons/fa'
import { GiMuscleUp, GiWeightLiftingUp, GiWaterDrop } from 'react-icons/gi'
import { SiTypescript, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiPostgresql } from 'react-icons/si'
import { IoFastFood } from 'react-icons/io5'
import { useEffect, useState } from 'react'

const stats = [
  { 
    icon: FaCode, 
    value: "95%", 
    label: "Code Quality", 
    color: "#2ecc71",
    command: "code_metrics --quality"
  },
  { 
    icon: GiMuscleUp, 
    value: "405lbs", 
    label: "Deadlift PR", 
    color: "#e67e22",
    command: "fitness_stats --strength"
  },
  { 
    icon: FaHeartbeat, 
    value: "8hrs", 
    label: "Sleep/Night", 
    color: "#9b59b6",
    command: "health_tracker --sleep"
  },
  { 
    icon: FaBrain, 
    value: "100%", 
    label: "Focus Mode", 
    color: "#3498db",
    command: "mental_status --focus"
  }
]

const techStack = [
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', command: 'next --version' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', command: 'tsc --version' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', command: 'node --version' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400', command: 'tailwind --init' },
  { name: 'Framer', icon: GiWeightLiftingUp, color: 'text-purple-400', command: 'animate --motion' },
  { name: 'React', icon: FaCode, color: 'text-blue-400', command: 'react --create-app' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300', command: 'psql --version' },
  { name: 'GraphQL', icon: FaBrain, color: 'text-pink-500', command: 'graphql --schema' },
  { name: 'Docker', icon: FaServer, color: 'text-blue-400', command: 'docker --compose' },
  { name: 'AWS', icon: FaDumbbell, color: 'text-amber-400', command: 'aws --services' }
]

// Loading animation component
const LoadingAnimation = () => {
  const [activeIcon, setActiveIcon] = useState(0)
  const icons = [
    <FaTerminal key="terminal" className="text-4xl text-[#2ecc71]" />,
    <FaCode key="code" className="text-4xl text-[#3498db]" />,
    <GiWeightLiftingUp key="weight" className="text-4xl text-[#e67e22]" />,
    <FaBrain key="brain" className="text-4xl text-[#9b59b6]" />
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length)
    }, 800)
    return () => clearInterval(interval)
  }, [icons.length])

  return (
    <motion.div 
      className="flex justify-center items-center h-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        key={activeIcon}
        initial={{ scale: 0.5, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 15 }}
      >
        {icons[activeIcon]}
      </motion.div>
    </motion.div>
  )
}

export default function About() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#2c3e50] flex items-center justify-center">
        <LoadingAnimation />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#2c3e50] text-white font-mono overflow-hidden">
      {/* Fitness Visualization Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <GiWeightLiftingUp className="text-[200px] text-[#e67e22]" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <GiWaterDrop className="text-[150px] text-blue-400" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* Terminal-style Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="bg-[#34495e] p-4 rounded-lg border-l-4 border-[#2ecc71] max-w-3xl mx-auto">
            <p className="text-[#2ecc71] text-left">$ about_me --title</p>
            <h1 className="text-5xl md:text-7xl font-bold mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] to-[#9b59b6]">
                Code. Lift. Repeat.
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Terminal-style Bio */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="bg-[#34495e] p-6 rounded-lg border border-[#2ecc71] border-opacity-30"
          >
            <p className="text-[#2ecc71] mb-4">$ bio --developer</p>
            <div className="space-y-6 text-gray-300">
              <p className="pl-4 border-l-2 border-[#2ecc71]">
                I approach software development like strength training - progressive overload, consistent practice, and proper recovery.
              </p>
              <p className="pl-4 border-l-2 border-[#e67e22]">
                My coding sessions are structured like workouts: focused sprints with deliberate breaks to maintain peak mental performance.
              </p>
              <p className="pl-4 border-l-2 border-[#9b59b6]">
                Just as I track my fitness metrics, I measure code quality through maintainability, performance, and user satisfaction.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid with Terminal Flair */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ staggerChildren: 0.1, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: `0 0 15px ${stat.color}40`
                }}
                className={`bg-[#34495e] p-6 rounded-xl border border-[${stat.color}] border-opacity-30 transition-all`}
              >
                <div className="flex justify-between items-start mb-2">
                  <stat.icon className={`text-4xl`} style={{ color: stat.color }} />
                  <span className="text-xs text-gray-500 font-mono">$ {stat.command}</span>
                </div>
                <div className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Terminal */}
        <motion.div 
          className="bg-[#34495e] p-8 rounded-2xl max-w-5xl mx-auto border border-[#2ecc71] border-opacity-30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <SiTypescript className="text-blue-400 text-2xl" />
            <h3 className="text-2xl font-bold">$ tech_stack --list</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  scale: 1.1,
                  boxShadow: `0 0 10px ${tech.color.replace('text', '').replace('-400', '')}40`
                }}
                className={`bg-[#2c3e50] py-3 px-4 rounded-lg flex flex-col items-center gap-2 border border-[#34495e] hover:border-[${tech.color}]`}
              >
                <tech.icon className={`text-xl ${tech.color}`} />
                <span className="text-sm">{tech.name}</span>
                <span className="text-xs text-gray-500 mt-1">$ {tech.command}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nutrition Visualization Footer */}
        <motion.div
          className="mt-24 bg-[#34495e] p-6 rounded-lg flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <IoFastFood className="text-2xl text-[#e67e22]" />
            <div>
              <h4 className="font-bold">Daily Nutrition</h4>
              <div className="flex gap-4 text-xs text-gray-400">
                <span>Protein: 180g</span>
                <span>Carbs: 250g</span>
                <span>Fat: 70g</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-[#2c3e50] rounded-full h-3">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-[#2ecc71] via-[#9b59b6] to-[#e67e22]" 
              style={{ width: '75%' }}
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}