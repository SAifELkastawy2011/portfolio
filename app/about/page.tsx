'use client';
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiPostgresql } from "react-icons/si";

export default function About() {
  const skills = [
    { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", skills: ["Node.js", "Express.js", "PostgreSQL"] },
    { category: "Other", skills: ["REST APIs", "Git", "Responsive Design"] },
  ];

  const skillIcons = {
    "React": FaReact,
    "Next.js": SiNextdotjs,
    "TypeScript": SiTypescript,
    "Tailwind CSS": SiTailwindcss,
    "Node.js": FaNodeJs,
    "Express.js": SiExpress,
    "PostgreSQL": SiPostgresql,
  };

  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4 text-neutral-200">Who I Am</h2>
              <p className="text-neutral-400 leading-relaxed mb-4">
                I'm Saif Elkastawy, a 15-year-old passionate developer who loves building 
                amazing web applications. Despite my age, I've already gained significant 
                experience in full-stack development with a focus on creating beautiful, 
                responsive, and performant user interfaces.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                I specialize in modern JavaScript frameworks and libraries, with a strong 
                emphasis on React and Next.js. My goal is to create seamless digital 
                experiences that make a difference.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-300">
                  SE
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-center mb-8 text-neutral-200">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800 hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 text-neutral-200">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.skills.map((skill) => {
                    const Icon = skillIcons[skill as keyof typeof skillIcons];
                    return (
                      <div key={skill} className="flex items-center gap-3 text-neutral-400">
                        {Icon && <Icon className="text-xl" />}
                        <span>{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800"
        >
          <h2 className="text-2xl font-semibold mb-6 text-neutral-200">Development Journey</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-medium text-neutral-200">Started Coding</h3>
                <p className="text-neutral-400">Began learning programming at 13</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-medium text-neutral-200">Full Stack Development</h3>
                <p className="text-neutral-400">Mastered MERN stack and Next.js</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-pink-500 mt-1.5 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-medium text-neutral-200">Current Focus</h3>
                <p className="text-neutral-400">Building scalable web applications and exploring AI integration</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}