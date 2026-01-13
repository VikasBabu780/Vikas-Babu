import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Sparkles, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const UltraCreativeFooter = () => {
  return (
    <footer className="relative bg-black py-24 px-6 overflow-hidden border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The "Big" Hook */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
              <Sparkles size={12} /> Let&apos;s build the future
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8">
              READY TO <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                CONNECT?
              </span>
            </h2>
            
            <div className="flex flex-col gap-4 text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-500" />
                <span>NIT Hamirpur, Himachal Pradesh [cite: 4]</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Currently mastering Backend & React </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive Command Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-zinc-950 border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center">
              <p className="text-gray-400 mb-8 max-w-xs">
                Have a project in mind or just want to discuss Mathematics & Computing? [cite: 5]
              </p>
              
              <motion.a
                href="mailto:babuvikas246@gmail.com" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                SAY HELLO
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>

              <div className="grid grid-cols-3 gap-6 mt-12 w-full">
                <SocialLink href="https://github.com" icon={<Github />} label="GitHub" /> 
                <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" /> 
                <SocialLink href="mailto:babuvikas246@gmail.com" icon={<Mail />} label="Email" /> 
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-tighter text-lg">VIKAS BABU [cite: 1]</span>
            <span className="text-gray-500 text-xs uppercase tracking-widest">© 2024-2027 Portfolio [cite: 5]</span>
          </div>
          
          <div className="flex gap-8 text-xs font-medium text-gray-500 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Back to Top</a>
            <a href="https://leetcode.com" className="hover:text-white transition-colors">LeetCode </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a 
    href={href} 
    className="flex flex-col items-center gap-2 group transition-all"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 text-gray-400 group-hover:text-white transition-all">
      {icon}
    </div>
    <span className="text-[10px] font-bold text-gray-500 group-hover:text-gray-300 uppercase tracking-widest">{label}</span>
  </a>
);

export default UltraCreativeFooter;