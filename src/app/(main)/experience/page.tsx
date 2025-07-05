"use client"
import { motion } from 'framer-motion'
import { FaLaptopCode, FaCode, FaRobot } from 'react-icons/fa'
import { GiWaterDrop, GiMuscleUp, GiWeightLiftingUp } from 'react-icons/gi'
import { IoFastFood } from 'react-icons/io5'
import { useEffect, useState } from 'react'

const timeline = [
  {
    year: "Sept 2024 - March 2025",
    role: "Software Development Engineer",
    company: "Custom Kicks",
    achievements: [
      "Developed scalable applications improving system efficiency by 25%",
      "Optimized backend infrastructure reducing API latency by 40%",
      "Implemented database indexing and query optimization",
      "Automated deployment using Docker and CI/CD"
    ],
    skills: ["React", "Node.js", "Docker", "CI/CD"],
    command: "experience --current --role=sde",
    icon: FaLaptopCode,
    iconColor: "#2ecc71"
  },
  {
    year: "April 2024 - July 2024",
    role: "Frontend Developer Intern",
    company: "Storyvord",
    achievements: [
      "Built reusable React components improving performance by 20%",
      "Created responsive interfaces with Tailwind CSS",
      "Participated in code reviews ensuring high-quality code"
    ],
    skills: ["React", "Tailwind CSS", "Responsive Design"],
    command: "experience --role=frontend",
    icon: FaCode,
    iconColor: "#9b59b6"
  },
  {
    year: "Nov 2023 - Feb 2024",
    role: "AI Engineer Intern",
    company: "Radical AI",
    achievements: [
      "Developed AI solutions reducing manual workload by 40%",
      "Optimized data pipelines for AI models",
      "Built scalable backend services for AI applications"
    ],
    skills: ["Python", "AI/ML", "Data Pipelines"],
    command: "experience --role=ai",
    icon: FaRobot,
    iconColor: "#e67e22"
  }
]

