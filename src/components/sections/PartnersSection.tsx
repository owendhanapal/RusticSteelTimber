import React from 'react';
import { Reveal } from '../ui/Reveal';

export const PartnersSection = () => {
    return (
        <section className="py-24 bg-background-dark/50" id="partners">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter gold-shimmer">Our Partners</h2>
                    <div className="h-1 w-20 bg-primary mx-auto opacity-50"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
                    {["factory", "foundation", "handyman", "home_work", "engineering", "architecture"].map((icon, i) => (
                        <Reveal key={i} direction="up" delay={i * 0.1} className="flex justify-center group">
                            <span className="material-symbols-outlined text-6xl text-slate-600 grayscale group-hover:grayscale-0 group-hover:text-primary transition-all duration-500">{icon}</span>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
