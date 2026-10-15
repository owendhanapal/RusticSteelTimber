import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export const HeroSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // React sets `muted` as a property but not the attribute, which some browsers'
    // autoplay policies ignore — so force it and start playback ourselves.
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = true;
        video.defaultMuted = true;
        video.setAttribute('muted', '');

        // Autoplay can start before React attaches handlers, so listen directly.
        const reveal = () => setIsPlaying(true);
        if (!video.paused && video.currentTime > 0) reveal();
        video.addEventListener('playing', reveal);
        video.addEventListener('timeupdate', reveal, { once: true });
        video.play().catch(() => {});
        return () => {
            video.removeEventListener('playing', reveal);
            video.removeEventListener('timeupdate', reveal);
        };
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="home">
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    className={`w-full h-full object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
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
                    <span className="px-4 text-primary font-bold tracking-[0.3em] uppercase text-xs">EST. 2023</span>
                    <div className="h-[1px] w-12 bg-primary self-center"></div>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-bold tracking-tight gold-shimmer mb-4 leading-[0.9]"
                >
                    Rustic Steel <br /> and Timber
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
                    <button className="px-10 py-4 bg-primary text-background-dark font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(232,170,7,0.4)]">
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
