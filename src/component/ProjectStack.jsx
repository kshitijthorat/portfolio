import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const items = [
    { id: 1, title: "Mojave", desc: "A deep dive into desert-inspired minimal interfaces.", img: "https://picsum.photos/1200/800?random=1" },
    { id: 2, title: "Sonoma", desc: "Elegant e-commerce experience for premium wineries.", img: "https://picsum.photos/1200/800?random=2" },
];

export default function ProjectStack() {
    return (
        <div className="relative w-full min-h-[400vh] bg-black">
            <ScrollStack
                useWindowScroll={true}
                itemStackDistance={40}
                stackPosition="15%"
                itemScale={0.04}
                baseScale={0.88}
                blurAmount={4}
            >
                <div className="mb-32 text-center">
                    <p className="text-sm text-blue-400 uppercase tracking-[0.3em] font-medium mb-4">Our Showcase</p>
                    <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter italic">Featured<br />Projects</h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                {items.map((project, i) => (
                    <ScrollStackItem
                        key={project.id}
                        itemClassName="bg-[#0a0a0a] border border-white/5 overflow-hidden !h-[550px] !p-0 rounded-[48px] shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                    >
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="w-full md:w-[45%] flex flex-col justify-center p-12 md:p-16 gap-8">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-blue-500 font-mono text-xl">0{i + 1}</span>
                                    <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">{project.title}</h2>
                                </div>
                                <p className="text-xl text-gray-400 leading-relaxed font-light">{project.desc}</p>
                                <button className="group w-fit flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
                                    View Project
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </button>
                            </div>

                            <div className="relative w-full md:w-[55%] h-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none hidden md:block"></div>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                                />
                            </div>
                        </div>
                    </ScrollStackItem>
                ))}
            </ScrollStack>
        </div>
    )
}
