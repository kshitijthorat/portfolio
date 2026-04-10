import React from 'react'
import ColorBends from './ColorBends';
import BlurText from './BlurText'
const Loader = ({ isExiting }) => {
  return (
    <div
      className={`fixed top-0 left-0 flex items-center justify-center bg-black flex-col text-white overflow-hidden ${isExiting ? 'pointer-events-none transition-opacity duration-1000' : ''}`}
      style={{
        zIndex: 99999,
        width: '100vw',
        height: '100vh',
        ...(isExiting ? { animation: 'pushBlend 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' } : {})
      }}
    >
      <div className="absolute inset-0 w-full h-full z-0 opacity-60">
        <ColorBends
          colors={["#5227FF", "#FF9FDB", "#A996F0", "#3A2A5E"]}
          rotation={0}
          speed={0.15}
          scale={1.2}
          frequency={1.5}
          warpStrength={1.2}
          parallax={0.3}
          noise={0.05}
          transparent
        />
      </div>

      {/* TEXT OVERLAY */}
      <div className="relative z-10 w-full h-full flex items-center justify-center flex-col px-6 md:px-0">
        <div className="text-center">
          <BlurText
            text="Kshitij Creative Developer"
            delay={100}
            animateBy="words"
            direction="top"
            gradient={true}
            gradientFrom="#5227FF"
            gradientTo="#FF9FDB"
            className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter"
          />
          <div className="h-1 w-24 bg-gradient-to-r from-[#5227FF] to-[#FF9FDB] mx-auto mt-6 rounded-full opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader