import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GraduationCap, Cpu, Globe, Terminal, Award } from 'lucide-react';

const ExperienceBento = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Academic & Technical Core
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl">
            Synthesizing Mathematics and Scientific Computing at NIT Hamirpur.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full">
          
          {/* Education Card - Large */}
          <motion.div 
            {...fadeInUp}
            className="md:col-span-2 md:row-span-1 bg-zinc-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors"
          >
            <GraduationCap className="text-blue-500 mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">NIT Hamirpur</h3>
            <p className="text-gray-400">B.Tech in Mathematics and Scientific Computing</p>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-3xl font-mono font-bold text-white">6.91</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Current CGPA</span>
            </div>
            {/* Subtle background glow */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all" />
          </motion.div>

          {/* Programming Languages Card */}
          <motion.div 
            {...fadeInUp}
            className="md:col-span-2 bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="text-purple-500" size={24} />
              <h3 className="text-xl font-bold">Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Java', 'JavaScript', 'C++', 'MySQL'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Web Dev Card */}
          <motion.div 
            {...fadeInUp}
            className="md:col-span-1 bg-zinc-900/50 border border-white/10 rounded-3xl p-6 flex flex-col justify-between group hover:border-orange-500/50 transition-colors"
          >
            <Globe className="text-orange-500" size={24} />
            <div>
              <h3 className="text-lg font-bold mt-4">Modern Web</h3>
              <p className="text-gray-500 text-sm mt-1">React, Next.js, Tailwind, & Express.</p>
            </div>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div 
            {...fadeInUp}
            className="md:col-span-2 bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-8 relative group overflow-hidden hover:border-yellow-500/50 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <Award className="text-yellow-500 mb-4" size={32} />
                <h3 className="text-3xl font-black">100+</h3>
                <p className="text-gray-400">Problems Solved on LeetCode</p>
                <p className="text-xs text-yellow-500/70 mt-2 uppercase font-bold tracking-tighter">Continuously Active</p>
              </div>
              <Code2 className="text-white/5 absolute -right-4 -bottom-4" size={140} />
            </div>
          </motion.div>

          {/* Tooling Card */}
          <motion.div 
            {...fadeInUp}
            className="md:col-span-1 bg-zinc-900/50 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:border-green-500/50 transition-colors"
          >
            <Cpu className="text-green-500 mb-2" size={24} />
            <h3 className="text-sm font-bold uppercase tracking-widest">Tools</h3>
            <p className="text-gray-500 text-xs mt-2 italic">Git, MATLAB, VS Code</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceBento;