import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX, Music } from 'lucide-react'

const MOODS = {
  calm: { label: 'Calm', file: '/audio/calm.mp3' },
  jazz: { label: 'Jazz', file: '/audio/jazz.mp3' }
}

const MoodSound = () => {
  const audioRef = useRef(null)
  const wrapperRef = useRef(null)

  const [enabled, setEnabled] = useState(false)
  const [mood, setMood] = useState('calm')
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  /* LOAD SAVED STATE */
  useEffect(() => {
    setMounted(true)
    const savedEnabled = localStorage.getItem('moodSoundEnabled')
    const savedMood = localStorage.getItem('moodSoundMood')

    if (savedEnabled === 'true') setEnabled(true)
    if (savedMood) setMood(savedMood)
  }, [])

  /* AUDIO CONTROL */
  useEffect(() => {
    if (!audioRef.current) return

    audioRef.current.src = MOODS[mood].file
    audioRef.current.volume = 0.12

    if (enabled) {
      audioRef.current.play().catch(() => { })
    } else {
      audioRef.current.pause()
    }

    localStorage.setItem('moodSoundEnabled', enabled)
    localStorage.setItem('moodSoundMood', mood)
  }, [enabled, mood])

  /* CLICK OUTSIDE */
  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <>
      <audio ref={audioRef} loop />

      <div ref={wrapperRef} className="relative pointer-events-auto flex items-center group">

        {/* PING EFFECT TO ATTRACT ATTENTION WHEN MUTED */}
        {!enabled && !open && mounted && (
          <div className="absolute inset-0 rounded-full bg-violet-500/30 animate-ping pointer-events-none" style={{ animationDuration: '2.5s' }} />
        )}

        {/* DISK + CIRCULAR TEXT */}
        <button
          onClick={() => setOpen(!open)}
          className={`
            relative w-20 h-20 rounded-full
            bg-gradient-to-br from-neutral-800 via-neutral-900 to-black
            border ${enabled ? 'border-violet-500/50' : 'border-white/20'}
            flex items-center justify-center
            transition-all duration-300
            hover:scale-105 hover:border-white/40
            ${enabled ? 'animate-spin-slow shadow-[0_0_30px_rgba(124,58,237,0.5)]' : 'shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]'}
          `}
        >
          {/* CENTER RECORD LABEL / ICON */}
          <div className={`
            w-7 h-7 rounded-full flex items-center justify-center z-10 
            transition-all duration-300 border
            ${enabled 
              ? 'bg-violet-600 border-violet-400 shadow-[0_0_15px_rgba(124,58,237,0.8)]' 
              : 'bg-neutral-800 border-neutral-600 group-hover:bg-neutral-700'
            }
          `}>
            {enabled ? (
              <Music size={12} className="text-white animate-pulse" />
            ) : (
              <VolumeX size={12} className="text-neutral-400 group-hover:text-white transition-colors" />
            )}
          </div>

          {/* CIRCULAR TEXT */}
          <svg
            viewBox="0 0 100 100"
            className={`absolute inset-0 ${enabled ? '' : 'animate-spin-very-slow'}`}
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50
                   m -36, 0
                   a 36,36 0 1,1 72,0
                   a 36,36 0 1,1 -72,0"
              />
            </defs>
            <text fill={enabled ? "rgba(167, 139, 250, 0.8)" : "rgba(255,255,255,0.6)"} fontSize="13" letterSpacing="1.5" fontWeight="500">
              <textPath href="#circlePath">
                • PLAY MUSIC • CLICK ME • SET MOOD
              </textPath>
            </text>
          </svg>

          {/* VINYL GROOVES */}
          <div className="absolute inset-0 rounded-full border border-white/5 m-2 pointer-events-none" />
          <div className="absolute inset-0 rounded-full border border-white/5 m-4 pointer-events-none" />
        </button>

        {/* RIGHT SIDE MENU */}
        {open && (
          <div
            className="
              absolute left-full top-1/2 -translate-y-1/2 ml-4
              w-56
              rounded-2xl bg-black/80 backdrop-blur-xl
              border border-white/10 p-4 space-y-3
            "
          >
            {/* SOUND TOGGLE */}
            <button
              onClick={() => setEnabled(!enabled)}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
            >
              {enabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              {enabled ? 'Playing' : 'Muted'}
            </button>

            <div className="h-px bg-white/10" />

            {/* TRACKS */}
            {Object.entries(MOODS).map(([key, item]) => (
              <button
                key={key}
                onClick={() => {
                  setMood(key)
                  setEnabled(true)
                  setOpen(false)
                }}
                className={`
                  w-full flex items-center justify-between
                  text-sm px-3 py-2 rounded-lg transition
                  ${mood === key
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                  }
                `}
              >
                <span>{item.label}</span>
                {mood === key && <span className="text-xs text-white/40">Now</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinVerySlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 6s linear infinite;
        }
        .animate-spin-very-slow {
          animation: spinVerySlow 18s linear infinite;
        }
      `}</style>
    </>
  )
}

export default MoodSound
