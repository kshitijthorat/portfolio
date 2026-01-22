import React from 'react'
import ColorBends from './ColorBends';
import BlurText from './BlurText'
const Loader = ({isExiting}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black flex-col text-white z-50 w-full h-full overflow-hidden" style={isExiting ? { animation: 'pushBlend 0.8s ease-out forwards' } : {}}>

<div className="absolute inset-0 w-full h-full z-0">
       <ColorBends
colors={["#5B4CF2", "#FF9FDB", "#A996F0", "#3b5bdb"]}
  rotation={0}
  speed={0.2}
  scale={1}
  frequency={1}
  warpStrength={1}
  parallax={0.5}
  noise={0.1}
  transparent
/>
      </div>

      {/* TEXT OVERLAY */}
      <div className="relative z-10 w-full h-full flex items-center justify-start sm:justify-start md:justify-center flex-col px-6 sm:px-8 md:px-0 pt-20 sm:pt-32 md:pt-0">
        <h1 className="tracking-widest flex flex-col text-left sm:text-left md:text-center">
          <BlurText
  text=" Kshitij Creative Developer
"
  delay={150}
  animateBy="words"
  direction="top"
  gradient={true}
  gradientFrom="#A996F0"
  gradientTo="#5B4CF2"
  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight font-bold "
/>
        </h1>
      </div>
      </div>  
  )
}

export default Loader