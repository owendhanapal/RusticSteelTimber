import React from 'react';
import { Reveal } from '../ui/Reveal';

export const AboutSection = () => {
    return (
        <section className="py-24 relative overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <Reveal direction="left" className="space-y-8">
                        <div className="inline-block px-3 py-1 border border-primary text-primary text-xs font-bold tracking-widest uppercase">
                            Our Story
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Crafting Legacies in <span className="text-primary">Steel and Wood</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            Rustic Steel and Timber is a renovation and construction company specialising in high-quality residential and commercial upgrades. Our services include full bathroom and bedroom renovations, building alterations, waterproofing and roof repairs, painting, decking, and custom steel and timber fabrication.
                        </p>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            We focus on delivering durable workmanship, practical design solutions, and reliable project execution from demolition and preparation to final installation.
                        </p>
                    </Reveal>
                    <Reveal direction="right" className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-slate-400 rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700"></div>
                        <img
                            src="/images/Sparks.png"
                            alt="Welding Sparks"
                            loading="lazy"
                            decoding="async"
                            className="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/5] lg:aspect-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
