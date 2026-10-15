import React from 'react';
import { ProjectShowcase } from '../components/ui/ProjectShowcase';

export const Portfolio = () => {
    return (
        <main className="pt-20">
            {/* Portfolio Header */}
            <section className="py-24 bg-neutral-dark/30 border-b border-primary/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">Our <span className="text-primary">Portfolio</span></h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Explore our recent work, where raw industrial strength meets the warmth of natural design.
                    </p>
                </div>
            </section>

            {/* Portfolio Showcase */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <ProjectShowcase />
                </div>
            </section>
        </main>
    );
};
