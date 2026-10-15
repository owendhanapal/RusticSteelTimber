import React from 'react';
import { Reveal } from '../ui/Reveal';

export const AboutSection = () => {
    return (
        <section className="py-24 relative overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <Reveal direction="left" className="space-y-6">
                        <div className="inline-block px-3 py-1 border border-primary text-primary text-xs font-bold tracking-widest uppercase">
                            About Us
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Where Rustic Meets <span className="text-primary">Modern</span>
                        </h2>

                        <div className="space-y-5 text-lg text-slate-400 leading-relaxed">
                            <p>
                                At Rustic Steel and Timber, we believe exceptional spaces have the power to bring people together, create lasting memories, and enhance the way people live.
                            </p>
                            <p>
                                Founded on the principles of quality craftsmanship, integrity, and faith, we specialise in premium renovations, custom cabinetry, outdoor entertainment areas, architectural features, and steel, timber, and composite solutions. From luxury kitchens and bathroom renovations to bespoke outdoor living spaces and complete property transformations, we are passionate about turning ideas into reality.
                            </p>
                            <p>
                                Our approach is simple: listen carefully, plan thoroughly, and execute with excellence. We take pride in delivering solutions that are not only visually impressive but also practical, durable, and built to stand the test of time.
                            </p>
                            <p>
                                More than just builders, we are creators of spaces where families gather, friends connect, and memories are made. Every project is approached with professionalism, attention to detail, and a commitment to exceeding expectations.
                            </p>
                            <p>
                                Guided by our Christian values, we strive to honour God through honest workmanship, meaningful relationships, and service that reflects excellence in everything we do.
                            </p>
                            <p>
                                Whether you're renovating your home, creating an outdoor entertainment area, upgrading your property, or bringing a custom vision to life, our team is ready to help.
                            </p>
                        </div>

                        <p className="text-2xl md:text-3xl font-serif italic text-primary pt-2">
                            Let's bring your vision to life.
                        </p>
                    </Reveal>

                    <Reveal direction="right" className="relative group lg:sticky lg:top-28">
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
