import React from 'react'
import Navbar from '../component/Navbar'
import DarkVeil from '../component/DarkVeil'
import Greeting from '../component/Greeting'
import DecryptedText from '../component/DecryptedText'
import ScrollVelocity from '../component/ScrollVelocity'
import GradientText from '../component/GradientText'
import TextType from '../component/TextType'
import MoodSound from '../component/MoodSound'
import ScrollReveal from '../component/ScrollReveal'

const Home = () => {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen overflow-x-hidden rounded-b-3xl isolate">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <DarkVeil />
        </div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 pt-32">
          
          <Greeting />

          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl text-[#F5F7FA]">
            Blending{" "}
            <DecryptedText
              text="design,"
              className="mix-blend-soft-light text-white"
              speed={60}
              sequential
              revealDirection="start"
              once
              animateOn="hover"
            />
            <br />
            <DecryptedText
              text="code & motion"
              className="mix-blend-soft-light text-white"
              speed={60}
              sequential
              revealDirection="start"
              once
              animateOn="hover"
            />{" "}
            into meaningful experiences.
          </h1>

          <p className="mt-8 max-w-xl text-gray-400 text-sm md:text-base">
            I build modern, user-focused digital experiences with clean design,
            smooth motion, and scalable code.
          </p>

          <div className="mt-10 flex items-center gap-4">
  <span className="text-sm uppercase tracking-widest text-gray-500">
    Set the mood
  </span>

  <div className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition pointer-events-auto">
    <MoodSound />
  </div>
</div>
        </div>

        {/* SCROLL VELOCITY */}
        <div className="mt-20 mb-10">
          <ScrollVelocity
            texts={['Design • Performance • Innovation']}
            velocity={20}
            className="text-white"
            parallaxClassName="w-full"
            scrollerClassName="gap-8"
          />
        </div>
        <div>
          <GradientText
          colors={["#5B4CF2", "#FF9FDB", "#A996F0"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class ">
          Get to Know Me
        </GradientText>
        </div>
      </section>

      {/* ABOUT SECTION */}
<section className="relative w-full py-32">
  <div className="max-w-5xl mx-auto ">

    {/* SCRAMBLED TEXT */}
    <ScrollReveal
  baseOpacity={0.1}
  enableBlur
  baseRotation={3}
  blurStrength={0}
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal>

  </div>
</section>

    </div>
  )
}

export default Home
