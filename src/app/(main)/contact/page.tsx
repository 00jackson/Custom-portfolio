"use client"
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTerminal, FaCode, FaBrain } from 'react-icons/fa'
import { GiWeightLiftingUp, GiWaterDrop } from 'react-icons/gi'
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { IoFastFood } from 'react-icons/io5'

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

export default function Contact() {
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
          <div className="bg-[#34495e] p-4 rounded-lg border-l-4 border-[#9b59b6] max-w-3xl mx-auto">
            <p className="text-[#2ecc71] text-left">$ contact --init</p>
            <h1 className="text-5xl md:text-7xl font-bold mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b59b6] to-[#2ecc71]">
                Let&apos;s Connect
              </span>
            </h1>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info - Terminal Style */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-[#34495e] p-8 rounded-xl border border-[#2ecc71] border-opacity-30"
          >
            <p className="text-[#2ecc71] mb-6">$ contact_info --list</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <FaEnvelope className="text-2xl text-[#9b59b6] mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-[#2ecc71] mr-2">$</span> Email
                  </h3>
                  <p className="text-gray-400 font-mono">jackson.onwork@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <FaPhone className="text-2xl text-[#9b59b6] mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-[#2ecc71] mr-2">$</span> Phone
                  </h3>
                  <p className="text-gray-400 font-mono">+91-7008018970</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <FaMapMarkerAlt className="text-2xl text-[#9b59b6] mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-[#2ecc71] mr-2">$</span> Location
                  </h3>
                  <p className="text-gray-400 font-mono">Bhubaneswar, India</p>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-[#2ecc71] mb-4">$ social --connect</p>
                <div className="flex gap-6">
                  {[
                    { icon: FaGithub, color: "white", label: "github", url: "https://github.com/yourusername" },
                    { icon: FaLinkedin, color: "#0a66c2", label: "linkedin", url: "https://linkedin.com/in/yourusername" },
                    { icon: SiLeetcode, color: "#f5a623", label: "leetcode", url: "https://leetcode.com/yourusername" },
                    { icon: SiCodechef, color: "#7a7a7a", label: "codechef", url: "https://codechef.com/users/yourusername" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ y: -5, scale: 1.2 }}
                      className={`text-3xl hover:text-[${social.color}]`}
                      style={{ color: social.color }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Terminal Style */}
          <motion.form
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="bg-[#34495e] p-8 rounded-xl border border-[#9b59b6] border-opacity-30"
            action="https://formspree.io/f/jackson.onwork@gmail.com"
            method="POST"
          >
            <p className="text-[#2ecc71] mb-6">$ message --new</p>
            
            <div className="space-y-6">
              <div>
                <label className="block mb-2 flex items-center">
                  <span className="text-[#2ecc71] mr-2">$</span> Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full bg-[#2c3e50] border border-[#34495e] rounded-lg px-4 py-3 focus:border-[#2ecc71] focus:outline-none font-mono"
                  required
                />
              </div>
              
              <div>
                <label className="block mb-2 flex items-center">
                  <span className="text-[#2ecc71] mr-2">$</span> Email
                </label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full bg-[#2c3e50] border border-[#34495e] rounded-lg px-4 py-3 focus:border-[#2ecc71] focus:outline-none font-mono"
                  required
                />
              </div>
              
              <div>
                <label className="block mb-2 flex items-center">
                  <span className="text-[#2ecc71] mr-2">$</span> Message
                </label>
                <textarea 
                  rows={5}
                  name="message"
                  className="w-full bg-[#2c3e50] border border-[#34495e] rounded-lg px-4 py-3 focus:border-[#2ecc71] focus:outline-none font-mono"
                  required
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(46, 204, 113, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#2ecc71] to-[#9b59b6] px-8 py-3 rounded-lg font-bold flex items-center gap-2 w-full justify-center"
                type="submit"
              >
                <FaPaperPlane /> $ send --message
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* Portfolio Link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://yourportfolio.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#34495e] hover:bg-[#3d566e] px-6 py-3 rounded-lg font-mono border border-[#2ecc71] border-opacity-30 transition-colors"
          >
            $ cd ~/portfolio
          </a>
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
              style={{ width: '85%' }}
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}