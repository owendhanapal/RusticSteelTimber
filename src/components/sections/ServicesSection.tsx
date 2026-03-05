import React from 'react';
import { Reveal } from '../ui/Reveal';

export const ServicesSection = () => {
    return (
        <section className="py-24 bg-neutral-dark/30" id="services">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Our <span className="text-primary">Expertise</span></h2>
                    <div className="h-1 w-20 bg-primary mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <Reveal direction="up" delay={0.1} className="p-10 border border-primary/10 bg-background-dark hover:border-primary/50 transition-all group expertise-card">
                        <span className="material-symbols-outlined text-primary text-5xl mb-6 block group-hover:scale-110 transition-transform">precision_manufacturing</span>
                        <h3 className="text-2xl font-bold mb-4">Steel Fabrication</h3>
                        <p className="text-slate-400 mb-6">Precision industrial forging for architectural features, structural frames, and bespoke metalwork that lasts a lifetime.</p>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li className="flex items-center gap-2"><span className="text-primary">•</span> Structural Steel</li>
                            <li className="flex items-center gap-2"><span className="text-primary">•</span> Custom Staircases</li>
                            <li className="flex items-center gap-2"><span className="text-primary">•</span> Industrial Furniture</li>
                        </ul>
                        <div className="spark spark-1"></div><div className="spark spark-2"></div><div className="spark spark-3"></div><div className="spark spark-4"></div>
                    </Reveal>
                    <Reveal direction="up" delay={0.3} className="p-10 border border-primary/10 bg-background-dark hover:border-primary/50 transition-all group expertise-card">
                        <span className="material-symbols-outlined text-primary text-5xl mb-6 block group-hover:scale-110 transition-transform">forest</span>
                        <h3 className="text-2xl font-bold mb-4">Timber Structures</h3>
                        <p className="text-slate-400 mb-6">Expertly sourced and carved timber frameworks that bring warmth and natural elegance to any modern space.</p>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li className="flex items-center gap-2"><span className="text-primary">•</span> Heavy Timber Framing</li>
                            <li className="flex items-center gap-2"><span className="text-primary">•</span> Exposed Beam Design</li>
                            <li className="flex items-center gap-2"><span className="text-primary">•</span> Pergolas & Pavilions</li>
                        </ul>
                        <div className="spark spark-1"></div><div className="spark spark-2"></div><div className="spark spark-3"></div><div className="spark spark-4"></div>
                    </Reveal>
                    <Reveal direction="up" delay={0.5} className="p-10 border border-primary/10 bg-background-dark hover:border-primary/50 transition-all group expertise-card">
                        <span className="material-symbols-outlined text-primary text-5xl mb-6 block group-hover:scale-110 transition-transform">architecture</span>
                        <h3 className="text-2xl font-bold mb-4">Custom Constructions</h3>
                        <p className="text-slate-400 mb-6">Bespoke architectural projects where we combine steel and wood into unique, functional art for your property.</p>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li className="flex items-center gap-2"><span className="text-primary">•</span> Hybrid Construction</li>
                            <li className="flex items-center gap-2"><span className="text-primary">•</span> Modern Cabins</li>
                            <li className="flex items-center gap-2"><span className="text-primary">•</span> Feature Entrances</li>
                        </ul>
                        <div className="spark spark-1"></div><div className="spark spark-2"></div><div className="spark spark-3"></div><div className="spark spark-4"></div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
