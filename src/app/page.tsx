"use client"
import { motion } from 'framer-motion'
import { FaTerminal, FaCode, FaHeartbeat, FaGithub } from 'react-icons/fa'
import { GiMuscleUp, GiWaterDrop, GiWeightLiftingUp } from 'react-icons/gi'
import { SiTypescript, SiNextdotjs, SiNodedotjs } from 'react-icons/si'
import { IoFastFood } from 'react-icons/io5'
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Link from 'next/link'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-[#2c3e50] text-white overflow-hidden font-mono">
      {/* Terminal-inspired background elements */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{ 
            x: [0, 20, 0],
            y: [0, 15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaTerminal className="text-[200px] text-[#2ecc71]" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 right-1/4"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <GiWeightLiftingUp className="text-[180px] text-[#e67e22]" />
        </motion.div>
      </div>

      {/* Fitness visualization elements */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <GiWaterDrop className="text-[150px] text-blue-400" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 right-20"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        >
          <IoFastFood className="text-[120px] text-[#e67e22]" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Personal introduction */}
          <motion.div
            className="mb-8"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Jackson Kujur</h1>
            <p className="text-gray-400 text-sm md:text-base">
              Lifting code by day, lifting weights by night with beats in my ears
            </p>
          </motion.div>

          {/* Terminal-style header */}
          <motion.div
            className="mb-12 p-4 bg-[#34495e] rounded-lg border-l-4 border-[#2ecc71]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-left text-sm text-gray-300">
              <p className="text-[#2ecc71]">$ whoami</p>
              <p className="mt-2">{"// Full Stack Developer & Fitness Enthusiast"}</p>
            </div>
          </motion.div>

          {/* Animated icons */}
          <motion.div
            className="flex justify-center gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[FaCode, GiMuscleUp, FaHeartbeat].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  damping: 10, 
                  stiffness: 100,
                  delay: i * 0.2
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.1,
                  rotate: [0, 10, -10, 0]
                }}
                className="p-4 rounded-full border"
                style={{
                  borderColor: i === 0 ? '#2ecc71' : i === 1 ? '#e67e22' : '#9b59b6',
                  background: 'rgba(0,0,0,0.2)'
                }}
              >
                <Icon className="text-4xl" style={{
                  color: i === 0 ? '#2ecc71' : i === 1 ? '#e67e22' : '#9b59b6'
                }} />
              </motion.div>
            ))}
          </motion.div>

          {/* Command-line style description */}
          <motion.div
            className="mb-12 p-4 bg-[#34495e] rounded-lg text-left max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-[#2ecc71]">$ mission_statement</p>
            <p className="mt-2 text-gray-300">
              Building robust systems with the discipline of an athlete and precision of an engineer.
            </p>
          </motion.div>

          {/* Terminal-style buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(46, 204, 113, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2ecc71] px-8 py-4 rounded-lg font-bold flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {/* TODO: Add a link to the projects page */}
              <Link href="/projects">
                $ projects --show 
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(230, 126, 34, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#e67e22] text-[#e67e22] px-8 py-4 rounded-lg font-bold flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {/* TODO: Add a link to the fitness page */}
              <Link href="/fitness">
                $ fitness --routine
              </Link>
            </motion.button>
          </div>

          {/* Tech stack terminal output */}
          <motion.div
            className="p-4 bg-[#34495e] rounded-lg max-w-md mx-auto text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-[#2ecc71]">$ tech_stack --current</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {[SiTypescript, SiNextdotjs, SiNodedotjs].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <Icon className="text-xl" />
                  <span>
                    {i === 0 ? 'TypeScript' : i === 1 ? 'Next.js' : 'Node.js'}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal Status Terminal Bar */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 bg-[#34495e]/90 backdrop-blur-md border-t border-[#2c3e50] py-3"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-xs text-[#2ecc71] font-mono">
              $ status_metrics
            </div>
            <div className="flex gap-6">
              {[
                // { value: "+", label: "YOE", icon: FaCode, color: "#2ecc71" },
                { value: "405", label: "PR", icon: GiMuscleUp, color: "#e67e22" },
                { value: "30+", label: "Projects", icon: FaGithub, color: "white" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-center flex items-center gap-2"
                >
                  <stat.icon className={`text-sm`} style={{ color: stat.color }} />
                  <div>
                    <span className="text-sm font-bold" style={{ color: stat.color }}>{stat.value}</span>
                    <span className="text-xs text-gray-400 ml-1">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}