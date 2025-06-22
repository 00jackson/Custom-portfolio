"use client"
import { motion } from 'framer-motion'
import { FaTerminal, FaCode, FaServer, FaDatabase, FaJava, FaBrain } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiPostgresql, SiMongodb, SiMysql, SiGit, SiGithub, SiVercel, SiNetlify, SiPostman, SiPython, SiCplusplus, SiSwift, SiHtml5, SiCss3, SiJavascript,SiShadcnui } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import { useState, useEffect } from 'react'
import { GiWeightLiftingUp } from 'react-icons/gi'

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

const skillCategories = [
  {
    title: "Frontend Development",
    icon: FaCode,
    color: "#2ecc71",
    skills: [
      { name: "React.js", icon: DiReact, command: "stack --react" },
      { name: "Next.js", icon: SiNextdotjs, command: "stack --nextjs" },
      { name: "Typescript", icon: SiTypescript, command: "stack --typescript" },
      { name: "Tailwind CSS", icon: SiTailwindcss, command: "stack --tailwind" },
      { name: "Shadcn UI", icon: SiShadcnui, command: "stack --ui" }
    ]
  },
  {
    title: "Backend & APIs",
    icon: FaServer,
    color: "#3498db",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, command: "stack --node" },
      { name: "Express.js", icon: SiJavascript, command: "stack --express" },
      { name: "RESTful APIs", icon: FaServer, command: "stack --api" }
    ]
  },
  {
    title: "Databases",
    icon: FaDatabase,
    color: "#9b59b6",
    skills: [
      { name: "MongoDB", icon: SiMongodb, command: "db --mongodb" },
      { name: "PostgreSQL", icon: SiPostgresql, command: "db --postgres" },
      { name: "MySQL", icon: SiMysql, command: "db --mysql" }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: FaTerminal,
    color: "#e67e22",
    skills: [
      { name: "Git", icon: SiGit, command: "tools --git" },
      { name: "GitHub", icon: SiGithub, command: "tools --github" },
      { name: "Vercel", icon: SiVercel, command: "tools --vercel" },
      { name: "Netlify", icon: SiNetlify, command: "tools --netlify" },
      { name: "Render", icon: FaServer, command: "tools --render" },
      { name: "Railway", icon: FaServer, command: "tools --railway" },
      { name: "Postman", icon: SiPostman, command: "tools --postman" }
    ]
  },
  {
    title: "Programming Languages",
    icon: FaCode,
    color: "#1abc9c",
    skills: [
      { name: "JavaScript", icon: SiJavascript, command: "lang --js" },
      { name: "Python", icon: SiPython, command: "lang --python" },
      { name: "Java", icon: FaJava, command: "lang --java" },
      { name: "C++", icon: SiCplusplus, command: "lang --cpp" },
      { name: "Swift", icon: SiSwift, command: "lang --swift" },
      { name: "HTML", icon: SiHtml5, command: "lang --html" },
      { name: "CSS", icon: SiCss3, command: "lang --css" }
    ]
  },
  {
    title: "CS Fundamentals",
    icon: FaTerminal,
    color: "#f1c40f",
    skills: [
      { name: "Data Structures", icon: FaTerminal, command: "cs --dsa" },
      { name: "Algorithms", icon: FaTerminal, command: "cs --algo" },
      { name: "DBMS", icon: FaTerminal, command: "cs --dbms" },
      { name: "OOP", icon: FaTerminal, command: "cs --oop" },
      { name: "GenAI", icon: FaTerminal, command: "cs --genai" }
    ]
  }
]

export default function Skills() {
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
      {/* Background Visualization */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <FaCode className="text-[200px] text-[#2ecc71]" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <FaServer className="text-[150px] text-blue-400" />
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
            <p className="text-[#9b59b6] text-left">$ skills --list --all</p>
            <h1 className="text-5xl md:text-7xl font-bold mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] via-[#3498db] to-[#9b59b6]">
                Technical Arsenal
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#34495e] p-6 rounded-xl border border-[#2c3e50] hover:border-opacity-100"
              style={{ borderColor: category.color }}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className={`text-2xl`} style={{ color: category.color }} />
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between py-2 px-3 bg-[#2c3e50] rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      {skill.icon && <skill.icon className="text-lg" />}
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-xs text-gray-400 font-mono">$ {skill.command}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Footer */}
        <motion.div
          className="mt-16 bg-[#34495e] p-6 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <FaTerminal className="text-2xl text-[#e67e22]" />
              <div>
                <h4 className="font-bold">Full Stack Experience</h4>
                <p className="text-sm text-gray-400">
                  End-to-end development with modern web technologies
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-[#2c3e50] rounded-full h-3">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-[#2ecc71] to-[#3498db]" 
                style={{ width: '90%' }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}