"use client";
import { motion } from 'framer-motion';
import { FaTerminal, FaCode, FaDumbbell, FaCalendarAlt, FaHeartbeat } from 'react-icons/fa';
import { GiMuscleUp, GiWeightLiftingUp, GiGymBag } from 'react-icons/gi';
import { useEffect, useState } from "react";
import Link from "next/link";

const LoadingAnimation = () => {
  const [activeIcon, setActiveIcon] = useState(0)
  const icons = [
    <FaTerminal key="terminal" className="text-2xl text-[#2ecc71]" />,
    <FaDumbbell key="dumbbell" className="text-2xl text-[#e67e22]" />,
    <GiWeightLiftingUp key="weight" className="text-2xl text-[#3498db]" />,
    <FaHeartbeat key="heart" className="text-2xl text-[#9b59b6]" />
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length)
    }, 800)
    return () => clearInterval(interval)
  }, [icons.length])

  return (
    <motion.div 
      className="flex justify-center items-center h-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        key={activeIcon}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 15 }}
      >
        {icons[activeIcon]}
      </motion.div>
    </motion.div>
  )
}

export default function Fitness() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#2c3e50] flex items-center justify-center">
        <LoadingAnimation />
      </div>
    )
  }

  const workoutRoutine = [
    {
      day: "Monday",
      type: "Push",
      icon: <FaDumbbell className="text-base text-[#3498db]" />,
      exercises: [
        "Bench Press: 4x8-12",
        "Overhead Press: 4x8-12",
        "Incline Dumbbell Press: 3x10-15",
        "Triceps Pushdowns: 3x12-15",
        "Lateral Raises: 4x15-20"
      ],
      command: "workout --push",
      color: "#3498db"
    },
    {
      day: "Tuesday",
      type: "Pull",
      icon: <GiMuscleUp className="text-base text-[#2ecc71]" />,
      exercises: [
        "Pull-ups: 4xAMRAP",
        "Barbell Rows: 4x8-12",
        "Lat Pulldowns: 3x10-15",
        "Face Pulls: 3x15-20",
        "Barbell Curls: 4x10-15"
      ],
      command: "workout --pull",
      color: "#2ecc71"
    },
    {
      day: "Wednesday",
      type: "Legs",
      icon: <GiWeightLiftingUp className="text-base text-[#9b59b6]" />,
      exercises: [
        "Squats: 4x8-12",
        "Romanian Deadlifts: 4x10-15",
        "Leg Press: 3x10-15",
        "Leg Curls: 3x12-15",
        "Calf Raises: 4x15-20"
      ],
      command: "workout --legs",
      color: "#9b59b6"
    },
    {
      day: "Thursday",
      type: "Push",
      icon: <FaDumbbell className="text-base text-[#3498db]" />,
      exercises: [
        "Overhead Press: 4x8-12",
        "Incline Bench Press: 4x8-12",
        "Dumbbell Flyes: 3x12-15",
        "Lateral Raises: 4x15-20",
        "Triceps Overhead Extensions: 3x12-15"
      ],
      command: "workout --push",
      color: "#3498db"
    },
    {
      day: "Friday",
      type: "Pull and Core",
      icon: <FaHeartbeat className="text-base text-[#e74c3c]" />,
      exercises: [
        "Deadlifts: 4x5-8",
        "Pull-ups: 4xAMRAP",
        "Seated Cable Rows: 3x10-15",
        "Hammer Curls: 3x10-15",
        "Plank: 3x60s",
        "Hanging Leg Raises: 3x15",
        "Russian Twists: 3x20"
      ],
      command: "workout --pull-core",
      color: "#e74c3c"
    },
    {
      day: "Saturday",
      type: "Rest",
      icon: <GiGymBag className="text-base text-gray-400" />,
      exercises: ["Active recovery / Mobility work"],
      command: "recovery --active",
      color: "#95a5a6"
    },
    {
      day: "Sunday",
      type: "Rest",
      icon: <GiGymBag className="text-base text-gray-400" />,
      exercises: ["Complete rest"],
      command: "recovery --full",
      color: "#95a5a6"
    }
  ];

  const fitnessStats = [
    { 
      icon: FaDumbbell, 
      value: "405lbs", 
      label: "Deadlift PR", 
      command: "fitness_stats --strength",
      color: "#e67e22"
    },
    { 
      icon: FaHeartbeat, 
      value: "8hrs", 
      label: "Sleep/Night", 
      command: "health_tracker --sleep",
      color: "#9b59b6"
    },
    { 
      icon: FaCalendarAlt, 
      value: "5x", 
      label: "Workouts/Week", 
      command: "routine --frequency",
      color: "#2ecc71"
    },
    { 
      icon: GiMuscleUp, 
      value: "100%", 
      label: "Consistency", 
      command: "performance --consistency",
      color: "#3498db"
    }
  ];

  const trainingPrinciples = [
    {
      title: "Progressive Overload",
      description: "Gradually increase weight, reps, or volume to challenge muscles",
      icon: <GiMuscleUp className="text-xl text-[#e67e22]" />,
      command: "principle --overload"
    },
    {
      title: "Form First",
      description: "Prioritize technique over weight to prevent injury",
      icon: <FaHeartbeat className="text-xl text-[#e74c3c]" />,
      command: "principle --form"
    },
    {
      title: "Recovery",
      description: "Allow 48-72 hours between working muscle groups",
      icon: <GiGymBag className="text-xl text-[#3498db]" />,
      command: "principle --recovery"
    }
  ];

  return (
    <div className="min-h-screen bg-[#2c3e50] text-white font-mono overflow-hidden">
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <GiWeightLiftingUp className="text-[120px] text-[#e67e22]" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <FaDumbbell className="text-[90px] text-[#3498db]" />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="bg-[#34495e] p-3 rounded border-l-3 border-[#2ecc71] max-w-2xl mx-auto">
            <p className="text-[#2ecc71] text-sm">$ fitness --routine</p>
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] to-[#9b59b6]">
                Code. Lift. Repeat.
              </span>
            </h1>
            <p className="text-gray-400 mt-1 text-sm text-left">{'// 5x/week: Push, Pull, Legs, Push, Pull & Core'}</p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#2ecc71] px-4 py-2 rounded text-sm flex items-center gap-1"
            >
              <FaCode /> $ projects
            </motion.button>
          </Link>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#3498db] px-4 py-2 rounded text-sm"
            >
              $ cd ~
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {fitnessStats.map((stat) => (
            <motion.div
              key={stat.command}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -5 }}
              className={`bg-[#34495e] p-4 rounded-lg border border-[${stat.color}] border-opacity-20`}
            >
              <div className="flex justify-between items-start mb-1">
                <stat.icon className={`text-xl`} style={{ color: stat.color }} />
                <span className="text-xs text-gray-500">$ {stat.command}</span>
              </div>
              <div className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-[#34495e] p-5 rounded-xl max-w-4xl mx-auto border border-[#2ecc71] border-opacity-20 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <FaCalendarAlt className="text-[#e67e22]" />
            <h3 className="text-xl">$ workout_routine --weekly</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {workoutRoutine.map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className={`bg-[#2c3e50] py-3 px-4 rounded border border-[#34495e]`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    {day.icon}
                    <h3 className="font-bold">{day.day}</h3>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    day.type.includes('Rest') 
                      ? 'bg-gray-700/50 text-gray-300' 
                      : 'bg-[#e67e22]/80'
                  }`}>
                    {day.type}
                  </span>
                </div>
                
                <ul className="space-y-1 mb-2">
                  {day.exercises.map((exercise, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-[#e67e22] mr-1 mt-1">•</span>
                      <span className="text-gray-300">{exercise}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-xs text-gray-500">$ {day.command}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 bg-[#34495e] p-5 rounded-xl max-w-4xl mx-auto border border-[#2ecc71] border-opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <GiMuscleUp className="text-[#e67e22]" />
            <h3 className="text-xl">$ training_principles</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trainingPrinciples.map((principle, _) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * _ }}
                className="bg-[#2c3e50] p-4 rounded border border-[#34495e]"
              >
                <div className="flex items-center gap-2 mb-2">
                  {principle.icon}
                  <h4 className="font-bold">{principle.title}</h4>
                </div>
                <p className="text-gray-300 text-sm mb-2">{principle.description}</p>
                <p className="text-xs text-gray-500">$ {principle.command}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="fixed bottom-0 left-0 right-0 bg-[#34495e]/90 backdrop-blur-md border-t border-[#2c3e50] py-2 text-xs"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-[#2ecc71]">
              $ status: active --routine 5x_split
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <GiMuscleUp className="text-[#e67e22]" />
                <span className="text-[#e67e22] font-medium">Week 12</span>
              </div>
              <div className="flex items-center gap-1">
                <FaHeartbeat className="text-[#e74c3c]" />
                <span className="text-[#e74c3c] font-medium">220 PR</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}