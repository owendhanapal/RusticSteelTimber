import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { ProjectGallery } from './ProjectGallery';
import { projects as allProjects, Project } from '../../data/portfolioData';

interface ProjectShowcaseProps {
    projects?: Project[];
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects = allProjects }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="space-y-24 md:space-y-32">
            {projects.map((project, index) => {
                const reversed = index % 2 === 1;
                const extra = project.images.length - 1;

                return (
                    <div
                        key={project.id}
                        className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                    >
                        {/* Image */}
                        <Reveal
                            direction={reversed ? "right" : "left"}
                            className={`relative ${reversed ? "lg:order-2" : ""}`}
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedProject(project)}
                                aria-label={`Open ${project.title} gallery`}
                                className="group relative block w-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background-dark rounded-[2rem]"
                            >
                                <div className="absolute -inset-3 bg-gradient-to-tr from-primary to-slate-500 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700"></div>
                                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 group-hover:border-primary/40 shadow-2xl transition-colors duration-500">
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {extra > 0 && (
                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10 text-white">
                                            <span className="material-symbols-outlined text-[16px]">photo_library</span>
                                            <span className="text-xs font-medium tracking-wide">{project.images.length} Photos</span>
                                        </div>
                                    )}

                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                        <span className="material-symbols-outlined text-[18px]">zoom_in</span> View
                                    </div>
                                </div>
                            </button>
                        </Reveal>

                        {/* Text */}
                        <Reveal
                            direction={reversed ? "left" : "right"}
                            className={reversed ? "lg:order-1" : ""}
                        >
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                                {project.category}
                            </span>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{project.title}</h3>
                            <p className="text-lg text-slate-400 leading-relaxed mb-8">{project.description}</p>
                            <button
                                type="button"
                                onClick={() => setSelectedProject(project)}
                                className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group/btn"
                            >
                                View Project
                                <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </Reveal>
                    </div>
                );
            })}

            {selectedProject && (
                <ProjectGallery
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
};
