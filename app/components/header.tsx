import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const ModernHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for glass effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'mt-4' : 'mt-0'
      }`}
    >
      <div className={`max-w-6xl mx-auto backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-500 ${
        isScrolled ? 'bg-black/80 shadow-[0_0_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between px-6 h-16">
          
          {/* Brand/Logo [cite: 1] */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
              V
            </div>
            <span className="font-bold tracking-tighter text-xl text-white hidden sm:block">
              VIKAS BABU
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Socials & CTA  */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 border-r border-white/10 pr-4 mr-1">
              <HeaderIcon href="https://github.com" icon={<Github size={18} />} />
              <HeaderIcon href="https://linkedin.com" icon={<Linkedin size={18} />} />
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:babuvikas246@gmail.com" 
              className="bg-white text-black px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              Hire Me <Mail size={14} />
            </motion.a>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 bg-black/95 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-gray-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const HeaderIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    whileHover={{ y: -2, color: '#fff' }}
    className="text-gray-500 transition-colors"
  >
    {icon}
  </motion.a>
);

export default ModernHeader;