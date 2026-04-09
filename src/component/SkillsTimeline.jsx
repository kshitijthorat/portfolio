import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const SkillsTimeline = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".timeline-item")
      const skillTags = gsap.utils.toArray(".skill-tag")

      // Animate each timeline item on scroll
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 60, filter: "blur(4px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=10%",
              end: "top center",
              scrub: true,
            },
          }
        )
      })

      // Animate skill tags
      gsap.fromTo(
        skillTags,
        { opacity: 0, y: 30, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".skills-section",
            start: "top bottom-=10%",
            end: "top center",
            scrub: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const journey = [
    {
      year: "2024",
      title: "HTML & CSS",
      description:
        "Started with the basics. Built my first static websites and learned layout, responsiveness, and design fundamentals."
    },
    {
      year: "2025",
      title: "JavaScript",
      description:
        "Moved into interactivity — DOM manipulation, events, basic logic, and small dynamic projects."
    },
    {
      year: "2026",
      title: "React",
      description:
        "Diving deep into React, components, state management, animations, and building real-world projects like this portfolio."
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32">

      {/* SECTION TITLE */}
      <div className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
          My Learning Journey
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Not a checklist — a timeline of growth, curiosity, and continuous learning.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-4xl mx-auto px-6">

        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-20">

          {journey.map((item, index) => (
            <div key={index} className="timeline-item relative flex flex-col md:flex-row md:items-center">

              {/* DOT */}
              <div className="absolute left-4 w-3 h-3 rounded-full bg-[#A996F0] 
                              md:left-1/2 md:-translate-x-1/2 shadow-[0_0_20px_rgba(169,150,240,0.6)]" />

              {/* CONTENT */}
              <div
                className={`mt-6 md:mt-0 md:w-1/2 ${index % 2 === 0
                    ? "md:pr-16 md:text-right md:ml-auto"
                    : "md:pl-16"
                  }`}
              >
                <span className="text-sm uppercase tracking-widest text-[#A996F0]">
                  {item.year}
                </span>

                <h3 className="mt-2 text-2xl md:text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* CURRENT SKILLS */}
        <div className="skills-section mt-28 text-center">
          <span className="text-sm uppercase tracking-widest text-gray-500">
            Current Focus
          </span>

          <h3 className="mt-4 text-3xl md:text-4xl font-black">
            Comfortable Working With
          </h3>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map(
              (skill, idx) => (
                <span
                  key={idx}
                  className="skill-tag px-5 py-2 rounded-full border border-white/15 
                             bg-white/5 backdrop-blur text-sm"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

export default SkillsTimeline
