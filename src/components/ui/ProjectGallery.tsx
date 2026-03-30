import React, { useEffect } from 'react';
import { Project } from '../../data/portfolioData';

interface ProjectGalleryProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Close gallery on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Restore scrolling
    };
  }, [project, currentIndex]);

  if (!project) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Prevent clicks inside the modal from closing it
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-[110] text-slate-400 hover:text-white bg-black/50 hover:bg-black/80 p-2 rounded-full backdrop-blur-md transition-all border border-white/10"
        title="Close Gallery (Esc)"
      >
        <span className="material-symbols-outlined text-3xl">close</span>
      </button>

      {/* Project Info Header */}
      <div className="absolute top-6 left-6 z-[110] max-w-sm pointer-events-none">
        <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">{project.title}</h2>
        <p className="text-primary font-medium flex items-center gap-1 drop-shadow-md">
          <span className="material-symbols-outlined text-[16px]">location_on</span>
          {project.location}
        </p>
      </div>

      <div 
        className="relative w-full max-w-6xl aspect-[16/10] sm:aspect-video bg-neutral-dark/50 rounded-lg overflow-hidden flex items-center justify-center shadow-2xl"
        onClick={handleModalClick}
      >
        {/* Loading placeholder or background for the image */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
           <span className="material-symbols-outlined animate-spin text-4xl text-primary/50">sync</span>
        </div>

        <img
          key={currentIndex} // Force re-render/animation on index change
          src={project.images[currentIndex]}
          alt={`${project.title} - Image ${currentIndex + 1}`}
          loading="lazy"
          className="w-full h-full object-contain animate-fadeIn"
          referrerPolicy="no-referrer"
        />

        {/* Navigation Arrows (Only show if multiple images) */}
        {project.images.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all border border-white/10 hover:border-primary group"
              title="Previous (Left Arrow)"
            >
              <span className="material-symbols-outlined text-3xl group-hover:-translate-x-1 transition-transform">chevron_left</span>
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all border border-white/10 hover:border-primary group"
              title="Next (Right Arrow)"
            >
              <span className="material-symbols-outlined text-3xl group-hover:translate-x-1 transition-transform">chevron_right</span>
            </button>
          </>
        )}

        {/* Thumbnails indicator / Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
          <span className="text-white text-sm font-medium">
            {currentIndex + 1} / {project.images.length}
          </span>
          <div className="hidden sm:flex items-center gap-1.5 ml-3 pl-3 border-l border-white/20">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
