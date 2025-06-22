"use client"
import { motion } from 'framer-motion'
import { FaTerminal, FaCode, FaGithub, FaExternalLinkAlt, FaBrain } from 'react-icons/fa'
import { GiWeightLiftingUp, GiWaterDrop } from 'react-icons/gi'
import { IoFastFood } from 'react-icons/io5'
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiPostgresql, SiReact, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si'
import { useState, useEffect } from 'react'

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

const projects = [
  {
    title: "Mockview AI",
    description: "Built a mock interview app with AI-generated answers and real-time camera assessments",
    achievements: [
      "Integrated Gemini AI for intelligent responses",
      "Optimized PostgreSQL database queries",
      "Implemented real-time analysis features"
    ],
    tags: ["Next.js", "JavaScript", "TailwindCSS", "PostgreSQL", "Gemini AI"],
    tech: [SiNextdotjs, SiJavascript, SiTailwindcss, SiPostgresql],
    links: [
      { icon: FaExternalLinkAlt, url: "https://mockview-six.vercel.app/", text: "Demo" },
      { icon: FaGithub, url: "https://github.com/00jackson/mockview", text: "Code" }
    ],
    command: "projects --show --id=mockview",
    color: "#2ecc71", // Green
    year: "July 2024"
  },
  {
    title: "Conversa",
    description: "Developed a chatbot with recent chats and fast response features",
    achievements: [
      "Integrated Google Gemini AI API",
      "Implemented chat history functionality",
      "Optimized for mobile responsiveness"
    ],
    tags: ["React", "Vite", "CSS", "Gemini API"],
    tech: [SiReact, SiJavascript],
    links: [
      { icon: FaExternalLinkAlt, url: "https://conversaa.vercel.app/", text: "Demo" },
      { icon: FaGithub, url: "https://github.com/00jackson/Conversa", text: "Code" }
    ],
    command: "projects --show --id=conversa",
    color: "#9b59b6", // Purple
    year: "May 2024"
  },
  {
    title: "Swoop",
    description: "Created a real-time chat app with group and single chat functionalities",
    achievements: [
      "Implemented authentication system",
      "Developed search features",
      "Optimized MongoDB queries"
    ],
    tags: ["MongoDB", "Express", "React", "Node.js", "Chakra UI"],
    tech: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
    links: [
      { icon: FaExternalLinkAlt, url: "https://swoop.onrender.com/", text: "Live" },
      { icon: FaGithub, url: "https://github.com/00jackson/Swoop", text: "Code" }
    ],
    command: "projects --show --id=swoop",
    color: "#e67e22", // Orange
    year: "April 2024"
  }
]

export default function Projects() {
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
          <GiWeightLiftingUp className="text-[80px] sm:text-[120px] md:text-[200px] text-[#e67e22]" />
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
          <div className="bg-[#34495e] p-3 sm:p-4 rounded-lg border-l-4 border-[#2ecc71] max-w-3xl mx-auto">
            <p className="text-[#9b59b6] text-xs sm:text-sm md:text-base">$ projects --list --featured</p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mt-1 sm:mt-2 md:mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] to-[#e67e22]">
                My Projects
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Projects Grid - Mobile first */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                boxShadow: `0 5px 15px ${project.color}40`
              }}
              className="bg-[#34495e] rounded-xl overflow-hidden border border-[#34495e] hover:border-[${project.color}] transition-all"
            >
              {/* Project Header */}
              <div 
                className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0"
                style={{ backgroundColor: `${project.color}20` }}
              >
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <FaCode className="text-xl sm:text-2xl" style={{ color: project.color }} />
                  <div className="flex-1 sm:flex-none">
                    <span className="text-xs text-gray-400 font-mono block sm:hidden">{project.year}</span>
                    <span className="text-xs text-gray-400 font-mono hidden sm:block">$ {project.command}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-normal">
                  <div className="flex gap-2">
                    {project.tech.map((TechIcon, techIndex) => (
                      <TechIcon 
                        key={techIndex} 
                        className="text-lg sm:text-xl text-gray-400 hover:text-white transition-colors" 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 font-mono hidden sm:block">{project.year}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold" style={{ color: project.color }}>
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{project.description}</p>
                
                {/* Achievements */}
                <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-xs sm:text-sm mb-4 sm:mb-6">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#2ecc71] mr-2">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress Bar - Mobile only */}
                <div className="md:hidden mb-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Project Completion</span>
                    <span>{100 - (i * 25)}%</span>
                  </div>
                  <div className="w-full bg-[#2c3e50] rounded-full h-1.5">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: `${100 - (i * 25)}%`,
                        background: project.color
                      }}
                    ></div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-[#2c3e50] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs border border-[#34495e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 sm:gap-3">
                  {project.links.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.url}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 rounded-lg"
                      style={{ 
                        backgroundColor: `${project.color}20`,
                        border: `1px solid ${project.color}`
                      }}
                    >
                      <link.icon className="text-xs sm:text-sm" />
                      {link.text}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal-style Footer */}
        <motion.div 
          className="mt-12 sm:mt-16 md:mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(46, 204, 113, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#2ecc71] text-[#2ecc71] px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold hover:bg-[#2ecc71] hover:text-[#2c3e50] transition-colors flex items-center gap-2 mx-auto text-sm sm:text-base"
          >
            <FaTerminal /> $ projects --list --all
          </motion.button>
        </motion.div>

        {/* Project Stats Footer */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-24 bg-[#34495e] p-4 sm:p-5 md:p-6 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <IoFastFood className="text-xl sm:text-2xl text-[#e67e22]" />
              <div>
                <h4 className="text-sm sm:text-base font-bold">Project Stats</h4>
                <div className="flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-1 text-[10px] sm:text-xs text-gray-400">
                  <span>Next.js: 2 projects</span>
                  <span>React: 3 projects</span>
                  <span>AI Integration: 2 projects</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-[#2c3e50] rounded-full h-2 sm:h-3">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-[#2ecc71] via-[#9b59b6] to-[#e67e22]" 
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}