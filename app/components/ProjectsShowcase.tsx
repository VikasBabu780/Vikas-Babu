import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Zap, Cloud, Smartphone } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ProjectsShowcase = () => {
  const mainProjects = [
    {
      title: "JOB PORTAL",
      tech: ["React JS", "Node JS", "Mongo DB", "Cloudinary", "Shadcn UI"],
      desc: "Full-stack ecosystem for career management.",
      url: "https://jobkart.vercel.app",
      color: "from-blue-600 to-cyan-500",
      icon: <Layers size={24} />
    },
    {
      title: "KLIMA",
      tech: ["Next JS", "Climate API", "Tanstack Query", "Shadcn UI"],
      desc: "High-performance real-time climate tracking.",
      url: "https://klimanow.vercel.app",
      color: "from-emerald-500 to-teal-400",
      icon: <Cloud size={24} />
    }
  ];

  const miniProjects = [
    { name: "Netflix Clone", tools: "HTML, CSS, JS" },
    { name: "Amazon Clone", tools: "HTML, CSS, JS" },
    { name: "BMI Calculator", tools: "React JS" },
    { name: "Guessing Game", tools: "JS" }
  ];

  const router  = useRouter();

  return (
    <section className="bg-black py-32 px-6 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col mb-16"
        >
          <h2 className="text-5xl font-black tracking-tighter text-white mb-4">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">BUILDS</span>
          </h2>
          <div className="h-1 w-24 bg-blue-600 rounded-full" />
        </motion.div>

        {/* Major Projects - 3D Hover Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {mainProjects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative bg-zinc-900/40 border border-white/5 rounded-[2rem] p-1 overflow-hidden"
            >
              <div className="bg-zinc-950 rounded-[1.8rem] p-8 h-full">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20`}>
                  {project.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4" onClick={() => router.push(project.url)}>
                  <button className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full font-bold text-sm hover:bg-blue-500 hover:text-white transition-all">
                    Live Demo <ExternalLink size={14}  />
                  </button>
                  <button className="p-2 border border-white/10 rounded-full hover:bg-white/5 transition-colors">
                    <Github size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Projects - Marquee/Grid */}
        <div className="mt-24">
          <h4 className="text-sm uppercase tracking-[0.3em] text-gray-500 font-bold mb-8 text-center">
            Development Experiments
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {miniProjects.map((mini, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl hover:bg-zinc-800/50 transition-all group"
              >
                <Zap size={16} className="text-yellow-500 mb-3 group-hover:scale-125 transition-transform" />
                <h5 className="text-white font-bold text-sm mb-1">{mini.name}</h5>
                <p className="text-xs text-gray-500">{mini.tools}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;