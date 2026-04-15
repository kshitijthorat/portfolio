import React from 'react'
import LaserFlow from '../component/LaserFlow'

const About = () => {
  return (
    <div className="min-h-screen w-full relative flex flex-col md:flex-row items-center justify-between overflow-hidden pt-20 md:pt-0">
      
      {/* BACKGROUND LASER FLOW */}
      <div className="absolute inset-0 z-0">
        <LaserFlow />
      </div>

      {/* LEFT SIDE: TEXT SECTION */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
          Full-Stack Developer <br /> & Tech Enthusiast
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed">
          Hi, I'm Kshitij Thorat. I'm passionate about building scalable,
          user-centric web applications and crafting intuitive digital experiences
          from the ground up. Let's create something extraordinary together.
        </p>
      </div>

      {/* RIGHT SIDE: FULLSCREEN PHOTO WITH SEMI-CIRCLE BORDER */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative flex items-center justify-end mt-12 md:mt-0">
        {/* Note the 'rounded-l-full' which creates the arched/semi-circle border on the left */}
        <div className="relative w-full h-full bg-neutral-900 md:rounded-l-full overflow-hidden border-l border-white/10 shadow-[-20px_0_50px_rgba(124,58,237,0.15)] flex items-center justify-center">
          
          {/* MAKE SURE TO REPLACE THE SRC WITH YOUR ACTUAL PHOTO! */}
          <img 
            src="/About_logo.png" 
            alt="Kshitij Thorat" 
            className="w-full h-full object-cover object-top opacity-100 transition-transform duration-700 hover:scale-105"
          />
          
          {/* Subtle gradient overlay to blend perfectly into the background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent md:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
        </div>
      </div>

    </div>
  )
}

export default About