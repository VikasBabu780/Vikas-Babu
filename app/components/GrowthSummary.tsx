import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BrainCircuit, Target, Code, Flame } from 'lucide-react';

const GrowthSummary = () => {
  return (
    <section className="bg-black py-24 px-6 relative border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: The Grit (Hard Work Proof) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 text-orange-500">
              <Flame size={28} className="animate-pulse" />
              <h2 className="text-3xl font-bold tracking-tight text-white">THE GRIT</h2>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-lg">
              My journey is defined by a consistent pursuit of excellence, moving from a <span className="text-white font-bold">90.20% in Class 10</span>  to tackling complex <span className="text-white font-bold">Mathematics and Scientific Computing</span> at NIT Hamirpur. I don&apos;t just build apps; I solve problems.
            </p>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-zinc-900/50 border-l-4 border-orange-500">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Target size={18} /> LeetCode Consistency
                </h4>
                <p className="text-gray-400 text-sm">
                  Solving <span className="text-white font-bold">100+ problems</span> while maintaining continuous activity. This reflects my discipline in algorithmic thinking and daily habit of coding.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border-l-4 border-blue-500">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Code size={18} /> Project Velocity
                </h4>
                <p className="text-gray-400 text-sm">
                  From deep MERN stack builds like my <span className="text-white font-bold">Job Portal</span> [cite: 16, 17] to high-performance Next JS apps like <span className="text-white font-bold">Klima</span>[cite: 18, 19], I translate complex requirements into working software.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: The Future (Learning Roadmap) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 text-blue-500">
              <Rocket size={28} />
              <h2 className="text-3xl font-bold tracking-tight text-white">THE FUTURE</h2>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg">
              Knowledge is a moving target. My current focus is bridging the gap between frontend elegance and backend robustness.
            </p>

            <div className="relative border-l border-zinc-800 ml-4 space-y-12">
              {/* Future Goal 1 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                <h4 className="text-white font-bold uppercase tracking-wider">Advanced React Mastery</h4>
                <p className="text-gray-500 text-sm mt-2">Currently deep-diving into <span className="text-blue-400 font-medium">React JS</span>  to create highly scalable, component-driven architectures.</p>
              </div>

              {/* Future Goal 2 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-500" />
                <h4 className="text-white font-bold uppercase tracking-wider">Full-Scale Backend Systems</h4>
                <p className="text-gray-500 text-sm mt-2">Mastering <span className="text-purple-400 font-medium">Backend Development</span>  to build secure, high-traffic APIs and complex database schemas.</p>
              </div>

              {/* Future Goal 3 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500" />
                <h4 className="text-white font-bold uppercase tracking-wider">Scientific Computing</h4>
                <p className="text-gray-500 text-sm mt-2">Leveraging my <span className="text-emerald-400 font-medium">Mathematics background</span>  from NIT Hamirpur to explore AI/ML and data-driven simulations.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GrowthSummary;