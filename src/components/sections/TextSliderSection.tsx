import React from 'react';
import { motion } from 'motion/react';

const phrases = [
    "Where rustic craftsmanship meets modern design.",
];

export const TextSliderSection = () => {
    return (
        <section className="py-24 bg-background-dark overflow-hidden relative border-y border-primary/10 flex items-center">
            {/* Gradient overlays to fade the edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background-dark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background-dark to-transparent z-10 pointer-events-none"></div>

            <motion.div
                className="flex whitespace-nowrap gap-16 items-center px-8"
                animate={{
                    x: [0, -2000],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30, // Adjust this value to make it slide faster or slower
                        ease: "linear",
                    },
                }}
            >
                {/* We render the array multiple times to ensure the screen is always filled */}
                {[...phrases, ...phrases, ...phrases, ...phrases].map((text, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-16 group"
                    >
                        <span className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400 transition-all duration-500 hover:from-primary hover:to-yellow-600 gold-shimmer">
                            {text}
                        </span>
                        <span className="material-symbols-outlined text-primary text-4xl md:text-5xl opacity-30">
                            architecture
                        </span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

