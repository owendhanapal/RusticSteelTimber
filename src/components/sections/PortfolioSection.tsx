import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../ui/Reveal';
import { projects, Project } from '../../data/portfolioData';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectGallery } from '../ui/ProjectGallery';

export const PortfolioSection = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Show only the first 3 projects on the homepage
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="py-24" id="portfolio">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Project <span className="text-primary">Portfolio</span></h2>
                        <p className="text-slate-400 mt-4 max-w-xl">A showcase of our recent works blending the industrial and the organic.</p>
                    </div>
                    <Link to="/portfolio" className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2 group">
                        View All Projects <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project, index) => (
                        <Reveal key={project.id} direction="zoom" delay={0.1 + index * 0.2}>
                            <ProjectCard 
                                project={project} 
                                onClick={(p) => setSelectedProject(p)} 
                            />
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Lightbox Gallery Modal */}
            {selectedProject && (
                <ProjectGallery 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </section>
    );
};
