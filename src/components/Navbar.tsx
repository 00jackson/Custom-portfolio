'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { FaTerminal, FaCode, FaUserAlt, FaEnvelope } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'
import { MdWork } from 'react-icons/md'
import { BiMenuAltRight } from 'react-icons/bi'

const navItems = [
  { 
    name: 'About', 
    path: '/about', 
    icon: FaUserAlt,
    terminalCommand: 'whoami'
  },
  { 
    name: 'Experience', 
    path: '/experience', 
    icon: MdWork,
    terminalCommand: 'experience --list'
  },
  { 
    name: 'Projects', 
    path: '/projects', 
    icon: FaCode,
    terminalCommand: 'projects --show'
  },
  { 
    name: 'Skills', 
    path: '/skills', 
    icon: GiSkills,
    terminalCommand: 'skills --list'
  },
  { 
    name: 'Contact', 
    path: '/contact', 
    icon: FaEnvelope,
    terminalCommand: 'contact --email'
  }
]

export function Navbar() {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize() // Check on initial render
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* Animated background visualization */}
      <div className="fixed inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20">
          <FaTerminal className="text-[200px] text-blue-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-20">
          <FaCode className="text-[200px] text-orange-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Desktop Navbar (left side) */}
      {!isMobile && (
        <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
          <motion.div 
            className="flex flex-col"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            {/* Terminal header */}
            <div className="flex items-center bg-[#2c3e50] rounded-t-lg px-4 py-2">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-[#e74c3c]"></div>
                <div className="w-3 h-3 rounded-full bg-[#f39c12]"></div>
                <div className="w-3 h-3 rounded-full bg-[#2ecc71]"></div>
              </div>
              <div className="text-sm font-mono text-gray-300 whitespace-nowrap">
                user@portfolio
              </div>
            </div>

            {/* Navigation body */}
            <div className="bg-[#2c3e50]/90 backdrop-blur-md px-4 py-3 rounded-b-lg border border-[#34495e] shadow-xl">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.path
                  return (
                    <li key={item.name}>
                      <motion.div whileHover={{ x: 3 }}>
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#2ecc71] text-xs text-white px-2 py-1 rounded font-mono whitespace-nowrap"
                            >
                              $ {item.terminalCommand}
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        <a
                          href={item.path}
                          className={`flex items-center p-3 rounded-lg transition-all ${isActive 
                            ? 'bg-[#2ecc71] text-white shadow-lg shadow-[#2ecc71]/30' 
                            : 'hover:bg-[#34495e] text-gray-300'}`}
                        >
                          <item.icon className={`text-xl ${isActive ? 'text-white' : 'text-[#9b59b6]'}`} />
                          <span className="text-xs ml-2 font-mono">{item.name}</span>
                        </a>
                      </motion.div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
        </nav>
      )}

      {/* Mobile Navbar (TOP RIGHT with hamburger menu) */}
      {isMobile && (
        <nav className="fixed top-6 right-6 z-50">
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-[#2c3e50] p-3 rounded-lg shadow-lg flex items-center"
            >
              <BiMenuAltRight className="text-xl text-white" />
              <span className="text-xs font-mono text-gray-300 ml-2">menu</span>
            </motion.button>

            {/* Mobile menu dropdown - now opens downward */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-full right-0 mt-2 bg-[#2c3e50]/90 backdrop-blur-md rounded-lg border border-[#34495e] shadow-xl p-2 min-w-[200px]"
                >
                  <div className="flex items-center bg-[#2c3e50] rounded-t-lg px-3 py-2 mb-2">
                    <div className="flex space-x-2 mr-4">
                      <div className="w-2 h-2 rounded-full bg-[#e74c3c]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#f39c12]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#2ecc71]"></div>
                    </div>
                    <div className="text-xs font-mono text-gray-300">
                      menu@mobile
                    </div>
                  </div>

                  <ul className="flex flex-col gap-1">
                    {navItems.map((item) => {
                      const isActive = pathname === item.path
                      return (
                        <li key={item.name}>
                          <a
                            href={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center p-3 rounded-lg transition-all ${isActive 
                              ? 'bg-[#2ecc71] text-white shadow-lg shadow-[#2ecc71]/30' 
                              : 'hover:bg-[#34495e] text-gray-300'}`}
                          >
                            <item.icon className={`text-lg ${isActive ? 'text-white' : 'text-[#9b59b6]'}`} />
                            <span className="text-xs ml-3 font-mono">{item.name}</span>
                            {isActive && (
                              <span className="ml-auto text-xs font-mono">$</span>
                            )}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </nav>
      )}
    </>
  )
}