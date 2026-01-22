import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

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

  /* LOAD SAVED STATE */
  useEffect(() => {
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
      audioRef.current.play().catch(() => {})
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

      <div ref={wrapperRef} className="relative pointer-events-auto flex items-center">

        {/* DISK + CIRCULAR TEXT */}
        <button
          onClick={() => setOpen(!open)}
          className={`
            relative w-20 h-20 rounded-full
            bg-linear-to-br from-neutral-800 to-neutral-950
            border border-white/15
            flex items-center justify-center
            transition
            hover:scale-105
            ${enabled ? 'animate-spin-slow shadow-[0_0_30px_rgba(124,58,237,0.5)]' : ''}
          `}
        >
          {/* CENTER HOLE */}
          <div className="w-2 h-2 rounded-full bg-neutral-300/80 z-10" />

          {/* CIRCULAR TEXT */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 animate-spin-very-slow"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50
                   m -35, 0
                   a 35,35 0 1,1 70,0
                   a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text fill="rgba(255,255,255,0.35)" fontSize="14" letterSpacing="2">
              <textPath href="#circlePath">
                MOOD • SOUND • PLAY • MOOD • SOUND • PLAY •
              </textPath>
            </text>
          </svg>
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
                  ${
                    mood === key
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
