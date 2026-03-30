import React, { useState } from 'react';
import { Project } from '../../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative group cursor-pointer w-full aspect-[4/3] perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(project)}
    >
      {/* Background "Stacked" Images for Filmstrip Effect */}
      {project.images.length > 2 && (
        <div 
          className="absolute inset-x-4 top-4 bottom-[-16px] bg-slate-800 rounded-lg shadow-xl shadow-black/50 transition-transform duration-500 ease-out border border-white/5"
          style={{ 
            transform: isHovered ? 'translateY(12px) scale(0.92) rotate(-2deg)' : 'translateY(8px) scale(0.95)',
            zIndex: 1 
          }}
        />
      )}
      {project.images.length > 1 && (
        <div 
          className="absolute inset-x-2 top-2 bottom-[-8px] bg-slate-700 rounded-lg shadow-xl shadow-black/50 transition-transform duration-500 ease-out border border-white/10"
          style={{ 
            transform: isHovered ? 'translateY(6px) scale(0.96) rotate(1deg)' : 'translateY(4px) scale(0.98)',
            zIndex: 2 
          }}
        />
      )}

      {/* Main Cover Image */}
      <div 
        className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl transition-all duration-500 border border-white/10 group-hover:border-primary/50 group-hover:shadow-primary/20"
        style={{ 
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          zIndex: 3 
        }}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Always-visible Photo Count Badge */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10 text-white shadow-lg">
          <span className="material-symbols-outlined text-[16px]">photo_library</span>
          <span className="text-xs font-medium tracking-wide">{project.images.length} Photos</span>
        </div>

        {/* Persistent bottom info bar */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300">
          <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h4>
          <p className="text-slate-300 text-sm flex items-center gap-1">
             <span className="material-symbols-outlined text-[14px]">location_on</span>
             {project.location}
          </p>
          
          {/* View Gallery text that appears on hover */}
          <div 
            className="flex items-center gap-2 mt-4 text-primary font-semibold text-sm uppercase tracking-wider overflow-hidden transition-all duration-300"
            style={{ 
              maxHeight: isHovered ? '40px' : '0px', 
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(10px)'
            }}
          >
            Open Gallery <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  );
};
