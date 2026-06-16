'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCode, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress } from "react-icons/si";

export default function Home() {
  const skills = [
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-white" },
    { name: "PostgreSQL", icon: FaDatabase, color: "text-blue-400" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              🚀 Available for Freelance
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              Saif Elkastawy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-300 mb-4"
          >
            Senior Front-End Developer & Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto"
          >
            15 years old • Building the future, one line of code at a time
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 rounded-full border border-neutral-700 text-neutral-300 font-medium hover:border-white hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-semibold text-center mb-10 text-neutral-300">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <skill.icon className={`text-3xl ${skill.color}`} />
                <span className="text-sm text-neutral-400">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">15</div>
            <div className="text-neutral-400 mt-2">Years Old</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">2+</div>
            <div className="text-neutral-400 mt-2">Years Experience</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">10+</div>
            <div className="text-neutral-400 mt-2">Projects Completed</div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}