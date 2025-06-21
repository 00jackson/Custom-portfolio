"use client"
import { motion } from 'framer-motion'
import { FaTerminal, FaCode, FaDumbbell, FaServer, FaGithub } from 'react-icons/fa'
import { GiWeightLiftingUp, GiWaterDrop, GiMuscleUp } from 'react-icons/gi'
import { IoFastFood } from 'react-icons/io5'
import { SiTypescript, SiNextdotjs, SiNodedotjs, SiTensorflow, SiMongodb } from 'react-icons/si'

const projects = [
  {
    title: "FitTrack AI",
    description: "Computer vision form analysis for weightlifting",
    tags: ["React", "TensorFlow", "Node"],
    tech: [FaCode, SiTensorflow, SiNodedotjs],
    command: "projects --show --id=fittrack",
    color: "#e67e22" // Carb Orange
  },
  {
    title: "CodeGym",
    description: "Gamified coding challenges with workout integration",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    tech: [SiNextdotjs, SiTypescript, SiMongodb],
    command: "projects --show --id=codegym",
    color: "#2ecc71" // Synthex Green
  },
  {
    title: "HealthHub",
    description: "Wellness dashboard with biometric integration",
    tags: ["React", "D3.js", "Firebase"],
    tech: [FaCode, FaServer, FaDumbbell],
    command: "projects --show --id=healthhub",
    color: "#9b59b6" // Protein Purple
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#2c3e50] text-white font-mono overflow-hidden">
      {/* Fitness Visualization Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <GiWeightLiftingUp className="text-[200px] text-[#e67e22]" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
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
            <p className="text-[#9b59b6] text-left">$ projects --list --featured</p>
            <h1 className="text-5xl md:text-7xl font-bold mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] to-[#e67e22]">
                My Projects
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: `0 10px 25px ${project.color}40`
              }}
              className="bg-[#34495e] rounded-xl overflow-hidden border border-[#34495e] hover:border-[${project.color}] transition-all"
            >
              {/* Project Header */}
              <div 
                className="p-6 flex justify-between items-start"
                style={{ backgroundColor: `${project.color}20` }}
              >
                <div className="flex items-center gap-4">
                  <GiWeightLiftingUp className="text-3xl" style={{ color: project.color }} />
                  <span className="text-xs text-gray-400 font-mono">$ {project.command}</span>
                </div>
                <div className="flex gap-2">
                  {project.tech.map((TechIcon, techIndex) => (
                    <TechIcon 
                      key={techIndex} 
                      className="text-xl text-gray-400 hover:text-white transition-colors" 
                    />
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: project.color }}>
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                {/* Fitness Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Project Fitness</span>
                    <span>{(i+1)*25 + 50}%</span>
                  </div>
                  <div className="w-full bg-[#2c3e50] rounded-full h-2">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: `${(i+1)*25 + 50}%`,
                        background: project.color
                      }}
                    ></div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-[#2c3e50] px-3 py-1 rounded-full text-xs border border-[#34495e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal-style Footer */}
        <motion.div 
          className="mt-20 text-center"
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
            className="border-2 border-[#2ecc71] text-[#2ecc71] px-8 py-3 rounded-lg font-bold hover:bg-[#2ecc71] hover:text-[#2c3e50] transition-colors flex items-center gap-2 mx-auto"
          >
            <FaTerminal /> $ projects --list --all
          </motion.button>
        </motion.div>

        {/* Nutrition Visualization */}
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
              <h4 className="font-bold">Project Fuel</h4>
              <div className="flex gap-4 text-xs text-gray-400">
                <span>Coffee: 300ml/day</span>
                <span>Protein: 150g/day</span>
                <span>Code: 8hrs/day</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-[#2c3e50] rounded-full h-3">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-[#2ecc71] via-[#9b59b6] to-[#e67e22]" 
              style={{ width: '80%' }}
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}