// Loading animation component
const LoadingAnimation = () => {
  const [activeIcon, setActiveIcon] = useState(0)
  const icons = [
    <FaLaptopCode key="laptop" className="text-4xl text-[#2ecc71]" />,
    <FaCode key="code" className="text-4xl text-[#9b59b6]" />,
    <FaRobot key="ai" className="text-4xl text-[#e67e22]" />,
    <GiWeightLiftingUp key="growth" className="text-4xl text-[#3498db]" />
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

export default function Experience() {
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
      {/* Background Animation */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-4 md:left-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <GiMuscleUp className="text-[80px] sm:text-[120px] md:text-[200px] text-[#e67e22]" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-4 md:right-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        >
          <GiWaterDrop className="text-[60px] sm:text-[100px] md:text-[150px] text-blue-400" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-24">
        {/* Terminal-style Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 md:mb-20"
        >
          <div className="bg-[#34495e] p-3 sm:p-4 rounded-lg border-l-4 border-[#e67e22] max-w-3xl mx-auto">
            <p className="text-[#2ecc71] text-xs sm:text-sm md:text-base">$ career --timeline</p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mt-1 sm:mt-2 md:mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e67e22] to-[#9b59b6]">
                Experience
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Mobile-optimized Timeline */}
        <div className="relative">
          {/* Timeline line - visible only on desktop */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-[#2ecc71] to-[#9b59b6]"></div>

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mb-8 sm:mb-12 md:mb-16"
            >
              {/* Mobile view - single column */}
              <div className="md:hidden">
                <div className="bg-[#34495e] px-3 py-1 rounded-full mb-2 border border-[#2ecc71] inline-block">
                  <span className="text-xs">{item.year}</span>
                </div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-[#34495e] p-4 sm:p-5 rounded-xl border border-[#2ecc71] border-opacity-30"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.2 }}
                        transition={{ type: "spring" }}
                      >
                        <item.icon className={`text-lg sm:text-xl`} style={{ color: item.iconColor }} />
                      </motion.div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold">{item.role}</h3>
                        <p className="text-xs sm:text-sm text-gray-400 font-mono">{item.company}</p>
                      </div>
                    </div>
                  </div>

                  <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    {item.achievements.map((achievement, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-[#2ecc71] mr-2">▹</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
                    {item.skills.map((skill, idx) => (
                      <motion.span 
                        key={idx}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="text-[10px] sm:text-xs px-2 py-0.5 sm:px-2 sm:py-1 rounded-full bg-[#2c3e50] border border-[#34495e]"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Desktop view - alternating layout */}
              <div className="hidden md:flex flex-row items-start">
                <div className={`w-1/2 p-2 ${i % 2 === 0 ? 'pr-6' : 'pl-6'}`}>
                  {i % 2 === 0 && (
                    <motion.div
                      whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0,0,0,0.3)" }}
                      className="bg-[#34495e] p-6 rounded-xl border border-[#2ecc71] border-opacity-30"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{ rotate: 15, scale: 1.2 }}
                            transition={{ type: "spring" }}
                          >
                            <item.icon className={`text-xl`} style={{ color: item.iconColor }} />
                          </motion.div>
                          <h3 className="text-xl font-bold">{item.role}</h3>
                        </div>
                        <span className="text-xs text-gray-500">$ {item.command}</span>
                      </div>
                      <p className="text-gray-400 mb-2 font-mono">{item.company} • {item.year}</p>
                      <ul className="space-y-2 text-sm">
                        {item.achievements.map((achievement, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-[#2ecc71] mr-2">▹</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <motion.span 
                            key={idx}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="text-xs px-2 py-1 rounded-full bg-[#2c3e50] border border-[#34495e]"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="w-1/2 flex flex-col items-center justify-center relative">
                  {i % 2 === 0 ? (
                    <div className="text-center mb-2">
                      <span className="text-sm text-gray-400">{item.year}</span>
                    </div>
                  ) : null}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="h-3 w-3 rounded-full bg-[#2ecc71]"
                  ></motion.div>
                  {i % 2 !== 0 ? (
                    <div className="text-center mt-2">
                      <span className="text-sm text-gray-400">{item.year}</span>
                    </div>
                  ) : null}
                </div>

                <div className={`w-1/2 p-2 ${i % 2 !== 0 ? 'pl-6' : 'pr-6'}`}>
                  {i % 2 !== 0 && (
                    <motion.div
                      whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0,0,0,0.3)" }}
                      className="bg-[#34495e] p-6 rounded-xl border border-[#2ecc71] border-opacity-30"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{ rotate: 15, scale: 1.2 }}
                            transition={{ type: "spring" }}
                          >
                            <item.icon className={`text-xl`} style={{ color: item.iconColor }} />
                          </motion.div>
                          <h3 className="text-xl font-bold">{item.role}</h3>
                        </div>
                        <span className="text-xs text-gray-500">$ {item.command}</span>
                      </div>
                      <p className="text-gray-400 mb-2 font-mono">{item.company} • {item.year}</p>
                      <ul className="space-y-2 text-sm">
                        {item.achievements.map((achievement, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-[#2ecc71] mr-2">▹</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <motion.span 
                            key={idx}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="text-xs px-2 py-1 rounded-full bg-[#2c3e50] border border-[#34495e]"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary Footer */}
        <motion.div
          className="mt-8 sm:mt-12 md:mt-24 bg-[#34495e] p-4 sm:p-5 md:p-6 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <IoFastFood className="text-xl sm:text-2xl text-[#e67e22]" />
              </motion.div>
              <div>
                <h4 className="text-sm sm:text-base font-bold">Career Growth</h4>
                <div className="flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-1 text-[10px] sm:text-xs text-gray-400">
                  <span>Full Stack Development</span>
                  <span>AI Engineering</span>
                  <span>System Optimization</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-[#2c3e50] rounded-full h-2 sm:h-3">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '85%' }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="h-full rounded-full bg-gradient-to-r from-[#2ecc71] via-[#9b59b6] to-[#e67e22]" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
