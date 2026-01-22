import { useEffect, useState } from "react"
import { Hand } from "lucide-react"

const greetings = [
  "Hey",
  "Namaste",
  "Namaskar",
  "Hola",
  "Konnichiwa"
]

const Greeting = () => {
  const [greetingIndex, setGreetingIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <p className="flex items-center gap-2 text-sm text-gray-300 mb-6">
      {/* ICON */}
      <span className="wave-icon text-purple-400">
        <Hand size={16} strokeWidth={2} />
      </span>

      {/* TEXT */}
      <span key={greetingIndex} className="animate-fadeIn">
        {greetings[greetingIndex]}! It’s me Kshitij,
      </span>
    </p>
  )
}

export default Greeting
