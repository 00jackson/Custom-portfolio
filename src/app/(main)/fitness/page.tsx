"use client";
import { motion } from 'framer-motion';
import { FaTerminal, FaCode, FaDumbbell, FaCalendarAlt, FaHeartbeat } from 'react-icons/fa';
import { GiMuscleUp, GiWeightLiftingUp, GiGymBag } from 'react-icons/gi';
import { useEffect, useState } from "react";
import Link from "next/link";

const LoadingAnimation = () => {
  const [activeIcon, setActiveIcon] = useState(0);
  const icons = [
    <FaTerminal key="terminal" className="text-xl text-[#2ecc71]" />,
    <FaDumbbell key="dumbbell" className="text-xl text-[#e67e22]" />,
    <GiWeightLiftingUp key="weight" className="text-xl text-[#3498db]" />,
    <FaHeartbeat key="heart" className="text-xl text-[#9b59b6]" />
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length);
    }, 800);
    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <motion.div 
      className="flex justify-center items-center h-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        key={activeIcon}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {icons[activeIcon]}
      </motion.div>
    </motion.div>
  );
};

export default function Fitness() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#2c3e50] flex items-center justify-center">
        <LoadingAnimation />
      </div>
    );
  }

  const workoutRoutine = [
    { day: "Monday", type: "Push", icon: <FaDumbbell className="text-sm text-[#3498db]" />, exercises: ["Bench Press: 4x8-12", "Overhead Press: 4x8-12", "Incline Dumbbell Press: 3x10-15"], command: "workout --push", color: "#3498db" },
    { day: "Tuesday", type: "Pull", icon: <GiMuscleUp className="text-sm text-[#2ecc71]" />, exercises: ["Pull-ups: 4xAMRAP", "Barbell Rows: 4x8-12", "Lat Pulldowns: 3x10-15"], command: "workout --pull", color: "#2ecc71" },
    { day: "Wednesday", type: "Legs", icon: <GiWeightLiftingUp className="text-sm text-[#9b59b6]" />, exercises: ["Squats: 4x8-12", "Romanian Deadlifts: 4x10-15", "Leg Press: 3x10-15"], command: "workout --legs", color: "#9b59b6" },
    { day: "Thursday", type: "Push", icon: <FaDumbbell className="text-sm text-[#3498db]" />, exercises: ["Overhead Press: 4x8-12", "Incline Bench Press: 4x8-12", "Dumbbell Flyes: 3x12-15"], command: "workout --push", color: "#3498db" },
    { day: "Friday", type: "Pull & Core", icon: <FaHeartbeat className="text-sm text-[#e74c3c]" />, exercises: ["Deadlifts: 4x5-8", "Pull-ups: 4xAMRAP", "Plank: 3x60s"], command: "workout --pull-core", color: "#e74c3c" },
    { day: "Saturday", type: "Rest", icon: <GiGymBag className="text-sm text-gray-400" />, exercises: ["Active recovery"], command: "recovery --active", color: "#95a5a6" },
    { day: "Sunday", type: "Rest", icon: <GiGymBag className="text-sm text-gray-400" />, exercises: ["Complete rest"], command: "recovery --full", color: "#95a5a6" }
  ];

  const fitnessStats = [
    { icon: FaDumbbell, value: "405lbs", label: "Deadlift PR", command: "stats --strength", color: "#e67e22" },
    { icon: FaHeartbeat, value: "8hrs", label: "Sleep/Night", command: "health --sleep", color: "#9b59b6" },
    { icon: FaCalendarAlt, value: "5x", label: "Workouts/Week", command: "routine --frequency", color: "#2ecc71" }
  ];

  const trainingPrinciples = [
    { title: "Progressive Overload", description: "Increase weight/reps over time", icon: <GiMuscleUp className="text-lg text-[#e67e22]" />, command: "principle --overload" },
    { title: "Form First", description: "Prioritize technique to prevent injury", icon: <FaHeartbeat className="text-lg text-[#e74c3c]" />, command: "principle --form" },
    { title: "Recovery", description: "Rest 48-72 hrs between muscle groups", icon: <GiGymBag className="text-lg text-[#3498db]" />, command: "principle --recovery" }
  ];

  return (
    <div className="min-h-screen bg-[#2c3e50] text-white font-mono">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="bg-[#34495e] p-2 rounded max-w-lg mx-auto">
            <p className="text-[#2ecc71] text-xs">$ fitness --routine</p>
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] to-[#9b59b6]">
                Code. Lift. Repeat.
              </span>
            </h1>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#2ecc71] px-3 py-1 rounded text-xs flex items-center gap-1"
            >
              <FaCode /> $ projects
            </motion.button>
          </Link>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#3498db] px-3 py-1 rounded text-xs"
            >
              $ cd ~
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {fitnessStats.map((stat) => (
            <motion.div
              key={stat.command}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-[#34495e] p-3 rounded"
            >
              <div className="flex justify-between items-center mb-1">
                <stat.icon className="text-lg" style={{ color: stat.color }} />
                <span className="text-xs text-gray-500">$ {stat.command}</span>
              </div>
              <div className="text-lg font-bold" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-[#34495e] p-4 rounded max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-1 mb-3">
            <FaCalendarAlt className="text-[#e67e22] text-lg" />
            <h3 className="text-lg">$ workout_routine</h3>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {workoutRoutine.map((day) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[#2c3e50] p-3 rounded"
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-1">
                    {day.icon}
                    <h3 className="font-bold text-sm">{day.day}</h3>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-xs ${day.type.includes('Rest') ? 'bg-gray-700/50 text-gray-300' : 'bg-[#e67e22]/50'}`}>
                    {day.type}
                  </span>
                </div>
                <ul className="space-y-0.5">
                  {day.exercises.map((exercise, idx) => (
                    <li key={idx} className="flex items-start text-xs">
                      <span className="text-[#e67e22] mr-1 mt-0.5">•</span>
                      <span className="text-gray-300">{exercise}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-[#34495e] p-4 rounded max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center gap-1 mb-3">
            <GiMuscleUp className="text-[#e67e22] text-lg" />
            <h3 className="text-lg">$ training_principles</h3>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {trainingPrinciples.map((principle) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-[#2c3e50] p-3 rounded"
              >
                <div className="flex items-center gap-1 mb-1">
                  {principle.icon}
                  <h4 className="font-bold text-sm">{principle.title}</h4>
                </div>
                <p className="text-gray-300 text-xs">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}