import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Terminal, Cpu, PenTool as Tool } from 'lucide-react';

const SkillsMatrix = () => {
  const containerVars = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 }
  };

  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(#22d3ee_0.5px,transparent_0.5px)] [background-size:24px_24px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            TECHNICAL <span className="text-blue-500">ARMORY</span>
          </h2>
          <p className="text-gray-500 mt-4 font-medium uppercase tracking-[0.2em]">Mastering the Digital Craft</p>
        </motion.div>

        <motion.div 
          variants={containerVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Section 1: Core Languages */}
          <motion.div variants={itemVars} className="group p-8 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-blue-500/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                <Terminal size={28} />
              </div>
              <h3 className="text-xl font-bold text-white">Languages</h3>
            </div>
            <div className="space-y-4">
              {['Python', 'Java', 'C++', 'C', 'JavaScript'].map((lang) => (
                <div key={lang} className="flex justify-between items-center group/item">
                  <span className="text-gray-400 group-hover/item:text-white transition-colors">{lang}</span>
                  <div className="h-[1px] flex-grow mx-4 bg-white/10 group-hover/item:bg-blue-500/50 transition-all" />
                  <span className="text-[10px] font-bold text-blue-500/60 uppercase tracking-widest">Core</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 2: Web Development */}
          <motion.div variants={itemVars} className="group p-8 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-purple-500/30 transition-all duration-500 md:scale-105 z-20 shadow-2xl shadow-purple-500/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold text-white">Web Stack</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['React', 'Next JS', 'Tailwind CSS', 'TypeScript', 'Express', 'HTML', 'CSS'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-gray-300 hover:bg-purple-500 hover:text-white transition-all">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-purple-400 font-bold uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                Focus: Modern UI/UX
              </div>
            </div>
          </motion.div>

          {/* Section 3: Databases & Engineering Tools */}
          <motion.div variants={itemVars} className="group p-8 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-emerald-500/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                <Database size={28} />
              </div>
              <h3 className="text-xl font-bold text-white">Engineering</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <Database className="text-emerald-500 mb-2" size={16} />
                <p className="text-xs font-bold text-white">MySQL & DBMS</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <Tool className="text-emerald-500 mb-2" size={16} />
                <p className="text-xs font-bold text-white">Git & Github</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <Cpu className="text-emerald-500 mb-2" size={16} />
                <p className="text-xs font-bold text-white">MATLAB</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">
                <p className="text-[10px] text-gray-500 uppercase tracking-tighter">VS Code / Excel</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsMatrix;