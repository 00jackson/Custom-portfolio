//need to tweak on the mobile responsiveness

"use client"
import { motion } from 'framer-motion'
import { FaLaptopCode } from 'react-icons/fa'
import { GiWeightLiftingUp, GiWaterDrop, GiMuscleUp } from 'react-icons/gi'
import { IoFastFood } from 'react-icons/io5'

const timeline = [
  {
    year: "2022-Present",
    role: "Senior Full Stack Engineer",
    company: "FitTech Inc.",
    description: "Developed fitness applications with React and Node.js",
    fitness: "85%",
    command: "experience --current --role=senior"
  },
  {
    year: "2020-2022",
    role: "Frontend Lead",
    company: "CodeGym",
    description: "Built gamified coding platform with workout integration",
    fitness: "75%",
    command: "experience --role=lead"
  },
  {
    year: "2018-2020",
    role: "Software Engineer",
    company: "HealthDev",
    description: "Created wellness tracking features",
    fitness: "65%",
    command: "experience --role=junior"
  }
]

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#2c3e50] text-white font-mono overflow-hidden">
      {/* Fitness Visualization Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <GiMuscleUp className="text-[200px] text-[#e67e22]" />
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
          <div className="bg-[#34495e] p-4 rounded-lg border-l-4 border-[#e67e22] max-w-3xl mx-auto">
            <p className="text-[#2ecc71] text-left">$ career --timeline</p>
            <h1 className="text-5xl md:text-7xl font-bold mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e67e22] to-[#9b59b6]">
                My Journey
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Terminal Timeline */}
        <div className="relative">
          {/* Timeline line - styled like terminal cursor */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-[#2ecc71] to-[#9b59b6]"></div>

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`mb-16 flex ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
            >
              <div className={`w-1/2 p-6 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0,0,0,0.3)" }}
                  className="bg-[#34495e] p-6 rounded-xl border border-[#2ecc71] border-opacity-30"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <FaLaptopCode className={`text-xl ${i === 0 ? 'text-[#2ecc71]' : i === 1 ? 'text-[#9b59b6]' : 'text-[#e67e22]'}`} />
                      <h3 className="text-xl font-bold">{item.role}</h3>
                    </div>
                    <span className="text-xs text-gray-500">$ {item.command}</span>
                  </div>
                  <p className="text-gray-400 mb-2 font-mono">{item.company} • {item.year}</p>
                  <p className="mb-4">{item.description}</p>
                  <div className="flex items-center gap-2">
                    <GiWeightLiftingUp className="text-[#e67e22]" />
                    <span className="text-sm">
                      Fitness Level: <span className="font-bold">{item.fitness}</span>
                    </span>
                    <div className="flex-1 h-2 bg-[#2c3e50] rounded-full ml-2">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-[#2ecc71] to-[#e67e22]" 
                        style={{ width: item.fitness }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="w-1/2 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="h-4 w-4 rounded-full bg-[#2ecc71]"
                ></motion.div>
              </div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>

        {/* Fitness Stats Footer */}
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
              <h4 className="font-bold">Career Nutrition</h4>
              <div className="flex gap-4 text-xs text-gray-400">
                <span>Code: 60hrs/week</span>
                <span>PRs: 120+</span>
                <span>Workouts: 5/week</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-[#2c3e50] rounded-full h-3">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-[#2ecc71] via-[#9b59b6] to-[#e67e22]" 
              style={{ width: '90%' }}
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}