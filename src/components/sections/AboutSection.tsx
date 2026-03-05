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
                            At Rustic Steel and Timber, we bridge the gap between industrial strength and organic warmth. Our philosophy is simple: celebrate the raw beauty of natural materials while utilizing modern engineering techniques.
                        </p>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            Every joint we weld and every beam we carve is a testament to our commitment to durability and aesthetic excellence. We don't just build structures; we create environments that inspire.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div>
                                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-1">250+</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500">Projects Completed</div>
                            </div>
                        </div>
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
