import React from 'react'

// Individually configured laser beam
const LaserBeam = ({ top, height, duration, delay, opacity, color }) => (
  <div 
    className="absolute left-0 w-full"
    style={{
      top: `${top}%`,
      height: `${height}px`,
      opacity: opacity,
      // A glowing core fading outwards
      background: `linear-gradient(to right, transparent, ${color}, transparent)`,
      boxShadow: `0 0 20px ${color}, 0 0 ${height * 8}px ${color}`,
      // Starts from off-screen right
      transform: 'translateX(100%)',
      animation: `flowRightToLeft ${duration}s ${delay}s linear infinite`,
      filter: 'blur(2px)' // Makes it feel more like scattered light/laser
    }}
  />
)

const LaserFlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes flowRightToLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
      
      {/* Multiple overlapping beams creating a dynamic "flow" behind the component */}
      <LaserBeam top={15} height={1} duration={7} delay={0} opacity={0.6} color="#8b5cf6" />
      <LaserBeam top={22} height={2} duration={5} delay={1.2} opacity={0.8} color="#a855f7" />
      <LaserBeam top={37} height={1.5} duration={8} delay={0.5} opacity={0.5} color="#6366f1" />
      <LaserBeam top={55} height={3} duration={4} delay={0} opacity={0.9} color="#d946ef" />
      <LaserBeam top={68} height={1} duration={6} delay={2.5} opacity={0.7} color="#4f46e5" />
      <LaserBeam top={78} height={2.5} duration={5.5} delay={0.8} opacity={0.6} color="#c026d3" />
      <LaserBeam top={88} height={1} duration={9} delay={3} opacity={0.4} color="#8b5cf6" />
    </div>
  )
}

export default LaserFlow
