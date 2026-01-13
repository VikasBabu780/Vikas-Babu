"use client"
import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import ModernHeader from './components/header'
import ExperienceBento from './components/ExperienceBento'
import SkillsMatrix from './components/SkillsMatrix'
import ProjectsShowcase from './components/ProjectsShowcase'
import GrowthSummary from './components/GrowthSummary'
import UltraCreativeFooter from './components/UltraCreativeFooter'

const Page = () => {
  // Ultra-modern reading progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-black selection:bg-blue-500/30 selection:text-blue-200">
      {/* 1. Global Progress Bar (Ultra-Modern Touch) */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* 2. Floating Navigation */}
      <ModernHeader />

      {/* 3. Content Sections with consistent spacing */}
      <div className="flex flex-col space-y-0">
        
        {/* Hero / Education Core */}
        <section id="education" className="pt-20">
          <ExperienceBento />
        </section>

        {/* Technical Stack */}
        <section id="skills" className="relative">
          <SkillsMatrix />
        </section>

        {/* Featured Projects */}
        <section id="projects" className="relative">
          <ProjectsShowcase />
        </section>

        {/* Philosophy & Roadmap */}
        <section id="about" className="relative">
          <GrowthSummary />
        </section>

      </div>

      {/* 4. Interactive Footer */}
      <UltraCreativeFooter />
    </main>
  )
}

export default Page