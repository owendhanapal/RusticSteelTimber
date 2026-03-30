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
                        <h3 className="text-2xl font-bold mb-4">Full Home & Interior Renovations</h3>
                        <p className="text-slate-400 mb-6">Complete transformation of residential and commercial interiors including structural alterations, layout improvements, ceilings, plastering, tiling, painting, and finishing.</p>
                        <div className="spark spark-1"></div><div className="spark spark-2"></div><div className="spark spark-3"></div><div className="spark spark-4"></div>
                    </Reveal>
                    <Reveal direction="up" delay={0.3} className="p-10 border border-primary/10 bg-background-dark hover:border-primary/50 transition-all group expertise-card">
                        <span className="material-symbols-outlined text-primary text-5xl mb-6 block group-hover:scale-110 transition-transform">forest</span>
                        <h3 className="text-2xl font-bold mb-4">Luxury Bathroom Renovations</h3>
                        <p className="text-slate-400 mb-6">High-end bathroom upgrades from demolition to final installation including waterproofing, tiling, plumbing preparation, and premium finishes.</p>
                        <div className="spark spark-1"></div><div className="spark spark-2"></div><div className="spark spark-3"></div><div className="spark spark-4"></div>
                    </Reveal>
                    <Reveal direction="up" delay={0.5} className="p-10 border border-primary/10 bg-background-dark hover:border-primary/50 transition-all group expertise-card">
                        <span className="material-symbols-outlined text-primary text-5xl mb-6 block group-hover:scale-110 transition-transform">architecture</span>
                        <h3 className="text-2xl font-bold mb-4">Custom Steel & Timber Fabrication</h3>
                        <p className="text-slate-400 mb-6">Bespoke steel and timber features including gates, pergolas, railings, structural elements, feature installations, and custom-built architectural pieces.</p>
                        <div className="spark spark-1"></div><div className="spark spark-2"></div><div className="spark spark-3"></div><div className="spark spark-4"></div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
