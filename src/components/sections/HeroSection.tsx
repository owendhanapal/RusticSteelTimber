import React from 'react';
import { motion } from 'motion/react';

export const HeroSection = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="home">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Modern rustic architecture"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDreQ6sLZQqCgVRqNXK2Z2f4odXpULizpuRk0tXbuaLbzZ1peq-rPctlUHBXU0oeXxPAjdNlLYGmR7-u5GKbdwed7rwq1y07uDa4MKPIbCZ8Eb-i9LBvzaK3cb0x6eOGGP8qv8gfQFZ6sfb0k3K08zdvNfn4oPDnAtvFstyvXc4r08CVgtfmWNLLKvwrkYd683nep9DQzP6Ivp36pfrrhWuLUNMYR7dxQ8pmP1WAv2dchFf7HjbK6RxYhrHUcXpmpGt6ZqXWAAhaiGD"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/30"></div>
            </div>
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 flex justify-center"
                >
                    <div className="h-[1px] w-12 bg-primary self-center"></div>
                    <span className="px-4 text-primary font-bold tracking-[0.3em] uppercase text-xs">EST. 2009</span>
                    <div className="h-[1px] w-12 bg-primary self-center"></div>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter gold-shimmer mb-4 uppercase leading-[0.85]"
                >
                    Rustic Steel <br /> & Timber
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex items-center justify-center gap-4 mb-12"
                >
                    <div className="h-[1px] flex-1 max-w-[100px] bg-slate-500/50"></div>
                    <p className="text-lg md:text-2xl font-serif italic text-slate-200 tracking-wide">
                        Where Rustic Meets Modern
                    </p>
                    <div className="h-[1px] flex-1 max-w-[100px] bg-slate-500/50"></div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <button className="px-10 py-4 bg-primary text-background-dark font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(212,175,53,0.4)]">
                        Request a Quote
                    </button>
                    <button className="px-10 py-4 border border-white/30 text-white font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-background-dark">
                        Our Gallery
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
