import React, { useState, useEffect, useRef } from 'react'
import DarkVeil from '../component/DarkVeil'
import Greeting from '../component/Greeting'
import DecryptedText from '../component/DecryptedText'
import ScrollVelocity from '../component/ScrollVelocity'
import GradientText from '../component/GradientText'
import MoodSound from '../component/MoodSound'
import ScrollReveal from '../component/ScrollReveal'
import CardSwap, { Card } from '../component/CardSwap'
import DotGrid from '../component/DotGrid'
import SkillsTimeline from '../component/SkillsTimeline'
import Connection from '../component/Connection'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 550, height: 380 })

  /* RESPONSIVE CARD SIZE */
  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth < 768 ? 320 : 550,
        height: window.innerWidth < 768 ? 240 : 380
      })
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  /* PARALLAX SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrollY(window.scrollY)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      title: 'MOJAVE EXPLORER',
      info: 'A cinematic journey through desert landscapes with immersive motion and high-resolution visuals.',
      image: 'https://picsum.photos/800/600?random=1'
    },
    {
      title: 'SONOMA DESIGN',
      info: 'A typography-first design system focused on clarity, rhythm, and visual balance.',
      image: 'https://picsum.photos/800/600?random=2'
    },
    {
      title: 'MONTEREY DASH',
      info: 'A performance-driven analytics dashboard with real-time visualizations.',
      image: 'https://picsum.photos/800/600?random=3'
    },
    {
      title: 'SEQUOIA CLOUD',
      info: 'A scalable cloud platform emphasizing security, reliability, and growth.',
      image: 'https://picsum.photos/800/600?random=4'
    }
  ]

  return (
    <div className="bg-black text-white" style={{ overflowX: 'clip' }}>

      {/* HERO */}
      <section className="relative min-h-screen rounded-b-3xl isolate">
        <div className="absolute inset-0">
          <DarkVeil />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32">
          <Greeting />

          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold  max-w-4xl">
            Blending{' '}
            <DecryptedText text="design," speed={60} sequential once className='mix-blend-soft-light' />
            <br />
            <DecryptedText text="code & motion" speed={60} sequential once className='mix-blend-soft-light' /> into
            meaningful experiences.
          </h1>

          <p className="mt-8 max-w-xl text-gray-400">
            I build modern, user-focused digital experiences with clean design and smooth motion.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <span className="text-sm uppercase tracking-widest text-gray-500">
              Set the mood
            </span>
            <div className="p-3 rounded-full bg-white/10 border border-white/20">
              <MoodSound />
            </div>
          </div>
        </div>

        <div className="mt-20 mb-10">
          <ScrollVelocity texts={['Design • Performance • Innovation']} velocity={20} />
        </div>
      </section>

      {/* ABOUT + PROJECTS WRAPPER */}
      <section className="relative overflow-hidden">

        {/* SHARED DOT GRID BACKGROUND */}
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
          <DotGrid
            className="w-full h-full"
            dotSize={3.5}
            gap={50}
            baseColor="#3A2A5E"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10">

          {/* ================= ABOUT ================= */}
          <section className="relative py-20 md:py-32 min-h-[40vh] md:min-h-[60vh]">
            <div className="max-w-6xl mx-auto px-6 text-center space-y-10">

              <h2 className="text-4xl md:text-6xl font-black uppercase">
                <GradientText colors={['#5B4CF2', '#FF9FDB', '#A996F0']}>
                  The Mind Behind The Screen
                </GradientText>
              </h2>

              <ScrollReveal baseOpacity={0.15} enableBlur blurStrength={2}>
                I'm Kshitij — coder by degree, chaos by personality.
                If I'm not debugging, I'm rewatching Naruto,
                getting sniped in Call of Duty, or daydreaming about cars.
              </ScrollReveal>

            </div>
          </section>

          {/* ================= PROJECTS ================= */}
          <section className="relative py-16 md:py-24 px-6 min-h-[60vh] md:min-h-[80vh]">

            {/* SECTION HEADER */}
            <div className="relative z-30 max-w-7xl mx-auto mb-24">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight flex items-baseline gap-1">
                <span className="gradient-text-animated">PROJECTS</span>
                <span className="text-[#A996F0]">.</span>
              </h2>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-48 min-h-[420px] md:min-h-[700px]">

              {/* LEFT — CARD SWAP */}
              <div
                className="w-full md:w-1/2 relative z-10 flex justify-center"
                style={{ transform: `translateY(${scrollY * 0.04}px)` }}
              >
                <div className="relative scale-100 md:scale-110 lg:scale-125 md:translate-y-10">
                  <CardSwap
                    cardDistance={70}
                    verticalDistance={50}
                    delay={3000}
                    pauseOnHover
                    onCardChange={setActiveProjectIndex}
                    width={dimensions.width}
                    height={dimensions.height}
                  >
                    {projects.map((project, idx) => (
                      <Card
                        key={idx}
                        className="rounded-2xl overflow-hidden border border-white/20"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </Card>
                    ))}
                  </CardSwap>
                </div>
              </div>

              {/* RIGHT — INFO */}
              <div
                className="w-full md:w-1/2 z-20 text-center md:text-left md:-translate-y-24"
                style={{ transform: `translateY(${scrollY * 0.07}px)` }}
              >
                <span className="text-[#A996F0] font-mono text-2xl">
                  0{activeProjectIndex + 1}
                </span>

                <h3 className="mt-6 text-5xl md:text-7xl font-black uppercase leading-none">
                  {projects[activeProjectIndex].title.split(' ')[0]}
                  <br />
                  <span className="text-[#A996F0]">
                    {projects[activeProjectIndex].title.split(' ').slice(1).join(' ')}
                  </span>
                </h3>

                <p className="mt-6 max-w-lg text-gray-400 text-lg mx-auto md:mx-0">
                  {projects[activeProjectIndex].info}
                </p>

                <div className="mt-10 flex gap-6 justify-center md:justify-start">
                  <button className="px-10 py-4 bg-white text-black font-bold rounded-full">
                    EXPLORE PROJECT
                  </button>
                </div>
              </div>

            </div>
          </section>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SKILLS TIMELINE
          ═══════════════════════════════════════════════════════ */}
      <SkillsTimeline />

      {/* ═══════════════════════════════════════════════════════
          LET'S CATCH UP
          ═══════════════════════════════════════════════════════ */}
      <Connection />

    </div>
  )
}

export default Home
