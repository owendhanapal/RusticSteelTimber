import React, { useState } from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';
import { projects, Project } from '../data/portfolioData';
import { ProjectCard } from '../components/ui/ProjectCard';
import { ProjectGallery } from '../components/ui/ProjectGallery';

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <main className="pt-20">
            {/* Portfolio Header */}
            <section className="py-24 bg-neutral-dark/30 border-b border-primary/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">Our <span className="text-primary">Portfolio</span></h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Explore our complete collection of architectural masterpieces, where raw industrial strength meets the warmth of natural design.
                    </p>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard 
                              key={project.id} 
                              project={project} 
                              onClick={(p) => setSelectedProject(p)} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Gallery Modal */}
            {selectedProject && (
                <ProjectGallery 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </main>
    );
};
