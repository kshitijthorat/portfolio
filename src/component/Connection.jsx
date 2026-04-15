import React from 'react'
import ScrollReveal from './ScrollReveal'

const Connection = () => {
  return (
    <section className="relative px-4 py-6 md:py-12 max-w-6xl mx-auto">
      <div className="bg-[#111113] rounded-[2rem] md:rounded-[3rem] py-10 md:py-16 px-6 flex flex-col items-center justify-center text-center">

        {/* Status Badge */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A1A1C] border border-[#2A2A2E] mb-8 lg:mb-10 hover:border-[#44444A] transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A996F0] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A996F0]"></span>
          </span>
          <span className="text-[#A3A3A6] text-xs md:text-sm font-medium tracking-wide">Available for work</span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#EDEDED] mb-12 leading-[1.05]">
          Let's create your
          <br />
          next big idea.
        </h2>

        {/* CTA Button */}
        <a
          href="mailto:kshitij.thorat@indiraicem.ac.in"
          className="group relative overflow-hidden px-8 py-4 rounded-full border border-[#333338] text-[#EDEDED] text-sm md:text-base font-medium hover:bg-[#A996F0] hover:border-[#5B4CF2] hover:text-white hover:shadow-[0_0_30px_rgba(91,76,242,0.4)] transition-all duration-300"
        >
          {/* Glare Sweeping Element */}
          <span className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out" />

          <span className="relative z-10">Contact Me</span>
        </a>

      </div>
    </section>
  )
}

export default Connection
