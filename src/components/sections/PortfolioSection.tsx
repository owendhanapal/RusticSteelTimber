import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectShowcase } from '../ui/ProjectShowcase';
import { projects } from '../../data/portfolioData';

export const PortfolioSection = () => {
    return (
        <section className="py-24" id="portfolio">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Project <span className="text-primary">Portfolio</span></h2>
                        <p className="text-slate-400 mt-4 max-w-xl">A showcase of our recent works blending the industrial and the organic.</p>
                    </div>
                    <Link to="/portfolio" className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2 group">
                        View All Projects <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>

                <ProjectShowcase projects={projects} />
            </div>
        </section>
    );
};
